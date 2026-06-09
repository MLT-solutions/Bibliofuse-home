# Mengelola Perpustakaan BiblioFuse: Folder, Transfer, dan Streaming dari Mac

BiblioFuse mengelola perpustakaan EPUB, CBZ, CBR, PDF, dan TXT kamu di iPhone, iPad, dan Mac tanpa memindahkan atau mengunci file. Di iOS 17 atau lebih baru, kamu bisa memuat file melalui Wi-Fi Transfer, iCloud Drive, atau share sheet Berkas — dan streaming seluruh perpustakaan Mac ke iPhone melalui Wi-Fi tanpa biaya penyimpanan di perangkat.

[BiblioFuse](https://bibliofuse.com) dibangun berdasarkan satu aturan sederhana: file kamu tetap berada di tempat kamu meletakkannya. Aplikasi tidak pernah memindahkan, mengganti nama, atau mengurung file dalam format proprietary. Memahami di mana buku-buku berada — dan bagaimana menempatkannya di sana — adalah perbedaan antara perpustakaan yang bekerja untukmu dan satu yang selalu kamu lawan.

## Cara Menambahkan Buku: Empat Cara

### Mac dan Android — Tambah Folder

Di Mac dan Android, BiblioFuse memantau folder alih-alih memiliki file. Di bilah sisi, ketuk **Tambah Folder** dan arahkan ke lokasi mana saja — folder Unduhan, drive eksternal, NAS. BiblioFuse mengindeks konten dan melacak perubahan tanpa menyentuh file itu sendiri.

### iOS — Salin ke Folder BiblioFuse

iPhone dan iPad menggunakan model file sandbox, jadi kamu menyalin buku ke lokasi yang dapat dilihat oleh aplikasi. Dua lokasi yang bisa digunakan:

**iCloud Drive → BiblioFuse** — Buka aplikasi File dan navigasi ke iCloud Drive → BiblioFuse. Salin atau pindahkan folder ebook kamu ke sini. Setiap folder yang kamu letakkan muncul sebagai folder terpisah dalam daftar BiblioFuse. Buku atau file yang diletakkan langsung di root iCloud Drive → BiblioFuse (bukan di dalam subfolder) akan muncul di aplikasi di bawah folder bernama **iCloud**. Buku yang disimpan di sini mendapatkan pelacakan kemajuan otomatis: posisi membaca kamu tersinkronisasi antara iPhone, iPad, dan Mac. Lanjutkan tepat dari tempat kamu berhenti di perangkat mana saja.

**Di iPhone Saya → BiblioFuse** — Untuk penyimpanan hanya di perangkat, salin folder ebook ke sini. Folder muncul dengan cara yang sama dalam daftar, tetapi kemajuan hanya tersimpan di perangkat tersebut.

Dalam kedua kasus, letakkan folder — bukan file individual. Folder berisi volume seri manga menjadi satu entri dalam daftar dengan semua volume di dalamnya.

### Transfer Wi-Fi

Server impor berbasis browser bawaan memungkinkan kamu menyeret file dari komputer mana saja tanpa kabel atau perangkat lunak sinkronisasi.

- **iOS**: Buka **Pengaturan → Impor Wi-Fi** dan aktifkan. URL lokal muncul — buka di browser desktop mana saja dan seret file ke dalamnya. File masuk ke **Di iPhone Saya → BiblioFuse → import** dan muncul di perpustakaan secara otomatis.
- **Android**: Kamu memilih folder tujuan saat menyiapkan Transfer Wi-Fi.

### Buku yang Diproses oleh Tab Alat

Saat menggunakan [tab Alat](/id/webapp) untuk mengompresi atau menggabungkan file, hasilnya masuk ke:

- **iOS**: **Di iPhone Saya → BiblioFuse → export** — file yang diproses muncul di sini secara otomatis.
- **Android**: Kamu memilih folder keluaran saat menjalankan alat.

[Alat Web BiblioFuse](/id/webapp) melakukan operasi yang sama di browser mana saja — berguna di Windows atau Linux. Untuk detail tentang penghematan ruang dari kompresi, lihat [panduan ukuran file komik dan ebook](/id/blog/reduce-comic-ebook-file-size) kami.

### Mac: Kirim ke iCloud dengan Satu Klik Kanan

Jika kamu sedang membaca di Mac dan ingin buku tersebut ada di iPhone, klik kanan sampul buku dan pilih **Kirim ke iCloud**. BiblioFuse menyalin file langsung ke **iCloud Drive / BiblioFuse** — wadah yang sama yang dipantau iPhone kamu. File muncul di teleponmu dalam beberapa menit tanpa langkah manual.

Untuk mengirim beberapa buku sekaligus, aktifkan mode pilihan (ikon centang di kanan atas), pilih buku yang diinginkan, lalu ketuk **Kirim ke iCloud** di bilah tindakan.

## Tampilan Grid Perpustakaan: Opsi Tekan Lama

Menekan lama sampul buku mana saja di iOS membuka menu konteks:

- **Buka** — langsung ke membaca
- **Bagikan** — serahkan file ke aplikasi lain
- **Ganti Nama** — ubah nama tampilan (tidak mengganti nama file di disk)
- **Edit Metadata** — tambahkan tag dan penilaian bintang 1 sampai 5
- **Hapus** — konfirmasi muncul dengan dua pilihan:
  - *Hapus dari Perpustakaan* — menghapus entri perpustakaan, file tetap utuh di disk
  - *Hapus dari Penyimpanan* — menghapus entri sekaligus file fisik

Untuk mengirim buku ke tab Alat, masuk ke mode pilihan (tekan lama buku pertama, lalu ketuk yang lain untuk menambahkan). Bilah muncul di bagian bawah dengan tombol **Alat** (ikon tongkat ajaib). Ketuk untuk memasukkan buku yang dipilih ke antrean kompresi atau penggabungan.

## Streaming Perpustakaan Mac ke iPhone

Jika koleksi utama kamu ada di Mac, kamu tidak perlu menyalin apa pun. [BiblioFuse](/id/) bisa melakukan streaming langsung dari Mac ke iPhone — tetapi gunakan Tailscale daripada metode Wi-Fi dasar yang bisa tidak stabil saat ponsel berpindah jaringan.

Tailscale membuat jaringan terenkripsi privat antara perangkatmu. Setelah dikonfigurasi, iPhone kamu dapat menjangkau Mac baik saat menggunakan data seluler, Wi-Fi publik, maupun di rumah.

### Langkah 1: Pasang Tailscale di Kedua Perangkat

1. Mac: unduh dari [tailscale.com/download](https://tailscale.com/download) atau Mac App Store.
2. iPhone: cari "Tailscale" di App Store.
3. Masuk dengan **akun Tailscale yang sama** di keduanya.

Setelah terhubung, kedua perangkat dapat berkomunikasi secara privat.

### Langkah 2: Aktifkan Streaming di Mac

Di BiblioFuse untuk Mac, gulir bilah sisi kiri ke bawah ke bagian **Streaming** dan aktifkan. Dua endpoint muncul: satu untuk LAN/Wi-Fi dan satu untuk **Jarak Jauh / Tailscale**. Tailscale adalah jalur yang andal.

### Langkah 3: Periksa Izin di iPhone

Dua izin iOS diperlukan:

1. **Jaringan Lokal** — buka **Pengaturan → Privasi & Keamanan → Jaringan Lokal** dan aktifkan BiblioFuse.
2. **iCloud** — buka **Pengaturan → [Nama kamu] → iCloud** dan aktifkan BiblioFuse.

Pemeriksaan cepat: buka BiblioFuse di iPhone, buka **Pengaturan → Izin**. Tanda centang hijau berarti semuanya baik; tanda merah langsung mengarahkan ke pengaturan sistem yang perlu diperbaiki.

### Langkah 4: Hubungkan dari iPhone

1. Buka tab **Perpustakaan** di BiblioFuse.
2. Di bilah sisi (panel kiri di iPad, ketuk ikon bilah sisi di iPhone), gulir ke bawah — bagian **Mac** menampilkan endpoint streaming yang ditemukan.
3. Cari entri dengan **(iCloud)** dalam namanya, misalnya *MacBook Pro Rudi (iCloud)*.
4. Ketuk. Beri waktu 10–30 detik untuk koneksi aman terbentuk.

Folder perpustakaan Mac kamu sekarang muncul di bilah sisi seperti penyimpanan lokal. Jelajahi dan baca seperti biasa.

### Apa yang Di-streaming vs. yang Diunduh

| Format | Perilaku |
|--------|---------|
| CBZ / CBR | Di-streaming halaman per halaman — tidak perlu mengunduh, langsung terbuka |
| EPUB / TXT | Diunduh ke perangkat terlebih dahulu, lalu terbuka |

**Catatan tentang kemajuan membaca:** kemajuan dari sesi streaming disimpan di database lokal Mac kamu, bukan di iCloud. Tidak akan tersinkronisasi ke perangkat lain — tetap di Mac.

## Tips Cepat

- **iCloud adalah jalur sinkronisasi termudah**: buku di iCloud Drive → BiblioFuse muncul di semua perangkat Apple dengan pelacakan kemajuan bawaan.
- **Folder export adalah area pementasan**: setelah kompresi di iOS, temukan hasilnya di Di iPhone Saya → BiblioFuse → export, lalu pindahkan ke tempat penyimpanan jangka panjang.
- **Periksa Izin terlebih dahulu jika streaming tidak berfungsi**: sebagian besar masalah koneksi berasal dari Jaringan Lokal atau iCloud yang dinonaktifkan.

## Pertanyaan yang Sering Diajukan

**Di mana BiblioFuse menyimpan file saya di iPhone?**
BiblioFuse menggunakan dua folder yang terlihat di aplikasi Berkas: iCloud Drive → BiblioFuse (disinkronkan antar perangkat) dan Di iPhone Saya → BiblioFuse (hanya lokal). File Wi-Fi Transfer masuk ke subfolder impor lokal; file yang ditambahkan melalui iCloud masuk ke folder iCloud.

**Bagaimana cara memindahkan buku dari Mac ke iPhone tanpa kabel?**
Gunakan Wi-Fi Transfer: di BiblioFuse di iPhone, buka Pengaturan → Impor Wi-Fi, aktifkan, lalu kunjungi URL yang muncul di browser mana pun di Mac kamu dan seret file. Kamu juga bisa menjatuhkan file ke iCloud Drive → BiblioFuse di Mac dan file tersebut akan tersinkronisasi otomatis.

**Apakah BiblioFuse mendukung organisasi seri berbasis folder?**
Ya. Taruh folder volume CBZ (misalnya, seri manga) di folder BiblioFuse — setiap subfolder muncul sebagai entri seri terpisah di perpustakaan. Volume individual dalam folder terdaftar dalam urutan baca.

**Apa perbedaan antara streaming Mac Home Library dan sinkronisasi iCloud?**
Sinkronisasi iCloud menyalin file ke perangkat sehingga kamu bisa membaca offline di mana saja. Mac Home Library mengalirkan halaman atas permintaan dari Mac melalui Wi-Fi — tidak ada yang disalin ke iPhone, sehingga tidak menggunakan penyimpanan perangkat, tetapi kamu perlu berada di jaringan yang sama.

**Bagaimana cara mengirim buku dari perpustakaan Mac ke iPhone dengan cepat?**
Klik kanan pada sampul buku mana pun di BiblioFuse Mac dan pilih Kirim ke iCloud. BiblioFuse menyalinnya ke iCloud Drive → BiblioFuse, dan muncul di iPhone kamu dalam hitungan menit.
