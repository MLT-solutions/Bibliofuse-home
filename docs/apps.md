# Bibliofuse-home — App Catalogue

This document is the single source of truth for the homepage. Read it before editing `src/pages/Home.jsx`, `src/components/Footer.jsx`, or `src/data/articles.js`. When a new sister app is added to the homepage, add its entry here first.

---

## Website Goal

`bibliofuse.com` is the marketing homepage for the **BiblioFuse product family** — a suite of privacy-first apps around book/comic reading, file management, and document utilities. All apps share the same brand values: no ads, no tracking, on-device processing.

The site:
- Introduces BiblioFuse Reader as the flagship and links to all store downloads.
- Surfaces the free BiblioFuse Web Tool (WASM-based, no account required).
- Cross-promotes sister apps (Archive Duplicate Scanner, SmartDecrypt, ContentCue, GrepTag Reader) with dedicated page sections.
- Hosts the blog (`/blog`) for SEO content around the app family.
- Supports 11 languages: `en es fr nl pt ru zh ja ko id ms`.

---

## Main App — BiblioFuse Reader

**Homepage section anchor:** `#reader` (Hero + ReaderSection)

### Repos on Mac

| Platform | Path | GitHub |
|----------|------|--------|
| iOS / iPadOS / macOS (native Swift) | `~/GitHub/bibliofuse_iosv2` | — |
| Android / cross-platform (Flutter, older) | `~/GitHub/bibliofuse-flutter` | — |
| Windows | `~/GitHub/bibliofuse-windows` | https://github.com/MLT-solutions/bibliofuse-windows |

### Store Links

| Store | URL |
|-------|-----|
| Apple App Store (iOS/iPadOS/macOS) | https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093 |
| Google Play (Android) | https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader |
| Microsoft Store (Windows) | https://apps.microsoft.com/store/detail/9N77MZ509ML2 |

### Pricing Model

Freemium with subscription + lifetime option. 1-week free trial on Monthly and Annual plans.

| Plan | Price |
|------|-------|
| Monthly Premium | RM 4.90 / month |
| Annual Premium | RM 22.90 / year |
| Lifetime Premium | RM 69.90 one-time |

**Free tier includes:** full local library, EPUB/PDF/CBZ/ZIP/CBR/RAR/TXT reader, Wi-Fi Transfer, manual backup — always free.

**Premium unlocks:**

| Feature | Free | Premium |
|---------|------|---------|
| iCloud Bookshelf | 25 books | Unlimited |
| Auto Page Turn | Fixed 3 s | Adjustable 1–30 s |
| Peek Zoom | Fixed 2× | 1.5×–6× |
| Batch & Merge | 3 / day | Unlimited |
| Auto Backup | — | 5 versions |
| Stream from Mac | — | Unlimited |

### Key Features

- Formats: EPUB, PDF, CBZ, CBR, RAR, ZIP, TXT
- Library with folders, tags, ratings, reading progress, bookmarks
- iCloud sync (iOS/macOS) and Google Drive sync (Android)
- Wi-Fi Transfer — stream Mac library directly to iPhone without copying files
- Continuous vertical scroll (webtoon/manga mode)
- No ads, no tracking, fully on-device

### Changelog & Privacy

| Field | Value |
|-------|-------|
| Privacy Policy URL | https://mlt-solutions.github.io/app-legal-docs/bibliofuse/PRIVACY |
| Privacy route | `/en/privacy` (existing shared page) |
| Changelog route | `/en/changelog` (existing page) |
| ASC Bundle ID (iOS/macOS) | `com.mlogictech.bibliofusereader` |

---

## BiblioFuse Web Tool

**Homepage section:** ProductFamily card + StandaloneToolsSection

**Icon:** `public/image/webtool-logo.png` (green/orange split-book lightning — distinct from Reader)

### Repo on Mac

`~/GitHub/bibliofuse-web`

### Store / Access Links

| Platform | URL |
|----------|-----|
| Web app (Netlify) | https://bibliofuse-web.netlify.app/ |
| Homepage route | `/en/webapp` |

### Pricing Model

**Completely free** — no account, no upload, no file size limits. Runs 100% in WebAssembly inside the browser.

### Key Features

- Compress, convert, merge EPUB / CBZ / PDF
- Extract images from CBZ
- Merge chapter CBZ files into volumes
- No server upload — files never leave the device

---

## BiblioFuse CBZ Resizer (Windows)

**Homepage section:** StandaloneToolsSection (card 2)

**Icon:** `public/image/cbz-resizer-logo.png` (dark green/purple lightning book)

### Project Location

Stored on NAS only — **not in a cloud/GitHub repo**.

| Location | Path |
|----------|------|
| NAS (SMB) | `/Volumes/MasterNAS/Projects/APPProject/BiblioFuse PRO - CBZ Comic` |

### Store Links

| Store | URL |
|-------|-----|
| Microsoft Store (Windows) | https://apps.microsoft.com/detail/9p7b02538tfq |

### Pricing Model

*(Document here — free tier vs paid)*

### Key Features

- Compress and merge comic archives (CBZ/CBR/ZIP/RAR) on Windows
- Batch resize images inside archives
- No cloud upload — fully local

---

## BiblioFuse EPUB Resizer (Windows)

**Homepage section:** StandaloneToolsSection (card 3)

**Icon:** `public/image/epub-resizer-logo.png` (blue/orange lightning book)

### Project Location

Stored on NAS only — **not in a cloud/GitHub repo**.

| Location | Path |
|----------|------|
| NAS (SMB) | `/Volumes/MasterNAS/Projects/APPProject/BiblioFuse ePUB resizer` |

### Store Links

| Store | URL |
|-------|-----|
| Microsoft Store (Windows) | https://apps.microsoft.com/detail/9pdllhdz6kkl |

### Pricing Model

*(Document here — free tier vs paid)*

### Key Features

- Compress and resize images inside EPUB files on Windows
- Reduce EPUB file size for storage or transfer
- No cloud upload — fully local

---

## BiblioFuse GrepTag Reader

**Homepage section anchor:** *(not yet a dedicated section — listed in ProductFamily if added)*

### Repos on Mac

| Platform | Path | GitHub |
|----------|------|--------|
| iOS / iPadOS / macOS | `~/GitHub/bibliofusegreptagreader` | https://github.com/MLT-solutions/bibliofusegreptagreader |
| Windows | *(not yet cloned locally)* | https://github.com/MLT-solutions/bibliofusgreptag-windows |

### Store Links

| Store | URL |
|-------|-----|
| Apple App Store (iOS / macOS) | https://apps.apple.com/app/id6779977609 |
| Microsoft Store (Windows) | *(pending — not yet submitted)* |

Bundle ID: `com.mlogictech.bibliofusegreptagreader`

### Pricing Model

Freemium. Grep scan is always free and unlimited. Plans:

| Plan | Price | Trial |
|------|-------|-------|
| Pro (one-time) | USD $14.99 | — |
| Pro Monthly | USD $0.99 / month | 7-day free |
| Pro Yearly | USD $4.99 / year | 7-day free |

**Free tier:** unlimited grep scans, up to 2 grep profiles, up to 5 tags, EPUB cover extraction, import Tag DB.

**Pro unlocks:**
- Unlimited grep profiles
- Unlimited tags
- TXT cover matching (same-folder images) and URL fetch
- Move / organise files into folders
- Wi-Fi sync between iPhone, iPad, Mac (any direction)
- Export Tag DB (JSON — for future cross-app import; not yet supported in BiblioFuse Reader)

### Key Features

- Grep-scan your entire EPUB/TXT library for keywords with AND/OR/NOT logic
- Save named scan profiles and re-run as library grows
- Tag books from scan results in one tap
- Auto-match TXT book covers from same-folder images

### Changelog & Privacy

| Field | Value |
|-------|-------|
| Privacy Policy URL | https://mlt-solutions.github.io/app-legal-docs/bibliofusegreptagread/PRIVACY |
| Privacy route | `/en/grepreader/privacy` |
| Changelog route | `/en/grepreader/changelog` |
| ASC Bundle ID (iOS/macOS) | `com.mlogictech.bibliofusegreptagreader` |

---

## Sister App — Archive Duplicate Scanner

**Homepage section anchor:** `#archive`

### Repo on Mac

`~/GitHub/Archive Duplicate Scanner`

### Store Links

| Store | URL |
|-------|-----|
| Apple Mac App Store | https://apps.apple.com/eg/app/archive-duplicate-scanner/id6762779449 |
| Microsoft Store (Windows) | https://apps.microsoft.com/detail/9n2jb4k5wvcq |

### Pricing Model

- **Free:** scan up to 1,000 files forever
- **Pro:** USD $19.99 one-time purchase, no subscription. 7-day free trial available.
- Pro unlocks unlimited scans.

### Key Features

- Finds duplicate comic archives and photos using perceptual hashing
- Scans folders recursively; supports CBZ, CBR, ZIP, RAR, image formats
- Works on Mac and Windows

### Changelog & Privacy

| Field | Value |
|-------|-------|
| Privacy Policy URL | https://mlt-solutions.github.io/app-legal-docs/archiveduplicatescanner/PRIVACY |
| Privacy route | `/en/archive/privacy` |
| Changelog route | `/en/archive/changelog` |
| ASC Bundle ID (macOS) | `com.mlogictech.archivescan` |

---

## Sister App — SmartDecrypt PDF ZIP CBZ

**Homepage section anchor:** `#smartdecrypt`

### Repo on Mac

`~/GitHub/SmartDecrypt PDF ZIP CBZ`

### Store Links

| Store | URL |
|-------|-----|
| Apple App Store (iOS/iPadOS/macOS) | https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229 |
| Microsoft Store (Windows) | https://apps.microsoft.com/detail/9p9bfkr5zdz8 |

### Pricing Model

- **Free:** unlock one file at a time using saved filename patterns
- **Pro:** USD $9.99 one-time universal purchase (iOS + macOS share the same purchase). Pro unlocks:
  - Batch file loading
  - Automatic password cycling across saved profiles

### Key Features

- Unlocks password-protected PDF, ZIP, and 7z archives entirely on-device
- Save password profiles by filename pattern (e.g. bank statement format)
- iOS Share Sheet integration — send files from Files, Mail, etc.
- Passwords stored in system Keychain; no server upload

### Changelog & Privacy

| Field | Value |
|-------|-------|
| Privacy Policy URL | https://mlt-solutions.github.io/app-legal-docs/smartdecrypt%20PDF%20ZIP/PRIVACY |
| Privacy route | `/en/smartdecrypt/privacy` |
| Changelog route | `/en/smartdecrypt/changelog` |
| ASC Bundle ID (iOS/macOS) | `com.mlogictech.smartdecrypt` |

---

## Sister App — ContentCue

**Homepage section anchor:** `#contentcue` (ContentCueSection)

### Repo on Mac

`~/GitHub/ContentCue`

### Store Links

| Store | URL |
|-------|-----|
| Apple App Store (iOS) | https://apps.apple.com/us/app/contentcue-reading-browser/id6770080864 |

### Pricing Model

- **Free:** core reading browser with position saving
- **Pro:** USD $2.99 one-time purchase. Pro unlocks:
  - Unlimited bookmarks
  - Custom ad outline styles
  - Adjustable auto-scroll

### Key Features

- iOS browser that saves scroll position when popup ads interrupt reading
- "Resume" button returns to exact position on any site (Webtoons, Tapas, manga sites, etc.)
- Colored borders around in-body ads (visual distinction, not blocking)
- No ad blocking — all ads load normally; this solves a UX problem

### Changelog & Privacy

| Field | Value |
|-------|-------|
| Privacy Policy URL | https://mlt-solutions.github.io/app-legal-docs/contentcue/PRIVACY |
| Privacy route | `/en/contentcue/privacy` |
| Changelog route | `/en/contentcue/changelog` |
| ASC Bundle ID (iOS) | `com.mlogictech.contentcue` |

---

## Why Two Reading Apps (not one)

This is the most important positioning to communicate on the website. Any visitor who knows BiblioFuse Reader will immediately ask "isn't this the same app twice?"

| Perspective | BiblioFuse Reader | GrepTag Reader |
|---|---|---|
| Core focus | Comic/manga reader that also supports EPUB, TXT | EPUB and TXT focus reader |
| Differentiating features | Compress/merge EPUB, CBZ, CBR to save storage; stream from PC/Mac | Full-text grep with boolean profiles; tag books; TXT book covers |
| Content source | Local, iCloud, stream from PC/Mac over LAN or 5G+Tailscale | Local, Wi-Fi LAN sync — any direction between iPhone/iPad/Mac |
| Storage design rationale | Comics are image-heavy (50–300 MB/volume); keeping thousands on-device is impractical — so the app streams from Mac and compresses | EPUB/TXT files are tiny (0.5–5 MB each); a 500-novel library fits on an iPhone, so local storage + cross-device sync is the right model |

**Planned bridge (not yet built):** GrepTag is designed to export a JSON tag database that BiblioFuse Reader could import in a future update. This cross-app tag sync will only be built if there is sufficient user demand. Do not present this as a current feature anywhere on the website.

**Homepage messaging principle:** Lead with reader identity ("comic reader vs. novel reader"), not technical architecture. Let visitors self-sort before explaining the storage rationale.

---

## Adding a New Sister App

1. Add its entry to this file (copy a sister app block above, fill in all fields including **Changelog & Privacy**).
2. Add store URL constants at the top of `src/pages/Home.jsx`.
3. Add a product card entry to the `products` array in `ProductFamily()` in `Home.jsx`.
4. Add a dedicated section component if it warrants one (pattern: `ArchiveScannerSection`, `SmartDecryptSection`, `ContentCueSection`).
5. Add the anchor link to `src/components/Footer.jsx` under Products.
6. Add `redesign.productFamily.products.{key}.*` translation keys to `src/locales/en/translation.json`, then run `node scripts/sync-keys.cjs` and `node scripts/translate-all-langs.cjs`.
7. Create `src/data/changelog-{slug}.js` with `ENTRIES`, `KNOWN_ISSUES`, `ROADMAP` arrays (same shape as `changelog.js`). Mark unreleased entries with `released: false`; entries with a version number that is ≤ the current App Store version get `released: true`.
8. Add routes `/{lang}/{slug}/privacy` and `/{lang}/{slug}/changelog` to `src/App.jsx`.
9. Add slug to `ROUTES` in both `scripts/generate-sitemap.js` and `scripts/generate-static-routes.js`.

## Changelog update workflow

### Release tiers

Each changelog entry has a `released` boolean. In practice there are three real tiers — the field only tracks two, so use git + ASC to disambiguate when needed:

| Tier | `released` value | How to identify |
|------|-----------------|-----------------|
| **App Store** — live for all users | `true` | ASC shows "Ready for Distribution" with a public release date |
| **TestFlight / In Review** — submitted but not yet public | `false` | ASC shows the build under TestFlight or "In Review"; git commits predate the submission timestamp |
| **Local / unreleased** — not yet submitted | `false` | Commits in the app repo are newer than the latest ASC submission timestamp |

Because TestFlight and local-only both use `released: false`, you need the ASC submission date to tell them apart:

1. Open ASC → TestFlight for the app. Note the submission date of the latest build (shown as "Submitted" or the build upload timestamp).
2. Run `git log --oneline --after="<submission-date>"` in the app repo. Commits found here are **not yet in any submitted build** — they are truly local/unreleased.
3. Commits on or before that date are part of the submitted TestFlight build — they will become `released: true` once Apple approves.

**Practical rule:** if a changelog entry spans commits from both sides of the submission date, split it into two entries — one for what's in the submitted build (which will flip to `true` on release) and one for the newer local work (stays `false`).

### Display behaviour

- `released: true` → shows the type badge (RELEASE / FEATURE / FIX) in the changelog UI.
- `released: false` → shows only the amber "UNRELEASED" badge; the type badge is suppressed to avoid showing "RELEASE + UNRELEASED" simultaneously.

### Updating after a release ships

1. Update the app's `src/data/changelog-{slug}.js` with new entries. Set `released: false` on entries not yet in the App Store.
2. Run `node scripts/check-asc-versions.mjs` — calls the ASC API, fetches the current live version for each platform, and prints which entries need to be flipped to `released: true`.
3. Update the data files accordingly, then commit.

**Bundle IDs for ASC version check:**

| App | Bundle ID | Platform |
|-----|-----------|----------|
| BiblioFuse Reader | `com.mlogictech.bibliofusereader` | iOS/macOS |
| GrepTag Reader | `com.mlogictech.bibliofusegreptagreader` | iOS/macOS |
| SmartDecrypt | `com.mlogictech.smartdecrypt` | iOS/macOS |
| ContentCue | `com.mlogictech.contentcue` | iOS |
| Archive Scanner | `com.mlogictech.archivescan` | macOS |
