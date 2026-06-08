# Cara Mencadangkan Perpustakaan Komik di Mac: Pilihan Hard Drive Eksternal, NAS, dan Cloud

BiblioFuse menyimpan komik dan e-book Anda — EPUB, CBZ, CBR, PDF, ZIP, RAR, dan TXT — di iPhone, iPad, dan Mac, serta melakukan streaming perpustakaan Mac langsung ke iPhone melalui Wi-Fi tanpa menyalin file. Untuk mencadangkan perpustakaan komik Mac Anda, Anda bisa menggunakan Time Machine dengan hard drive eksternal atau NAS, menyalin file ke penyimpanan cloud seperti iCloud Drive atau Dropbox, atau menggunakan alat pencadangan apa pun yang mencerminkan folder standar. Progres membaca BiblioFuse disinkronkan secara otomatis melalui iCloud sehingga posisi Anda di setiap buku selalu tersimpan.

## Mengapa Mencadangkan Perpustakaan Komik Sangat Penting

Bayangkan skenario ini: Anda telah menghabiskan lima tahun mengunduh pembelian legal, memindai koleksi fisik, dan mengurasi ratusan volume dalam CBZ, CBR, EPUB, dan PDF. Suatu Selasa pagi, hard drive internal Mac Anda rusak. Tanpa peringatan. Tanpa kesempatan kedua. Semuanya hilang.

Atau mungkin Anda sedang upgrade ke Mac baru dan tidak yakin apakah Migration Assistant akan memindahkan perpustakaan Anda dengan benar, atau apakah Anda harus mencari file yang tersebar di folder-folder yang samar-samar Anda ingat pernah dibuat pada 2021.

Bagaimanapun, strategi pencadangan yang tepat bukan pilihan ketika perpustakaan Anda layak dilindungi.

## Mengapa Perpustakaan Komik Lebih Sulit Digantikan dari yang Anda Kira

Musik dan foto memiliki layanan streaming dan sinkronisasi cloud sebagai jaring pengaman. Komik dan manga berbeda. File bebas DRM — rip CBZ yang Anda beli, novel grafis EPUB dari Humble Bundle, doujinshi yang susah payah Anda temukan — tidak dapat digantikan begitu hilang. Penerbit tidak mempertahankan perpustakaan unduhan selamanya. Arsip terjemahan fan menghilang. Scan fisik yang Anda buat sendiri tidak bisa di-scan ulang.

Koleksi komik digital yang serius dapat dengan mudah mencapai 50 GB, 200 GB, atau lebih. Itu lebih besar dari kebanyakan perpustakaan foto dan jauh lebih besar dari perpustakaan musik pada umumnya. Ukuran file yang besar membuat penghapusan tidak sengaja lebih berbahaya: Anda tidak akan menyadari satu CBZ yang hilang di folder berisi 800 volume sampai Anda mencarinya tiga bulan kemudian.

## Cara Mencadangkan Perpustakaan Komik di Mac

Metode-metode berikut berfungsi secara independen atau bersama-sama. Menggunakan dua metode — lokal dan cloud — memberikan redundansi.

### Metode 1: Time Machine (Direkomendasikan untuk Sebagian Besar Pengguna)

Time Machine adalah cara termudah untuk mencadangkan seluruh Mac Anda, termasuk perpustakaan komik.

1. Hubungkan HDD eksternal, SSD, atau NAS ke Mac Anda.
2. Buka **Pengaturan Sistem → Umum → Time Machine**.
3. Klik **Tambah Disk Cadangan** dan pilih hard drive eksternal atau NAS Anda.
4. Time Machine mencadangkan secara otomatis setiap jam dan menyimpan snapshot per jam selama 24 jam, snapshot harian selama sebulan, dan snapshot mingguan hingga disk penuh.

Time Machine bersifat terversi, sehingga jika Anda tidak sengaja menghapus volume atau menimpa folder, Anda bisa memulihkan versi tepat dari tanggal saat semuanya masih baik. Tidak diperlukan konfigurasi selain pengaturan awal.

### Metode 2: Salin Manual ke Hard Drive Eksternal

Bagi pembaca yang menginginkan salinan perpustakaan yang portabel dan mandiri, salin manual ke hard drive eksternal cepat dan tidak memerlukan perangkat lunak.

1. Buka **Finder** dan navigasi ke folder perpustakaan BiblioFuse Anda. Lokasi default adalah `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, tetapi Anda mungkin telah menunjuknya ke folder kustom.
2. Pilih folder dan seret ke hard drive eksternal Anda.
3. Ulangi ini setiap kali Anda menambahkan volume baru dalam jumlah besar.

Metode ini paling baik dikombinasikan dengan Time Machine daripada digunakan sendiri. Salinan manual memberi Anda disk portabel yang bisa dibawa ke luar lokasi; Time Machine memberi Anda riwayat terversi.

### Metode 3: Penyimpanan Cloud (iCloud Drive, Dropbox, Google Drive)

Penyimpanan cloud ideal jika Anda ingin perpustakaan dapat diakses di beberapa Mac atau sebagai cadangan di luar lokasi.

**iCloud Drive:**
1. Pindahkan folder perpustakaan komik Anda ke `~/Library/Mobile Documents/com~apple~CloudDocs/` (folder iCloud Drive Anda di Finder).
2. File disinkronkan secara otomatis ke server Apple dan ke Mac lain yang masuk dengan Apple ID yang sama.
3. Aktifkan **Optimalkan Penyimpanan Mac** di pengaturan iCloud hanya jika Mac Anda memiliki ruang disk terbatas — jika tidak, pertahankan salinan lokal penuh.

**Dropbox atau Google Drive:**
1. Pindahkan folder perpustakaan ke folder Dropbox atau Google Drive di Mac Anda.
2. Klien desktop menyinkronkan perubahan secara otomatis.
3. Perlu diketahui bahwa perpustakaan besar (100 GB+) akan mengonsumsi sebagian besar kuota penyimpanan cloud Anda.

Sinkronisasi cloud bukan pengganti cadangan lokal. Jika Anda tidak sengaja menghapus file, tempat sampah cloud biasanya hanya menyimpannya selama 30 hari.

### Metode 4: NAS (Penyimpanan Terhubung Jaringan)

NAS adalah solusi terbaik untuk koleksi besar. Perangkat dari Synology, QNAP, atau produsen serupa berada di jaringan rumah Anda dan menyediakan penyimpanan redundan berkapasitas terabyte.

1. Mount share NAS di Finder: **Pergi → Hubungkan ke Server** dan masukkan `smb://[IP-NAS]/[nama-share]`.
2. Gunakan **rsync** untuk sinkronisasi otomatis. Buka Terminal dan jalankan:

```
rsync -av --delete ~/path/ke/perpustakaan-komik/ /Volumes/NAS-Share/perpustakaan-komik/
```

3. Jadwalkan perintah ini sebagai cron job harian atau gunakan alat seperti **Hazel** atau **Automator** untuk memicunya secara otomatis.

NAS dengan redundansi RAID berarti bahkan jika satu drive dalam array gagal, data Anda tetap selamat. Kombinasikan dengan Time Machine yang menunjuk ke share NAS untuk mendapatkan yang terbaik dari keduanya: redundansi dan versioning.

### Memahami Mac Home Library di BiblioFuse

[BiblioFuse](/id/) menyertakan fitur Mac Home Library yang melakukan streaming komik dari folder di Mac Anda langsung ke iPhone atau iPad melalui Wi-Fi — tanpa menyalin file, tanpa sinkronisasi, tanpa menggunakan penyimpanan di perangkat.

Ini adalah fitur streaming, bukan fitur pencadangan. File berada di Mac Anda. Jika drive Mac Anda gagal, iPhone tidak memiliki apapun untuk di-stream. **Anda tetap perlu mencadangkan folder sumber di Mac Anda** menggunakan satu atau lebih metode di atas.

Untuk menemukan folder yang di-stream BiblioFuse, buka BiblioFuse di Mac Anda dan periksa **Pengaturan → Home Library**. Path tersebut adalah yang perlu Anda sertakan dalam strategi pencadangan Anda.

## Tips Praktis untuk Menjaga Perpustakaan Tetap Terorganisir

**Gunakan Finder untuk menemukan folder perpustakaan.** Di Mac, tekan **⌘ + Spasi** dan ketik `~/Library/Containers/com.modernlogic.bibliofuse` untuk langsung melompat ke container aplikasi. File Anda berada di subfolder `Data/Documents/`.

**Gunakan rsync untuk pencadangan NAS inkremental.** Flag `--delete` memastikan salinan NAS Anda mencerminkan Mac Anda dengan tepat, menghapus volume yang telah Anda hapus secara lokal. Jalankan mingguan atau setelah impor massal.

**Gunakan iCloud Drive untuk cadangan offsite otomatis.** Jika perpustakaan Anda di bawah 50 GB dan Anda memiliki paket iCloud+, menyimpan perpustakaan di iCloud Drive adalah cadangan offsite yang paling minim hambatan yang tersedia di Mac.

**Pisahkan progres membaca dari file Anda.** [BiblioFuse](/id/) menyinkronkan progres membaca melalui iCloud secara otomatis — Anda tidak perlu mencadangkan ini secara terpisah. Fokuskan strategi pencadangan pada file sumber itu sendiri.

## Pertanyaan yang Sering Diajukan

**Di mana BiblioFuse menyimpan komik saya di Mac?**
Secara default, file yang dikelola BiblioFuse di Mac disimpan di `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Jika Anda menunjuk aplikasi ke folder kustom, folder tersebut adalah root perpustakaan Anda. Bagaimanapun, path-nya terlihat di pengaturan BiblioFuse di Mac.

**Apakah Time Machine secara otomatis mencadangkan perpustakaan BiblioFuse?**
Ya. Time Machine mencadangkan seluruh Mac Anda secara default, termasuk container aplikasi tempat BiblioFuse menyimpan file. Jika Anda menggunakan folder perpustakaan kustom di luar container, pastikan tidak ada di daftar pengecualian Time Machine.

**Bisakah saya memindahkan perpustakaan komik ke Mac baru tanpa kehilangan progres membaca?**
Ya. Salin folder perpustakaan komik ke Mac baru dan masuk dengan Apple ID yang sama. BiblioFuse memulihkan progres membaca dari iCloud. Arahkan aplikasi ke path folder relatif yang sama di Mac baru dan perpustakaan Anda akan muncul persis seperti sebelumnya.

**Apakah iCloud Drive cadangan yang aman untuk perpustakaan komik besar?**
iCloud Drive adalah cadangan offsite yang andal tetapi bukan pengganti cadangan lokal. Jika Anda menghapus file, iCloud menyimpannya di folder Baru Dihapus selama 30 hari. Untuk koleksi besar, hard drive eksternal atau NAS tetap penting.

**Bagaimana cara mengotomatiskan pencadangan rsync ke NAS?**
Buka **Terminal** dan jalankan `crontab -e`. Tambahkan baris seperti `0 2 * * * rsync -av --delete ~/Comics/ /Volumes/NAS/Comics/` untuk menjalankan sinkronisasi setiap malam pukul 02.00. Ganti path dengan path perpustakaan dan mount point NAS Anda yang sebenarnya.

**Apa yang terjadi pada komik saya jika drive Mac saya rusak?**
Jika Anda memiliki cadangan Time Machine yang terkini, Anda dapat memulihkan seluruh perpustakaan ke drive baru atau Mac baru. Jika Anda memiliki salinan manual di hard drive eksternal atau NAS, file-file tersebut utuh dan dapat disalin langsung. Tanpa cadangan, file tidak dapat dipulihkan — itulah mengapa menyiapkannya sebelum terjadi kegagalan sangat penting.

## Mulai Lindungi Perpustakaan Anda Hari Ini

Perpustakaan komik yang dibangun selama bertahun-tahun layak mendapat perhatian yang sama seperti koleksi digital tak ternilai lainnya. Langkah tercepat yang dapat Anda lakukan sekarang adalah menghubungkan hard drive eksternal dan mengaktifkan Time Machine — itu saja sudah melindungi Anda dari kegagalan hardware. Tambahkan cadangan cloud untuk perlindungan offsite, dan NAS untuk koleksi besar.

[BiblioFuse](/id/) membuat membaca perpustakaan Anda menjadi mudah di iPhone, iPad, dan Mac. Padukan dengan strategi pencadangan yang solid dan koleksi Anda terlindungi apapun yang terjadi dengan hardware Anda.
