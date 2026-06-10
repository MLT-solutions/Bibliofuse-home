/**
 * Translates all changelog entry titles and descriptions into 10 languages.
 * Uses the local Anthropic proxy (ANTHROPIC_BASE_URL).
 * Outputs a new src/data/changelog.js with multilingual objects.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com';
const AUTH_TOKEN = process.env.ANTHROPIC_AUTH_TOKEN || '';
const LANGS = ['es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const LANG_NAMES = { es: 'Spanish', fr: 'French', nl: 'Dutch', pt: 'Portuguese', ru: 'Russian', zh: 'Simplified Chinese', ja: 'Japanese', ko: 'Korean', id: 'Indonesian', ms: 'Malay' };

async function callClaude(prompt) {
  const body = JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }]
  });

  const url = new URL('/v1/messages', BASE_URL);
  const isHttp = url.protocol === 'http:';
  const lib = isHttp ? http : https;

  return new Promise((resolve, reject) => {
    const req = lib.request({
      hostname: url.hostname,
      port: url.port || (isHttp ? 80 : 443),
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': AUTH_TOKEN,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.content[0].text);
        } catch (e) {
          reject(new Error('Parse error: ' + data.slice(0, 200)));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function translateBatch(strings) {
  const langList = LANGS.map(l => `${l} (${LANG_NAMES[l]})`).join(', ');
  const numbered = strings.map((s, i) => `[${i}] ${s}`).join('\n');

  const prompt = `Translate each of the following strings into these 10 languages: ${langList}.

These are technical app release notes for a comic/ebook reader app (BiblioFuse). Keep version numbers like "v2.0.4", product names like "BiblioFuse", "Tailscale", "iCloud", "SMB", "EPUB", "CBZ", "PDF", platform names like "iOS", "macOS", "Android", "PC", and store names like "App Store", "Microsoft Store" in their original form. Be accurate and natural.

Strings to translate:
${numbered}

Respond ONLY with valid JSON in this exact format (no markdown, no explanation):
{
  "es": ["translation 0", "translation 1", ...],
  "fr": ["translation 0", "translation 1", ...],
  "nl": ["translation 0", "translation 1", ...],
  "pt": ["translation 0", "translation 1", ...],
  "ru": ["translation 0", "translation 1", ...],
  "zh": ["translation 0", "translation 1", ...],
  "ja": ["translation 0", "translation 1", ...],
  "ko": ["translation 0", "translation 1", ...],
  "id": ["translation 0", "translation 1", ...],
  "ms": ["translation 0", "translation 1", ...]
}`;

  const raw = await callClaude(prompt);
  try {
    return JSON.parse(raw);
  } catch (e) {
    // Try to extract JSON from response
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Could not parse JSON response:\n' + raw.slice(0, 500));
  }
}

function makeMultilingual(en, translations, idx) {
  const obj = { en };
  for (const lang of LANGS) {
    obj[lang] = translations[lang][idx];
  }
  return obj;
}

async function main() {
  // Collect all strings that need translation
  const entryTitles = [
    'v2.0.4 — iOS & macOS',
    'v2.0.3 — iOS',
    'v2.0.2 — iOS & macOS',
    'Secure streaming over Tailscale',
    'Full 11-language localization',
    'PC Reader — Microsoft Store submission',
    'Freemium + lifetime IAP',
    'Full 11-language localization',
    'PC→iOS streaming',
    'v1.0.57 — Android',
    'v1.0.56 — Android',
    'Android 16 KB memory page compatibility',
    'In-app purchase + premium unlock',
  ];
  const entryDescs = [
    'Fixed stale Mac streaming connections and sort/filter toolbar controls in the Mac stream view.',
    'Restored reading position on reader open for both iOS and macOS. Fixed auto-resume in CBZ/CBR paged and continuous modes.',
    'First stable Mac→iOS streaming release. Secure HTTPS streaming via cert pinning (Tailscale). iCloud-based endpoint discovery for remote networks. Manual IP entry for custom VPN setups.',
    'Streaming now uses TLS with SPKI cert pinning, making it safe over 5G and remote networks via Tailscale. iCloud stores the Tailscale IP so iOS finds the Mac automatically.',
    'All app views — reader, library, tools, settings, streaming setup — are now localized in English, Spanish, French, Dutch, Portuguese, Russian, Chinese, Japanese, Korean, Indonesian, and Malay.',
    'MSIX package signed and submitted to the Microsoft Store. Awaiting review and approval. Includes freemium gating with 7-day trial, lifetime IAP, full reader, compress/merge tools, and Mac→PC streaming.',
    '7-day free trial on first launch. One-time lifetime purchase unlocks the full app (Store ID: 9P39PKBP4CNC). Trial UI, paywall, and premium gates wired across all views.',
    'All 87 UI strings localized across English, Spanish, French, Dutch, Portuguese, Russian, Chinese, Japanese, Korean, Indonesian, and Malay.',
    'Stream your local library from Windows PC to the BiblioFuse iOS app. Requires Tailscale. Same feature set as the Mac Home Library streaming.',
    'Fixed iPad and tablet reader UI layout shifts. This is the last active Android release; the app is in maintenance mode.',
    'EULA and Privacy Policy updates. iOS in-app purchase validation fix.',
    'Upgraded Gradle and NDK to fix crashes on Android devices using 16 KB memory page sizes, required for newer Android hardware.',
    'One-time payment setup for Android and iOS. Includes license restoration, premium activation/revocation UI, and localized restore button.',
  ];
  const issueTitles = [
    'Streaming requires Tailscale — LAN-only mode not available',
    'No Mac/PC → Android streaming',
    'SMB network access unverified',
  ];
  const issueDescs = [
    "iOS's App Transport Security blocks plain HTTP to local IPs. Tailscale is required for both home Wi-Fi and remote streaming. A LAN-only mode without Tailscale is not currently in the roadmap.",
    'Android uses a separate Flutter codebase without iCloud integration. Streaming support would require a near-total rewrite and is not planned.',
    'SMB drive access on Android has not been fully tested in recent releases.',
  ];
  const roadmapTitles = [
    'Microsoft Store public launch',
    'TTS resume from scroll position',
    'LAN streaming without Tailscale',
    'Cross-platform reading progress sync',
  ];
  const roadmapDescs = [
    'Awaiting Store approval. Will be available as a free download with a 7-day trial and one-time lifetime purchase.',
    'Text-to-speech will resume from your current visible scroll position instead of the chapter top. Targeting the next App Store release.',
    'Home Wi-Fi streaming without needing Tailscale installed. Currently parked — technical constraints around iOS ATS make this complex.',
    'Sync your reading position between iOS, macOS, and PC via iCloud.',
  ];

  console.log('Translating entry titles...');
  const tET = await translateBatch(entryTitles);
  console.log('Translating entry descs...');
  const tED = await translateBatch(entryDescs);
  console.log('Translating issue titles...');
  const tIT = await translateBatch(issueTitles);
  console.log('Translating issue descs...');
  const tID = await translateBatch(issueDescs);
  console.log('Translating roadmap titles...');
  const tRT = await translateBatch(roadmapTitles);
  console.log('Translating roadmap descs...');
  const tRD = await translateBatch(roadmapDescs);

  const et = (i) => makeMultilingual(entryTitles[i], tET, i);
  const ed = (i) => makeMultilingual(entryDescs[i], tED, i);
  const it = (i) => makeMultilingual(issueTitles[i], tIT, i);
  const id_ = (i) => makeMultilingual(issueDescs[i], tID, i);
  const rt = (i) => makeMultilingual(roadmapTitles[i], tRT, i);
  const rd = (i) => makeMultilingual(roadmapDescs[i], tRD, i);

  const output = `// Changelog entries — newest first within each array
// type: 'release' | 'feature' | 'fix' | 'known-issue' | 'roadmap'
// platform: 'ios' | 'pc' | 'android' | 'all'
// title and desc are multilingual objects: { en, es, fr, nl, pt, ru, zh, ja, ko, id, ms }

export const ENTRIES = [
  // ── iOS & macOS ────────────────────────────────────────────────────────
  {
    date: '2026-06-06',
    version: '2.0.4',
    platform: 'ios',
    type: 'release',
    title: ${JSON.stringify(et(0), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(0), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-06-02',
    version: '2.0.3',
    platform: 'ios',
    type: 'release',
    title: ${JSON.stringify(et(1), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(1), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-05-26',
    version: '2.0.2',
    platform: 'ios',
    type: 'release',
    title: ${JSON.stringify(et(2), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(2), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-05-12',
    platform: 'ios',
    type: 'feature',
    title: ${JSON.stringify(et(3), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(3), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-05-09',
    platform: 'ios',
    type: 'feature',
    title: ${JSON.stringify(et(4), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(4), null, 4).replace(/^/gm, '    ').trim()},
  },

  // ── PC / Windows ───────────────────────────────────────────────────────
  {
    date: '2026-06-10',
    platform: 'pc',
    type: 'release',
    title: ${JSON.stringify(et(5), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(5), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: ${JSON.stringify(et(6), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(6), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: ${JSON.stringify(et(7), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(7), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-06-09',
    platform: 'pc',
    type: 'feature',
    title: ${JSON.stringify(et(8), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(8), null, 4).replace(/^/gm, '    ').trim()},
  },

  // ── Android ────────────────────────────────────────────────────────────
  {
    date: '2026-01-30',
    version: '1.0.57',
    platform: 'android',
    type: 'release',
    title: ${JSON.stringify(et(9), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(9), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-01-29',
    version: '1.0.56',
    platform: 'android',
    type: 'release',
    title: ${JSON.stringify(et(10), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(10), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-01-28',
    version: '1.0.49',
    platform: 'android',
    type: 'fix',
    title: ${JSON.stringify(et(11), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(11), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    date: '2026-01-27',
    version: '1.0.44',
    platform: 'android',
    type: 'feature',
    title: ${JSON.stringify(et(12), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(ed(12), null, 4).replace(/^/gm, '    ').trim()},
  },
];

export const KNOWN_ISSUES = [
  {
    platform: 'ios',
    title: ${JSON.stringify(it(0), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(id_(0), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    platform: 'android',
    title: ${JSON.stringify(it(1), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(id_(1), null, 4).replace(/^/gm, '    ').trim()},
  },
  {
    platform: 'android',
    title: ${JSON.stringify(it(2), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(id_(2), null, 4).replace(/^/gm, '    ').trim()},
  },
];

export const ROADMAP = [
  {
    platform: 'pc',
    title: ${JSON.stringify(rt(0), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(rd(0), null, 4).replace(/^/gm, '    ').trim()},
    status: 'pending',
  },
  {
    platform: 'ios',
    title: ${JSON.stringify(rt(1), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(rd(1), null, 4).replace(/^/gm, '    ').trim()},
    status: 'exploring',
  },
  {
    platform: 'ios',
    title: ${JSON.stringify(rt(2), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(rd(2), null, 4).replace(/^/gm, '    ').trim()},
    status: 'parked',
  },
  {
    platform: 'all',
    title: ${JSON.stringify(rt(3), null, 4).replace(/^/gm, '    ').trim()},
    desc: ${JSON.stringify(rd(3), null, 4).replace(/^/gm, '    ').trim()},
    status: 'exploring',
  },
];
`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'changelog.js'), output);
  console.log('✅ src/data/changelog.js updated with multilingual content.');
}

main().catch(e => { console.error(e); process.exit(1); });
