# How to Find Duplicate Comics When the Files Have Different Names

You're cleaning up your comic library and you run a standard duplicate file finder. It tells you no duplicates found. But you know something is wrong — you have episodes 1-5 in one file and episodes 1-10 in another, and the first five clearly overlap. The files have different names, different sizes, different hashes. Standard tools miss them entirely.

This is the specific problem [Archive Duplicate Scanner](/en/archive/) was built for: finding duplicate comic archives by comparing the actual page content, not the filenames or file sizes.

## Why Standard Duplicate Finders Don't Work for Comics

Hash-based duplicate detection works perfectly when files are byte-for-byte identical. But comic archives are almost never duplicated that way. Consider these real scenarios:

**Different episode bundling**: You downloaded `manga_ch1-5.cbz` from one source and `manga_ch1-10.cbz` from another. Chapters 1-5 appear in both files. A hash comparison will not detect this — the files are different sizes and have completely different hashes.

**Different naming conventions**: `Spider-Man_001.cbz`, `Spiderman_Issue_01.cbz`, and `Amazing_Spider-Man_1.cbz` could all be the same issue scanned by different groups. A filename comparison finds no duplicates.

**Re-encoded files**: You have the same comic from two sources — one scanned at 300 DPI with high JPEG quality, another at 200 DPI with compressed JPEG. Same pages, visually identical, completely different file hashes.

**Format differences**: You have `chapter_01.cbz` (ZIP-based) and `chapter_01.cbr` (RAR-based). Identical content inside, completely different container formats.

## How Archive Duplicate Scanner Detects These

[Archive Duplicate Scanner](/en/archive/) uses perceptual hashing on the actual page images inside each archive. Here's what that means:

When two comic archives are compared, the app:

1. Opens both archives (CBZ, CBR, ZIP, or RAR)
2. Extracts the first several pages from each
3. Generates a perceptual hash for each page — a compact numerical fingerprint of the image's visual structure
4. Compares the perceptual hashes across the two archives

If the hashes match (above a configurable threshold), the archives are flagged as potential duplicates — regardless of filenames, file sizes, or container formats.

A perceptual hash is deliberately fuzzy. Minor changes in colour profile, JPEG compression, or resolution don't affect the result. Two pages that look visually identical to the human eye will produce matching perceptual hashes even if one was re-compressed at a different quality setting.

## Example: The `comic_E1-5` vs `ComiX_E1-10` Case

Say you have:
- `comic_E1-5.cbz` — episodes 1 through 5
- `ComiX_E1-10.cbz` — episodes 1 through 10

These two files:
- Have completely different names (different capitalisation, different numbering convention)
- Have different sizes (one is half the content of the other)
- Have different hashes
- Might even be from different sources (different scan groups, different JPEG settings)

Archive Duplicate Scanner opens both, extracts pages 1-5 from `comic_E1-5.cbz` and pages 1-5 from `ComiX_E1-10.cbz`, computes perceptual hashes for each, and compares them. The hashes match. The pair is flagged.

You're then shown both files in a side-by-side comparison with the matched pages visible, and you choose what to do: keep both, delete the shorter one, or move the longer one to your archive.

## Setting the Match Threshold

The match threshold controls how similar two pages need to be before they're considered a match:

**Stricter threshold** — Pages need to be nearly identical. Good for catching exact copies or lightly re-compressed files. Fewer false positives, but may miss some genuine duplicates if re-encoding changed the visual quality noticeably.

**Looser threshold** — Pages can look somewhat different and still be considered a match. Catches more genuine duplicates but may occasionally flag pages from different series that have very similar visual composition (a common occurrence with certain manga styles).

The default threshold is calibrated to catch most practical duplicates without generating false positives for different-series comparisons.

## Handling Large Libraries

Archive Duplicate Scanner scans folders recursively. You can point it at your entire comic library — including subfolders organised by series, publisher, or year — and it will scan everything in one pass.

For very large libraries (thousands of files), the initial scan takes time proportional to the number of archives and pages. Subsequent scans are faster because perceptual hashes are cached per file.

## After the Scan

The scan results show:
- **Match confidence** — how closely the pages matched
- **File details** — size, format, modification date for each file in the pair
- **Page preview** — visual comparison of the matched pages side by side

You can filter results by confidence level, sort by match score, and process pairs in bulk. Archive Duplicate Scanner Pro allows you to move or delete matched files directly from the results view — you don't need to hunt for them in Finder.

Download [Archive Duplicate Scanner](/en/archive/) from the App Store or Microsoft Store and scan your first folder for free.
