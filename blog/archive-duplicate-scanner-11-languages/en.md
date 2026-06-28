# Archive Duplicate Scanner Now Available in 11 Languages — Find Comics You Didn't Know Were Duplicates

When you manage a large comic collection, duplicates don't always look like duplicates. One file is called `comic_E1-5.cbz`. Another is `ComiX_E1-10.cbz`. Different filename, different apparent range — but the actual pages inside overlap. [Archive Duplicate Scanner](/en/archive/) was built to catch exactly this: it opens the archives and compares the page images themselves, not just the filenames.

That capability is now available in 11 languages. Archive Duplicate Scanner has expanded its full UI localisation to cover English, Spanish, French, Dutch, Portuguese, Russian, Simplified Chinese, Japanese, Korean, Bahasa Indonesia, and Malay — making visual-content duplicate detection accessible to comic and manga readers worldwide.

## The Problem With Filename-Based Duplicate Detection

Standard duplicate file finders compare filenames, file sizes, or cryptographic hashes. Those approaches fail with comic archives because:

- **Same content, different names**: `Spider-Man_001.cbz` and `spiderman_issue01.cbz` are the same comic, but no filename comparison catches it
- **Overlapping episode ranges**: `manga_vol1_ch1-5.cbz` and `manga_vol1_ch3-8.cbz` contain three chapters of identical content buried inside different archives
- **Re-encoded files**: a CBZ re-exported at different JPEG quality has a different file hash but identical page content
- **Different archive formats**: the same comic as a CBZ and a CBR will never match a hash-based check

[Archive Duplicate Scanner](/en/archive/) bypasses this problem entirely by extracting a sample of page images from each archive and comparing them visually using perceptual hashing. If the first few pages look the same, it flags them as potential duplicates — even if the filenames, file sizes, and episode numbers are completely different.

## What's New: Full 11-Language Support

The previous release added the first set of languages. This update brings Archive Duplicate Scanner to a complete set of eleven:

| Language | Code | New in this update |
|----------|------|--------------------|
| English | en | — |
| Spanish | es | — |
| Portuguese | pt | — |
| Bahasa Indonesia | id | — |
| Simplified Chinese | zh | — |
| **French** | fr | ✓ |
| **Dutch** | nl | ✓ |
| **Russian** | ru | ✓ |
| **Japanese** | ja | ✓ |
| **Korean** | ko | ✓ |
| **Malay** | ms | ✓ |

The full app interface is translated — scan controls, the results list, match confidence labels, action buttons (Move, Keep, Delete), and all preference panels.

Archive Duplicate Scanner follows your device language automatically. On iOS and macOS: **Settings/System Settings → General → Language & Region**. On Windows: **Settings → Time & Language → Language & Region**.

## How the Visual Comparison Works

When you run a scan, Archive Duplicate Scanner:

1. Opens each CBZ, CBR, ZIP, or RAR archive
2. Extracts a sample of pages from the beginning (where episode-identifying content appears)
3. Generates a perceptual hash of each page — a compact fingerprint that describes visual structure, not exact pixel values
4. Compares every pair of archives: if enough page hashes match above a configurable threshold, the pair is flagged as a potential duplicate

This approach catches the `comic_E1-5` vs `ComiX_E1-10` case because their shared first pages produce matching perceptual hashes, regardless of what the filenames say.

You control the match sensitivity. A stricter threshold requires a closer visual match (useful when archives share genre but not content). A looser threshold catches more borderline cases (useful when re-encoded files look slightly different due to compression artefacts).

## Who This Helps

**Active collection maintainers** who receive comic updates incrementally — new chapter packs that overlap with previously downloaded volumes — will accumulate duplicates quickly. Visual comparison catches what filename-based tools miss.

**Users who download from multiple sources** often end up with the same series in different naming conventions. Archive Duplicate Scanner scans the pages rather than trusting the filenames.

**Japanese manga readers** who switch between scanlation groups often find that the same arc appears in multiple archives. The 11-language update means Japanese-speaking collectors can now manage this in their native language.

**Collectors organising large backlogs** — when reorganising thousands of CBZ files, it's easy to copy folders twice or lose track of what's been deduplicated. Visual scanning gives a reliable answer.

## Supported Formats

Archive Duplicate Scanner works with:

- **CBZ / ZIP** — the most common comic archive formats; identical in structure
- **CBR / RAR** — legacy format still widely used for older manga and Western comics

Files can be on your local drive, an external drive, or a network share. You can scan a single folder or point the app at an entire directory tree.

## Pricing

Archive Duplicate Scanner is free to scan and preview matches. Archive Duplicate Scanner Pro is a one-time purchase that enables bulk move/delete actions after a scan. No subscription.

Download [Archive Duplicate Scanner](/en/archive/) from the App Store or Microsoft Store. The 11-language update is available now on all platforms.
