# Cara Membersihkan Koleksi Manga Duplikat dengan Cerdas

Anda membuka folder manga dan memperhatikan sesuatu yang aneh: volume 47 *One Piece* ada tiga kali — satu file bernama `one_piece_v47.cbz`, yang lain `OP_47_HQ.cbz`, dan ketiga terkubur dalam subfolder berlabel "backup_old". Anda tahu ada masalah. Anda hanya belum tahu seberapa parah.

Bagi sebagian besar pembaca manga, duplikat terakumulasi secara diam-diam selama bertahun-tahun dari unduhan berbagai sumber, pemindahan arsip antar drive, dan backup yang tidak pernah dibersihkan. Hasilnya adalah penyimpanan yang terbuang, kebingungan saat membaca, dan tidak ada cara mudah untuk mengetahui versi mana yang berkualitas terbaik.

Panduan ini menjelaskan alur kerja praktis untuk menemukan, meninjau, dan menghapus manga duplikat menggunakan [Archive Duplicate Scanner](/en/archive/) — utilitas Mac yang dirancang khusus untuk masalah ini.

---

## Mengapa Perpustakaan Manga Menjadi Berantakan

Duplikat manga bukan sesuatu yang acak. Mereka mengikuti pola yang dapat diprediksi:

**Beberapa sumber, nama file berbeda.** Anda mengunduh volume 10 dari suatu grup bertahun-tahun lalu, lalu mengunduhnya lagi dari situs berbeda dengan kualitas gambar lebih baik. Konten yang sama, nama file yang sama sekali berbeda.

**Arsip yang dikompres ulang.** Seseorang mengganti nama file di dalam CBZ, mengkompresinya ulang dengan pengaturan kualitas berbeda, dan mendistribusikannya kembali. Gambar identik secara piksel, tetapi checksum arsip berbeda sepenuhnya.

**Salinan backup yang tersisa.** Anda memindahkan perpustakaan ke drive baru dan menyimpan folder lama "berjaga-jaga". Enam bulan kemudian, Anda lupa keberadaannya. Sekarang Anda memiliki salinan lengkap kedua dari 500 volume.

Pencari duplikat file standar tidak akan mendeteksi sebagian besar kasus ini karena mereka membandingkan checksum file. Anda membutuhkan alat yang memahami apa yang ada *di dalam* arsip.

---

## Yang Dilakukan Archive Duplicate Scanner Secara Berbeda

[Archive Duplicate Scanner](/en/archive/) menggunakan **perceptual hashing** untuk membandingkan gambar sebenarnya di dalam arsip CBZ dan CBR Anda. Alih-alih bertanya "apakah dua file ini identik byte demi byte?", ia bertanya "apakah dua arsip ini berisi halaman komik yang sama?"

Ini berarti mendeteksi duplikat yang telah:

- Diganti namanya (nama file berbeda, konten sama)
- Dikompres ulang dengan tingkat kualitas berbeda
- Dikemas ulang dengan struktur internal berbeda
- Disalin ke folder atau drive berbeda

---

## Langkah demi Langkah: Membersihkan Perpustakaan Manga

### Langkah 1: Pindai folder perpustakaan

Buka Archive Duplicate Scanner dan tambahkan folder manga. Anda bisa drag and drop folder langsung ke aplikasi.

Scanner membaca setiap file CBZ dan CBR, mengekstrak gambar, dan menghasilkan perceptual hash untuk setiap halaman. Semua terjadi sepenuhnya di Mac Anda tanpa koneksi jaringan.

### Langkah 2: Tinjau pasangan yang cocok

Setelah scan selesai, Archive Duplicate Scanner menampilkan pasangan yang cocok berdampingan dengan preview thumbnail, ukuran file, dan persentase kemiripan.

### Langkah 3: Pilih apa yang akan dihapus

Strategi umum: pertahankan file yang lebih besar (biasanya resolusi lebih tinggi) atau versi dari sumber terpercaya.

### Langkah 4: Pindahkan duplikat ke Trash

Archive Duplicate Scanner memindahkan file ke Trash — bukan penghapusan permanen. Anda bisa memulihkan file jika diperlukan.

---

## Tips Menjaga Perpustakaan Tetap Bersih

**Tetapkan satu folder "otoritatif".** Simpan perpustakaan yang dikurasi di satu tempat.

**Pindai setelah setiap sesi unduhan besar.** Jalankan Archive Duplicate Scanner setelah mengunduh sekelompok volume baru.

**Gunakan [BiblioFuse](/en/) untuk membaca dari folder yang dikurasi.** Saat streaming perpustakaan Mac ke iPhone atau iPad menggunakan BiblioFuse, Anda membaca dari satu sumber kebenaran.

---

## Pertanyaan Umum

**Apakah Archive Duplicate Scanner akan menghapus file saya secara otomatis?**
Tidak. Ia memindahkan file ke Trash, bukan penghapusan permanen.

**Format apa yang didukung?**
CBZ, CBR, dan arsip gambar.

**Dua file saya memiliki checksum yang sama sekali berbeda — apakah masih akan menemukan kecocokan?**
Ya. Archive Duplicate Scanner menggunakan perceptual hashing pada gambar di dalam setiap arsip, bukan checksum file.
