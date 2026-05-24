# Ekstrak Teks daripada Komik dan Manga di iPhone dengan OCR

Anda sedang membaca jilid ketiga siri manga apabila seorang watak menyebut nama puak atau teknik dalam bahasa Jepun yang ingin anda cari dalam kamus. Atau anda menemukan dialog yang berkesan dan ingin menyimpannya. Masalahnya: halaman komik adalah imej, bukan teks. Anda tidak boleh mengetuk belon dialog untuk memilih kandungannya.

OCR dalam [BiblioFuse](/ms/) mengubah perkara ini. Aplikasi boleh mengimbas mana-mana halaman — atau kawasan yang dipilih — mengekstrak teks yang ditemui dan menyerahkannya kepada anda sebagai rentetan yang boleh disalin. Ia berfungsi dengan fail CBZ, CBR, EPUB dan PDF. Ia mengendalikan bahasa Jepun, Cina, Korea dan aksara Barat. Dan ia diproses sepenuhnya pada peranti tanpa memerlukan sambungan internet.

## Mengapa OCR pada Komik Adalah Mencabar

OCR pada dokumen biasa sudah merupakan masalah yang diselesaikan. Halaman komik lebih mencabar kerana tiga sebab:

**Teks berada dalam belon dengan tepi melengkung.** Teks terletak di atas imej lukisan dengan garisan kompleks di belakangnya, menyukarkan sistem OCR.

**Fon sering bergaya atau tulisan tangan.** Komik Barat menggunakan fon tersuai yang meniru tulisan tangan atau mempunyai bentuk huruf yang terdistort untuk penekanan.

**Manga mempunyai konvensyen susun atur yang khusus.** Teks Jepun dalam manga biasanya menegak, dari kanan ke kiri, dan padat dalam belon sempit.

[BiblioFuse](/ms/) melatih OCR-nya khusus untuk susun atur komik dan manga, dengan model berasingan untuk teks Barat mendatar dan teks CJK (Cina, Jepun, Korea) menegak.

## Yang Boleh Dilakukan dengan Teks yang Diekstrak

- **Mencari perbendaharaan kata dalam bahasa asing.** Jika anda membaca manga dalam bahasa Jepun, ekstrak dialog dari panel dan tampalkan ke aplikasi kamus atau penterjemah.
- **Menyalin petikan.** Dialog yang berkesan, keterangan gambar, tajuk bab.
- **Mencari dalam siri.** Ekstrak nama watak atau istilah teknikal dan cari dalam jilid lain.
- **Kebolehcapaian.** Ekstrak teks dari komik yang diimbas untuk digunakan dalam pembaca skrin atau aplikasi teks ke pertuturan.
- **Terjemahan kandungan yang tidak diterjemahkan.** Untuk manga yang belum diterjemahkan secara rasmi, OCR + terjemahan mesin memberikan pengalaman membaca yang kasar.

## Cara Menggunakan OCR dalam BiblioFuse

OCR disepadukan dalam paparan pembaca. Tidak perlu menukar mod.

**Untuk mengimbas halaman penuh:**

1. Semasa membaca, ketuk bahagian tengah halaman untuk memaparkan kawalan.
2. Ketuk butang **OCR** dalam bar alat.
3. BiblioFuse mengimbas halaman semasa dan memaparkan teks yang diekstrak dalam panel bawah.
4. Ketuk blok teks untuk menyalinnya, atau gunakan **Salin Semua**.

**Untuk mengimbas kawasan tertentu:**

1. Tekan lama mana-mana bahagian halaman.
2. Seret untuk melukis segiempat pemilihan di sekitar kawasan yang dikehendaki.
3. Angkat jari anda. BiblioFuse mengimbas kawasan yang dipilih dan memaparkan hasilnya.
4. Ketuk untuk menyalin atau berkongsi.

Mod pemilihan kawasan lebih tepat untuk halaman yang padat atau apabila anda mahukan teks dari satu belon sahaja.

## Pengesanan Bahasa dan Sokongan CJK

BiblioFuse mengesan aksara secara automatik dalam kebanyakan kes. **Teks Jepun menegak** dikendalikan dengan betul — BiblioFuse membina semula susunan membaca dari atas ke bawah dalam susunan lajur kanan ke kiri.

Untuk **bahasa Cina Tradisional dan Mudah**, BiblioFuse membezakan set aksara dalam output OCR. **Manhwa Korea** (teks mendatar) dikendalikan oleh saluran paip yang sama dengan aksara CJK lain.

## Ketepatan: Apa yang Dijangkakan

- **Imbasan resolusi tinggi (600+ DPI):** Sangat tepat.
- **Versi standard (300 DPI):** Tepat pada teks bersih; beberapa ralat pada fon bergaya.
- **Imbasan resolusi rendah atau dimampatkan:** Ketepatan menurun dengan artifak JPEG. Peningkatan skala dalam [BiblioFuse](/ms/) boleh membantu sebelum menjalankan OCR.
- **Komik dengan huruf tangan:** Lebih bervariasi. Fon bercetak mesin lebih mudah dibaca daripada tulisan tangan.

## Yang Boleh Dilakukan dengan Teks

Panel teks yang diekstrak dalam [BiblioFuse](/ms/) menyokong tindakan helaian kongsi iOS standard:

- **Salin ke papan klip** dan tampal ke aplikasi lain
- **Kongsi** terus ke aplikasi terjemahan, Nota atau aplikasi mesej
- **Buka dalam Safari** untuk mencari

Untuk teks Jepun, kamus sistem iOS menyertakan carian Jepun-Inggeris. Salin kanji yang diekstrak dan buka aplikasi Terjemah atau aplikasi kamus.

## Petua untuk Hasil yang Lebih Baik

**Gunakan pemilih kawasan untuk belon individu.** Imbasan halaman penuh memberikan semua teks, tetapi memilih satu belon memberikan hasil yang lebih bersih apabila belon berdekatan.

**Aktifkan peningkatan skala untuk imbasan berkualiti rendah.** Dalam tetapan pembaca BiblioFuse, peningkatan skala imej menerapkan penapis penajaman yang meningkatkan kualiti input OCR.

**Untuk manga, pegang telefon tegak.** OCR pada teks menegak sensitif terhadap putaran.

## OCR Berjalan pada Peranti

Semua pemprosesan OCR dalam [BiblioFuse](/ms/) berjalan secara tempatan pada iPhone anda. Halaman tidak dihantar ke pelayan. Tiada imej yang dimuat naik untuk diproses, tiada panggilan API luaran.

## Bermula

OCR tersedia dalam [BiblioFuse](/ms/) untuk iOS tanpa sebarang pembelian tambahan. Muat turun aplikasi dari App Store, import komik atau manga, dan cuba butang OCR semasa membaca. Terutama bagi pembaca manga, ini adalah ciri yang sukar untuk tidak digunakan setelah mencubanya.
