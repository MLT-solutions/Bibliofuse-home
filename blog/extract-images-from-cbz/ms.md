# Cara Mengekstrak Gambar daripada Fail CBZ Secara Dalam Talian (Percuma, Tanpa Perisian)

Alat web BiblioFuse membolehkan anda mengekstrak gambar individual daripada fail CBZ terus dalam pelayar — tanpa perisian yang perlu dipasang, tanpa fail yang dimuat naik ke pelayan, tanpa akaun yang diperlukan. Pemprosesan dijalankan sepenuhnya dalam WebAssembly dalam tab anda, jadi komik anda kekal peribadi.

## Bila Anda Memerlukan Gambar daripada CBZ

Fail CBZ ialah arkib ZIP yang mengandungi fail gambar bernombor berturutan — biasanya halaman JPEG atau PNG daripada komik atau manga yang diimbas. Terdapat banyak situasi di mana anda memerlukan fail gambar mentah:

- **Mencetak halaman tertentu:** pencetak anda memerlukan fail gambar, bukan arkib komik
- **Menukar ke format lain:** sesetengah penukar menerima gambar sebagai input
- **Mencipta fan art atau helaian rujukan:** anda mahukan fail halaman asal resolusi penuh
- **Mengarkibkan imbasan berkualiti:** mengekstrak gambar membolehkan pemeriksaan kualiti dan metadata
- **Pembungkusan semula:** memecah CBZ besar kepada fail lebih kecil mengikut arc cerita

## Cara Alat Web BiblioFuse Berfungsi

[BiblioFuse Web](https://bibliofuse.com/ms/webapp/) menggunakan WebAssembly (WASM) untuk menjalankan logik pemprosesan terus dalam tab pelayar anda. Fail anda tidak pernah dihantar ke mana-mana pelayan.

Ini adalah pendekatan yang sama digunakan untuk semua alat web BiblioFuse: penukaran PDF ke CBZ, penggabungan CBZ, pemampatan EPUB, dan kini pengekstrakan gambar.

## Panduan Langkah demi Langkah: Ekstrak Gambar daripada Fail CBZ Secara Dalam Talian

### Langkah 1: Buka Alat Web BiblioFuse

Navigasi ke [aplikasi web BiblioFuse](https://bibliofuse.com/ms/webapp/) dalam mana-mana pelayar moden. Tanpa log masuk, tanpa sambungan, tanpa pendaftaran.

### Langkah 2: Pilih Pengekstrak CBZ

Cari alat **Ekstrak Gambar daripada CBZ** dan klik untuk membuka antara muka pengekstrak.

### Langkah 3: Muatkan Fail CBZ

Klik **Pilih Fail** atau seret fail CBZ ke zon jatuhan. Fail dibaca terus daripada cakera anda tanpa permintaan rangkaian.

### Langkah 4: Pilih Pilihan Pengekstrakan

Pengekstrak menawarkan beberapa pilihan:
- **Semua gambar:** mengekstrak semua fail gambar dalam arkib CBZ
- **Julat halaman:** hanya mengekstrak halaman yang anda tentukan
- **Penapis format:** hanya mengekstrak JPEG, atau hanya PNG

### Langkah 5: Ekstrak dan Muat Turun

Klik **Ekstrak**. Enjin WASM membuka zip CBZ, membaca fail gambar, dan membungkusnya ke dalam arkib ZIP. Pelayar mencetuskan muat turun secara automatik.

### Langkah 6: Ekstrak dan Gunakan Gambar

Buka fail ZIP yang dimuat turun dengan mana-mana pengurus arkib. Anda akan menemukan gambar yang diekstrak bernombor mengikut urutan baca.

## CBZ vs. CBR

Fail CBR menggunakan format RAR. Jika anda mempunyai CBR, tukarkan dahulu ke CBZ (juga tersedia dalam aplikasi web BiblioFuse), kemudian ekstrak gambar daripada CBZ yang terhasil.

## Privasi dan Keselamatan

Kerana pengekstrak berjalan sepenuhnya dalam pelayar anda, tiada pelayan yang menerima atau menyimpan fail anda:
- Koleksi peribadi tidak pernah meninggalkan peranti anda
- Tiada akaun diperlukan
- Tiada had saiz fail yang dikenakan oleh kos pelayan

## Soalan Lazim

**Adakah pengekstrak CBZ BiblioFuse benar-benar percuma?**
Ya. Semua alat web BiblioFuse percuma digunakan tanpa had.

**Format gambar apa yang disokong?**
JPEG, PNG, WebP, GIF, BMP, dan TIFF.

**Bolehkah saya mengekstrak gambar daripada fail CBZ yang dilindungi kata laluan?**
Pertama buang perlindungan kata laluan menggunakan SmartDecrypt, kemudian ekstrak gambar.

**Berapa besar fail CBZ yang boleh diproses?**
Tiada had yang dikuatkuasakan — pemprosesan dihadkan oleh memori yang tersedia dalam pelayar.

**Adakah gambar yang diekstrak akan mengikut urutan baca?**
Ya. Pengekstrak mengekalkan nama fail asal yang menentukan urutan baca.

## Ekstrak Gambar Tanpa Risiko Privasi

[Buka aplikasi web BiblioFuse](https://bibliofuse.com/ms/webapp/) dan ekstrak gambar CBZ dalam beberapa saat, sepenuhnya secara peribadi.
