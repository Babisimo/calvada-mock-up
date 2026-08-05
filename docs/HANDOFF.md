# Handoff — Front-End Brand Audit

**Date:** 2026-08-05
**Scope:** Brand audit of research.calvada.com and the remediation that followed.
**Status:** Complete and building clean. **Not visually verified — see [Verify before you ship](#verify-before-you-ship).**

Companion document: [`brand-guidelines.md`](./brand-guidelines.md) is the source of truth for colour, type, shape, and asset rules. This file records *what changed and why*; that file records *what the rules are*.

---

## 1. TL;DR

| | Before | After |
|---|---|---|
| Colour literals in CSS | 37 hardcoded across 13 files | 0 outside `tokens.css` |
| Brand green | 3 competing values, none from the logo | `#0b7f3e`, sampled from the logo master |
| Contrast (AA, 4.5:1) | Titles at 1.45:1 over the photo; hovers at 2.0:1 | 9/9 audited pairs pass |
| Image payload | 2.79 MB | 276 KB (−90%) |
| Dropdowns | Hover only — unreachable by keyboard | Hover, click, `Enter`/`Space`/`ArrowDown` |
| Page titles | Every page "Research Calvada" | Per-page, all 83 routes |
| Backgrounds | One hardcoded photo | Rotating folder, one per visit |

Build: 83 static pages, `out/` is 6.1 MB. Next 16.2.2, Node 24.11.

---

## 2. New commands

```bash
npm run assets           # regenerate logo + backgrounds from src/images/_masters/
npm run check-contrast   # audit palette against every background in rotation
```

Both live in `scripts/`. **`scripts/` is in `.gitignore` (line 32)**, so these two files will not commit as things stand — see §7.

---

## 3. What changed

### 3.1 Design tokens

Everything visual now resolves through `src/styles/tokens.css`, imported first in `app/layout.js`. Colour, radius, shadow, type, spacing, motion, z-index.

The brand green was sampled directly out of `calvada_logo.png` at `#0b7f3e`. The site had been using three different greens, none of them the logo's.

**Retired:** `#634060` (purple), `blueviolet`, `#02904c`, `#4caf50`, `#95b098`, `#569156`, and four redundant near-creams. The purple and blueviolet were the site's universal hover colour and are not brand colours at all.

### 3.2 Contrast

Every text/background pair now clears WCAG AA. Two were badly broken before:

- Page titles sat directly on the hero photo. The photo's sky is near-white, putting cream titles at **1.45:1**.
- Link hovers used `blueviolet` on dark panels — **2.03:1**, i.e. hovering made text *harder* to read.

The photo now sits under two scrim layers: `--bg-scrim` (flat wash, tune freely for look) and `--bg-scrim-top` (extra darkening across the top 45% of the viewport, where titles land).

### 3.3 Assets

| Asset | Was | Now |
|---|---|---|
| Logo | 3975×1071, 579 KB, raw `<img>` | 500×135, 10 KB, `next/image` with dimensions (no layout shift) |
| Hero | 4000×1868, 2.2 MB, filename with a space | 1920×897, 260 KB |

Masters archived in `src/images/_masters/`, never shipped. WebP and AVIF were both measured *larger* than mozjpeg on this terrain photography — re-measure before adding modern formats, don't assume.

Also removed a byte-identical duplicate `favicon.ico` (`public/images/` — that directory is now gone; nothing referenced it).

### 3.4 Rotating backgrounds

Drop photos into `src/images/_masters/backgrounds/`, run `npm run assets`, run `npm run check-contrast`. Any filename works — `Desert Ridge Sunrise.JPG` becomes `desert-ridge-sunrise.jpg`. Deleting a master and re-running removes its output and drops it from the manifest.

- Resized copies land in `public/backgrounds/`; `src/data/backgrounds.json` is the manifest.
- An inline script in `<head>` picks one **before first paint**. Picking after hydration would show one photo and visibly swap it.
- Held in `sessionStorage`, so it stays put while navigating and only rotates on a new visit.
- JavaScript disabled falls back to the first manifest entry.

**Important:** each photo has its own brightness, so one bright image can push titles below the floor for whoever gets it. `check-contrast` measures the brightest region of *every* photo and scores against the brightest one. Run it after adding images.

### 3.5 Accessibility

- New `components/Dropdown.js` — opens on hover, click, and `Enter`/`Space`/`ArrowDown`; closes on `Escape`, outside click, focus-out. `aria-expanded`/`aria-controls`. Used by Counties and Cities.
- Disclaimer modal: `role="dialog"`, `aria-modal`, focus trap, scroll lock, focus restore.
- Visible focus rings on every interactive element (there were none outside two elements).
- Hamburger: `aria-label`, `aria-expanded`, `aria-controls`.
- Heading order corrected to h1 → h2 → h3, exactly one h1 per page.

### 3.6 Bugs found and fixed

| Bug | Cause |
|---|---|
| Only "Home" highlighted in the navbar | `trailingSlash: true` makes `usePathname()` return `/counties/`, so `=== "/counties"` never matched. Pre-existing. Now normalised, and section pages highlight their parent (`/cities/CACities` → **Cities**). |
| Typed county selection vanished after ~1.5s | The type-ahead timer cleared `selectedId` along with the search buffer. Now only the buffer expires. |
| Arrow keys scrolled the page | Not handled at all. `ArrowUp`/`ArrowDown` now move the selection with `preventDefault()`; `Home`/`End` jump to the ends. Scrolling uses `block: "nearest"`, so it only moves when the selection reaches the edge of the visible list. |
| County search could select a different county than shown | Search walked the unsorted prop while the list rendered sorted. Both now walk the same array. |
| Letter-cycling stopped working after the buffer expired | Now keys off the current selection instead of the buffer. |
| `justify-content: flex` | Invalid CSS value, silently a no-op. |
| Two competing navbar rule sets | `.nav ul li.active` set purple, `.menu li.active` set green — same navbar. Merged. |
| `Calvada Surveying. Inc.` | Period should be a comma. |

### 3.7 Metadata

Title template `{Page} — Calvada Research` across all 83 routes, including dynamic county/city/utility pages, each with its own description.

Note: `title.template` does not apply within the same route segment as the layout that declares it, so the home page deliberately sets no `title` and falls through to `title.default`. There's a comment in `app/page.js` saying so — don't "fix" it by adding one.

---

## 4. Deliberate exceptions

Two things look like brand violations but are intentional. Both are documented in `brand-guidelines.md` so they don't get "corrected" later.

1. **Zone map colours** (§3.1a) — the six pastels on the California map sit outside the brand palette. Staff read the map by them, so they're reference data, not styling. Reverted at your request after I'd initially rebuilt them on a brand ramp.
2. **Button radii** (§5) — 20px / 10px / 7px / 5px per control class, not on the 4/8/12 scale. Your original values, restored at your request. Tokenised as `--radius-btn-lg/md/sm/xs` so a shape still has one point of change.

---

## 5. Verify before you ship

**I never saw any of this rendered.** No browser was available. Everything is verified by clean build, emitted markup, computed contrast, and a syntax-checked head script — but not by eye. Worth a pass on:

- [ ] **Cities pages** — I added `position: relative` to `.city-dropdown`. It previously had none, so its menu anchored to the page rather than its button. It now opens directly under the button, matching the Counties dropdowns. Correct behaviour, but a visible change.
- [ ] **County keyboard nav** — on the Counties page, type `sa` in the California list, wait two seconds, confirm the highlight holds. Then arrow down through San Bernardino / San Diego / San Francisco and check it scrolls only at the panel edge.
- [ ] **Background rotation** — add a second photo, run `npm run assets`, then open the site in two fresh sessions and confirm you get different photos with no flash on load.
- [ ] **Zone map** — hover each of the six zones, confirm the pastels and the blue hover match what you remember. Note zone 3 (`#ccccff`) against a `blue` hover is a low-contrast pairing, so that one is subtler than the others. Original behaviour, flagged not changed.
- [ ] **Disclaimer modal** — Tab should cycle inside it and not escape to the page behind.
- [ ] **Mobile navbar** — hamburger open/close and the active-page highlight.

---

## 6. Contrast headroom

At the current `--bg-scrim: 0.4`, page titles measure **4.87:1** against the one background — passing, but only 0.37 above the 4.5 floor. A brighter photo added to the rotation will likely trip it.

If `check-contrast` fails after adding an image, either use a darker photo or raise `--bg-scrim-top` (`tokens.css`). The audit reads live token values and re-samples the photos, so it can't report stale numbers.

---

## 7. Outstanding

| Item | Detail |
|---|---|
| `scripts/` is gitignored | `.gitignore:32`. `check-contrast.cjs` and `optimize-assets.cjs` won't commit — nor does the pre-existing `check-links.mjs`. Remove that line to commit them. **Do this or the asset pipeline doesn't travel with the repo.** |
| `npm run lint` is broken | `next lint` was removed in Next 16 (you're on 16.2.2). Needs migrating to the ESLint CLI. Pre-existing, unrelated to this work. |
| `.para` is dead CSS | Defined in `style.css`, used nowhere. Left in place as a utility class. |
| `dangerouslySetInnerHTML` from JSON | `CountyPageTemplate` and `UtilityPageTemplate` render HTML out of the data files. Fine while the data is internal; worth revisiting if it ever accepts outside input. |

---

## 8. Commit checklist

Generated files that **must** be committed for a build to work:

- `src/data/backgrounds.json` — the layout imports it at build time
- `public/backgrounds/*.jpg` — shipped as-is by the static export
- `src/images/calvada-logo.png` — imported by `NavBar`

Archived, committed, never shipped:

- `src/images/_masters/` — full-size originals

---

## 9. File map

**New**

```
docs/brand-guidelines.md        source of truth for the visual system
docs/HANDOFF.md                 this file
src/styles/tokens.css           all design tokens
src/styles/map.css              California zone map styling
src/components/Dropdown.js      accessible disclosure dropdown
src/data/backgrounds.json       generated manifest
scripts/optimize-assets.cjs     generated assets (gitignored — see §7)
scripts/check-contrast.cjs      contrast audit (gitignored — see §7)
public/backgrounds/             generated, shipped
src/images/_masters/            archived originals
```

**Substantially rewritten**

```
src/style.css                   scrim layers, type baseline, tokens
src/styles/*.css                all 11 sheets moved onto tokens
src/app/layout.js               token import, background picker, metadata template
src/components/NavBar.js        next/image, path normalising, ARIA
src/components/CountyDropdown.js  keyboard navigation and type-ahead
src/components/DisclaimerModal.js dialog semantics and focus trap
src/components/CaliforniaMapSVG.js  inline styles moved to map.css
```

**Removed**

```
public/images/favicon.ico       byte-identical duplicate, unreferenced
src/images/BG Pic.jpg           → src/images/_masters/backgrounds/field-hero.jpg
src/images/calvada_logo.png     → src/images/_masters/calvada_logo.png
```
