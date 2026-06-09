# Cara Memindahkan Komik ke iPhone Tanpa iTunes atau Kabel

BiblioFuse menyertakan fitur Wi-Fi Transfer bawaan yang memungkinkanmu menyeret file CBZ, CBR, EPUB, PDF, dan ZIP dari browser mana pun di Mac atau PC langsung ke perpustakaan iPhone — tanpa kabel, tanpa iTunes, dan tanpa unggah ke cloud. Kecepatan transfer mencapai 15–40 MB/s di jaringan Wi-Fi rumahan biasa dengan iOS 17 atau lebih baru, memindahkan volume manga 150 MB dalam sekitar lima detik.

Koleksi manga kamu tersimpan di Mac. Dua ratus file CBZ, tersusun rapi per seri, masing-masing volume berukuran 80 hingga 200 MB. iPhone adalah tempat kamu benar-benar membaca — di kasur, di kereta, saat makan siang. Memindahkan file-file itu ke sana adalah masalah yang jarang dibahas.

Email dibatasi 25 MB. AirDrop bisa dipakai, tapi kamu harus mengirim file satu per satu dan menyetujui setiap transfer. iCloud Drive bisa menyinkronkan, tapi mengunggah 20 GB komik terlebih dahulu lalu menunggu unduhan selesai jelas tidak praktis. File sharing lewat iTunes masih ada, tapi butuh kabel dan tingkat kesabaran yang sudah lama ditinggalkan kebanyakan orang.

[BiblioFuse](/id/) mengatasi ini dengan Wi-Fi Transfer — server web lokal bawaan yang memungkinkan kamu menyeret seluruh koleksi komik dari browser mana pun di Mac atau PC langsung ke iPhone, tanpa kabel, tanpa perlu menginstal apa pun di komputer, dan tanpa unggahan cloud. Panduan ini akan membahas seluruh prosesnya.

## Cara Kerja Wi-Fi Transfer

Wi-Fi Transfer menjalankan server HTTP kecil di iPhone yang hanya terlihat di jaringan lokal kamu. Saat kamu membuka alamat yang diberikan (seperti `http://192.168.1.x:8080`) di browser mana pun, kamu akan melihat antarmuka upload dengan drag-and-drop. Seret file atau folder dari desktop ke jendela browser, dan [BiblioFuse](/id/) menerimanya langsung lewat Wi-Fi.

Kata kuncinya adalah *langsung*. File berpindah dari komputer ke iPhone tanpa menyentuh layanan cloud mana pun. Tidak ada yang diunggah ke server pihak ketiga. Tidak perlu masuk ke akun apa pun. Satu-satunya syarat adalah kedua perangkat berada di jaringan Wi-Fi yang sama.

Kecepatan transfer ditentukan oleh jaringan lokal, bukan koneksi internet. Pada router rumah biasa, kamu bisa mengharapkan 15–40 MB/s. Volume manga 150 MB butuh sekitar lima detik.

## Langkah 1 — Instal BiblioFuse

Jika belum, instal [BiblioFuse](/id/) dari App Store. Gratis diunduh tanpa perlu akun atau masuk ke aplikasi.

Setelah terinstal, aplikasi ini membuat dua folder di aplikasi File iOS:
- **iCloud Drive → BiblioFuse** — penyimpanan tersinkron, dapat diakses di semua perangkat Apple kamu
- **Di iPhone Saya → BiblioFuse** — penyimpanan lokal saja, lebih cepat tanpa penundaan sinkronisasi

File yang ditransfer lewat Wi-Fi Transfer secara default masuk ke folder penyimpanan lokal.

## Langkah 2 — Aktifkan Wi-Fi Transfer di iPhone

1. Buka BiblioFuse
2. Ketuk **Pengaturan** (pojok kanan bawah layar perpustakaan)
3. Di bawah **Wi-Fi Import**, aktifkan tombol
4. URL lokal akan muncul: `http://192.168.x.x:8080`

Biarkan BiblioFuse tetap terbuka dan layar menyala selama transfer — iOS akan menangguhkan server jika aplikasi masuk ke latar belakang.

## Langkah 3 — Buka URL di Komputer

Di Mac atau PC, buka browser apa pun — Safari, Chrome, Firefox, Edge — dan ketik URL yang ditampilkan di BiblioFuse. Kamu akan melihat halaman sederhana dengan area drop.

Tidak perlu menginstal apa pun. Tidak ada ekstensi, tidak ada aplikasi, tidak ada akun. Halaman disajikan langsung dari iPhone kamu.

## Langkah 4 — Seret Komik Kamu

Seret file CBZ, CBR, ZIP, RAR, atau EPUB dari Finder (atau Windows Explorer) ke area drop di browser. Kamu bisa menyeret:

- Satu file
- Beberapa file sekaligus
- Seluruh folder berisi volume

Saat kamu menyeret folder, BiblioFuse menerima semua file di dalamnya dengan mempertahankan struktur folder. Jika kamu menyeret folder bernama `Berserk` yang berisi 40 volume, semuanya tiba terorganisir di bawah nama folder itu di perpustakaanmu.

Indikator kemajuan menampilkan setiap file yang sedang diunggah. Batch besar — 10 GB komik — bisa berjalan tanpa pengawasan. Kamu tidak perlu mengklik apa pun atau menyetujui file satu per satu.

## Langkah 5 — Matikan Wi-Fi Transfer

Setelah transfer selesai, kembali ke BiblioFuse dan matikan Wi-Fi Transfer. Ini langkah keamanan — server hanya dapat diakses di jaringan lokal kamu, tapi mematikannya setelah selesai memastikan tidak ada orang lain di jaringan yang bisa menjelajahinya.

File yang ditransfer langsung muncul di perpustakaan secara otomatis. Ketuk sampul mana pun untuk mulai membaca.

## Referensi Kecepatan Transfer

Angka-angka ini bersifat perkiraan, berdasarkan jaringan rumah 802.11ac (Wi-Fi 5) modern:

| Ukuran file | Waktu transfer |
|-------------|----------------|
| 50 MB (volume manga kecil) | ~2 detik |
| 150 MB (volume manga tipikal) | ~5 detik |
| 500 MB (CBZ besar) | ~15 detik |
| 10 GB (seri lengkap) | ~5 menit |

Jaringan 802.11n yang lebih lama atau sistem mesh dengan kemacetan akan lebih lambat. Dekatkan iPhone ke router jika kamu mentransfer batch besar.

## Cara Lain Memasukkan Komik ke iPhone

Wi-Fi Transfer adalah metode tercepat untuk koleksi besar, tapi bukan satu-satunya.

**Share sheet dari aplikasi File** — Jika komik sudah ada di iCloud Drive atau di drive USB yang terhubung ke Mac, tekan lama di aplikasi File lalu ketuk Bagikan → BiblioFuse. Terbaik untuk satu atau dua file.

**Sinkronisasi iCloud Drive** — Salin file ke `iCloud Drive → BiblioFuse` di Mac. File akan sinkron otomatis ke iPhone. Progres baca juga tersinkron dengan cara ini — berguna jika kamu membaca di beberapa perangkat. Kekurangannya: perlu mengunggah ke iCloud dulu, yang bisa lambat untuk koleksi besar.

**AirDrop** — Cocok untuk file individual. Ketuk ikon AirDrop, pilih iPhone kamu, dan BiblioFuse akan menawarkan untuk membuka file. Tidak praktis untuk seri dengan banyak volume.

**Tailscale / akses jarak jauh** — Jika kamu tidak berada di jaringan yang sama dengan Mac, kamu bisa menggunakan Tailscale untuk membuat jaringan virtual privat antar perangkat dan tetap menggunakan Wi-Fi Transfer atau sinkronisasi iCloud dari jarak jauh. Ini pengaturan tingkat lanjut, tapi membuka akses ke koleksi rumah dari mana saja.

## Pemecahan Masalah

**Tidak bisa mengakses URL dari browser.**
Pastikan kedua perangkat berada di jaringan Wi-Fi yang sama. Beberapa router mengisolasi perangkat satu sama lain (disebut "isolasi klien" atau "isolasi AP") — periksa pengaturan router jika perangkat tidak bisa saling melihat.

**File sudah ditransfer tapi tidak muncul di perpustakaan.**
Tarik ke bawah di perpustakaan untuk menyegarkan. Periksa folder **Di iPhone Saya → BiblioFuse** di aplikasi File untuk memastikan file sudah tiba. File yang berada di luar folder BiblioFuse tidak akan diindeks.

**Transfer berhenti di tengah jalan.**
Layar kemungkinan terkunci dan iOS menangguhkan aplikasi. Kembali ke BiblioFuse, konfirmasi Wi-Fi Transfer masih aktif, dan mulai ulang upload di browser. File yang sudah terunggah aman.

**File CBR mengatakan "format tidak didukung".**
Beberapa arsip CBR yang sangat lama menggunakan RAR5, yang tidak didukung secara universal. Kemas ulang sebagai CBZ: ekstrak RAR, pilih semua gambar, kompres ke ZIP, ganti nama `.zip` menjadi `.cbz`. Tab Tools BiblioFuse juga bisa membantu konversi format langsung di perangkat.

## Apa yang Dilakukan Selanjutnya

Setelah perpustakaanmu ada di iPhone, [BiblioFuse](/id/) menyediakan beberapa alat untuk membuatnya lebih mudah dikelola. Tab Tools memungkinkan kamu mengompres file CBZ di perangkat — berguna jika volume 200 MB bisa diperkecil menjadi 40 MB tanpa kehilangan kualitas yang terlihat. Fitur Mac Home Library melangkah lebih jauh: alih-alih mentransfer file ke iPhone sama sekali, fitur ini memungkinkan kamu melakukan streaming seluruh koleksi komik Mac lewat Wi-Fi secara real time, sehingga tidak ada yang perlu disalin.

Itulah gambaran lengkapnya — transfer Wi-Fi yang butuh hitungan menit, bukan satu jam seperti sinkronisasi iTunes dulu.

## Pertanyaan yang Sering Diajukan

**Bagaimana cara memindahkan komik ke iPhone secara nirkabel tanpa iTunes?**
Di BiblioFuse, buka Pengaturan → Impor Wi-Fi dan aktifkan. URL lokal akan muncul — buka di browser mana pun di Mac atau PC (dalam jaringan Wi-Fi yang sama) lalu seret file CBZ, CBR, atau EPUB ke jendela browser. File masuk ke perpustakaanmu secara otomatis.

**Seberapa cepat Wi-Fi Transfer di BiblioFuse?**
Di jaringan rumahan 802.11ac (Wi-Fi 5) modern, kecepatan sekitar 15–40 MB/s. Volume manga 150 MB ditransfer dalam sekitar lima detik; seri 10 GB butuh sekitar lima menit. Kecepatan tergantung router dan kemacetan jaringanmu.

**Bisakah mentransfer folder seri lengkap sekaligus?**
Bisa. Ketika kamu menyeret folder ke zona unggah browser, BiblioFuse menerima semua file di dalamnya dan mempertahankan nama folder di perpustakaanmu. Folder berisi 40 bab datang terorganisir di bawah nama folder itu — tidak perlu langkah ekstra.

**Apakah Wi-Fi Transfer bekerja di luar jaringan rumah?**
Wi-Fi Transfer standar memerlukan kedua perangkat dalam jaringan lokal yang sama. Untuk akses jarak jauh, Tailscale membuat jaringan terenkripsi privat antara Mac dan iPhone sehingga Wi-Fi Transfer berfungsi di mana saja dengan koneksi internet.

**Apa yang terjadi jika transfer berhenti sebelum selesai?**
Jika layar terkunci dan iOS menangguhkan BiblioFuse, transfer dijeda. File yang sudah diunggah aman. Buka kembali BiblioFuse, pastikan Wi-Fi Transfer masih aktif, dan mulai ulang unggahan — sebagian besar browser akan mencoba ulang file yang belum selesai.
