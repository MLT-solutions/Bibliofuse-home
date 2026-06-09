# Mengurus Perpustakaan BiblioFuse: Folder, Pemindahan, dan Penstriman dari Mac

BiblioFuse mengurus perpustakaan EPUB, CBZ, CBR, PDF, dan TXT kamu di iPhone, iPad, dan Mac tanpa memindahkan atau mengunci fail. Pada iOS 17 atau lebih baru, kamu boleh memuatkan fail melalui Wi-Fi Transfer, iCloud Drive, atau helaian kongsi Fail — dan streaming keseluruhan perpustakaan Mac ke iPhone melalui Wi-Fi tanpa menggunakan storan peranti.

[BiblioFuse](https://bibliofuse.com) dibina atas satu peraturan mudah: fail kamu kekal di tempat kamu meletakkannya. Aplikasi tidak akan memindahkan, menamakan semula, atau memenjarakan fail dalam format proprietari. Memahami di mana buku-buku berada — dan bagaimana untuk meletakkannya di sana — membezakan antara perpustakaan yang bekerja untuk kamu dengan perpustakaan yang sentiasa menentangmu.

## Cara Menambah Buku: Empat Cara

### Mac dan Android — Tambah Folder

Di Mac dan Android, BiblioFuse memantau folder dan bukannya memiliki fail. Di bar sisi, ketik **Tambah Folder** dan arahkan ke mana-mana lokasi — folder Muat Turun, pemacu luaran, NAS. BiblioFuse mengindeks kandungan dan menjejak perubahan tanpa menyentuh fail itu sendiri.

### iOS — Salin ke Folder BiblioFuse

iPhone dan iPad menggunakan model fail berpagar pasir (sandbox), jadi kamu perlu menyalin buku ke lokasi yang boleh dilihat oleh aplikasi. Dua lokasi yang boleh digunakan:

**iCloud Drive → BiblioFuse** — Buka aplikasi Fail dan navigasi ke iCloud Drive → BiblioFuse. Salin atau pindahkan folder ebook kamu ke sini. Setiap folder yang diletakkan akan muncul sebagai folder berasingan dalam senarai BiblioFuse. Buku atau fail yang diletakkan terus di root iCloud Drive → BiblioFuse (bukan di dalam subfolder) akan muncul dalam aplikasi di bawah folder bernama **iCloud**. Buku yang disimpan di sini mendapat penjejakan kemajuan automatik: kedudukan pembacaan kamu disegerakkan antara iPhone, iPad dan Mac. Sambung semula tepat dari tempat kamu berhenti pada mana-mana peranti.

**iPhone Saya → BiblioFuse** — Untuk penyimpanan tempatan sahaja, salin folder ebook ke sini. Folder kelihatan sama dalam senarai, tetapi kemajuan hanya disimpan pada peranti tersebut.

Dalam kedua-dua kes, letakkan folder — bukan fail individu. Folder yang mengandungi jilid-jilid siri manga menjadi satu entri dalam senarai dengan semua jilid di dalamnya.

### Pemindahan Wi-Fi

Pelayan import berasaskan pelayar terbina dalam membolehkan kamu menyeret fail dari mana-mana komputer tanpa kabel atau perisian penyegerakan.

- **iOS**: Pergi ke **Tetapan → Import Wi-Fi** dan aktifkan. URL tempatan akan muncul — buka dalam pelayar desktop mana-mana dan seret fail ke dalamnya. Fail masuk ke **iPhone Saya → BiblioFuse → import** dan muncul dalam perpustakaan secara automatik.
- **Android**: Kamu memilih folder destinasi semasa menyediakan Pemindahan Wi-Fi.

### Buku yang Diproses oleh Tab Alat

Apabila menggunakan [tab Alat](/ms/webapp) untuk memampatkan atau menggabungkan fail, hasilnya akan pergi ke:

- **iOS**: **iPhone Saya → BiblioFuse → export** — fail yang diproses muncul di sini secara automatik.
- **Android**: Kamu memilih folder output semasa menjalankan alat.

[Alat Web BiblioFuse](/ms/webapp) melakukan operasi yang sama dalam mana-mana pelayar — berguna di Windows atau Linux. Untuk butiran lanjut tentang penjimatan ruang daripada pemampatan, lihat [panduan saiz fail komik dan ebook](/ms/blog/reduce-comic-ebook-file-size) kami.

### Mac: Hantar ke iCloud dengan Satu Klik Kanan

Jika kamu sedang membaca di Mac dan mahu sebuah buku ada di iPhone kamu, klik kanan pada kulit buku dan pilih **Hantar ke iCloud**. BiblioFuse menyalin fail terus ke **iCloud Drive / BiblioFuse** — bekas yang sama yang dipantau oleh iPhone kamu. Ia muncul pada telefon dalam beberapa minit tanpa sebarang langkah manual.

Untuk menghantar beberapa buku sekaligus, aktifkan mod pilihan (ikon tanda semak di bahagian kanan atas), pilih buku yang dikehendaki, kemudian ketik **Hantar ke iCloud** dalam bar tindakan.

## Grid Perpustakaan: Pilihan Tekan Lama

Menekan lama mana-mana kulit buku di iOS membuka menu konteks:

- **Buka** — terus ke bacaan
- **Kongsi** — serahkan fail ke aplikasi lain
- **Ganti Nama** — tukar nama paparan (tidak menamakan semula fail di cakera)
- **Edit Metadata** — tambah tag dan penilaian bintang dari 1 hingga 5
- **Buang** — pengesahan muncul dengan dua pilihan:
  - *Buang dari Perpustakaan* — memadamkan entri perpustakaan, fail kekal utuh di cakera
  - *Padam dari Storan* — memadamkan kedua-dua entri dan fail fizikal

Untuk menghantar buku ke tab Alat, masuk ke mod pilihan (tekan lama buku pertama, kemudian ketik yang lain untuk menambah). Bar muncul di bahagian bawah dengan butang **Alat** (ikon tongkat ajaib). Ketik untuk memasukkan buku yang dipilih ke dalam giliran pemampatan atau penggabungan.

## Penstriman Perpustakaan Mac ke iPhone

Jika koleksi utama kamu ada di Mac, kamu tidak perlu menyalin apa-apa. [BiblioFuse](/ms/) boleh membuat penstriman terus dari Mac ke iPhone — tetapi gunakan Tailscale dan bukannya kaedah Wi-Fi asas yang boleh tidak stabil apabila telefon bertukar rangkaian.

Tailscale mencipta rangkaian peribadi yang disulitkan antara peranti kamu. Setelah disediakan, iPhone kamu boleh mencapai Mac kamu sama ada menggunakan data mudah alih, Wi-Fi awam, atau di rumah.

### Langkah 1: Pasang Tailscale pada Kedua-dua Peranti

1. Mac: muat turun dari [tailscale.com/download](https://tailscale.com/download) atau Mac App Store.
2. iPhone: cari "Tailscale" di App Store.
3. Log masuk dengan **akaun Tailscale yang sama** pada kedua-duanya.

Setelah disambungkan, kedua-dua peranti boleh berkomunikasi secara peribadi.

### Langkah 2: Aktifkan Penstriman di Mac

Dalam BiblioFuse untuk Mac, tatal bar sisi kiri ke bawah ke bahagian **Penstriman** dan aktifkan. Dua titik akhir muncul: satu untuk LAN/Wi-Fi dan satu untuk **Jauh / Tailscale**. Tailscale adalah laluan yang boleh dipercayai.

### Langkah 3: Semak Kebenaran di iPhone

Dua kebenaran iOS diperlukan:

1. **Rangkaian Tempatan** — pergi ke **Tetapan → Privasi & Keselamatan → Rangkaian Tempatan** dan aktifkan BiblioFuse.
2. **iCloud** — pergi ke **Tetapan → [Nama kamu] → iCloud** dan aktifkan BiblioFuse.

Semakan cepat: buka BiblioFuse di iPhone, pergi ke **Tetapan → Kebenaran**. Tanda semak hijau bermakna semuanya baik; tanda merah akan menghubungkan terus ke tetapan sistem yang perlu diperbetulkan.

### Langkah 4: Sambung dari iPhone

1. Buka tab **Perpustakaan** dalam BiblioFuse.
2. Di bar sisi (panel kiri di iPad, ketik ikon bar sisi di iPhone), tatal ke bawah — bahagian **Mac** menyenaraikan titik akhir penstriman yang ditemui.
3. Cari entri dengan **(iCloud)** dalam namanya, contohnya *MacBook Pro Ahmad (iCloud)*.
4. Ketik padanya. Biarkan 10–30 saat untuk sambungan selamat diwujudkan.

Folder perpustakaan Mac kamu kini muncul dalam bar sisi seperti storan tempatan. Layari dan baca seperti biasa.

### Apa yang Distrim vs. yang Dimuat Turun

| Format | Tingkah Laku |
|--------|-------------|
| CBZ / CBR | Distrim halaman demi halaman — tidak perlu muat turun, terbuka serta-merta |
| EPUB / TXT | Dimuat turun ke peranti dahulu, kemudian terbuka |

**Nota tentang kemajuan membaca:** kemajuan daripada sesi penstriman disimpan dalam pangkalan data tempatan Mac kamu, bukan di iCloud. Ia tidak akan disegerakkan ke peranti lain — ia kekal di Mac.

## Tips Pantas

- **iCloud adalah laluan penyegerakan paling mudah**: buku dalam iCloud Drive → BiblioFuse muncul pada semua peranti Apple kamu dengan penjejakan kemajuan.
- **Folder export adalah kawasan perantaraan**: selepas pemampatan di iOS, cari keputusan dalam iPhone Saya → BiblioFuse → export, kemudian pindahkan ke tempat yang kamu mahu simpan jangka panjang.
- **Semak Kebenaran dahulu jika penstriman tidak berfungsi**: kebanyakan masalah sambungan berpunca daripada Rangkaian Tempatan atau iCloud yang dimatikan.

## Soalan Lazim

**Di mana BiblioFuse menyimpan fail saya di iPhone?**
BiblioFuse menggunakan dua folder yang boleh dilihat dalam aplikasi Fail: iCloud Drive → BiblioFuse (disegerakkan antara peranti) dan iPhone Saya → BiblioFuse (tempatan sahaja). Fail Wi-Fi Transfer disimpan dalam subfolder import tempatan; fail yang ditambah melalui iCloud masuk ke folder iCloud.

**Bagaimana cara memindahkan buku dari Mac ke iPhone tanpa kabel?**
Gunakan Wi-Fi Transfer: dalam BiblioFuse di iPhone, pergi ke Tetapan → Import Wi-Fi, hidupkannya, kemudian lawati URL yang dipaparkan dalam mana-mana pelayar di Mac kamu dan seret fail. Kamu juga boleh menjatuhkan fail ke iCloud Drive → BiblioFuse di Mac dan ia akan disegerakkan secara automatik.

**Adakah BiblioFuse menyokong organisasi siri berasaskan folder?**
Ya. Letakkan folder jilid CBZ (contohnya, siri manga) dalam folder BiblioFuse — setiap subfolder muncul sebagai entri siri berasingan dalam perpustakaan. Jilid individu dalam folder disenaraikan mengikut urutan baca.

**Apakah perbezaan antara penstriman Mac Home Library dan penyegerakan iCloud?**
Penyegerakan iCloud menyalin fail ke peranti kamu untuk pembacaan luar talian di mana-mana. Mac Home Library mengalirkan halaman atas permintaan dari Mac melalui Wi-Fi — tiada yang disalin ke iPhone, jadi tiada storan peranti digunakan, tetapi kamu perlu berada dalam rangkaian yang sama.

**Bagaimana cara menghantar buku dari perpustakaan Mac ke iPhone dengan cepat?**
Klik kanan pada mana-mana sampul dalam BiblioFuse di Mac dan pilih Hantar ke iCloud. BiblioFuse menyalinnya ke iCloud Drive → BiblioFuse, dan ia muncul di iPhone kamu dalam beberapa minit.
