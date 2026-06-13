# Copilot instructions for this repository

Purpose: give future Copilot sessions quick, actionable repo knowledge so suggestions and automated edits are aligned with project layout, build tools, and local conventions.

---

## 1) Build, test, and lint commands

Primary commands (npm):
- npm run dev          # run Next.js dev server (localhost:3000)
- npm run build        # Next.js production build
- npm run build-prod   # production build pipeline: runs `clean` then `build` (used by Netlify)
- npm run build-stats  # builds with bundle analyzer enabled (ANALYZE=true)
- npm run start        # start built Next app
- npm run clean        # remove .next, out, and swc artifacts

Quality commands:
- npm run lint         # runs `next lint` with project ESLint config
- npm run format       # runs `next lint --fix` and prettier on json/yaml
- npm run check-types  # TypeScript check (tsc --noEmit)

Notes on tests: This repository does not include a test runner or test scripts. If tests are added (Jest, Vitest, etc.), follow existing npm-scripts convention and add a `test` script. To run a single test once a runner exists, prefer the runner's single-test CLI (e.g., `npx jest path/to/file.test.ts -t 'name pattern'` or `npx vitest run path/to/file.test.ts`).

CI / hosting:
- Netlify is configured (netlify.toml). Production build uses `npm run build-prod` and publishes `out/`.

---

## 2) High-level architecture (big picture)

- Framework: Next.js 14 + React 18 + TypeScript. App lives under `src/` and uses the filesystem routing in `src/pages`.
- Data-driven content: Most copy and site data are centralized in `src/content/siteContent.ts` (navigation, project items, experience, SEO copy). Edit content there rather than page components when updating site copy.
- Composition and layout: `src/templates/*` contains layout primitives (Header, Footer, SiteLayout). Pages import these templates and consume content from `siteContent`.
- Theming: `src/theme/Theme.tsx` exposes Themed* primitives (ThemedText, ThemedSurface, ThemedButtonLink, ThemedNavLink, ThemedShell). Theme variables come from `src/utils/AppConfig.ts` and are applied via inline style objects and CSS variables.
- Styling: Tailwind CSS + PostCSS + a global CSS file at `src/styles/global.css`. Some styles are applied via theme primitives and CSS variables to produce consistent surfaces and accents.
- Build/output: Next's static export pipeline writes to `out/` (Netlify publishes `out/`). `next.config.js` sets trailingSlash: true and enables ESLint on the repo.
- Accessibility & SEO: Next SEO is used; canonical/OpenGraph metadata and `sitemap.xml`, `robots.txt` in `public/` are included.

---

## 3) Key conventions and repo-specific patterns

- Content-as-data: Pages render content from `src/content/siteContent.ts`. For copy updates, modify that file; for layout or style changes, modify `src/templates/*`, `src/theme/*`, or component folders.
- Themed primitives: Reuse `Themed*` components from `src/theme/Theme.tsx` for consistent UI behavior (colors, spacing, hover effects). Avoid duplicating theme logic — extend those primitives instead.
- App-level constants: `src/utils/AppConfig.ts` centralizes site name, theme colors and other global constants. Prefer using AppConfig to hardcoded strings for site metadata (Header uses AppConfig.site_name).
- Routing and assets:
  - Pages are under `src/pages/*` (Next.js file-based routing). Static assets are in `public/`.
  - next.config.js has trailingSlash enabled — expect exported URLs to include a trailing slash.
- ESLint + Prettier: ESLint config (`.eslintrc`) includes TypeScript overrides and several rule adjustments (unused-imports enforcement, simple-import-sort, tailwind plugin). Prettier is integrated via eslint-plugin-prettier. Use `npm run lint` and `npm run format`.
- Husky pre-commit: Husky runs `lint-staged` on pre-commit via `.husky/pre-commit`. Ensure lint-staged config is present if adding new file-type checks.
- No next/image: The ESLint rule `@next/next/no-img-element` is disabled in config; the project currently does not use `next/image` because of static export concerns.

---

## 4) Files/helpers worth checking before automated edits

- src/content/siteContent.ts — primary content source for pages
- src/templates/* — site shell, header, footer, navigationItems
- src/theme/Theme.tsx — styling primitives and variables
- next.config.js — export/build options and ESLint dirs
- netlify.toml — Netlify build command & publish dir

---

## 5) When making automated changes (guidance for Copilot sessions)

- Keep content edits to `src/content/siteContent.ts` unless the task is UI or layout-related.
- For visual changes, prefer updating `src/theme/Theme.tsx` primitives so changes propagate consistently.
- Preserve TypeScript strictness: tsconfig.json enables strict and `noEmit`. Run `npm run check-types` if adding or changing types.
- Follow ESLint overrides. New TS files should comply with `@typescript-eslint/consistent-type-imports` and unused-imports rules.
- Avoid switching to next/image without verifying static export compatibility and Netlify settings.

---

## 6) Other AI assistant or agent configs discovered

- No existing Copilot-specific instructions file was found.
- No CLAUDE.md, AGENTS.md, .cursorrules, AGENTS, or other assistant config files were present.

---

If anything in this file should be narrower or broader (for example, include quick examples of common edits, or a short checklist for making layout changes), say which areas to expand.
