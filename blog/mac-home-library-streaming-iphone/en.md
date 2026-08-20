# Stream Your Mac Comic Library to iPhone Over Wi-Fi (No Copying Required)

BiblioFuse Mac Home Library lets you stream your entire Mac comic and ebook collection to iPhone or iPad over Wi-Fi with no files copied to the device and zero iPhone storage used. It works with CBZ, CBR, EPUB, PDF, and TXT libraries on a Mac running alongside an iPhone or iPad on iOS 17 or later — no special network configuration required beyond both devices being on the same Wi-Fi network.

Your Mac hard drive has 400 GB of CBZ and EPUB files — decades of collected manga, graphic novels, and scanned comics. Your iPhone has 64 GB total, and most of that is already spoken for. You've tried iCloud sync, but it runs slowly and eats storage. You've tried Wi-Fi Transfer for selective imports, but picking individual volumes every time defeats the point of having a full collection.

Mac Home Library in [BiblioFuse](/en/) solves this problem differently. Instead of moving files to your phone, it streams them. Your Mac becomes a local server; your iPhone becomes a browser that reads from it on demand. Nothing is copied. Nothing is uploaded. You get your full 400 GB library on your iPhone as long as you're on the same Wi-Fi network.

This guide covers how it works, how to set it up, and what to expect during everyday use.

## What Mac Home Library Actually Is

Mac Home Library is a local streaming feature, not a sync feature. The distinction matters.

**Sync** (like iCloud) copies files to a device and keeps them in step with a remote source. To sync a 400 GB library to iPhone, you need 400 GB of free iPhone storage — which most people don't have.

**Streaming** doesn't copy anything. The file stays on the Mac; the iPhone fetches pages on demand as you read. When you tap a volume in the Mac Library view on your iPhone, [BiblioFuse](/en/) requests the relevant pages over your local network. Storage used on iPhone: zero (beyond the app itself and the progress data it keeps).

This is how services like Plex work for movies, but applied to comics and ebooks. Your Mac is the server; your iPhone is the client.

## What You Need

- An iPhone running iOS 17 or later
- A Mac on the same Wi-Fi network as the iPhone
- [BiblioFuse](/en/) installed on both devices (the iOS app and the Mac companion)
- Your comic library stored locally on the Mac (it doesn't need to be in a special folder)

BiblioFuse's Mac companion is a lightweight app that runs in the background and handles the Home Library server. It doesn't interfere with other apps or consume significant CPU; it only becomes active when an iPhone on the network requests something from it.

## Setting Up Mac Home Library

Setup takes about two minutes and doesn't require any network configuration beyond being on the same Wi-Fi.

**On your Mac:**

1. Open **BiblioFuse** (the Mac companion app).
2. Go to **Preferences → Home Library**.
3. Click **Enable Home Library Sharing**.
4. If BiblioFuse asks for permission to communicate over the local network (macOS firewall prompt), click **Allow**. This permission is required for streaming to work.
5. You'll see a local URL shown in the Preferences pane — something like `bibliofuse.local:8765`. This is the address your iPhone uses to find the Mac.

**On your iPhone:**

1. Open **BiblioFuse** on iPhone.
2. Tap the **Library** tab at the bottom.
3. Tap the source picker at the top — you should see **Mac Home Library** listed alongside your local library.
4. Tap **Mac Home Library**. If your Mac is running and sharing is enabled, the connection completes in a few seconds and your Mac's entire library appears.

That's it. No IP addresses to configure, no router settings to change, no port forwarding required. BiblioFuse uses Bonjour (Apple's zero-configuration networking) to discover the Mac automatically on the local network.

## Browsing and Reading

The Mac Library view on iPhone mirrors the folder structure you have on your Mac. If you keep your manga sorted in folders by series, you see those same folders. If you have a flat list, you see a flat list.

Tap any series folder to browse volumes. Tap a volume to open it. BiblioFuse fetches the first few pages immediately and starts rendering. Page loads during reading are fast — on a typical 5 GHz Wi-Fi network, individual pages arrive in under a second even for high-resolution CBZ files.

The reading experience is identical to reading a locally stored volume. You get the same reader controls: right-to-left mode for manga, vertical scroll for webtoons, double-page spread in landscape, zoom and pan. The only difference is where the file lives.

If you leave the Wi-Fi network mid-reading session — say, you start reading at home and then go out — BiblioFuse pauses gracefully and shows a reconnection prompt. It doesn't crash or corrupt your reading state.

## How Reading Progress Works

Reading progress from Mac Home Library sessions syncs via iCloud, the same as progress from locally stored volumes. If you read to page 87 in a volume streamed from your Mac, your iPhone records page 87 and pushes it to iCloud. If you later open the same volume locally on your Mac or on an iPad, it opens to page 87.

Tags and ratings also sync. Mark a volume as "finished" while reading it over Mac Home Library, and that status appears in your library on all devices.

## Differences From Wi-Fi Transfer and iCloud Sync

These three features in [BiblioFuse](/en/) serve different purposes and work well alongside each other.

**Wi-Fi Transfer** moves files from Mac to iPhone. You use it for building your local iPhone collection — volumes you want available offline, on a flight, or in a place without a strong Wi-Fi connection. The files land on your device permanently.

**iCloud Sync** keeps files in step between devices via Apple's cloud storage. It's best for moderate library sizes and is automatic — new files you add on Mac appear on iPhone within minutes. But it requires iCloud storage capacity, and large libraries can be slow to propagate.

**Mac Home Library** streams without transferring. Use it for your full library when you're at home on a good Wi-Fi network and don't need offline access. Nothing uses iPhone storage; the Mac is the single source of truth. When you add a new volume to your Mac, it's immediately available in the Mac Library view on iPhone — no sync window, no transfer step.

A practical split: use Mac Home Library for browsing and reading your full library at home; use Wi-Fi Transfer to download volumes you want to take with you when you leave.

## Tips for Best Performance

**Use 5 GHz Wi-Fi.** If your router supports both 2.4 GHz and 5 GHz bands, make sure both your Mac and iPhone are on the 5 GHz band. The higher bandwidth makes a noticeable difference with large high-resolution CBZ files.

**Keep the Mac awake.** macOS may put the machine to sleep if idle. You can prevent this in **System Settings → Battery → Prevent sleep when on power adapter**, or leave a terminal window open with `caffeinate` running. If the Mac sleeps, the streaming connection drops until it wakes.

**Library on SSD is faster.** If your comic library is on an external HDD, access times are slower than SSD. For large CBZ files (100 MB+), this can cause a small delay on the first page load of each volume. Moving the library to an internal SSD or external SSD eliminates this.

**Restart sharing if the iPhone can't find the Mac.** Occasionally, Bonjour discovery doesn't resolve immediately after a Mac wakes from sleep. In the BiblioFuse Mac Preferences, toggle Home Library Sharing off and on to reset the advertisement. iPhone should find it within a few seconds.

## Offline Reading From the Mac Library

If you know you'll be offline — travelling, commuting somewhere without reliable Wi-Fi — you can download individual volumes from the Mac Library to your iPhone before leaving.

In the Mac Library view on iPhone, tap the **download icon** next to any volume. BiblioFuse copies it to local iPhone storage over Wi-Fi Transfer. After that, the volume is available offline in your local library, and reading progress syncs normally when you reconnect.

You don't need to download your entire collection to take some of it with you — just the volumes you plan to read.

## Getting Started

[BiblioFuse](/en/) is available on the App Store for iPhone and iPad. Mac Home Library is part of the standard app; there's no separate activation or premium tier. Install it on both your Mac and iPhone, enable sharing in Mac Preferences, and your entire library is available on iPhone the next time you're on the same network.

For offline access and long-term library management, Wi-Fi Transfer and iCloud Sync round out the workflow. All three features are built into [BiblioFuse](/en/) and work together to keep your reading collection available wherever and however you want to read.

---

**Update (June 2026):** BiblioFuse PC Reader for Windows is now available on the Microsoft Store. It offers the same home library streaming feature described in this article — your iPhone connects to the Windows PC and streams your library over Wi-Fi, with no files copied to the device. See [Stream Your Windows PC Comic Library to iPhone](/en/blog/pc-home-library-streaming-iphone/) for the Windows setup guide.

## Frequently Asked Questions

**How do I stream my Mac comic library to iPhone without copying files?**
Install BiblioFuse on both your Mac and iPhone. In the Mac app, go to Preferences → Home Library and enable sharing. On iPhone, open BiblioFuse and tap Mac Home Library in the library sidebar. Your Mac's folders appear immediately — no IP address or router configuration needed.

**Does Mac Home Library use iPhone storage?**
No. Pages stream on demand from the Mac; nothing is stored on the iPhone beyond the BiblioFuse app and your progress data. You can browse and read a 400 GB library without using any iPhone storage for the files themselves.

**Can I use Mac Home Library over mobile data, not just Wi-Fi?**
Not directly, but Tailscale creates a private encrypted network between your Mac and iPhone so the streaming connection works over 5G or any internet connection. Install Tailscale on both devices, sign in with the same account, and BiblioFuse uses the Tailscale endpoint automatically.

**What formats does Mac Home Library support?**
Mac Home Library streams any format BiblioFuse reads — CBZ, CBR, ZIP, RAR, EPUB, PDF, and TXT. CBZ and CBR volumes stream page-by-page for instant opening; EPUB and TXT files are downloaded to the device first before opening.

**Does reading progress sync when using Mac Home Library?**
Yes. Progress from Mac Home Library sessions is stored and pushed to iCloud, the same as locally stored files. If you stream volume 3 of a series on iPhone and read to page 87, that position is available on your iPad and Mac afterward.
