# Calvada Research — Brand Guidelines

Source of truth for the internal research site (research.calvada.com).
Every value here is mirrored as a CSS custom property in `src/styles/tokens.css`.
**Change this file first, then the token file — never hardcode a value in a component or page stylesheet.**

---

## 1. Identity

| Field | Value |
|---|---|
| Legal name | **Calvada Surveying, Inc.** |
| Short name | **Calvada** |
| Product name | **Calvada Research** |
| Tagline (internal) | Field-verified reference for surveyors |

**Naming rules**

- Full legal name is `Calvada Surveying, Inc.` — comma before `Inc.`, period after. Never `Calvada Surveying. Inc.`
- Site is referred to as **Calvada Research**, not "Research Calvada".
- Page titles use the pattern `{Page} — Calvada Research`.

---

## 2. Logo

**Shipped file:** `src/images/calvada-logo.png` (transparent PNG, 500 × 135 — 2× the 250px render size, 10 KB). Imported through `next/image` so the intrinsic dimensions are emitted and the header never shifts on load.
**Source master:** `src/images/_masters/calvada_logo.png` (3975 × 1071, 579 KB) — archive only, never ship. Regenerate with `npm run assets`.

| Rule | Spec |
|---|---|
| Minimum width | 150px |
| Clear space | 0.5× the cap height of the "CALVADA" wordmark on all sides |
| Approved backgrounds | Cream `#f3efcc`, white `#ffffff` |
| Prohibited | Recoloring, stretching, adding effects, placing on the hero photo without a cream/white plate |
| Alt text | `Calvada Surveying, Inc.` |

The logo's green is the **canonical brand green**; it was sampled directly from the master file at `#0b7f3e`. Any other green in the product is a derivative, not a substitute.

---

## 3. Color

### 3.1 Core palette

| Token | Hex | Role |
|---|---|---|
| `--color-green-500` | `#0b7f3e` | **Brand green.** Logo, fills, accents, primary buttons |
| `--color-green-600` | `#095f2f` | Accessible brand green for *text on cream* (6.70:1) |
| `--color-green-700` | `#406343` | Deep brand green. Nav text, body green (5.85:1 on cream) |
| `--color-green-800` | `#122215` | Elevated panel (effective value over the scrim) |
| `--color-green-900` | `#0a2717` | Page background, deepest surface |
| `--color-green-200` | `#a8f0c0` | Mint. Link hover on dark surfaces only (12.56:1) |
| `--color-cream-100` | `#f3efcc` | **Primary surface.** Nav bar, buttons, cards, footer |
| `--color-cream-200` | `#ece7b4` | Headings on dark |
| `--color-cream-050` | `#f7f5e8` | Pressed state |
| `--color-cream-300` | `#d6d2b3` | Hairline borders on cream |
| `--color-gold` | `#ffd700` | Warnings and callouts **only** |

### 3.1a Utility-zone map — documented exception

The California zone map keeps its own six pastels. They sit outside the brand palette, and that is intentional: staff read the map by these colours, so they are treated as reference data rather than styling. **This is the one sanctioned exception to §3.2 — do not "correct" it.**

| Token | Hex | Zone |
|---|---|---|
| `--color-zone-1` | `#ffcccc` | 1 — far north |
| `--color-zone-2` | `#ccffcc` | 2 |
| `--color-zone-3` | `#ccccff` | 3 — Bay Area |
| `--color-zone-4` | `#ffcc99` | 4 |
| `--color-zone-5` | `#99ccff` | 5 |
| `--color-zone-6` | `#ffccff` | 6 — far south |
| `--color-map-highlight` | `blue` | Hovered zone |
| `--color-map-land` | `#d0d0d0` | Unzoned counties |
| `--color-map-stroke` | `#000000` | County boundaries |

They live in `tokens.css` so the map has a single point of change, not because they belong to the brand.

### 3.2 Retired colors

These were removed in the 2026-08 brand audit. Do not reintroduce them.

| Retired | Why | Replacement |
|---|---|---|
| `#634060` (purple) | Not a brand color; read as an accident on a green/cream identity | `--text-on-surface-hover` |
| `blueviolet` (`#8a2be2`) | Off-brand **and** 2.03:1 on dark panels — a hover state that made text less readable | `--text-link-on-dark-hover` |
| `#02904c` | Third competing "Calvada green" | `--bg-brand` |
| `#4caf50` | Material Design default, unrelated to brand | `--bg-brand` |
| `#95b098` | 2.02:1 hover on cream | `--text-on-surface-hover` |
| `#569156` | 3.76:1 with white text | `--bg-brand` |
| `#f1f7e7`, `rgb(241,255,225)`, `aliceblue` | Redundant near-creams | cream ramp |

### 3.3 Ratio discipline

Roughly, per screen: **60% deep green** (background/panels), **30% cream** (surfaces), **10% brand green** (accents and primary actions). Gold is incidental — warnings only, never decoration.

### 3.4 Contrast floor

All body text meets **WCAG 2.1 AA (4.5:1)**; large text and UI borders meet **3:1**. The hero photograph is never a text background on its own — it always sits under the `--bg-scrim` overlay (`rgba(10,39,23,0.78)`), which holds cream text at ≈8:1 over both the brightest (sky) and mid (desert) regions of the image.

Verify any new pair before shipping:

```bash
node scripts/check-contrast.cjs "#f3efcc" "#122215"
```

---

## 4. Typography

**Family:** `--font-sans` — Segoe UI / system geometric grotesque stack. The squared, geometric letterforms echo the logo wordmark.

| Token | Size | Use |
|---|---|---|
| `--text-2xl` | 2.25rem | Page H1 |
| `--text-xl` | 1.75rem | Section H2 |
| `--text-lg` | 1.375rem | H3 |
| `--text-md` | 1.125rem | H4, lead paragraphs |
| `--text-base` | 1rem | Body |
| `--text-sm` | 0.8125rem | Footer, tooltips |
| `--text-xs` | 0.75rem | Micro-labels |

**Rules**

- Never use CSS size keywords (`large`, `medium`, `xx-small`). Use the scale.
- Weights: `400` body, `600` emphasis/UI, `700` headings. No `bolder`, no `480`.
- Heading order is never skipped: H1 → H2 → H3. Every page has exactly one H1.

---

## 5. Shape & elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Inputs, chips, small buttons |
| `--radius-md` | 8px | Cards, panels, dropdown menus |
| `--radius-lg` | 12px | Modals, large surfaces |
| `--radius-pill` | 999px | Pill buttons, active nav item |

**Buttons are exempt from the scale.** Each control class keeps its own established shape, tokenised so a button shape still has one point of change:

| Token | Value | Applies to |
|---|---|---|
| `--radius-btn-lg` | 20px | Primary buttons, back buttons, state dropdowns |
| `--radius-btn-md` | 10px | City dropdown buttons |
| `--radius-btn-sm` | 7px | City page view toggles |
| `--radius-btn-xs` | 5px | Utility zone buttons |

| Token | Use |
|---|---|
| `--shadow-sm` | Hairline lift |
| `--shadow-md` | Nav bar, resting buttons |
| `--shadow-lg` | Dropdown menus, hover-raised buttons |
| `--shadow-xl` | Modal |

The old `7px 7px 7px` offset shadow is retired — hard diagonal drop shadows read as dated and are inconsistent with the rest of the surface treatment.

---

## 6. Interaction & accessibility

- **Focus is always visible.** Every interactive element uses `--focus-ring` (or `--focus-ring-on-dark`). No `outline: none` without a replacement.
- **Nothing is hover-only.** Dropdowns open on hover *and* on click/`Enter`/`Space`, and close on `Escape`.
- Touch targets are ≥ 44 × 44 px.
- Hover states must never *reduce* contrast relative to the resting state.
- Motion respects `prefers-reduced-motion`.

---

## 7. Voice

**Personality:** precise, plain, field-ready. This is a working tool for surveyors, not marketing.

| Do | Don't |
|---|---|
| "Riverside County — APN format, public works, Caltrans District 8" | "Welcome to your one-stop research hub!" |
| "Back to Counties" | "← Go back" |
| "Verify all information against the official county source." | "We try our best to keep things updated 😊" |

- Industry terms are used exactly: APN, ROW, Caltrans, DOT, postmile, benchmark, parcel.
- Headings name content, not navigation state. The homepage H1 is `Calvada Research`, not `Home`.
- The disclaimer is direct and unhedged — it is a legal boundary, not a suggestion.

---

## 8. Imagery

### Adding a background

The site rotates through a folder of photographs, one per visit.

1. Drop a full-size photo into `src/images/_masters/backgrounds/`. Any name works — `Desert Ridge Sunrise.JPG` becomes `desert-ridge-sunrise.jpg`.
2. Run `npm run assets`. Each master is resized to 1920px wide and written to `public/backgrounds/`, and `src/data/backgrounds.json` is regenerated.
3. Run `npm run check-contrast`. **This is the step that matters.** The audit measures the brightest region of every photo in the rotation and scores the palette against the brightest one — a single bright photo can put page titles below the floor for everyone who happens to get it. If it fails, raise `--bg-scrim-top`, or use a darker photo.
4. Commit `src/data/backgrounds.json` and `public/backgrounds/`. Masters are archived and never shipped.

Deleting a master and re-running `npm run assets` removes its output and drops it from the manifest.

The photo is picked before first paint by an inline script in `app/layout.js` and held in `sessionStorage`, so it stays put while someone navigates the site and only changes on a new visit. With JavaScript disabled, the first entry in the manifest is used.

### Scrim

The hero sits under two scrim layers: `--bg-scrim`, a flat wash over the whole photo, and `--bg-scrim-top`, extra darkening across the top 45% of the viewport where page titles land. The photo's sky is its brightest region; under the flat scrim alone a cream title measures 3.52:1. Tune `--bg-scrim` freely for look — the gradient is what holds the titles above the floor. Re-run `npm run check-contrast` after any change; it reads the live token values and re-samples the photo, so it cannot go stale.

The hero photograph (`src/images/field-hero.jpg`, 1920 × 897, 260 KB) is the sole brand image: real Calvada field equipment, real terrain, natural light, no filters or overlaid text. It is always dimmed by `--bg-scrim` when it sits behind content. Master: `src/images/_masters/field-hero.jpg`.

Ship every raster asset pre-sized — this project uses `output: 'export'`, so Next.js image optimization is disabled and nothing is resized at request time. Masters live in `src/images/_masters/` and are never referenced by application code; `npm run assets` regenerates the shipped derivatives from them.

WebP and AVIF were both measured *larger* than mozjpeg for the hero (heavy high-frequency rock texture), so the site ships a single progressive JPEG. Re-measure before adding modern formats for a new image — don't assume.

---

## 9. Change log

| Date | Change |
|---|---|
| 2026-08-05 | Initial guidelines. Brand green fixed at `#0b7f3e` (sampled from logo master). Retired purple/blueviolet/`#02904c`/`#4caf50`. Introduced token layer, contrast floor, scrim over hero photo. |
| 2026-08-05 | Background rotation added — drop photos in `_masters/backgrounds/`, `npm run assets`, `npm run check-contrast`. Button radii kept at their original per-class values (§5). |
| 2026-08-05 | Dropdowns made click/keyboard operable; disclaimer given dialog semantics and a focus trap. Type scale applied to all headings; heading order corrected to h1→h2→h3. Per-page titles and descriptions. Zone map colours moved into tokens but deliberately left as-is — recorded as a documented exception (§3.1a). |
