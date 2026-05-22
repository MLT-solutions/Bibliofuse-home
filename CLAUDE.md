# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **BiblioFuse** — a comic/ebook reader app (iOS, Android, macOS, Windows, Web). Deployed to GitHub Pages at `bibliofuse.com` via `gh-pages`.

Stack: React 18 + Vite, React Router v7, react-i18next, Tailwind CSS, react-helmet-async.

## Commands

```bash
npm run dev        # dev server on port 5174
npm run build      # vite build → generate-sitemap.js → generate-static-routes.js
npm run lint       # eslint
npm run deploy     # npm run build && gh-pages -d dist
npm run preview    # preview built dist locally
```

## Architecture

### Routing

All routes are prefixed with a language code: `/:lang/*`. The root `/` runs `LanguageRedirect` which detects the browser language and redirects to `/{lang}/`. Invalid language codes redirect to `/en/`.

Pages: `Home`, `WebApp`, `About`, `Privacy` — mounted under `AppLayout` in `src/App.jsx`.

### Internationalisation

- 11 supported languages defined in `src/i18n.js` → `SUPPORTED_LANGUAGES`
- Translation files: `src/locales/{lang}/translation.json` (English has ~614 keys)
- All translation keys live under the `redesign.*` namespace
- Use `const { t } = useTranslation()` in components; for arrays use `t('key', { returnObjects: true })`
- `SUPPORTED_LANGUAGES` is imported from `src/i18n.js` wherever language lists are needed (routing, SEO, scripts)

### SEO

`src/components/SEO.jsx` uses react-helmet-async to set `<title>`, meta description, canonical URL, hreflang alternate links for all 11 languages, Open Graph, Twitter Card, and JSON-LD structured data. Every page must render `<SEO>` with appropriate props.

### Static site generation for GitHub Pages

Because GitHub Pages can't do server-side routing, the build pipeline does two things:

1. **`scripts/generate-sitemap.js`** — writes `dist/sitemap.xml` covering all routes × all languages.
2. **`scripts/generate-static-routes.js`** — copies `dist/index.html` into `dist/{lang}/`, `dist/{lang}/webapp/`, etc. so direct URL loads work as static files. Routes covered: `/`, `/webapp`, `/about`, `/privacy`.
3. **`public/404.html`** — redirects unknown GitHub Pages 404s back to `/` via `sessionStorage`.

When adding a new page route, update `ROUTES` in both scripts.

### Blog section

Articles are registered in `src/data/articles.js` as an array of `{ slug, date, tags }` objects. The array order determines display order (index 0 = newest).

- **Metadata** (title, excerpt per language): `redesign.blog.posts.{slug}.title` / `.excerpt` in each `src/locales/{lang}/translation.json`. Missing locales fall back to `en`.
- **Full content**: `public/blog/{slug}/{lang}.md`. Falls back to `en.md` if the language file is absent.
- **Routes**: `/blog` (listing) and `/blog/:slug` (article), both under `/:lang/*` in `App.jsx`.

When adding a new article:
1. Add the entry to `src/data/articles.js`.
2. Add `public/blog/{slug}/en.md` (and other language `.md` files as needed).
3. Add `redesign.blog.posts.{slug}` keys to `src/locales/en/translation.json`.
4. Add the slug to `ARTICLE_SLUGS` in both `scripts/generate-sitemap.js` and `scripts/generate-static-routes.js`.

### Adding a new translation key

1. Add the key to `src/locales/en/translation.json`
2. Run `node scripts/sync-keys.cjs` to propagate the key (with empty/placeholder values) to all other locale files
3. Translate values in each locale file, or run `node scripts/translate-all-langs.cjs` (calls an AI translation API)

Helper scripts in `scripts/`:
- `sync-keys.cjs` — syncs key structure from en to all other locales
- `scan-untranslated.cjs` — finds keys that are still empty/untranslated
- `translate-all-langs.cjs` / `translate-all.cjs` — batch-translate via API
