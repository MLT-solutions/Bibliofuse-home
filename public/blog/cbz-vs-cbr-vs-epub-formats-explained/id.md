# CBZ vs CBR vs EPUB — Format Komik dan E-book Dijelaskan

BiblioFuse mendukung CBZ, CBR, EPUB, PDF, ZIP, RAR, dan TXT di iPhone, iPad, dan Mac dengan iOS 17 atau lebih baru — membaca semua format komik dan e-book ini secara native tanpa langkah konversi. CBZ dan CBR adalah arsip gambar yang paling cocok untuk komik dan manga, sedangkan EPUB adalah format teks reflow yang dirancang untuk novel dan non-fiksi.

Kamu melihat halaman unduhan dan menemukan empat jenis file: CBZ, CBR, EPUB, PDF. Semuanya mengklaim sebagai "buku yang sama". Mana yang harus diunduh? Mana yang akan berjalan di ponsel, tablet, atau Mac-mu?

Panduan ini menjelaskan semuanya. Setelah membaca, kamu akan tahu persis apa itu setiap format, apa isinya, dan mana yang tepat untuk situasimu.

## Jawaban Singkat

| Format | Isi | Terbaik untuk |
|--------|-----|--------------|
| CBZ | Gambar dalam arsip ZIP | Komik, manga, novel grafis |
| CBR | Gambar dalam arsip RAR | Sama seperti CBZ, rilis lama |
| EPUB | HTML + gambar dalam ZIP | E-book teks, novel |
| PDF | Halaman berformat tetap | Dokumen, buku teknis |

## CBZ — Comic Book ZIP

CBZ singkatan dari Comic Book ZIP. Format ini punya tepat satu aturan: ganti nama file ZIP menjadi `.cbz`. Tidak ada encoding khusus. Buka `.cbz` dengan utilitas zip apa pun dan kamu akan menemukan folder gambar bernomor urut: `001.jpg`, `002.jpg`, dalam urutan baca.

CBZ populer di awal 2000-an karena memecahkan masalah sederhana: file komik perlu beredar online, dan ZIP ada di mana-mana. Ekstensi `.cbz` memberi sinyal ke software pembaca: "ini komik, tampilkan gambar secara berurutan."

**Isinya:** Gambar berurutan, biasanya JPG, PNG, atau WebP. Beberapa file menyertakan `ComicInfo.xml` berisi metadata. [BiblioFuse](/id/) membaca metadata ini untuk menampilkan informasi yang benar di perpustakaan.

**Dukungan:** Universal. Setiap aplikasi komik di setiap platform mendukung CBZ.

## CBR — Comic Book RAR

CBR singkatan dari Comic Book RAR. Konsep yang sama dengan CBZ, tapi kontainernya arsip RAR bukan ZIP.

RAR populer di komunitas berbagi file saat kebanyakan scan komik dibuat, sehingga rilis lama sering dalam format CBR. Struktur internalnya identik. [BiblioFuse](/id/) mendukung keduanya.

**Perlu dikonversi?** Jika kamu punya koleksi CBR besar, mengonversi ke CBZ sangat masuk akal. Konversinya lossless karena hanya mengarsipkan ulang file yang sama.

**Catatan RAR5:** Beberapa CBR sangat lama menggunakan RAR5 yang tidak bisa dibuka software lama. Mengemas ulang sebagai CBZ selalu memecahkan masalah ini.

## EPUB — Electronic Publication

EPUB adalah standar W3C terbuka untuk e-book teks-berat — novel, non-fiksi. Tidak seperti CBZ dan CBR, kontennya adalah *teks*, bukan gambar.

EPUB adalah arsip ZIP yang berisi:
- **File HTML atau XHTML** — teks bab
- **Stylesheet CSS** — font, spasi, tata letak
- **Gambar** — sampul dan ilustrasi
- **Manifes OPF** — daftar semua file dan urutan baca
- **File NCX atau NAV** — daftar isi

Perbedaan utama dari CBZ:
- **Reflow:** Pembaca mengontrol ukuran font, spasi baris, dan warna latar.
- **Aksesibilitas:** Pembaca layar bisa membaca teks keras-keras.
- **Kemampuan pencarian:** Bisa mencari kata apa pun dalam EPUB.

**DRM:** Banyak EPUB komersial menggunakan DRM Adobe atau FairPlay Apple. EPUB bebas DRM berfungsi di pembaca mana pun, termasuk [BiblioFuse](/id/).

## PDF — Portable Document Format

PDF adalah format tata letak tetap. Berbeda dari EPUB, penulisnya mengontrol tepat di mana setiap elemen berada di setiap halaman. PDF dirancang untuk cetak.

Untuk komik, PDF bisa digunakan tapi tidak ideal: file sering besar dan zoom di ponsel tidak nyaman. Untuk manual teknis dan dokumen yang dipindai, PDF sering menjadi pilihan terbaik.

## Format Mana yang Diunduh?

**Manga atau komik:** CBZ adalah pilihan terbaik. Jika hanya CBR tersedia, unduh CBR — keduanya sama secara praktis.

**Novel dan e-book teks:** EPUB selalu. Dapat mengalir, aksesibel, dan nyaman dibaca di ukuran layar apa pun.

**Buku teknis atau yang dipindai:** PDF jika tata letak penting; EPUB jika sumber menawarkannya.

## Kompatibilitas di BiblioFuse

[BiblioFuse](/id/) membaca semua format ini secara native di iPhone, iPad, dan Mac: CBZ, CBR, ZIP, RAR, EPUB, PDF, dan TXT. Tab Alat menangani konversi dan kompresi langsung di perangkat.

## Catatan tentang Ukuran File

| Format | Ukuran relatif | Alasan |
|--------|---------------|--------|
| CBZ dengan PNG | Terbesar | Gambar lossless |
| CBZ dengan JPEG | Sedang | Kompresi lossy |
| CBZ dengan WebP | Terkecil | Kompresi modern |
| EPUB (teks) | Sangat kecil | Teks terkompresi sangat baik |

Volume manga dalam format PNG CBZ biasanya berukuran 300–400 MB. Volume yang sama dikompresi ke WebP berukuran 40–80 MB — pengurangan 80% tanpa kehilangan kualitas yang terlihat di layar ponsel.

## Pertanyaan yang Sering Diajukan

**Apa perbedaan antara format komik CBZ dan CBR?**
CBZ dan CBR keduanya adalah arsip gambar sekuensial — CBZ menggunakan wadah ZIP dan CBR menggunakan RAR. Gambar di dalamnya identik; hanya format arsip luar yang berbeda. CBZ adalah standar modern karena ZIP bersifat terbuka; CBR ditemukan di rilisan lama. BiblioFuse membaca keduanya tanpa konversi.

**Bisakah membaca file EPUB di aplikasi komik?**
Bisa, jika aplikasi mendukung EPUB secara native. BiblioFuse menangani file EPUB tanpa DRM bersama CBZ dan CBR — kamu bisa menyimpan novel dan novel grafis dalam satu perpustakaan. EPUB adalah format reflow, sehingga ukuran font, spasi baris, dan margin bisa disesuaikan.

**Format apa yang terbaik untuk manga — CBZ atau EPUB?**
CBZ hampir selalu menjadi pilihan terbaik untuk manga. Halaman manga adalah gambar penuh halaman, dan CBZ dirancang khusus untuk itu. Unduh CBZ (atau CBR) kapan pun tersedia untuk komik dan manga.

**Bagaimana cara mengkonversi CBR ke CBZ?**
CBR dan CBZ berisi file gambar yang identik — hanya wadahnya yang berbeda. Kamu bisa mengarsipkan ulang: ekstrak CBR, pilih semua gambar, kompres ke ZIP, dan ganti nama file dari .zip ke .cbz. Tab Alat BiblioFuse juga bisa menangani konversi CBR ke CBZ langsung di iPhone.

**Mengapa file CBZ saya sangat besar?**
File CBZ besar biasanya berisi gambar PNG resolusi tinggi yang tidak terkompresi dan berat. Mengonversi ke WebP pada kualitas 80% biasanya mengurangi ukuran file 75–88% tanpa perubahan yang terlihat di layar ponsel. Alat kompresi bawaan BiblioFuse menangani ini di perangkat.
