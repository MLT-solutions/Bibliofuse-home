# How to Clean Up a Duplicate Manga Collection the Smart Way

You open your manga folder and notice something off: *One Piece* volume 47 is there three times — one file called `one_piece_v47.cbz`, another named `OP_47_HQ.cbz`, and a third buried inside a subfolder labelled "backup_old". You know the problem. You just don't know how bad it is yet.

For most manga readers, duplicates accumulate silently over years of downloading from different sources, moving archives between drives, and creating backups that never got cleaned up. The result is wasted storage, confusion when reading, and no easy way to tell which version is highest quality.

This guide walks through a practical workflow for finding, reviewing, and removing duplicate manga using [Archive Duplicate Scanner](/en/archive/) — a Mac utility built specifically for this problem.

---

## Why Manga Libraries Get So Messy

Manga duplicates aren't random. They follow predictable patterns:

**Multiple sources, different filenames.** You downloaded volume 10 from a group years ago, then grabbed it again from a different site with better image quality. Same content, completely different filenames.

**Repackaged archives.** Someone renamed the files inside a CBZ, re-compressed them at a different quality setting, and redistributed the result. The images are identical pixels-wise, but the archive checksums differ entirely.

**Backup copies that survived.** You moved your library to a new drive and kept the old folder "just in case." Six months later, you forgot it exists. Now you have a second full copy of 500 volumes.

**Series reorganisation.** You sorted your library by series name, then by release year, then by reading order. During each reorganisation, files got duplicated in the process.

A standard duplicate file finder won't catch most of these cases because it compares file checksums — and a re-compressed archive has a completely different checksum even if it contains the same pages. You need a tool that understands what's *inside* the archive.

---

## What Archive Duplicate Scanner Does Differently

[Archive Duplicate Scanner](/en/archive/) uses **perceptual hashing** to compare the actual images inside your CBZ and CBR archives. Instead of asking "are these two files byte-for-byte identical?", it asks "do these two archives contain the same comic pages?"

This means it catches duplicates that have been:

- Renamed (different filename, same content)
- Re-compressed at a different quality level
- Repackaged with different internal structure
- Copied to a different folder or drive

It also works on images directly, not just archives, so if you have a mix of loose pages and packed volumes, it handles both.

---

## Step-by-Step: Cleaning Your Manga Library

### Step 1: Scan your library folder

Open Archive Duplicate Scanner and add your manga folder — or multiple folders if your collection spans drives. You can drag and drop folders directly onto the app.

The scanner reads every CBZ and CBR file it finds, extracts images, and generates perceptual hashes for each page. This happens entirely on your Mac with no network connection required.

For a large library (several thousand files), the initial scan may take a few minutes. Subsequent scans are faster because hashes are cached.

### Step 2: Review matched pairs

Once the scan completes, Archive Duplicate Scanner presents matched pairs side by side. For each pair, you can see:

- The file path of both copies
- Thumbnail previews so you can visually confirm they're the same content
- File size for both — helpful for picking the higher-quality version
- Similarity percentage if the match isn't pixel-perfect

This review step is important. The scanner flags matches based on perceptual similarity, so you might occasionally see false positives — two volumes that have the same cover art but different content. Always check the previews before deleting.

### Step 3: Select what to remove

Use the review interface to mark which file you want to keep and which to remove. A common strategy:

- **Keep the larger file** — usually higher resolution or less compressed
- **Keep the version from a trusted source folder** — if you have a "curated" library and a "downloads" folder, prefer the curated copy
- **Keep the file with the cleaner filename** — easier to manage long-term

Archive Duplicate Scanner lets you select a keep/remove decision for each pair, or apply a rule across all matches (e.g. "always keep the larger file").

### Step 4: Move duplicates to Trash

Once you've reviewed and selected, send the duplicates to Trash. Archive Duplicate Scanner moves files — it does not permanently delete them. This means you can recover a file if you make a mistake, by simply going to Trash and putting it back.

Only empty the Trash once you're confident the right files were removed.

---

## Handling Series Folders vs Flat Structures

If your manga library is organised into per-series subfolders (e.g. `Manga/Berserk/`, `Manga/Vinland Saga/`), Archive Duplicate Scanner will cross-folder compare. A duplicate sitting in `Manga/Berserk/` and a stray copy in `Downloads/old/Berserk_vol3.cbz` will still be matched.

If your collection is flat (all volumes in one folder), the scan is faster but the review interface is especially useful for spotting which copy came from which source.

---

## Tips for Keeping Your Library Clean Going Forward

**Establish a single "authoritative" folder.** Keep your curated library in one place. When you download a new volume, move it into that folder and delete the original from your downloads directory — don't let volumes accumulate in two places.

**Scan after every major download session.** Run Archive Duplicate Scanner after you've downloaded a batch of new volumes to catch overlaps before they multiply. The scan takes only a few minutes for incremental checks once the initial index is built.

**Name files consistently.** Even though Archive Duplicate Scanner works regardless of filename, consistent naming (series name, volume number, source) makes the review step easier and reduces the chance of confusion.

**Use [BiblioFuse](/en/) to read from your curated folder.** When you stream your Mac library to iPhone or iPad using BiblioFuse's home streaming feature, you're reading from the single source of truth — not a copy. This prevents reading-progress drift between duplicate copies.

---

## FAQ

**Will Archive Duplicate Scanner delete my files automatically?**
No. It moves files to Trash, not permanent deletion. You review every match before anything is removed, and you can restore from Trash if needed.

**What formats does it support?**
CBZ, CBR, and image archives. It also supports loose image files, so if you have a mix of packed volumes and extracted page folders, it handles both.

**My two files have completely different checksums — will it still find the match?**
Yes. Archive Duplicate Scanner uses perceptual hashing on the images inside each archive, not the archive checksum. Re-compressed files, renamed files, and files with different internal structures are all matched based on visual content.

**How do I decide which copy to keep?**
Check file size (larger is usually better quality), compare source (known-good source vs. unknown download), and review the thumbnail previews to confirm the content matches.

---

## The Result

A well-maintained manga library is faster to browse, easier to back up, and more reliable to read. Running Archive Duplicate Scanner once after a big cleanup — and periodically after new downloads — keeps duplicates from piling up again.

If you use BiblioFuse on iPhone or iPad, a cleaner Mac library means fewer sync issues, faster home streaming, and reading progress that actually means something.
