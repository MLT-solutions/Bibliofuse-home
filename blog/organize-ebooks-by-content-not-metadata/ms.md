# Cara Mengorganisasi Perpustakaan Ebook Tanpa Memasukkan Metadata atau Nombor ISBN

Kebanyakan pembaca ebook meminta anda memasukkan tajuk, pengarang, genre, dan ISBN apabila menambah buku. Jika fail sudah mempunyai metadata yang disematkan, pembaca mengisinya secara automatik. Jika tidak — yang berlaku pada banyak fail EPUB dan TXT yang anda benar-benar miliki — sesi kemasukan data yang panjang menunggu anda.

[GrepTag Reader](/ms/grepreader/) mengambil pendekatan yang bertentangan. Ia membaca teks sebenar di dalam setiap buku dan secara automatik mengekstrak tag daripada kandungannya. Anda tidak memasukkan apa-apa. Perpustakaan mengatur dirinya sendiri.

## Cara GrepTag Reader Mengekstrak Tag daripada Kandungan

Apabila anda mengimport fail EPUB atau TXT ke [GrepTag Reader](/ms/grepreader/), ia membaca teks penuh buku tersebut dan mencari kata kunci berulang yang menunjukkan topik buku itu.

Tag yang dijana mencerminkan kandungan sebenar:
- Novel berlatar Tokyo dengan watak samurai: `jepun`, `samurai`, `sejarah`, `aksi`
- Manual teknikal tentang alat baris perintah Linux: `linux`, `terminal`, `pengaturcaraan`
- Catatan perjalanan ke Asia Tenggara: `perjalanan`, `asia`, `memoir`

Penandaan automatik berjalan semasa buku diimport. Anda tidak perlu mencetuskan pengimbasan secara manual.

## Penapisan Multi-Tag — Logik DAN

Penapisan tag dalam GrepTag Reader menggunakan logik DAN: apabila memilih beberapa tag, anda melihat buku yang sepadan dengan *semua* tag.

- Buku `fiksyen-sains` DAN `cerita-pendek` — hanya koleksi dalam genre tersebut
- Buku `jepun` DAN `detektif` — menunjukkan fiksyen misteri Jepun
- Buku `falsafah` DAN `kuno` — mempersempit ke karya Greek-Rom kuno

## Format yang Disokong

GrepTag Reader menganalisis kandungan teks fail **EPUB** dan **TXT**.

Perpustakaan anda — termasuk tag yang dijana secara automatik dan kemajuan membaca — disegerakkan melalui iCloud.

Import fail EPUB dan TXT anda yang sedia ada ke [GrepTag Reader](/ms/grepreader/). Penandaan automatik berjalan segera semasa import. Tersedia untuk iPhone, iPad, dan Mac.
