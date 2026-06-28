# How to Find and Remove Duplicate CBZ Comic Files on Mac

Archive Duplicate Scanner finds duplicate CBZ, CBR, and comic archive files on Mac using perceptual hashing — matching files even after renaming, recompressing, or repackaging. Scan your entire library, review matched pairs side by side, and safely move duplicates to Trash without risking any originals.

## Why Duplicate Comics Are Harder to Find Than You Think

A digital comic library accumulates duplicates in ways that defeat standard filename or file-size comparisons. You download a CBZ from one source, then later download what appears to be a different release — but it contains the same scanned pages repackaged with a different filename. A fan translation gets re-released with slightly different image encoding. A backup drive from three years ago gets merged back in, bringing the same files under different timestamps.

Standard duplicate tools compare file hashes — so any change, even renaming or adding a comment tag, produces a different hash and the duplicate goes undetected. A perceptual hash works differently: it analyses the visual content of the images inside the archive and creates a fingerprint based on what you see, not the exact bytes.

Archive Duplicate Scanner uses perceptual hashing to find comic duplicates that no other tool catches.

## How Perceptual Hashing Works for Comics

When Archive Duplicate Scanner scans a CBZ or CBR, it opens the archive, samples the images inside, and computes a perceptual hash for each. These hashes capture the visual structure — the shapes, contrast patterns, and layout — without depending on exact pixel values.

Two CBZ files containing the same pages produce matching hashes even if:
- The filenames are completely different
- The archives were recompressed at different quality settings
- One file has metadata tags the other doesn't
- The page order was shuffled between releases

This makes Archive Duplicate Scanner the right tool for the kind of duplicates a comic library accumulates over years of downloading from multiple sources.

## How to Find Duplicate CBZ Files on Mac

### Step 1: Download and Launch Archive Duplicate Scanner

[Archive Duplicate Scanner](/en/) is available on the Mac App Store. Install it and launch it from Applications.

### Step 2: Add Your Comic Library Folder

Drag your comics folder into the Archive Duplicate Scanner window, or use the Add Folder button to browse. You can scan multiple locations simultaneously — your main library, an external drive, and a backup location all at once.

### Step 3: Start the Scan

Click Scan. Archive Duplicate Scanner opens each CBZ and CBR, samples the images, and computes perceptual hashes. A library of 1,000 comics typically completes in a few minutes on a modern Mac.

### Step 4: Review Matched Pairs

After scanning, Archive Duplicate Scanner presents detected duplicate groups. Each group shows matched archives side by side with filenames, file sizes, modification dates, and folder paths. You can preview the cover image or open either archive to confirm.

### Step 5: Auto-Select Which Copy to Keep

Archive Duplicate Scanner's auto-select strategy picks which file to keep based on your configured rules: keep the larger file (likely better quality), keep the file in a preferred folder (your primary library), or keep the most recently modified copy. You can also manually pick the survivor in each group.

### Step 6: Move Duplicates to Trash

Click Remove Duplicates (or Move to Trash). Archive Duplicate Scanner never permanently deletes files — it only moves them to Trash. Review them there before emptying if needed.

## Auto-Select Strategies for Large Libraries

When you're dealing with 200 duplicate groups, reviewing each one manually isn't practical. Archive Duplicate Scanner's auto-select strategies automate the decision:

**Keep the larger file:** Larger CBZ archives usually contain higher-quality images. This strategy keeps the better version automatically.

**Keep the file in a preferred folder:** If your primary library is in `~/Comics` but duplicates are on a backup drive, tell Archive Duplicate Scanner to always prefer the `~/Comics` copy. The backup copy gets flagged for removal.

**Keep the most recently modified:** Useful when a newer file is a corrected or updated release from the same scan group.

After auto-select runs, review the flagged selections once before committing. Archive Duplicate Scanner never deletes without your explicit confirmation.

## How Does Fuzzy Filename Matching Help?

Beyond perceptual hashing, Archive Duplicate Scanner also uses fuzzy filename matching to surface likely duplicates even before image analysis. Files like `One-Punch-Man-v01.cbz` and `One_Punch_Man_Vol_1.cbz` are flagged as potential matches.

This two-layer approach — fuzzy filename matching plus perceptual hash confirmation — catches duplicates that are obvious to a human but invisible to tools relying on exact string or byte matching.

## Frequently Asked Questions

**How do I find duplicate CBZ files on Mac?**
Use Archive Duplicate Scanner. Add your comics folder, click Scan, and the app identifies duplicate CBZ and CBR files using perceptual hashing. It matches files even after renaming or recompression, then lets you safely move duplicates to Trash.

**Can Archive Duplicate Scanner find duplicates if the filenames are different?**
Yes. Archive Duplicate Scanner uses perceptual hashing on the images inside CBZ archives. If two archives contain the same scanned pages, they're flagged as duplicates regardless of filename, file size, or metadata.

**Does Archive Duplicate Scanner permanently delete files?**
No. Archive Duplicate Scanner only moves files to Trash. You can review and restore them before emptying — it's safe to run on any size library.

**What comic formats does Archive Duplicate Scanner support?**
Archive Duplicate Scanner supports CBZ and CBR comic archives. It also scans photo files (JPEG, PNG, HEIC, WebP, RAW) and standard ZIP/RAR archives.

**How long does scanning a large comic library take?**
Scan speed depends on library size and your Mac. A library of 1,000 CBZ files typically completes in a few minutes. Apple Silicon Macs scan significantly faster than Intel Macs on large collections.

**Does Archive Duplicate Scanner work across multiple drives?**
Yes. Add any mounted drive or folder as a scan location. Archive Duplicate Scanner compares files across multiple drives simultaneously — ideal for finding duplicates between your main library and a backup drive.

## Build a Cleaner Library in One Afternoon

Duplicate comics waste storage, clutter your library view, and make organisation harder over time. Archive Duplicate Scanner handles the hard part — detecting visually identical archives regardless of filename — and gives you a safe, Trash-only path to cleaning up. Find **Archive Duplicate Scanner** on the Mac App Store to run your first scan today. Once your library is clean, use [BiblioFuse](/en/) to read and organise your comic collection on iPhone and Mac.
