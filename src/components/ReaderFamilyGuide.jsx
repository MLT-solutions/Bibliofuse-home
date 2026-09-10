import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Added 2026-07-20 — the reader family grew to 9 surfaces across 3 streaming
// modes (iOS/iPadOS, macOS, Windows, visionOS, tvOS, Android phone, Docker,
// Synology SPK, Android TV) and the old 3-column apple/pc/android table
// (ComparisonTable, above) couldn't carry that anymore. Client-side only,
// deliberately not a new indexed route — see docs/site-showcase-audit.md and
// the 2026-07-20 portfolio review (this site can't afford new indexed surface
// while ranking position on existing pages is still suppressed).
//
// Host/client connection-mode data below is a first pass reverse-engineered
// from product notes, not verified against the apps themselves — check it
// before treating the picker's output as authoritative.
//
// 2026-07-20 corrections against actual source docs:
// - Docker/Synology native-app streaming was wrong on first pass (claimed
//   Local Wi-Fi / iCloud+Tailscale already work). Per
//   github.com/MLT-solutions/bibliofuse-nas-distribution's README ("Product
//   status" table) and the v0.1.3 release notes, released iOS/visionOS apps
//   do NOT support a Docker connection yet, and Synology native streaming is
//   "validation pending" — only the free built-in browser reader is confirmed
//   working today for either host. Fixed via host.nativeStreaming.
// - Apple TV was wrong too (claimed iCloud + Tailscale support). Per
//   bibliofuse_iosv2/docs/tvos-streaming-reader-go-no-go-port-plan.md and
//   mac-remote-streaming.md: tvOS has no iCloud Documents entitlement, and
//   the Tailscale path is fully implemented but shipped disabled
//   (TVAppState.remoteTailscaleEnabled = false) pending an upstream Tailscale
//   tvOS client bug. Apple TV is Local Wi-Fi (LAN) only, by design, not a
//   roadmap gap. Fixed via client.lanOnly.
// - iPhone/iPad was never a real host option. Every source doc (Mac/PC
//   remote-streaming docs, the LAN/Tailscale routing plan,
//   private-remote-streaming-article-notes.md) describes streaming as
//   Mac/PC/NAS -> iPhone/iPad/visionOS/tvOS, one direction. There is no
//   iPhone/iPad host role anywhere in the source. Removed from HOSTS
//   entirely rather than caveated — this isn't a "not yet," it's not a
//   product concept.
//
// 2026-07-20, second pass — product-owner line-by-line review of the
// docs/reader-family-data/ CSVs (verified confidence, not just cited docs):
// - Mac and Windows are HOST ONLY, never clients — resolves the two
//   `unverified` rows the first pass flagged. Removed CLIENTS.mac and
//   CLIENTS.windows.
// - Synology native streaming is confirmed working (Local Wi-Fi + Manual
//   Tailscale), not "pending" — the v0.1.3 release-notes gate language was
//   stale. Removed host.nativeStreaming from HOSTS.synology.
// - New distinction: `icloudRelay` (does this host write its endpoint to the
//   user's iCloud Drive for automatic discovery?) is separate from
//   `tailscaleCapable` (does Tailscale reach this host at all?). Mac/Windows
//   support both, so an iCloud client gets automatic "iCloud + Tailscale"
//   discovery. Synology supports Tailscale but not the iCloud relay, so an
//   iCloud client falls back to Manual Tailscale against it — same
//   Tailscale-capable host, different resolved mode depending on this flag.
// - visionOS is also a standalone reader, not client-only (COVERAGE_ROWS
//   role text corrected; no CLIENTS logic change).
// - tvOS and Android TV are both `status: 'soon'` per the product owner
//   (not `'live'`/`'new'` as the first pass had it) — see COVERAGE_ROWS.
// Windows/Mac/Android specifics are now product-owner-verified; see
// docs/reader-family-data/ for the full sourced CSVs and per-row notes.
//
// 2026-07-20, third pass — product owner re-reviewed and verified
// host-client-capabilities.csv (added content_source_support, bumped
// Docker/Apple TV confidence from `high` to `verified`). Every field that
// affects this component's logic already matched what was applied in the
// second pass above — no HOSTS/CLIENTS changes required, except one held
// back: the submitted row flipped CLIENTS.androidtv.canStream to true, but
// that contradicts the same row's own "Not yet built" note and
// platform-coverage.csv's status=soon. Kept canStream: false and flagged it
// in host-client-capabilities.csv rather than silently applying a claim
// that Android TV streaming works when nothing else in the same review says
// it does — confirm with the product owner before flipping this.
//
// 2026-07-24, fifth pass — product owner confirmed two capability launches:
// Docker/other NAS now supports native Local Wi-Fi streaming to clients
// (was `soon`), and the Android phone streaming client has shipped (Local
// Wi-Fi + Manual Tailscale; no iCloud relay since Android has no iCloud
// Documents access). CLIENTS.androidphone.canStream flipped to true.
// Android TV remains unresolved per the third-pass note above — not part of
// this update. Status column removed from the matrix table (redundant with
// the per-cell "soon" glyph); table itself is now collapsed by default with
// an expand toggle since it had grown long.
//
// 2026-07-24, sixth pass — product owner confirmed Android TV streaming has
// shipped too (the third-pass hold applied). CLIENTS.androidtv.canStream
// flipped to true, lanOnly: true added — Local Wi-Fi only, no Tailscale.
// MATRIX_ROWS' Android TV row already only had streaming.localWifi set (no
// manualTs), so the coverage table needed no change — only the interactive
// picker's client list was stale.
//
// 2026-09-10, seventh pass — product owner corrections against the shipped
// apps (OPDS 1.x + OPDS-PSE landed 2026-08-10, native Komga/Kavita API
// 2026-08-12; see src/data/feature-matrix.js):
// - A third-party OPDS / Kavita / Komga server is now a content source in its
//   own right, so it is both a new content-support column in the matrix and a
//   new host option in the picker. Supported on iPhone/iPad, visionOS and
//   Android phone; the two TV clients cannot reach it.
// - Android phone was still marked "Standalone reader (no streaming)" in the
//   role columns, which contradicted the sixth pass flipping
//   CLIENTS.androidphone.canStream to true. Moved to "has streaming".
// - OPDS deliberately bypasses MODE_INFO entirely: the app talks straight to
//   the server over HTTP, so none of the three BiblioFuse connection modes
//   apply. Reaching it from outside the house is the user's own VPN/Tailscale
//   problem, not something the app negotiates — the picker says so rather
//   than recommending a mode that does not exist for this host.
//
// 2026-09-10, eighth pass — localized. This component was "English-only by
// design" from the first pass on (see git history) because translating a
// decision tree into 11 locales wasn't worth it while the site was
// recovering from the June collapse and low-signal-locale work was paused.
// The site owner asked for it directly, so all labels/notes/data moved to
// `redesign.readerFamilyGuide` in translation.json, and the Recommendation
// component's composed sentences became named-interpolation templates
// (`{{hostLabel}}`, `{{clientLabel}}`, `{{modeLabel}}`, `{{clientNote}}`)
// rather than JS template literals — the standard i18next pattern for
// content assembled from user-selected state. Rendered via
// dangerouslySetInnerHTML since templates carry `<strong>` (i18next
// `escapeValue: false` is already set globally in src/i18n.js for exactly
// this). HOSTS/CLIENTS/MODE_INFO/MATRIX_ROWS keep their non-translatable
// logic fields (canStream, tailscaleCapable, icloudRelay, lanOnly, kind,
// opdsCapable) as plain JS — only display strings moved to i18n.
// English-only in every non-English locale until translated (tracked
// separately); i18next's fallbackLng serves the English object meanwhile,
// identical to how the tools pages worked before their own fix today.

function useRfg() {
  const { t } = useTranslation();
  return t('redesign.readerFamilyGuide', { returnObjects: true });
}

// Logic-only fields (never displayed) plus the key each host/client resolves to under
// redesign.readerFamilyGuide.hosts / .clients for its label/note/appLinkLabel.
const HOSTS = {
  mac: { tailscaleCapable: true, icloudRelay: true },
  windows: { tailscaleCapable: true, icloudRelay: true },
  synology: {
    tailscaleCapable: true,
    icloudRelay: false,
    appLink: 'https://github.com/MLT-solutions/bibliofuse-nas-distribution/releases',
  },
  docker: {
    tailscaleCapable: false,
    icloudRelay: false,
    appLink: 'https://github.com/MLT-solutions/bibliofuse-nas-distribution',
  },
  opds: { kind: 'opds', tailscaleCapable: false, icloudRelay: false },
};

const CLIENTS = {
  iphone_ipad: { canStream: true, isAppleICloud: true, opdsCapable: true },
  visionpro: { canStream: true, isAppleICloud: true, opdsCapable: true },
  appletv: { canStream: true, lanOnly: true },
  androidphone: { canStream: true, opdsCapable: true },
  androidtv: { canStream: true, lanOnly: true },
};

// Matrix data reviewed and supplied by the product owner, 2026-07-20 (fourth
// pass) — replaces the earlier prose-summary COVERAGE_ROWS. `kind` picks the
// streaming-cell symbol: 'host' rows show a supported-connection triangle,
// 'client' rows show a can-connect-via circle; any cell can independently be
// `true` (supported now), `'soon'` (not yet — shown as the same coming-soon
// mark regardless of host/client kind), or `false`/omitted (not applicable).
// `platformKey` looks up the display name under table.platforms.
const MATRIX_ROWS = [
  {
    platformKey: 'docker', kind: 'host',
    role: { hosting: true, browser: true },
    content: { nas: true },
    streaming: { localWifi: true },
  },
  {
    platformKey: 'synology', kind: 'host',
    role: { hosting: true, browser: true },
    content: { nas: true },
    streaming: { localWifi: true, manualTs: true },
  },
  {
    platformKey: 'macos', kind: 'host',
    role: { hosting: true, standaloneNo: true },
    content: { local: true, nas: true, icloud: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platformKey: 'windows', kind: 'host',
    role: { hosting: true, standaloneNo: true },
    content: { local: true, nas: true, icloud: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platformKey: 'iphoneIpad', kind: 'client',
    role: { standaloneHave: true },
    content: { local: true, icloud: true, host: true, opds: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platformKey: 'visionos', kind: 'client',
    role: { standaloneHave: true },
    content: { local: true, icloud: true, host: true, opds: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platformKey: 'androidPhone', kind: 'client',
    role: { standaloneHave: true },
    content: { local: true, host: true, opds: true },
    streaming: { localWifi: true, manualTs: true },
  },
  {
    platformKey: 'tvos', kind: 'client',
    role: {},
    content: { host: true },
    streaming: { localWifi: true },
  },
  {
    platformKey: 'androidtv', kind: 'client',
    role: {},
    content: { host: true },
    streaming: { localWifi: true },
  },
];

const ROLE_KEYS = ['hosting', 'browser', 'standaloneNo', 'standaloneHave'];
const CONTENT_KEYS = ['local', 'nas', 'icloud', 'host', 'opds'];
const STREAM_KEYS = ['icloudTs', 'localWifi', 'manualTs'];
const CLIENT_KEY_ORDER = ['iphone_ipad', 'visionpro', 'appletv', 'androidphone', 'androidtv'];
const HOST_KEY_ORDER = ['mac', 'windows', 'synology', 'docker', 'opds'];

function CheckCell({ value, comingSoonLabel, supportedLabel }) {
  if (!value) return <td className="px-3 py-2.5 text-center"></td>;
  if (value === 'soon') {
    return <td className="px-3 py-2.5 text-center text-amber-500" title={comingSoonLabel}>✜</td>;
  }
  return <td className="px-3 py-2.5 text-center text-emerald-600" title={supportedLabel}>✓</td>;
}

function StreamCell({ value, kind, comingSoonLabel, hostLabel, clientLabel }) {
  if (!value) return <td className="px-3 py-2.5 text-center"></td>;
  if (value === 'soon') {
    return <td className="px-3 py-2.5 text-center text-amber-500" title={comingSoonLabel}>✜</td>;
  }
  return kind === 'host'
    ? <td className="px-3 py-2.5 text-center text-blue-600" title={hostLabel}>△</td>
    : <td className="px-3 py-2.5 text-center text-indigo-500" title={clientLabel}>○</td>;
}

function CoverageTable({ rfg }) {
  const tbl = rfg.table;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-sm">
          <thead>
            <tr>
              <th rowSpan={2} className="sticky left-0 z-20 border-b border-r border-slate-200 bg-slate-900 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-white">
                {tbl.platformHeader}
              </th>
              <th colSpan={ROLE_KEYS.length} className="border-b border-blue-200 bg-blue-50 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-blue-700">{tbl.roleHeader}</th>
              <th colSpan={CONTENT_KEYS.length} className="border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-emerald-700">{tbl.contentHeader}</th>
              <th colSpan={STREAM_KEYS.length} className="border-b border-slate-300 bg-slate-100 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-slate-600">{tbl.streamHeader}</th>
            </tr>
            <tr>
              {ROLE_KEYS.map((k) => (
                <th key={k} className="border-b border-blue-100 bg-blue-50/60 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-blue-700">{tbl.roleCols[k]}</th>
              ))}
              {CONTENT_KEYS.map((k) => (
                <th key={k} className="border-b border-emerald-100 bg-emerald-50/60 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-emerald-700">{tbl.contentCols[k]}</th>
              ))}
              {STREAM_KEYS.map((k) => (
                <th key={k} className="border-b border-slate-200 bg-slate-50 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-slate-600">{tbl.streamCols[k]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX_ROWS.map((row, i) => {
              const rowBg = i % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              return (
                <tr key={row.platformKey} className="border-t border-slate-100">
                  <td className={`sticky left-0 z-10 border-r border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-950 ${rowBg}`}>{tbl.platforms[row.platformKey]}</td>
                  {ROLE_KEYS.map((k) => <CheckCell key={k} value={row.role[k]} comingSoonLabel={tbl.legend.comingSoon} supportedLabel={tbl.legend.supported} />)}
                  {CONTENT_KEYS.map((k) => <CheckCell key={k} value={row.content[k]} comingSoonLabel={tbl.legend.comingSoon} supportedLabel={tbl.legend.supported} />)}
                  {STREAM_KEYS.map((k) => <StreamCell key={k} value={row.streaming[k]} kind={row.kind} comingSoonLabel={tbl.legend.comingSoon} hostLabel={tbl.legend.supportedConnection} clientLabel={tbl.legend.canConnectVia} />)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> {tbl.legend.supported}</span>
        <span className="flex items-center gap-1.5"><span className="text-indigo-500">○</span> {tbl.legend.canConnectVia}</span>
        <span className="flex items-center gap-1.5"><span className="text-blue-600">△</span> {tbl.legend.supportedConnection}</span>
        <span className="flex items-center gap-1.5"><span className="text-amber-500">✜</span> {tbl.legend.comingSoon}</span>
      </div>
    </div>
  );
}

function OptionGroup({ label, keys, labels, value, onChange }) {
  return (
    <div>
      <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${
              value === key
                ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'
            }`}
          >
            {labels[key]}
          </button>
        ))}
      </div>
    </div>
  );
}

// Fills a template string's {{name}} placeholders and returns it for
// dangerouslySetInnerHTML (templates carry <strong>; i18next's escapeValue:false is
// already set globally for this exact pattern — see src/i18n.js).
function fill(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => (vars[key] ?? ''));
}

function Html({ html, className }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Recommendation({ hostKey, clientKey, wantsAway, lang, rfg }) {
  const host = HOSTS[hostKey];
  const client = CLIENTS[clientKey];
  const hostLabel = rfg.hosts[hostKey]?.label;
  const clientLabel = rfg.clients[clientKey]?.label;
  const clientNote = rfg.clients[clientKey]?.note;
  const r = rfg.recommendation;

  // A third-party catalogue is not a BiblioFuse host: the app speaks OPDS or the
  // Komga/Kavita API straight to it, so none of MODE_INFO's three connection
  // modes are involved and there is nothing to pick. Reaching it from outside
  // the house is the user's own network problem, which is why this branch talks
  // about VPN/subnet routing instead of recommending a mode.
  if (host.kind === 'opds') {
    if (!client.opdsCapable) {
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">{r.heading}</div>
          <p className="text-sm leading-relaxed text-slate-700">
            <Html html={fill(r.cantConnectOpds, { clientLabel })} />
          </p>
        </div>
      );
    }

    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">{r.heading}</div>
        <ul className="mt-3 space-y-3 text-sm text-slate-800">
          <li className="flex gap-2.5">
            <span className="mt-0.5 font-black text-blue-600">1.</span>
            <span>
              <Html html={r.opdsStep1} />
              <span className="block text-slate-500">{rfg.hosts.opds.note}</span>
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-0.5 font-black text-blue-600">2.</span>
            <span>
              <Html html={fill(r.opdsStep2Label, { clientLabel })} />
              <span className="block text-slate-500">{r.opdsStep2Detail}</span>
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-0.5 font-black text-blue-600">3.</span>
            <span>
              <Html html={fill(r.opdsStep3, { clientLabel })} />
              <span className="block text-slate-500">{r.opdsStep3Detail}</span>
              <Link
                to={`/${lang}/tools/qr-generator/`}
                className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                {r.opdsQrCta}
              </Link>
            </span>
          </li>
        </ul>
        <p className="mt-4 rounded-lg bg-white/70 px-3.5 py-2.5 text-xs leading-relaxed text-slate-600">
          <Html html={wantsAway ? r.opdsAwayNote : r.opdsHomeNote} />
        </p>
      </div>
    );
  }

  if (!client.canStream) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">{r.heading}</div>
        <p className="text-sm leading-relaxed text-slate-700">
          <Html html={fill(r.cantStream, { clientLabel, clientNote })} />
        </p>
      </div>
    );
  }

  if (host.nativeStreaming === 'unsupported') {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-700">{r.heading}</div>
        <p className="text-sm leading-relaxed text-slate-800">
          <Html html={fill(r.unsupportedHost, { hostLabel, clientLabel })} />
        </p>
        {host.appLink && (
          <a href={host.appLink} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-950">
            {rfg.hosts[hostKey].appLinkLabel}
          </a>
        )}
      </div>
    );
  }

  const wantsRemote = wantsAway && host.tailscaleCapable && !client.lanOnly;
  const modeKey = !wantsRemote ? 'local-wifi' : client.isAppleICloud && host.icloudRelay ? 'icloud-ts' : 'manual-ts';
  const mode = rfg.modes[modeKey];
  const cappedByHost = wantsAway && !host.tailscaleCapable && !client.lanOnly;
  const cappedByClient = wantsAway && client.lanOnly;

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">{r.heading}</div>
      <ul className="mt-3 space-y-3 text-sm text-slate-800">
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">1.</span>
          <span>
            <Html html={fill(r.step1, { hostLabel })} />
            {rfg.hosts[hostKey].note && <span className="block text-slate-500">{rfg.hosts[hostKey].note}</span>}
            {host.appLink && (
              <a href={host.appLink} target="_blank" rel="noopener" className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900">
                {rfg.hosts[hostKey].appLinkLabel}
              </a>
            )}
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">2.</span>
          <span>
            <Html html={fill(r.step2, { clientLabel })} />
            {clientNote && <span className="block text-slate-500">{clientNote}</span>}
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">3.</span>
          <span>
            <Html html={fill(r.step3, { clientLabel, modeLabel: mode.label })} />
            <span className="block text-slate-500">{mode.detail}</span>
          </span>
        </li>
      </ul>
      {cappedByHost && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-800">
          {fill(r.cappedByHost, { hostLabel })}
        </p>
      )}
      {cappedByClient && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-800">
          {fill(r.cappedByClient, { clientLabel })}
        </p>
      )}
    </div>
  );
}

function ReaderFamilyGuide({ lang = 'en' }) {
  const rfg = useRfg();
  const [hostKey, setHostKey] = useState('mac');
  const [clientKey, setClientKey] = useState('iphone_ipad');
  const [wantsAway, setWantsAway] = useState(true);

  const hostLabels = useMemo(() => Object.fromEntries(HOST_KEY_ORDER.map((k) => [k, rfg.hosts[k]?.label])), [rfg]);
  const clientLabels = useMemo(() => Object.fromEntries(CLIENT_KEY_ORDER.map((k) => [k, rfg.clients[k]?.label])), [rfg]);

  const recommendation = useMemo(
    () => <Recommendation hostKey={hostKey} clientKey={clientKey} wantsAway={wantsAway} lang={lang} rfg={rfg} />,
    [hostKey, clientKey, wantsAway, lang, rfg]
  );

  return (
    <section id="setup-guide" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* Deliberately no platform count here. It used to read "Nine surfaces" — a
              hardcoded number that had to be edited on every launch, and that already
              disagreed with the sentence below it (the matrix has nine rows; the
              sentence lists nine names by merging Android phone/TV and splitting
              iPhone/iPad). An OPDS/Komga/Kavita server is NOT a tenth surface: it is
              someone else's server that BiblioFuse reads from, which is why it is a
              content-source column and not a matrix row. */}
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{rfg.eyebrow}</div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-slate-950">
            {rfg.title}
          </h2>
          <p className="mt-4 text-slate-600">
            {rfg.intro}
          </p>
        </div>

        <details className="group mb-14">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
            {rfg.coverageToggle}
            <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="mt-6">
            <CoverageTable rfg={rfg} />
          </div>
        </details>

        <div className="rounded-3xl border border-slate-200 bg-[#f5f8ff] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <OptionGroup label={rfg.hostQuestion} keys={HOST_KEY_ORDER} labels={hostLabels} value={hostKey} onChange={setHostKey} />
            <OptionGroup label={rfg.clientQuestion} keys={CLIENT_KEY_ORDER} labels={clientLabels} value={clientKey} onChange={setClientKey} />
          </div>

          <div className="mt-6">
            <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">{rfg.whereQuestion}</div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setWantsAway(false)}
                className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${!wantsAway ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'}`}
              >
                {rfg.onlyHome}
              </button>
              <button
                type="button"
                onClick={() => setWantsAway(true)}
                className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${wantsAway ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'}`}
              >
                {rfg.homeAndAway}
              </button>
            </div>
          </div>

          <div className="mt-7">{recommendation}</div>
        </div>
      </div>
    </section>
  );
}

export default ReaderFamilyGuide;
