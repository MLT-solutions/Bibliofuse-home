# How Perceptual Hashing Finds Duplicate Comics Even After Renaming

You renamed a file. You re-compressed an archive. You downloaded the same volume from a different source. By any normal measure, these are now "different" files — they have different filenames, different checksums, different file sizes.

Yet the comic inside is the same. Every page is the same. And if you're trying to clean up your digital library, these near-identical duplicates are exactly the ones that slip through standard duplicate finders.

This is the problem perceptual hashing solves, and it's the technique at the core of [Comic Duplicate Scanner](/en/archive/).

---

## Why Standard File Comparison Falls Short

Most "duplicate file finder" tools work by computing a **checksum** — typically MD5 or SHA-256 — for each file and flagging files that share the same checksum. This works perfectly for exact copies: if two files are byte-for-byte identical, their checksums match.

But for comic archives, this approach misses the most common real-world duplicates:

| Scenario | Same checksum? | Actually duplicate? |
|----------|---------------|---------------------|
| Copy with different filename | No | Yes |
| Re-compressed at different quality | No | Yes |
| Repackaged with different internal layout | No | Likely yes |
| Downloaded from two different sources | No | Often yes |
| Exact byte-for-byte copy | Yes | Yes |

For manga and comic collections specifically, the majority of duplicates fall into the first four rows. Checksum-based tools catch only the last one.

---

## What Perceptual Hashing Does Instead

A **perceptual hash** is a short fingerprint computed from the *visual content* of an image — not its file bytes. The algorithm analyses the image's structure: brightness patterns, edge information, and colour distribution. Two images that look visually identical will produce the same or very similar perceptual hash, even if they differ at the byte level.

The most widely used algorithm, **pHash** (difference hash and its variants), works roughly like this:

1. Resize the image to a small fixed size (e.g. 32×32 pixels)
2. Convert to greyscale
3. Apply a discrete cosine transform (DCT) to extract frequency components
4. Keep the low-frequency portion — this captures overall structure, not fine detail
5. Compare each value to the median, producing a bitstring

The resulting hash is typically 64–256 bits. Two images with similar visual content produce hashes with a low **Hamming distance** — the number of bit positions that differ.

Two important properties follow directly from these steps:

- **Resolution is irrelevant.** Step 1 resizes every image to the same fixed grid before anything is computed. A 1200px scan and a 3000px scan of the same page both become the same 32×32 thumbnail — and produce the same hash.
- **Colour mode is irrelevant.** Step 2 converts to greyscale before comparison. A full-colour scan and a greyscale (black-and-white) scan of the same page produce nearly identical hashes, because the algorithm only looks at luminance structure, not colour values.

For most comic page comparisons, a Hamming distance under 10 indicates the same content at different quality levels or compression settings.

---

## How Comic Duplicate Scanner Applies This

[Comic Duplicate Scanner](/en/archive/) applies perceptual hashing at the archive level:

1. **Extract** — it opens each CBZ or CBR archive and reads the image files inside
2. **Hash each page** — every page in every archive gets a perceptual hash
3. **Compare** — it builds a similarity index and finds archives that share a high proportion of matching pages
4. **Score** — it assigns a match confidence based on how many pages match and how closely

This multi-page matching is what makes it accurate for comics specifically. A single page might occasionally produce a false positive (two unrelated covers that look similar). But when 90% of pages in two archives match, the probability of a false positive drops to near zero.

---

## What This Looks Like in Practice

Consider these real-world cases:

**Case 1: Different sources, different filenames**
You downloaded `HxH_v12_en.cbz` from one site and `Hunter_X_Hunter_Volume_12.cbz` from another. Different filename, different internal file names, possibly different image quality. Checksum comparison: no match. Perceptual hashing: near-identical pages across all chapters → flagged as duplicate.

**Case 2: Re-compressed archive**
Someone ran a CBZ through a compression tool, reducing each JPEG to 80% quality. File size changed. Checksums changed. Every internal filename changed. Perceptual hashing: images are visually identical at 32×32 → same hashes → detected.

**Case 3: Pages reordered or renamed internally**
An archive has pages named `001.jpg, 002.jpg...` while another has `page_001.jpg, page_002.jpg...`. The images are the same but the internal structure is different. Perceptual hashing doesn't look at filenames inside the archive — it only looks at pixel content → still detected.

**Case 5: Color scan vs black-and-white scan**
You have two copies of the same manga volume: one is a colour scan from an early digital release, the other is a greyscale scan from a later re-release. Different file sizes, different colour depth, different visual appearance when you look at them. But because dHash converts to greyscale before hashing, both copies reduce to the same luminance fingerprint → flagged as duplicate. This is a case that nearly every other duplicate finder misses entirely.

**Case 4: Legitimately different volumes**
Volume 3 and volume 4 of the same series. They share a similar art style and possibly the same cover layout. But the page content is different. Perceptual hashing: page-by-page comparison finds low overlap → not flagged.

---

## The Limits of Perceptual Hashing

No technique is perfect. Understanding the limits helps you use the tool more effectively:

**Significant visual edits will break the match.** If someone heavily cropped pages, added watermarks covering most of the image, or applied strong filters, the perceptual hash diverges. Mild watermarks or minor crops typically don't affect detection.

**Very low resolution images are unreliable.** Perceptual hashing works by comparing visual structure — if source images are extremely small (under 100px in either dimension), there's less structure to compare and false positives increase.

**Different chapters packaged together.** If one archive is volumes 1–3 combined and another is just volume 2, the pages-matching-ratio will be lower. Comic Duplicate Scanner handles this gracefully by computing proportional match rates, but very large volume bundles may need manual review.

**Manga with similar art across volumes.** Some series (particularly short gag manga or anthology collections) reuse visual elements extensively. Occasional false matches are possible — the review interface in Comic Duplicate Scanner lets you check thumbnails before committing to deletion.

---

## Why This Matters for Manga Specifically

Manga collections have a property that makes perceptual hashing especially valuable: they're scanned, then distributed across dozens of sources over years. The same volume gets re-scanned, re-compressed, and re-distributed multiple times. File checksums almost never match across sources. But the pages are the same.

This also means that when you download a "higher quality" version of a volume you already own, perceptual hashing lets you confirm it's actually the same content before you delete the old version. If the match confidence is 95%, you can be confident they're the same. If it's 60%, something is different and you should review manually.

---

## Using Comic Duplicate Scanner

[Comic Duplicate Scanner](/en/archive/) is a native Mac app that brings perceptual hashing to your full library:

- Scans entire folder trees recursively
- Handles CBZ, CBR, and loose image files
- Displays matched pairs side by side with thumbnails
- Shows match confidence and file size for each pair
- Moves selected duplicates to Trash (not permanent deletion)

The initial scan of a large collection takes a few minutes; subsequent scans are incremental.

Once your library is clean, pairing it with [BiblioFuse](/en/) on iPhone gives you a single curated source for reading — streamed directly from your Mac, or synced via iCloud, with per-volume reading progress that stays accurate because you're no longer bouncing between duplicate copies.

---

## Summary

Perceptual hashing finds duplicates by comparing visual content, not file bytes. For comic and manga archives — where the same volume gets re-compressed and redistributed constantly — it catches duplicates that checksum-based tools completely miss. Understanding how it works (image fingerprinting, Hamming distance comparison, multi-page scoring) helps you interpret results confidently and keep your library clean for the long term.
