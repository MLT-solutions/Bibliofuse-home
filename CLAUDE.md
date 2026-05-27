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

## Blog

### Cover images

Path: `public/image/blog/{Short Title}.jpg` (singular `image`, not `images`)
Live URL: `https://bibliofuse.com/image/blog/{Short%20Title}.jpg`
Size: 2816 × 1536 px, JPEG quality 92.
Accent colours: blue `(59,130,246)` = guide, purple `(139,92,246)` = explainer, amber `(245,158,11)` = tips.

### Registration checklist

When adding a new article:
1. Prepend to `src/data/articles.js` (newest first).
2. Prepend slug to `ARTICLE_SLUGS` in both `scripts/generate-sitemap.js` and `scripts/generate-static-routes.js`.
3. Add `redesign.blog.posts.{slug}` (`title` + `excerpt`) to all 11 `src/locales/{lang}/translation.json` files.

### Social — Buffer

**GraphQL endpoint:** `https://api.buffer.com/graphql`
**Token:** `8a6z1GSOD1HoKAN-xaXWZkkNvDehz7KkKaYh_RkIAm9`
**Organization ID:** `67c54e0f0f5e2f782e5d2e17`

Do NOT use `https://api.bufferapp.com` (old REST v1) or `https://publish.buffer.com` — they reject this token.

**Channel IDs:**

| Channel | ID |
|---------|-----|
| Twitter/X (`mattlifetech`) | `67c54e593b85969eaf67659e` |
| Instagram (`mattlifetech`) | `67c54e3d3b85969eaf65a04f` |
| LinkedIn company (`modern-logic-tech-solutions`) | `69fbfce95c4c051afa1b4ecd` |
| LinkedIn personal (`matthew-choo`) | `69fbfce95c4c051afa1b4ece` — **read-only, skip** |

**Scheduling slots (SGT = UTC+8). Space 2 articles ≥ 2 h apart on the same channel:**

| Channel | Article 1 (SGT) | Article 2 (SGT) |
|---------|-----------------|-----------------|
| Twitter/X | 09:00 | 11:00 |
| LinkedIn company | 09:30 | 11:30 |
| Instagram | 10:00 | 12:00 |

**createPost mutation (GraphQL):**

```graphql
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    ... on PostActionSuccess { post { id dueAt } }
    ... on InvalidInputError { message }
    ... on LimitReachedError { message }
    ... on UnauthorizedError { message }
    ... on UnexpectedError   { message }
    ... on RestProxyError    { message }
  }
}
```

Required `CreatePostInput` fields:
- `channelId` — channel ID from table above
- `text` — post copy
- `schedulingType` — `"automatic"`
- `mode` — `"customScheduled"`
- `dueAt` — ISO 8601 UTC timestamp
- `assets` — `[{ image: { url: "https://bibliofuse.com/image/blog/..." } }]`
- `metadata.instagram.type` — **required for Instagram**: `"post"`, also set `shouldShareToFeed: true`

**Hashtags:**
- Twitter/X: `#BiblioFuse #Comics #Manga` (2–3 max)
- Instagram: 8–10 tags, always include `#BiblioFuse #Comics #Manga #iPhone #ReadingLife`
- LinkedIn: no hashtags, professional tone

### Article skill routine

Configuration for the `/article` skill and the daily blog routine. This section overrides all skill defaults.

### Paths
- **Cover images:** `public/image/blog/{Title}.jpg` — note singular `image`, not `images`
- **Article content:** `public/blog/{slug}/{lang}.md`
- **Cover image public URL (after deploy):** `https://bibliofuse.com/image/blog/{Title}.jpg`

### Registration checklist (every new article)
1. Prepend entry to `src/data/articles.js` — fields: `slug`, `date`, `tags`, `coverImage`
2. Prepend slug to `ARTICLE_SLUGS` in **both** `scripts/generate-sitemap.js` and `scripts/generate-static-routes.js`
3. Add `redesign.blog.posts.{slug}` keys (`title` + `excerpt`) to all 11 `src/locales/{lang}/translation.json` files

### Locales
11 languages: `en es fr nl pt ru zh ja ko id ms`

### Social (Buffer — Step 8 of /article skill)
- **Article URL pattern:** `https://bibliofuse.com/en/blog/{slug}` (use locale prefix per post language if targeting multilingual audiences, but default to `/en/`)
- **Cover image for posts:** use the live URL `https://bibliofuse.com/image/blog/{Title}.jpg` — no local file upload needed
- **Hashtags:** `#BiblioFuse #Comics #Manga #eReader #EPUB #CBZ` — adjust per article topic
- **Best post times (SGT/UTC+8):** Twitter 9am & 5pm · LinkedIn 8am & noon · Instagram 11am & 7pm · Facebook 1pm & 3pm
