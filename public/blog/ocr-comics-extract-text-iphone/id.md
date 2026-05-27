# Ekstrak Teks dari Komik dan Manga di iPhone dengan OCR

BiblioFuse menyertakan OCR di perangkat untuk mengekstrak teks dari halaman komik dan manga di iPhone, mendukung bahasa Jepang (termasuk teks vertikal), Tionghoa, Korea, dan aksara Barat dalam file CBZ, CBR, EPUB, dan PDF. Seluruh proses berjalan secara lokal pada Neural Engine tanpa koneksi jaringan atau unggahan server, menghasilkan hasil dalam waktu di bawah dua detik di iPhone 14 atau lebih baru.

Anda sedang membaca volume ketiga dari sebuah seri manga ketika seorang karakter menyebutkan nama klan atau teknik dalam bahasa Jepang yang ingin Anda cari di kamus. Atau Anda menemukan dialog yang berkesan dan ingin menyimpannya. Masalahnya: halaman komik adalah gambar, bukan teks. Anda tidak bisa mengetuk balon dialog dan menyalin isinya.

OCR di [BiblioFuse](/id/) mengubah itu. Aplikasi dapat memindai halaman apa pun — atau area yang dipilih — mengekstrak teks yang ditemukan, dan menyajikannya sebagai string yang dapat disalin. Ini bekerja dengan file CBZ, CBR, EPUB, dan PDF. Mendukung bahasa Jepang, Cina, Korea, dan aksara Barat. Semua berjalan sepenuhnya di perangkat, tanpa koneksi internet.

## Mengapa OCR pada Komik Sulit

OCR pada dokumen biasa — kwitansi, PDF dengan font tertanam — adalah masalah yang sudah terpecahkan. Halaman komik lebih sulit karena tiga alasan:

**Teks berada di balon dengan tepi melengkung.** Teks berada di atas gambar ilustrasi, sering dengan garis kompleks tepat di belakang huruf, yang membingungkan sistem OCR.

**Font sering bergaya atau ditulis tangan.** Komik Barat menggunakan font khusus yang meniru tulisan tangan atau memiliki bentuk huruf yang terdistorsi untuk penekanan.

**Manga memiliki konvensi tata letak yang spesifik.** Teks Jepang dalam manga biasanya vertikal, kanan ke kiri, dan padat di dalam balon sempit.

[BiblioFuse](/id/) melatih OCR-nya khusus untuk tata letak komik dan manga, dengan model terpisah untuk teks Barat horizontal dan teks CJK (Cina, Jepang, Korea) vertikal.

## Yang Bisa Dilakukan dengan Teks yang Diekstrak

- **Mencari kosakata dalam bahasa asing.** Jika Anda membaca manga dalam bahasa Jepang, ekstrak dialog dari panel dan tempel ke aplikasi kamus atau penerjemah.
- **Menyalin kutipan.** Dialog yang berkesan, keterangan gambar, judul bab.
- **Mencari dalam seri.** Ekstrak nama karakter atau istilah teknis dan cari di volume lain.
- **Aksesibilitas.** Ekstrak teks dari komik yang dipindai untuk digunakan di pembaca layar atau aplikasi teks ke ucapan.
- **Terjemahan konten yang tidak diterjemahkan.** Untuk manga yang belum pernah diterjemahkan secara resmi, OCR + terjemahan mesin memberikan pengalaman membaca yang perkiraan.

## Cara Menggunakan OCR di BiblioFuse

OCR sudah terintegrasi di tampilan pembaca. Tidak perlu mengganti mode.

**Untuk memindai halaman penuh:**

1. Saat membaca, ketuk bagian tengah halaman untuk menampilkan kontrol.
2. Ketuk tombol **OCR** di bilah alat.
3. BiblioFuse memindai halaman saat ini dan menampilkan teks yang diekstrak di panel bawah.
4. Ketuk blok teks mana pun untuk menyalinnya, atau gunakan **Salin Semua**.

**Untuk memindai area tertentu:**

1. Tekan lama bagian mana pun dari halaman.
2. Seret untuk menggambar persegi panjang pilihan di sekitar area yang diinginkan.
3. Angkat jari. BiblioFuse memindai area yang dipilih dan menampilkan hasilnya.
4. Ketuk untuk menyalin atau berbagi.

Mode pemilihan area lebih akurat untuk halaman yang padat atau ketika Anda hanya ingin teks dari satu balon.

## Deteksi Bahasa dan Dukungan CJK

BiblioFuse mendeteksi skrip secara otomatis dalam kebanyakan kasus. **Teks Jepang vertikal** ditangani dengan benar — BiblioFuse merekonstruksi urutan membaca dari atas ke bawah dalam urutan kolom kanan ke kiri.

Untuk **bahasa Cina Tradisional dan Sederhana**, BiblioFuse membedakan set karakter dalam keluaran OCR. **Manhwa Korea** (teks horizontal) ditangani oleh pipeline yang sama dengan skrip CJK lainnya.

## Akurasi: Apa yang Diharapkan

- **Pemindaian resolusi tinggi (600+ DPI):** Sangat akurat.
- **Versi standar (300 DPI):** Akurat pada teks bersih; beberapa kesalahan pada font bergaya.
- **Pemindaian resolusi rendah atau terkompresi:** Akurasi menurun dengan artefak JPEG. Peningkatan skala di [BiblioFuse](/id/) dapat membantu sebelum menjalankan OCR.
- **Komik dengan huruf tangan:** Lebih bervariasi. Font tercetak mesin lebih mudah dibaca daripada huruf tangan.

## Yang Bisa Dilakukan dengan Teks

Panel teks yang diekstrak di [BiblioFuse](/id/) mendukung tindakan lembar berbagi iOS standar:

- **Salin ke papan klip** dan tempel ke aplikasi lain
- **Bagikan** langsung ke aplikasi terjemahan, Catatan, atau aplikasi pesan
- **Buka di Safari** untuk mencari

Untuk teks Jepang, kamus sistem iOS menyertakan pencarian Jepang-Inggris. Salin kanji yang diekstrak dan buka aplikasi Terjemahan atau aplikasi kamus.

## Tips untuk Hasil Lebih Baik

**Gunakan pemilih area untuk balon individual.** Pemindaian halaman penuh memberikan semua teks, tetapi memilih satu balon memberikan hasil yang lebih bersih ketika balon berdekatan satu sama lain.

**Aktifkan peningkatan skala untuk pemindaian berkualitas rendah.** Dalam pengaturan pembaca BiblioFuse, peningkatan skala gambar menerapkan filter penajaman yang meningkatkan kualitas input OCR.

**Untuk manga, pegang ponsel tegak.** OCR pada teks vertikal sensitif terhadap rotasi.

## OCR Berjalan di Perangkat

Semua pemrosesan OCR di [BiblioFuse](/id/) berjalan secara lokal di iPhone Anda. Halaman tidak dikirim ke server. Tidak ada gambar yang diunggah untuk diproses, tidak ada panggilan API eksternal.

## Memulai

OCR tersedia di [BiblioFuse](/id/) untuk iOS tanpa pembelian tambahan. Unduh aplikasi dari App Store, impor komik atau manga, dan coba tombol OCR saat membaca. Bagi pembaca manga khususnya, ini adalah fitur yang sulit untuk tidak digunakan setelah mencobanya.


## Pertanyaan yang Sering Diajukan

**Bahasa apa yang didukung oleh OCR BiblioFuse?**
BiblioFuse mendukung bahasa Jepang (termasuk teks vertikal dari atas ke bawah), Tionghoa Sederhana dan Tradisional, Korea, serta aksara Barat (Latin, Sirilik, Yunani). Pemilihan bahasa otomatis, tapi kamu bisa memaksakan satu bahasa di pengaturan OCR jika deteksi otomatis tidak bekerja dengan baik pada halaman campuran.

**Bagaimana OCR bekerja di BiblioFuse?**
Saat membaca komik atau manga, ketuk tombol OCR di kontrol pembaca. Kotak seleksi muncul — seret ke panel atau balon dialog mana pun. BiblioFuse memproses area yang dipilih secara lokal di Neural Engine dan mengembalikan teks yang diekstrak. Ketuk teks untuk menyalin atau berbagi.

**Apakah OCR memerlukan koneksi internet?**
Tidak. OCR BiblioFuse berjalan sepenuhnya di perangkat menggunakan Neural Engine Apple. Tidak ada yang diunggah ke server eksternal. Berfungsi dalam mode pesawat, tanpa data, dan tanpa Wi-Fi.

**Mengapa OCR BiblioFuse lebih baik untuk bahasa Jepang daripada kamera iPhone?**
BiblioFuse dioptimalkan untuk teks di halaman komik: teks kecil dalam balon, teks vertikal dalam manga, font bergaya, dan teks miring. Aplikasi Vision sistem tidak disesuaikan untuk konteks ini. BiblioFuse juga mempertahankan teks pada posisi bacanya, sehingga salin-tempel ke kamus hanya membutuhkan satu ketukan.

**Format file apa yang didukung OCR BiblioFuse?**
OCR berfungsi dengan CBZ, CBR, EPUB, dan PDF — semua format komik dan ebook utama yang didukung BiblioFuse. Teks dapat diekstrak dari halaman mana pun yang dirender sebagai gambar, termasuk halaman hasil scan dalam PDF dan EPUB.
