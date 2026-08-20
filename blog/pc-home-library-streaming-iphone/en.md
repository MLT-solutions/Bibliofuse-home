# Stream Your Windows PC Comic Library to iPhone — Home Wi-Fi and 5G

Your comic collection lives on a Windows PC. Hundreds of gigabytes of CBZ, EPUB, and PDF files organised exactly the way you like them. Your iPhone has 64 GB of storage, most of it already taken. The obvious fix — copying files — means managing two copies of everything, running out of space constantly, and transferring files every time you add something new.

[BiblioFuse](https://bibliofuse.com/en/) solves this differently. The BiblioFuse PC Reader app for Windows includes a built-in streaming server. Your iPhone connects to the PC and streams pages on demand — nothing is copied, nothing is uploaded, and your iPhone storage stays free. The same feature that Mac users have had is now available natively on Windows, downloadable from the Microsoft Store.

## How PC Library Streaming Works

BiblioFuse PC Reader runs a local HTTP server on your Windows machine. When your iPhone and PC are on the same Wi-Fi network, the iOS app discovers the PC automatically using Bonjour (the same zero-configuration networking protocol that powers AirPrint and AirDrop). Your library appears on your iPhone without entering an IP address or configuring your router.

When you open a volume, BiblioFuse fetches the first few pages immediately and prefetches the next ones as you read. CBZ and CBR files are streamed page-by-page; EPUB and PDF files use HTTP Range requests so large files open quickly without downloading the whole thing. The reading experience — right-to-left mode, vertical scroll for webtoons, spread view in landscape — is identical to a locally stored file. The only difference is where the data comes from.

The server keeps running even after you close the app window. It moves to the system tray instead of quitting. That means your library remains accessible from iPhone even when you're using the PC for something else. To restore the window, double-click the tray icon. To stop the server completely, right-click the tray icon and choose Quit.

## Part 1: Streaming on Your Home Wi-Fi

This is the simplest setup. Both your PC and iPhone are on the same network, and BiblioFuse handles discovery automatically.

### On Your PC

1. Download and install **BiblioFuse PC Reader** from the Microsoft Store.
2. Open the app and go to **Settings → Home Library**.
3. Click **Add Folder** and select the folder (or folders) where your comics and ebooks are stored. You can add multiple folders — a manga folder, a graphic novels folder, a PDFs folder.
4. Enable **Library Sharing**. The server starts immediately on port 7341 and begins scanning your library in the background.
5. Optionally, set a **password** under Settings → Security to protect access. If you skip this, anyone on your local network can connect — fine for home use, recommended to lock down if you're on shared or public Wi-Fi.
6. You can close the window. The server runs in the system tray.

### On Your iPhone

1. Open **[BiblioFuse](https://bibliofuse.com/en/)** on iPhone.
2. Tap the **Library** tab.
3. Tap the source picker at the top — if your PC is running and sharing is enabled, **PC Home Library** appears within a few seconds.
4. Tap it. Your PC's folder structure appears immediately.

That's the complete setup. Your full library is now browsable and readable on iPhone, with no files transferred to the device. When you add new volumes to your PC, they appear in the iPhone view on the next library refresh — no resync step required.

### Format Support

BiblioFuse PC Reader streams any format it can read locally: **CBZ, CBR, EPUB, PDF, and TXT**. Manga in CBZ, graphic novels in CBR, ebooks in EPUB, scanned books in PDF — all supported over the same streaming connection.

### Performance Tips

**Use 5 GHz Wi-Fi.** If your router broadcasts both 2.4 GHz and 5 GHz bands, make sure both your PC and iPhone are connected to 5 GHz. The higher bandwidth makes a meaningful difference with large high-resolution CBZ files.

**Library on an SSD is faster.** If your comic library is on a mechanical hard drive, the first page load of each new volume will have a small delay. Moving the library to an SSD (internal or external) eliminates this.

**If the iPhone doesn't find the PC:** The PC app shows a network address in Settings → Home Library when sharing is running. Check that the Windows Firewall isn't blocking port 7341. You can also enter the PC's local IP address manually in the iOS app under Library → Add Server → Manual.

## Part 2: Streaming Away from Home on 5G

Home Wi-Fi streaming only works when both devices are on the same network. To access your library from a coffee shop, hotel, or anywhere else on 5G, you need to bridge the two networks. The solution is [Tailscale](https://tailscale.com) — the same setup covered in the [BiblioFuse Tailscale guide](/en/blog/tailscale-remote-library-access/).

Tailscale creates a private encrypted mesh network between your devices. Once set up, your iPhone can reach your PC's streaming server exactly as if both were on the same local network — over any internet connection, with no port forwarding and no static IP required.

### Setting Up Tailscale for Remote Streaming

**On your Windows PC:**

1. Download Tailscale from [tailscale.com](https://tailscale.com) or the Microsoft Store.
2. Sign in with Google, GitHub, Microsoft, or a free Tailscale account.
3. Tailscale runs in the system tray alongside BiblioFuse. Note your PC's Tailscale IP address (it starts with `100.`).
4. Make sure BiblioFuse PC Reader is running with Library Sharing enabled.

**On your iPhone:**

1. Install Tailscale from the App Store.
2. Sign in with the same Tailscale account.
3. Enable the Tailscale VPN toggle.
4. Open BiblioFuse on iPhone. In Library → Add Server, enter your PC's Tailscale IP address and port `7341`.
5. Tap Connect.

BiblioFuse automatically prefers the Tailscale IP when it's available, so the same saved connection works both at home (over LAN) and away (over Tailscale). You don't need two separate connection entries.

### What to Expect on Cellular

Tailscale establishes peer-to-peer connections when possible, bypassing relay servers for better performance. On a typical 5G connection, streaming comic pages works well. BiblioFuse sends only the current page and prefetches the next few — it doesn't stream the full CBZ file at once, so a 200 MB archive doesn't mean 200 MB of data usage. Expect roughly **1–3 MB per page** depending on image resolution and server compression settings.

For reading on a limited data plan, use [BiblioFuse](https://bibliofuse.com/en/) to download individual volumes over Wi-Fi before leaving home. In the PC Library view on iPhone, tap the download icon next to any volume to cache it locally. That volume is then available offline, with no Tailscale or data connection needed.

## PC vs Mac: What's Different

If you've used the Mac companion app, the PC experience is nearly identical from the iOS side. A few Windows-specific differences:

- **Port:** The PC server uses port **7341** (the Mac app defaults to 8686).
- **Discovery:** Both use Bonjour/mDNS with the service type `_bibliofuse._tcp`, so iOS finds them identically.
- **System tray:** The PC app stays in the system tray when the window is closed; the server never stops until you choose Quit.
- **Settings file:** PC settings are stored at `%APPDATA%\BiblioFuse\settings.json` if you ever need to inspect or reset them manually.
- **One active server at a time:** In the current release, BiblioFuse iOS connects to either a Mac or a PC server — not both simultaneously. Whichever machine is running and active is what iOS discovers first.

For Mac-specific streaming details, see [Stream Your Mac Comic Library to iPhone Over Wi-Fi](/en/blog/mac-home-library-streaming-iphone/).

## Frequently Asked Questions

**Does BiblioFuse have a Windows app?**
Yes. BiblioFuse PC Reader is a native Windows application available on the Microsoft Store. It reads CBZ, CBR, EPUB, PDF, and TXT files locally and streams your full library to the iOS app over your network.

**How do I stream comics from my Windows PC to iPhone?**
Install BiblioFuse PC Reader on Windows and enable Library Sharing in Settings. Install BiblioFuse on iPhone. On the same Wi-Fi network, open BiblioFuse on iPhone and tap Library — your PC library appears automatically via Bonjour discovery. No IP address or router configuration required.

**Can I access my PC library over 5G when I'm away from home?**
Yes, using Tailscale. Install Tailscale on both your Windows PC and iPhone, sign in with the same account, and enable it on both devices. BiblioFuse detects the Tailscale connection automatically and uses it to reach your PC from anywhere — hotel Wi-Fi, 5G, any internet connection.

**Does streaming from PC use iPhone storage?**
No. Pages are fetched from the PC on demand; nothing is stored on iPhone beyond the app itself and your reading progress data. You can browse and read a 500 GB library without using any iPhone storage for the files.

**Does the PC need to stay awake for streaming to work?**
Yes. The streaming server runs on the PC; if the PC sleeps or the server is stopped, the iOS connection drops. To prevent sleep while streaming, go to Windows Settings → Power & Sleep and set sleep to Never, or use a tool like PowerToys to keep the machine awake.

**What port does the PC streaming server use?**
Port 7341. If you have a firewall that blocks outbound or inbound traffic on this port, you'll need to add an exception for BiblioFuse PC Reader.

## Getting Started

[BiblioFuse PC Reader](https://bibliofuse.com/en/) is available now on the Microsoft Store. BiblioFuse for iPhone is on the App Store. Install both, point the PC app at your library folder, and your entire collection is on your iPhone the next time you open the app — no cables, no cloud, no copying.
