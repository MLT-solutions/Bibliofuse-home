# How to Sync Reading Progress Without a Cloud Account

You're midway through a manga series on your iPhone when you pick up the iPad and find yourself back at page one. Cloud sync solves this — but only if you're willing to sign into a sync service, trust a third party with your library metadata, and accept that a connectivity hiccup can leave your progress out of date.

What if you don't want that? What if you travel without a stable connection, don't trust cloud services with your reading data, or simply prefer to keep everything local?

[BiblioFuse](https://bibliofuse.com/en/) gives you several ways to keep reading progress consistent across devices without relying on any cloud account. Here's how each option works.

## Why Reading Progress Sync Is Harder Than It Looks

At first glance, "sync reading progress" sounds trivial — just save a number. But a comic library has dozens or hundreds of volumes, each with its own page count and last-read page. Reading progress is a **per-book, per-device state** that can change simultaneously on multiple devices. Without a central arbiter (a cloud server), two devices that are both offline can make conflicting updates.

Every local-only sync strategy has to accept a trade-off: either you impose a strict primary/replica model, accept that the last-written progress wins, or sync only when the devices are on the same network.

BiblioFuse's iCloud sync handles the arbitration automatically. But if iCloud is off the table, the following approaches give you control at different levels of automation.

## Option 1: Wi-Fi Library Sync from Mac (Recommended for Home Use)

If you have a Mac running BiblioFuse's Mac Home Library feature, your iPhone can connect to it over Wi-Fi. The Mac acts as the source of truth for both files and progress.

**How it works:**

1. On your Mac, open BiblioFuse and enable the home library server under Settings → Home Library.
2. On your iPhone, tap the network icon in the library tab and select your Mac.
3. Your iPhone displays the Mac's library and reads books directly from the Mac's storage — no copying to the iPhone.

Progress is stored on the Mac side. Whichever device reads from the Mac library records progress there. When you open the iPhone and connect to the Mac again, you pick up where the Mac session left off.

**Limitations:** Requires both devices on the same Wi-Fi network. Works best for home use; not suitable for reading while travelling unless you set up remote access via a VPN or Tailscale.

## Option 2: Manual Progress Export and Import

BiblioFuse lets you export your reading progress as a JSON file and import it on another device. This is the most portable, offline-capable option — no network required.

**Exporting from Device A:**

1. Go to Settings → Library → Export Progress.
2. BiblioFuse saves a `.json` file containing the last-read page for every book in your library.
3. Share this file via AirDrop, Files, or any other mechanism — no internet required.

**Importing on Device B:**

1. Receive the `.json` file and open it with BiblioFuse, or go to Settings → Library → Import Progress.
2. BiblioFuse merges the imported progress with existing local progress, taking the higher page number for each book (so you never go backwards).

This approach is fully offline. AirDrop makes the transfer nearly instant when devices are nearby. The only manual step is remembering to export before switching devices — a habit that takes a few days to build.

## Option 3: File-Based Sync with a Local Network Drive or USB

If you manage your library via the Files app, progress can follow the book file. BiblioFuse stores progress per-filename rather than per-cloud-ID. This means:

- If you copy a file from Device A to Device B with the same filename, BiblioFuse on Device B will show no progress (the file is new to that device).
- But if you copy both the book file **and** a progress export (Option 2 above) to Device B, and then import the progress file, you'll resume from the correct page.

For readers who maintain their library on an NAS or a shared SMB drive, this approach works cleanly: books stay on the drive, devices connect when on the local network, and progress is tracked on each device independently until you sync the progress file manually.

## Option 4: iCloud Drive Without a Cloud Sync Account

This is worth clarifying because it often confuses people: **iCloud Drive is not the same as BiblioFuse's iCloud sync**.

BiblioFuse's iCloud sync uses `NSUbiquitousKeyValueStore` and CloudKit to sync reading progress metadata. This requires an active iCloud account.

However, you can store your **book files** in iCloud Drive (the Files app) without enabling BiblioFuse's iCloud progress sync. In this configuration:

- Book files are accessible from any device signed into the same Apple ID
- Reading progress is tracked locally per-device and is **not** synced
- You still need to use Options 1, 2, or 3 above to synchronise progress if you want it consistent

If you use iCloud Drive purely as a file store and don't want progress sync, this is a clean setup.

## Option 5: Accept Per-Device Progress and Use Bookmarks

Not every reader needs perfect progress sync. If you primarily read one book at a time and don't switch devices mid-volume, per-device progress is perfectly workable.

BiblioFuse lets you set bookmarks at any page. A bookmark is a named saved position — you can create one before switching devices and jump to it immediately on the other device. It's one tap to set and one tap to jump, which for occasional device-switching is faster than a full sync.

## Choosing the Right Option

| Scenario | Best option |
|----------|-------------|
| Home reader, Mac in the house | Wi-Fi Home Library (Option 1) |
| Travelling, offline, two iOS devices | Manual export/import via AirDrop (Option 2) |
| NAS or shared drive library | File-based sync + progress export (Option 3) |
| Casual device switching, one book at a time | Bookmarks (Option 5) |
| Apple ID but no third-party cloud | iCloud Drive for files + manual progress sync |

## The Privacy Angle

[BiblioFuse](https://bibliofuse.com/en/) stores reading progress locally on your device. When iCloud sync is disabled, no reading data leaves your device. For readers who prefer not to have their reading habits stored in any external service — whether for privacy reasons or simply as a matter of preference — local-only operation is a first-class mode, not an afterthought.

The options above are not workarounds for a missing feature. They are the intended way to use BiblioFuse when cloud sync is not appropriate for your situation.

## Getting Started

1. [Download BiblioFuse](https://bibliofuse.com/en/) from the App Store.
2. Import your comic or ebook files via the Files app, Wi-Fi transfer, or Mac Home Library.
3. Choose the sync strategy that fits your reading habits — or combine them. Options 2 and 5 work alongside any other approach.

You don't need to give up convenience when you opt out of cloud accounts. A small habit — a quick AirDrop export before you switch devices — keeps your library state consistent without trusting your reading data to anyone else.
