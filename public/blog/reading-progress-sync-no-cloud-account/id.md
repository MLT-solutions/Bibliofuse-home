# Cara Sinkronisasi Kemajuan Membaca Tanpa Akun Cloud

Kamu sedang di tengah-tengah membaca seri manga di iPhone, lalu mengambil iPad — dan mendapati dirimu kembali ke halaman pertama. Sinkronisasi cloud memecahkan masalah ini, tapi hanya jika kamu bersedia masuk ke layanan sinkronisasi, mempercayakan metadata perpustakaanmu ke pihak ketiga, dan menerima bahwa gangguan koneksi bisa membuat kemajuanmu menjadi usang.

Bagaimana jika kamu tidak mau? Bagaimana jika kamu bepergian tanpa koneksi stabil, tidak mempercayai layanan cloud dengan data bacaanmu, atau sekadar lebih suka menyimpan semuanya secara lokal?

[BiblioFuse](https://bibliofuse.com/id/) menyediakan beberapa cara untuk menjaga kemajuan membaca tetap konsisten di semua perangkat tanpa bergantung pada akun cloud apa pun. Berikut cara kerja setiap opsi.

## Mengapa Sinkronisasi Kemajuan Membaca Lebih Sulit dari yang Terlihat

Sekilas, "sinkronisasi kemajuan membaca" terdengar sepele — cukup simpan sebuah angka. Tapi sebuah perpustakaan komik bisa punya puluhan atau ratusan volume, masing-masing dengan jumlah halaman dan halaman terakhir yang dibaca sendiri-sendiri. Kemajuan membaca adalah **status per buku, per perangkat** yang bisa berubah secara bersamaan di beberapa perangkat. Tanpa arbiter pusat (server cloud), dua perangkat yang keduanya sedang offline bisa membuat pembaruan yang saling bertentangan.

Setiap strategi sinkronisasi hanya-lokal harus menerima sebuah trade-off: entah kamu menerapkan model primer/replika yang ketat, menerima bahwa kemajuan yang terakhir ditulis akan menang, atau hanya menyinkronkan saat perangkat berada dalam jaringan yang sama.

Sinkronisasi iCloud BiblioFuse menangani arbitrase ini secara otomatis. Tapi jika iCloud tidak tersedia, pendekatan berikut memberimu kontrol di berbagai tingkat otomasi.

## Opsi 1: Sinkronisasi Perpustakaan Wi-Fi dari Mac (Direkomendasikan untuk Penggunaan di Rumah)

Jika kamu punya Mac yang menjalankan fitur Mac Home Library BiblioFuse, iPhone kamu bisa terhubung ke Mac melalui Wi-Fi. Mac bertindak sebagai sumber utama untuk file maupun kemajuan baca.

**Cara kerjanya:**

1. Di Mac, buka BiblioFuse dan aktifkan server perpustakaan rumah di Pengaturan → Perpustakaan Rumah.
2. Di iPhone, ketuk ikon jaringan di tab perpustakaan dan pilih Mac kamu.
3. iPhone menampilkan perpustakaan Mac dan membaca buku langsung dari penyimpanan Mac — tidak ada yang disalin ke iPhone.

Kemajuan disimpan di sisi Mac. Perangkat mana pun yang membaca dari perpustakaan Mac mencatat kemajuan di sana. Saat kamu membuka iPhone dan terhubung kembali ke Mac, kamu melanjutkan dari tempat sesi Mac terakhir.

**Keterbatasan:** Membutuhkan kedua perangkat dalam jaringan Wi-Fi yang sama. Paling cocok untuk penggunaan di rumah; tidak cocok untuk membaca saat bepergian kecuali kamu mengatur akses jarak jauh via VPN atau Tailscale.

## Opsi 2: Ekspor dan Impor Kemajuan Manual

BiblioFuse memungkinkan kamu mengekspor kemajuan membaca sebagai file JSON dan mengimpornya di perangkat lain. Ini adalah opsi paling portabel yang bisa bekerja offline — tidak perlu jaringan.

**Mengekspor dari Perangkat A:**

1. Buka Pengaturan → Perpustakaan → Ekspor Kemajuan.
2. BiblioFuse menyimpan file `.json` berisi halaman terakhir yang dibaca untuk setiap buku di perpustakaanmu.
3. Bagikan file ini via AirDrop, Berkas, atau mekanisme lain — tidak perlu internet.

**Mengimpor di Perangkat B:**

1. Terima file `.json` dan buka dengan BiblioFuse, atau buka Pengaturan → Perpustakaan → Impor Kemajuan.
2. BiblioFuse menggabungkan kemajuan yang diimpor dengan kemajuan lokal yang ada, mengambil nomor halaman yang lebih tinggi untuk setiap buku (sehingga kamu tidak pernah mundur).

Pendekatan ini sepenuhnya offline. AirDrop membuat transfer hampir instan saat perangkat berdekatan. Satu-satunya langkah manual adalah mengingat untuk mengekspor sebelum berpindah perangkat — sebuah kebiasaan yang butuh beberapa hari untuk terbentuk.

## Opsi 3: Sinkronisasi Berbasis File dengan Drive Jaringan Lokal atau USB

Jika kamu mengelola perpustakaan via aplikasi Berkas, kemajuan bisa mengikuti file buku. BiblioFuse menyimpan kemajuan per nama file, bukan per ID cloud. Ini berarti:

- Jika kamu menyalin file dari Perangkat A ke Perangkat B dengan nama file yang sama, BiblioFuse di Perangkat B tidak akan menampilkan kemajuan (file baru untuk perangkat tersebut).
- Tapi jika kamu menyalin file buku **dan** ekspor kemajuan (Opsi 2 di atas) ke Perangkat B, lalu mengimpor file kemajuan, kamu akan melanjutkan dari halaman yang benar.

Bagi pembaca yang menyimpan perpustakaan di NAS atau drive SMB bersama, pendekatan ini berjalan dengan mulus: buku tetap di drive, perangkat terhubung saat di jaringan lokal, dan kemajuan dilacak secara terpisah di setiap perangkat sampai kamu menyinkronkan file kemajuan secara manual.

## Opsi 4: iCloud Drive Tanpa Akun Sinkronisasi Cloud

Ini perlu diperjelas karena sering membingungkan orang: **iCloud Drive tidak sama dengan sinkronisasi iCloud BiblioFuse**.

Sinkronisasi iCloud BiblioFuse menggunakan `NSUbiquitousKeyValueStore` dan CloudKit untuk menyinkronkan metadata kemajuan membaca. Ini memerlukan akun iCloud yang aktif.

Namun, kamu bisa menyimpan **file buku** di iCloud Drive (aplikasi Berkas) tanpa mengaktifkan sinkronisasi kemajuan iCloud BiblioFuse. Dalam konfigurasi ini:

- File buku dapat diakses dari perangkat mana pun yang masuk dengan Apple ID yang sama
- Kemajuan membaca dilacak secara lokal per perangkat dan **tidak** disinkronkan
- Kamu tetap perlu menggunakan Opsi 1, 2, atau 3 untuk menyinkronkan kemajuan jika ingin konsisten

Jika kamu menggunakan iCloud Drive murni sebagai penyimpanan file dan tidak menginginkan sinkronisasi kemajuan, ini adalah konfigurasi yang bersih.

## Opsi 5: Terima Kemajuan Per-Perangkat dan Gunakan Penanda Buku

Tidak setiap pembaca membutuhkan sinkronisasi kemajuan yang sempurna. Jika kamu terutama membaca satu buku pada satu waktu dan tidak berpindah perangkat di tengah volume, kemajuan per perangkat sangat bisa digunakan.

BiblioFuse memungkinkan kamu menetapkan penanda buku di halaman mana pun. Penanda buku adalah posisi tersimpan yang diberi nama — kamu bisa membuatnya sebelum berpindah perangkat dan langsung melompat ke posisi itu di perangkat lain. Satu ketukan untuk menetapkan dan satu ketukan untuk melompat, yang untuk pergantian perangkat sesekali lebih cepat dari sinkronisasi penuh.

## Memilih Opsi yang Tepat

| Skenario | Opsi terbaik |
|----------|--------------|
| Pembaca di rumah, ada Mac | Wi-Fi Perpustakaan Rumah (Opsi 1) |
| Bepergian, offline, dua perangkat iOS | Ekspor/impor manual via AirDrop (Opsi 2) |
| Perpustakaan di NAS atau drive bersama | Sinkronisasi file + ekspor kemajuan (Opsi 3) |
| Pergantian perangkat sesekali, satu buku | Penanda buku (Opsi 5) |
| Apple ID tapi tanpa cloud pihak ketiga | iCloud Drive untuk file + sinkronisasi kemajuan manual |

## Aspek Privasi

[BiblioFuse](https://bibliofuse.com/id/) menyimpan kemajuan membaca secara lokal di perangkatmu. Saat sinkronisasi iCloud dinonaktifkan, tidak ada data bacaan yang meninggalkan perangkat. Bagi pembaca yang lebih suka tidak menyimpan kebiasaan bacaan mereka di layanan eksternal mana pun — baik karena alasan privasi maupun sekadar preferensi — operasi lokal adalah mode kelas satu, bukan solusi darurat.

Opsi-opsi di atas bukan solusi alternatif untuk fitur yang kurang. Itulah cara yang dimaksudkan untuk menggunakan BiblioFuse saat sinkronisasi cloud tidak sesuai dengan situasimu.

## Memulai

1. [Unduh BiblioFuse](https://bibliofuse.com/id/) dari App Store.
2. Impor file komik atau ebook via aplikasi Berkas, transfer Wi-Fi, atau Mac Home Library.
3. Pilih strategi sinkronisasi yang sesuai dengan kebiasaan membacamu — atau kombinasikan. Opsi 2 dan 5 bisa digunakan bersama pendekatan lain apa pun.

Kamu tidak perlu mengorbankan kenyamanan saat memilih untuk tidak menggunakan akun cloud. Kebiasaan kecil — ekspor cepat via AirDrop sebelum berpindah perangkat — menjaga status perpustakaanmu tetap konsisten tanpa mempercayakan data bacaanmu kepada siapa pun.
