# Architecture

A single-page React app (Vite) that serves as the marketing hub for 5 sister apps
(BiblioFuse, GrepTag Reader, Comic Duplicate Scanner, SmartDecrypt, ContentCue), plus a
blog and legal pages, all under one deployment at bibliofuse.com.

## Routing & i18n
Every route is language-prefixed (`/:lang/*`, see `App.jsx`). The root path `/` renders
`LanguageRedirect`, which detects the browser/i18next language and redirects to
`/<lang>/`. `AppLayout` validates the `:lang` param against `SUPPORTED_LANGUAGES` and
redirects to `/en/...` if invalid. i18next (`src/i18n.js`) holds all UI-string
translations as static JSON per language; page-level content (blog posts, privacy
policy) is separate — see below.

## Content strategy — two different translation mechanisms
- **UI strings** (nav, buttons, headings): `src/locales/<lang>/translation.json`,
  loaded via i18next, chosen automatically by the active `:lang` route param.
- **Long-form content** (blog posts, site privacy policy): raw markdown files under
  `public/blog/<slug>/<lang>.md` and `public/privacy/<lang>.md`, fetched at runtime by
  `BlogPost.jsx` / `Privacy.jsx` and rendered with `react-markdown`. Falls back to `en`
  if the current language's file 404s.
- **Per-app privacy pages** (`AppPrivacy.jsx`) don't use local markdown at all — they
  fetch live from the separate `app-legal-docs` GitHub repo (`rawUrl` per app), so the
  legal doc source of truth lives in one place and this site always shows the latest.

## Build pipeline
`npm run build` = `vite build` then three Node scripts in sequence
(`scripts/generate-sitemap.js`, `scripts/generate-static-routes.js`,
`scripts/prerender.js`) — sitemap generation, static route enumeration (for prerender
and any static host that needs a route list), and prerendering (so blog/marketing pages
have real HTML for SEO/social crawlers despite being an SPA).

`scripts/` also contains a large collection of one-off Node/Python scripts used to
bulk-generate or fix translations across the 11 languages (e.g.
`translate-all-langs.cjs`, `apply-archive-translations.py`,
`fix-article-backlinks.cjs`). These are content-maintenance tools run ad hoc by hand,
not part of the automated build — see `build-pipeline.md`.

## Deployment
`npm run deploy` → `gh-pages -d dist`. Custom domain via `public/CNAME`.
