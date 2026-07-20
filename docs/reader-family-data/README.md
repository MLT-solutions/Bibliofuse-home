# Reader family data — sourcing pass

Draft compilation for the `/comicreader/` platform picker (`src/components/ReaderFamilyGuide.jsx`),
built 2026-07-20 by reading the actual product source repos rather than inferring from marketing
copy, then reviewed line-by-line by the product owner the same day. **Status: reviewed and
applied** — the component now matches these CSVs exactly. Keep using the same workflow for future
corrections: edit the CSV, note what changed, and it gets applied back to the component as a diff.

## Files

- `platform-coverage.csv` — the 9-row table shown on the page (role, connection modes, status).
- `host-client-capabilities.csv` — the underlying host/client capability data that drives the
  picker's recommendation logic (`HOSTS`/`CLIENTS`/`MODE_INFO` in `ReaderFamilyGuide.jsx`).

Both have a `confidence` column and a `source` column citing where the claim comes from:
`verified` = confirmed directly by the product owner (2026-07-20 review, second pass); `high` =
a specific statement found in a source doc, not yet independently confirmed by the owner; `low` =
a stated intent (e.g. a roadmap plan) rather than a documented or confirmed fact.

## Sources read

- `bibliofuse_iosv2/docs/` — iOS/iPadOS/macOS/visionOS/tvOS (native Swift, current). Especially
  `mac-remote-streaming.md`, `tvos-streaming-reader-go-no-go-port-plan.md`,
  `lan-tailscale-https-routing-and-pairing-plan.md`, `docker-synology-web-reader-plan.md`,
  `android-tv-full-port-plan.md`, `private-remote-streaming-article-notes.md`.
- `bibliofuse-windows/docs/features/streaming-to-ios.md` — Windows host implementation
  (discovery, TLS identity, LAN vs. iCloud-relay vs. Tailscale).
- `bibliofuse-nas/docs/` (private repo) — Docker/Synology host architecture, `synology-package.md`
  release-gate status.
- `github.com/MLT-solutions/bibliofuse-nas-distribution` (public repo) — the authoritative
  product-status table and v0.1.3 release notes; this is what caught the Docker/Synology
  inaccuracies below.
- `bibliofuse-flutter/docs/index.md` — confirms the current Android phone app is the **legacy,
  frozen** Flutter codebase (last substantive commit 2026-02-12), not part of the native rewrite.

## What this pass already fixed in the live component

Three inaccuracies were caught and corrected directly in `ReaderFamilyGuide.jsx` before this CSV
was written (see that file's git history, 2026-07-20):

1. Docker and Synology hosts were shown as already supporting native-app streaming
   (Local Wi-Fi / iCloud+Tailscale). The distribution repo's own README says released iOS/visionOS
   apps have no supported Docker connection at all, and Synology streaming is "validation
   pending." Only the free browser reader works today for either host.
2. Apple TV was shown as supporting "iCloud + Tailscale (automatic)". tvOS has no iCloud Documents
   entitlement and ships with its (fully-built) Tailscale path disabled behind
   `TVAppState.remoteTailscaleEnabled = false`, pending an upstream Tailscale tvOS client bug.
   Apple TV is Local Wi-Fi only, by design.
3. iPhone/iPad was offered as a **host** option. No source doc describes iPhone/iPad hosting
   anything — streaming is documented as one-directional, Mac/PC/NAS → mobile/spatial/TV clients.
   Removed from the host list entirely.

## Resolved in the 2026-07-20 product-owner review (second pass)

- **Mac and Windows are host-only, never clients.** Confirmed — the two `unverified` rows from the
  first pass were correct to flag. Removed `CLIENTS.mac` and `CLIENTS.windows` from the component.
- **Synology native streaming is confirmed working** (Local Wi-Fi + Manual Tailscale), not
  "validation pending" as the v0.1.3 release notes had it — that gate language was stale. Removed
  `host.nativeStreaming` from `HOSTS.synology`.
- **New distinction surfaced:** `icloud_relay` (does this host write its endpoint to the user's
  iCloud Drive for automatic discovery?) is separate from `tailscale_capable` (does Tailscale reach
  this host at all?). Mac/Windows have both, so an iCloud client gets automatic "iCloud +
  Tailscale" discovery against them. Synology has Tailscale reachability but not the iCloud relay,
  so the same iCloud client instead resolves to Manual Tailscale against a Synology host — same
  Tailscale capability, different resolved mode, because of this one flag.
- **visionOS is also a standalone reader**, not client-only as the first pass had it.
- **Android phone "coming soon" confirmed still accurate** by the product owner directly.
- tvOS and Android TV are both `status: soon` (not `live`/`new` as the first pass guessed).

## Updating the component from this data

The fields map directly:

| CSV column | Component field |
|---|---|
| `platform-coverage.csv` rows | `COVERAGE_ROWS` array |
| `host-client-capabilities.csv` `tailscale_capable` / `icloud_relay` / `native_streaming` (hosts) | `HOSTS[key]` |
| `host-client-capabilities.csv` `can_stream` / `apple_icloud` / `lan_only` (clients) | `CLIENTS[key]` |

Flag which rows changed and the diff gets applied back to `ReaderFamilyGuide.jsx` directly rather
than re-derived from scratch.
