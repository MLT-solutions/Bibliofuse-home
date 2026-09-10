# Browser tools (`/tools/`)

Five utilities that run entirely in the visitor's browser, at
`/{lang}/tools/` and `/{lang}/tools/<slug>/`.

## Why this section exists

The site's worst SEO problem was intent mismatch. Eight blog articles targeted
"cbz to pdf online"-style queries, and a searcher who wanted a converter got an essay →
a `/webapp/` landing page → a "Launch Web App" button → **a different domain**
(`bibliofuse-web.netlify.app`). Those pages ran at 0.25–0.7% CTR from positions 8–10,
roughly 5–10× below expectation for those positions.

Meanwhile the actually-useful thing existed on lokaltools.com, earning about one click per
hundred days because LokalTools has no authority for comic/ebook queries.

So the tools moved here (2026-09-09) and the page order was inverted.

## The page contract

`src/components/ToolPageLayout.jsx` enforces the ordering rather than leaving it to each
page, because the ordering is the point:

1. **H1 — the job**, e.g. "Reduce CBZ file size"
2. **The working tool**, above the fold, nothing between it and the H1
3. Three trust lines — runs on your device · no upload · no account
4. Explanation and FAQ (the FAQ feeds `FAQPage` JSON-LD)
5. **The app pitch, last**, aimed at someone who already got what they came for

Do not add a working tool to the homepage. It would compete with these pages for the same
queries and pull ~13 MB of WASM into every branded visit. A cards-only strip is fine.

## Registry

`src/data/tools.js` is the single source of truth for slugs and ordering; `src/App.jsx`
generates routes from `TOOL_SLUGS`, and `ToolsHub.jsx` renders cards from `TOOLS`.
The three build scripts still hold their own hardcoded route lists — see
`build-pipeline.md`.

| Slug | Engine |
|---|---|
| `cbz-reducer` | wasm-vips + @zip.js |
| `epub-reducer` | wasm-vips + @zip.js |
| `pdf-to-cbz` | pdf.js + wasm-vips + @zip.js |
| `pdf-to-jpg` | pdf.js + jszip |
| `qr-generator` | qrcode-generator |

## Ported code

The four file tools came from `lokaltools/src/tools/*` and are deliberately kept close to
their source so they stay diffable. Consequences worth knowing:

- **They accept a `dict` prop** — lokaltools' server-built i18n dictionary. This site has
  no such prop, so it is defaulted (`{ dict = {} }`) and every lookup reads through
  optional chaining with an English fallback. **When porting further tools, check for
  `dict.` lookups without a `||` fallback** — a missing one renders an empty button
  rather than throwing, which is easy to miss. `PDFToJPG`'s convert button shipped
  label-less for exactly this reason during the port and was caught in browser testing.
- **They use shadcn/ui token class names** (`bg-primary`, `text-muted-foreground`,
  `border-border`). Those tokens are defined in `tailwind.config.js`, mapped onto this
  site's palette, purely so the ported components need no class rewriting.
- Tool *chrome* is English-only. Only the surrounding page shell is translated.

`src/lib/{download,vips,analytics}.js` are local equivalents of the lokaltools imports.
`analytics.js` is a deliberate no-op — this site collects nothing and says so on every
tool page.

## Cross-origin isolation

wasm-vips spawns pthreads and wants `SharedArrayBuffer`, which requires cross-origin
isolation. `public/_headers` sets COOP/COEP on `/*/tools/*` — scoped rather than sitewide
because COEP also constrains cross-origin subresources and the rest of the site loads
Google Fonts and fetches from `raw.githubusercontent.com`.

Verified: Inter and Sora still load correctly under `COEP: credentialless`.

If isolation is ever lost, `vips.js`'s `__pthread_create_js` returns error code 6 rather
than aborting, so the tools degrade to single-threaded instead of breaking.

Assets are vendored into `public/wasm/` (~14 MB) and `public/workers/`. **The pdf.js
worker must match the installed `pdfjs-dist` version** — copy it from
`node_modules/pdfjs-dist/build/` after any upgrade, never from another project.

## Redirects

In `public/_redirects`: `/webapp/` → `/tools/`, `/qr-generator/` →
`/tools/qr-generator/`. `WebApp.jsx` and the standalone `QrGenerator.jsx` page are
deleted; the QR form now lives at `src/tools/QrCodeGenerator.jsx` like any other tool.

`bibliofuse-web.netlify.app` should be retired once these are live.

## Indexing

English only at launch. The non-English locale files carry English fallback text (from
`sync-keys.cjs`), so every `/tools/*` route is in `NOINDEX_NON_EN_ROUTES` in both
`generate-sitemap.js` and `generate-static-routes.js`. This follows the rollout rules in
CLAUDE.md — do not publish a locale URL until its translations are real.

**To turn on `es`/`fr`/`ja`:** translate `redesign.toolsPages.*` and `redesign.toolsHub.*`,
confirm with `scripts/scan-untranslated.cjs`, then remove the `/tools/*` entries from both
noindex sets. Wait until the English pages show as indexed in GSC first.

## Still to do — handed off

The four tools remain live on lokaltools.com, so the same tools are published on two
domains. bibliofuse.com is now serving `/tools/`, so the removal is unblocked.

**Not done from this side deliberately.** The `lokaltools` repo has ~160 files modified by
a concurrent monetization/ads workstream, including the three components this change would
delete (`CBZReducer.tsx`, `EPUBReducer.tsx`, `PDFToCBZ.tsx`) plus `src/data/tools.ts` and
`src/app/sitemap.ts`. Editing it in parallel would conflict and could destroy uncommitted
work.

The full spec is in `docs/handoff-lokaltools-tool-migration.md` — registry entries,
component paths, the four learn articles (all blog content, only two of which are in the
tool→learn slug map), the eight redirects with verified targets, and what must NOT be
deleted (`public/wasm/` is shared with other image tools).


## Windows tools and the Netlify retirement (2026-09-10)

`/tools/` gained an "Offline tools for Windows" group carrying BiblioFuse CBZ Resizer
(`9p7b02538tfq`) and BiblioFuse EPUB Resizer (`9pdllhdz6kkl`), moved off the homepage when
`StandaloneToolsSection` was retired. Copy lives at `redesign.toolsHub.offline`.
`MicrosoftStoreBadge` was lifted out of `Home.jsx` into `src/components/` so both pages
share one copy.

**BiblioFuse Web is retired.** Its card pointed at `bibliofuse-web.netlify.app` - the last
thing on the site sending people off-domain for a job the site now does itself, and the
same indirection that made the old conversion articles convert at 0.25-0.7%. Check the
iOS/Android apps for a hardcoded link before taking the Netlify site down.

## Header clearance

Tool pages must clear the `fixed h-16` nav. `ToolPageLayout.jsx` and `ToolsHub.jsx` use
`pt-28`, matching every other page. They originally shipped with `pt-10`/`pt-12`, which put
the breadcrumb behind the header.
