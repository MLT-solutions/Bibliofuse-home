# Aplikasi Pembaca Kavita untuk iPhone, iPad dan Android: Penyelarasan Kemajuan, Penanda Buku dan Anotasi

**Jawapan ringkas:** [BiblioFuse Reader](https://bibliofuse.com/ms/comicreader/) bersambung ke pelayan Kavita melalui API Kavita sendiri, bukan sekadar suapan OPDS-nya. Ini membolehkannya menyelaraskan kemajuan bacaan dua hala, menyelaraskan penanda buku, serta menyelaraskan serlahan dan nota EPUB — termasuk menambah, mengedit dan memadamnya — dengan anotasi yang sama seperti yang anda lihat dalam pembaca web Kavita. Persediaan hanya memerlukan satu imbasan QR.

Panduan ini menerangkan apa yang diselaraskan, apa yang tidak, format fail yang disokong, dan cara menyambung dalam masa kurang seminit.

## Mengapa kemajuan Kavita sering tidak diselaraskan dalam aplikasi pembaca

Kebanyakan pembaca pihak ketiga berhubung dengan Kavita melalui OPDS. OPDS ialah protokol katalog: ia bagus untuk menyenaraikan siri dan menghantar fail, tetapi tidak pernah direka untuk membawa kedudukan bacaan, penanda buku atau nota anda kembali ke pelayan. Dokumentasi Kavita sendiri menyatakan bahawa cara paling lengkap untuk menggunakan pelayan Kavita ialah melalui API-nya.

Jadi, jika anda pernah menghabiskan satu jilid pada telefon dan mendapati ia masih ditanda belum dibaca dalam Kavita, hampir pasti aplikasi itu hanya menggunakan OPDS.

BiblioFuse menggunakan API Kavita secara terus. Siri, jilid, bab, edisi khas, senarai bacaan dan koleksi anda dipaparkan seperti dalam Kavita, dan apa yang anda lakukan dalam pembaca ditulis semula ke pelayan.

## Apa yang diselaraskan antara BiblioFuse dan Kavita

| Ciri | Apa yang BiblioFuse lakukan pada pelayan Kavita |
|---|---|
| Kemajuan bacaan | Diselaraskan dua hala. Buka buku dan ia bersambung dari tempat yang direkodkan Kavita; baca lagi dan Kavita dikemas kini. |
| Kedudukan EPUB yang tepat | Bersambung di tempat dalam bab, bukan sekadar pada bab itu. |
| Penanda buku | Penanda buku halaman untuk komik dan PDF, serta penanda buku dalam teks untuk EPUB, disimpan ke Kavita. |
| Serlahan | Serlahan EPUB diselaraskan melalui API anotasi Kavita, menggunakan warna serlahan pelayan anda sendiri. |
| Nota | Nota EPUB diselaraskan, termasuk nota berformat yang ditulis dalam pembaca web Kavita. |
| Pengurusan anotasi | Tambah, edit dan padam serlahan serta nota daripada pembaca atau senarai Anotasi. Perubahan sampai ke pelayan. |
| Perubahan luar talian | Disimpan pada peranti dahulu, kemudian dihantar apabila pelayan boleh dicapai semula. |

Serlahan dan nota yang anda buat dalam BiblioFuse muncul dalam panel anotasi pembaca web Kavita, dan anotasi yang dibuat di web muncul dalam BiblioFuse apabila anda membuka buku itu lagi.

## Sokongan format fail pada pelayan Kavita

Bukan semua format menyokong setiap jenis penyelarasan. Ini ialah had bagi apa yang Kavita simpan untuk setiap format, bukan tetapan yang boleh anda ubah.

| Format | Membaca | Kemajuan | Penanda buku | Serlahan / nota |
|---|---|---|---|---|
| CBZ / CBR | Distrim, tiada muat turun penuh | Diselaraskan | Penanda buku halaman | Tidak disokong |
| EPUB | Distrim | Diselaraskan (mengikut kedudukan dalam bab) | Diselaraskan | Diselaraskan (API anotasi Kavita) |
| PDF | Ya | Diselaraskan (mengikut halaman) | Penanda buku halaman | Tidak disokong (anotasi Kavita untuk EPUB sahaja) |

Secara praktikal:

- **Komik dan manga (CBZ, CBR)** dibuka sehalaman demi sehalaman. Tiada apa-apa dimuat turun sepenuhnya melainkan anda memilih untuk menyimpan buku bagi bacaan luar talian.
- **EPUB** mendapat set lengkap: kemajuan, penanda buku, serlahan dan nota.
- **PDF** mengekalkan halaman dan penanda buku halamannya selaras. Kavita tiada storan anotasi untuk PDF, jadi serlahan PDF kekal pada peranti anda.

## Cara menambah pelayan Kavita anda dalam masa kurang seminit

Anda memerlukan BiblioFuse Pro untuk sambungan pelayan, alamat pelayan Kavita anda, dan kunci pengesahan Kavita anda (dalam Kavita, buka tetapan pengguna dan cari bahagian kunci API atau klien pihak ketiga).

### Pilihan 1: imbas kod QR (paling pantas)

1. Pada komputer, buka [penjana QR BiblioFuse untuk Kavita & Komga](https://bibliofuse.com/ms/tools/qr-generator/).
2. Pilih **Kavita**, masukkan alamat pelayan anda dan tampal kunci pengesahan. Kod QR dibina dalam pelayar anda; tiada apa-apa dihantar ke mana-mana.
3. Pada telefon atau tablet anda, buka **BiblioFuse > Tetapan > OPDS** dan ketik **ikon imbas QR**.
4. Imbas kod itu. Pelayan ditambah dengan alamat dan kunci yang sudah diisi.

Anggap kod QR itu seperti kata laluan. Ia mengandungi kunci pengesahan anda, jadi jangan siarkan tangkapan skrinnya.

### Pilihan 2: taip sendiri

Buka **BiblioFuse > Tetapan > OPDS > Tambah pelayan**, pilih Kavita, dan masukkan alamat (contohnya `http://192.168.1.20:5000`) serta kunci pengesahan secara manual.

Setelah pelayan ditambah, buka panel Lokasi di bahagian atas Pustaka dan pilih pelayan Kavita anda. [Panduan persediaan](https://bibliofuse.com/ms/guide/) penuh mempunyai tangkapan skrin bagi setiap langkah.

## Mengurus serlahan dan nota

Pilih teks dalam EPUB Kavita untuk menyerlahkannya atau menambah nota. Pada buku Kavita, pemilih warna memaparkan lima warna serlahan pelayan anda, jadi serlahan kelihatan sama dalam BiblioFuse dan dalam pembaca web Kavita.

- **Tambah:** pilih teks, kemudian pilih Serlah atau Nota.
- **Edit:** pilih di dalam serlahan sedia ada dan pilih Edit Anotasi, atau edit daripada senarai Anotasi. Anda boleh menukar warna dan nota.
- **Padam:** buang daripada pembaca atau senarai Anotasi. Pemadaman dihantar ke Kavita.

Senarai Anotasi memaparkan setiap serlahan dan nota dalam buku semasa, dengan carian, dan terus melompat ke petikan berkenaan apabila anda mengetik salah satunya.

## Peranti yang disokong

- **iPhone, iPad dan iPhone Duo:** penyelarasan kemajuan, penanda buku dan anotasi, dalam BiblioFuse 2.1.15.
- **Apple Vision Pro:** pustaka Kavita, kemajuan, penanda buku dan anotasi dalam aplikasi visionOS asli, dalam BiblioFuse 2.1.15.
- **Telefon dan tablet Android:** penyelarasan kemajuan, penanda buku dan anotasi, dalam BiblioFuse 2.0.16.
- **Apple TV dan Android TV:** membaca daripada hos BiblioFuse pada rangkaian anda sendiri dan tidak bersambung ke Kavita.

[Matriks ciri](https://bibliofuse.com/ms/features/) menyenaraikan apa yang disokong oleh setiap platform dan sejak versi mana.

## Tiada pelayan Kavita? BiblioFuse ada hos sendiri

Kavita ialah pelayan yang sangat baik, tetapi anda tidak semestinya memerlukannya. BiblioFuse menyertakan hos percuma sendiri untuk Mac, PC Windows, Docker dan NAS Synology. Halakan ia ke folder yang sudah anda simpan dan strim ke BiblioFuse pada peranti lain melalui Wi-Fi rumah, atau dari jauh dengan Tailscale.

Perbezaan yang wajar diketahui: pada hos BiblioFuse, kemajuan bacaan, penanda buku, serlahan dan nota diselaraskan untuk **setiap** format yang disokong — CBZ, CBR, PDF, EPUB dan TXT — kerana hos menyimpan anotasi itu sendiri dan tidak bergantung pada ciri pelayan bagi setiap format.

| | Pelayan Kavita | Hos BiblioFuse |
|---|---|---|
| Berjalan pada | Docker, Windows, Linux, macOS | Mac, PC Windows, Docker, Synology |
| Penyelarasan kemajuan | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Penyelarasan penanda buku | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Penyelarasan serlahan / nota | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Pembaca web | Ya | Ya (hos NAS dan Docker) |
| Pelayan pustaka berbilang pengguna | Ya | Tidak — hos pustaka peribadi |

Anda boleh menggunakan kedua-duanya. Ramai pembaca menyimpan manga di Kavita dan menambah hos BiblioFuse untuk folder PDF atau fail teks. Lihat [BiblioFuse Reader](https://bibliofuse.com/ms/comicreader/) untuk muat turun hos dan pemilih persediaan.

## Komga dan pelayan OPDS lain

BiblioFuse juga bersambung secara asli ke Komga, dengan kemajuan bacaan diselaraskan dua hala dan kedudukan EPUB yang tepat. Penyelarasan penanda buku dan anotasi hanya untuk Kavita, kerana Komga tiada API untuknya. Mana-mana pelayan OPDS 1.x lain berfungsi sebagai katalog, dengan penstriman sehalaman demi sehalaman jika pelayan menyokong OPDS-PSE.

Jika anda masih menimbang cara menyusun koleksi sebelum meletakkannya pada pelayan, [panduan pengurusan pustaka komik digital](https://bibliofuse.com/ms/blog/digital-comic-library-management-guide/) dan [perbandingan CBZ, CBR dan EPUB](https://bibliofuse.com/ms/blog/cbz-vs-cbr-vs-epub-formats-explained/) ialah titik permulaan yang baik.

## FAQ

**Adakah BiblioFuse menyelaraskan kemajuan bacaan dengan Kavita?**
Ya, dua hala. BiblioFuse menggunakan API Kavita, jadi buku bersambung dari tempat yang direkodkan Kavita dan kemajuan anda ditulis semula semasa anda membaca. Ini berfungsi untuk CBZ, CBR, EPUB dan PDF.

**Bolehkah saya menyelaraskan serlahan dan nota dengan Kavita pada iPhone atau iPad?**
Ya, untuk buku EPUB. Serlahan dan nota yang dibuat dalam BiblioFuse disimpan melalui API anotasi Kavita dan muncul dalam pembaca web Kavita. Anda boleh menambah, mengedit dan memadamnya dari mana-mana pihak.

**Mengapa serlahan tidak disokong untuk CBZ, CBR atau PDF pada Kavita?**
Kavita hanya menyimpan anotasi untuk EPUB. Komik dan PDF masih menyelaraskan kemajuan bacaan dan penanda buku halaman. Jika anda memerlukan serlahan dan nota pada PDF atau komik turut diselaraskan, hos BiblioFuse menyokongnya untuk setiap format.

**Perlukah saya memuat turun keseluruhan komik untuk membacanya daripada Kavita?**
Tidak. CBZ dan CBR distrim sehalaman demi sehalaman. Anda boleh memilih untuk menyimpan buku bagi bacaan luar talian.

**Apakah cara terpantas untuk menambah pelayan Kavita ke BiblioFuse?**
Cipta kod QR dengan penjana QR BiblioFuse dalam pelayar anda, kemudian buka Tetapan > OPDS dalam aplikasi dan ketik ikon imbas QR. Alamat pelayan dan kunci pengesahan diisi untuk anda.

**Adakah sokongan Kavita percuma dalam BiblioFuse?**
Membaca fail tempatan adalah percuma. Sambungan ke pelayan Kavita, Komga dan OPDS ialah sebahagian daripada BiblioFuse Pro, yang tersedia sebagai langganan bulanan atau tahunan, atau pembelian seumur hidup sekali sahaja.

**Adakah BiblioFuse berfungsi dengan Kavita melalui internet?**
Ya. Jika pelayan Kavita anda boleh dicapai dari luar rumah — melalui proksi songsang, VPN atau Tailscale — masukkan alamat itu dan BiblioFuse bersambung dengan cara yang sama.

**Bolehkah saya menggunakan Kavita dan hos BiblioFuse pada masa yang sama?**
Ya. Kedua-duanya muncul dalam panel Lokasi, dan masing-masing menyimpan kemajuan, penanda buku dan anotasinya sendiri.
