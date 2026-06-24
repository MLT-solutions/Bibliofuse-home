# Deploy — bibliofuse.com

Hosted on **GitHub Pages** via the `gh-pages` branch. Deployed with one command:

```bash
npm run deploy
```

This runs:
1. `npm run build` — Vite build → `dist/`
2. `node scripts/generate-sitemap.js` — writes `dist/sitemap.xml`
3. `node scripts/generate-static-routes.js` — copies `dist/index.html` into each language + route path so direct URL loads work as static files
4. `gh-pages -d dist` — pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves at `bibliofuse.com`

## Prerequisites

- `gh-pages` package installed (`npm install`)
- GitHub remote set to `git@github.com:mattlifetech/bibliofuse-home.git` (or HTTPS equivalent)
- You must be authenticated: `gh auth status`

## What gets deployed

All routes are pre-rendered as static HTML copies:

| Route | Static file path |
|-------|-----------------|
| `/{lang}/` | `dist/{lang}/index.html` |
| `/{lang}/webapp` | `dist/{lang}/webapp/index.html` |
| `/{lang}/about` | `dist/{lang}/about/index.html` |
| `/{lang}/privacy` | `dist/{lang}/privacy/index.html` |
| `/{lang}/grepreader` | `dist/{lang}/grepreader/index.html` |
| `/{lang}/blog` | `dist/{lang}/blog/index.html` |
| `/{lang}/blog/{slug}` | `dist/{lang}/blog/{slug}/index.html` |

Unknown paths are caught by `public/404.html`, which redirects back to `/` via `sessionStorage`.

## After deploy

- Changes are live at `https://bibliofuse.com` within ~1 minute.
- Verify the sitemap at `https://bibliofuse.com/sitemap.xml`.
- Check Google Search Console to submit the updated sitemap if new routes were added.

## Adding a new page route

When adding a new page, update `ROUTES` in both scripts before deploying:

- `scripts/generate-sitemap.js`
- `scripts/generate-static-routes.js`

## Adding a new blog article

When adding a new article, update `ARTICLE_SLUGS` in both scripts before deploying. See `CLAUDE.md` for the full registration checklist.
