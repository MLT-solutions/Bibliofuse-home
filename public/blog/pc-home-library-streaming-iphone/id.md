# Streaming Perpustakaan Komik PC Windows ke iPhone — Wi-Fi di Rumah dan 5G saat Bepergian

Koleksi komik Anda tersimpan di PC Windows. Ratusan gigabyte file CBZ, EPUB, dan PDF yang terorganisir persis seperti yang Anda inginkan. iPhone Anda memiliki 64 GB penyimpanan, sebagian besar sudah terpakai. Solusi yang paling jelas — menyalin file — berarti mengelola dua salinan segalanya, terus-menerus kehabisan ruang, dan memindahkan file setiap kali menambahkan sesuatu yang baru.

[BiblioFuse](https://bibliofuse.com/id/) menyelesaikan ini dengan cara yang berbeda. Aplikasi BiblioFuse PC Reader untuk Windows menyertakan server streaming bawaan. iPhone Anda terhubung ke PC dan melakukan streaming halaman sesuai permintaan — tidak ada yang disalin, tidak ada yang diunggah, dan penyimpanan iPhone tetap bebas. Fitur yang sama yang dimiliki pengguna Mac kini tersedia secara native di Windows, dapat diunduh dari Microsoft Store.

## Cara Kerja Streaming Perpustakaan PC

BiblioFuse PC Reader menjalankan server HTTP lokal di mesin Windows Anda. Ketika iPhone dan PC berada di jaringan Wi-Fi yang sama, aplikasi iOS secara otomatis menemukan PC menggunakan Bonjour — protokol jaringan konfigurasi-nol yang sama yang mendukung AirPrint dan AirDrop. Perpustakaan Anda muncul di iPhone tanpa memasukkan alamat IP atau mengonfigurasi router.

Ketika Anda membuka sebuah volume, BiblioFuse segera mengambil beberapa halaman pertama dan melakukan prefetch halaman berikutnya saat Anda membaca. File CBZ dan CBR di-streaming halaman per halaman; file EPUB dan PDF menggunakan permintaan HTTP Range sehingga file besar terbuka dengan cepat tanpa mengunduh semuanya. Pengalaman membaca — mode kanan ke kiri, scroll vertikal untuk webtoon, tampilan halaman ganda dalam mode lanskap — identik dengan membaca file yang tersimpan secara lokal. Satu-satunya perbedaan adalah dari mana data berasal.

Server terus berjalan bahkan setelah Anda menutup jendela aplikasi. Ia berpindah ke system tray alih-alih keluar. Artinya perpustakaan Anda tetap dapat diakses dari iPhone meski Anda menggunakan PC untuk hal lain. Untuk memulihkan jendela, klik dua kali ikon tray. Untuk menghentikan server sepenuhnya, klik kanan ikon tray dan pilih Keluar.

## Bagian 1: Streaming di Wi-Fi Rumah

Ini adalah pengaturan paling sederhana. PC dan iPhone Anda berada di jaringan yang sama, dan BiblioFuse menangani penemuan secara otomatis.

### Di PC Anda

1. Unduh dan instal **BiblioFuse PC Reader** dari Microsoft Store.
2. Buka aplikasi dan pergi ke **Pengaturan → Perpustakaan Rumah**.
3. Klik **Tambah Folder** dan pilih folder (atau beberapa folder) tempat komik dan ebook Anda disimpan. Anda dapat menambahkan beberapa folder — satu untuk manga, satu untuk novel grafis, satu untuk PDF.
4. Aktifkan **Berbagi Perpustakaan**. Server segera mulai di port 7341 dan mulai memindai perpustakaan Anda di latar belakang.
5. Secara opsional, tetapkan **kata sandi** di Pengaturan → Keamanan untuk melindungi akses. Jika Anda melewatinya, siapa pun di jaringan lokal Anda dapat terhubung — baik untuk penggunaan rumah, disarankan dikunci jika menggunakan Wi-Fi bersama atau publik.
6. Anda dapat menutup jendela. Server berjalan di system tray.

### Di iPhone Anda

1. Buka **[BiblioFuse](https://bibliofuse.com/id/)** di iPhone.
2. Ketuk tab **Perpustakaan**.
3. Ketuk pemilih sumber di bagian atas — jika PC Anda berjalan dan berbagi diaktifkan, **Perpustakaan Rumah PC** muncul dalam beberapa detik.
4. Ketuk. Struktur folder PC Anda muncul segera.

Itu saja. Seluruh perpustakaan Anda kini dapat dijelajahi dan dibaca di iPhone, tanpa file apa pun yang ditransfer ke perangkat. Saat Anda menambahkan volume baru ke PC, volume tersebut muncul di tampilan iPhone pada pembaruan perpustakaan berikutnya — tidak diperlukan langkah sinkronisasi ulang.

### Format yang Didukung

BiblioFuse PC Reader melakukan streaming format apa pun yang dapat dibacanya secara lokal: **CBZ, CBR, EPUB, PDF, dan TXT**. Manga dalam CBZ, novel grafis dalam CBR, ebook dalam EPUB, buku yang dipindai dalam PDF — semua didukung melalui koneksi streaming yang sama.

### Tips Performa

**Gunakan Wi-Fi 5 GHz.** Jika router Anda mendukung band 2,4 GHz dan 5 GHz, pastikan PC dan iPhone Anda terhubung ke band 5 GHz. Bandwidth yang lebih tinggi membuat perbedaan nyata dengan file CBZ resolusi tinggi berukuran besar.

**Perpustakaan di SSD lebih cepat.** Jika koleksi komik Anda ada di hard disk mekanis, pemuatan halaman pertama setiap volume baru akan mengalami sedikit keterlambatan. Memindahkan perpustakaan ke SSD (internal atau eksternal) menghilangkan masalah ini.

**Jika iPhone tidak menemukan PC:** Aplikasi PC menampilkan alamat jaringan di Pengaturan → Perpustakaan Rumah saat berbagi aktif. Periksa apakah Windows Firewall tidak memblokir port 7341. Anda juga dapat memasukkan alamat IP lokal PC secara manual di aplikasi iOS di bawah Perpustakaan → Tambah Server → Manual.

## Bagian 2: Streaming di Luar Rumah via 5G

Streaming Wi-Fi rumah hanya bekerja ketika kedua perangkat berada di jaringan yang sama. Untuk mengakses perpustakaan dari kafe, hotel, atau di mana saja melalui 5G, Anda perlu menjembatani dua jaringan tersebut. Solusinya adalah [Tailscale](https://tailscale.com) — pengaturan yang sama seperti yang dijelaskan dalam [panduan BiblioFuse Tailscale](/id/blog/tailscale-remote-library-access/).

Tailscale membuat jaringan mesh privat terenkripsi antara perangkat Anda. Setelah diatur, iPhone Anda dapat menjangkau server streaming PC seolah-olah keduanya berada di jaringan lokal yang sama — melalui koneksi internet apa pun, tanpa port forwarding dan tanpa IP statis.

### Mengatur Tailscale untuk Streaming Jarak Jauh

**Di PC Windows Anda:**

1. Unduh Tailscale dari [tailscale.com](https://tailscale.com) atau Microsoft Store.
2. Masuk dengan akun Google, GitHub, Microsoft, atau buat akun Tailscale gratis.
3. Tailscale berjalan di system tray bersama BiblioFuse. Catat alamat IP Tailscale PC Anda (dimulai dengan `100.`).
4. Pastikan BiblioFuse PC Reader berjalan dengan Berbagi Perpustakaan diaktifkan.

**Di iPhone Anda:**

1. Instal Tailscale dari App Store.
2. Masuk dengan akun Tailscale yang sama.
3. Aktifkan toggle VPN Tailscale.
4. Buka BiblioFuse di iPhone. Di Perpustakaan → Tambah Server, masukkan alamat IP Tailscale PC Anda dan port `7341`.
5. Ketuk Hubungkan.

BiblioFuse secara otomatis lebih memilih IP Tailscale saat tersedia, sehingga koneksi tersimpan yang sama bekerja baik di rumah (via LAN) maupun saat bepergian (via Tailscale). Anda tidak memerlukan dua entri koneksi terpisah.

### Yang Dapat Diharapkan di Data Seluler

Tailscale membuat koneksi peer-to-peer bila memungkinkan, menghindari server relay untuk performa yang lebih baik. Pada koneksi 5G yang tipikal, streaming halaman komik bekerja dengan baik. BiblioFuse hanya mengirim halaman saat ini dan melakukan prefetch beberapa halaman berikutnya — tidak melakukan streaming seluruh file CBZ sekaligus, sehingga arsip 200 MB tidak berarti penggunaan data 200 MB. Perkirakan sekitar **1–3 MB per halaman** tergantung resolusi gambar dan pengaturan kompresi server.

Untuk membaca dengan paket data terbatas, gunakan [BiblioFuse](https://bibliofuse.com/id/) untuk mengunduh volume individual melalui Wi-Fi sebelum meninggalkan rumah. Di tampilan Perpustakaan PC di iPhone, ketuk ikon unduh di sebelah volume mana pun untuk menyimpannya secara lokal. Volume tersebut kemudian tersedia secara offline, tanpa Tailscale atau koneksi data.

## PC vs Mac: Apa yang Berbeda?

Jika Anda pernah menggunakan aplikasi pendamping Mac, pengalaman PC hampir identik dari sisi iOS. Beberapa perbedaan khusus Windows:

- **Port:** Server PC menggunakan port **7341** (aplikasi Mac default ke 8686).
- **Penemuan:** Keduanya menggunakan Bonjour/mDNS dengan tipe layanan `_bibliofuse._tcp`, jadi iOS menemukan keduanya secara identik.
- **System Tray:** Aplikasi PC tetap di system tray saat jendela ditutup; server tidak pernah berhenti sampai Anda memilih Keluar.
- **File Pengaturan:** Pengaturan PC disimpan di `%APPDATA%\BiblioFuse\settings.json` jika Anda perlu memeriksanya atau meresetnya secara manual.
- **Satu server aktif sekaligus:** Dalam rilis saat ini, BiblioFuse iOS terhubung ke server Mac atau PC — bukan keduanya sekaligus. Mesin mana pun yang sedang berjalan dan aktif adalah yang pertama ditemukan iOS.

Untuk detail streaming khusus Mac, lihat [Streaming Perpustakaan Komik Mac ke iPhone via Wi-Fi](/id/blog/mac-home-library-streaming-iphone/).

## Pertanyaan yang Sering Diajukan

**Apakah BiblioFuse memiliki aplikasi Windows?**
Ya. BiblioFuse PC Reader adalah aplikasi Windows native yang tersedia di Microsoft Store. Aplikasi ini membaca file CBZ, CBR, EPUB, PDF, dan TXT secara lokal dan melakukan streaming seluruh perpustakaan ke aplikasi iOS melalui jaringan Anda.

**Bagaimana cara melakukan streaming komik dari PC Windows ke iPhone?**
Instal BiblioFuse PC Reader di Windows dan aktifkan Berbagi Perpustakaan di Pengaturan. Instal BiblioFuse di iPhone. Di jaringan Wi-Fi yang sama, buka BiblioFuse di iPhone dan ketuk Perpustakaan — perpustakaan PC Anda muncul secara otomatis melalui penemuan Bonjour. Tidak diperlukan alamat IP atau konfigurasi router.

**Bisakah saya mengakses perpustakaan PC via 5G saat jauh dari rumah?**
Ya, menggunakan Tailscale. Instal Tailscale di PC Windows dan iPhone Anda, masuk dengan akun yang sama, dan aktifkan di kedua perangkat. BiblioFuse secara otomatis mendeteksi koneksi Tailscale dan menggunakannya untuk mengakses PC dari mana saja — Wi-Fi hotel, 5G, koneksi internet apa pun.

**Apakah streaming dari PC menggunakan penyimpanan iPhone?**
Tidak. Halaman diambil dari PC sesuai permintaan; tidak ada yang tersimpan di iPhone selain aplikasi itu sendiri dan data kemajuan membaca Anda. Anda dapat menjelajahi dan membaca perpustakaan 500 GB tanpa menggunakan penyimpanan iPhone untuk file.

**Apakah PC perlu tetap aktif agar streaming berfungsi?**
Ya. Server streaming berjalan di PC; jika PC masuk mode tidur atau server dihentikan, koneksi iOS terputus. Untuk mencegah mode tidur saat streaming, buka Pengaturan Windows → Daya & Mode Tidur dan atur mode tidur ke Tidak Pernah, atau gunakan alat seperti PowerToys untuk menjaga mesin tetap aktif.

**Port apa yang digunakan server streaming PC?**
Port 7341. Jika Anda memiliki firewall yang memblokir lalu lintas di port ini, Anda perlu menambahkan pengecualian untuk BiblioFuse PC Reader.

## Memulai

[BiblioFuse PC Reader](https://bibliofuse.com/id/) tersedia sekarang di Microsoft Store. BiblioFuse untuk iPhone ada di App Store. Instal keduanya, arahkan aplikasi PC ke folder perpustakaan Anda, dan seluruh koleksi Anda akan ada di iPhone saat berikutnya Anda membuka aplikasi — tanpa kabel, tanpa cloud, tanpa menyalin.
