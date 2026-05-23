const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'locales');
const enPath = path.join(baseDir, 'en', 'translation.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// ====== NEW TRANSLATION KEYS FOR HARDCODED STRINGS ======
const newEn = {
  "redesign": {
    "home": en.redesign.home,
    "productFamily": {
      "eyebrow": "The BiblioFuse family",
      "titleA": "One ecosystem.",
      "titleB": "Tools for owning your files.",
      "desc": "Built by Modern Logic Tech Solutions for readers and collectors who keep their library on their own devices - not behind someone else's login.",
      "alsoOn": "also on",
      "products": {
        "reader": {
          "tag": "Flagship",
          "desc": "Native reader & library manager for personal e-book and comic collections.",
          "bullet1": "EPUB, PDF, CBZ, CBR, RAR, ZIP & TXT",
          "bullet2": "Tags, ratings, progress & bookmarks",
          "bullet3": "iCloud library across iPhone, iPad & Mac",
          "cta": "Get on App Store",
          "secondary": "Google Play"
        },
        "webTool": {
          "tag": "Free",
          "desc": "Convert, merge and compress e-book files in your browser - no install, fully on-device.",
          "bullet1": "EPUB / PDF / CBZ / ZIP merge & convert",
          "bullet2": "Powered by WebAssembly - 100% private",
          "bullet3": "Works on any platform with a browser",
          "cta": "Launch Web Tool"
        },
        "archive": {
          "tag": "Mac · Windows",
          "desc": "Finds and removes duplicate comic book archives, photos, and files - even when renamed, recompressed, or saved in different folders.",
          "bullet1": "Perceptual hashing for CBZ/CBR/ZIP/RAR",
          "bullet2": "Smart auto-select & safe-delete to Trash",
          "bullet3": "Hash cache for fast repeat scans",
          "cta": "Mac App Store",
          "secondary": "Microsoft Store"
        },
        "smartdecrypt": {
          "tag": "iOS · Mac · Windows",
          "desc": "Unlocks password-protected PDFs and archives using saved filename patterns.",
          "bullet1": "PDF, ZIP & 7z support",
          "bullet2": "Pattern match for recurring files",
          "bullet3": "Passwords stored in system Keychain",
          "cta": "iOS · Mac App Store",
          "secondary": "Microsoft Store"
        }
      }
    },
    "readerSection": {
      "eyebrow": "BiblioFuse Reader",
      "title": "Built for long reading sessions.",
      "desc": "A focused reader with the library tools you actually use: formats, folders, tags, ratings, progress, and bookmarks. The same library on iPhone, iPad and Mac, kept in sync through your iCloud.",
      "features": {
        "library": {
          "eyebrow": "Library",
          "title": "One shelf for every format.",
          "desc": "EPUB, PDF, CBZ, CBR, RAR, ZIP and TXT - read in a single library with folders, search and recent books. Import from Files, document picker, or your iCloud Drive.",
          "bullet1Title": "Tags & ratings",
          "bullet1Body": "organize without folders if you want to.",
          "bullet2Title": "Reading progress",
          "bullet2Body": "every book remembers where you left off.",
          "bullet3Title": "iCloud cross-device",
          "bullet3Body": "pick up on iPhone where you stopped on iPad.",
          "imageAlt": "BiblioFuse library with tags, ratings and reading progress"
        },
        "reading": {
          "eyebrow": "Read your way",
          "title": "TTS, auto-scroll & peek zoom.",
          "desc": "A distraction-free reader with the controls that matter for long sessions. Text-to-speech for EPUB and TXT. Auto-scroll for comics and webtoons. Peek zoom to inspect a panel without losing your place.",
          "bullet1Title": "Text-to-speech",
          "bullet1Body": "hands-free narration for EPUB and TXT.",
          "bullet2Title": "Auto-scroll",
          "bullet2Body": "paged or continuous, tuned for image archives.",
          "bullet3Title": "Peek zoom",
          "bullet3Body": "double-tap to inspect dense panels and small text.",
          "imageAlt": "BiblioFuse reading view with TTS, auto-scroll and peek zoom"
        },
        "streaming": {
          "eyebrow": "Mac streams to mobile",
          "title": "Library hub. Streams to your iPhone.",
          "badge": "No third-party server · No subscription",
          "desc": "On Mac, BiblioFuse becomes a desktop library hub: manage local folders, iCloud folders and SMB network shares in a split-view library/reader interface. Then stream books straight to BiblioFuse on iPhone and iPad over local Wi-Fi at home, or remotely over 5G when you're out.",
          "bullet1Title": "Local Wi-Fi streaming",
          "bullet1Body": "instant browse from any Mac source.",
          "bullet2Title": "Remote 5G streaming",
          "bullet2Body": "open your home library from anywhere with Tailscale.",
          "bullet3Title": "Local, iCloud & SMB sources",
          "bullet3Body": "one Mac library, every folder you already have.",
          "bullet4Title": "Optional PIN",
          "bullet4Body": "lock streaming access on shared networks.",
          "imageAlt": "BiblioFuse Mac library with split-view reader",
          "footnote": "Remote access requires iCloud signed in and Tailscale connected on both Mac and iOS."
        }
      }
    },
    "toolsHighlight": {
      "badge": "Built-in tools",
      "title": "Compress & merge without leaving the app.",
      "supports": "Supports",
      "onDevice": "All processing runs on-device. Nothing uploaded.",
      "tools": {
        "resize": {
          "title": "Resize to shortest side",
          "body": "Set a target shortest dimension and re-page every image in your archive.",
          "kpi": "1080 px",
          "label": "Typical preset"
        },
        "convert": {
          "title": "Convert to WebP or JPG",
          "body": "Re-encode pages to WebP or JPG for smaller archives that still look crisp.",
          "kpi": "Up to 50%",
          "label": "Smaller files"
        },
        "merge": {
          "title": "Merge chapters & series",
          "body": "Combine chapters, volumes or split downloads into one clean CBZ, ZIP or PDF.",
          "kpi": "Many to 1",
          "label": "One pass"
        }
      }
    },
    "archiveSection": {
      "badge": "Sister app · Mac & Windows",
      "titleA": "Find duplicate archives.",
      "titleB": "Even after renaming.",
      "desc": "Archive Duplicate Scanner finds and removes duplicate comic book archives, photos, and files - even when they have been renamed, recompressed, or saved in different folders.",
      "features": {
        "scanning": { "title": "Comic archive scanning", "body": "CBZ, CBR, ZIP and RAR using perceptual hashing." },
        "photo": { "title": "Photo duplicate detection", "body": "JPG, PNG, HEIC, WEBP, BMP and GIF." },
        "select": { "title": "Smart auto-select", "body": "Keep largest, smallest, newest, oldest, or most pages." },
        "delete": { "title": "Safe deletion", "body": "Marked files move to system Trash only." }
      },
      "altBadge": "Download Archive Duplicate Scanner on the Mac App Store",
      "altImage": "Archive Duplicate Scanner configure and start scan",
      "pricing": "Free usage is available forever for scans up to 1,000 files. A 7-day trial unlocks full access, and a one-time purchase unlocks unlimited use with no subscription.",
      "stats": {
        "threshold": "Default threshold",
        "sampled": "Pages sampled",
        "local": "100% local",
        "noCloud": "No cloud, no tracking"
      }
    },
    "decryptSection": {
      "badge": "Sister app · iOS · Mac · Windows",
      "titleA": "Drop the file.",
      "titleB": "It unlocks itself.",
      "desc": "SmartDecrypt helps you unlock password-protected PDFs and archives without hunting through notes, messages, or old emails for the right password.",
      "features": {
        "formats": { "title": "PDF · ZIP · 7z", "body": "Unlock protected PDFs and extract ZIP/7z archives." },
        "patterns": { "title": "Saved patterns", "body": "Match recurring filename formats automatically." },
        "batch": { "title": "Batch upgrade", "body": "One-time Pro unlocks batch loading and password cycling." },
        "keychain": { "title": "Keychain-safe", "body": "Passwords stay in the Apple Keychain." }
      },
      "altBadge": "Download SmartDecrypt PDF ZIP on the App Store",
      "pricing": "Free users can unlock one file at a time with pattern matching. SmartDecrypt Pro is a one-time universal purchase that unlocks batch file loading and automatic password cycling on iOS and macOS.",
      "steps": {
        "drop": "Drop files",
        "match": "Match pattern",
        "unlock": "Unlocked"
      },
      "queueTitle": "Queue (3)",
      "queueStatus": "Auto-matching active",
      "states": { "unlocked": "unlocked", "matching": "matching", "queued": "queued" }
    },
    "privacyStrip": {
      "eyebrow": "Why BiblioFuse",
      "title": "Built on a few simple principles.",
      "items": {
        "noAds": { "title": "No ads", "body": "Enjoy uninterrupted reading without advertisements." },
        "noTracking": { "title": "No tracking", "body": "We do not collect or sell your reading data." },
        "cloudSync": { "title": "Cloud sync", "body": "Sync your library across Apple devices with iCloud." },
        "compression": { "title": "Smart compression", "body": "Reduce file size and save storage without leaving the app." }
      }
    },
    "finalCta": {
      "badge": "Start here",
      "title": "Your library. Your device. Your rules.",
      "desc": "Start with the Reader. Add the utilities when you need them. Everything stays on-device.",
      "button": "Try the Web Tool"
    },
    "stickyBar": {
      "text": "Get BiblioFuse"
    },
    "altTexts": {
      "heroImage": "BiblioFuse library on iPhone",
      "logo": "BiblioFuse logo",
      "appStore": "Download on the App Store",
      "googlePlay": "Get it on Google Play",
      "microsoftStore": "Get it from Microsoft"
    }
  }
};

// Merge new keys into en
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

deepMerge(en, newEn);
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n', 'utf8');
console.log('✅ Updated en/translation.json with all new keys');
