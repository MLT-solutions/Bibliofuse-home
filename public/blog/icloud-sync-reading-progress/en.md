# How BiblioFuse Syncs Reading Progress Across iPhone, iPad, and Mac via iCloud

You're reading a manga volume on your iPhone during your commute — get through 80 pages, then switch to your iPad at home and have to hunt through the page thumbnails to find where you left off. Or you read a chapter on your Mac and pick up your iPhone the next morning, only to find it still showing page one.

Reading progress sync is one of those features that sounds simple but breaks subtly in most readers. [BiblioFuse](/en/) uses iCloud to synchronize your exact reading position — including page number, reading direction, and display settings — across iPhone, iPad, and Mac, with no manual steps required.

This guide explains how it works, how to set it up, and what to expect.

## Why Reading Progress Sync Is Hard to Get Right

The naive approach — saving a page number in a cloud document — fails in several ways:

- It doesn't account for volumes with different page counts in different encodings
- It doesn't sync reading direction (right-to-left vs. left-to-right)
- It conflicts when two devices update the same file at the same time
- It has no mechanism for marking a volume "finished" that persists across devices

[BiblioFuse](/en/) stores progress data as structured metadata keyed to the file's content hash rather than its filename. This means that even if you rename a CBZ file or move it between folders, the progress data still matches it correctly on any device. It also means two copies of the same volume — one on iPhone, one synced to Mac — share the same progress entry.

## Setting Up iCloud Sync

iCloud sync in BiblioFuse requires one step: making sure iCloud Drive is enabled and BiblioFuse has access.

On iPhone or iPad:
1. Go to **Settings** (system settings, not the app)
2. Tap your Apple ID → **iCloud** → **iCloud Drive**
3. Scroll to find **BiblioFuse** and confirm the toggle is on

On Mac (if you use the BiblioFuse Mac companion or Mac Home Library):
1. Open **System Settings → Apple ID → iCloud**
2. Enable **iCloud Drive** and make sure BiblioFuse is listed

Once those toggles are on, BiblioFuse handles everything else automatically. There's no "sync now" button — changes propagate in the background whenever devices are online.

## What Gets Synced

BiblioFuse syncs the following per volume:

**Reading position.** The exact page number you're on. If you close a volume on page 87, every other device opens it to page 87.

**Reading direction.** If you've set a manga volume to right-to-left, that setting follows the volume to every device. You configure it once, and it's correct everywhere.

**Zoom and scroll position.** If you were zoomed into a panel on the right side of the page, the next device opens with the same zoom state.

**Completion status.** Marking a volume as read on one device marks it everywhere. The library grid shows completion indicators consistently across devices.

**Tags and ratings.** Tags you add and star ratings you give to volumes sync across all devices. Organize your library on iPad; it's organized the same way on iPhone.

## How iCloud Drive File Sync Works

Beyond progress data, [BiblioFuse](/en/) also uses iCloud Drive for the library files themselves. The integration works in two directions:

### Mac to iPhone

On your Mac, open Finder and navigate to **iCloud Drive → BiblioFuse**. Drop any CBZ, CBR, EPUB, or PDF file into that folder. It appears in BiblioFuse on your iPhone within minutes, ready to read — no cable, no Wi-Fi Transfer session needed.

This is the most seamless workflow for people who download new volumes on a Mac and want them on iPhone without any extra steps. Download a file on Mac → drop it in the folder → pick up your iPhone and start reading.

### iPhone to Other Devices

Files you add to BiblioFuse via Wi-Fi Transfer or the Files app are stored in the BiblioFuse iCloud folder and become available on your other devices. Add a new volume on iPhone; it shows up on iPad within the iCloud sync window.

## Wi-Fi Transfer for Bulk Loading

For initial setup or large batch transfers, Wi-Fi Transfer is faster than iCloud sync. iCloud throttles upload bandwidth and is intended for ongoing sync, not bulk transfers.

Wi-Fi Transfer in BiblioFuse:
1. Open **Settings → Wi-Fi Import** in the app
2. Toggle it on
3. Visit the URL shown on any browser on the same Wi-Fi network
4. Drag your collection — files or entire folders — into the browser window

[BiblioFuse](/en/) receives at local network speed: 50–100 MB/s on a typical home network. A 20 GB collection transfers in a few minutes. After the initial load, iCloud sync handles new additions automatically.

## Mac Home Library: Reading Without Copying Files

If your primary collection is on a Mac and you don't want to fill iPhone storage with the entire library, Mac Home Library is a different approach from iCloud sync.

Rather than syncing files to the cloud, Mac Home Library streams volumes directly from your Mac to iPhone over your local Wi-Fi. Your Mac acts as a server; your iPhone browses and reads from it in real time. No files are copied to the device or to iCloud.

**How to enable it:**
1. Make sure BiblioFuse is installed on your Mac
2. In the Mac app, go to **Preferences → Home Library** and enable sharing
3. On iPhone, open BiblioFuse and switch to the Mac Library tab

Your Mac's entire library is immediately browsable from iPhone. Tap any volume to start reading — it streams on demand.

Reading progress from Mac Home Library sessions is still synced via iCloud, so your position in a streamed volume follows you if you later download that volume for offline reading.

## Handling Offline Reading

iCloud sync requires an internet connection to propagate changes. If you read offline — on a flight, for example — BiblioFuse stores progress locally and syncs it the next time the device connects. No data is lost; the last-write wins if two devices conflict, with the conflict resolved in favor of the device that had the higher page number (the assumption being you've read further on one device than the other).

For offline reading from Mac Home Library, you can download individual volumes to the device before going offline. Tap the download icon next to any volume in the Mac Library view, and it copies to local storage. Progress from the downloaded copy syncs normally.

## Checking Sync Status

BiblioFuse shows the iCloud sync status in the library header — a small icon indicates whether sync is up to date, in progress, or paused (typically because iCloud is temporarily unavailable). If sync is paused, progress is stored locally and will catch up automatically.

If progress appears out of date on a device:
- Check that the BiblioFuse iCloud toggle is on (Settings → Apple ID → iCloud)
- Check that iCloud Drive has available storage (your iCloud plan isn't full)
- Force a sync by going to **Settings → iCloud** in the BiblioFuse app and tapping **Sync Now**

## A Practical Reading Workflow

Put together, the workflow looks like this:

1. **At home on Mac**: download new volumes, drop into iCloud Drive → BiblioFuse
2. **Before commuting**: they're already on iPhone, synced automatically
3. **During commute on iPhone**: read on the go, progress saves continuously
4. **Evening on iPad**: open BiblioFuse, the volume is on page 87 — exactly where you left off
5. **Weekend reading on Mac**: Mac Home Library shows your entire library; progress from iPhone and iPad is current

No manual steps, no "remember to sync," no hunting for your page.

## Getting Started

[BiblioFuse](/en/) is free on the App Store for iPhone and iPad. iCloud sync is included — there's no premium tier required to use it. Enable iCloud Drive for BiblioFuse in your device settings, and your progress starts syncing across devices immediately.

For the full Mac Home Library setup and Wi-Fi Transfer walkthrough, visit the [BiblioFuse](/en/) help section after installing.
