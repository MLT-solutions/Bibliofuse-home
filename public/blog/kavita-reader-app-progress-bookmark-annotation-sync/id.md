# Aplikasi Pembaca Kavita untuk iPhone, iPad, dan Android: Sinkronisasi Progres, Bookmark, dan Anotasi

**Jawaban singkat:** [BiblioFuse Reader](https://bibliofuse.com/id/comicreader/) terhubung ke server Kavita melalui API Kavita sendiri, bukan hanya feed OPDS-nya. Dengan begitu, aplikasi ini dapat menyinkronkan progres baca dua arah, menyinkronkan bookmark, serta menyinkronkan sorotan dan catatan EPUB — termasuk menambah, mengedit, dan menghapusnya — dengan anotasi yang sama seperti yang Anda lihat di pembaca web Kavita. Penyiapannya cukup dengan satu pindaian QR.

Panduan ini membahas apa yang tersinkron, apa yang tidak, format file apa saja yang didukung, dan cara terhubung dalam waktu kurang dari satu menit.

## Mengapa progres Kavita sering tidak tersinkron di aplikasi pembaca

Sebagian besar pembaca pihak ketiga berkomunikasi dengan Kavita lewat OPDS. OPDS adalah protokol katalog: bagus untuk menampilkan daftar seri dan menyerahkan file, tetapi tidak pernah dirancang untuk mengirim posisi baca, bookmark, atau catatan Anda kembali ke server. Dokumentasi Kavita sendiri menyebutkan bahwa cara paling lengkap untuk menggunakan server Kavita adalah melalui API-nya.

Jadi, jika Anda pernah menamatkan satu volume di ponsel lalu mendapati volume itu masih bertanda belum dibaca di Kavita, hampir pasti aplikasinya hanya memakai OPDS.

BiblioFuse menggunakan API Kavita secara langsung. Seri, volume, bab, edisi spesial, daftar bacaan, dan koleksi Anda tampil seperti di Kavita, dan apa yang Anda lakukan di pembaca ditulis kembali ke server.

## Apa saja yang tersinkron antara BiblioFuse dan Kavita

| Fitur | Yang dilakukan BiblioFuse di server Kavita |
|---|---|
| Progres baca | Tersinkron dua arah. Buka buku dan bacaan berlanjut dari tempat yang dicatat Kavita; baca lebih jauh dan Kavita diperbarui. |
| Posisi EPUB yang tepat | Berlanjut di tempat di dalam bab, bukan hanya di babnya. |
| Bookmark | Bookmark halaman untuk komik dan PDF, serta bookmark dalam buku untuk EPUB, disimpan ke Kavita. |
| Sorotan | Sorotan EPUB tersinkron lewat API anotasi Kavita, memakai warna sorotan server Anda sendiri. |
| Catatan | Catatan EPUB tersinkron, termasuk catatan berformat yang ditulis di pembaca web Kavita. |
| Pengelolaan anotasi | Tambah, edit, dan hapus sorotan serta catatan dari pembaca atau dari daftar Anotasi. Perubahan sampai ke server. |
| Perubahan saat offline | Disimpan dulu di perangkat, lalu dikirim saat server kembali dapat dijangkau. |

Sorotan dan catatan yang Anda buat di BiblioFuse muncul di panel anotasi pembaca web Kavita, dan anotasi yang dibuat di web muncul di BiblioFuse saat Anda membuka buku itu lagi.

## Dukungan format file di server Kavita

Tidak semua format mendukung semua jenis sinkronisasi. Ini adalah batasan dari apa yang disimpan Kavita untuk tiap format, bukan pengaturan yang bisa Anda ubah.

| Format | Membaca | Progres | Bookmark | Sorotan / catatan |
|---|---|---|---|---|
| CBZ / CBR | Streaming, tanpa unduhan penuh | Tersinkron | Bookmark halaman | Tidak didukung |
| EPUB | Streaming | Tersinkron (berdasarkan posisi dalam bab) | Tersinkron | Tersinkron (API anotasi Kavita) |
| PDF | Ya | Tersinkron (per halaman) | Bookmark halaman | Tidak didukung (anotasi Kavita hanya untuk EPUB) |

Dalam praktiknya:

- **Komik dan manga (CBZ, CBR)** terbuka halaman demi halaman. Tidak ada yang diunduh secara penuh kecuali Anda memilih menyimpan buku untuk dibaca offline.
- **EPUB** mendapat paket lengkap: progres, bookmark, sorotan, dan catatan.
- **PDF** menjaga halaman dan bookmark halamannya tetap tersinkron. Kavita tidak memiliki penyimpanan anotasi untuk PDF, sehingga sorotan PDF tetap berada di perangkat Anda.

## Cara menambahkan server Kavita dalam waktu kurang dari satu menit

Anda memerlukan BiblioFuse Pro untuk koneksi server, alamat server Kavita, dan kunci autentikasi Kavita Anda (di Kavita, buka pengaturan pengguna dan cari bagian kunci API atau klien pihak ketiga).

### Opsi 1: pindai kode QR (paling cepat)

1. Di komputer, buka [generator QR BiblioFuse untuk Kavita & Komga](https://bibliofuse.com/id/tools/qr-generator/).
2. Pilih **Kavita**, masukkan alamat server Anda, dan tempel kunci autentikasi. Kode QR dibuat di browser Anda; tidak ada yang dikirim ke mana pun.
3. Di ponsel atau tablet, buka **BiblioFuse > Pengaturan > OPDS** dan ketuk **ikon pindai QR**.
4. Pindai kodenya. Server ditambahkan dengan alamat dan kunci yang sudah terisi.

Perlakukan kode QR seperti kata sandi. Kode itu berisi kunci autentikasi Anda, jadi jangan unggah tangkapan layarnya.

### Opsi 2: ketik sendiri

Buka **BiblioFuse > Pengaturan > OPDS > Tambah server**, pilih Kavita, lalu masukkan alamat (misalnya `http://192.168.1.20:5000`) dan kunci autentikasi secara manual.

Setelah server ditambahkan, buka panel Lokasi di bagian atas Perpustakaan dan pilih server Kavita Anda. [Panduan penyiapan](https://bibliofuse.com/id/guide/) lengkap menyediakan tangkapan layar untuk setiap langkah.

## Mengelola sorotan dan catatan

Pilih teks di EPUB Kavita untuk menyorotnya atau menambahkan catatan. Pada buku Kavita, pemilih warna menampilkan lima warna sorotan server Anda, sehingga sorotan terlihat sama di BiblioFuse dan di pembaca web Kavita.

- **Tambah:** pilih teks, lalu pilih Sorot atau Catatan.
- **Edit:** pilih di dalam sorotan yang sudah ada dan pilih Edit Anotasi, atau edit dari daftar Anotasi. Anda dapat mengubah warna dan catatannya.
- **Hapus:** hapus dari pembaca atau dari daftar Anotasi. Penghapusan dikirim ke Kavita.

Daftar Anotasi menampilkan setiap sorotan dan catatan dalam buku yang sedang dibuka, dilengkapi pencarian, dan langsung melompat ke bagian terkait saat Anda mengetuk salah satunya.

## Perangkat yang didukung

- **iPhone, iPad, dan iPhone Duo:** sinkronisasi progres, bookmark, dan anotasi, di BiblioFuse 2.1.15.
- **Apple Vision Pro:** perpustakaan Kavita, progres, bookmark, dan anotasi di aplikasi visionOS native, di BiblioFuse 2.1.15.
- **Ponsel dan tablet Android:** sinkronisasi progres, bookmark, dan anotasi, di BiblioFuse 2.0.16.
- **Apple TV dan Android TV:** membaca dari host BiblioFuse di jaringan Anda sendiri dan tidak terhubung ke Kavita.

[Matriks fitur](https://bibliofuse.com/id/features/) mencantumkan apa yang didukung tiap platform dan sejak versi berapa.

## Tidak punya server Kavita? BiblioFuse punya host sendiri

Kavita adalah server yang sangat bagus, tetapi Anda tidak wajib memilikinya. BiblioFuse menyertakan host gratisnya sendiri untuk Mac, PC Windows, Docker, dan NAS Synology. Arahkan ke folder yang sudah Anda simpan dan streaming ke BiblioFuse di perangkat lain lewat Wi-Fi rumah, atau dari jarak jauh dengan Tailscale.

Perbedaan yang perlu diketahui: di host BiblioFuse, progres baca, bookmark, sorotan, dan catatan tersinkron untuk **semua** format yang didukung — CBZ, CBR, PDF, EPUB, dan TXT — karena host menyimpan anotasinya sendiri, bukan bergantung pada fitur server per format.

| | Server Kavita | Host BiblioFuse |
|---|---|---|
| Berjalan di | Docker, Windows, Linux, macOS | Mac, PC Windows, Docker, Synology |
| Sinkronisasi progres | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sinkronisasi bookmark | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sinkronisasi sorotan / catatan | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Pembaca web | Ya | Ya (host NAS dan Docker) |
| Server perpustakaan multi-pengguna | Ya | Tidak — host perpustakaan pribadi |

Anda bisa memakai keduanya. Banyak pembaca menyimpan manga di Kavita dan menambahkan host BiblioFuse untuk folder berisi PDF atau file teks. Lihat [BiblioFuse Reader](https://bibliofuse.com/id/comicreader/) untuk unduhan host dan pemilih penyiapan.

## Komga dan server OPDS lainnya

BiblioFuse juga terhubung secara native ke Komga, dengan progres baca tersinkron dua arah dan posisi EPUB yang tepat. Sinkronisasi bookmark dan anotasi hanya untuk Kavita, karena Komga tidak memiliki API untuk itu. Server OPDS 1.x lainnya berfungsi sebagai katalog, dengan streaming halaman demi halaman jika server mendukung OPDS-PSE.

Jika Anda masih menimbang cara menata koleksi sebelum menaruhnya di server, [panduan pengelolaan perpustakaan komik digital](https://bibliofuse.com/id/blog/digital-comic-library-management-guide/) dan [perbandingan CBZ, CBR, dan EPUB](https://bibliofuse.com/id/blog/cbz-vs-cbr-vs-epub-formats-explained/) adalah titik awal yang baik.

## FAQ

**Apakah BiblioFuse menyinkronkan progres baca dengan Kavita?**
Ya, dua arah. BiblioFuse menggunakan API Kavita, sehingga buku berlanjut dari tempat yang dicatat Kavita dan progres Anda ditulis kembali selagi membaca. Ini berlaku untuk CBZ, CBR, EPUB, dan PDF.

**Bisakah saya menyinkronkan sorotan dan catatan dengan Kavita di iPhone atau iPad?**
Ya, untuk buku EPUB. Sorotan dan catatan yang dibuat di BiblioFuse disimpan lewat API anotasi Kavita dan muncul di pembaca web Kavita. Anda dapat menambah, mengedit, dan menghapusnya dari sisi mana pun.

**Mengapa sorotan tidak didukung untuk CBZ, CBR, atau PDF di Kavita?**
Kavita hanya menyimpan anotasi untuk EPUB. Komik dan PDF tetap menyinkronkan progres baca dan bookmark halaman. Jika Anda perlu sorotan dan catatan pada PDF atau komik ikut tersinkron, host BiblioFuse mendukungnya untuk semua format.

**Apakah saya harus mengunduh seluruh komik untuk membacanya dari Kavita?**
Tidak. CBZ dan CBR di-streaming halaman demi halaman. Anda dapat memilih menyimpan buku untuk dibaca offline.

**Apa cara tercepat untuk menambahkan server Kavita ke BiblioFuse?**
Buat kode QR dengan generator QR BiblioFuse di browser, lalu buka Pengaturan > OPDS di aplikasi dan ketuk ikon pindai QR. Alamat server dan kunci autentikasi terisi otomatis.

**Apakah dukungan Kavita gratis di BiblioFuse?**
Membaca file lokal gratis. Koneksi ke server Kavita, Komga, dan OPDS termasuk dalam BiblioFuse Pro, yang tersedia sebagai langganan bulanan atau tahunan, atau pembelian seumur hidup sekali bayar.

**Apakah BiblioFuse bisa dipakai dengan Kavita lewat internet?**
Ya. Jika server Kavita Anda dapat dijangkau dari luar rumah — melalui reverse proxy, VPN, atau Tailscale — masukkan alamat itu dan BiblioFuse terhubung dengan cara yang sama.

**Bisakah saya memakai Kavita dan host BiblioFuse sekaligus?**
Ya. Keduanya muncul di panel Lokasi, dan masing-masing menyimpan progres, bookmark, dan anotasinya sendiri.
