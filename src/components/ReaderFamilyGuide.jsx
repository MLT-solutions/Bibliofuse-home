import React, { useMemo, useState } from 'react';

// Added 2026-07-20 — the reader family grew to 9 surfaces across 3 streaming
// modes (iOS/iPadOS, macOS, Windows, visionOS, tvOS, Android phone, Docker,
// Synology SPK, Android TV) and the old 3-column apple/pc/android table
// (ComparisonTable, above) couldn't carry that anymore. Client-side only,
// deliberately not a new indexed route — see docs/site-showcase-audit.md and
// the 2026-07-20 portfolio review (this site can't afford new indexed surface
// while ranking position on existing pages is still suppressed).
//
// English-only by design, unlike the rest of this page: translating a
// decision tree into 11 locales isn't worth it while low-signal-locale
// translation work is paused (see src/i18n.js INDEXED_LANGUAGES). Revisit if
// this becomes a permanent fixture.
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

const MODE_INFO = {
  'icloud-ts': {
    label: 'iCloud + Tailscale (automatic)',
    detail: 'Keep Tailscale on. The app finds your library on its own, at home or away — nothing to type in.',
  },
  'manual-ts': {
    label: 'Manual Tailscale',
    detail: "For devices without iCloud. Enter the host's Tailscale address once in Settings.",
  },
  'local-wifi': {
    label: 'Local Wi-Fi',
    detail: 'No iCloud or Tailscale needed. Only works while both devices share the same Wi-Fi network.',
  },
};

const HOSTS = {
  mac: { label: 'Mac (support local & NAS)', tailscaleCapable: true, icloudRelay: true },
  windows: { label: 'PC (support local & NAS)', tailscaleCapable: true, icloudRelay: true },
  synology: {
    label: 'Synology NAS (SPK)',
    tailscaleCapable: true,
    icloudRelay: false,
    note: 'Zero-config folder picker — points at your existing library, nothing duplicated. No automatic iCloud discovery (that’s a Mac/Windows-only relay) — pairs over Manual Tailscale instead.',
    appLink: 'https://github.com/MLT-solutions/bibliofuse-nas-distribution/releases',
    appLinkLabel: 'View Synology releases →',
  },
  docker: {
    label: 'Docker / other NAS',
    tailscaleCapable: false,
    icloudRelay: false,
    note: 'Free self-hosted server and browser reader — no subscription needed to host or read in the browser.',
    nativeStreaming: 'unsupported',
    appLink: 'https://github.com/MLT-solutions/bibliofuse-nas-distribution',
    appLinkLabel: 'Get BiblioFuse NAS (Docker) →',
  },
};

const CLIENTS = {
  iphone_ipad: { label: 'iPhone / iPad', canStream: true, isAppleICloud: true },
  visionpro: { label: 'Apple Vision Pro', canStream: true, isAppleICloud: true, note: 'Also a standalone reader — this only applies when streaming from a host.' },
  appletv: { label: 'Apple TV', canStream: true, lanOnly: true, note: 'Companion app — streams only, no local library on the box itself. Local Wi-Fi (LAN) only: tvOS has no iCloud Documents entitlement and the Tailscale path is built but disabled pending an upstream Tailscale tvOS bug, so Apple TV can’t discover a host outside the house yet.' },
  androidphone: { label: 'Android phone', canStream: false, note: 'Streaming client is coming soon — standalone reading only today.' },
  androidtv: { label: 'Android TV', canStream: false, note: 'Coming soon — planned as Local Wi-Fi only, not Tailscale.' },
};

// Matrix data reviewed and supplied by the product owner, 2026-07-20 (fourth
// pass) — replaces the earlier prose-summary COVERAGE_ROWS. `kind` picks the
// streaming-cell symbol: 'host' rows show a supported-connection triangle,
// 'client' rows show a can-connect-via circle; any cell can independently be
// `true` (supported now), `'soon'` (not yet — shown as the same coming-soon
// mark regardless of host/client kind), or `false`/omitted (not applicable).
const MATRIX_ROWS = [
  {
    platform: 'Docker (NAS)', kind: 'host', status: 'live',
    role: { hosting: true, browser: true },
    content: { nas: true },
    streaming: { localWifi: 'soon' },
  },
  {
    platform: 'Synology NAS (SPK)', kind: 'host', status: 'live',
    role: { hosting: true, browser: true },
    content: { nas: true },
    streaming: { localWifi: true, manualTs: true },
  },
  {
    platform: 'macOS', kind: 'host', status: 'live',
    role: { hosting: true, standaloneNo: true },
    content: { local: true, nas: true, icloud: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platform: 'Windows PC', kind: 'host', status: 'live',
    role: { hosting: true, standaloneNo: true },
    content: { local: true, nas: true, icloud: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platform: 'iPhone / iPad', kind: 'client', status: 'live',
    role: { standaloneHave: true },
    content: { local: true, icloud: true, host: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platform: 'visionOS', kind: 'client', status: 'live',
    role: { standaloneHave: true },
    content: { local: true, icloud: true, host: true },
    streaming: { icloudTs: true, localWifi: true, manualTs: true },
  },
  {
    platform: 'Android phone', kind: 'client', status: 'live',
    role: { standaloneNo: true },
    content: { local: true, host: 'soon' },
    streaming: { localWifi: 'soon' },
  },
  {
    platform: 'tvOS (Apple TV)', kind: 'client', status: 'soon',
    role: {},
    content: { host: true },
    streaming: { localWifi: true },
  },
  {
    platform: 'Android TV', kind: 'client', status: 'soon',
    role: {},
    content: { host: true },
    streaming: { localWifi: true },
  },
];

const ROLE_COLS = [
  { key: 'hosting', label: 'Hosting as a server' },
  { key: 'browser', label: 'Free browser reader' },
  { key: 'standaloneNo', label: 'Standalone reader (no streaming)' },
  { key: 'standaloneHave', label: 'Standalone reader (has streaming)' },
];
const CONTENT_COLS = [
  { key: 'local', label: 'Local' },
  { key: 'nas', label: 'NAS' },
  { key: 'icloud', label: 'iCloud' },
  { key: 'host', label: 'Host' },
];
const STREAM_COLS = [
  { key: 'icloudTs', label: 'iCloud + Tailscale' },
  { key: 'localWifi', label: 'Local Wi-Fi' },
  { key: 'manualTs', label: 'Manual Tailscale' },
];

function StatusPill({ status, label }) {
  const styles = {
    live: 'bg-emerald-50 text-emerald-700',
    new: 'bg-blue-50 text-blue-700',
    soon: 'bg-slate-100 text-slate-500',
  };
  const text = label || (status === 'live' ? 'Live' : status === 'new' ? 'New' : 'Coming soon');
  return <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${styles[status]}`}>{text}</span>;
}

function CheckCell({ value }) {
  if (!value) return <td className="px-3 py-2.5 text-center"></td>;
  if (value === 'soon') {
    return <td className="px-3 py-2.5 text-center text-amber-500" title="Coming soon">✜</td>;
  }
  return <td className="px-3 py-2.5 text-center text-emerald-600" title="Supported">✓</td>;
}

function StreamCell({ value, kind }) {
  if (!value) return <td className="px-3 py-2.5 text-center"></td>;
  if (value === 'soon') {
    return <td className="px-3 py-2.5 text-center text-amber-500" title="Coming soon">✜</td>;
  }
  return kind === 'host'
    ? <td className="px-3 py-2.5 text-center text-blue-600" title="Supported connection">△</td>
    : <td className="px-3 py-2.5 text-center text-indigo-500" title="Can connect via">○</td>;
}

function CoverageTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr>
              <th rowSpan={2} className="sticky left-0 z-20 border-b border-r border-slate-200 bg-slate-900 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-white">
                Platform
              </th>
              <th colSpan={ROLE_COLS.length} className="border-b border-blue-200 bg-blue-50 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-blue-700">Role</th>
              <th colSpan={CONTENT_COLS.length} className="border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-emerald-700">Content source support</th>
              <th colSpan={STREAM_COLS.length} className="border-b border-slate-300 bg-slate-100 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-slate-600">Streaming connection modes</th>
              <th rowSpan={2} className="border-b border-slate-200 bg-slate-900 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white">Status</th>
            </tr>
            <tr>
              {ROLE_COLS.map((c) => (
                <th key={c.key} className="border-b border-blue-100 bg-blue-50/60 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-blue-700">{c.label}</th>
              ))}
              {CONTENT_COLS.map((c) => (
                <th key={c.key} className="border-b border-emerald-100 bg-emerald-50/60 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-emerald-700">{c.label}</th>
              ))}
              {STREAM_COLS.map((c) => (
                <th key={c.key} className="border-b border-slate-200 bg-slate-50 px-2 py-2 text-center text-[10.5px] font-semibold leading-tight text-slate-600">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX_ROWS.map((row, i) => {
              const rowBg = i % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              return (
                <tr key={row.platform} className="border-t border-slate-100">
                  <td className={`sticky left-0 z-10 border-r border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-950 ${rowBg}`}>{row.platform}</td>
                  {ROLE_COLS.map((c) => <CheckCell key={c.key} value={row.role[c.key]} />)}
                  {CONTENT_COLS.map((c) => <CheckCell key={c.key} value={row.content[c.key]} />)}
                  {STREAM_COLS.map((c) => <StreamCell key={c.key} value={row.streaming[c.key]} kind={row.kind} />)}
                  <td className="px-3 py-2.5 text-center"><StatusPill status={row.status} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Supported</span>
        <span className="flex items-center gap-1.5"><span className="text-indigo-500">○</span> Can connect via (client)</span>
        <span className="flex items-center gap-1.5"><span className="text-blue-600">△</span> Supported connection (host)</span>
        <span className="flex items-center gap-1.5"><span className="text-amber-500">✜</span> Coming soon</span>
      </div>
    </div>
  );
}

function OptionGroup({ label, options, value, onChange }) {
  return (
    <div>
      <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(options).map(([key, opt]) => (
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
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Recommendation({ hostKey, clientKey, wantsAway }) {
  const host = HOSTS[hostKey];
  const client = CLIENTS[clientKey];

  if (!client.canStream) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Given your combination</div>
        <p className="text-sm leading-relaxed text-slate-700">
          <strong>{client.label}</strong> can&rsquo;t stream from a host yet — {client.note} Use the BiblioFuse app on {client.label} for local, standalone reading in the meantime.
        </p>
      </div>
    );
  }

  if (host.nativeStreaming === 'unsupported') {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-700">Given your combination</div>
        <p className="text-sm leading-relaxed text-slate-800">
          Native app streaming from <strong>{host.label}</strong> to <strong>{client.label}</strong> isn&rsquo;t supported yet in the released apps.
          {' '}Host your library on {host.label} today and read it in its free built-in browser reader instead — that part works now, on any device, no app required.
        </p>
        {host.appLink && (
          <a href={host.appLink} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-950">
            {host.appLinkLabel}
          </a>
        )}
      </div>
    );
  }

  const wantsRemote = wantsAway && host.tailscaleCapable && !client.lanOnly;
  const modeKey = !wantsRemote ? 'local-wifi' : client.isAppleICloud && host.icloudRelay ? 'icloud-ts' : 'manual-ts';
  const mode = MODE_INFO[modeKey];
  const cappedByHost = wantsAway && !host.tailscaleCapable && !client.lanOnly;
  const cappedByClient = wantsAway && client.lanOnly;

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">Given your combination</div>
      <ul className="mt-3 space-y-3 text-sm text-slate-800">
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">1.</span>
          <span>
            Run the host on <strong>{host.label}</strong>.{host.note && <span className="block text-slate-500">{host.note}</span>}
            {host.appLink && (
              <a href={host.appLink} target="_blank" rel="noopener" className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900">
                {host.appLinkLabel}
              </a>
            )}
          </span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">2.</span>
          <span>Read on <strong>{client.label}</strong>.{client.note && <span className="block text-slate-500">{client.note}</span>}</span>
        </li>
        <li className="flex gap-2.5">
          <span className="mt-0.5 font-black text-blue-600">3.</span>
          <span>
            In the {client.label} app&rsquo;s connection settings, choose <strong>{mode.label}</strong>.
            <span className="block text-slate-500">{mode.detail}</span>
          </span>
        </li>
      </ul>
      {cappedByHost && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-800">
          Note: {host.label} doesn&rsquo;t support away-from-home streaming yet, so this pairing is Local Wi-Fi only for now, even though you asked for both.
        </p>
      )}
      {cappedByClient && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-800">
          Note: {client.label} is Local Wi-Fi only by design — no iCloud or Tailscale support on this device — so this pairing works at home only, even though you asked for both.
        </p>
      )}
    </div>
  );
}

function ReaderFamilyGuide() {
  const [hostKey, setHostKey] = useState('mac');
  const [clientKey, setClientKey] = useState('iphone_ipad');
  const [wantsAway, setWantsAway] = useState(true);

  const recommendation = useMemo(
    () => <Recommendation hostKey={hostKey} clientKey={clientKey} wantsAway={wantsAway} />,
    [hostKey, clientKey, wantsAway]
  );

  return (
    <section id="setup-guide" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Nine surfaces, one setup</div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-slate-950">
            Find your setup
          </h2>
          <p className="mt-4 text-slate-600">
            The family now spans iPhone, iPad, Mac, Windows, visionOS, tvOS, Android, Docker, and Synology. Pick what hosts your books and what you want to read on, and see exactly which app and connection mode to use.
          </p>
        </div>

        <div className="mb-14">
          <CoverageTable />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#f5f8ff] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <OptionGroup label="What hosts your library?" options={HOSTS} value={hostKey} onChange={setHostKey} />
            <OptionGroup label="What do you want to read on?" options={CLIENTS} value={clientKey} onChange={setClientKey} />
          </div>

          <div className="mt-6">
            <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">Where will you read?</div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setWantsAway(false)}
                className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${!wantsAway ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'}`}
              >
                Only at home
              </button>
              <button
                type="button"
                onClick={() => setWantsAway(true)}
                className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${wantsAway ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'}`}
              >
                At home and away
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
