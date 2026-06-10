// Changelog entries — newest first within each array
// type: 'release' | 'feature' | 'fix' | 'known-issue' | 'roadmap'
// platform: 'ios' | 'pc' | 'android' | 'all'

export const ENTRIES = [
  // ── iOS & macOS ────────────────────────────────────────────────────────
  {
    date: '2026-06-06',
    version: '2.0.4',
    platform: 'ios',
    type: 'release',
    title: 'v2.0.4 — iOS & macOS',
    desc: 'TTS now resumes from your visible scroll position instead of the chapter top. Bug fixes for Mac streaming toolbar sort/filter controls and stale connection handling.',
  },
  {
    date: '2026-06-02',
    version: '2.0.3',
    platform: 'ios',
    type: 'release',
    title: 'v2.0.3 — iOS',
    desc: 'Restored reading position on reader open for both iOS and macOS. Fixed auto-resume in CBZ/CBR paged and continuous modes.',
  },
  {
    date: '2026-05-26',
    version: '2.0.2',
    platform: 'ios',
    type: 'release',
    title: 'v2.0.2 — iOS & macOS',
    desc: 'First stable Mac→iOS streaming release. Secure HTTPS streaming via cert pinning (Tailscale). iCloud-based endpoint discovery for remote networks. Manual IP entry for custom VPN setups.',
  },
  {
    date: '2026-05-12',
    platform: 'ios',
    type: 'feature',
    title: 'Secure streaming over Tailscale',
    desc: 'Streaming now uses TLS with SPKI cert pinning, making it safe over 5G and remote networks via Tailscale. iCloud stores the Tailscale IP so iOS finds the Mac automatically.',
  },
  {
    date: '2026-05-09',
    platform: 'ios',
    type: 'feature',
    title: 'Full 11-language localization',
    desc: 'All app views — reader, library, tools, settings, streaming setup — are now localized in English, Spanish, French, Dutch, Portuguese, Russian, Chinese, Japanese, Korean, Indonesian, and Malay.',
  },

  // ── PC / Windows ───────────────────────────────────────────────────────
  {
    date: '2026-06-10',
    platform: 'pc',
    type: 'release',
    title: 'PC Reader — Microsoft Store submission',
    desc: 'MSIX package signed and submitted to the Microsoft Store. Awaiting review and approval. Includes freemium gating with 7-day trial, lifetime IAP, full reader, compress/merge tools, and Mac→PC streaming.',
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: 'Freemium + lifetime IAP',
    desc: '7-day free trial on first launch. One-time lifetime purchase unlocks the full app (Store ID: 9P39PKBP4CNC). Trial UI, paywall, and premium gates wired across all views.',
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: 'Full 11-language localization',
    desc: 'All 87 UI strings localized across English, Spanish, French, Dutch, Portuguese, Russian, Chinese, Japanese, Korean, Indonesian, and Malay.',
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: 'PC→iOS streaming',
    desc: 'Stream your local library from Windows PC to the BiblioFuse iOS app. Requires Tailscale. Same feature set as the Mac Home Library streaming.',
  },

  // ── Android ────────────────────────────────────────────────────────────
  {
    date: '2026-01-30',
    version: '1.0.57',
    platform: 'android',
    type: 'release',
    title: 'v1.0.57 — Android',
    desc: 'Fixed iPad and tablet reader UI layout shifts. This is the last active Android release; the app is in maintenance mode.',
  },
  {
    date: '2026-01-29',
    version: '1.0.56',
    platform: 'android',
    type: 'release',
    title: 'v1.0.56 — Android',
    desc: 'EULA and Privacy Policy updates. iOS in-app purchase validation fix.',
  },
  {
    date: '2026-01-28',
    version: '1.0.49',
    platform: 'android',
    type: 'fix',
    title: 'Android 16 KB memory page compatibility',
    desc: 'Upgraded Gradle and NDK to fix crashes on Android devices using 16 KB memory page sizes, required for newer Android hardware.',
  },
  {
    date: '2026-01-27',
    version: '1.0.44',
    platform: 'android',
    type: 'feature',
    title: 'In-app purchase + premium unlock',
    desc: 'One-time payment setup for Android and iOS. Includes license restoration, premium activation/revocation UI, and localized restore button.',
  },
];

export const KNOWN_ISSUES = [
  {
    platform: 'ios',
    title: 'Streaming requires Tailscale — LAN-only mode not available',
    desc: "iOS's App Transport Security blocks plain HTTP to local IPs. Tailscale is required for both home Wi-Fi and remote streaming. A LAN-only mode without Tailscale is not currently in the roadmap.",
  },
  {
    platform: 'pc',
    title: 'Microsoft Store approval pending',
    desc: 'The PC Reader app has been submitted but not yet approved. It is not publicly downloadable yet.',
  },
  {
    platform: 'android',
    title: 'No Mac/PC → Android streaming',
    desc: 'Android uses a separate Flutter codebase without iCloud integration. Streaming support would require a near-total rewrite and is not planned.',
  },
  {
    platform: 'android',
    title: 'SMB network access unverified',
    desc: 'SMB drive access on Android has not been fully tested in recent releases.',
  },
];

export const ROADMAP = [
  {
    platform: 'pc',
    title: 'Microsoft Store public launch',
    desc: 'Awaiting Store approval. Will be available as a free download with a 7-day trial and one-time lifetime purchase.',
    status: 'pending',
  },
  {
    platform: 'ios',
    title: 'LAN streaming without Tailscale',
    desc: 'Home Wi-Fi streaming without needing Tailscale installed. Currently parked — technical constraints around iOS ATS make this complex.',
    status: 'parked',
  },
  {
    platform: 'all',
    title: 'Cross-platform reading progress sync',
    desc: 'Sync your reading position between iOS, macOS, and PC via iCloud.',
    status: 'exploring',
  },
];
