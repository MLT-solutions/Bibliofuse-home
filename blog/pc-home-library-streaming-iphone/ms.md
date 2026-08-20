# Strim Perpustakaan Komik PC Windows ke iPhone — Wi-Fi di Rumah dan 5G Semasa Bepergian

Koleksi komik anda tersimpan di PC Windows. Ratusan gigabait fail CBZ, EPUB dan PDF yang disusun persis seperti yang anda mahukan. iPhone anda mempunyai 64 GB storan, kebanyakannya sudah penuh. Penyelesaian yang paling jelas — menyalin fail — bermakna menguruskan dua salinan segala-galanya, sentiasa kekurangan ruang, dan memindahkan fail setiap kali menambah sesuatu yang baru.

[BiblioFuse](https://bibliofuse.com/ms/) menyelesaikan ini dengan cara yang berbeza. Aplikasi BiblioFuse PC Reader untuk Windows menyertakan pelayan penstriman terbina dalam. iPhone anda disambungkan ke PC dan menstrim halaman atas permintaan — tiada apa yang disalin, tiada apa yang dimuat naik, dan storan iPhone kekal bebas. Ciri yang sama yang dimiliki pengguna Mac kini tersedia secara asli di Windows, boleh dimuat turun dari Microsoft Store.

## Cara Penstriman Perpustakaan PC Berfungsi

BiblioFuse PC Reader menjalankan pelayan HTTP tempatan di mesin Windows anda. Apabila iPhone dan PC berada pada rangkaian Wi-Fi yang sama, aplikasi iOS secara automatik menemui PC menggunakan Bonjour — protokol rangkaian konfigurasi-sifar yang sama yang menggalakkan AirPrint dan AirDrop. Perpustakaan anda muncul di iPhone tanpa memasukkan alamat IP atau mengkonfigurasi penghala.

Apabila anda membuka sebuah jilid, BiblioFuse segera mengambil beberapa halaman pertama dan pra-muatkan yang seterusnya semasa anda membaca. Fail CBZ dan CBR distrim halaman demi halaman; fail EPUB dan PDF menggunakan permintaan HTTP Range supaya fail besar terbuka dengan pantas tanpa memuat turun kesemuanya. Pengalaman membaca — mod kanan ke kiri, tatal menegak untuk webtoon, pandangan halaman berganda dalam landskap — adalah sama dengan membaca fail yang disimpan secara tempatan. Satu-satunya perbezaan ialah dari mana data berasal.

Pelayan terus berjalan walaupun selepas anda menutup tetingkap aplikasi. Ia berpindah ke dulang sistem dan bukannya keluar. Ini bermakna perpustakaan anda kekal boleh diakses dari iPhone walaupun anda menggunakan PC untuk perkara lain. Untuk memulihkan tetingkap, klik dua kali ikon dulang. Untuk menghentikan pelayan sepenuhnya, klik kanan ikon dulang dan pilih Keluar.

## Bahagian 1: Penstriman pada Wi-Fi Rumah Anda

Ini adalah persediaan yang paling mudah. PC dan iPhone anda berada pada rangkaian yang sama, dan BiblioFuse mengendalikan penemuan secara automatik.

### Di PC Anda

1. Muat turun dan pasang **BiblioFuse PC Reader** dari Microsoft Store.
2. Buka aplikasi dan pergi ke **Tetapan → Perpustakaan Rumah**.
3. Klik **Tambah Folder** dan pilih folder (atau beberapa folder) tempat komik dan ebook anda disimpan. Anda boleh menambah beberapa folder — satu untuk manga, satu untuk novel grafik, satu untuk PDF.
4. Aktifkan **Perkongsian Perpustakaan**. Pelayan segera bermula di port 7341 dan mula mengimbas perpustakaan anda di latar belakang.
5. Secara pilihan, tetapkan **kata laluan** di Tetapan → Keselamatan untuk melindungi akses. Jika anda melangkauinya, sesiapa sahaja di rangkaian tempatan anda boleh menyambung — baik untuk kegunaan rumah, disyorkan dikunci jika anda berada di Wi-Fi awam atau dikongsi.
6. Anda boleh menutup tetingkap. Pelayan berjalan di dulang sistem.

### Di iPhone Anda

1. Buka **[BiblioFuse](https://bibliofuse.com/ms/)** di iPhone.
2. Ketuk tab **Perpustakaan**.
3. Ketuk pemilih sumber di bahagian atas — jika PC anda berjalan dan perkongsian diaktifkan, **Perpustakaan Rumah PC** muncul dalam beberapa saat.
4. Ketuk. Struktur folder PC anda muncul serta-merta.

Itu sahaja. Seluruh perpustakaan anda kini boleh dilayari dan dibaca di iPhone, tanpa sebarang fail dipindahkan ke peranti. Apabila anda menambah jilid baru ke PC, ia muncul dalam paparan iPhone pada kemas kini perpustakaan seterusnya — tiada langkah penyegerakan semula diperlukan.

### Format yang Disokong

BiblioFuse PC Reader menstrim sebarang format yang boleh dibacanya secara tempatan: **CBZ, CBR, EPUB, PDF dan TXT**. Manga dalam CBZ, novel grafik dalam CBR, ebook dalam EPUB, buku yang diimbas dalam PDF — semuanya disokong melalui sambungan penstriman yang sama.

### Petua Prestasi

**Gunakan Wi-Fi 5 GHz.** Jika penghala anda menyokong kedua-dua jalur 2.4 GHz dan 5 GHz, pastikan PC dan iPhone anda disambungkan ke jalur 5 GHz. Lebar jalur yang lebih tinggi membuat perbezaan ketara dengan fail CBZ resolusi tinggi yang besar.

**Perpustakaan pada SSD lebih pantas.** Jika koleksi komik anda berada pada cakera keras mekanikal, pemuatan halaman pertama setiap jilid baru akan mengalami sedikit kelewatan. Memindahkan perpustakaan ke SSD (dalaman atau luaran) menghapuskan masalah ini.

**Jika iPhone tidak jumpa PC:** Aplikasi PC menunjukkan alamat rangkaian di Tetapan → Perpustakaan Rumah apabila perkongsian aktif. Semak sama ada Windows Firewall tidak menyekat port 7341. Anda juga boleh memasukkan alamat IP tempatan PC secara manual dalam aplikasi iOS di bawah Perpustakaan → Tambah Pelayan → Manual.

## Bahagian 2: Penstriman Semasa Bepergian via 5G

Penstriman Wi-Fi rumah hanya berfungsi apabila kedua-dua peranti berada pada rangkaian yang sama. Untuk mengakses perpustakaan dari kafe, hotel, atau di mana-mana melalui 5G, anda perlu menjambatani dua rangkaian tersebut. Penyelesaiannya ialah [Tailscale](https://tailscale.com) — persediaan yang sama seperti yang diterangkan dalam [panduan BiblioFuse Tailscale](/ms/blog/tailscale-remote-library-access/).

Tailscale mencipta rangkaian jerat persendirian yang disulitkan antara peranti anda. Setelah disediakan, iPhone anda boleh mencapai pelayan penstriman PC seolah-olah kedua-duanya berada pada rangkaian tempatan yang sama — melalui sebarang sambungan internet, tanpa penghantaran port dan tanpa IP statik.

### Menyediakan Tailscale untuk Penstriman Jauh

**Di PC Windows anda:**

1. Muat turun Tailscale dari [tailscale.com](https://tailscale.com) atau Microsoft Store.
2. Log masuk dengan Google, GitHub, Microsoft atau akaun Tailscale percuma.
3. Tailscale berjalan di dulang sistem bersama BiblioFuse. Catat alamat IP Tailscale PC anda (bermula dengan `100.`).
4. Pastikan BiblioFuse PC Reader sedang berjalan dengan Perkongsian Perpustakaan diaktifkan.

**Di iPhone anda:**

1. Pasang Tailscale dari App Store.
2. Log masuk dengan akaun Tailscale yang sama.
3. Aktifkan togol VPN Tailscale.
4. Buka BiblioFuse di iPhone. Di Perpustakaan → Tambah Pelayan, masukkan alamat IP Tailscale PC anda dan port `7341`.
5. Ketuk Sambung.

BiblioFuse secara automatik mengutamakan IP Tailscale apabila tersedia, jadi sambungan yang disimpan yang sama berfungsi di rumah (melalui LAN) mahupun semasa bepergian (melalui Tailscale). Anda tidak memerlukan dua entri sambungan yang berasingan.

### Apa yang Dijangkakan pada Data Mudah Alih

Tailscale mewujudkan sambungan rakan-ke-rakan apabila boleh, mengelakkan pelayan geganti untuk prestasi yang lebih baik. Pada sambungan 5G yang tipikal, penstriman halaman komik berfungsi dengan baik. BiblioFuse hanya menghantar halaman semasa dan pra-muatkan beberapa halaman seterusnya — ia tidak menstrim keseluruhan fail CBZ sekaligus, jadi arkib 200 MB tidak bermakna penggunaan data 200 MB. Jangkakan kira-kira **1–3 MB setiap halaman** bergantung pada resolusi imej dan tetapan pemampatan pelayan.

Untuk membaca dengan pelan data terhad, gunakan [BiblioFuse](https://bibliofuse.com/ms/) untuk memuat turun jilid individu melalui Wi-Fi sebelum meninggalkan rumah. Dalam paparan Perpustakaan PC di iPhone, ketuk ikon muat turun di sebelah mana-mana jilid untuk menyimpannya secara tempatan. Jilid tersebut kemudiannya tersedia secara luar talian, tanpa Tailscale atau sambungan data.

## PC vs Mac: Apa yang Berbeza?

Jika anda pernah menggunakan aplikasi teman Mac, pengalaman PC hampir sama dari sisi iOS. Beberapa perbezaan khusus Windows:

- **Port:** Pelayan PC menggunakan port **7341** (aplikasi Mac lalai ke 8686).
- **Penemuan:** Kedua-duanya menggunakan Bonjour/mDNS dengan jenis perkhidmatan `_bibliofuse._tcp`, jadi iOS menemuinya secara identik.
- **Dulang Sistem:** Aplikasi PC kekal di dulang sistem apabila tetingkap ditutup; pelayan tidak pernah berhenti sehingga anda memilih Keluar.
- **Fail Tetapan:** Tetapan PC disimpan di `%APPDATA%\BiblioFuse\settings.json` jika anda perlu memeriksanya atau menetapkannya semula secara manual.
- **Satu pelayan aktif pada satu masa:** Dalam keluaran semasa, BiblioFuse iOS menyambung ke pelayan Mac atau PC — bukan kedua-duanya serentak. Mesin mana yang sedang berjalan dan aktif adalah yang pertama ditemui iOS.

Untuk butiran penstriman khusus Mac, lihat [Strim Perpustakaan Komik Mac ke iPhone via Wi-Fi](/ms/blog/mac-home-library-streaming-iphone/).

## Soalan Lazim

**Adakah BiblioFuse mempunyai aplikasi Windows?**
Ya. BiblioFuse PC Reader ialah aplikasi Windows asli yang tersedia di Microsoft Store. Ia membaca fail CBZ, CBR, EPUB, PDF dan TXT secara tempatan dan menstrim seluruh perpustakaan anda ke aplikasi iOS melalui rangkaian anda.

**Bagaimana cara menstrim komik dari PC Windows ke iPhone?**
Pasang BiblioFuse PC Reader di Windows dan aktifkan Perkongsian Perpustakaan dalam Tetapan. Pasang BiblioFuse di iPhone. Pada rangkaian Wi-Fi yang sama, buka BiblioFuse di iPhone dan ketuk Perpustakaan — perpustakaan PC anda muncul secara automatik melalui penemuan Bonjour. Tiada alamat IP atau konfigurasi penghala diperlukan.

**Bolehkah saya mengakses perpustakaan PC melalui 5G semasa jauh dari rumah?**
Ya, menggunakan Tailscale. Pasang Tailscale di PC Windows dan iPhone anda, log masuk dengan akaun yang sama, dan aktifkan pada kedua-dua peranti. BiblioFuse secara automatik mengesan sambungan Tailscale dan menggunakannya untuk mengakses PC dari mana-mana sahaja — Wi-Fi hotel, 5G, sebarang sambungan internet.

**Adakah penstriman dari PC menggunakan storan iPhone?**
Tidak. Halaman diambil dari PC atas permintaan; tiada apa yang disimpan di iPhone selain aplikasi itu sendiri dan data kemajuan membaca anda. Anda boleh melayari dan membaca perpustakaan 500 GB tanpa menggunakan storan iPhone untuk fail.

**Adakah PC perlu kekal aktif agar penstriman berfungsi?**
Ya. Pelayan penstriman berjalan di PC; jika PC masuk mod tidur atau pelayan dihentikan, sambungan iOS terputus. Untuk mencegah mod tidur semasa penstriman, pergi ke Tetapan Windows → Kuasa & Tidur dan tetapkan tidur kepada Tidak Pernah, atau gunakan alat seperti PowerToys untuk memastikan mesin kekal aktif.

**Port apa yang digunakan pelayan penstriman PC?**
Port 7341. Jika anda mempunyai tembok api yang menyekat trafik pada port ini, anda perlu menambah pengecualian untuk BiblioFuse PC Reader.

## Memulakan

[BiblioFuse PC Reader](https://bibliofuse.com/ms/) kini tersedia di Microsoft Store. BiblioFuse untuk iPhone ada di App Store. Pasang kedua-duanya, arahkan aplikasi PC ke folder perpustakaan anda, dan seluruh koleksi anda akan berada di iPhone kali seterusnya anda membuka aplikasi — tanpa kabel, tanpa awan, tanpa menyalin.
