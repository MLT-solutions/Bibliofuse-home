# How to Transfer Comics to iPhone Without iTunes or a Cable

Your manga library sits on your Mac. Two hundred CBZ files, organized by series, each volume between 80 and 200 MB. Your iPhone is where you actually read — in bed, on the train, during lunch. Getting those files across is the problem nobody talks about.

Email is capped at 25 MB. AirDrop works but requires you to send files one at a time and approve each transfer. iCloud Drive can sync them, but uploading 20 GB of comics first and waiting for them to come down again isn't practical. iTunes file sharing still exists but requires a cable and a level of patience most people abandoned years ago.

[BiblioFuse](/en/) solves this with Wi-Fi Transfer — a built-in local web server that lets you drag an entire comic library from any browser on your Mac or PC directly into your iPhone library, no cable required, no software to install on your computer, no cloud upload. This guide walks through the full process.

## What Wi-Fi Transfer Actually Does

Wi-Fi Transfer runs a small HTTP server on your iPhone, visible only on your local network. When you visit the address it provides (something like `http://192.168.1.x:8080`) in any browser, you get a drag-and-drop upload interface. You drag files or folders from your desktop into the browser window, and [BiblioFuse](/en/) receives them directly over Wi-Fi.

The key word is *directly*. Files move from your computer to your iPhone without touching any cloud service. Nothing is uploaded to a third-party server. Nothing requires you to be signed into anything. The only requirement is that both devices are on the same Wi-Fi network.

Transfer speed is governed by your local network, not your internet connection. On a typical home router, expect 15–40 MB/s. A 150 MB manga volume takes about five seconds.

## Step 1 — Install BiblioFuse

If you haven't already, install [BiblioFuse](/en/) from the App Store. It's free to download with no account or sign-in required.

Once installed, it creates two folders in the iOS Files app:
- **iCloud Drive → BiblioFuse** — synced storage, accessible across all your Apple devices
- **On My iPhone → BiblioFuse** — local-only storage, faster and no sync delay

Files transferred via Wi-Fi Transfer land in the local storage folder by default.

## Step 2 — Enable Wi-Fi Transfer on Your iPhone

1. Open BiblioFuse
2. Tap **Settings** (bottom-right of the library screen)
3. Under **Wi-Fi Import**, toggle it on
4. A local URL appears: `http://192.168.x.x:8080`

Keep BiblioFuse open and the screen on while transferring — iOS will suspend the server if the app goes to the background.

## Step 3 — Open the URL on Your Computer

On your Mac or PC, open any browser — Safari, Chrome, Firefox, Edge — and type the URL shown in BiblioFuse. You'll see a simple page with a drop zone.

You don't need to install anything. There's no extension, no app, no account. The page is served directly from your iPhone.

## Step 4 — Drag Your Comics In

Drag your CBZ, CBR, ZIP, RAR, or EPUB files from Finder (or Windows Explorer) into the browser drop zone. You can drag:

- A single file
- Multiple files at once
- An entire folder of volumes

When you drag a folder, BiblioFuse receives all the files inside it, preserving the folder structure. If you drag a folder called `Berserk` containing 40 volumes, they all arrive organized under that folder name in your library.

A progress indicator shows each file uploading. Large batches — 10 GB of comics — can run unattended. You don't need to click anything or approve individual files.

## Step 5 — Toggle Wi-Fi Transfer Off

Once the transfer finishes, go back to BiblioFuse and turn Wi-Fi Transfer off. This is a security step — the server is only accessible on your local network, but turning it off when you're done ensures no one else on the network can browse it.

Your transferred files now appear in the library automatically. Tap any cover to start reading.

## Transfer Speed Reference

These numbers are approximate, based on a modern 802.11ac (Wi-Fi 5) home network:

| File size | Transfer time |
|-----------|---------------|
| 50 MB (small manga volume) | ~2 seconds |
| 150 MB (typical manga volume) | ~5 seconds |
| 500 MB (large CBZ) | ~15 seconds |
| 10 GB (full series) | ~5 minutes |

Older 802.11n networks or mesh systems with congestion will be slower. Position your iPhone close to the router if you're transferring a large batch.

## Other Ways to Get Comics onto Your iPhone

Wi-Fi Transfer is the fastest method for large collections, but not the only one.

**Share sheet from Files app** — If the comic is already in iCloud Drive or on a USB drive connected to your Mac, long-press it in the Files app and tap Share → BiblioFuse. Best for one or two files.

**iCloud Drive sync** — Copy files to `iCloud Drive → BiblioFuse` on your Mac. They'll sync automatically to your iPhone. Reading progress also syncs this way — useful if you read on multiple devices. Downside: requires uploading to iCloud first, which can be slow for large collections.

**AirDrop** — Works for individual files. Tap the AirDrop icon, choose your iPhone, and BiblioFuse will offer to open the file. Not practical for series with many volumes.

**Tailscale / remote access** — If you're not on the same network as your Mac, you can use Tailscale to create a private virtual network between your devices and still use Wi-Fi Transfer or iCloud sync remotely. This is an advanced setup but opens up access to your home library from anywhere.

## Troubleshooting

**Can't reach the URL from my browser.**
Make sure both devices are on the same Wi-Fi network. Some routers isolate devices from each other (called "client isolation" or "AP isolation") — check your router settings if devices can't see each other.

**Files transferred but don't appear in the library.**
Pull down on the library to refresh. Check the **On My iPhone → BiblioFuse** folder in the Files app to confirm files arrived. Files that land outside the BiblioFuse folder won't be indexed.

**Transfer stopped partway through.**
The screen likely locked and iOS suspended the app. Go back to BiblioFuse, confirm Wi-Fi Transfer is still on, and restart the browser upload. Already-uploaded files are safe.

**CBR files say "unsupported format."**
Some very old CBR archives use RAR5, which isn't universally supported. Re-package as CBZ: extract the RAR, select all images, compress to ZIP, rename `.zip` to `.cbz`. BiblioFuse's Tools tab can also help with format conversion directly on the device.

## What to Do Next

Once your library is on the iPhone, [BiblioFuse](/en/) gives you a few tools to make it more manageable. The Tools tab lets you compress CBZ files on-device — useful if a 200 MB volume can be shrunk to 40 MB without visible quality loss. The Mac Home Library feature goes one step further: instead of transferring files to the iPhone at all, it lets you stream your entire Mac comic library over Wi-Fi in real time, so nothing actually has to be copied.

That's the complete picture — a Wi-Fi transfer that takes minutes instead of the hour an iTunes sync used to require.
