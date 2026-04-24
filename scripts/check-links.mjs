#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'src', 'data');
const REPORT_DIR = join(__dirname, '..', 'link-reports');
const CONCURRENCY = 12;
const TIMEOUT_MS = 15000;
const UA = 'Mozilla/5.0 (compatible; CalvadaLinkChecker/1.0)';

function extractUrls(node, path, out) {
    if (node == null) return;
    if (typeof node === 'string') {
        const matches = node.match(/https?:\/\/[^\s"'<>)]+/g);
        if (matches) for (const url of matches) out.push({ url: url.replace(/[.,;]+$/, ''), path });
        return;
    }
    if (Array.isArray(node)) {
        node.forEach((item, i) => extractUrls(item, `${path}[${i}]`, out));
        return;
    }
    if (typeof node === 'object') {
        for (const [k, v] of Object.entries(node)) extractUrls(v, path ? `${path}.${k}` : k, out);
    }
}

async function probe(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
        let res = await fetch(url, {
            method: 'HEAD',
            redirect: 'follow',
            signal: ctrl.signal,
            headers: { 'User-Agent': UA, 'Accept': '*/*' },
        });
        if (res.status === 405 || res.status === 403 || res.status === 400 || res.status === 501) {
            res = await fetch(url, {
                method: 'GET',
                redirect: 'follow',
                signal: ctrl.signal,
                headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
            });
        }
        return { ok: res.ok, status: res.status };
    } catch (err) {
        return { ok: false, status: 0, error: err.name === 'AbortError' ? 'timeout' : err.message };
    } finally {
        clearTimeout(timer);
    }
}

async function runPool(items, worker) {
    const results = new Array(items.length);
    let idx = 0;
    const workers = Array.from({ length: CONCURRENCY }, async () => {
        while (true) {
            const i = idx++;
            if (i >= items.length) return;
            results[i] = await worker(items[i], i);
        }
    });
    await Promise.all(workers);
    return results;
}

function csvEscape(v) {
    const s = v == null ? '' : String(v);
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function writeCsv(rows) {
    await mkdir(REPORT_DIR, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const file = join(REPORT_DIR, `link-check-${stamp}.csv`);
    const header = ['status', 'http_code', 'error', 'url', 'data_file', 'json_path'];
    const lines = [header.join(',')];
    for (const row of rows) lines.push(header.map(h => csvEscape(row[h])).join(','));
    // Prepend UTF-8 BOM so Excel opens it with correct encoding.
    await writeFile(file, '\uFEFF' + lines.join('\r\n'), 'utf8');
    return file;
}

async function main() {
    const files = (await readdir(DATA_DIR)).filter(f => f.endsWith('.json'));
    const refs = [];
    for (const file of files) {
        const content = await readFile(join(DATA_DIR, file), 'utf8');
        let json;
        try { json = JSON.parse(content); }
        catch (e) { console.error(`! ${file}: invalid JSON — ${e.message}`); continue; }
        const urls = [];
        extractUrls(json, '', urls);
        for (const u of urls) refs.push({ file, ...u });
    }

    const unique = new Map();
    for (const r of refs) {
        if (!unique.has(r.url)) unique.set(r.url, []);
        unique.get(r.url).push(`${r.file} :: ${r.path}`);
    }

    const urlList = [...unique.keys()];
    console.log(`Checking ${urlList.length} unique URLs from ${refs.length} references across ${files.length} data files...\n`);

    let done = 0;
    const results = await runPool(urlList, async (url) => {
        const r = await probe(url);
        done++;
        const tag = r.ok ? 'OK ' : 'BAD';
        process.stdout.write(`\r[${done}/${urlList.length}] ${tag} ${r.status || '---'}  ${url.slice(0, 70).padEnd(72)}`);
        return { url, ...r };
    });
    process.stdout.write('\n\n');

    const rows = [];
    for (const r of results) {
        const locs = unique.get(r.url);
        for (const loc of locs) {
            const [data_file, json_path] = loc.split(' :: ');
            rows.push({
                status: r.ok ? 'OK' : 'BROKEN',
                http_code: r.status || '',
                error: r.error || '',
                url: r.url,
                data_file,
                json_path,
            });
        }
    }
    rows.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'BROKEN' ? -1 : 1;
        return (a.http_code || 0) - (b.http_code || 0);
    });

    const csvPath = await writeCsv(rows);
    const bad = results.filter(r => !r.ok);

    if (bad.length === 0) {
        console.log(`All ${urlList.length} links OK.`);
    } else {
        console.log(`${bad.length} broken / suspicious link(s):\n`);
        const sortedBad = [...bad].sort((a, b) => (a.status || 0) - (b.status || 0));
        for (const r of sortedBad) {
            const reason = r.error ? r.error : `HTTP ${r.status}`;
            console.log(`  [${reason}] ${r.url}`);
            for (const loc of unique.get(r.url)) console.log(`      ↳ ${loc}`);
        }
        process.exitCode = 1;
    }

    console.log(`\nReport written: ${csvPath}`);
}

main().catch(err => { console.error(err); process.exit(2); });
