# Access Your Home Comic Library Remotely with BiblioFuse and Tailscale

BiblioFuse reads CBZ, CBR, EPUB, PDF, ZIP, RAR, and TXT files on iPhone and iPad running iOS 17 or later, and its Mac Home Library feature lets you stream your entire Mac comic library to iPhone over a local Wi-Fi network without copying files. Combined with Tailscale, you can extend that same streaming connection over the internet and access your home library from anywhere in the world.

You leave your house with 2 TB of manga on your Mac at home. Your iPhone has 128 GB of storage — nowhere near enough to hold it all. You want to read from that library while travelling, without moving files to the cloud or paying for a separate sync service. This guide shows you how to make it work using [BiblioFuse](/en/) and Tailscale's free plan.

## What Remote Comic Library Access Means

BiblioFuse's Mac Home Library feature turns your Mac into a streaming server for your comic collection. When your iPhone and Mac are on the same Wi-Fi network, you browse and open files from your Mac in BiblioFuse on your iPhone — no copying, no syncing, no storage used on the phone itself.

The limitation is "same network." The moment you leave home, the connection breaks — your Mac is behind your home router, and your iPhone can no longer reach it directly.

Tailscale solves this by creating an encrypted peer-to-peer mesh network between your devices. Your iPhone and Mac appear on the same virtual network regardless of where they physically are. For BiblioFuse, that means the Mac Home Library connection works exactly the same over the internet as it does over your home Wi-Fi.

## Why This Works Better Than Cloud Storage

Cloud storage is the obvious alternative — sync everything to iCloud Drive or Google Drive and access it anywhere. But for large comic libraries, cloud sync has real limits:

- **Storage cost.** 2 TB of iCloud costs $9.99/month. Tailscale's free plan covers 100 devices with no storage fee.
- **Upload time.** Uploading 2 TB to any cloud service takes days on a home connection. With Tailscale + BiblioFuse, you're streaming directly from your Mac — no upload required.
- **Privacy.** Files never leave your network. Tailscale routes traffic peer-to-peer; the Tailscale relay servers only handle connection negotiation, not your files.
- **Reading experience.** Streaming via [BiblioFuse](/en/)'s Mac Home Library is fast — pages load as you tap, same as local storage. Cloud-synced files require full download before opening.

## Step 1 — Set Up Mac Home Library in BiblioFuse

BiblioFuse's Mac Home Library is a feature that serves your Mac's comic folders to the iPhone app over a local network.

1. Install **BiblioFuse** on both your iPhone and your Mac (from the App Store on each platform)
2. On your Mac, open BiblioFuse and go to **Settings → Mac Home Library**
3. Click **Enable** — the Mac starts serving your library on a local port
4. On your iPhone, open BiblioFuse and go to **Library → Add Source → Mac Home Library**
5. Your Mac should appear automatically on the local network. Tap it to connect.

Verify it works: browse a folder on your Mac from your iPhone and open a CBZ. Pages should load within a second or two. Once this works on local Wi-Fi, you're ready to add Tailscale.

## Step 2 — Install and Configure Tailscale

Tailscale is a VPN built on WireGuard. The free plan supports up to 100 devices and covers everything you need here.

1. Go to **tailscale.com** and create a free account
2. Install the **Tailscale app** on your Mac (available via the App Store or tailscale.com/download)
3. Install the **Tailscale app** on your iPhone (from the App Store)
4. Sign in to Tailscale on both devices using the same account
5. In the Tailscale app on your Mac, confirm it shows a Tailscale IP address (typically `100.x.x.x`)
6. On your iPhone, open the Tailscale app and confirm your Mac appears in the device list with a green status

Both devices are now on your private Tailscale network. They can communicate regardless of physical location.

## Step 3 — Connect BiblioFuse to Your Mac Over Tailscale

With Tailscale running, BiblioFuse can reach your Mac's Home Library using the Tailscale IP address.

1. On your Mac, note the Tailscale IP address (shown in the Tailscale menubar app — something like `100.64.0.2`)
2. On your iPhone, open BiblioFuse and go to **Library → Add Source → Mac Home Library**
3. If your Mac doesn't appear automatically (it won't once you're on a different network), tap **Enter Address Manually**
4. Type the Tailscale IP address and the port BiblioFuse is using (default: `8080`)
5. Tap **Connect**

Your Mac library now appears in BiblioFuse on your iPhone. Open any folder, tap any volume, and it streams over Tailscale exactly as it does over local Wi-Fi.

## Step 4 — Keep It Running When You Leave

For remote access to work, your Mac needs to be:

- **Awake** — disable sleep for network access in **System Settings → Battery → Options → Prevent automatic sleeping when the display is off** (for Mac desktop) or configure a schedule
- **Connected to the internet** — your home router stays connected while you travel
- **Running Tailscale** — set Tailscale to launch at login in its preferences

On a MacBook, the "Prevent sleeping" option requires the power adapter. If your home Mac is a MacBook unplugged from power, set a specific schedule: wake at 06:00 and sleep at 23:00, for example.

## Practical Use Cases

**Reading a long series while travelling.** Your complete One Piece collection (107 volumes, ~15 GB as compressed CBZ) lives on your Mac at home. On a plane with no Wi-Fi, you won't have access — but during travel with any internet connection (hotel Wi-Fi, mobile data), [BiblioFuse](/en/) streams each page on demand. You're not downloading 15 GB; you're downloading individual pages as you read.

**Reading on a slow connection.** Tailscale uses WireGuard, which is efficient on mobile data. Compressed CBZ pages (WebP-encoded via the BiblioFuse Tools tab) are typically 200–500 KB each. At 4G speeds of 10–20 Mbps, each page loads in under 0.1 seconds. Even on a congested hotel Wi-Fi at 2 Mbps, pages load in under a second.

**Managing a family library.** Add your spouse's iPhone or a tablet to the same Tailscale account (up to 100 devices on the free plan). Everyone in the family can stream from the same Mac library without separate cloud subscriptions.

## Troubleshooting

**Mac doesn't appear in BiblioFuse after enabling Tailscale.** Use the manual IP entry method with your Mac's Tailscale IP. The automatic discovery relies on mDNS broadcast, which doesn't cross network boundaries.

**Pages load slowly over mobile data.** Compress your CBZ archives using the BiblioFuse Tools tab or the [BiblioFuse Web Tool](/en/webapp/) to reduce page sizes. WebP-encoded CBZ files at quality 82 are typically 75–88% smaller than PNG-based archives, making remote streaming much faster.

**Mac went to sleep.** Enable "Prevent automatic sleeping when the display is off" in Mac System Settings, or use the macOS `caffeinate` command to keep it awake: `caffeinate -i &` in Terminal, which runs until you close Terminal or kill the process.

**Tailscale connection drops.** Tailscale automatically reconnects when network conditions change. If the connection fails, close and reopen BiblioFuse on your iPhone to retry the connection. Tailscale's DERP relay servers handle situations where direct peer-to-peer routing isn't possible.

## Frequently Asked Questions

**Can I access my home comic library remotely without Tailscale?**
Yes, but alternatives are more complex or less private. Port forwarding on your router exposes your Mac to the internet directly — a security risk. Cloud sync (iCloud, Google Drive) requires uploading your entire library first. Tailscale provides encrypted, zero-configuration remote access without exposing any ports.

**Does Tailscale cost anything for this use case?**
Tailscale's free plan supports up to 100 devices on a single personal account with no storage fees and no bandwidth limits. For a personal comic library shared across your own devices, the free plan is sufficient indefinitely.

**How fast is streaming comics over a mobile data connection?**
With compressed CBZ files (WebP pages), individual pages are typically 200–500 KB each. On a 4G connection at 10 Mbps, each page loads in under half a second. Even on slower hotel Wi-Fi at 2 Mbps, the reading experience is smooth. PNG-based archives (2–5 MB per page) are noticeably slower and benefit most from compression before remote streaming.

**Does BiblioFuse work with Tailscale on iPad as well?**
Yes. BiblioFuse supports iPhone and iPad, and Tailscale is also available on iPad. The setup is identical — install both apps, sign in to Tailscale, and connect to your Mac's Home Library using the Tailscale IP address.

**Is my comic collection private when using Tailscale?**
Yes. Tailscale uses WireGuard encryption for all traffic between devices. Your files are transmitted directly between your iPhone and your Mac in an encrypted tunnel. Tailscale's servers handle connection coordination but never see your file contents.

**What happens if my Mac restarts while I'm away?**
If Tailscale is set to launch at login and Mac Home Library is set to run at startup in BiblioFuse for Mac, the connection restores automatically after restart. Set both apps to launch at login in their respective settings to ensure continuity.
