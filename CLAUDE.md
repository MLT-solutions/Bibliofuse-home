# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **BiblioFuse** — a comic/ebook reader app (iOS, Android, macOS, Windows, Web). Deployed to GitHub Pages at `bibliofuse.com` via `gh-pages`.

Stack: React 18 + Vite, React Router v7, react-i18next, Tailwind CSS, react-helmet-async.

## Commands

```bash
npm run dev        # dev server on port 5174
npm run build      # vite build → generate-sitemap.js → generate-static-routes.js → prerender.js
npm run lint       # eslint
npm run deploy     # npm run build && gh-pages -d dist
npm run preview    # preview built dist locally
```

`npm run build` takes ~5–15 min because of the prerender step (see below) — don't run it on every save, only before verifying a deploy.

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

`src/components/SEO.jsx` uses react-helmet-async to set `<title>`, meta description, canonical URL, hreflang alternate links for all 11 languages, Open Graph, Twitter Card, and JSON-LD structured data. Every page must render `<SEO>` with appropriate props. Supports a `noindex` prop — pass `noindex={true}` to render `<meta name="robots" content="noindex, follow">` for pages that shouldn't rank (see "New page/route rollout rules" below).

Because this is a client-rendered SPA, none of this reaches crawlers unless the **prerender build step** (`scripts/prerender.js`) runs successfully — see "Static site generation" below. Don't assume adding `<SEO>` props alone makes a page's metadata visible to Google; verify with `curl -A Googlebot <url>` against the built `dist/` output, not just in-browser.

### New page/route rollout rules

These exist because of a real incident: a 2026-06-24 batch launch of ~130 new URLs across 11 locales (with 2 apps briefly serving untranslated English content at 9 non-English URLs each) closely preceded a >95% site-wide impression collapse in Google Search Console. Full writeup: `docs/gsc-cloudflare-findings.md`.

1. **Translate before you publish, not after.** Don't add a route to `ROUTES` in `generate-sitemap.js`/`generate-static-routes.js` for a locale until that locale's translation keys are actually filled in (check with `node scripts/scan-untranslated.cjs`). A route live with English-only content sitting behind 9 other language URLs is duplicate content, indexed and submitted, until it's fixed — even a few days of that is enough to trigger a quality reassessment.
2. **Stagger large multi-locale launches.** Adding one new page × 11 languages at a time and letting Google crawl/settle it is safer than dropping 100+ new URLs across every language in a single commit.
3. **Utility/legal pages (changelog, privacy, terms) don't need full translation.** They have near-zero organic search value in any language other than the primary one — users reach them via in-app links, not search. Default new non-English variants of this page type to `noindex` (see `NOINDEX_NON_EN_ROUTES` pattern in `generate-static-routes.js` and `generate-sitemap.js`) rather than mechanically translating boilerplate content across 11 locales.
4. **Every internal link must include a trailing slash** matching the canonical sitemap URL (e.g. `/${lang}/webapp/`, not `/${lang}/webapp`). GitHub Pages 301-redirects the no-slash form, and since `Navigation.jsx`/`Footer.jsx` render on every page, a missing slash there multiplies into a sitewide redirect-crawl-budget issue. Check any new `Link to={...}` against this before committing.
5. **After adding/changing routes, re-run `npm run build` and spot-check the result** — pull up 2–3 of the new pages' raw output (`curl -A Googlebot` or read the `dist/{lang}/{route}/index.html` file directly) and confirm real title/description/content is there, not the blank shell. Don't assume the dev server "looking right" means the deployed static output is correct — they're generated differently.

### Static site generation for GitHub Pages

Because GitHub Pages can't do server-side routing, and this is a client-rendered SPA (React mounts via `ReactDOM.createRoot().render()`, not SSR), the build pipeline does three things in order:

1. **`scripts/generate-sitemap.js`** — writes `dist/sitemap.xml` covering all routes × all languages.
2. **`scripts/generate-static-routes.js`** — copies `dist/index.html` into `dist/{lang}/{route}/` for every route in `ROUTES` so direct URL loads work as static files. Also injects a static `<meta name="robots" content="noindex, follow">` directly into the HTML for routes listed in `NOINDEX_NON_EN_ROUTES` (currently: non-English locales of the 4 sister apps' `/changelog/` and `/privacy/` pages — see `docs/gsc-cloudflare-findings.md` for why).
3. **`scripts/prerender.js`** — uses a headless browser (Puppeteer) to visit every one of those route files and overwrite them with the *actually rendered* HTML (real title, meta description, canonical, hreflang, JSON-LD, and visible content), instead of leaving the blank SPA shell. **This is required** — without it, every page on the site returns byte-for-byte identical, empty HTML to any crawler that doesn't execute JavaScript (confirmed live via `curl -A Googlebot`), which is functionally the most extreme form of duplicate content possible and was a major contributor to a real Google impression collapse (2026-06-26, see `docs/gsc-cloudflare-findings.md`). Because `main.jsx` uses `render()` not `hydrate()`, this has zero effect on real visitors — React just re-renders fresh on top of whatever's there.
4. **`public/404.html`** — redirects unknown GitHub Pages 404s back to `/` via `sessionStorage`.

When adding a new page route, update `ROUTES` in **both** `generate-sitemap.js` and `generate-static-routes.js`. If it's a low-search-value utility page (changelog/privacy/legal), consider adding it to `NOINDEX_NON_EN_ROUTES` for non-English locales rather than translating it — see the "New page/route rollout rules" below.

After any route/content change, run `npm run build` and check the prerender step's summary line (`✅ Prerendered N/N pages`). If it succeeds for close to all pages, you're fine — a small number of flakes from build-machine load is normal and not a regression. If a large number fail, re-check `scripts/prerender.js`'s concurrency/timeout settings before deploying.

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

**Channel IDs (Buffer — Twitter/X and Instagram only):**

| Channel | ID |
|---------|-----|
| Twitter/X (`mattlifetech`) | `67c54e593b85969eaf67659e` |
| Instagram (`mattlifetech`) | `67c54e3d3b85969eaf65a04f` |

> LinkedIn removed from Buffer (slot used for Pinterest). BiblioFuse comic/reader content has low LinkedIn engagement — skip LinkedIn entirely for this project.

**Scheduling slots (SGT = UTC+8). Space 2 articles ≥ 2 h apart on the same channel:**

| Channel | Article 1 (SGT) | Article 2 (SGT) |
|---------|-----------------|-----------------|
| Twitter/X | 09:00 | 11:00 |
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
