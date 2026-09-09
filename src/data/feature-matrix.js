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
//     version  the platform release it first shipped in. Null unless 'shipped'/'partial'.
//     note     per-cell qualifier, for 'partial' and 'merged'
//
// ── 'merged' exists because release cadence is per-platform ───────────────────
//
// Each platform ships on its own schedule, so code in main is not automatically in
// anyone's hands. Cutoffs for this harvest — anything that landed after a platform's
// cutoff is 'merged', not 'shipped':
//
//   ios       2.1.13    cutoff 2026-09-01
//   macos     2.1.9     cutoff 2026-08-18
//   visionos  2.1.12    cutoff 2026-08-24
//   tvos      2.1.7     cutoff 2026-07-27   ← the widest gap; tvOS has not shipped since July
//   android   2.0.15    cutoff 2026-09-08
//   androidtv 2.0.15    cutoff 2026-09-08   (same binary as android)
//   windows   1.0.17.0  cutoff 2026-09-07
//   nas       0.1.12    cutoff 2026-09-02
//
// The public site should render 'merged' as "not yet" or hide it behind a toggle —
// never as available.
//
// ── Coverage: this is NOT yet a from-1.0 matrix ───────────────────────────────
//
// Harvested 2026-09-09, covering features that landed 2026-07-01 → 2026-09-09, each
// cell verified against source rather than release notes. Features predating July 2026
// (import, tagging, ratings, StoreKit, basic CBZ/PDF/EPUB reading, iCloud, Wi-Fi
// transfer, OCR, TTS…) are NOT in here. Add them by finding each one's landing commit
// — do not guess a `since`, and do not backfill a row with a null date just to make the
// table look complete. A missing row is honest; a wrong date is not.
//
// ── i18n ──────────────────────────────────────────────────────────────────────
//
// `label`/`note` are plain strings for now. When the page ships, convert them to the
// `{ en, es, fr, nl, pt, ru, zh, ja, ko, id, ms }` shape changelog.js uses so the
// existing translate scripts can fill them. `aliases` stay English-only — they are
// search keys, and users search product terms in English (OPDS, RTL, tategaki, CBZ).

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
  { id: 'input', label: 'Input & platform' },
];

// Shorthand builders keep the table readable and stop `status`/`since` drifting apart.
const s = (since, version, note = null) => ({ status: 'shipped', since, version, note });
const p = (since, version, note) => ({ status: 'partial', since, version, note });
const m = (since, note) => ({ status: 'merged', since, version: null, note });
const na = { status: 'na', since: null, version: null, note: null };

export const FEATURES = [
  // ── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'live-translation',
    group: 'reading',
    label: 'Live comic & manga translation',
    note: 'On-device PP-OCRv5, typeset back into the balloon',
    pro: true,
    aliases: ['OCR', 'translate', 'scanlation', 'raw manga', 'Japanese', 'Chinese', 'Korean', 'CJK', 'PP-OCR', 'offline translation', 'Apple Intelligence'],
    platforms: {
      ios: s('2026-08-28', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-09-03', '2.0.15'),
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
      ios: s('2026-08-28', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-09-03', '2.0.15'),
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
      ios: s('2026-08-14', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-21', '2.0.15'),
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
      ios: s('2026-08-21', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-21', '2.0.15'),
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
      ios: s('2026-08-09', '2.1.13'),
      macos: s('2026-08-10', '2.1.9'),
      visionos: s('2026-08-10', '2.1.12'),
      tvos: na,
      android: s('2026-08-11', '2.0.15'),
      androidtv: na,
      windows: s('2026-08-10', '1.0.10.0'),
      nas: s('2026-08-10', '0.1.10'),
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
      ios: s('2026-08-08', '2.1.13'),
      macos: s('2026-08-08', '2.1.9'),
      visionos: s('2026-08-08', '2.1.12'),
      tvos: m('2026-08-08', 'Built, but tvOS has not shipped a release since 2.1.7 (2026-07-27)'),
      android: s('2026-08-11', '2.0.15'),
      androidtv: na,
      windows: s('2026-08-10', '1.0.10.0'),
      nas: s('2026-08-10', '0.1.10'),
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
      ios: s('2026-08-13', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-13', '2.0.15'),
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
      ios: s('2026-08-13', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-12', '2.0.15'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'continuous-page-turn',
    group: 'reading',
    label: 'Continuous-mode & page-turn rewrite',
    note: 'Section scrolling; turns land where you expect',
    pro: false,
    aliases: ['continuous', 'webtoon', 'long strip', 'scroll', 'fit width', 'auto-scroll', 'page down', 'vertical scroll'],
    platforms: {
      ios: s('2026-09-01', '2.1.13'),
      macos: m('2026-09-01', 'Landed after macOS 2.1.9 shipped on 2026-08-18'),
      visionos: m('2026-09-01', 'Landed after visionOS 2.1.12 shipped on 2026-08-24'),
      tvos: na,
      android: s('2026-08-13', '2.0.15'),
      androidtv: na,
      windows: s('2026-09-07', '1.0.17.0'),
      nas: s('2026-09-02', '0.1.12'),
    },
  },

  // ── Libraries & servers ────────────────────────────────────────────────────
  {
    id: 'komga-kavita-native',
    group: 'libraries',
    label: 'Native Komga & Kavita API',
    note: 'Series detail, tag chips, badges, server-side sort/search',
    pro: false,
    aliases: ['Komga', 'Kavita', 'self-hosted', 'remote library', 'catalog', 'server', 'collections', 'reading lists', 'want to read'],
    platforms: {
      ios: s('2026-08-06', '2.1.13'),
      macos: na,
      visionos: s('2026-08-11', '2.1.12'),
      tvos: na,
      android: s('2026-08-12', '2.0.15'),
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
    pro: false,
    aliases: ['OPDS', 'PSE', 'page streaming', 'Calibre-Web', 'Calibre', 'COPS', 'Ubooquity', 'catalog feed', 'Atom'],
    platforms: {
      ios: s('2026-08-04', '2.1.13'),
      macos: na,
      visionos: s('2026-08-05', '2.1.12'),
      tvos: na,
      android: s('2026-08-10', '2.0.15'),
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
    pro: false,
    aliases: ['bookmark', 'resume', 'reading position', 'progress sync', 'continue reading', 'cross-device'],
    platforms: {
      ios: s('2026-08-13', '2.1.13'),
      macos: na,
      visionos: na,
      tvos: na,
      android: s('2026-08-13', '2.0.15'),
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
      ios: s('2026-08-19', '2.1.13'),
      macos: s('2026-08-18', '2.1.9'),
      visionos: s('2026-08-19', '2.1.12'),
      tvos: na,
      android: s('2026-07-16', '2.0.15'),
      androidtv: na,
      windows: s('2026-08-19', '1.0.15.0'),
      nas: s('2026-08-18', '0.1.11'),
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
      ios: s('2026-08-08', '2.1.13'),
      macos: na,
      visionos: s('2026-08-03', '2.1.12'),
      tvos: na,
      android: s('2026-08-12', '2.0.15'),
      androidtv: na,
      windows: na,
      nas: na,
    },
  },

  // ── Streaming from your own machine ────────────────────────────────────────
  {
    id: 'host-incremental-stream',
    group: 'streaming',
    label: 'Host role: serves an incremental stream',
    note: 'Vector PDF pages, comic EPUB pages, lazy reflowable EPUB',
    pro: false,
    aliases: ['host', 'server', 'serve', 'stream PDF', 'stream EPUB', 'incremental', 'page serving', 'range requests'],
    platforms: {
      ios: na,
      macos: s('2026-08-05', '2.1.9'),
      visionos: na,
      tvos: na,
      android: na,
      androidtv: na,
      windows: s('2026-08-10', '1.0.10.0'),
      nas: s('2026-08-10', '0.1.10'),
    },
  },
  {
    id: 'client-reads-host',
    group: 'streaming',
    label: 'Client role: reads from a host',
    note: 'Bonjour discovery over pinned HTTPS',
    pro: true,
    aliases: ['Bonjour', 'discovery', 'pinned HTTPS', 'LAN', 'stream from Mac', 'stream from PC', 'stream from NAS', 'mDNS'],
    platforms: {
      ios: s('2026-07-17', '2.1.13'),
      macos: s('2026-07-17', '2.1.9'),
      visionos: s('2026-07-17', '2.1.12'),
      tvos: s('2026-07-15', '2.1.5'),
      android: s('2026-07-15', '2.0.15'),
      androidtv: s('2026-07-22', '2.0.15'),
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
      ios: s('2026-07-17', '2.1.13'),
      macos: s('2026-07-17', '2.1.9'),
      visionos: s('2026-07-17', '2.1.12'),
      tvos: p('2026-07-17', '2.1.5', 'LAN HTTPS only — Tailscale is parked; the tvOS client intermittently stops forwarding data while reporting an online peer'),
      android: p('2026-07-15', '2.0.15', 'Local Wi-Fi and manual Tailscale; the iCloud discovery route is Apple-only'),
      androidtv: p('2026-07-22', '2.0.15', 'LAN only'),
      windows: s('2026-07-18', '1.0.8.0'),
      nas: s('2026-08-07', '0.1.9', 'Tailscale Serve and subnet access'),
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
      ios: s('2026-07-16', '2.1.13'),
      macos: s('2026-07-17', '2.1.9'),
      visionos: s('2026-07-17', '2.1.12'),
      tvos: s('2026-07-17', '2.1.5'),
      android: s('2026-07-26', '2.0.15'),
      androidtv: s('2026-07-26', '2.0.15'),
      windows: s('2026-07-28', '1.0.8.0'),
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
      ios: s('2026-07-27', '2.1.13'),
      macos: s('2026-07-27', '2.1.9'),
      visionos: s('2026-07-28', '2.1.12'),
      tvos: na,
      android: s('2026-07-27', '2.0.15'),
      androidtv: na,
      windows: s('2026-07-28', '1.0.8.0'),
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
      visionos: s('2026-07-18', '2.1.12'),
      tvos: na,
      android: na,
      androidtv: na,
      windows: na,
      nas: na,
    },
  },
  {
    id: 'localisation',
    group: 'input',
    label: '12-language localisation',
    note: null,
    pro: false,
    aliases: ['language', 'localization', 'i18n', 'Japanese', 'Chinese', 'Korean', 'Spanish', 'French', 'German', 'Russian', 'Portuguese', 'Dutch', 'Indonesian', 'Malay'],
    platforms: {
      ios: s('2026-07-15', '2.1.13'),
      macos: s('2026-07-15', '2.1.9'),
      visionos: s('2026-07-15', '2.1.12'),
      tvos: s('2026-07-15', '2.1.5'),
      android: s('2026-07-15', '2.0.15'),
      androidtv: s('2026-07-22', '2.0.15'),
      windows: s('2026-07-18', '1.0.8.0'),
      nas: s('2026-07-26', '0.1.6'),
    },
  },
];

// ── Helpers the page can build on ───────────────────────────────────────────

/** Text a search box should match against for one feature. */
export function searchIndex(feature) {
  return [feature.label, feature.note ?? '', ...feature.aliases].join(' ').toLowerCase();
}

/** Rows matching a free-text query. Empty query returns everything. */
export function searchFeatures(features, query) {
  const q = query.trim().toLowerCase();
  if (!q) return features;
  const terms = q.split(/\s+/);
  return features.filter((f) => {
    const haystack = searchIndex(f);
    return terms.every((t) => haystack.includes(t));
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
