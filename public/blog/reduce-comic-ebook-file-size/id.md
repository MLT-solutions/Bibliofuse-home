# Mengapa File Komik dan Ebook Sangat Besar — dan Cara Mengatasinya

Kamu menyalin serial manga 50 volume ke iPhone dan melihat 20 gigabyte penyimpanan tiba-tiba lenyap. Atau mengunduh satu file CBZ dan ternyata satu volume saja sudah 400 MB. Ke mana semua ruang itu pergi?

Jawabannya ada pada format file — dan begitu kamu memahaminya, mengatasi masalah ini hanya butuh waktu kurang dari semenit.

## CBZ dan EPUB: Keduanya Adalah Arsip ZIP yang Menyamar

File CBZ adalah arsip ZIP dengan ekstensi berbeda. Ubah nama `.cbz` menjadi `.zip`, ekstrak, dan kamu akan menemukan folder berisi gambar yang dinamai sesuai urutan membaca — `001.png`, `002.png`, dan seterusnya. File CBR bekerja dengan cara yang sama namun menggunakan RAR alih-alih ZIP. Tidak ada encoding khusus, tidak ada rahasia: hanya gambar di dalam sebuah wadah.

EPUB secara struktural serupa. Ubah nama `.epub` menjadi `.zip`, ekstrak, dan kamu akan menemukan file HTML (teks bab), stylesheet CSS, metadata, serta gambar yang disematkan — sampul, ilustrasi, dan foto. EPUB adalah standar terbuka W3C yang didukung oleh semua aplikasi membaca utama.

Kedua format ini dirancang dengan baik sesuai fungsinya. Masalah ukuran bukan pada wadahnya — tetapi pada isi yang dimasukkan ke dalamnya.

## Mengapa Gambar PNG Memakan Banyak Penyimpanan

Kebanyakan grup pemindai dan penerbit ebook menggunakan PNG sebagai default karena formatnya lossless: setiap piksel dalam file yang tersimpan identik dengan hasil pindaian aslinya. Kesetiaan itu ada harganya.

Halaman komik beresolusi tinggi — biasanya 1800 × 2700 piksel dengan warna 24-bit — bisa berukuran 2 MB atau lebih sebagai PNG. Kebanyakan volume manga berisi antara 180 hingga 220 halaman. Biaya penyimpanan menumpuk dengan cepat:

| Format volume | Halaman | Ukuran per halaman | Ukuran total |
|--------------|---------|------------------|------------|
| PNG (lossless) | 200 | ~2 MB | **~400 MB** |
| WebP (terkompresi) | 200 | ~250 kB | **~50 MB** |
| Ruang yang dihemat | | | **87,5%** |

Kalikan dengan serial panjang. Perpustakaan manga 50 volume dalam format PNG memakan sekitar **20 GB**. Serial yang sama setelah dikompresi ke WebP muat dalam **2,5 GB** — penghematan **17,5 GB** hanya dari satu serial.

## Apa yang Membuat WebP Lebih Baik

WebP adalah format gambar yang dikembangkan Google, menghasilkan file jauh lebih kecil dari PNG, dan lebih kecil dari JPEG dengan kualitas setara. Pada pengaturan kualitas sedang (sekitar 80–85%), perbedaan visual dari sumber PNG hampir tidak terlihat di layar ponsel atau tablet. Komik dan manga sangat cocok untuk kompresi karena sebagian besar panel menggunakan warna datar dan garis bersih.

Semua iPhone, iPad, dan perangkat Android modern menampilkan WebP secara native. Kamu tidak mengorbankan kualitas tampilan demi penyimpanan — kamu hanya menyimpan informasi visual yang sama dengan cara yang lebih efisien.

## Mengapa BiblioFuse Membangun Kompresi Langsung di Dalam Aplikasi

Solusi umum — mengonversi file di komputer sebelum memuatnya ke ponsel — bisa dilakukan secara teori, tetapi menambah banyak langkah. Kamu butuh alat pemrosesan batch, pengaturan yang tepat, cara untuk mengemas ulang ZIP, lalu impor lagi. Pada praktiknya, sebagian besar pembaca melewati semua itu dan bertahan dengan perpustakaan yang membengkak.

Fitur **Gabung & Kompresi** BiblioFuse dirancang untuk menghilangkan semua kerumitan itu. Konversi sepenuhnya dilakukan di perangkat — tidak ada yang diunggah atau dikirim keluar. Pilih buku, tentukan tingkat kualitas, dan BiblioFuse menangani sisanya: mengekstrak setiap gambar, mengodekannya ulang sebagai WebP, dan merakit kembali CBZ atau EPUB baru yang terkompresi di tempat file aslinya.

**Untuk mengompresi buku:**
1. Tekan lama sampul buku mana saja di perpustakaan dan ketuk **Kompres**.
2. Sesuaikan slider kualitas — pengaturan default memberikan keseimbangan ukuran dan kualitas yang baik untuk sebagian besar komik.
3. Ketuk **Kompres**. File asli akan diganti ketika selesai.

**Untuk menggabungkan serial:** tekan lama untuk memilih beberapa file CBZ, lalu ketuk **Gabung**. BiblioFuse menggabungkannya sesuai urutan membaca dan mengompresi hasilnya dalam satu langkah.

[Alat Web BiblioFuse](/id/webapp) menawarkan kompresi dan penggabungan yang sama di browser mana saja — tanpa instalasi. Sangat berguna saat kamu menggunakan Windows atau Linux tanpa aplikasi iOS atau Mac.

## Berapa Banyak Ruang yang Benar-benar Bisa Kamu Hemat?

Angka 87,5% terasa abstrak sebelum kamu melihatnya pada perpustakaanmu sendiri:

| Koleksi | Ukuran PNG | Setelah kompresi | Ruang yang dibebaskan |
|--------|-----------|----------------|----------------------|
| Serial manga 10 volume | ~4 GB | ~500 MB | **3,5 GB** |
| Serial manga 50 volume | ~20 GB | ~2,5 GB | **17,5 GB** |
| 500 komik barat | ~50 GB | ~6,25 GB | **43,75 GB** |
| Perpustakaan EPUB bergambar (100 buku) | ~5 GB | ~625 MB | **4,4 GB** |

Pada iPhone 128 GB di mana setiap gigabyte berharga, perbedaan ini menentukan apakah kamu bisa membawa seluruh koleksi atau harus meninggalkan sebagian di rumah.

## Kapan Mengompresi dan Kapan Menyimpan File Asli

Kompresi adalah proses satu arah: begitu PNG di dalam arsip digantikan oleh WebP, data lossless aslinya hilang selamanya. Untuk membaca sehari-hari, itu adalah pertukaran yang sepadan. Namun jika kamu mengarsipkan hasil pindaian mentah untuk pelestarian, atau bekerja dengan karya seni asli yang membutuhkan akurasi piksel, simpan file asli di hard drive eksternal dan kompresi hanya salinan yang kamu bawa sehari-hari.

## Pertanyaan Umum

**Apakah kompresi memengaruhi kualitas membaca?**
Pada pengaturan default, perbedaannya tidak terasa saat membaca normal di ponsel atau tablet. Zoom besar pada garis halus mungkin menampilkan sedikit kehalusan, tetapi bagi sebagian besar pembaca, hasilnya secara visual identik dengan aslinya.

**Bisakah EPUB juga dikompresi?**
Bisa. BiblioFuse memproses EPUB dengan cara yang sama — mengkodekan ulang gambar yang disematkan sambil membiarkan teks, CSS, dan struktur bab tetap utuh.

**Bagaimana jika ingin menyimpan file aslinya?**
Buat salinan di aplikasi File sebelum mengompresi — BiblioFuse menggantikan file di tempat tanpa backup otomatis. Kamu juga bisa menggunakan [Alat Web BiblioFuse](/id/webapp) untuk mengunduh versi terkompresi tanpa menyentuh file sumber.

**Apakah kompresi bekerja secara offline?**
Ya — seluruh proses berjalan di perangkatmu. Tidak perlu koneksi internet dan tidak ada file yang dikirim ke server.
