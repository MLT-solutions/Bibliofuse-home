# Cara Mengorganisasi Perpustakaan Ebook Tanpa Memasukkan Metadata atau Nomor ISBN

Kebanyakan pembaca ebook meminta Anda memasukkan judul, pengarang, genre, dan ISBN saat menambahkan buku. Jika file sudah memiliki metadata yang disematkan, pembaca mengisinya secara otomatis. Jika tidak — yang terjadi pada banyak file EPUB dan TXT yang benar-benar Anda miliki — sesi entri data yang panjang menunggu Anda.

[GrepTag Reader](/id/grepreader/) mengambil pendekatan sebaliknya. Ia membaca teks sebenarnya di dalam setiap buku dan secara otomatis mengekstrak tag dari kontennya. Anda tidak memasukkan apa pun. Perpustakaan mengatur dirinya sendiri.

## Cara GrepTag Reader Mengekstrak Tag dari Konten

Saat Anda mengimpor file EPUB atau TXT ke [GrepTag Reader](/id/grepreader/), ia membaca teks lengkap buku tersebut dan mencari kata kunci yang berulang yang menunjukkan topik buku itu.

Tag yang dihasilkan mencerminkan konten sebenarnya:
- Novel berlatar Tokyo dengan karakter samurai: `jepang`, `samurai`, `historis`, `aksi`
- Manual teknis tentang alat baris perintah Linux: `linux`, `terminal`, `pemrograman`
- Catatan perjalanan ke Asia Tenggara: `perjalanan`, `asia`, `memoar`

Penandaan otomatis berjalan saat buku diimpor. Anda tidak perlu memicu pemindaian secara manual.

## Pemfilteran Multi-Tag — Logika AND

Pemfilteran tag di GrepTag Reader menggunakan logika AND: saat memilih beberapa tag, Anda melihat buku yang cocok dengan *semua* tag.

- Buku `fiksi-ilmiah` DAN `cerita-pendek` — hanya koleksi dalam genre tersebut
- Buku `jepang` DAN `detektif` — menampilkan fiksi misteri Jepang
- Buku `filsafat` DAN `kuno` — mempersempit ke karya Yunani-Romawi kuno

## Format yang Didukung

GrepTag Reader menganalisis konten teks file **EPUB** dan **TXT**.

Perpustakaan Anda — termasuk tag yang dihasilkan otomatis dan kemajuan membaca — disinkronkan melalui iCloud.

Impor file EPUB dan TXT yang ada ke [GrepTag Reader](/id/grepreader/). Penandaan otomatis berjalan segera saat impor. Tersedia untuk iPhone, iPad, dan Mac.
