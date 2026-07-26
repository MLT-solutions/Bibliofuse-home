# Bibliofuse-home — module map

React + Vite marketing/landing site at bibliofuse.com. Hosts the home page plus
landing pages for 3 sister apps (BiblioFuse Reader, GrepTag Reader, Comic Duplicate
Scanner / "Archive"), a multilingual blog, per-app changelogs, and per-app privacy
pages. Deployed via `gh-pages` (see `package.json` `deploy` script).

Two former sister apps, SmartDecrypt and ContentCue, retired their full landing pages
on 2026-07-20 — off-theme for a reader-focused hub and drawing ~0 organic search — in
favor of their listing on mlogictech.com/products. Their bibliofuse.com routes
(`/smartdecrypt`, `/contentcue`) now render a short noindexed "this app has moved"
stub instead; `/changelog` and `/privacy` sub-routes for both are untouched (still the
real App Store-facing compliance pages). See `app-pages.md`.

## Sibling product repos (local checkout paths)

This site makes specific capability claims (supported formats, streaming modes,
controller support, etc.) about apps whose actual source lives in sibling repos, not
here. **Before writing or editing a marketing claim about what an app supports,
check the relevant repo below rather than assuming or trusting an older doc/comment
in this repo** — capabilities ship faster than this site's copy gets updated, in
both directions (features added, and claims that were once true going stale).

| Repo (under `~/GitHub/`) | Covers | Notes |
|---|---|---|
| `bibliofuse_iosv2` | iPhone, iPad, Mac, Apple Vision Pro, Apple TV (tvOS) | Native Swift/SwiftUI. `docs/features/` has per-feature docs (e.g. `ios-controller-input.md`, `universal-input-mapping.md`, `mac-remote-streaming.md`). tvOS reader is CBZ/CBR/ZIP/RAR only — see `docs/tvos-streaming-reader-go-no-go-port-plan.md`. |
| `bibliofuse-windows` | Windows PC (the "PC" column) | Native C#/WinUI. `docs/features/universal-input-mapping.md` covers its Xbox-controller support (fixed bindings, ported from the Apple repo's "Gold Controller Default"). |
| `bibliofuse-android-native` | Android phone/tablet and Android TV (the "Android" column) | Native Kotlin/Compose. `docs/ios-android-feature-parity.md` is a line-by-line audit against the iOS app — check it before assuming Android parity. Android TV lives in its own `tv/` package (separate reader/nav/streaming stack from phone/tablet) and is also CBZ/CBR/ZIP/RAR only, matching tvOS. `docs/phone-external-controller-bindings.md` explicitly warns not to market phone/tablet controller support as available — the framework exists but isn't wired to reader actions yet. |
| `bibliofuse-nas` | Docker / Synology host + embedded browser reader (the "NAS" column) — **private engineering repo, not what users download** | Go. `docs/features/web-reader.md` and `docs/features/native-streaming.md` are the source of truth for what the free browser reader and native streaming actually support (e.g. no PDF, no TTS, no UI localization — verified 2026-07-24, don't re-assume otherwise without re-checking). |
| `bibliofuse-nas-distribution` | Public GitHub repo — what the site's Docker/Synology buttons actually link to | Releases and install docs only, not the source (that's `bibliofuse-nas` above). |
| `bibliofusegreptagreader` | GrepTag Reader (the sister app already featured on this site) | |

Older repos (`bibliofuse-flutter`, `bibliofuse-web`) exist locally but are legacy/
superseded — confirm current relevance before citing them as a source of truth.

## Modules

| Path | What it does |
|---|---|
| `src/App.jsx` | Router root: language-prefixed routing (`/:lang/*`), per-app route table, shared layout (Navigation/Footer) |
| `src/pages/Home.jsx` | Home page |
| `src/pages/WebApp.jsx`, `GrepTagReader.jsx`, `ArchiveScanner.jsx` | Per-app landing pages |
| `src/pages/SmartDecrypt.jsx`, `ContentCue.jsx` | Retired — "this app has moved" stubs linking to mlogictech.com, not landing pages (see above) |
| `src/pages/Blog.jsx`, `BlogPost.jsx` | Blog index + individual post (fetches markdown at runtime) |
| `src/pages/Changelog.jsx`, `AppChangelog.jsx` | Site-wide and per-app changelog views |
| `src/pages/Privacy.jsx`, `AppPrivacy.jsx` | Site privacy page + per-app privacy pages (pulled from `app-legal-docs` repo) |
| `src/pages/About.jsx` | About page |
| `src/i18n.js` + `src/locales/<lang>/translation.json` | i18next setup, 11 supported languages; `INDEXED_LANGUAGES` (en/es/fr/ja) controls which locale variants ask Google to index them — see `i18n-routing.md` |
| `src/data/articles.js` | Blog post registry (slug, date, tags, cover image — content lives in `public/blog/<slug>/<lang>.md`) |
| `src/data/changelog*.js` | Per-app changelog entries (multilingual title/desc objects) |
| `src/components/` | Navigation, Footer, SEO (meta tags/helmet), StickyDownloadBar, DevicePills, ReaderFamilyGuide (platform/streaming picker on `/comicreader/`), ReaderComparisonTable (Reader-vs-GrepTag table, shared by Home.jsx and ComicReader.jsx) |
| `public/blog/<slug>/<lang>.md` | Blog post content, one file per language per post |
| `public/privacy/<lang>.md` | Site-wide privacy policy content, one file per language |
| `scripts/` | Build-time tooling: sitemap generation, static route generation, prerendering, and a large set of one-off translation/content-injection scripts (see `docs/architecture.md`) |
| `docs/reader-family-data/` | Product-owner-reviewed CSVs backing `ReaderFamilyGuide.jsx`'s platform/host/client data — see its own `README.md` for the review workflow |

## Feature docs
See `docs/features/`:
- `i18n-routing.md`
- `blog.md`
- `app-pages.md`
- `changelog.md`
- `privacy-pages.md`
- `build-pipeline.md`
