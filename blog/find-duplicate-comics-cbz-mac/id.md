# Cara Menemukan dan Menghapus File Komik CBZ Duplikat di Mac

Archive Duplicate Scanner menemukan file CBZ, CBR, dan arsip komik duplikat di Mac menggunakan perceptual hashing — mencocokkan file meskipun telah diganti nama, dikompresi ulang, atau dikemas ulang. Pindai seluruh perpustakaan Anda, tinjau pasangan file yang cocok secara berdampingan, dan pindahkan duplikat ke Trash dengan aman tanpa risiko kehilangan file asli.

## Mengapa File Komik Duplikat Lebih Sulit Ditemukan dari yang Anda Kira

Perpustakaan komik digital mengumpulkan duplikat dengan cara-cara yang mengecoh perbandingan nama file atau ukuran file standar. Anda mengunduh CBZ dari satu sumber, lalu kemudian mengunduh apa yang tampak seperti rilis berbeda — tetapi sebenarnya berisi halaman pindaian yang sama yang dikemas ulang dengan nama file berbeda. Terjemahan penggemar dirilis ulang dengan encoding gambar yang sedikit berbeda. Hard disk backup dari tiga tahun lalu digabungkan ke perpustakaan utama, membawa file yang sama dengan timestamp berbeda.

Alat duplikat standar membandingkan hash file — sehingga perubahan apa pun, bahkan penggantian nama atau penambahan tag komentar, menghasilkan hash berbeda dan duplikat tidak terdeteksi. Perceptual hash bekerja secara berbeda: ia menganalisis konten visual gambar di dalam arsip dan membuat sidik jari berdasarkan apa yang Anda lihat, bukan byte yang tepat.

Archive Duplicate Scanner menggunakan perceptual hashing untuk menemukan duplikat komik yang tidak dapat ditemukan oleh alat lain mana pun.

## Bagaimana Perceptual Hashing Bekerja untuk Komik?

Ketika Archive Duplicate Scanner memindai CBZ atau CBR, ia membuka arsip, mengambil sampel gambar di dalamnya, dan menghitung perceptual hash untuk masing-masing. Hash ini menangkap struktur visual — bentuk, pola kontras, dan tata letak — tanpa bergantung pada nilai piksel yang tepat.

Dua file CBZ yang berisi halaman yang sama menghasilkan hash yang cocok meskipun:
- Nama file benar-benar berbeda
- Arsip dikompresi ulang dengan pengaturan kualitas berbeda
- Satu file memiliki tag metadata yang tidak dimiliki file lainnya
- Urutan halaman berbeda di antara rilis

Hal ini menjadikan Archive Duplicate Scanner alat yang tepat untuk jenis duplikat yang terakumulasi dalam perpustakaan komik selama bertahun-tahun mengunduh dari berbagai sumber.

## Cara Menemukan File CBZ Duplikat di Mac

### Langkah 1: Unduh dan Jalankan Archive Duplicate Scanner

[Archive Duplicate Scanner](/id/) tersedia di Mac App Store. Instal dan jalankan dari folder Applications.

### Langkah 2: Tambahkan Folder Perpustakaan Komik Anda

Seret folder komik Anda ke jendela Archive Duplicate Scanner, atau gunakan tombol Add Folder untuk menelusuri. Anda dapat memindai beberapa lokasi sekaligus — perpustakaan utama, drive eksternal, dan lokasi backup semuanya sekaligus.

### Langkah 3: Mulai Pemindaian

Klik Scan. Archive Duplicate Scanner membuka setiap CBZ dan CBR, mengambil sampel gambar, dan menghitung perceptual hash. Perpustakaan berisi 1.000 komik biasanya selesai dalam beberapa menit di Mac modern.

### Langkah 4: Tinjau Pasangan yang Cocok

Setelah pemindaian, Archive Duplicate Scanner menampilkan grup duplikat yang terdeteksi. Setiap grup menampilkan arsip yang cocok secara berdampingan dengan nama file, ukuran file, tanggal modifikasi, dan jalur folder. Anda dapat melihat pratinjau gambar sampul atau membuka salah satu arsip untuk konfirmasi.

### Langkah 5: Pilih Otomatis Salinan yang Akan Disimpan

Strategi pilih otomatis Archive Duplicate Scanner memilih file mana yang akan disimpan berdasarkan aturan yang Anda konfigurasikan: simpan file yang lebih besar (kemungkinan kualitas lebih baik), simpan file dalam folder yang dipilih (perpustakaan utama Anda), atau simpan salinan yang paling baru dimodifikasi. Anda juga dapat memilih secara manual file yang akan disimpan di setiap grup.

### Langkah 6: Pindahkan Duplikat ke Trash

Klik Remove Duplicates (atau Move to Trash). Archive Duplicate Scanner tidak pernah menghapus file secara permanen — hanya memindahkannya ke Trash. Tinjau di sana sebelum mengosongkan jika diperlukan.

## Strategi Pilih Otomatis untuk Perpustakaan Besar

Ketika menangani 200 grup duplikat, meninjau setiap satu secara manual tidaklah praktis. Strategi pilih otomatis Archive Duplicate Scanner mengotomatiskan keputusan:

**Simpan file yang lebih besar:** Arsip CBZ yang lebih besar biasanya berisi gambar berkualitas lebih tinggi. Strategi ini secara otomatis menyimpan versi yang lebih baik.

**Simpan file dalam folder yang dipilih:** Jika perpustakaan utama Anda ada di `~/Comics` tetapi duplikat ada di drive backup, beri tahu Archive Duplicate Scanner untuk selalu lebih memilih salinan `~/Comics`. Salinan backup ditandai untuk dihapus.

**Simpan yang paling baru dimodifikasi:** Berguna ketika file yang lebih baru merupakan rilis yang dikoreksi atau diperbarui dari grup pindaian yang sama.

Setelah pilih otomatis berjalan, tinjau pilihan yang ditandai sekali sebelum mengonfirmasi. Archive Duplicate Scanner tidak pernah menghapus tanpa konfirmasi eksplisit Anda.

## Bagaimana Pencocokan Nama File Fuzzy Membantu?

Selain perceptual hashing, Archive Duplicate Scanner juga menggunakan pencocokan nama file fuzzy untuk menemukan kemungkinan duplikat bahkan sebelum analisis gambar. File seperti `One-Punch-Man-v01.cbz` dan `One_Punch_Man_Vol_1.cbz` ditandai sebagai kemungkinan cocok.

Pendekatan dua lapisan ini — pencocokan nama file fuzzy ditambah konfirmasi perceptual hash — menangkap duplikat yang jelas bagi manusia tetapi tidak terlihat oleh alat yang mengandalkan pencocokan string atau byte yang tepat.

## Pertanyaan yang Sering Diajukan

**Bagaimana cara menemukan file CBZ duplikat di Mac?**
Gunakan Archive Duplicate Scanner. Tambahkan folder komik Anda, klik Scan, dan aplikasi mengidentifikasi file CBZ dan CBR duplikat menggunakan perceptual hashing. Ia mencocokkan file bahkan setelah penggantian nama atau kompresi ulang, lalu memungkinkan Anda memindahkan duplikat ke Trash dengan aman.

**Bisakah Archive Duplicate Scanner menemukan duplikat jika nama file berbeda?**
Ya. Archive Duplicate Scanner menggunakan perceptual hashing pada gambar di dalam arsip CBZ. Jika dua arsip berisi halaman pindaian yang sama, keduanya ditandai sebagai duplikat terlepas dari nama file, ukuran file, atau metadata.

**Apakah Archive Duplicate Scanner menghapus file secara permanen?**
Tidak. Archive Duplicate Scanner hanya memindahkan file ke Trash. Anda dapat meninjau dan memulihkannya sebelum mengosongkan — aman digunakan untuk perpustakaan berukuran apa pun.

**Format komik apa yang didukung Archive Duplicate Scanner?**
Archive Duplicate Scanner mendukung arsip komik CBZ dan CBR. Ia juga memindai file foto (JPEG, PNG, HEIC, WebP, RAW) dan arsip ZIP/RAR standar.

**Berapa lama waktu yang dibutuhkan untuk memindai perpustakaan komik yang besar?**
Kecepatan pemindaian bergantung pada ukuran perpustakaan dan Mac Anda. Perpustakaan berisi 1.000 file CBZ biasanya selesai dalam beberapa menit. Mac Apple Silicon memindai jauh lebih cepat dari Mac Intel pada koleksi besar.

**Apakah Archive Duplicate Scanner bekerja di beberapa drive?**
Ya. Tambahkan drive atau folder yang terpasang sebagai lokasi pemindaian. Archive Duplicate Scanner membandingkan file di beberapa drive secara bersamaan — ideal untuk menemukan duplikat antara perpustakaan utama dan drive backup Anda.

## Bangun Perpustakaan yang Lebih Rapi dalam Satu Sore

Komik duplikat membuang ruang penyimpanan, mengacaukan tampilan perpustakaan Anda, dan membuat pengorganisasian semakin sulit dari waktu ke waktu. Archive Duplicate Scanner menangani bagian yang sulit — mendeteksi arsip yang identik secara visual terlepas dari nama file — dan memberi Anda jalur yang aman, hanya melalui Trash, untuk membersihkan. Temukan **Archive Duplicate Scanner** di Mac App Store untuk menjalankan pemindaian pertama Anda hari ini. Setelah perpustakaan Anda bersih, gunakan [BiblioFuse](/id/) untuk membaca dan mengorganisir koleksi komik Anda di iPhone dan Mac.
