# Cara Membuat Sandaran Perpustakaan Komik di Mac: Pemacu Luaran, NAS dan Pilihan Awan

BiblioFuse menyimpan komik dan e-buku anda — EPUB, CBZ, CBR, PDF, ZIP, RAR dan TXT — pada iPhone, iPad dan Mac, serta menstrim perpustakaan Mac anda terus ke iPhone melalui Wi-Fi tanpa menyalin fail. Untuk membuat sandaran perpustakaan komik Mac anda, anda boleh menggunakan Time Machine dengan pemacu luaran atau NAS, menyalin fail ke storan awan seperti iCloud Drive atau Dropbox, atau menggunakan mana-mana alat sandaran yang mencerminkan folder standard. Kemajuan membaca BiblioFuse disegerak secara automatik melalui iCloud supaya tempat anda dalam setiap buku sentiasa terpelihara.

## Mengapa Membuat Sandaran Perpustakaan Komik Anda Sangat Penting

Bayangkan senario ini: anda telah menghabiskan lima tahun memuat turun pembelian yang sah, mengimbas koleksi fizikal dan mengkurasi ratusan jilid dalam CBZ, CBR, EPUB dan PDF. Suatu pagi Selasa, pemacu dalaman Mac anda rosak. Tanpa amaran. Tanpa peluang kedua. Semuanya hilang.

Atau mungkin anda sedang naik taraf ke Mac baharu dan tidak pasti sama ada Migration Assistant akan memindahkan perpustakaan anda dengan betul, atau sama ada anda perlu mencari fail yang tersebar di folder-folder yang anda samar-samar ingat pernah dicipta pada 2021.

Dalam mana-mana kes, strategi sandaran yang betul bukanlah pilihan apabila perpustakaan anda layak dilindungi.

## Mengapa Perpustakaan Komik Lebih Sukar Diganti Daripada yang Anda Sangka

Muzik dan foto mempunyai perkhidmatan penstriman dan penyegerakan awan sebagai jaring keselamatan. Komik dan manga berbeza. Fail bebas DRM — rip CBZ yang anda beli, novel grafik EPUB dari Humble Bundle, doujinshi yang anda susah payah temui — tidak dapat digantikan begitu hilang. Penerbit tidak mengekalkan perpustakaan muat turun selama-lamanya. Arkib terjemahan peminat hilang. Imbasan fizikal yang anda buat sendiri tidak boleh diimbas semula.

Koleksi komik digital yang serius dengan mudah boleh mencapai 50 GB, 200 GB atau lebih. Itu lebih besar daripada kebanyakan perpustakaan foto dan jauh lebih besar daripada perpustakaan muzik biasa. Saiz fail yang besar menjadikan penghapusan tidak sengaja lebih membahayakan: anda tidak akan menyedari satu CBZ yang hilang dalam folder berisi 800 jilid sehingga anda mencarinya tiga bulan kemudian.

## Cara Membuat Sandaran Perpustakaan Komik di Mac

Kaedah-kaedah berikut berfungsi secara bebas atau bersama-sama. Menggunakan dua kaedah — setempat dan awan — memberikan lebihan.

### Kaedah 1: Time Machine (Disyorkan untuk Kebanyakan Pengguna)

Time Machine adalah cara paling mudah untuk membuat sandaran keseluruhan Mac anda, termasuk perpustakaan komik.

1. Sambungkan HDD luaran, SSD atau NAS ke Mac anda.
2. Buka **Tetapan Sistem → Umum → Time Machine**.
3. Klik **Tambah Cakera Sandaran** dan pilih pemacu luaran atau NAS anda.
4. Time Machine membuat sandaran secara automatik setiap jam dan menyimpan petikan setiap jam selama 24 jam, petikan harian selama sebulan, dan petikan mingguan sehingga cakera penuh.

Time Machine bersifat berversi, jadi jika anda tidak sengaja memadamkan jilid atau menimpa folder, anda boleh memulihkan versi tepat dari tarikh ia masih baik. Tiada konfigurasi diperlukan selain persediaan awal.

### Kaedah 2: Salin Manual ke Pemacu Luaran

Bagi pembaca yang mahukan salinan perpustakaan yang mudah alih dan berdikari, salin manual ke pemacu luaran adalah cepat dan tidak memerlukan perisian.

1. Buka **Finder** dan navigasi ke folder perpustakaan BiblioFuse anda. Lokasi lalai ialah `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, tetapi anda mungkin telah menunjuknya ke folder tersuai.
2. Pilih folder dan seretnya ke pemacu luaran anda.
3. Ulangi ini setiap kali anda menambah bilangan jilid baharu yang ketara.

Kaedah ini paling baik digabungkan dengan Time Machine daripada digunakan sendirian. Salinan manual memberikan anda cakera mudah alih yang boleh dibawa ke luar tapak; Time Machine memberikan sejarah berversi.

### Kaedah 3: Storan Awan (iCloud Drive, Dropbox, Google Drive)

Storan awan adalah ideal jika anda ingin perpustakaan boleh diakses di beberapa Mac atau sebagai sandaran di luar tapak.

**iCloud Drive:**
1. Pindahkan folder perpustakaan komik anda ke `~/Library/Mobile Documents/com~apple~CloudDocs/` (folder iCloud Drive anda dalam Finder).
2. Fail disegerak secara automatik ke pelayan Apple dan ke mana-mana Mac lain yang log masuk dengan Apple ID yang sama.
3. Aktifkan **Optimumkan Storan Mac** dalam tetapan iCloud hanya jika Mac anda mempunyai ruang cakera yang terhad — jika tidak, simpan salinan setempat penuh.

**Dropbox atau Google Drive:**
1. Pindahkan folder perpustakaan ke folder Dropbox atau Google Drive pada Mac anda.
2. Klien desktop menyegerak perubahan secara automatik.
3. Sila ambil perhatian bahawa perpustakaan besar (100 GB+) akan menggunakan sebahagian besar kuota storan awan anda.

Penyegerakan awan bukan pengganti sandaran setempat. Jika anda tidak sengaja memadamkan fail, tong sampah awan biasanya hanya menyimpannya selama 30 hari.

### Kaedah 4: NAS (Storan Bersambung Rangkaian)

NAS adalah penyelesaian terbaik untuk koleksi besar. Peranti dari Synology, QNAP atau pengeluar serupa berada di rangkaian rumah anda dan menyediakan storan berlebihan berbilang terabait.

1. Mount perkongsian NAS dalam Finder: **Pergi → Sambung ke Pelayan** dan masukkan `smb://[IP-NAS]/[nama-perkongsian]`.
2. Gunakan **rsync** untuk penyegerakan automatik. Buka Terminal dan jalankan:

```
rsync -av --delete ~/laluan/ke/perpustakaan-komik/ /Volumes/NAS-Share/perpustakaan-komik/
```

3. Jadualkan arahan ini sebagai tugas cron harian atau gunakan alat seperti **Hazel** atau **Automator** untuk mencetusnya secara automatik.

NAS dengan lebihan RAID bermakna walaupun satu pemacu dalam tatasusunan gagal, data anda selamat. Gabungkan dengan Time Machine yang menunjuk ke perkongsian NAS untuk mendapatkan yang terbaik dari kedua-dua dunia: lebihan dan pengurusan versi.

### Memahami Mac Home Library dalam BiblioFuse

[BiblioFuse](/ms/) merangkumi ciri Mac Home Library yang menstrim komik dari folder di Mac anda terus ke iPhone atau iPad melalui Wi-Fi — tanpa menyalin fail, tanpa penyegerakan, tanpa menggunakan storan pada peranti.

Ini adalah ciri penstriman, bukan ciri sandaran. Fail berada di Mac anda. Jika pemacu Mac anda gagal, iPhone tidak mempunyai apa-apa untuk distrim. **Anda masih perlu membuat sandaran folder sumber di Mac anda** menggunakan satu atau lebih kaedah di atas.

Untuk mencari folder yang distrim BiblioFuse, buka BiblioFuse pada Mac anda dan semak **Tetapan → Home Library**. Laluan tersebut adalah apa yang perlu anda sertakan dalam strategi sandaran anda.

## Petua Praktikal untuk Mengekalkan Perpustakaan Anda Teratur

**Gunakan Finder untuk mencari folder perpustakaan.** Pada Mac, tekan **⌘ + Ruang** dan taip `~/Library/Containers/com.modernlogic.bibliofuse` untuk melompat terus ke bekas aplikasi. Fail anda berada dalam subfolder `Data/Documents/`.

**Gunakan rsync untuk sandaran NAS tambahan.** Flag `--delete` memastikan salinan NAS anda mencerminkan Mac anda dengan tepat, membuang jilid yang telah anda padamkan secara setempat. Jalankan mingguan atau selepas import pukal.

**Gunakan iCloud Drive untuk sandaran luar tapak automatik.** Jika perpustakaan anda kurang daripada 50 GB dan anda mempunyai pelan iCloud+, menyimpan perpustakaan dalam iCloud Drive adalah sandaran luar tapak yang paling sedikit geserannya yang tersedia pada Mac.

**Asingkan kemajuan membaca daripada fail anda.** [BiblioFuse](/ms/) menyegerak kemajuan membaca melalui iCloud secara automatik — anda tidak perlu membuat sandaran ini secara berasingan. Fokuskan strategi sandaran anda pada fail sumber itu sendiri.

## Soalan Lazim

**Di mana BiblioFuse menyimpan komik saya di Mac?**
Secara lalai, fail yang diuruskan oleh BiblioFuse di Mac disimpan dalam `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Jika anda menunjuk aplikasi ke folder tersuai, folder tersebut adalah akar perpustakaan anda. Dalam mana-mana kes, laluan kelihatan dalam tetapan BiblioFuse di Mac.

**Adakah Time Machine secara automatik membuat sandaran perpustakaan BiblioFuse?**
Ya. Time Machine membuat sandaran keseluruhan Mac anda secara lalai, termasuk bekas aplikasi tempat BiblioFuse menyimpan fail. Jika anda menggunakan folder perpustakaan tersuai di luar bekas, pastikan ia tidak berada dalam senarai pengecualian Time Machine.

**Bolehkah saya memindahkan perpustakaan komik ke Mac baharu tanpa kehilangan kemajuan membaca?**
Ya. Salin folder perpustakaan komik ke Mac baharu dan log masuk dengan Apple ID yang sama. BiblioFuse memulihkan kemajuan membaca anda dari iCloud. Arahkan aplikasi ke laluan folder relatif yang sama pada Mac baharu dan perpustakaan anda akan muncul persis seperti sebelumnya.

**Adakah iCloud Drive sandaran yang selamat untuk perpustakaan komik besar?**
iCloud Drive adalah sandaran luar tapak yang boleh dipercayai tetapi bukan pengganti sandaran setempat. Jika anda memadamkan fail, iCloud menyimpannya dalam folder Baru Dipadam selama 30 hari. Untuk koleksi besar, pemacu luaran atau NAS tetap penting.

**Bagaimana cara mengautomasikan sandaran rsync ke NAS?**
Buka **Terminal** dan jalankan `crontab -e`. Tambah baris seperti `0 2 * * * rsync -av --delete ~/Comics/ /Volumes/NAS/Comics/` untuk menjalankan penyegerakan setiap malam pukul 2 pagi. Gantikan laluan dengan laluan perpustakaan dan titik mount NAS anda yang sebenar.

**Apa yang berlaku kepada komik saya jika pemacu Mac saya rosak?**
Jika anda mempunyai sandaran Time Machine yang terkini, anda boleh memulihkan keseluruhan perpustakaan ke pemacu baharu atau Mac baharu. Jika anda mempunyai salinan manual pada pemacu luaran atau NAS, fail-fail tersebut utuh dan boleh disalin terus. Tanpa sandaran, fail tidak dapat dipulihkan — itulah sebabnya menyediakannya sebelum berlaku kegagalan adalah kritikal.

## Mula Lindungi Perpustakaan Anda Hari Ini

Perpustakaan komik yang dibina selama bertahun-tahun layak mendapat perhatian yang sama seperti mana-mana koleksi digital yang tidak ternilai yang lain. Langkah terpantas yang boleh anda ambil sekarang ialah menghubungkan pemacu luaran dan mengaktifkan Time Machine — itu sahaja sudah melindungi anda daripada kegagalan perkakasan. Tambah sandaran awan untuk perlindungan luar tapak, dan NAS untuk koleksi besar.

[BiblioFuse](/ms/) menjadikan membaca perpustakaan anda mudah di iPhone, iPad dan Mac. Padukan dengan strategi sandaran yang kukuh dan koleksi anda terlindungi tidak kira apa yang berlaku kepada perkakasan anda.
