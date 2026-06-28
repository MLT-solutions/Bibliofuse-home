# Cari Foto Pendua di Mac — Termasuk HEIC, WebP dan RAW

[Archive Duplicate Scanner](/ms/) mencari foto pendua di Mac menggunakan perceptual hashing — teknik yang memadankan imej yang identik secara visual walaupun mempunyai nama fail, format atau tetapan mampatan yang berbeza. Ia menyokong HEIC, WebP, JPEG, PNG, TIFF, RAW dan berpuluh-puluh format lain. Aplikasi ini tersedia untuk Mac dan Windows, dan memindahkan pendua ke Tong Sampah dengan selamat, bukannya memadamnya secara kekal.

## Masalah Perpustakaan Foto yang Terus Membesar Tanpa Had

Perpustakaan foto Mac anda kelihatan mudah diurus lima tahun lalu. Kini ia mempunyai 40,000 fail yang tersebar di folder Muat Turun, pemacu sandaran, dan tiga eksport iCloud. Anda mempunyai foto landskap yang sama disimpan sebagai `IMG_4521.HEIC`, `IMG_4521-edited.JPG`, dan `landscape-final.webp`. Anda mempunyai rakaman burst RAW di mana 11 bingkai yang hampir sama terlepas daripada proses pemilihan. Dan setiap penghijrahan perpustakaan — dari iPhoto ke Apple Foto ke Mac baharu — meninggalkan lapisan pendua yang lain.

Alat terbina dalam tidak dapat membantu. Apple Foto mempunyai pencari pendua asas untuk foto yang sudah ada dalam perpustakaannya, tetapi terlepas fail yang tersebar di Finder. Spotlight tidak membandingkan kandungan imej. Pencari fail pendua standard membandingkan hash bait demi bait dan gagal apabila dua fail mempunyai pemampatan JPEG yang berbeza atau salah satunya dieksport semula.

## Mengapa Perceptual Hashing Boleh Mencari Foto Pendua dalam Sebarang Format?

Perceptual hashing melihat bagaimana imej *kelihatan*, bukan apa yang dikatakan baitnya. Archive Duplicate Scanner mengira cap jari visual yang padat untuk setiap foto. Dua imej yang kelihatan sama pada mata manusia menghasilkan cap jari yang sama (atau sangat serupa) — walaupun satu dalam format HEIC dan yang lain JPEG, walaupun satu dieksport semula pada kualiti 85%, dan walaupun seseorang menamakan semula fail tersebut.

Inilah perbezaan utama daripada deduplicator fail generik. Alat generik membandingkan hash SHA-256 — hanya fail yang sama bait demi bait. Perceptual hashing memadankan imej yang secara visual sama tetapi secara teknikal merupakan fail yang berbeza.

## Bagaimana Cara Mencari Foto Pendua di Mac Langkah demi Langkah?

1. **Muat turun dan buka Archive Duplicate Scanner** dari Mac App Store atau laman web pembangun.
2. **Tambah folder foto anda** — seret folder eksport perpustakaan Foto, folder Muat Turun, dan mana-mana pemacu luar yang ingin anda imbas. Anda boleh menambah beberapa folder dalam satu imbasan.
3. **Jalankan imbasan** — aplikasi menggunakan perceptual hashing untuk membuat cap jari setiap imej yang disokong. Perpustakaan dengan 10,000 foto biasanya selesai dalam masa kurang dari dua minit pada Mac dengan cip M.
4. **Semak kumpulan** — pendua muncul dalam kumpulan. Setiap kumpulan menunjukkan nama fail, format, saiz fail, dimensi, dan lakaran kecil visual supaya anda dapat mengesahkan padanan.
5. **Pilih strategi pemadaman** — Archive Duplicate Scanner menawarkan strategi pemilihan automatik: simpan fail terbesar (kualiti tertinggi), simpan yang tertua (asal), atau simpan yang berada dalam folder pilihan. Anda juga boleh memilih secara manual.
6. **Pindah ke Tong Sampah** — aplikasi tidak pernah memadamkan fail secara kekal. Pendua yang dipilih dipindahkan ke Tong Sampah Mac supaya anda boleh memulihkan apa-apa yang dipadamkan secara tidak sengaja.

## Format Foto Apakah yang Disokong?

Archive Duplicate Scanner mengendalikan setiap format yang ditemui oleh jurugambar Mac:

- **HEIC / HEIF** — format lalai iPhone, termasuk fail HDR dan mod Potret
- **JPEG / JPG** — format universal, termasuk eksport semula dan versi yang diedit
- **WebP** — semakin biasa daripada muat turun media sosial dan tangkapan skrin web
- **PNG** — tangkapan skrin dan grafik tanpa kehilangan kualiti
- **TIFF** — imbasan berkualiti tinggi dan eksport berlapis
- **Format RAW** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG, dan lain-lain
- **CBZ / CBR** — arkib komik juga disokong bersama foto

Ciri padanan nama fail kabur mencari kumpulan seperti `percutian-2023.jpg`, `percutian-2023(1).jpg`, dan `percutian-2023-salinan.jpg` dalam beberapa saat, bahkan sebelum perbandingan hash visual dijalankan.

## Tiga Kes Penggunaan Praktikal

**1. Pembersihan selepas penghijrahan**
Selepas setiap penghijrahan Mac, Migration Assistant Apple menyalin fail tetapi tidak mendeduplikasinya. Jika anda pernah berpindah antara Mac lebih daripada sekali, kemungkinan besar anda mempunyai dua atau tiga salinan foto terlama. Jalankan Archive Duplicate Scanner pada folder home anda untuk mencari semuanya.

**2. Pasangan RAW + JPEG**
Banyak kamera — dan mod ProRAW iPhone — menyimpan RAW dan JPEG secara serentak. Selepas mengedit dalam Lightroom atau Capture One, anda sering tidak lagi memerlukan JPEG asal. Archive Duplicate Scanner mengumpulkan fail RAW bersama padanan JPEG-nya supaya anda boleh membersihkan yang lebih tanpa mengisih secara manual mengikut tarikh.

**3. Pengumpulan muat turun media sosial**
Bertahun-tahun menyimpan tangkapan skrin Instagram dan foto yang dimuat turun menghasilkan berpuluh-puluh salinan imej yang sama dalam resolusi berbeza. Perceptual hashing menangkap semuanya, walaupun apabila nama fail adalah rentetan digit rawak yang berbeza.

## Soalan Lazim

### Adakah Archive Duplicate Scanner memadamkan foto secara kekal?

Tidak. Aplikasi memindahkan fail ke Tong Sampah Mac. Tiada apa yang dipadamkan secara kekal sehingga anda mengosongkan Tong Sampah sendiri. Ini memberikan anda jaring keselamatan penuh untuk memulihkan apa-apa yang dipadamkan secara tidak sengaja.

### Bolehkah ia mencari pendua dalam format berbeza, seperti HEIC dan JPEG?

Ya. Perceptual hashing membandingkan kandungan visual, bukan bait fail. Foto yang disimpan sebagai HEIC dan dieksport semula sebagai JPEG akan dikesan sebagai pendua walaupun format fail dan kandungan baitnya benar-benar berbeza.

### Berapa lama masa yang diperlukan untuk mengimbas perpustakaan yang besar?

Pada Mac Apple dengan cip M, perpustakaan dengan 10,000 foto biasanya selesai dalam masa kurang dari dua minit. Perpustakaan dengan lebih 50,000 foto mengambil masa 5–10 minit bergantung pada kelajuan pemacu dan format fail. Fail HEIC dengan metadata HDR mengambil masa sedikit lebih lama untuk didekod.

### Bolehkah ia mencari foto burst RAW yang hampir sama?

Ya, dengan ambang kesamaan yang ditetapkan pada tahap kepekaan yang lebih tinggi. Foto burst dari pemandangan yang sama kelihatan hampir identik dan menghasilkan hash perceptual yang sangat serupa. Anda boleh menyesuaikan kepekaan supaya pengimbas mengumpulkannya bersama, kemudian hanya menyimpan bingkai yang paling tajam.

### Adakah ia berfungsi dengan pemacu luar dan storan rangkaian?

Ya. Anda boleh menambah sebarang folder yang boleh diakses dalam Finder — pemacu dalaman, pemacu USB luar, kad SD, atau volum yang dipasang melalui rangkaian. Imbasan dijalankan secara setempat pada Mac anda; tiada fail dimuat naik ke mana-mana pelayan.

### Adakah Archive Duplicate Scanner tersedia untuk Windows?

Ya. Archive Duplicate Scanner tersedia untuk Mac dan Windows. Versi Windows mempunyai enjin perceptual hashing yang sama dan menyokong format fail yang sama.

## Pulihkan Storan Anda — Tanpa Risiko

Perpustakaan dengan 40,000 foto dan 30% pendua membazirkan berpuluh-puluh gigabait storan. Archive Duplicate Scanner memberikan anda alat untuk membersihkannya dengan selamat — perceptual hashing yang menangkap pendua visual merentas format, strategi pemilihan automatik yang menghapuskan tekaan, dan pemadaman ke Tong Sampah sahaja yang memastikan anda terlindung.

[Muat turun Archive Duplicate Scanner](/ms/) dan mulakan imbasan pertama anda hari ini. Jika anda juga ingin memampatkan atau menukar secara berkelompok koleksi foto anda, [Alat Web BiblioFuse](/ms/webapp/) mengendalikan fail EPUB, CBZ dan PDF sepenuhnya dalam pelayar anda.
