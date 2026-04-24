# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Internal research website for Calvada Surveying (research.calvada.com). Displays county/city/utility reference data (links, APN formats, public works contacts, Caltrans districts, DOT info) organized by state (CA, AZ, NV, TX, WA).

## Commands

- `npm run dev` — local dev server (Next.js)
- `npm run build` — static export build (outputs to `out/`)
- `npm run lint` — Next.js linting

No test framework is configured.

## Architecture

**Framework:** Next.js (App Router) with static export (`output: 'export'` in `next.config.mjs`). Deployed to Apache/GoDaddy as static files.

**Routing:** All routes live under `src/app/`:
- `/` — Home page
- `/counties` — Counties listing
- `/[countyName]` — Dynamic county pages (generated from JSON data for all states)
- `/cities/[stateName]` — Per-state city pages (CACities, AZCities, WACities)
- `/utilities/[utilityName]` — California utility zone pages
- `/contact`, `/links` — Static pages

**Data layer:** All content is driven by JSON files in `src/data/`. County, city, highway, utility, and Caltrans district data all come from these files. To add or update content, edit the JSON — no component changes needed for typical data updates.

**Key data files:**
- `*_counties.json` — county pages (links, APN format, public works, caltrans district refs)
- `*_cities.json` — city listings per state
- `california_utilities.json` — utility zone data
- `caltrans_districts.json` — Caltrans district contact/link info
- `*_highway.json` — state DOT info (AZ, NV)
- `global_links.json` — shared links page data

**Components (`src/components/`):** Reusable templates that render JSON data:
- `CountyPageTemplate` — renders any county from its JSON entry
- `UtilityPageTemplate` — renders utility zone pages
- `CaltransDistrict` — renders Caltrans district info by ID lookup
- `{CA,AZ,WA}Cities` — state-specific city list components
- `{Ca,Az,Nv,Tx,Wa}CountiesNavbar` — per-state county navigation
- `NavBar`, `StatesNavBar` — top-level navigation
- `AccessModal` — site access gate

**Layout:** `src/app/layout.js` is the root layout — imports all global CSS and renders NavBar + AccessModal on every page.

**Static generation:** Dynamic routes use `generateStaticParams()` + `dynamicParams = false` to pre-generate all pages from JSON data at build time.

**Legacy:** `backup_v1/` contains the old Create React App version (react-router-dom based). The current app is the Next.js migration.

## Adding a New County

1. Add a JSON entry to the appropriate `src/data/{state}_counties.json`
2. The `src/app/[countyName]/page.js` route auto-generates the page at build time

## Adding a New State

1. Create `src/data/{state}_counties.json` and `src/data/{state}_cities.json`
2. Import the counties data in `src/app/[countyName]/page.js` and spread into `allCountiesList`
3. Create a `{St}CountiesNavbar` component and a `{ST}Cities` component
4. Add the state to `src/app/cities/[stateName]/page.js` routing
5. Wire into NavBar/StatesNavBar for navigation
