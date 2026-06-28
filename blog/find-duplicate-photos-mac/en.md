# Find Duplicate Photos on Mac — Including HEIC, WebP, and RAW

[Archive Duplicate Scanner](/en/archive/) finds duplicate photos on Mac using perceptual hashing — a technique that matches visually identical images even if they have different filenames, formats, or compression settings. It supports HEIC, WebP, JPEG, PNG, TIFF, RAW, and dozens of other formats. The app is available for Mac and Windows and moves duplicates safely to the Trash rather than permanently deleting them.

## The Problem With Photo Libraries That Grow Without Limits

Your Mac photo library looked manageable five years ago. Now it has 40,000 files spread across a Downloads folder, a backup drive, and three iCloud exports. You have the same landscape shot saved as `IMG_4521.HEIC`, `IMG_4521-edited.JPG`, and `landscape-final.webp`. You have RAW bursts where 11 nearly identical frames survived the cull. And every library migration — from iPhoto to Apple Photos to a new Mac — left behind another layer of duplicates.

Built-in tools can't help. Apple Photos has a basic duplicate finder for photos already inside its library, but it misses files scattered across Finder. Spotlight doesn't compare image content. Standard file-duplicate finders compare byte-for-byte hashes and fail the moment two files have different JPEG compression or one was re-exported.

## Why Perceptual Hashing Finds Duplicate Photos Across Any Format

Perceptual hashing looks at what an image *looks like*, not what its bytes say. Archive Duplicate Scanner computes a compact visual fingerprint for every photo. Two images that look identical to the human eye produce the same (or very similar) fingerprint — even if one is HEIC and the other is JPEG, even if one was re-exported at 85% quality, and even if someone renamed the file.

This is the key difference from a generic file deduplicator. A generic tool compares SHA-256 hashes — byte-for-byte identical only. Perceptual hashing matches images that are visually the same but technically different files.

## How to Find Duplicate Photos on Mac Step by Step

1. **Download and open Archive Duplicate Scanner** from the Mac App Store or the developer website.
2. **Add your photo folders** — drag your Photos library export folder, your Downloads folder, and any external drives you want to scan. You can add multiple folders in one scan.
3. **Run the scan** — the app uses perceptual hashing to fingerprint every supported image. A 10,000-photo library typically completes in under two minutes on an M-series Mac.
4. **Review the groups** — duplicates appear in groups. Each group shows the file name, format, file size, dimensions, and a visual thumbnail so you can confirm the match.
5. **Choose your deletion strategy** — Archive Duplicate Scanner offers auto-select strategies: keep the largest file (highest quality), keep the oldest (original), or keep the one in a preferred folder. You can also select manually.
6. **Move to Trash** — the app never permanently deletes files. Selected duplicates are moved to the Mac Trash so you can recover anything removed by mistake.

## What Photo Formats Does It Support?

Archive Duplicate Scanner handles every format a Mac photographer encounters:

- **HEIC / HEIF** — the default iPhone format, including HDR and Portrait-mode files
- **JPEG / JPG** — the universal format, including re-exports and edited versions
- **WebP** — increasingly common from social media downloads and web screenshots
- **PNG** — lossless screenshots and graphics
- **TIFF** — high-quality scans and layered exports
- **RAW formats** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG, and more
- **CBZ / CBR** — comic archives are also supported alongside photos

The fuzzy filename matching feature finds groups like `vacation-2023.jpg`, `vacation-2023(1).jpg`, and `vacation-2023-copy.jpg` in seconds, even before the visual hash comparison runs.

## Three Practical Use Cases

**1. Post-migration cleanup**
After every Mac migration, Apple's Migration Assistant copies files but doesn't deduplicate. If you've moved between Macs more than once, you likely have two or three copies of your oldest photos. Run Archive Duplicate Scanner on your home folder to find them all.

**2. RAW + JPEG pairs**
Many cameras — and the iPhone's ProRAW mode — save a RAW and a JPEG simultaneously. After editing in Lightroom or Capture One, you often no longer need the original JPEG. Archive Duplicate Scanner groups RAW files with their JPEG counterparts so you can clean up the extras without manually sorting by date.

**3. Social media download accumulation**
Years of saving Instagram screenshots and downloaded photos result in dozens of copies of the same image at different resolutions. Perceptual hashing catches them all, even when the file names are different strings of random digits.

## Frequently Asked Questions

### Does Archive Duplicate Scanner permanently delete photos?

No. The app moves files to the Mac Trash. Nothing is permanently deleted until you empty the Trash yourself. This gives you a full safety net to recover anything that was removed by mistake.

### Can it find duplicates across different formats, like HEIC and JPEG?

Yes. Perceptual hashing compares visual content, not file bytes. A photo saved as HEIC and re-exported as JPEG will be detected as a duplicate even though the file formats and byte contents are completely different.

### How long does a scan take on a large library?

On an Apple M-series Mac, a library of 10,000 photos typically completes in under two minutes. Libraries of 50,000+ photos take 5–10 minutes depending on drive speed and file format. HEIC files with HDR metadata take slightly longer to decode.

### Will it find near-duplicate RAW burst shots?

Yes, with the similarity threshold set to a higher sensitivity level. Burst shots from the same scene look nearly identical and produce very similar perceptual hashes. You can tune the sensitivity so the scanner groups them together, then keep only the sharpest frame.

### Does it work with external drives and network storage?

Yes. You can add any folder accessible in Finder — internal drives, external USB drives, SD cards, or network-mounted volumes. The scan runs locally on your Mac; no files are uploaded to any server.

### Is Archive Duplicate Scanner available for Windows?

Yes. Archive Duplicate Scanner is available for both Mac and Windows. The Windows version has the same perceptual hashing engine and supports the same file formats.

## Recover Your Storage — Without the Risk

A 40,000-photo library with 30% duplicates wastes tens of gigabytes of storage. Archive Duplicate Scanner gives you the tools to clean it up safely — perceptual hashing that catches visual duplicates across formats, auto-select strategies that take the guesswork out, and Trash-only deletion that keeps you protected.

[Download Archive Duplicate Scanner](/en/) and start your first scan today. If you also want to compress or batch-convert your photo collections, the [BiblioFuse Web Tool](/en/webapp/) handles EPUB, CBZ, and PDF files entirely in your browser.
