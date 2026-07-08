# Bagaimana Pencincangan Persepsi Menemui Komik Pendua Walaupun Selepas Penamaan Semula

Anda menamakan semula fail. Anda memampatkan semula arkib. Anda memuat turun jilid yang sama dari sumber berbeza. Mengikut sebarang ukuran biasa, ini kini adalah fail yang "berbeza" — nama berbeza, checksum berbeza, saiz fail berbeza.

Namun, komik di dalamnya adalah sama. Setiap halaman adalah sama. Dan jika anda cuba membersihkan perpustakaan digital anda, pendua yang hampir serupa ini adalah tepat yang terlepas daripada pencari pendua standard.

Inilah masalah yang diselesaikan pencincangan persepsi, dan ia adalah teknik teras [Comic Duplicate Scanner](/en/archive/).

---

## Mengapa Perbandingan Fail Standard Tidak Mencukupi

Kebanyakan alat "pencari fail pendua" mengira **checksum** untuk setiap fail dan menandakan fail yang berkongsi checksum yang sama. Ini berfungsi dengan sempurna untuk salinan tepat.

Tetapi untuk arkib komik, pendekatan ini terlepas pendua paling biasa dalam dunia sebenar:

| Senario | Checksum Sama? | Benar-benar Pendua? |
|---------|---------------|---------------------|
| Salinan dengan nama berbeza | Tidak | Ya |
| Dimampatkan semula dengan kualiti berbeza | Tidak | Ya |
| Dibungkus semula dengan struktur berbeza | Tidak | Berkemungkinan ya |
| Dimuat turun dari dua sumber berbeza | Tidak | Kerap ya |
| Salinan bait demi bait tepat | Ya | Ya |

---

## Apa yang Pencincangan Persepsi Lakukan Sebagai Gantinya

**Cincang persepsi** adalah cap jari pendek yang dikira dari *kandungan visual* imej — bukan bait failnya. Algoritma yang paling banyak digunakan, **pHash**, berfungsi lebih kurang seperti ini:

1. Saiz semula imej ke saiz kecil tetap (contoh: 32×32 piksel)
2. Tukar ke skala kelabu
3. Guna transformasi kosinus diskret (DCT) untuk mengekstrak komponen frekuensi
4. Simpan bahagian frekuensi rendah — ini menangkap struktur keseluruhan
5. Bandingkan setiap nilai dengan median, menghasilkan rentetan bit

Dua imej dengan kandungan visual yang serupa menghasilkan cincang dengan **jarak Hamming** yang rendah.

Dua sifat penting terhasil terus daripada langkah-langkah ini:

- **Resolusi tidak relevan.** Langkah 1 mengubah saiz setiap imej kepada grid tetap yang sama sebelum sebarang pengiraan. Imbasan 1200px dan 3000px daripada halaman yang sama kedua-duanya menjadi lakaran kecil 32×32 yang sama dan menghasilkan hash yang sama.
- **Mod warna tidak relevan.** Langkah 2 menukar kepada skala kelabu sebelum perbandingan. Imbasan berwarna penuh dan imbasan skala kelabu daripada halaman yang sama menghasilkan hash yang hampir sama, kerana algoritma hanya menganalisis struktur luminans, bukan nilai warna.

---

## Cara Comic Duplicate Scanner Menerapkan Ini

[Comic Duplicate Scanner](/en/archive/) menerapkan pencincangan persepsi di peringkat arkib:

1. **Pengekstrakan** — membuka setiap CBZ atau CBR dan membaca imej dalaman
2. **Mencincang setiap halaman** — setiap halaman mendapat cincang persepsi
3. **Perbandingan** — membina indeks persamaan dan mencari arkib yang berkongsi peratusan tinggi halaman yang sepadan
4. **Penilaian** — memberikan keyakinan padanan

Apabila 90% halaman dalam dua arkib sepadan, kemungkinan positif palsu turun hampir kepada sifar.

---

## Kes Sebenar

**Kes 1:** `HxH_v12_en.cbz` dari satu tapak dan `Hunter_X_Hunter_Volume_12.cbz` dari yang lain. Pencincangan persepsi: halaman hampir serupa di semua bab → ditandakan sebagai pendua.

**Kes 2:** CBZ diproses melalui alat pemampatan, mengurangkan setiap JPEG kepada kualiti 80%. Checksum berubah. Pencincangan persepsi: secara visual serupa → dikesan.

**Kes 3:** Satu arkib mempunyai halaman `001.jpg`, yang lain `page_001.jpg`. Pencincangan persepsi tidak melihat nama dalaman → masih dikesan.

---

**Kes 5: Imbasan berwarna lwn. imbasan hitam putih**
Anda mempunyai dua salinan jilid manga yang sama: satu ialah imbasan berwarna daripada edisi digital awal, satu lagi ialah imbasan skala kelabu daripada penerbitan semula yang lebih baharu. Saiz fail berbeza, kedalaman warna berbeza, penampilan visual berbeza. Tetapi kerana dHash menukar kepada skala kelabu sebelum penghasan, kedua-dua salinan direduksi kepada cap jari luminans yang sama → ditandakan sebagai pendua. Ini adalah kes yang hampir semua pengesan pendua lain terlepas pandang sepenuhnya.

## Had Pencincangan Persepsi

**Pengeditan visual yang ketara akan memutuskan padanan.** Tera air ringan atau pemangkasan kecil biasanya tidak menjejaskan pengesanan.

**Imej resolusi sangat rendah tidak boleh dipercayai.**

**Manga dengan gaya seni serupa merentasi jilid.** Positif palsu sesekali mungkin berlaku — antara muka semakan membolehkan anda menyemak lakaran kecil sebelum memadam.

---

## Menggunakan Comic Duplicate Scanner

[Comic Duplicate Scanner](/en/archive/) ialah aplikasi Mac asli yang mengalihkan pendua terpilih ke Tong Sampah (bukan pemadaman kekal).

Setelah perpustakaan anda bersih, padankan dengan [BiblioFuse](/en/) di iPhone untuk satu sumber bacaan yang terkurasi.
