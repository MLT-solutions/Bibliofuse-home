# Guide (`/guide/`)

One hub for setup, streaming and troubleshooting, at `/{lang}/guide/`.
`src/pages/Guide.jsx`, copy under `redesign.guidePage`.

## Why it exists, and what it deliberately is not

Added 2026-09-10 to replace answers scattered across `/comicreader/`, the blog and the QR
generator page. Modelled loosely on guides.panels.app, but **not** a multi-page docs site:
the June 2026 collapse came from mass-publishing new URLs, so this is one new indexed URL
over content that already ranks.

**It is not generated from `docs/`.** That was the original idea and it does not work —
`docs/` is engineering material (build pipeline, GSC incident post-mortems, Cloudflare
hardening, App Store rejection strategy) and several files reference infrastructure
tokens. None of it is user-facing.

## What it is assembled from

- **11 of the 12 `/comicreader/` FAQs.** They were page sections with no URLs of their
  own, so relocating them cost nothing and they are the best content on the site. Only
  the universal-purchase question stayed behind on `/comicreader/` — and later the same
  day moved on to the homepage FAQ, since it is a buying question and it was the only item
  left there. `redesign.comicReaderPage.faq` no longer exists; see
  `docs/features/app-pages.md`.
- **Links to the surviving blog articles at their existing `/blog/` URLs.** They are
  deliberately *not* re-pathed under `/guide/`: they are the only URLs still earning
  clicks, and putting 301s in front of them to tidy the IA would risk the last things
  that rank. If that trade ever changes, it should be a deliberate decision, not a
  cleanup.
- Cross-links to `/tools/qr-generator/` and `/features/`.

## Structure

Sections come from `redesign.guidePage.sections[]` — each has `id` (anchor), `title`,
`desc`, optional `items[]` (Q&A) and optional `links[]`. Adding a section is a
translation-file edit; no component change needed.

Every Q&A across every section is flattened into one `FAQPage` graph, so this page is the
site's FAQ home. The homepage keeps three top-level questions and its own FAQPage schema —
that was left in place on purpose, because the homepage is the one page Google still
trusts and handing its rich-result eligibility to a brand-new URL would be a bad trade.

## Indexing

English only at launch, like `/tools/`: `/guide` is in `NOINDEX_NON_EN_ROUTES` in
`generate-sitemap.js`, `generate-static-routes.js` and `prerender.js`, and
`hreflangLocales={['en']}` keeps it from advertising noindexed siblings. Translate
`redesign.guidePage` and remove it from those three sets to turn the other locales on.

## Link removed from the Tools section (2026-09-10)

"OCR: extracting text from comics" pointed at `/blog/ocr-comics-extract-text-iphone/`,
which described a feature that does not exist. Both the link and the article are gone —
see `docs/features/blog.md`. When adding a link here, check what the target actually
claims: this hub's value is that everything it points at is true.

## Step 0 audit and repair (2026-09-10)

The 11 Q&A were inherited from `/comicreader/`'s marketing FAQ. Nothing about them came
from search data or support volume, and an audit found four separate defects. All are
fixed; the findings matter more than the fixes.

### 1. Five answers had their content silently dropped in the migration
The move copied each item's `a` string and left its `bullets` behind. Three were reduced
to a lead-in ending in a colon — "It depends on where the book file lives:" (40 chars),
"Both your Mac or PC and your iPhone must have the following configured:" (71), "Here is
what happened:" (98) — and two more lost detail while still reading as complete sentences.
Recovered from `943c4fcd~1`, each locale from its own file rather than retranslated.
`Guide.jsx` never rendered `bullets` at all, so it gained `AnswerBody`.

### 2. The FAQPage schema was publishing those stubs to Google
`faqItems` mapped `it.a` only. Bullets are now folded into the schema answer text, so the
three truncated entries went from 40/71/98 characters to 847/1091/700+.

### 3. All 10 non-English locales were serving English text
Same class of bug as the homepage second hero. The migration wrote the English strings into
every locale even though translated versions of these exact answers existed in
`comicReaderPage.faq`. No SEO damage — `/guide/` is in `NOINDEX_NON_EN_ROUTES` and
`hreflangLocales={['en']}` — but every non-English reader saw English. Restored per locale
from git, verified by an index-alignment fingerprint across all 11 files.

### 4. Four streaming answers were factually wrong or stale
Verified against the sibling repos, not assumed. **This is the important part.**

| Answer | Was | Actually |
|---|---|---|
| "Why can't Android receive books from Mac or PC?" | "different codebase without iCloud integration... use Syncthing" | **Wrong.** `bibliofuse-android-native`'s own `docs/ios-android-feature-parity.md` marks Bonjour/NSD discovery, manual IP entry, PIN auth and save-to-library all **Done**, and calls streaming "best-covered category overall". The answer told users to install a third-party sync tool instead of using a shipped feature, and contradicted the platform table on the same site. |
| "Why does streaming require Tailscale?" | "ATS blocked HTTP to raw IPs... a Tailscale-free LAN mode is not in the current roadmap" | **Stale.** `bibliofuse_iosv2/docs/features/mac-remote-streaming.md`: hosts advertise `_bibliofuse._tcp` LAN **HTTPS** on 7342 with a pinned cert. The LAN failure was a discovery bug (plain `.bonjour` instead of `.bonjourWithTXTRecord`, so TXT metadata was never read) — named there as "the root cause of iOS LAN streaming never working in production" — and it is fixed, with a live integration suite covering it. Tailscale is now only for away-from-home. Question retitled "Do I need Tailscale to stream at home?" |
| "Streaming still not working" | four manual steps deleting `stream_endpoint.json` from iCloud | **Obsolete.** The Mac host now sweeps stale artifacts on every write — the doc explicitly calls this "the FAQ's stale endpoint cache". Kept one honest caveat: the **Windows** host does not do this sweep yet, so the manual cleanup still applies there. |
| "What do I need to set up streaming?" | same iCloud account + Tailscale on both, as flat prerequisites | **Overstated.** At home: allow local network access, nothing else. iCloud + Tailscale are the away-from-home path. A NAS host has no iCloud writer at all and must be paired on the LAN first. |

**The lesson is the process, not the corrections.** Three of these were stale rather than
never-true — capability shipped and the copy did not follow. Anything this page claims
about app behaviour must be checked against the sibling repo listed in `docs/index.md`
before it is written or edited. `ReaderFamilyGuide.jsx` took six review passes to become
accurate for the same reason.

### Still outstanding
This audit fixed what was wrong; it did not make the page answer the right questions.
Search Console shows the largest uncovered demand is EPUB-on-iPhone (~250 impressions,
zero clicks), CBZ/CBR format explainers, and DRM — none of which the guide mentions —
while streaming and visionOS/TTS take 8 of the 11 slots. Rebuilding around researched
demand is tracked separately.
