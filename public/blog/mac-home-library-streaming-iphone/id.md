# Streaming Perpustakaan Komik Mac ke iPhone via Wi-Fi (Tanpa Menyalin File)

Hard drive Mac Anda menyimpan 400 GB file CBZ dan EPUB — puluhan tahun koleksi manga, novel grafis, dan komik hasil scan. iPhone Anda hanya memiliki 64 GB, dan sebagian besar sudah terpakai. iCloud berjalan lambat dan menghabiskan penyimpanan. Wi-Fi Transfer untuk volume individual juga merepotkan jika Anda memiliki koleksi lengkap.

Mac Home Library di [BiblioFuse](/id/) menyelesaikan masalah ini dengan cara yang berbeda. Alih-alih memindahkan file ke ponsel, aplikasi ini melakukan streaming. Mac Anda menjadi server lokal; iPhone membaca halaman sesuai permintaan. Tidak ada yang disalin. Tidak ada yang diunggah ke cloud. Anda mendapatkan akses ke seluruh perpustakaan 400 GB di iPhone selama terhubung ke jaringan Wi-Fi yang sama.

## Apa Itu Mac Home Library

Mac Home Library adalah fitur streaming lokal, bukan sinkronisasi. Perbedaannya penting.

**Sinkronisasi** (seperti iCloud) menyalin file ke perangkat. Untuk menyinkronkan 400 GB, Anda membutuhkan 400 GB ruang kosong di iPhone — yang kebanyakan orang tidak miliki.

**Streaming** tidak menyalin apa pun. File tetap ada di Mac; iPhone mengambil halaman saat Anda membaca. Ketika Anda mengetuk volume di tampilan Mac Library di iPhone, [BiblioFuse](/id/) meminta halaman yang relevan melalui jaringan lokal. Penyimpanan yang digunakan di iPhone: hampir nol.

## Yang Anda Butuhkan

- iPhone dengan iOS 17 atau yang lebih baru
- Mac di jaringan Wi-Fi yang sama dengan iPhone
- [BiblioFuse](/id/) terinstal di kedua perangkat (aplikasi iOS dan aplikasi pendamping Mac)
- Perpustakaan komik tersimpan secara lokal di Mac

## Menyiapkan Mac Home Library

Pengaturan membutuhkan sekitar dua menit dan tidak memerlukan konfigurasi jaringan khusus.

**Di Mac Anda:**

1. Buka **BiblioFuse** (aplikasi pendamping Mac).
2. Pergi ke **Preferensi → Home Library**.
3. Klik **Aktifkan Berbagi Home Library**.
4. Jika macOS meminta izin untuk berkomunikasi di jaringan lokal, klik **Izinkan**.
5. Anda akan melihat URL lokal seperti `bibliofuse.local:8765` — itulah alamat yang digunakan iPhone untuk menemukan Mac.

**Di iPhone Anda:**

1. Buka **BiblioFuse** di iPhone.
2. Ketuk tab **Perpustakaan**.
3. Ketuk pemilih sumber di bagian atas — Anda akan melihat **Mac Home Library** di samping perpustakaan lokal.
4. Ketuk **Mac Home Library**. Jika Mac Anda menyala dan berbagi diaktifkan, koneksi selesai dalam beberapa detik dan seluruh perpustakaan Mac Anda muncul.

Tidak perlu mengonfigurasi alamat IP, pengaturan router, atau penerusan port. BiblioFuse menggunakan Bonjour untuk menemukan Mac secara otomatis di jaringan lokal.

## Menjelajahi dan Membaca

Tampilan Mac Library di iPhone mencerminkan struktur folder di Mac Anda. Jika Anda mengorganisasi manga berdasarkan seri, Anda akan melihat folder yang sama.

Ketuk folder untuk menjelajahi volume. Ketuk volume untuk membukanya. BiblioFuse mengambil beberapa halaman pertama dengan segera. Di jaringan Wi-Fi 5 GHz, halaman individual dimuat dalam waktu kurang dari satu detik, bahkan untuk file CBZ beresolusi tinggi.

Pengalaman membaca identik dengan membaca volume yang tersimpan secara lokal: mode kanan-ke-kiri untuk manga, gulir vertikal untuk webtoon, halaman ganda dalam mode lanskap, zoom dan geser.

## Cara Kerja Progres Membaca

Progres membaca dari sesi Mac Home Library disinkronkan melalui iCloud, sama seperti progres dari volume yang disimpan secara lokal. Jika Anda membaca hingga halaman 87 dari volume yang di-streaming dari Mac, iPhone mencatat halaman 87 dan mengirimkannya ke iCloud. Jika Anda kemudian membuka volume yang sama di iPad, volume tersebut terbuka di halaman 87.

## Perbedaan dengan Wi-Fi Transfer dan iCloud Sync

Ketiga fitur di [BiblioFuse](/id/) ini memiliki tujuan yang berbeda.

**Wi-Fi Transfer** memindahkan file dari Mac ke iPhone. Gunakan untuk membangun koleksi lokal — volume yang Anda inginkan tersedia secara offline.

**iCloud Sync** menjaga file tetap sinkron antar perangkat melalui penyimpanan cloud Apple. Terbaik untuk perpustakaan berukuran sedang.

**Mac Home Library** melakukan streaming tanpa mentransfer. Gunakan untuk perpustakaan lengkap Anda di rumah dengan Wi-Fi yang baik. Tidak ada yang menggunakan penyimpanan iPhone; Mac adalah satu-satunya sumber data.

## Tips untuk Performa Terbaik

**Gunakan Wi-Fi 5 GHz.** Pastikan Mac dan iPhone keduanya terhubung ke band 5 GHz untuk performa terbaik dengan file CBZ beresolusi tinggi.

**Jaga Mac tetap aktif.** Jika Mac masuk ke mode tidur, koneksi streaming akan terputus. Atur di **Pengaturan Sistem → Baterai → Cegah tidur** saat terhubung ke adaptor daya.

**Perpustakaan di SSD lebih cepat.** Jika perpustakaan ada di HDD eksternal, waktu akses lebih lambat dan dapat menyebabkan sedikit penundaan saat memuat halaman pertama setiap volume.

## Membaca Offline dari Perpustakaan Mac

Jika Anda tahu akan berada tanpa Wi-Fi, Anda dapat mengunduh volume individual dari perpustakaan Mac ke iPhone sebelum pergi.

Di tampilan Mac Library di iPhone, ketuk **ikon unduhan** di samping volume apa pun. BiblioFuse menyalinnya ke penyimpanan lokal iPhone melalui Wi-Fi Transfer. Setelah itu, volume tersebut tersedia secara offline.

## Memulai

[BiblioFuse](/id/) tersedia di App Store untuk iPhone dan iPad. Mac Home Library adalah bagian dari aplikasi standar — tidak diperlukan pembelian tambahan. Instal di Mac dan iPhone Anda, aktifkan berbagi di Preferensi Mac, dan seluruh perpustakaan Anda akan tersedia di iPhone saat Anda berikutnya terhubung ke jaringan yang sama.
