# Kenapa Fail Komik dan Ebook Sangat Besar — dan Cara Mengatasinya

Kamu menyalin siri manga 50 jilid ke iPhone dan melihat 20 gigabait storan terus lesap. Atau memuat turun satu fail CBZ dan ia sudah 400 MB untuk satu jilid sahaja. Ke mana perginya semua ruang itu?

Jawapannya terletak pada format fail — dan sebaik sahaja kamu faham, menyelesaikan masalah ini hanya mengambil masa kurang daripada seminit.

## CBZ dan EPUB: Kedua-duanya Arkib ZIP yang Menyamar

Fail CBZ ialah arkib ZIP dengan sambungan nama yang berbeza. Tukar nama mana-mana `.cbz` kepada `.zip`, ekstrak, dan kamu akan menemui folder berisi gambar yang dinamakan mengikut urutan bacaan — `001.png`, `002.png`, dan seterusnya. Fail CBR berfungsi dengan cara yang sama tetapi menggunakan RAR berbanding ZIP. Tiada pengekodan proprietari, tiada misteri: hanya gambar di dalam sebuah bekas.

EPUB pula secara struktur serupa. Tukar nama `.epub` kepada `.zip`, ekstrak, dan kamu akan menemui fail HTML (teks bab), lembaran gaya CSS, metadata, serta gambar yang disematkan — kulit buku, ilustrasi, dan foto. EPUB ialah standard terbuka W3C yang disokong oleh semua aplikasi membaca utama.

Kedua-dua format ini direka dengan baik untuk fungsinya. Masalah saiz bukan pada bekasnya — tetapi pada apa yang dimasukkan ke dalamnya.

## Mengapa Gambar PNG Memakan Begitu Banyak Storan

Kebanyakan kumpulan pengimbas dan penerbit ebook menggunakan PNG secara lalai kerana ia tanpa kehilangan: setiap piksel dalam fail yang disimpan adalah sama dengan imbasan asal. Kesetiaan itu ada harganya.

Halaman komik beresolusi tinggi — biasanya 1800 × 2700 piksel dalam warna 24-bit — boleh melebihi 2 MB sebagai PNG. Kebanyakan jilid manga mengandungi antara 180 hingga 220 halaman. Kos storan terkumpul dengan cepat:

| Format jilid | Muka surat | Saiz setiap halaman | Jumlah saiz |
|-------------|-----------|---------------------|------------|
| PNG (tanpa kehilangan) | 200 | ~2 MB | **~400 MB** |
| WebP (termampat) | 200 | ~250 kB | **~50 MB** |
| Storan yang dijimat | | | **87.5%** |

Darabkan dengan siri yang panjang. Perpustakaan manga 50 jilid dalam format PNG mengambil kira-kira **20 GB**. Siri yang sama selepas dimampatkan ke WebP muat dalam **2.5 GB** — penjimatan **17.5 GB** hanya daripada satu siri. Alat seperti [BiblioFuse](/ms/webapp) mengendalikan penukaran ini sepenuhnya pada peranti, tanpa memerlukan sebarang perisian desktop.

## Apa yang Menjadikan WebP Lebih Baik

WebP ialah format imej yang dibangunkan oleh Google yang menghasilkan fail jauh lebih kecil daripada PNG, dan lebih kecil daripada JPEG pada kualiti yang setanding. Pada tetapan kualiti sederhana (sekitar 80–85%), perbezaan visual daripada sumber PNG hampir tidak dapat dilihat pada skrin telefon atau tablet. Komik dan manga sangat sesuai dimampatkan kerana kebanyakan panel menggunakan warna rata dan garisan bersih.

Semua iPhone, iPad, dan peranti Android moden memaparkan WebP secara asli. Kamu tidak mengorbankan kualiti paparan demi storan — kamu hanya menyimpan maklumat visual yang sama dengan cara yang lebih cekap.

## Mengapa BiblioFuse Membina Pemampatan Terus ke Dalam Aplikasi

Penyelesaian lazim — menukar fail di komputer sebelum memuat ke telefon — boleh dilakukan secara teori, tetapi menambah banyak langkah. Kamu memerlukan alat pemprosesan kelompok, tetapan yang betul, cara untuk membungkus semula ZIP, dan kemudian import lagi. Dalam praktiknya, kebanyakan pembaca melangkau semua ini dan hidup dengan perpustakaan yang membengkak.

Ciri **Gabung & Mampat** BiblioFuse direka untuk menghapuskan semua kerumitan itu. Penukaran berlaku sepenuhnya pada peranti — tiada apa yang dimuat naik atau dihantar keluar. Pilih buku, tetapkan tahap kualiti, dan BiblioFuse menguruskan selebihnya: mengekstrak setiap gambar, mengekodkan semula sebagai WebP, dan memasang semula CBZ atau EPUB baharu yang termampat di tempat asal.

**Untuk memampatkan buku:**
1. Tekan lama mana-mana kulit buku dalam perpustakaan dan ketuk **Mampat**.
2. Laraskan gelongsor kualiti — tetapan lalai memberikan keseimbangan saiz dan kualiti yang baik untuk kebanyakan komik.
3. Ketuk **Mampat**. Fail asal akan digantikan apabila selesai.

**Untuk menggabungkan siri:** tekan lama untuk memilih beberapa fail CBZ, kemudian ketuk **Gabung**. BiblioFuse menggabungkannya mengikut urutan bacaan dan memampatkan hasilnya dalam satu langkah.

[Alat Web BiblioFuse](/ms/webapp) menawarkan pemampatan dan penggabungan yang sama dalam mana-mana pelayar — tanpa pemasangan. Sangat berguna apabila kamu menggunakan Windows atau Linux tanpa aplikasi iOS atau Mac.

## Berapa Banyak Storan yang Sebenarnya Boleh Kamu Pulihkan?

Angka 87.5% mungkin terasa abstrak sehingga kamu melihatnya pada perpustakaan sendiri:

| Koleksi | Saiz PNG | Selepas pemampatan | Storan yang dibebaskan |
|--------|---------|-------------------|-----------------------|
| Siri manga 10 jilid | ~4 GB | ~500 MB | **3.5 GB** |
| Siri manga 50 jilid | ~20 GB | ~2.5 GB | **17.5 GB** |
| 500 komik barat | ~50 GB | ~6.25 GB | **43.75 GB** |
| Perpustakaan EPUB bergambar (100 buku) | ~5 GB | ~625 MB | **4.4 GB** |

Pada iPhone 128 GB di mana setiap gigabait berharga, perbezaan ini menentukan sama ada kamu boleh membawa seluruh koleksi atau terpaksa meninggalkan separuh di rumah.

## Bila Perlu Mampatkan dan Bila Perlu Simpan Fail Asal

Pemampatan adalah proses sehala: sebaik sahaja PNG dalam arkib digantikan oleh WebP, data tanpa kehilangan asal hilang selama-lamanya. Untuk bacaan harian, itu pertukaran yang berbaloi. Tetapi jika kamu mengarkibkan imbasan mentah untuk pemuliharaan, atau bekerja dengan karya seni asal yang memerlukan ketepatan piksel, simpan fail asal pada pemacu luaran dan mampatkan hanya salinan yang dibawa setiap hari.

## Soalan Lazim

**Adakah pemampatan menjejaskan kualiti bacaan?**
Pada tetapan lalai, perbezaannya tidak dapat dirasai semasa membaca biasa pada telefon atau tablet. Zum besar pada garisan halus mungkin mendedahkan sedikit kelembutan, tetapi bagi kebanyakan pembaca, hasil yang dimampatkan adalah sama secara visual dengan asalnya.

**Bolehkah EPUB juga dimampatkan?**
Boleh. BiblioFuse memproses EPUB dengan cara yang sama — mengekodkan semula gambar yang disematkan sambil membiarkan teks, CSS, dan struktur bab tidak terjejas.

**Bagaimana jika mahu menyimpan fail asal?**
Buat salinan dalam aplikasi Fail sebelum memampatkan — BiblioFuse menggantikan fail di tempat tanpa sandaran automatik. Kamu juga boleh menggunakan [Alat Web BiblioFuse](/ms/webapp) untuk memuat turun versi yang dimampatkan tanpa menyentuh fail sumber.

**Adakah pemampatan berfungsi tanpa talian?**
Ya — keseluruhan proses berjalan pada peranti kamu. Tiada sambungan internet diperlukan dan tiada fail yang dihantar ke pelayan.
