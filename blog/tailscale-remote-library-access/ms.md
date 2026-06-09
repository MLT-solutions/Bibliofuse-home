# Akses Perpustakaan Komik Rumah Anda dari Jauh dengan BiblioFuse dan Tailscale

Anda sedang dalam perjalanan perniagaan, duduk di bilik hotel pukul 10 malam tanpa apa-apa untuk dibaca. Seluruh koleksi komik anda — 800 jilid yang diatur persis seperti yang anda suka — berada di pemacu luaran yang disambungkan ke Mac anda di rumah. Biasanya anda terpaksa menunggu sampai balik. Tidak lagi.

Ciri penstriman perpustakaan rumah BiblioFuse membolehkan iPhone anda menyambung ke Mac seolah-olah mereka berada di rangkaian Wi-Fi yang sama, walaupun anda berada di seberang dunia. Jambatan yang membolehkan ini ialah Tailscale — VPN mesh konfigurasi-sifar yang berjalan senyap di latar belakang dan tidak memerlukan pemajuan port, IP statik, atau konfigurasi penghala.

## Mengapa "Muat Naik ke Awan Sahaja" Bukan Jawapannya

Alternatif yang jelas ialah menyegerakkan perpustakaan anda dengan iCloud, Dropbox, atau Google Drive. Ini berfungsi untuk koleksi kecil. Dalam skala besar, ia gagal:

- Perpustakaan komik 1 TB memerlukan minggu untuk dimuat naik dengan sambungan kediaman.
- Storan awan pada skala itu menghabiskan RM 50–150/bulan tanpa had masa.
- Anda kehilangan kawalan: setiap halaman setiap komik berada di pelayan orang lain.

Pendekatan Tailscale tidak memuat naik apa-apa. Perpustakaan anda kekal di Mac. iPhone anda mengambil halaman atas permintaan melalui terowong yang disulitkan. Anda tidak membayar apa-apa untuk storan, dan fail anda tidak pernah keluar dari kawalan anda.

## Cara Kerja Penstriman Rumah BiblioFuse

BiblioFuse untuk macOS merangkumi pelayan HTTP terbina dalam yang boleh disambungkan oleh aplikasi iPhone. Apabila kedua-dua peranti berada di rangkaian Wi-Fi yang sama, iPhone anda boleh melayari perpustakaan Mac, menstrim halaman semasa membaca, dan menyegerakkan kemajuan membaca — semua tanpa menyalin sebarang fail.

Tailscale memanjangkan rangkaian tempatan itu ke mana sahaja anda berada, menjadikan alamat IP peribadi Mac anda boleh dicapai dari mana-mana peranti yang menjalankan Tailscale di bawah akaun anda — dengan selamat, dengan penyulitan hujung ke hujung.

## Apa yang Tailscale Lakukan

Tailscale dibina di atas WireGuard, protokol VPN moden yang dikenali sebagai pantas dan kukuh secara kriptografi. Ia mencipta jaring rakan ke rakan: setiap peranti menyambung terus ke peranti lain di bawah akaun anda, tanpa menghalakan trafik melalui pelayan pusat.

Persediaan mengambil masa kira-kira 5 minit dan tidak memerlukan akses penghala.

## Persediaan Langkah demi Langkah

### Di Mac Anda

1. Muat turun Tailscale dari [tailscale.com](https://tailscale.com) atau Mac App Store.
2. Log masuk dengan Google, GitHub, Microsoft, atau buat akaun Tailscale percuma.
3. Catat alamat IP Tailscale Mac anda (contoh: `100.x.x.x`).
4. Buka BiblioFuse di Mac dan pergi ke **Keutamaan → Pelayan Perpustakaan Rumah**.
5. Aktifkan pelayan. Port lalai ialah `8686`.

### Di iPhone Anda

1. Pasang Tailscale dari App Store.
2. Log masuk ke akaun Tailscale yang sama yang anda gunakan di Mac.
3. Aktifkan togol VPN Tailscale.
4. Buka [BiblioFuse](https://bibliofuse.com/ms/) di iPhone dan pergi ke **Perpustakaan → Sambung ke Mac**.
5. Masukkan alamat IP Tailscale Mac anda dan port `8686`.
6. Ketik Sambung. Perpustakaan Mac anda muncul serta-merta.

## Prestasi dan Lebar Jalur

Tailscale mewujudkan sambungan rakan ke rakan terus apabila mungkin. Pada Wi-Fi hotel biasa atau sambungan mudah alih (20–50 Mbps), penstriman halaman komik berfungsi dengan selesa. BiblioFuse hanya menghantar halaman semasa dan memuatkan beberapa halaman seterusnya terlebih dahulu.

## Privasi dan Keselamatan

Sambungan Tailscale disulitkan hujung ke hujung dengan WireGuard. Tiada orang lain yang boleh mengakses pelayan BiblioFuse anda. Fail anda tidak pernah melalui pelayan pihak ketiga.

## Soalan Lazim

**Adakah Mac saya perlu kekal terjaga?**
Ya. BiblioFuse berjalan semasa Mac aktif. Nyahaktifkan tidur automatik di Tetapan Sistem → Bateri.

**Adakah ini berfungsi dengan data mudah alih?**
Ya. Tailscale berfungsi melalui mana-mana sambungan internet. Penstriman komik menggunakan kira-kira 1–3 MB setiap halaman bergantung pada tetapan pemampatan.

**Bolehkah ini digunakan dengan beberapa Mac?**
Ya. Tambahkan setiap Mac ke akaun Tailscale anda dan simpan setiap satu sebagai sambungan dalam BiblioFuse.

**Adakah Tailscale berbayar?**
Ada peringkat percuma yang menyokong sehingga 3 pengguna dan 100 peranti — lebih dari cukup untuk kegunaan peribadi.

## Mula Sekarang

Jika anda belum mempunyai [BiblioFuse](https://bibliofuse.com/ms/), muat turun dari App Store untuk iPhone dan iPad, dan dari Mac App Store untuk macOS. Tailscale percuma di [tailscale.com](https://tailscale.com).

Gabungan kedua-duanya menjadikan perpustakaan rumah anda terasa sentiasa bersama anda — tanpa memuat naik satu fail pun ke awan.
