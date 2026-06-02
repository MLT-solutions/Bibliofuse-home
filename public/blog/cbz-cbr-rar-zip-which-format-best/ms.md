# CBZ, CBR, RAR, ZIP — Format Arkib Komik Mana yang Patut Digunakan?

Kamu baru sahaja memuat turun sekumpulan komik — separuh dalam format `.cbz`, beberapa dalam `.cbr`, dan satu fail ganjil rupanya `.rar` biasa. Kamu buka dalam aplikasi baca komik dan semuanya berfungsi — tapi sekarang kamu tertanya-tanya: adakah format koleksi itu penting? Perlukah kamu tukar semua ke satu format? Dan apa sebenarnya bezanya?

Berikut penjelasan mudah tentang setiap format arkib komik utama, bila menggunakan mana satu, dan mengapa [BiblioFuse](https://bibliofuse.com/ms/) membaca semua tanpa masalah.

## Apa Itu Format Arkib Komik

Tiada satu pun daripada format ini yang merupakan format khas untuk komik. CBZ, CBR, ZIP dan RAR semuanya adalah kontainer arkib serba guna. Isinya hanyalah folder berisi fail imej — biasanya JPEG atau PNG, semakin kerap WebP. Aplikasi baca komik hanya mengekstrak arkib dalam ingatan dan memaparkan imej mengikut urutan.

Ini bermakna pilihan format hampir sepenuhnya bergantung pada **algoritma pemampatan** dan **keserasian ekosistem**, bukan pada sebarang ciri yang direka khas untuk komik.

## CBZ — Pilihan Terbaik untuk Kebanyakan Koleksi

CBZ ialah arkib ZIP yang dinamakan semula dengan sambungan `.cbz`. Itu sahaja. Ekstrak fail CBZ dan kamu akan mendapat folder berisi imej.

**Mengapa CBZ adalah pilihan lalai terbaik:**

- ZIP bersifat terbuka, bebas royalti, dan disokong secara natif oleh setiap sistem pengendalian dan alat arkib
- macOS, Windows dan Linux boleh membuka fail ZIP tanpa perisian tambahan
- Sokongan baca/tulis mudah dilaksanakan, jadi hampir setiap aplikasi baca komik menyokong CBZ
- Tiada masalah paten atau lesen, tidak seperti RAR
- Mudah diubah suai — tambah, padam atau susun semula halaman tanpa memampatkan semula keseluruhan arkib

**Pertukaran pemampatan:** ZIP menggunakan pemampatan Deflate, yang pantas tetapi bukan yang paling cekap. Untuk arkib komik yang sudah mengandungi imej JPEG termampat, perbezaan saiz fail berbanding RAR biasanya kurang daripada 5%. Untuk arkib imej PNG, RAR boleh menjimatkan 10–20%, tetapi PNG itu sendiri biasanya punca utama saiz fail yang besar.

**Kesimpulan:** Jika kamu membina atau merip koleksi dari awal, gunakan CBZ.

## CBR — Serasi Meluas tetapi Lebih Lemah Secara Teknikal

CBR ialah arkib RAR yang dinamakan semula dengan sambungan `.cbr`. RAR ialah format proprietari yang dicipta oleh Eugene Roshal — "RAR" dalam WinRAR. Ia mencapai pemampatan yang sedikit lebih baik daripada ZIP, terutamanya untuk format imej tidak termampat seperti PNG.

**Masalah dengan CBR:**

- RAR bersifat proprietari. Mencipta fail RAR memerlukan salinan berlesen WinRAR atau RAR untuk Unix
- Pustaka sumber terbuka UnRAR boleh membaca fail RAR tetapi tidak boleh menciptanya
- RAR 5 memperkenalkan format pengepala baharu yang masih tidak dapat dikendalikan oleh sesetengah aplikasi lama
- Memproses semula atau mengedit arkib CBR memerlukan alat tambahan

**Bila kamu akan menemui CBR:** Kebanyakan fail CBR yang beredar berasal dari awal hingga pertengahan tahun 2000-an apabila WinRAR adalah pengarkib Windows yang dominan. Keluaran baharu jarang menggunakan CBR kerana tiada manfaat bermakna berbanding CBZ.

**Perlukah tukar CBR ke CBZ?** Jika storan terhad dan kamu mempunyai banyak arkib CBR berasaskan PNG, penukaran boleh menjimatkan ruang. Untuk kebanyakan koleksi berasaskan JPEG, perbezaan saiznya boleh diabaikan dan penukaran tidak berbaloi. [BiblioFuse](https://bibliofuse.com/ms/) membaca CBR secara natif — kamu tidak perlu menukar hanya untuk membaca.

## RAR dan ZIP — Format Asas

Fail `.rar` dan `.zip` biasa berfungsi sama seperti CBR dan CBZ apabila dibuka dalam aplikasi baca komik. Satu-satunya perbezaan ialah sambungan fail — aplikasi baca komik melihat sambungan untuk menentukan cara mengendalikan fail, bukan format dalaman.

Sesetengah pengimbas dan ripper lama menyimpan fail dengan sambungan arkib asal dan bukannya menamakan semula ke `.cbz` atau `.cbr`. Kamu mungkin perlu menamakan semula, atau menggunakan aplikasi yang menyokong ZIP/RAR biasa. BiblioFuse di iOS menyokong fail `.zip` dan `.rar` secara terus — tiada penukaran nama diperlukan.

## CB7 dan CBT — Format Minoriti

**CB7** ialah arkib 7-Zip (`.7z`) yang dinamakan semula kepada `.cb7`. Pemampatan LZMA2 dari 7-Zip jauh lebih baik daripada ZIP dan RAR untuk data yang boleh dimampatkan seperti fail teks, tetapi komik kebanyakannya adalah imej JPEG yang sudah termampat, jadi penjimatan saiz sebenar adalah kecil. Sokongannya kurang universal.

**CBT** ialah arkib TAR yang dinamakan semula kepada `.cbt`. TAR langsung tidak memampatkan — ia hanya menggabungkan fail. CBT kadangkala ditemui dalam arkib dari sumber Linux. Cepat diekstrak tetapi menghasilkan fail yang lebih besar.

Tiada satu pun format ini mendapat penggunaan bermakna. Kekalkan CBZ kecuali ada sebab khusus.

## PDF — Bukan Arkib Komik, tetapi Biasa Digunakan

PDF adalah format dokumen, bukan arkib imej. Komik yang disimpan sebagai PDF menggunakan imej terbenam (atau, dalam buku yang diimbas, halaman yang dirasterkan), tetapi format itu menambah overhead susun atur dan biasanya tidak boleh diedit halaman demi halaman tanpa alat khusus.

PDF biasa digunakan untuk komik digital yang dijual oleh penerbit dan untuk jilid manga yang diimbas. BiblioFuse membaca PDF, tetapi pengalaman membaca PDF berasaskan imej secara amnya lebih buruk daripada CBZ yang setara — lebih perlahan untuk dilayari, tiada metadata setiap halaman, dan saiz fail yang lebih besar setiap imej.

Jika kamu mempunyai PDF komik dan ingin menukarnya ke CBZ, [alat web BiblioFuse](https://bibliofuse.com/ms/webapp/) berjalan sepenuhnya dalam pelayar tanpa muat naik diperlukan.

## Jadual Perbandingan Format

| Format | Kontainer | Pemampatan | Cipta bebas | Sokongan universal | Terbaik untuk |
|--------|-----------|------------|-------------|---------------------|----------------|
| CBZ | ZIP | Deflate | ✅ Ya | ✅ Ya | Koleksi baharu, ripping |
| CBR | RAR | RAR/RAR5 | ⚠️ Perlu WinRAR | ✅ Kebanyakan aplikasi | Arkib lama |
| ZIP | ZIP | Deflate | ✅ Ya | ✅ Ya | Aplikasi yang menyokong ZIP biasa |
| RAR | RAR | RAR/RAR5 | ⚠️ Perlu WinRAR | ✅ Kebanyakan aplikasi | Arkib lama |
| CB7 | 7-Zip | LZMA2 | ✅ Ya | ⚠️ Separa | Eksperimen pemampatan tinggi |
| CBT | TAR | Tiada | ✅ Ya | ⚠️ Separa | Arkib dari Linux |
| PDF | PDF | Pelbagai | ✅ Ya | ✅ Ya | Komik penerbit bebas DRM |

## Cara BiblioFuse Mengendalikan Semua Format Ini

[BiblioFuse untuk iPhone dan iPad](https://bibliofuse.com/ms/) membaca CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB dan PDF secara natif. Kamu tidak perlu menukar koleksi sebelum mengimport.

Semua pemprosesan berlaku pada peranti. Tiada fail dimuat naik ke pelayan. Untuk perpustakaan pelbagai format yang besar, BiblioFuse mengatur fail mengikut siri dan menjejaki kemajuan membaca setiap buku menggunakan penyegerakan iCloud — tanpa mengira sama ada format asasnya CBZ atau CBR.

Tab Alat dalam BiblioFuse membolehkan kamu menukar antara format terus pada iPhone. Pilih arkib CBR, ketuk Tukar, pilih CBZ — aplikasi akan mengemas semula arkib tanpa meninggalkan aplikasi.

## Cadangan Praktikal

**Memulakan koleksi baharu dari awal:** Gunakan CBZ. Terbuka, disokong secara universal dan mudah digunakan.

**Koleksi CBR sedia ada:** Jangan tukar melainkan ada sebab khusus (ruang cakera, alat yang tidak menyokong CBR). CBR berfungsi baik dalam BiblioFuse dan setiap aplikasi moden.

**Perpustakaan pelbagai format:** Jangan susah payah menyeragamkan semata-mata untuk estetik. Aplikasi baca komik yang mengendalikan pelbagai format — seperti BiblioFuse — menghapuskan keperluan untuk mengekalkan koleksi satu format.

**PDF komik dari penerbit:** Simpan sebagai PDF melainkan kamu ingin mengedit atau menggabungkan jilid — dalam kes ini menukar ke CBZ melalui alat web BiblioFuse adalah wajar.

Perdebatan format jauh kurang penting berbanding memiliki aplikasi yang mengendalikan semuanya. Sebaik sahaja kamu ada itu, kontainernya tidak kelihatan lagi.
