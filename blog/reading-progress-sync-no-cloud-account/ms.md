# Cara Segerak Kemajuan Membaca Tanpa Akaun Awan

Kamu sedang di tengah-tengah membaca siri manga di iPhone apabila mengambil iPad — dan mendapati diri kembali di halaman pertama. Penyegerakan awan menyelesaikan masalah ini, tetapi hanya jika kamu sedia untuk log masuk ke perkhidmatan penyegerakan, mempercayai pihak ketiga dengan metadata perpustakaan kamu, dan menerima bahawa gangguan sambungan boleh menjadikan kemajuan kamu lapuk.

Bagaimana jika kamu tidak mahu itu? Bagaimana jika kamu melancong tanpa sambungan stabil, tidak mempercayai perkhidmatan awan dengan data bacaan kamu, atau sekadar lebih suka menyimpan segalanya secara tempatan?

[BiblioFuse](https://bibliofuse.com/ms/) menyediakan beberapa cara untuk mengekalkan kemajuan membaca yang konsisten merentasi peranti tanpa bergantung pada mana-mana akaun awan. Berikut cara setiap pilihan berfungsi.

## Mengapa Penyegerakan Kemajuan Membaca Lebih Sukar Daripada Kelihatannya

Pada pandangan pertama, "segerak kemajuan membaca" kedengaran mudah — simpan sahaja satu nombor. Tetapi perpustakaan komik boleh mempunyai berpuluh-puluh atau ratusan jilid, masing-masing dengan bilangan halaman dan halaman terakhir yang dibaca tersendiri. Kemajuan membaca ialah **keadaan per-buku, per-peranti** yang boleh berubah secara serentak pada berbilang peranti. Tanpa pengadil pusat (pelayan awan), dua peranti yang kedua-duanya berada dalam mod luar talian boleh membuat kemas kini yang bercanggah.

Setiap strategi penyegerakan tempatan sahaja perlu menerima pertukaran: sama ada kamu mengenakan model utama/replika yang ketat, menerima bahawa kemajuan yang terakhir ditulis akan menang, atau hanya menyegerak apabila peranti berada dalam rangkaian yang sama.

Penyegerakan iCloud BiblioFuse mengendalikan proses pengadilan ini secara automatik. Tetapi jika iCloud tidak sesuai, pendekatan berikut memberi kamu kawalan pada pelbagai tahap automasi.

## Pilihan 1: Penyegerakan Perpustakaan Wi-Fi dari Mac (Disyorkan untuk Kegunaan di Rumah)

Jika kamu mempunyai Mac yang menjalankan ciri Mac Home Library BiblioFuse, iPhone kamu boleh berhubung dengannya melalui Wi-Fi. Mac berfungsi sebagai sumber kebenaran untuk fail dan kemajuan.

**Cara kerjanya:**

1. Di Mac, buka BiblioFuse dan aktifkan pelayan perpustakaan rumah di Tetapan → Perpustakaan Rumah.
2. Di iPhone, ketuk ikon rangkaian di tab perpustakaan dan pilih Mac kamu.
3. iPhone memaparkan perpustakaan Mac dan membaca buku terus dari storan Mac — tiada apa yang disalin ke iPhone.

Kemajuan disimpan di bahagian Mac. Mana-mana peranti yang membaca dari perpustakaan Mac merekodkan kemajuan di sana. Apabila kamu membuka iPhone dan berhubung semula dengan Mac, kamu menyambung dari tempat sesi Mac terakhir.

**Had:** Memerlukan kedua-dua peranti dalam rangkaian Wi-Fi yang sama. Paling sesuai untuk kegunaan di rumah; tidak sesuai untuk membaca semasa melancong melainkan kamu menyediakan akses jauh melalui VPN atau Tailscale.

## Pilihan 2: Eksport dan Import Kemajuan Manual

BiblioFuse membenarkan kamu mengeksport kemajuan membaca sebagai fail JSON dan mengimportnya di peranti lain. Ini adalah pilihan yang paling mudah alih dan boleh digunakan secara luar talian — tiada rangkaian diperlukan.

**Mengeksport dari Peranti A:**

1. Pergi ke Tetapan → Perpustakaan → Eksport Kemajuan.
2. BiblioFuse menyimpan fail `.json` yang mengandungi halaman terakhir dibaca untuk setiap buku dalam perpustakaan kamu.
3. Kongsi fail ini melalui AirDrop, Fail, atau mekanisme lain — tiada internet diperlukan.

**Mengimport di Peranti B:**

1. Terima fail `.json` dan buka dengan BiblioFuse, atau pergi ke Tetapan → Perpustakaan → Import Kemajuan.
2. BiblioFuse menggabungkan kemajuan yang diimport dengan kemajuan tempatan sedia ada, mengambil nombor halaman yang lebih tinggi untuk setiap buku (supaya kamu tidak pernah berundur).

Pendekatan ini berfungsi sepenuhnya secara luar talian. AirDrop menjadikan pemindahan hampir serta-merta apabila peranti berdekatan. Satu-satunya langkah manual ialah mengingati untuk mengeksport sebelum berpindah peranti — tabiat yang mengambil masa beberapa hari untuk dibentuk.

## Pilihan 3: Penyegerakan Berasaskan Fail dengan Pemacu Rangkaian Tempatan atau USB

Jika kamu mengurus perpustakaan melalui aplikasi Fail, kemajuan boleh mengikuti fail buku. BiblioFuse menyimpan kemajuan berdasarkan nama fail, bukan berdasarkan ID awan. Ini bermakna:

- Jika kamu menyalin fail dari Peranti A ke Peranti B dengan nama fail yang sama, BiblioFuse di Peranti B tidak akan menunjukkan kemajuan (fail itu baharu bagi peranti tersebut).
- Tetapi jika kamu menyalin fail buku **dan** eksport kemajuan (Pilihan 2 di atas) ke Peranti B, kemudian mengimport fail kemajuan, kamu akan menyambung dari halaman yang betul.

Bagi pembaca yang menyimpan perpustakaan di NAS atau pemacu SMB dikongsi, pendekatan ini berfungsi dengan lancar: buku kekal di pemacu, peranti berhubung apabila berada dalam rangkaian tempatan, dan kemajuan dikesan secara berasingan di setiap peranti sehingga kamu menyegerak fail kemajuan secara manual.

## Pilihan 4: iCloud Drive Tanpa Akaun Penyegerakan Awan

Ini wajar dijelaskan kerana ia selalu mengelirukan ramai orang: **iCloud Drive bukan perkara yang sama dengan penyegerakan iCloud BiblioFuse**.

Penyegerakan iCloud BiblioFuse menggunakan `NSUbiquitousKeyValueStore` dan CloudKit untuk menyegerak metadata kemajuan membaca. Ini memerlukan akaun iCloud yang aktif.

Namun begitu, kamu boleh menyimpan **fail buku** di iCloud Drive (aplikasi Fail) tanpa mengaktifkan penyegerakan kemajuan iCloud BiblioFuse. Dalam konfigurasi ini:

- Fail buku boleh diakses dari mana-mana peranti yang log masuk dengan Apple ID yang sama
- Kemajuan membaca dikesan secara tempatan per peranti dan **tidak** disegerak
- Kamu masih perlu menggunakan Pilihan 1, 2, atau 3 untuk menyegerak kemajuan jika kamu mahukan konsistensi

Jika kamu menggunakan iCloud Drive semata-mata sebagai storan fail dan tidak mahu penyegerakan kemajuan, ini adalah konfigurasi yang bersih.

## Pilihan 5: Terima Kemajuan Per-Peranti dan Gunakan Penanda Buku

Tidak setiap pembaca memerlukan penyegerakan kemajuan yang sempurna. Jika kamu terutamanya membaca satu buku pada satu masa dan tidak berpindah peranti di pertengahan jilid, kemajuan per peranti adalah sangat praktikal.

BiblioFuse membenarkan kamu menetapkan penanda buku pada mana-mana halaman. Penanda buku ialah kedudukan tersimpan yang dinamakan — kamu boleh mencipta satu sebelum berpindah peranti dan terus melompat ke sana di peranti lain. Ia hanya satu ketukan untuk menetapkan dan satu ketukan untuk melompat, yang untuk penukaran peranti sesekali adalah lebih pantas daripada penyegerakan penuh.

## Memilih Pilihan yang Sesuai

| Senario | Pilihan terbaik |
|---------|----------------|
| Pembaca di rumah, ada Mac | Perpustakaan Rumah Wi-Fi (Pilihan 1) |
| Melancong, luar talian, dua peranti iOS | Eksport/import manual melalui AirDrop (Pilihan 2) |
| Perpustakaan di NAS atau pemacu dikongsi | Penyegerakan fail + eksport kemajuan (Pilihan 3) |
| Penukaran peranti sesekali, satu buku | Penanda buku (Pilihan 5) |
| Apple ID tetapi tiada awan pihak ketiga | iCloud Drive untuk fail + penyegerakan kemajuan manual |

## Aspek Privasi

[BiblioFuse](https://bibliofuse.com/ms/) menyimpan kemajuan membaca secara tempatan di peranti kamu. Apabila penyegerakan iCloud dinyahaktifkan, tiada data bacaan yang meninggalkan peranti kamu. Bagi pembaca yang tidak mahu tabiat bacaan mereka disimpan dalam mana-mana perkhidmatan luar — sama ada atas sebab privasi atau sekadar sebagai pilihan peribadi — operasi tempatan sahaja adalah mod kelas pertama, bukan penyelesaian sementara.

Pilihan di atas bukan jalan pintas untuk ciri yang tiada. Inilah cara yang dimaksudkan untuk menggunakan BiblioFuse apabila penyegerakan awan tidak sesuai dengan situasi kamu.

## Bermula

1. [Muat turun BiblioFuse](https://bibliofuse.com/ms/) dari App Store.
2. Import fail komik atau ebook kamu melalui aplikasi Fail, pemindahan Wi-Fi, atau Mac Home Library.
3. Pilih strategi penyegerakan yang sesuai dengan tabiat membaca kamu — atau gabungkannya. Pilihan 2 dan 5 berfungsi bersama-sama dengan mana-mana pendekatan lain.

Kamu tidak perlu mengorbankan kemudahan apabila memilih untuk tidak menggunakan akaun awan. Tabiat kecil — eksport cepat melalui AirDrop sebelum berpindah peranti — mengekalkan keadaan perpustakaan kamu konsisten tanpa perlu mempercayakan data bacaan kamu kepada sesiapa pun.
