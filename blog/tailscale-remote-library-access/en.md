# Access Your Home Comic Library Remotely with BiblioFuse and Tailscale

You're on a work trip, sitting in a hotel room at 10pm with nothing to read. Your entire comic collection — 800 volumes organised exactly how you like them — is sitting on an external drive plugged into your Mac at home. You'd normally have to wait until you got back. Not anymore.

BiblioFuse's home library streaming feature lets your iPhone connect to your Mac as if they're on the same Wi-Fi network, even when you're on the other side of the world. The bridge that makes this possible is Tailscale — a zero-config VPN mesh that runs silently in the background and requires no port forwarding, no static IP, and no router configuration.

## Why "Just Upload It to the Cloud" Isn't the Answer

The obvious alternative is to sync your library to iCloud, Dropbox, or Google Drive. That works for small collections. At scale, it falls apart:

- A 1 TB comic library takes weeks to upload on a residential connection.
- Cloud storage at that scale costs $10–30/month indefinitely.
- You lose control: every page of every comic is on someone else's server.
- Sync conflicts and re-downloads are a constant friction point.

The Tailscale approach doesn't upload anything. Your library stays on your Mac. Your iPhone fetches pages on demand over an encrypted tunnel. You pay nothing for storage, and your files never leave your control.

## How BiblioFuse Home Streaming Works

BiblioFuse for macOS includes a built-in HTTP server that your iPhone app can connect to. When both devices are on the same Wi-Fi network, your iPhone can browse your Mac library, stream pages as you read, and sync reading progress back — all without copying any files.

The server listens on a local IP address and a port you choose. Normally, this only works on your home network. Tailscale extends that local network to wherever you are, making your Mac's private IP address reachable from any device running Tailscale under your account — securely, with end-to-end encryption.

## What Tailscale Does

Tailscale is built on WireGuard, a modern VPN protocol known for being fast and cryptographically robust. Unlike traditional VPNs, Tailscale creates a peer-to-peer mesh: each device connects directly to other devices under your account, without routing traffic through a central server.

The result is a private network — called a tailnet — that spans your Mac at home, your iPhone wherever you are, and any other devices you add. Every connection uses your Tailscale-assigned IP address, which stays consistent. No DNS tricks, no dynamic IPs, no port forwarding.

Setup takes about 5 minutes and requires no router access.

## Step-by-Step Setup

### On Your Mac

1. Download Tailscale from [tailscale.com](https://tailscale.com) or the Mac App Store.
2. Sign in with Google, GitHub, Microsoft, or create a free Tailscale account.
3. Tailscale runs in the menu bar. Note your Mac's Tailscale IP address (e.g. `100.x.x.x`).
4. Open BiblioFuse on your Mac and go to **Preferences → Home Library Server**.
5. Enable the server. The default port is `8686`. Leave it running.

### On Your iPhone

1. Install Tailscale from the App Store.
2. Sign in to the same Tailscale account you used on your Mac.
3. Enable the Tailscale VPN toggle. Your iPhone will now have a Tailscale IP, and your Mac's Tailscale IP is reachable.
4. Open [BiblioFuse](https://bibliofuse.com/en/) on your iPhone and go to **Library → Connect to Mac**.
5. Enter your Mac's Tailscale IP address and port `8686`.
6. Tap Connect. Your Mac library appears immediately.

That's it. You can now browse and read your entire home library from anywhere.

### On Subsequent Trips

Once configured, reconnecting is automatic. Tailscale stays connected in the background on both devices. Open BiblioFuse, tap your saved Mac connection, and your library loads — whether you're at a coffee shop, a hotel, or on an international flight with Wi-Fi.

## Performance and Bandwidth

Tailscale establishes direct peer-to-peer connections when possible, avoiding relay servers. On a typical hotel Wi-Fi or mobile connection (20–50 Mbps), streaming comic pages works comfortably. Pages load quickly because BiblioFuse sends only the current page and prefetches the next few — it doesn't stream the whole CBZ file at once.

For faster loading, BiblioFuse compresses images from your Mac library before sending them to your iPhone. This reduces bandwidth usage substantially with no visible quality difference at phone screen sizes. You can adjust the compression level in BiblioFuse's server settings.

## Privacy and Security

The Tailscale connection is end-to-end encrypted with WireGuard. Nobody else can access your BiblioFuse server — not even Tailscale's infrastructure. The only devices that can reach it are devices signed into your Tailscale account.

Your comic files never pass through any third-party server. Pages are fetched directly from your Mac to your iPhone over the encrypted tunnel. No account is required on BiblioFuse's side — the server is entirely self-hosted on your own hardware.

## Frequently Asked Questions

**Does my Mac need to be awake for this to work?**
Yes. BiblioFuse's server runs while your Mac is awake. If your Mac sleeps, the connection drops. To keep your Mac available, go to System Settings → Battery → Prevent automatic sleeping when the display is off, or use a scheduling tool to keep it awake during hours you're likely to read.

**Does this work on cellular data?**
Yes. Tailscale works over any internet connection — Wi-Fi or cellular. Streaming comics over cellular uses real data (roughly 1–3 MB per page depending on compression settings), so be mindful on limited data plans.

**Can I use this with multiple Macs?**
Yes. Add each Mac to your Tailscale account and add each as a connection in BiblioFuse. You can have multiple home library connections saved and switch between them.

**Does Tailscale cost money?**
Tailscale has a free tier that supports up to 3 users and 100 devices — more than enough for personal use. Personal use across your own devices is free indefinitely.

## Real-World Use Cases

**Long-haul flights.** Download a few volumes directly to your iPhone for offline reading before takeoff. When the flight has Wi-Fi, stream the rest from home without re-downloading.

**Hotel stays.** Read your full library in the evening exactly as if you were home, with your existing folder structure and reading progress intact.

**Hospital or waiting rooms.** Long waits are less painful when you have access to your entire collection, not just whatever you thought to pre-download.

## Getting Started

If you don't have [BiblioFuse](https://bibliofuse.com/en/) yet, download it from the App Store for iPhone and iPad, and from the Mac App Store for macOS. Tailscale is free to download from [tailscale.com](https://tailscale.com).

The combination of both makes your home library feel like it's always with you — without uploading a single file to the cloud.
