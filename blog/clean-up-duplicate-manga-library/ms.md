# Cara Membersihkan Koleksi Manga Pendua dengan Bijak

Anda membuka folder manga dan perasan sesuatu yang pelik: jilid 47 *One Piece* ada tiga kali — satu fail bernama `one_piece_v47.cbz`, satu lagi `OP_47_HQ.cbz`, dan yang ketiga tersembunyi dalam subfolder berlabel "backup_old". Anda tahu ada masalah. Anda cuma belum tahu betapa teruknya.

Bagi kebanyakan pembaca manga, fail pendua terkumpul secara senyap selama bertahun-tahun daripada muat turun pelbagai sumber, pemindahan arkib antara pemacu, dan sandaran yang tidak pernah dibersihkan. Hasilnya ialah ruang storan yang terbuang, kekeliruan semasa membaca, dan tiada cara mudah untuk menentukan versi mana yang paling berkualiti.

Panduan ini menerangkan aliran kerja praktikal untuk mencari, menyemak, dan membuang manga pendua menggunakan [Archive Duplicate Scanner](/en/) — utiliti Mac yang direka khusus untuk masalah ini.

---

## Sebab Perpustakaan Manga Jadi Berselerak

Fail pendua manga bukan berlaku secara rawak. Mereka mengikuti corak yang boleh diramal:

**Pelbagai sumber, nama fail berbeza.** Anda memuat turun jilid 10 daripada satu kumpulan bertahun-tahun lalu, kemudian memuat turunnya semula daripada tapak lain dengan kualiti imej yang lebih baik. Kandungan yang sama, nama fail yang sama sekali berbeza.

**Arkib yang dimampat semula.** Seseorang menamakan semula fail di dalam CBZ, memampatkannya semula dengan tetapan kualiti berbeza, dan mengedarkannya semula. Imej adalah sama dari segi piksel, tetapi checksum arkib berbeza sepenuhnya.

**Salinan sandaran yang tertinggal.** Anda memindahkan perpustakaan ke pemacu baru dan menyimpan folder lama "berjaga-jaga". Enam bulan kemudian, anda lupa ia wujud. Kini anda mempunyai salinan lengkap kedua 500 jilid.

Pencari fail pendua standard tidak akan mengesan kebanyakan kes ini kerana mereka membandingkan checksum fail. Anda memerlukan alat yang memahami apa yang ada *di dalam* arkib.

---

## Apa yang Archive Duplicate Scanner Lakukan Berbeza

[Archive Duplicate Scanner](/en/) menggunakan **pencincangan persepsi** untuk membandingkan imej sebenar di dalam arkib CBZ dan CBR anda. Daripada bertanya "adakah dua fail ini sama bait demi bait?", ia bertanya "adakah dua arkib ini mengandungi halaman komik yang sama?"

Ini bermakna ia mengesan fail pendua yang telah:

- Dinamakan semula (nama fail berbeza, kandungan sama)
- Dimampat semula dengan tahap kualiti berbeza
- Dibungkus semula dengan struktur dalaman berbeza
- Disalin ke folder atau pemacu berbeza

---

## Langkah demi Langkah: Membersihkan Perpustakaan Manga

### Langkah 1: Imbas folder perpustakaan

Buka Archive Duplicate Scanner dan tambah folder manga anda. Anda boleh seret dan lepas folder terus ke aplikasi.

Pengimbas membaca setiap fail CBZ dan CBR, mengekstrak imej, dan menjana cincang persepsi untuk setiap halaman. Semua berlaku sepenuhnya pada Mac anda tanpa sambungan rangkaian diperlukan.

### Langkah 2: Semak pasangan yang sepadan

Selepas pengimbasan selesai, Archive Duplicate Scanner menunjukkan pasangan yang sepadan bersebelahan dengan pratonton lakaran kecil, saiz fail, dan peratusan persamaan.

### Langkah 3: Pilih apa yang hendak dibuang

Strategi biasa: simpan fail yang lebih besar (biasanya resolusi lebih tinggi) atau versi daripada sumber yang dipercayai.

### Langkah 4: Alih fail pendua ke Tong Sampah

Archive Duplicate Scanner mengalihkan fail ke Tong Sampah — bukan pemadaman kekal. Anda boleh memulihkan fail jika diperlukan.

---

## Tips Mengekalkan Perpustakaan Bersih

**Tetapkan satu folder "autoriti".** Simpan perpustakaan terkurasi di satu tempat.

**Imbas selepas setiap sesi muat turun besar.** Jalankan Archive Duplicate Scanner selepas memuat turun kelompok jilid baru.

**Gunakan [BiblioFuse](/en/) untuk membaca daripada folder terkurasi.** Apabila melakukan penstriman perpustakaan Mac ke iPhone atau iPad menggunakan BiblioFuse, anda membaca daripada satu sumber kebenaran.

---

## Soalan Lazim

**Adakah Archive Duplicate Scanner akan memadamkan fail saya secara automatik?**
Tidak. Ia mengalihkan fail ke Tong Sampah, bukan pemadaman kekal.

**Format apa yang disokong?**
CBZ, CBR, dan arkib imej.

**Dua fail saya mempunyai checksum yang sama sekali berbeza — adakah ia masih akan mencari padanan?**
Ya. Archive Duplicate Scanner menggunakan pencincangan persepsi pada imej di dalam setiap arkib, bukan checksum fail.
