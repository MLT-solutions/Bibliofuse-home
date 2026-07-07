# Build pipeline & content-maintenance scripts

`scripts/`, invoked from `package.json`'s `build` script and by hand.

## Automated build steps (run on every `npm run build`)
In order, after `vite build`:
1. `scripts/generate-sitemap.js` — writes `public/sitemap.xml` from the known routes
   (pages × languages, blog posts).
2. `scripts/generate-static-routes.js` — enumerates every route the site serves, used
   by the prerender step (and potentially by the host for routing config).
3. `scripts/prerender.js` — renders each route to static HTML so blog/marketing pages
   have real content for SEO crawlers and social-media unfurling, despite being an SPA.

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
