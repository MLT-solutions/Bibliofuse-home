# Bagaimana Perceptual Hashing Menemukan Komik Duplikat Bahkan Setelah Diganti Nama

Anda mengganti nama file. Anda mengompresi ulang arsip. Anda mengunduh volume yang sama dari sumber berbeda. Berdasarkan ukuran standar apa pun, ini sekarang adalah file yang "berbeda" — nama berbeda, checksum berbeda, ukuran file berbeda.

Namun, komik di dalamnya sama. Setiap halaman sama. Dan jika Anda mencoba membersihkan perpustakaan digital, duplikat yang hampir identik ini adalah persis yang lolos dari pencari duplikat standar.

Inilah masalah yang diselesaikan perceptual hashing, dan ini adalah teknik inti [Archive Duplicate Scanner](/en/archive/).

---

## Mengapa Perbandingan File Standar Tidak Cukup

Kebanyakan alat "pencari file duplikat" menghitung **checksum** untuk setiap file dan menandai file yang berbagi checksum yang sama. Ini bekerja sempurna untuk salinan persis.

Tapi untuk arsip komik, pendekatan ini melewatkan duplikat paling umum di dunia nyata:

| Skenario | Checksum Sama? | Benar-benar Duplikat? |
|----------|----------------|----------------------|
| Salinan dengan nama berbeda | Tidak | Ya |
| Dikompres ulang dengan kualitas berbeda | Tidak | Ya |
| Dikemas ulang dengan struktur berbeda | Tidak | Mungkin ya |
| Diunduh dari dua sumber berbeda | Tidak | Sering ya |
| Salinan byte-demi-byte tepat | Ya | Ya |

---

## Apa yang Perceptual Hashing Lakukan Sebagai Gantinya

**Hash perceptual** adalah sidik jari pendek yang dihitung dari *konten visual* gambar — bukan byte filenya. Algoritma yang paling banyak digunakan, **pHash**, bekerja kurang lebih sebagai berikut:

1. Ubah ukuran gambar ke ukuran kecil tetap (mis. 32×32 piksel)
2. Konversi ke grayscale
3. Terapkan transformasi kosinus diskrit (DCT) untuk mengekstrak komponen frekuensi
4. Simpan bagian frekuensi rendah — ini menangkap struktur keseluruhan
5. Bandingkan setiap nilai dengan median, menghasilkan bitstring

Dua gambar dengan konten visual yang mirip menghasilkan hash dengan **jarak Hamming** yang rendah.

---

## Cara Archive Duplicate Scanner Menerapkan Ini

[Archive Duplicate Scanner](/en/archive/) menerapkan perceptual hashing di tingkat arsip:

1. **Ekstraksi** — membuka setiap CBZ atau CBR dan membaca gambar internal
2. **Hash setiap halaman** — setiap halaman mendapat perceptual hash
3. **Perbandingan** — membangun indeks kemiripan dan menemukan arsip yang berbagi persentase tinggi halaman yang cocok
4. **Penilaian** — memberikan kepercayaan pencocokan

Ketika 90% halaman di dua arsip cocok, kemungkinan positif palsu turun mendekati nol.

---

## Kasus Nyata

**Kasus 1:** `HxH_v12_en.cbz` dari satu situs dan `Hunter_X_Hunter_Volume_12.cbz` dari yang lain. Perceptual hashing: halaman hampir identik di semua bab → ditandai sebagai duplikat.

**Kasus 2:** CBZ diproses melalui alat kompresi, mengurangi setiap JPEG ke 80% kualitas. Checksum berubah. Perceptual hashing: secara visual identik → terdeteksi.

**Kasus 3:** Satu arsip memiliki halaman `001.jpg`, yang lain `page_001.jpg`. Perceptual hashing tidak melihat nama internal → tetap terdeteksi.

---

## Batas Perceptual Hashing

**Pengeditan visual signifikan akan memutus pencocokan.** Watermark ringan atau pemotongan kecil biasanya tidak mempengaruhi deteksi.

**Gambar resolusi sangat rendah tidak dapat diandalkan.**

**Manga dengan gaya seni serupa antar volume.** Positif palsu sesekali mungkin terjadi — antarmuka tinjauan memungkinkan Anda memeriksa thumbnail sebelum menghapus.

---

## Menggunakan Archive Duplicate Scanner

[Archive Duplicate Scanner](/en/archive/) adalah aplikasi Mac asli yang memindahkan duplikat terpilih ke Trash (bukan penghapusan permanen).

Setelah perpustakaan Anda bersih, padukan dengan [BiblioFuse](/en/) di iPhone untuk satu sumber bacaan yang terkurasi.
