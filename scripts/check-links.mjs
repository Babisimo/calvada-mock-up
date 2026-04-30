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

function extractUrls(node, path, out, entity, label) {
    if (node == null) return;
    if (typeof node === 'string') {
        const matches = node.match(/https?:\/\/[^\s"'<>)]+/g);
        if (matches) for (const url of matches) out.push({ url: url.replace(/[.,;]+$/, ''), path, entity, label: label || '' });
        return;
    }
    if (Array.isArray(node)) {
        node.forEach((item, i) => extractUrls(item, `${path}[${i}]`, out, entity, label));
        return;
    }
    if (typeof node === 'object') {
        const localLabel = (typeof node.label === 'string' && node.label)
            || (typeof node.title === 'string' && node.title)
            || label;
        for (const [k, v] of Object.entries(node)) extractUrls(v, path ? `${path}.${k}` : k, out, entity, localLabel);
    }
}

function entityLabel(item, i) {
    if (item && typeof item === 'object') {
        return item.name || item.id || item.title || item.category || `[${i}]`;
    }
    return `[${i}]`;
}

const STATE_PREFIXES = {
    california: 'California',
    arizona: 'Arizona',
    nevada: 'Nevada',
    texas: 'Texas',
    washington: 'Washington',
};

function parseFile(filename) {
    const base = filename.replace(/\.json$/, '');
    for (const [prefix, state] of Object.entries(STATE_PREFIXES)) {
        if (base.startsWith(prefix + '_')) {
            return { state, type: base.slice(prefix.length + 1) };
        }
    }
    if (base === 'caltrans_districts') return { state: 'California', type: 'caltrans districts' };
    if (base === 'global_links') return { state: '—', type: 'global links' };
    return { state: '—', type: base };
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

const REPORT_HEADER = ['status', 'http_code', 'error', 'state', 'type', 'entity', 'label', 'url', 'data_file', 'json_path'];

async function writeCsv(rows, stamp) {
    const file = join(REPORT_DIR, `link-check-${stamp}.csv`);
    const lines = [REPORT_HEADER.join(',')];
    for (const row of rows) lines.push(REPORT_HEADER.map(h => csvEscape(row[h])).join(','));
    // Prepend UTF-8 BOM so Excel opens it with correct encoding.
    await writeFile(file, '﻿' + lines.join('\r\n'), 'utf8');
    return file;
}

function htmlEscape(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function writeHtml(rows, stamp) {
    const file = join(REPORT_DIR, `link-check-${stamp}.html`);
    const okCount = rows.filter(r => r.status === 'OK').length;
    const badCount = rows.length - okCount;
    const tbody = rows.map(r => {
        const key = `${r.data_file}::${r.json_path}::${r.url}`;
        return `<tr class="${r.status === 'BROKEN' ? 'bad' : 'ok'}" data-key="${htmlEscape(key)}">
        <td>${r.status}</td>
        <td>${htmlEscape(r.http_code)}</td>
        <td>${htmlEscape(r.error)}</td>
        <td>${htmlEscape(r.state)}</td>
        <td>${htmlEscape(r.type)}</td>
        <td>${htmlEscape(r.entity)}</td>
        <td>${r.label ? `<a href="${htmlEscape(r.url)}" target="_blank" rel="noreferrer">${htmlEscape(r.label)}</a>` : ''}</td>
        <td><a href="${htmlEscape(r.url)}" target="_blank" rel="noreferrer">${htmlEscape(r.url)}</a></td>
        <td>${htmlEscape(r.data_file)}</td>
        <td>${htmlEscape(r.json_path)}</td>
        <td class="fix-cell"><input type="checkbox" class="fix-box" aria-label="Mark fixed"></td>
    </tr>`;
    }).join('\n');

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Link check ${stamp}</title>
<style>
body { font: 14px/1.4 -apple-system, "Segoe UI", Roboto, sans-serif; margin: 20px; color: #222; }
h1 { margin: 0 0 4px; }
.meta { color: #666; margin-bottom: 16px; }
.controls { margin-bottom: 12px; display: flex; gap: 8px; flex-wrap: wrap; }
.controls input, .controls select { padding: 6px 8px; font: inherit; }
table { border-collapse: collapse; width: 100%; }
th, td { border-bottom: 1px solid #eee; padding: 6px 8px; vertical-align: top; text-align: left; }
th { background: #f7f7f7; position: sticky; top: 0; }
tr.bad td:first-child { color: #b00020; font-weight: 600; }
tr.ok td:first-child { color: #0a7c2f; }
tr.fixed { background: #eef7ee; color: #777; }
tr.fixed td:first-child { color: #0a7c2f; font-weight: 600; }
tr.fixed td a { color: #777; text-decoration: line-through; }
td a { color: #0645ad; word-break: break-all; }
td.fix-cell { text-align: center; }
.fix-box { width: 18px; height: 18px; cursor: pointer; }
.count { font-weight: 600; }
</style>
</head>
<body>
<h1>Link check report</h1>
<div class="meta">${stamp} · <span class="count">${badCount}</span> broken / <span class="count">${okCount}</span> OK · ${rows.length} total references</div>
<div class="controls">
    <input id="q" placeholder="Filter (state, entity, url, …)" style="flex:1; min-width: 240px">
    <select id="status">
        <option value="">All statuses</option>
        <option value="BROKEN">Broken only</option>
        <option value="OK">OK only</option>
    </select>
    <select id="state">
        <option value="">All states</option>
    </select>
    <label style="display:flex;align-items:center;gap:6px;"><input type="checkbox" id="hideFixed"> Hide fixed</label>
    <span id="fixedCount" style="color:#666;align-self:center;"></span>
</div>
<table id="t">
<thead><tr>
    <th>Status</th><th>HTTP</th><th>Error</th><th>State</th><th>Type</th><th>Entity</th><th>Label</th><th>URL</th><th>Data file</th><th>JSON path</th><th>Fixed</th>
</tr></thead>
<tbody>
${tbody}
</tbody>
</table>
<script>
const q = document.getElementById('q');
const statusSel = document.getElementById('status');
const stateSel = document.getElementById('state');
const hideFixed = document.getElementById('hideFixed');
const fixedCount = document.getElementById('fixedCount');
const rows = [...document.querySelectorAll('#t tbody tr')];
const states = [...new Set(rows.map(r => r.children[3].textContent))].sort();
for (const s of states) {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    stateSel.appendChild(opt);
}

const STORAGE_KEY = 'calvada-link-check-fixed-v1';
const fixed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify([...fixed])); }
function updateCount() {
    const totalBad = rows.filter(r => r.classList.contains('bad')).length;
    const fixedBad = rows.filter(r => r.classList.contains('bad') && r.classList.contains('fixed')).length;
    fixedCount.textContent = totalBad ? \`· \${fixedBad} of \${totalBad} broken marked fixed\` : '';
}
for (const r of rows) {
    const key = r.dataset.key;
    const cb = r.querySelector('.fix-box');
    if (fixed.has(key)) { cb.checked = true; r.classList.add('fixed'); }
    cb.addEventListener('change', () => {
        if (cb.checked) { fixed.add(key); r.classList.add('fixed'); }
        else { fixed.delete(key); r.classList.remove('fixed'); }
        persist();
        updateCount();
        apply();
    });
}
updateCount();

function apply() {
    const term = q.value.toLowerCase();
    const st = statusSel.value;
    const stateVal = stateSel.value;
    const hide = hideFixed.checked;
    for (const r of rows) {
        const text = r.textContent.toLowerCase();
        const matchTerm = !term || text.includes(term);
        const matchStatus = !st || r.classList.contains(st === 'BROKEN' ? 'bad' : 'ok');
        const matchState = !stateVal || r.children[3].textContent === stateVal;
        const matchFixed = !hide || !r.classList.contains('fixed');
        r.style.display = (matchTerm && matchStatus && matchState && matchFixed) ? '' : 'none';
    }
}
q.addEventListener('input', apply);
statusSel.addEventListener('change', apply);
stateSel.addEventListener('change', apply);
hideFixed.addEventListener('change', apply);
</script>
</body>
</html>`;
    await writeFile(file, html, 'utf8');
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
        const { state, type } = parseFile(file);
        const urls = [];
        if (Array.isArray(json)) {
            json.forEach((item, i) => {
                const ent = entityLabel(item, i);
                extractUrls(item, `[${i}]`, urls, ent, '');
            });
        } else {
            extractUrls(json, '', urls, '', '');
        }
        for (const u of urls) refs.push({ file, state, type, ...u });
    }

    const unique = new Map();
    for (const r of refs) {
        if (!unique.has(r.url)) unique.set(r.url, []);
        unique.get(r.url).push({ file: r.file, state: r.state, type: r.type, entity: r.entity, label: r.label, path: r.path });
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
            rows.push({
                status: r.ok ? 'OK' : 'BROKEN',
                http_code: r.status || '',
                error: r.error || '',
                state: loc.state,
                type: loc.type,
                entity: loc.entity,
                label: loc.label,
                url: r.url,
                data_file: loc.file,
                json_path: loc.path,
            });
        }
    }
    rows.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'BROKEN' ? -1 : 1;
        if (a.state !== b.state) return a.state.localeCompare(b.state);
        if (a.entity !== b.entity) return String(a.entity).localeCompare(String(b.entity));
        return (a.http_code || 0) - (b.http_code || 0);
    });

    await mkdir(REPORT_DIR, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const csvPath = await writeCsv(rows, stamp);
    const htmlPath = await writeHtml(rows, stamp);
    const bad = results.filter(r => !r.ok);

    if (bad.length === 0) {
        console.log(`All ${urlList.length} links OK.`);
    } else {
        console.log(`${bad.length} broken / suspicious link(s):\n`);
        const sortedBad = [...bad].sort((a, b) => (a.status || 0) - (b.status || 0));
        for (const r of sortedBad) {
            const reason = r.error ? r.error : `HTTP ${r.status}`;
            console.log(`  [${reason}] ${r.url}`);
            for (const loc of unique.get(r.url)) {
                const lbl = loc.label ? ` · "${loc.label}"` : '';
                console.log(`      ↳ ${loc.state} / ${loc.type} / ${loc.entity}${lbl}  (${loc.file} :: ${loc.path})`);
            }
        }
        process.exitCode = 1;
    }

    console.log(`\nCSV  report: ${csvPath}`);
    console.log(`HTML report: ${htmlPath}`);
}

main().catch(err => { console.error(err); process.exit(2); });
