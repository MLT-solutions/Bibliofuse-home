# Bibliofuse-home — module map

React + Vite marketing/landing site at bibliofuse.com. Hosts the home page plus
landing pages for 5 sister apps (BiblioFuse, GrepTag Reader, Comic Duplicate Scanner
/ "Archive", SmartDecrypt, ContentCue), a multilingual blog, per-app changelogs, and
per-app privacy pages. Deployed via `gh-pages` (see `package.json` `deploy` script).

## Modules

| Path | What it does |
|---|---|
| `src/App.jsx` | Router root: language-prefixed routing (`/:lang/*`), per-app route table, shared layout (Navigation/Footer) |
| `src/pages/Home.jsx` | Home page |
| `src/pages/WebApp.jsx`, `GrepTagReader.jsx`, `ArchiveScanner.jsx`, `SmartDecrypt.jsx`, `ContentCue.jsx` | Per-app landing pages |
| `src/pages/Blog.jsx`, `BlogPost.jsx` | Blog index + individual post (fetches markdown at runtime) |
| `src/pages/Changelog.jsx`, `AppChangelog.jsx` | Site-wide and per-app changelog views |
| `src/pages/Privacy.jsx`, `AppPrivacy.jsx` | Site privacy page + per-app privacy pages (pulled from `app-legal-docs` repo) |
| `src/pages/About.jsx` | About page |
| `src/i18n.js` + `src/locales/<lang>/translation.json` | i18next setup, 11 supported languages |
| `src/data/articles.js` | Blog post registry (slug, date, tags, cover image — content lives in `public/blog/<slug>/<lang>.md`) |
| `src/data/changelog*.js` | Per-app changelog entries (multilingual title/desc objects) |
| `src/components/` | Navigation, Footer, SEO (meta tags/helmet), StickyDownloadBar |
| `public/blog/<slug>/<lang>.md` | Blog post content, one file per language per post |
| `public/privacy/<lang>.md` | Site-wide privacy policy content, one file per language |
| `scripts/` | Build-time tooling: sitemap generation, static route generation, prerendering, and a large set of one-off translation/content-injection scripts (see `docs/architecture.md`) |

## Feature docs
See `docs/features/`:
- `i18n-routing.md`
- `blog.md`
- `app-pages.md`
- `changelog.md`
- `privacy-pages.md`
- `build-pipeline.md`
