// Feature × platform matrix — the data behind the comparison table.
//
// Companion to changelog.js, not a replacement. changelog.js answers "what happened,
// in order"; this answers "does platform X do Y, and since when". Both are needed —
// the matrix is what a prospective user checks before buying, the changelog is what
// an existing user reads after updating.
//
// ── Schema ────────────────────────────────────────────────────────────────────
//
// FEATURES[] entries:
//   id       stable slug — safe to use in URLs (?q=page-curl) and never renamed
//   group    one of GROUPS[].id
//   label    display name
//   note     one-line qualifier shown under the label; may be null
//   pro      true when the feature requires BiblioFuse Pro on the platforms that have it
//   aliases  search terms that are NOT in label or note. Load-bearing: a reader
//            searching "tategaki", "RTL" or "OCR" finds nothing against the labels
//            "Vertical Japanese", "Reading-direction switch" and "Live comic & manga
//            translation". Search must cover label + note + aliases.
//   platforms  keyed by PLATFORMS[].id:
//     status   'shipped'  in a public release on that platform
//              'partial'  shipped, with the limitation stated in `note`
//              'merged'   in main, NOT in a released build for that platform yet
//              'na'       not applicable, or not built for that platform
//     since    ISO date the work landed in main. Null for 'na'.
//     noteKey  i18n key under featureMatrix.cellNotes, for 'partial' cells that
//              need a qualifier. Null otherwise.
//
// ── The release a feature first shipped in is DERIVED, never stored ───────────
//
// Cells carry only `since`. `releaseFor(platform, since)` walks RELEASES to find the
// first release of that platform cut on or after the landing date, and that is the
// version the UI shows. Storing it per cell meant 150+ hand-assigned strings that
// silently drifted — an early build of this file labelled every iOS cell 2.1.13,
// which claimed controller support arrived in September when it shipped in 2.1.4 in
// July. Add a landing date and the version follows; add a release to RELEASES and
// every affected cell re-derives.
//
// RELEASES dates are the build-cut/availability dates taken from each platform's
// release commits and store records, not from a changelog. They are the coarsest
// honest granularity: a feature landing between two releases is attributed to the
// later one.
//
// ── 'merged' exists because release cadence is per-platform ───────────────────
//
// Each platform ships on its own schedule, so code in main is not automatically in
// anyone's hands. A cell whose `since` is later than that platform's newest release
// is 'merged', not 'shipped' — tvOS in particular has not released since 2.1.7 on
// 2026-07-27 and carries built-but-unreleased work. The public site must render
// 'merged' as "not yet", never as available.
//
// ── Coverage ─────────────────────────────────────────────────────────────────
//
// Covers the native v2 codebases: iOS/macOS from 2026-05-05 (this repo's first
// commit), Windows from 2026-06-07, visionOS from 2026-07-11, tvOS from 2026-07-15,
// Android from 2026-07-15, NAS from 2026-07-18. Every cell verified against source
// rather than release notes.
//
// NOT covered: the Flutter-era v1.x apps. BiblioFuse iOS 1.0 shipped 2026-01-26 and
// Android was Flutter until the 2.0 rewrite, so v1 features live in a different
// codebase whose history is in ~/GitHub/bibliofuse-flutter. Dating them needs that
// repo; do not guess a `since` to make a row look complete. A missing row is honest.
//
// ── i18n ──────────────────────────────────────────────────────────────────────
//
// Translations live in src/locales/<lang>/translation.json under `featureMatrix`,
// keyed by feature id — NOT inline the way changelog.js holds them. changelog.js is
// append-only prose where each entry is written once and never touched, so inlining
// the eleven variants keeps an entry together. Feature labels are the opposite: a
// stable key set that gets re-worded, so they belong in the locale files translators
// already edit, and this file stays reviewable as data.
//
// `label` and `note` here are the English source and the i18n fallback: the page reads
// t(`featureMatrix.features.<id>.label`) with the inline string as defaultValue, so a
// missing key degrades to English rather than to a raw key.
//
// ⚠ EDITING A LABEL HERE IS NOT ENOUGH once the locale key exists — i18next prefers the
// locale value and ignores defaultValue, so the old wording keeps rendering. Two rows
// were renamed here and shipped unchanged for exactly this reason. Change the string in
// src/locales/en/translation.json too (and the other ten), or run
// `node scripts/check-feature-matrix-i18n.mjs`, which fails when they disagree.
//
// `aliases` stay English-only. They are search keys, and users search product terms in
// English (OPDS, RTL, tategaki, CBZ) whatever language the UI is in.

export const PLATFORMS = [
  { id: 'ios', label: 'iOS / iPadOS', version: '2.1.13', family: 'apple' },
  { id: 'macos', label: 'macOS', version: '2.1.9', family: 'apple' },
  { id: 'visionos', label: 'visionOS', version: '2.1.12', family: 'apple' },
  { id: 'tvos', label: 'tvOS', version: '2.1.7', family: 'apple' },
  { id: 'android', label: 'Android', version: '2.0.15', family: 'android' },
  { id: 'androidtv', label: 'Android TV', version: '2.0.15', family: 'android' },
  { id: 'windows', label: 'Windows', version: '1.0.17.0', family: 'desktop' },
  { id: 'nas', label: 'NAS', version: '0.1.12', family: 'server', sublabel: 'Docker / Synology' },
];

export const GROUPS = [
  { id: 'reading', label: 'Reading' },
  { id: 'libraries', label: 'Libraries & servers' },
  { id: 'streaming', label: 'Streaming from your own machine' },
  { id: 'formats', label: 'File formats' },
  { id: 'input', label: 'Input & platform' },
];

// Release ladders: [version, date it became available]. Ascending by date.
// Only releases that exist on that platform's store record or release commits.
export const RELEASES = {
  ios: [
    ['2.0.1', '2026-05-13'], ['2.0.2', '2026-05-26'], ['2.0.3', '2026-06-02'],
    ['2.0.5', '2026-06-14'], ['2.1.1', '2026-06-26'], ['2.1.2', '2026-07-02'],
    ['2.1.3', '2026-07-08'], ['2.1.4', '2026-07-16'], ['2.1.7', '2026-07-27'],
    ['2.1.8', '2026-08-06'], ['2.1.13', '2026-09-09'],
  ],
  macos: [
    ['2.0.1', '2026-05-09'], ['2.0.2', '2026-05-26'], ['2.0.5', '2026-06-14'],
    ['2.0.6', '2026-06-16'], ['2.1.0', '2026-06-26'], ['2.1.1', '2026-06-29'],
    ['2.1.2', '2026-07-02'], ['2.1.3', '2026-07-08'], ['2.1.4', '2026-07-16'],
    ['2.1.7', '2026-07-27'], ['2.1.8', '2026-08-09'], ['2.1.9', '2026-08-18'],
  ],
  visionos: [
    ['2.1.4', '2026-07-11'], ['2.1.5', '2026-07-17'], ['2.1.6', '2026-07-23'],
    ['2.1.7', '2026-07-27'], ['2.1.8', '2026-08-09'], ['2.1.9', '2026-08-18'],
    ['2.1.12', '2026-08-24'],
  ],
  tvos: [
    ['2.1.5', '2026-07-15'], ['2.1.7', '2026-07-27'],
  ],
  android: [
    ['2.0.0', '2026-07-22'], ['2.0.3', '2026-07-23'], ['2.0.6', '2026-07-26'],
    ['2.0.7', '2026-08-12'], ['2.0.9', '2026-08-13'], ['2.0.11', '2026-08-17'],
    ['2.0.13', '2026-09-03'], ['2.0.15', '2026-09-08'],
  ],
  androidtv: [
    ['2.0.0', '2026-07-22'], ['2.0.3', '2026-07-23'], ['2.0.6', '2026-07-26'],
    ['2.0.7', '2026-08-12'], ['2.0.9', '2026-08-13'], ['2.0.11', '2026-08-17'],
    ['2.0.13', '2026-09-03'], ['2.0.15', '2026-09-08'],
  ],
  windows: [
    ['1.0.5.0', '2026-07-01'], ['1.0.6.0', '2026-07-02'], ['1.0.8.0', '2026-07-18'],
    ['1.0.10.0', '2026-08-10'], ['1.0.15.0', '2026-08-19'], ['1.0.16.0', '2026-09-04'],
    ['1.0.17.0', '2026-09-07'],
  ],
  nas: [
    ['0.1.2', '2026-07-19'], ['0.1.5', '2026-07-22'], ['0.1.6', '2026-07-26'],
    ['0.1.7', '2026-07-27'], ['0.1.9', '2026-08-07'], ['0.1.10', '2026-08-10'],
    ['0.1.11', '2026-08-18'], ['0.1.12', '2026-09-02'],
  ],
};

/**
 * The first release of `platformId` cut on or after `since`.
 * Null when the work postdates every known release — which is what `merged` means.
 */
export function releaseFor(platformId, since) {
  if (!since) return null;
  const ladder = RELEASES[platformId] ?? [];
  const hit = ladder.find(([, date]) => date >= since);
  return hit ? hit[0] : null;
}

// ── Where to get it ─────────────────────────────────────────────────────────
//
// One entry per platform. `kind` picks the badge art; `label` is used where a store
// badge does not exist (the NAS links). URLs mirror the ones ComicReader.jsx uses —
// keep them in step.
export const STORES = {
  ios: { kind: 'apple', url: 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093' },
  macos: { kind: 'apple', url: 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093' },
  visionos: { kind: 'apple', url: 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093' },
  tvos: { kind: 'apple', url: 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093' },
  android: { kind: 'play', url: 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ' },
  androidtv: { kind: 'play', url: 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ' },
  windows: { kind: 'microsoft', url: 'https://apps.microsoft.com/store/detail/9N77MZ509ML2' },
  nas: { kind: 'link', label: 'Docker / Synology', url: 'https://github.com/MLT-solutions/bibliofuse-nas-distribution' },
};

// ── Platform essentials ─────────────────────────────────────────────────────
//
// Text-valued rows, not ●/—. These answer "what does this edition actually give me"
// before the boolean grid answers "does it do feature X", and they carry the facts a
// tick cannot express — which formats, which library sources, how many languages.
//
// Sourced from the comparison table on /comicreader so the two pages cannot disagree;
// that table is the canonical wording. `null` renders as "—".
export const SPECS = [
  {
    id: 'read-formats',
    label: 'Read formats',
    note: null,
    pro: false,
    aliases: ['format', 'EPUB', 'PDF', 'CBZ', 'CBR', 'RAR', 'ZIP', 'TXT', 'file type', 'supported'],
    values: {
      ios: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
      macos: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
      visionos: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
      tvos: 'CBZ · CBR · RAR · ZIP',
      android: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
      androidtv: 'CBZ · CBR · RAR · ZIP',
      windows: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
      nas: 'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT',
    },
    notes: { tvos: 'Comics only — no text reader', androidtv: 'Comics only — no text reader' },
  },
  {
    id: 'library-sources',
    label: 'Library sources',
    note: null,
    pro: false,
    aliases: ['source', 'local', 'iCloud', 'SMB', 'network', 'folder', 'storage', 'where'],
    values: {
      ios: 'Local · iCloud · a BiblioFuse host',
      macos: 'Local · iCloud · SMB / NAS',
      visionos: 'Local · iCloud · a BiblioFuse host',
      tvos: 'A BiblioFuse host only',
      android: 'Local · external folders · a BiblioFuse host',
      androidtv: 'A BiblioFuse host only',
      windows: 'Local · iCloud · SMB / NAS',
      nas: 'Its own attached or network storage',
    },
    notes: { nas: 'Not iCloud' },
  },
  {
    id: 'icloud-bookshelf',
    label: 'iCloud bookshelf',
    note: 'Your library follows you between devices',
    pro: true,
    aliases: ['iCloud', 'sync', 'cross-device', 'cloud', 'bookshelf', 'between devices'],
    values: {
      ios: 'Cross-device sync',
      macos: 'Cross-device sync',
      visionos: 'Cross-device sync',
      tvos: null,
      android: null,
      androidtv: null,
      windows: 'Cross-device sync',
      nas: null,
    },
    notes: { tvos: 'No iCloud on Apple TV' },
  },
  {
    id: 'reader-features',
    label: 'Reader features',
    note: null,
    pro: false,
    aliases: ['peek zoom', 'auto-scroll', 'progress', 'ratings', 'tags', 'TTS', 'reader'],
    values: {
      ios: 'TTS · peek zoom · auto-scroll · progress · ratings · tags',
      macos: 'TTS · auto-scroll · progress · ratings · tags',
      visionos: 'TTS · auto-scroll · progress · ratings · tags',
      tvos: 'Auto-scroll · progress · ratings · tags',
      android: 'TTS · peek zoom · auto-scroll · progress · ratings · tags',
      androidtv: 'Auto-scroll · progress · ratings · tags',
      windows: 'TTS · auto-scroll · progress · ratings · tags',
      nas: 'Continuous scroll · progress · ratings · tags',
    },
    notes: { nas: 'No TTS or peek zoom' },
  },
  {
    id: 'interface-languages',
    label: 'Interface languages',
    note: null,
    pro: false,
    aliases: ['language', 'localisation', 'localization', 'i18n', 'translated'],
    values: {
      ios: '11 languages',
      macos: '11 languages',
      visionos: '11 languages',
      tvos: '11 languages',
      android: '12 languages',
      androidtv: '12 languages',
      windows: '11 languages',
      nas: '11 languages',
    },
    notes: { android: 'Adds German', androidtv: 'Adds German' },
  },
];

// Shorthand builders. No version argument by design — see the header: the release is
// derived from `since` via releaseFor(), so it cannot drift out of step with the date.
const s = (since, noteKey = null) => ({ status: 'shipped', since, noteKey });
const p = (since, noteKey) => ({ status: 'partial', since, noteKey });
const m = (since) => ({ status: 'merged', since, noteKey: null });
const na = { status: 'na', since: null, noteKey: null };

export const FEATURES = [
  // ── File formats ───────────────────────────────────────────────────────────
  // Added 2026-09-10. These three dimensions existed only in the 11-row "Compare apps"
  // table on /comicreader/ and were missing from the matrix entirely — CBR appeared
  // nowhere in it at all, despite format support being the first thing a prospective
  // buyer checks. The table has been reduced to an edition chooser, so the matrix is
  // now the single source for per-platform capability.
  {
    id: 'format-cbz-cbr',
    group: 'formats',
    label: 'CBZ, CBR, ZIP & RAR',
    note: null,
    pro: false,
    aliases: ['CBZ', 'CBR', 'RAR', 'ZIP', 'comic archive', 'comic book archive'],
    platforms: {
      ios: s('2026-05-01'), macos: s('2026-05-01'), visionos: s('2026-06-20'),
      tvos: s('2026-07-02'), android: s('2026-05-01'), androidtv: s('2026-07-10'),
      windows: s('2026-05-01'), nas: s('2026-06-01'),
    },
  },
  {
    id: 'format-epub-pdf-txt',
    group: 'formats',
    label: 'EPUB, PDF & TXT',
    note: null,
    pro: false,
    aliases: ['EPUB', 'PDF', 'TXT', 'ebook', 'plain text'],
    platforms: {
      ios: s('2026-05-01'), macos: s('2026-05-01'), visionos: s('2026-06-20'),
      tvos: na, android: s('2026-05-01'), androidtv: na,
      windows: s('2026-05-01'), nas: s('2026-08-10'),
    },
  },
  {
    id: 'icloud-bookshelf',
    group: 'libraries',
    label: 'iCloud bookshelf',
    note: 'Apple platforms only — the shelf and its metadata sync through your own iCloud.',
    // Pro since 2026-08-18. A free user sees a lock row in Locations instead of the
    // iCloud folder list — a whole-folder gate, like Mac streaming and OPDS. It replaced
    // a free "25 oldest books" cap, and the billing card's iCloud row now reads "—" for
    // free on iOS, Mac and visionOS. This said `pro: false` while the SPECS row for the
    // same id said `pro: true`, and both render on /features/, so the page badged one
    // iCloud row Pro and the other not. See bibliofuse_iosv2
    // docs/features/library-and-formats.md and LibraryView.isCloudFolderLocked.
    pro: true,
    aliases: ['iCloud', 'iCloud Drive', 'sync', 'bookshelf', 'Apple sync'],
    platforms: {
      ios: s('2026-05-14'), macos: s('2026-05-14'), visionos: s('2026-06-20'),
      tvos: na, android: na, androidtv: na, windows: na, nas: na,
    },
  },
  {
    id: 'ui-languages',
    group: 'input',
    label: 'Localised interface',
    note: '11 languages on Apple, Windows and the NAS browser reader.',
    pro: false,
    aliases: ['language', 'languages', 'localisation', 'localization', 'i18n', 'translated UI'],
    platforms: {
      ios: s('2026-06-05'), macos: s('2026-06-05'), visionos: s('2026-06-20'),
      tvos: p('2026-07-02', 'tvosPartialLocale'), android: s('2026-06-12'),
      androidtv: p('2026-07-10', 'tvosPartialLocale'), windows: s('2026-06-05'), nas: s('2026-07-26'),
    },
  },

  // ── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'live-translation',
    group: 'reading',
    label: 'Live comic & manga translation',
    note: 'On-device PP-OCRv5, typeset back into the balloon',
    pro: true,
    aliases: ['OCR', 'translate', 'scanlation', 'raw manga', 'Japanese', 'Chinese', 'Korean', 'CJK', 'PP-OCR', 'offline translation', 'Apple Intelligence'],
    platforms: {
      ios: s('2026-08-28'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-09-03'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'translate-export-cbz',
    group: 'reading',
    label: 'Translate & Export CBZ',
    note: 'Save a fully translated copy of the archive',
    pro: true,
    aliases: ['export', 'save translation', 'translated copy', 'batch translate'],
    platforms: {
      ios: s('2026-08-28'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-09-03'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'page-curl',
    group: 'reading',
    label: 'Page curl page turns',
    note: 'Comics, PDF and text, on tap or swipe',
    pro: true,
    aliases: ['curl', 'page flip', 'page turn animation', 'System Curl', 'realistic page turn'],
    platforms: {
      ios: s('2026-08-14'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-21'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'dual-page-spreads',
    group: 'reading',
    label: 'Dual-page spreads',
    note: 'Landscape tablet, like an open book',
    pro: false,
    aliases: ['spreads', 'two page', 'two-up', 'side by side', 'landscape', 'tablet', 'iPad', 'double page'],
    platforms: {
      ios: s('2026-08-21'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-21'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'vertical-japanese',
    group: 'reading',
    label: 'Vertical Japanese / vertical EPUB',
    note: 'Proper tategaki rendering and routing',
    pro: false,
    aliases: ['tategaki', 'vertical text', 'vertical writing', 'vertical-rl', 'writing mode', 'Japanese novel', 'light novel', 'ruby'],
    platforms: {
      ios: s('2026-08-09'),
      macos: s('2026-08-10'),
      visionos: s('2026-08-10'),
      tvos: na,
      android: s('2026-08-11'),
      androidtv: na,
      windows: s('2026-08-10'),
      nas: s('2026-08-10'),
    },
  },
  {
    id: 'epub-comic',
    group: 'reading',
    label: 'EPUB comic support',
    note: 'Image-spine and fixed-layout EPUBs',
    pro: false,
    aliases: ['image spine', 'fixed layout', 'comic EPUB', 'manga EPUB', 'pre-paginated'],
    platforms: {
      ios: s('2026-08-08'),
      macos: s('2026-08-08'),
      visionos: s('2026-08-08'),
      tvos: m('2026-08-08'),
      android: s('2026-08-11'),
      androidtv: na,
      windows: s('2026-08-10'),
      nas: s('2026-08-10'),
    },
  },
  {
    id: 'find-in-book',
    group: 'reading',
    label: 'Find in Book / whole-book search',
    note: null,
    pro: false,
    aliases: ['search', 'text search', 'full text search', 'find', 'search inside', 'TXT search'],
    platforms: {
      ios: s('2026-08-13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-13'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'reading-direction',
    group: 'reading',
    label: 'Reading-direction switch',
    note: 'Mirrors page, slider and controls; auto-set from metadata',
    pro: false,
    aliases: ['RTL', 'LTR', 'right to left', 'left to right', 'manga direction', 'binding', 'mirror', 'Japanese order'],
    platforms: {
      ios: s('2026-08-13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-12'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'continuous-page-turn',
    group: 'reading',
    label: 'Continuous-mode & page-turn rewrite',
    note: 'Section scrolling for comics, PDF, EPUB and text; turns land where you expect',
    pro: false,
    aliases: ['continuous', 'webtoon', 'long strip', 'scroll', 'fit width', 'auto-scroll', 'page down', 'vertical scroll'],
    platforms: {
      ios: s('2026-09-01'),
      macos: m('2026-09-01'),
      visionos: m('2026-09-01'),
      tvos: na,
      android: s('2026-08-13'),
      androidtv: na,
      windows: s('2026-09-07'),
      nas: s('2026-09-02'),
    },
  },

  // ── Libraries & servers ────────────────────────────────────────────────────
  {
    id: 'komga-kavita-native',
    group: 'libraries',
    label: 'Native Komga & Kavita API',
    note: 'Series detail, tag chips, badges, server-side sort/search',
    pro: true,
    aliases: ['Komga', 'Kavita', 'self-hosted', 'remote library', 'catalog', 'server', 'collections', 'reading lists', 'want to read'],
    platforms: {
      ios: s('2026-08-06'),
      macos: na,
      visionos: s('2026-08-11'),
      tvos: na,
      android: s('2026-08-12'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'opds',
    group: 'libraries',
    label: 'OPDS 1.x + OPDS-PSE streaming',
    note: 'Comics a page at a time. OPDS 2.0 is not supported.',
    pro: true,
    aliases: ['OPDS', 'PSE', 'page streaming', 'Calibre-Web', 'Calibre', 'COPS', 'Ubooquity', 'catalog feed', 'Atom'],
    platforms: {
      ios: s('2026-08-04'),
      macos: na,
      visionos: s('2026-08-05'),
      tvos: na,
      android: s('2026-08-10'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'kavita-sync',
    group: 'libraries',
    label: 'Kavita position & bookmark sync',
    note: null,
    pro: true,
    aliases: ['bookmark', 'resume', 'reading position', 'progress sync', 'continue reading', 'cross-device'],
    platforms: {
      ios: s('2026-08-13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-13'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'folder-as-library',
    group: 'libraries',
    label: 'Folder-as-library browse',
    note: 'Kavita-style series detail, Volume/Chapter tabs',
    pro: false,
    aliases: ['folder', 'scan in place', 'no import', 'series detail', 'volume', 'chapter', 'SMB', 'network folder', 'browse'],
    platforms: {
      ios: s('2026-08-19'),
      macos: s('2026-08-18'),
      visionos: s('2026-08-19'),
      tvos: na,
      android: s('2026-07-16'),
      androidtv: na,
      windows: s('2026-08-19'),
      nas: s('2026-08-18'),
    },
  },
  {
    id: 'managed-downloads',
    group: 'libraries',
    label: 'Managed downloads & progress sync',
    note: 'Plus a download-cache manager',
    pro: false,
    aliases: ['download', 'offline', 'cache', 'storage', 'download manager', 'save for offline'],
    platforms: {
      ios: s('2026-08-08'),
      macos: na,
      visionos: s('2026-08-03'),
      tvos: na,
      android: s('2026-08-12'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },

  // ── Streaming from your own machine ────────────────────────────────────────
  {
    id: 'host-incremental-stream',
    group: 'streaming',
    label: 'BiblioFuse host: streams your own library',
    note: 'Vector PDF pages, comic EPUB pages, lazy reflowable EPUB',
    // Pro at the product level, not in the server binary: MacStreamingServer has no
    // isPro check and the NAS server is free to run, but the only thing that consumes
    // this stream — the reading app — requires Pro, so "stream between your devices"
    // is a Pro capability end to end. Flagged 2026-09-09 by product decision.
    //
    // Known imprecision: `pro` is per row, and NAS is the one column where hosting
    // pays off without Pro, because its browser reader is free. If that distinction
    // starts mattering, the flag needs to move per cell rather than per feature.
    pro: true,
    aliases: ['host', 'server', 'serve', 'stream PDF', 'stream EPUB', 'incremental', 'page serving', 'range requests'],
    platforms: {
      ios: na,
      macos: s('2026-08-05'),
      visionos: na,
      tvos: na,
      android: na,
      androidtv: na,
      windows: s('2026-08-10'),
      nas: s('2026-08-10'),
    },
  },
  {
    id: 'client-reads-host',
    group: 'streaming',
    label: 'BiblioFuse app: reads from your host',
    note: 'Bonjour discovery over pinned HTTPS',
    pro: true,
    aliases: ['Bonjour', 'discovery', 'pinned HTTPS', 'LAN', 'stream from Mac', 'stream from PC', 'stream from NAS', 'mDNS'],
    platforms: {
      ios: s('2026-05-12'),
      macos: s('2026-05-12'),
      visionos: s('2026-07-11'),
      tvos: s('2026-07-15'),
      android: s('2026-07-15'),
      androidtv: s('2026-07-22'),
      windows: na,
      nas: na,
    },
  },
  {
    id: 'connection-routes',
    group: 'streaming',
    label: 'Connection routes',
    note: 'iCloud + Tailscale · Local Wi-Fi · manual Tailscale',
    pro: true,
    aliases: ['Tailscale', 'iCloud', 'Wi-Fi', 'remote access', 'VPN', 'outside home', 'away from home', 'connection mode'],
    platforms: {
      ios: s('2026-07-17'),
      macos: s('2026-07-17'),
      visionos: s('2026-07-17'),
      tvos: p('2026-07-17', 'lanOnlyTvos'),
      android: p('2026-07-15', 'noICloudRoute'),
      androidtv: p('2026-07-22', 'lanOnly'),
      windows: s('2026-07-18'),
      nas: s('2026-08-07', 'tailscaleServe'),
    },
  },

  // ── Input & platform ──────────────────────────────────────────────────────
  {
    id: 'controller',
    group: 'input',
    label: 'Game controller + custom bindings',
    note: null,
    pro: false,
    aliases: ['gamepad', 'controller', 'Xbox', 'PlayStation', 'DualSense', 'joystick', 'bindings', 'remap', '8BitDo'],
    platforms: {
      ios: s('2026-07-16'),
      macos: s('2026-07-17'),
      visionos: s('2026-07-17'),
      tvos: s('2026-07-17'),
      android: s('2026-07-26'),
      androidtv: s('2026-07-26'),
      windows: s('2026-07-28'),
      nas: na,
    },
  },
  {
    id: 'keyboard-shortcuts',
    group: 'input',
    label: 'Reader keyboard shortcuts',
    note: null,
    pro: false,
    aliases: ['keyboard', 'hotkeys', 'shortcuts', 'space bar', 'arrow keys', 'Bluetooth keyboard'],
    platforms: {
      ios: s('2026-07-27'),
      macos: s('2026-07-27'),
      visionos: s('2026-07-28'),
      tvos: na,
      android: s('2026-07-27'),
      androidtv: na,
      windows: s('2026-07-28'),
      nas: na,
    },
  },
  {
    id: 'look-to-scroll',
    group: 'input',
    label: 'Look to Scroll',
    note: 'Gaze-driven edge scrolling',
    pro: false,
    aliases: ['gaze', 'eye tracking', 'eyes', 'Vision Pro', 'spatial', 'hands free', 'edge scroll'],
    platforms: {
      ios: na,
      macos: na,
      visionos: s('2026-07-18'),
      tvos: na,
      android: na,
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  // ── Backfilled 2026-09-09: features predating the July harvest window ─────
  // Dates are first-add or porting commits in each platform's own repository.
  {
    id: 'text-to-speech',
    group: 'reading',
    label: 'Text-to-speech reader',
    note: 'Sentence highlighting, lock-screen controls, sleep timer',
    pro: false,
    aliases: ['TTS', 'read aloud', 'audio', 'speech', 'voice', 'listen', 'narration', 'audiobook', 'Now Playing', 'sleep timer'],
    platforms: {
      ios: s('2026-06-24'),
      macos: s('2026-06-23'),
      visionos: s('2026-07-11'),
      tvos: na,
      android: s('2026-07-21'),
      androidtv: na,
      windows: s('2026-06-08'),
      nas: na,
    },
  },
  {
    id: 'reading-progress-restore',
    group: 'reading',
    label: 'Resume where you left off',
    note: 'Paged and continuous, across archives, PDF and text',
    pro: false,
    aliases: ['resume', 'progress', 'last page', 'continue', 'bookmark position', 'auto-resume', 'remember page'],
    platforms: {
      ios: s('2026-05-26'),
      macos: s('2026-05-26'),
      visionos: s('2026-07-11'),
      tvos: s('2026-07-15'),
      android: s('2026-07-15'),
      androidtv: s('2026-07-22'),
      windows: s('2026-06-08'),
      nas: s('2026-07-19'),
    },
  },
  {
    id: 'export-tools',
    group: 'libraries',
    label: 'Batch & merge export',
    note: 'Combine or convert archives to CBZ and EPUB',
    pro: true,
    aliases: ['export', 'batch', 'merge', 'combine', 'convert', 'CBZ', 'EPUB', 'tools', 'queue', 'bulk'],
    platforms: {
      ios: s('2026-05-10'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-07-21'),
      androidtv: na,
      windows: s('2026-06-08'),
      nas: na,
    },
  },
  {
    id: 'bulk-metadata-editing',
    group: 'libraries',
    label: 'Bulk ratings & tags',
    note: 'Multi-select, then edit metadata in one pass',
    pro: false,
    aliases: ['bulk', 'multi-select', 'batch edit', 'tags', 'rating', 'stars', 'metadata', 'select all'],
    platforms: {
      ios: s('2026-06-30'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-07-15'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'remote-annotations',
    group: 'streaming',
    label: 'Edit and save streamed books',
    note: 'Change tags and rating on the host, or save a copy locally',
    pro: true,
    aliases: ['annotations', 'tags', 'rating', 'save to library', 'download from host', 'writeback', 'edit remote'],
    platforms: {
      ios: s('2026-06-29'),
      macos: s('2026-06-29'),
      visionos: s('2026-07-11'),
      tvos: na,
      android: s('2026-07-15'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'app-lock',
    group: 'input',
    label: 'App lock',
    note: 'PIN gate on the library',
    pro: false,
    aliases: ['PIN', 'passcode', 'lock', 'privacy', 'private', 'hide', 'password'],
    platforms: {
      ios: na,
      macos: na,
      visionos: na,
      tvos: s('2026-07-15'),
      android: na,
      androidtv: s('2026-07-22'),
      windows: na,
      nas: na,
    },
  },
  {
    id: 'spatial-library',
    group: 'input',
    label: 'Spatial library',
    note: 'Browse shelves placed in the room around you',
    pro: false,
    aliases: ['spatial', 'immersive', 'room', 'shelf', '3D', 'Vision Pro', 'volumetric'],
    platforms: {
      ios: na,
      macos: na,
      visionos: s('2026-07-13'),
      tvos: na,
      android: na,
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
];

// ── Helpers the page can build on ───────────────────────────────────────────

/** Text a search box should match against for one feature. */
export function searchIndex(feature) {
  return [feature.label, feature.note ?? '', ...feature.aliases].join(' ').toLowerCase();
}

/**
 * Rows matching a free-text query. Empty query returns everything.
 *
 * Terms match at a word boundary rather than anywhere in the string, so "PIN" finds
 * "PIN gate" and "pinned HTTPS" but not "image-spine". Plain substring matching made
 * every short query noisy, and short queries are the common case. Prefixes still work:
 * "trans" matches "translation".
 */
export function searchFeatures(features, query) {
  const q = query.trim().toLowerCase();
  if (!q) return features;
  const terms = q.split(/\s+/).filter(Boolean);
  const matchers = terms.map(
    (t) => new RegExp(`(^|[^a-z0-9])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'),
  );
  return features.filter((f) => {
    const haystack = searchIndex(f);
    return matchers.every((re) => re.test(haystack));
  });
}

/** Rows with at least one cell that landed on or after `isoDate`. */
export function changedSince(features, isoDate) {
  return features.filter((f) =>
    Object.values(f.platforms).some((c) => c.since && c.since >= isoDate),
  );
}

/** True when a cell should read as available to a user today. */
export function isAvailable(cell) {
  return cell.status === 'shipped' || cell.status === 'partial';
}
