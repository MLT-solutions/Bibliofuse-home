# Cara Menemukan Foto Duplikat di Mac — Termasuk HEIC, WebP, dan RAW

Archive Duplicate Scanner menemukan foto duplikat di Mac menggunakan perceptual hashing — teknik yang mencocokkan gambar yang identik secara visual meskipun memiliki nama file, format, atau pengaturan kompresi yang berbeda. Aplikasi ini mendukung HEIC, WebP, JPEG, PNG, TIFF, RAW, dan puluhan format lainnya. Tersedia untuk Mac dan Windows, serta memindahkan duplikat ke Tempat Sampah dengan aman alih-alih menghapusnya secara permanen.

## Masalah Perpustakaan Foto yang Terus Bertumbuh Tanpa Batas

Perpustakaan foto Mac Anda terlihat mudah dikelola lima tahun lalu. Sekarang sudah ada 40.000 file yang tersebar di folder Unduhan, drive cadangan, dan tiga ekspor iCloud. Anda memiliki foto lanskap yang sama tersimpan sebagai `IMG_4521.HEIC`, `IMG_4521-edited.JPG`, dan `landscape-final.webp`. Ada seri burst RAW di mana 11 frame yang hampir identik lolos dari proses seleksi. Dan setiap migrasi perpustakaan — dari iPhoto ke Apple Foto ke Mac baru — meninggalkan lapisan duplikat baru.

Alat bawaan tidak dapat membantu. Apple Foto memiliki pencari duplikat dasar untuk foto yang sudah ada di dalam perpustakaannya, tetapi melewatkan file yang tersebar di Finder. Spotlight tidak membandingkan konten gambar. Pencari file duplikat standar membandingkan hash byte-per-byte dan gagal begitu dua file memiliki kompresi JPEG yang berbeda atau salah satunya diekspor ulang.

## Mengapa Perceptual Hashing Bisa Menemukan Foto Duplikat di Format Apa Pun?

Perceptual hashing melihat bagaimana gambar *terlihat*, bukan apa yang dikatakan byte-nya. Archive Duplicate Scanner menghitung sidik jari visual ringkas untuk setiap foto. Dua gambar yang terlihat identik bagi mata manusia menghasilkan sidik jari yang sama (atau sangat mirip) — meskipun satu berformat HEIC dan yang lain JPEG, meskipun satu diekspor ulang dengan kualitas 85%, dan meskipun seseorang mengubah nama file tersebut.

Inilah perbedaan utama dari deduplicator file generik. Alat generik membandingkan hash SHA-256 — identik byte per byte saja. Perceptual hashing mencocokkan gambar yang secara visual sama tetapi secara teknis merupakan file yang berbeda.

## Cara Menemukan Foto Duplikat di Mac Langkah demi Langkah

1. **Unduh dan buka Archive Duplicate Scanner** dari Mac App Store atau situs web pengembang.
2. **Tambahkan folder foto Anda** — seret folder ekspor perpustakaan Foto, folder Unduhan, dan drive eksternal apa pun yang ingin Anda pindai. Anda dapat menambahkan beberapa folder dalam satu pemindaian.
3. **Jalankan pemindaian** — aplikasi menggunakan perceptual hashing untuk membuat sidik jari setiap gambar yang didukung. Perpustakaan dengan 10.000 foto biasanya selesai dalam waktu kurang dari dua menit di Mac dengan chip M.
4. **Tinjau grup** — duplikat muncul dalam grup. Setiap grup menampilkan nama file, format, ukuran file, dimensi, dan thumbnail visual agar Anda dapat mengonfirmasi kecocokan.
5. **Pilih strategi penghapusan** — Archive Duplicate Scanner menawarkan strategi pemilihan otomatis: simpan file terbesar (kualitas tertinggi), simpan yang terlama (asli), atau simpan yang ada di folder yang diutamakan. Anda juga dapat memilih secara manual.
6. **Pindahkan ke Tempat Sampah** — aplikasi tidak pernah menghapus file secara permanen. Duplikat yang dipilih dipindahkan ke Tempat Sampah Mac sehingga Anda dapat memulihkan apa pun yang dihapus secara tidak sengaja.

## Format Foto Apa Saja yang Didukung?

Archive Duplicate Scanner menangani setiap format yang dihadapi fotografer Mac:

- **HEIC / HEIF** — format default iPhone, termasuk file HDR dan mode Potret
- **JPEG / JPG** — format universal, termasuk ekspor ulang dan versi yang diedit
- **WebP** — semakin umum dari unduhan media sosial dan tangkapan layar web
- **PNG** — tangkapan layar dan grafis tanpa kompresi
- **TIFF** — pemindaian berkualitas tinggi dan ekspor berlapis
- **Format RAW** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG, dan lainnya
- **CBZ / CBR** — arsip komik juga didukung bersama foto

Fitur pencocokan nama file fuzzy menemukan grup seperti `liburan-2023.jpg`, `liburan-2023(1).jpg`, dan `liburan-2023-copy.jpg` dalam hitungan detik, bahkan sebelum perbandingan hash visual dijalankan.

## Tiga Kasus Penggunaan Praktis

**1. Pembersihan setelah migrasi**
Setelah setiap migrasi Mac, Migration Assistant Apple menyalin file tetapi tidak mendeduplikasinya. Jika Anda pernah berpindah antar Mac lebih dari sekali, kemungkinan besar Anda memiliki dua atau tiga salinan foto terlama. Jalankan Archive Duplicate Scanner di folder home Anda untuk menemukan semuanya.

**2. Pasangan RAW + JPEG**
Banyak kamera — dan mode ProRAW iPhone — menyimpan RAW dan JPEG secara bersamaan. Setelah mengedit di Lightroom atau Capture One, Anda seringkali tidak lagi memerlukan JPEG asli. Archive Duplicate Scanner mengelompokkan file RAW dengan padanan JPEG-nya sehingga Anda dapat membersihkan yang berlebih tanpa harus mengurutkan secara manual berdasarkan tanggal.

**3. Akumulasi unduhan media sosial**
Bertahun-tahun menyimpan tangkapan layar Instagram dan foto yang diunduh menghasilkan puluhan salinan gambar yang sama dalam resolusi berbeda. Perceptual hashing menangkap semuanya, bahkan ketika nama file adalah rangkaian digit acak yang berbeda.

## Pertanyaan yang Sering Diajukan

### Apakah Archive Duplicate Scanner menghapus foto secara permanen?

Tidak. Aplikasi memindahkan file ke Tempat Sampah Mac. Tidak ada yang dihapus secara permanen sampai Anda mengosongkan Tempat Sampah sendiri. Ini memberi Anda jaring pengaman penuh untuk memulihkan apa pun yang dihapus secara tidak sengaja.

### Bisakah aplikasi menemukan duplikat di format berbeda, seperti HEIC dan JPEG?

Ya. Perceptual hashing membandingkan konten visual, bukan byte file. Foto yang disimpan sebagai HEIC dan diekspor ulang sebagai JPEG akan terdeteksi sebagai duplikat meskipun format file dan konten byte-nya benar-benar berbeda.

### Berapa lama waktu pemindaian perpustakaan besar?

Di Mac Apple dengan chip M, perpustakaan berisi 10.000 foto biasanya selesai dalam waktu kurang dari dua menit. Perpustakaan dengan 50.000+ foto membutuhkan 5–10 menit tergantung pada kecepatan drive dan format file. File HEIC dengan metadata HDR membutuhkan waktu sedikit lebih lama untuk didekode.

### Apakah bisa menemukan foto burst RAW yang hampir duplikat?

Ya, dengan ambang batas kemiripan yang diatur ke tingkat sensitivitas yang lebih tinggi. Foto burst dari scene yang sama terlihat hampir identik dan menghasilkan hash perceptual yang sangat mirip. Anda dapat menyetel sensitivitas agar pemindai mengelompokkannya, lalu hanya menyimpan frame yang paling tajam.

### Apakah berfungsi dengan drive eksternal dan penyimpanan jaringan?

Ya. Anda dapat menambahkan folder apa pun yang dapat diakses di Finder — drive internal, drive USB eksternal, kartu SD, atau volume yang dipasang melalui jaringan. Pemindaian berjalan secara lokal di Mac Anda; tidak ada file yang diunggah ke server mana pun.

### Apakah Archive Duplicate Scanner tersedia untuk Windows?

Ya. Archive Duplicate Scanner tersedia untuk Mac dan Windows. Versi Windows memiliki mesin perceptual hashing yang sama dan mendukung format file yang sama.

## Pulihkan Penyimpanan Anda — Tanpa Risiko

Perpustakaan dengan 40.000 foto dan 30% duplikat membuang puluhan gigabyte penyimpanan. Archive Duplicate Scanner memberi Anda alat untuk membersihkannya dengan aman — perceptual hashing yang menangkap duplikat visual di berbagai format, strategi pemilihan otomatis yang menghilangkan dugaan, dan penghapusan hanya ke Tempat Sampah yang menjaga keamanan Anda.

[Unduh Archive Duplicate Scanner](/id/) dan mulai pemindaian pertama Anda hari ini. Jika Anda juga ingin mengompresi atau mengonversi batch koleksi foto Anda, [Alat Web BiblioFuse](/id/webapp/) menangani file EPUB, CBZ, dan PDF sepenuhnya di browser Anda.
