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
