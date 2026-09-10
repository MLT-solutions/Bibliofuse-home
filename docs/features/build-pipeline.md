# Build pipeline & content-maintenance scripts

`scripts/`, invoked from `package.json`'s `build` script and by hand.

## Hosting: Cloudflare Pages (2026-09-09)

Cloudflare builds and publishes from Git on every push to `main` (build command
`npm run build`, output `dist`) — the same integration lokaltools.com uses, with no CLI
login or stored credential. `npm run deploy:manual` is a wrangler fallback for hand
publishes. It used to be `gh-pages -d dist`.

Direct Upload was the original plan because the build took 13–15 minutes against a
20-minute Pages timeout. Scoping the prerender step (below) cut that to under 4 minutes,
which made the hosted build viable.

### Prerender scope

`prerender.js` renders only pages that are asking to be indexed. Prerendering exists to
give non-JS crawlers real content; a page carrying `noindex` has no such crawler, and real
visitors render it client-side either way. `generate-static-routes.js` writes the noindex
tag into those files before this step, so skipping them loses no signal.

The split was lopsided: 616 of 902 route/locale combinations (68%) were noindexed — seven
entire locales plus the tool pages and retired app stubs — so most of the build was
rendering pages nobody would crawl. Now 282 pages, matching the sitemap exactly.

`INDEXED_LANGUAGES`, `NOINDEX_NON_EN_ROUTES` and `NOINDEX_ALL_LOCALES_ROUTES` are
duplicated in `prerender.js` and `generate-static-routes.js` — keep them in sync, like the
route lists.

The move happened because GitHub Pages can neither issue 301s (needed when GrepTag and
Comic Duplicate Scanner moved to mlogictech.com) nor set response headers (needed for the
cross-origin isolation the `/tools/` WASM pages require). Both now live in version control
as `public/_headers` and `public/_redirects`, which Vite copies into `dist/`.

`public/CNAME` is gone — that was GitHub Pages only. Setup steps that still need a human
are in `docs/cloudflare-pages-migration.md`.

## Prerender locale isolation (2026-09-09)

`scripts/prerender.js` gives every page its own `browser.createBrowserContext()` and
asserts `document.documentElement.lang` matches the URL's locale before capturing.

Both are load-bearing, not defensive polish. `src/i18n.js` detects language in the order
`queryString → cookie → localStorage → navigator → htmlTag → path` and caches the result
to `localStorage` + `cookie`. On a **shared** browser context those stores are visible to
every concurrently-rendering tab, so a tab that had just rendered `/zh/` left
`i18nextLng=zh` behind and the next tab picked it up before `App.jsx`'s
`changeLanguage(lang)` effect could correct it — Helmet committed a wrong-language
`<title>`, and the old readiness check (title contains `" | BiblioFuse"`) happily
accepted it.

This was caught in a real build on 2026-09-09: `dist/ja/index.html` contained Chinese
copy and `dist/ko/index.html` contained Japanese, while the source locale files were
correct and the live site was fine. It is a race, so it surfaces on different locale
pairs each run and can silently ship wrong-language content at indexed locale URLs —
the exact failure mode implicated in the 2026-06-26 impression collapse.

A locale mismatch now fails the page, triggers a retry, and fails the build if it
persists. Verify a build with: every `dist/<loc>/**/index.html` must carry
`<html lang="<loc>">`.

## Automated build steps (run on every `npm run build`)
In order, after `vite build`:
1. `scripts/generate-sitemap.js` — writes `public/sitemap.xml` from the known routes
   × `INDEXED_LANGUAGES` only (not all 11 `SUPPORTED_LANGUAGES` — see
   `i18n-routing.md`), plus blog posts. Current output is 288 URLs (down from ~800
   before the 2026-07-20 locale-indexing change).
2. `scripts/generate-static-routes.js` — enumerates every route the site serves in
   all 11 languages (routing/rendering doesn't narrow by `INDEXED_LANGUAGES`, only
   the sitemap and `noindex` do), used by the prerender step (and potentially by the
   host for routing config). Also injects a static `noindex` meta tag at build time
   for non-indexed locales and for specific always-noindex routes
   (`NOINDEX_ALL_LOCALES_ROUTES`: `/androidrequest`, `/smartdecrypt`, `/contentcue`).
3. `scripts/prerender.js` — renders each route to static HTML so blog/marketing pages
   have real content for SEO crawlers and social-media unfurling, despite being an SPA.
   It serves `dist/` on an ephemeral local port during prerendering.
   Prerender keeps the fail-closed behavior for incomplete SEO HTML, with configurable
   `PRERENDER_PAGE_LOAD_TIMEOUT_MS` and `PRERENDER_SEO_READY_TIMEOUT_MS` timeouts
   defaulting to 60 seconds to avoid false negatives on slower localized routes.

As of the Android request page rollout, the current localized prerender set is 891 pages
(81 routes × 11 languages). A completed build should end with `Prerendered 891/891 pages`.

## Manual content-maintenance scripts (not part of the automated build)
A large set of one-off Node (`.cjs`/`.mjs`) and Python scripts for bulk-editing
translations and content across all 11 languages — e.g. `translate-all-langs.cjs`,
`complete-translations.cjs`, `apply-archive-translations.py`,
`fix-article-backlinks.cjs`, `inject-grepreader-sync-faq.cjs`,
`scan-untranslated.cjs`. These were written to perform specific one-time migrations
(new article rollouts, new translation keys, cross-linking fixes) and are run manually
when needed — they are not wired into CI or the build.

If you need to bulk-touch translations or article content, check `scripts/` first for
an existing script that already does something close before writing a new one.

## `.DS_Store` is stripped from `dist/` (added 2026-09-10)

`vite build` copies `public/` verbatim, so a macOS `.DS_Store` that Finder drops in there
gets deployed and served — `bibliofuse.com/.DS_Store` was live, which lists the directory's
filenames. The file is gitignored, so git never caught it and it came back every time
Finder touched the folder. The build now runs `find dist -name .DS_Store -delete` straight
after `vite build`, before the sitemap step, so it cannot reach a deploy regardless of the
local working tree.
