# Cara Menukar CBR kepada CBZ dalam Talian: Percuma, Tanpa Perisian

Anda mempunyai folder penuh fail CBR — komik dalam format arkib RAR — dan pembaca yang hanya membuka CBZ. Atau anda sedang mengarkibkan koleksi dan mahukan format terbuka yang konsisten. Penyelesaiannya kelihatan mudah: tukar nama sambungan fail dari `.cbr` kepada `.cbz`. Tetapi itu tidak berfungsi.

Fail CBR adalah arkib RAR. Fail CBZ adalah arkib ZIP. Kedua-duanya menggunakan format mampatan yang berbeza di bawahnya — anda tidak boleh hanya menukar nama sambungan fail. Anda perlu mengekstrak gambar dari RAR dan memampat semula sebagai ZIP. [Penukar dalam talian BiblioFuse](https://bibliofuse.com/ms/webapp/) melakukan ini dalam pelayar anda, tanpa sebarang fail dimuat naik ke mana-mana pelayan.

## CBR vs CBZ: Apakah Perbezaan Sebenarnya?

Kedua-dua CBR dan CBZ adalah format arkib komik. Kedua-duanya mengandungi urutan fail imej (biasanya JPG atau PNG) yang ditunjukkan oleh pembaca secara berurutan untuk mensimulasikan pembacaan komik.

Perbezaannya terletak pada mampatan asas:

| Format | Jenis arkib | Standard terbuka? |
|--------|------------|-----------------|
| CBZ | ZIP | Ya |
| CBR | RAR | Tidak (proprietari) |

RAR adalah format proprietari yang dibangunkan oleh Eugene Roshal. Membuka fail RAR memerlukan perisian WinRAR rasmi atau perpustakaan yang melaksanakan spesifikasi RAR — dan perpustakaan itu mesti disertakan secara eksplisit dalam setiap pembaca. Banyak pembaca moden, termasuk alat berasaskan pelayar, hanya menyokong CBZ berasaskan ZIP kerana spesifikasi ZIP adalah terbuka dan dilaksanakan secara meluas.

CBZ menjadi standard de facto untuk komik digital sebahagiannya kerana ZIP bebas royalti dan rentas platform. Setiap sistem operasi boleh membuka fail ZIP tanpa perisian pihak ketiga. Jika anda mengarkibkan koleksi untuk jangka panjang, CBZ adalah pilihan yang lebih selamat.

## Cara Penukaran Berfungsi

Menukar CBR kepada CBZ melibatkan tiga langkah:

1. Ekstrak gambar dari CBR (arkib RAR)
2. Masukkan gambar yang sama ke dalam arkib ZIP baru
3. Tukar nama sambungan `.zip` kepada `.cbz`

Alat dalam talian BiblioFuse menjalankan ketiga-tiga langkah ini dalam pelayar menggunakan WebAssembly. Fail anda tidak pernah dimuat naik — pengekstrakan, pemampatan semula, dan muat turun semuanya berlaku secara setempat di peranti anda.

## Langkah demi Langkah: Tukar CBR kepada CBZ dalam Talian

1. Pergi ke [bibliofuse.com/ms/webapp/](https://bibliofuse.com/ms/webapp/)
2. Buka alat **Tukar** dari bar alat.
3. Klik **Pilih fail** atau seret fail `.cbr` anda ke zon jatuhan.
4. Alat mengekstrak gambar, membuat arkib ZIP baru, dan memuat turun fail `.cbz` secara automatik.

Untuk penukaran kelompok — beberapa fail CBR sekaligus — pilih semua fail dalam pemilih fail. Setiap fail diproses dan dimuat turun secara berasingan. Tiada had giliran yang dikenakan oleh alat, walaupun fail yang sangat besar (400+ MB) mungkin mengambil masa lebih lama bergantung pada kuasa pemprosesan peranti anda.

## Mengapa Penukaran Berasaskan Pelayar Bersifat Peribadi

Penukaran dijalankan sepenuhnya dalam pelayar anda melalui WebAssembly (WASM). Ini adalah teknologi yang sama yang membolehkan permainan dan editor video berjalan dalam pelayar tanpa plugin — kerja intensif pengiraan yang dilaksanakan secara asli dalam kotak pasir pelayar.

Apabila menggunakan [alat web BiblioFuse](https://bibliofuse.com/ms/webapp/):

- Fail CBR anda dibaca ke dalam memori pelayar
- Gambar diekstrak dalam memori
- Fail ZIP baru dibina dalam memori
- ZIP dimuat turun ke peranti anda

Pada bila-bila masa, tiada data meninggalkan mesin anda. Tiada panggilan pelayan semasa penukaran. Anda boleh mengesahkan ini dengan membuka pemeriksa rangkaian pelayar (F12 → Rangkaian) dan memerhati: satu-satunya permintaan adalah pemuatan halaman awal. Tiada muat naik muncul.

Ini penting jika koleksi komik anda termasuk kandungan berlesen, imbasan peribadi, atau apa-apa lagi yang anda lebih suka tidak dimuat naik ke pelayan pihak ketiga.

## Menukar Fail CBR di iPhone atau iPad

Alat web BiblioFuse juga berfungsi pada pelayar mudah alih. Pergi ke [bibliofuse.com/ms/webapp/](https://bibliofuse.com/ms/webapp/) dalam Safari atau Chrome di iPhone atau iPad.

Pada iOS, ketik **Pilih fail** dan navigasikan ke fail CBR anda dalam aplikasi Fail, iCloud Drive, atau pembekal storan awan yang disambungkan. Fail CBZ yang dimuat turun pergi ke folder Muat Turun anda, dari sana anda boleh berkongsi terus ke [BiblioFuse](https://bibliofuse.com/ms/) untuk dibaca.

## Selepas Penukaran: Membaca Fail CBZ dalam BiblioFuse

BiblioFuse di iPhone membaca fail CBZ secara asli — tiada penukaran lanjut diperlukan. Untuk membaca fail yang ditukar:

1. Tukar CBR kepada CBZ menggunakan alat web di Mac atau iPhone anda.
2. Pindahkan fail CBZ ke iPhone melalui Pemindahan Wi-Fi atau AirDrop.
3. Import ke BiblioFuse dengan memilih fail dalam aplikasi Fail dan berkongsi ke aplikasi.

Nota: BiblioFuse juga membaca fail CBR terus di iPhone — ia mengendalikan pengekstrakan RAR secara asli. Sebab utama untuk menukar adalah jika anda mengarkibkan fail, berkongsinya dengan orang lain, atau menggunakan alat lain dalam aliran kerja yang memerlukan CBZ secara khusus.

## Soalan Lazim

**Bolehkah saya menukar beberapa fail CBR sekaligus?**

Ya. Pilih semua fail CBR dalam pemilih fail dan alat memproses setiap satu. Fail dimuat turun secara individu — anda mendapat satu `.cbz` bagi setiap `.cbr`. Jika selepas itu ingin menggabungkannya menjadi satu jilid, gunakan alat gabung CBZ.

**Adakah kualiti imej berubah semasa penukaran?**

Tidak. Imej dalam arkib tidak dikodkan semula. Penukaran mengekstrak fail JPG atau PNG asal dan meletakkannya ke dalam ZIP baru tanpa menyentuh data imej. CBZ yang ditukar adalah sama secara piksel dengan CBR asal.

**Bagaimana jika fail CBR dilindungi kata laluan?**

Fail CBR yang dilindungi kata laluan tidak boleh dibuka tanpa kata laluan. Alat web tidak boleh memintas perlindungan kata laluan. Jika CBR anda disulitkan, buka kuncinya dahulu — SmartDecrypt boleh membuka kunci secara kelompok fail CBZ, PDF, dan ZIP yang dilindungi kata laluan di iPhone dan Mac.

**Fail CBR saya telah ditukar tetapi CBZ tidak boleh dibuka — apa yang berlaku?**

Sesetengah fail berlabel `.cbr` sebenarnya adalah arkib ZIP (dinamakan semula dari `.cbz` atau dibuat oleh perisian yang menggunakan ZIP secara lalai). Jika penukaran menghasilkan fail yang tidak boleh dibuka dalam pembaca anda, cuba namakan semula `.cbr` asal kepada `.zip` dan semak sama ada ia sudah menjadi arkib ZIP. Mungkin anda hanya perlu menamakan semulanya terus kepada `.cbz` tanpa penukaran.

**Adakah terdapat had saiz fail?**

Tiada had yang dikenakan pelayan kerana tiada fail yang pernah dimuat naik. Had praktikal adalah RAM yang tersedia di peranti anda — fail CBR yang sangat besar (1 GB+) boleh menyebabkan pelayar berjalan perlahan pada peranti dengan memori terhad. Untuk kebanyakan fail komik di bawah 200 MB, penukaran selesai dalam beberapa saat.

## Kesimpulan Utama

CBR dan CBZ kelihatan serupa tetapi menggunakan format arkib yang berbeza di bawahnya. Menukar CBR kepada CBZ bermaksud mengarkibkan semula imej komik dari RAR ke format ZIP — [alat dalam talian BiblioFuse](https://bibliofuse.com/ms/webapp/) melakukan ini sepenuhnya dalam pelayar anda tanpa memerlukan muat naik fail. Kualiti imej terpelihara, proses ini bersifat peribadi, dan fail CBZ yang dihasilkan berfungsi dalam mana-mana pembaca yang menyokong format ZIP terbuka.
