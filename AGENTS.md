# AGENTS.md

Personal portfolio site (Arif Luthfiansyah). React 19 + Vite 8, plain JSX (no TypeScript), Tailwind v4 + shadcn/ui v4 (Radix Maia style, HugeIcons). ESM (`"type": "module"`).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run deploy` — `gh-pages -d dist`, pushes built site to `gh-pages` branch
- No test framework or test script exists. Verify changes with `npm run lint && npm run build`.

## Layout

- Single page, no router. `src/App.jsx` renders `src/components/HomeView.jsx`, which contains the whole profile/home UI (nav + profile card + projects) inline with shadcn `Card`/`Button`/`Badge`.
- `src/components/NavigationBar.jsx` and `HeroBanner.jsx` exist but are NOT imported/used anywhere — don't assume they're wired in.
- `src/components/ui/*` — generated shadcn components. `src/lib/utils.js` exports `cn()`. `@/*` maps to `src/*` (Vite alias in `vite.config.js` + `jsconfig.json`).
- Tailwind v4 is CSS-first: no `tailwind.config.js`. All theme/token config lives in `src/index.css` (`@import "tailwindcss"`, `@theme inline`, `:root`/`.dark` oklch tokens). Follow shadcn skill conventions (semantic colors, `size-*`, `gap-*`, `cn()`).

## Deployment gotchas

- GitHub Pages **user site** served at `https://lutluthfi.github.io/` (repo is `lutluthfi.github.io`). `vite.config.js` sets `base: "/"` — do not change it or asset URLs break (a subpath base like `/lutluthfi.github.io/` 301-redirects to root and the app won't load).
- `.github/` is listed in `.gitignore`, so the `deploy.yml` workflow is local-only and never runs in CI. Deploying is manual via `npm run deploy` (targets the `gh-pages` branch). Note the workflow's `on: push: branches: [main]` won't match the default `master` branch anyway.
- `dist/` is committed to git and can go stale. Always run `npm run build` before deploying.

## Working conventions

- **Architecture navigation:** before grepping/searching the codebase, consult the graphify graph at `graphify-out/` (`graphify query "<question>"`, or read `GRAPH_REPORT.md`). Rebuild/refresh it with `graphify update .` when the code changes significantly. `graphify-out/` is gitignored (contains machine-local paths).
- **External dependency docs:** before writing code that touches an external dependency, fetch its current docs via the `context7` MCP tool (`resolve-library-id` → `query-docs`). Fall back to `websearch` for libs not indexed on Context7.
- **Icon gotcha:** `@hugeicons/core-free-icons` exports icon **data arrays**, not components — render them with `HugeiconsIcon` from `@hugeicons/react` (e.g. `<HugeiconsIcon icon={WhatsappIcon} size={16} />`). Rendering an array directly crashes React with a blank page.
