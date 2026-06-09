# CBZ vs CBR vs EPUB — Format Komik dan E-buku Dijelaskan

BiblioFuse menyokong CBZ, CBR, EPUB, PDF, ZIP, RAR, dan TXT pada iPhone, iPad, dan Mac dengan iOS 17 atau lebih baru — membaca semua format komik dan e-buku ini secara native tanpa sebarang langkah penukaran. CBZ dan CBR adalah arkib imej yang paling sesuai untuk komik dan manga, manakala EPUB adalah format teks reflow yang direka untuk novel dan bukan fiksyen.

Anda melihat halaman muat turun dan mendapati empat jenis fail: CBZ, CBR, EPUB, PDF. Semua mendakwa sebagai "buku yang sama". Yang mana perlu dimuat turun? Yang mana akan berjalan di telefon, tablet, atau Mac anda?

Panduan ini menjelaskan semuanya. Selepas membaca, anda akan tahu dengan tepat apakah setiap format, apa kandungannya, dan yang mana sesuai untuk situasi anda.

## Jawapan Ringkas

| Format | Kandungan | Terbaik untuk |
|--------|-----------|--------------|
| CBZ | Imej dalam arkib ZIP | Komik, manga, novel grafik |
| CBR | Imej dalam arkib RAR | Sama seperti CBZ, keluaran lama |
| EPUB | HTML + imej dalam ZIP | E-buku teks, novel |
| PDF | Halaman format tetap | Dokumen, buku teknikal |

## CBZ — Comic Book ZIP

CBZ singkatan Comic Book ZIP. Format ini mempunyai tepat satu peraturan: tukar nama fail ZIP kepada `.cbz`. Tiada pengekodan khas. Buka `.cbz` dengan mana-mana utiliti zip dan anda akan menemukan folder gambar bernombor: `001.jpg`, `002.jpg`, dalam urutan bacaan.

CBZ popular pada awal 2000-an kerana ia menyelesaikan masalah mudah: fail komik perlu beredar dalam talian, dan ZIP ada di mana-mana. Sambungan `.cbz` memberi isyarat kepada perisian pembaca: "ini komik, paparkan imej secara berurutan."

**Kandungannya:** Imej berurutan, biasanya JPG, PNG, atau WebP. Sesetengah fail menyertakan `ComicInfo.xml` dengan metadata. [BiblioFuse](/ms/) membaca metadata ini untuk memaparkan maklumat yang betul dalam perpustakaan.

**Sokongan:** Sejagat. Setiap aplikasi komik di setiap platform menyokong CBZ.

## CBR — Comic Book RAR

CBR singkatan Comic Book RAR. Konsep yang sama dengan CBZ, tetapi bekas adalah arkib RAR bukan ZIP.

RAR popular dalam komuniti perkongsian fail semasa kebanyakan imbasan komik dibuat, jadi keluaran lama sering dalam format CBR. Struktur dalaman adalah sama. [BiblioFuse](/ms/) menyokong kedua-duanya.

**Perlu ditukar?** Jika anda mempunyai koleksi CBR yang besar, menukarnya ke CBZ adalah munasabah. Penukaran adalah tanpa kerugian kerana hanya mengarkibkan semula fail yang sama.

**Nota RAR5:** Sesetengah CBR yang sangat lama menggunakan RAR5 yang tidak dapat dibuka oleh perisian lama. Mengemas semula sebagai CBZ sentiasa menyelesaikan masalah ini.

## EPUB — Electronic Publication

EPUB ialah standard W3C terbuka untuk e-buku berat teks — novel, bukan fiksyen. Tidak seperti CBZ dan CBR, kandungannya adalah *teks*, bukan imej.

EPUB ialah arkib ZIP yang mengandungi:
- **Fail HTML atau XHTML** — teks bab
- **Helaian gaya CSS** — fon, jarak, susun atur
- **Imej** — kulit dan ilustrasi
- **Manifes OPF** — senarai semua fail dan urutan bacaan
- **Fail NCX atau NAV** — jadual kandungan

Perbezaan utama dari CBZ:
- **Aliran semula:** Pembaca mengawal saiz fon, jarak baris, dan warna latar.
- **Kebolehaksesan:** Pembaca skrin boleh membaca teks dengan kuat.
- **Kebolehan carian:** Boleh mencari mana-mana perkataan dalam EPUB.

**DRM:** Banyak EPUB komersial menggunakan DRM Adobe atau FairPlay Apple. EPUB bebas DRM berfungsi dalam mana-mana pembaca, termasuk [BiblioFuse](/ms/).

## PDF — Portable Document Format

PDF ialah format susun atur tetap. Tidak seperti EPUB, penulis mengawal tepat di mana setiap elemen berada di setiap halaman. PDF direka untuk cetak.

Untuk komik, PDF boleh digunakan tetapi tidak ideal: fail sering besar dan zum di telefon tidak selesa. Untuk manual teknikal dan dokumen yang diimbas, PDF sering menjadi pilihan terbaik.

## Format Mana yang Dimuat Turun?

**Manga atau komik:** CBZ adalah pilihan terbaik. Jika hanya CBR tersedia, muat turun CBR — keduanya sama secara praktikal.

**Novel dan e-buku teks:** EPUB sentiasa. Fleksibel, boleh diakses, dan selesa dibaca pada mana-mana saiz skrin.

**Buku teknikal atau yang diimbas:** PDF jika susun atur penting; EPUB jika sumber menawarkannya.

## Keserasian dalam BiblioFuse

[BiblioFuse](/ms/) membaca semua format ini secara asli di iPhone, iPad, dan Mac: CBZ, CBR, ZIP, RAR, EPUB, PDF, dan TXT. Tab Alat mengendalikan penukaran dan pemampatan terus pada peranti.

## Nota tentang Saiz Fail

| Format | Saiz relatif | Sebab |
|--------|-------------|-------|
| CBZ dengan PNG | Terbesar | Imej tanpa kerugian |
| CBZ dengan JPEG | Sederhana | Pemampatan lossy |
| CBZ dengan WebP | Terkecil | Pemampatan moden |
| EPUB (teks) | Sangat kecil | Teks dimampatkan dengan sangat baik |

Jilid manga dalam format PNG CBZ biasanya bersaiz 300–400 MB. Jilid yang sama dimampatkan ke WebP bersaiz 40–80 MB — pengurangan 80% tanpa kehilangan kualiti yang ketara di skrin telefon.

## Soalan Lazim

**Apakah perbezaan antara format komik CBZ dan CBR?**
CBZ dan CBR kedua-duanya adalah arkib imej berjujukan — CBZ menggunakan bekas ZIP dan CBR menggunakan RAR. Imej di dalamnya adalah identik; hanya format arkib luar yang berbeza. CBZ adalah piawaian moden kerana ZIP bersifat terbuka; CBR ditemui dalam keluaran lama. BiblioFuse membaca kedua-duanya tanpa penukaran.

**Bolehkah membaca fail EPUB dalam aplikasi pembaca komik?**
Boleh, jika aplikasi menyokong EPUB secara native. BiblioFuse mengendalikan fail EPUB tanpa DRM bersama CBZ dan CBR — anda boleh menyimpan novel dan novel grafik dalam perpustakaan yang sama. EPUB adalah format reflow, jadi saiz fon, jarak baris, dan jidar boleh disesuaikan.

**Format mana yang lebih baik untuk manga — CBZ atau EPUB?**
CBZ hampir selalu menjadi pilihan terbaik untuk manga. Halaman manga adalah imej penuh halaman, dan CBZ direka khusus untuk itu. Muat turun CBZ (atau CBR) apabila tersedia untuk komik dan manga.

**Bagaimana cara menukar CBR kepada CBZ?**
CBR dan CBZ mengandungi fail imej yang identik — hanya bekasnya berbeza. Anda boleh mengarsipkan semula: ekstrak CBR, pilih semua imej, mampat ke ZIP, dan namakan semula fail dari .zip ke .cbz. Tab Alat BiblioFuse juga boleh mengendalikan penukaran CBR ke CBZ terus pada iPhone.

**Mengapa fail CBZ saya sangat besar?**
Fail CBZ yang besar biasanya mengandungi imej PNG resolusi tinggi yang tanpa kehilangan dan berat. Menukar ke WebP pada kualiti 80% biasanya mengurangkan saiz fail sebanyak 75–88% tanpa sebarang perubahan yang ketara di skrin telefon. Alat pemampatan terbina dalam BiblioFuse mengendalikan ini pada peranti.
