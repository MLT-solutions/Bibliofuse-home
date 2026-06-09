# Cara Tukar PDF kepada CBZ Dalam Talian (Tanpa Perisian, Tanpa Muat Naik)

Anda telah memuat turun novel grafik yang diimbas dalam format PDF. Ia dibuka dengan baik dalam Preview atau Acrobat, tetapi dalam pembaca komik anda pengalamannya tidak betul — halaman memuatkan dengan lambat, zum menjadi kabur, dan membalik halaman tidak cepat seperti yang sepatutnya. Anda tahu CBZ lebih sesuai untuk komik. Cabarannya ialah menukar tanpa memasang lagi satu aplikasi desktop, atau menghantar fail anda ke laman web yang tidak anda kenali.

[BiblioFuse Web Tool](/ms/webapp/) menyelesaikan ini terus dalam pelayar anda. Tanpa akaun. Tanpa muat naik. Tanpa pemasangan perisian. Fail anda tidak akan meninggalkan peranti anda langsung.

## Mengapa PDF Tidak Sesuai untuk Komik

PDF direka untuk dokumen — tata letak padat teks yang bertujuan untuk cetakan. Ia menangani fon, grafik vektor, dan pengaliran semula kandungan dengan sangat baik. Untuk tujuan itu, ia memang unggul.

Komik adalah sesuatu yang berbeza. Komik yang diimbas adalah urutan gambar halaman penuh, satu setiap halaman. PDF membalut gambar-gambar itu dalam struktur dalaman yang menambah saiz fail tanpa nilai tambah, menggunakan pemproses halaman yang lebih perlahan daripada penampil gambar khusus, dan menghalang pembaca komik daripada melakukan pra-cache halaman yang mendahului kedudukan semasa anda.

CBZ adalah arkib ZIP yang mengandungi urutan fail gambar bernombor. Hampir tiada overhed. Pembaca komik menyahzipkan gambar terlebih dahulu, menyimpannya dalam ingatan, dan membalik halaman secara serta-merta. Kualiti zum ditentukan sepenuhnya oleh fail gambar, bukan oleh pemproses yang cuba mentafsir format dokumen.

Apabila anda menukar komik PDF kepada CBZ, anda mengekstrak gambar halaman mentah dari PDF dan membungkus semula sebagai ZIP. Hasilnya ialah fail yang pembaca komik anda memang dibina khusus untuk mengendalikannya.

## Apa yang Dilakukan BiblioFuse Web Tool

[BiblioFuse Web Tool](/ms/webapp/) berjalan sepenuhnya dalam WebAssembly di dalam pelayar anda. WebAssembly melaksanakan kod yang dikompil dalam persekitaran terpencil, yang bermakna aplikasi boleh melakukan pemprosesan fail yang serius — jenis yang biasanya hanya tersedia pada perisian desktop asli — tanpa menghantar apa pun ke pelayan.

Fail anda dibaca dari cakera tempatan terus ke dalam ingatan pelayar. Penukaran dijalankan dalam tab pelayar. Fail output ditulis kembali ke cakera anda. Tiada apa yang melalui sebarang pelayan pada bila-bila masa.

Ini penting jika komik anda mengandungi kandungan berlesen, arkib peribadi, atau fail yang anda tidak mahu disimpan dalam awan orang lain.

## Cara Menukar PDF kepada CBZ

**Langkah 1: Buka alat**

Pergi ke [BiblioFuse Web Tool](/ms/webapp/) dalam mana-mana pelayar desktop — Chrome, Firefox, Safari, Edge. Tiada log masuk atau akaun diperlukan. Peringkat percuma menyokong kelompok sehingga tiga fail pada satu masa.

**Langkah 2: Tambah fail PDF anda**

Klik zon jatuh atau seret fail PDF anda terus ke atasnya. Anda boleh menambah beberapa fail sekaligus. Alat ini menunjukkan setiap fail dengan nama dan saiz yang dikesan. Jika fail terlalu besar untuk ingatan pelayar yang tersedia, anda akan melihat amaran sebelum pemprosesan bermula.

**Langkah 3: Pilih CBZ sebagai output dan tukar**

Pilih CBZ sebagai format output daripada pilihan penukaran. Klik Tukar. Alat ini memproses setiap fail secara berurutan, mengekstrak gambar halaman dari PDF dan mengemasnya ke dalam arkib CBZ. Petunjuk kemajuan menunjukkan di mana anda berada. Apabila penukaran selesai, fail output anda muncul sedia untuk dimuat turun.

Fail yang dimuat turun mengekalkan nama yang sama dengan asal anda, dengan `.cbz` menggantikan `.pdf`.

## Kualiti Gambar Semasa Penukaran

Inilah soalan yang paling kerap timbul, dan jawapannya bergantung pada bagaimana PDF sumber anda dicipta.

**PDF yang diimbas:** Ini adalah kes yang paling biasa untuk komik lama dan jilid manga. PDF mengandungi gambar imbasan yang disimpan terus di dalamnya. Penukaran mengekstraknya tanpa mengekod semula. Gambar dalam CBZ anda adalah sama dengan gambar dalam PDF — tiada kehilangan kualiti langsung, tiada mampatan digunakan.

**PDF yang dijana:** Sesetengah PDF dijana daripada seni vektor atau tata letak berasaskan teks. Menukarnya kepada CBZ akan merasterkan setiap halaman pada resolusi yang ditetapkan. [BiblioFuse Web Tool](/ms/webapp/) menggunakan resolusi lalai yang tinggi untuk ini, jadi hasilnya kelihatan tajam pada tahap zum bacaan normal.

**PDF yang telah dimampatkan:** Jika mampatan JPEG yang berat digunakan semasa PDF asal dicipta, gambar yang diekstrak mencerminkan mampatan sedia ada itu. Alat ini tidak menambah mampatan lagi, tetapi ia juga tidak boleh membuat asal mampatan yang sudah terbina.

Untuk komik yang diimbas — senario penukaran yang paling biasa — anda mendapat pengekstrakan tanpa kehilangan. CBZ biasanya bersaiz sama dengan PDF atau sedikit lebih kecil, tanpa perubahan kualiti.

## Menukar Satu Siri Secara Berkelompok

Jika anda mempunyai satu siri yang merangkumi beberapa jilid PDF, [BiblioFuse Web Tool](/ms/webapp/) membolehkan anda menukar keseluruhan kelompok dalam satu sesi. Tambah semua fail PDF anda sekaligus, tetapkan sasaran kepada CBZ, dan mulakan. Setiap fail diproses dan tersedia untuk dimuat turun secara individu apabila siap.

Peringkat percuma mengendalikan sehingga tiga fail setiap kelompok. Untuk siri yang lebih panjang, jalankan beberapa kelompok dalam sesi pelayar yang sama — tiada muat semula halaman diperlukan antara kelompok.

## Memindahkan Fail CBZ ke Telefon Selepas Penukaran

Setelah penukaran selesai dan anda telah memuat turun fail CBZ, terdapat beberapa pilihan yang mudah untuk memasukkannya ke telefon anda:

**Pemindahan Wi-Fi (pilihan terpantas):** Jika anda menggunakan BiblioFuse di iPhone anda, ciri [Pemindahan Wi-Fi](/ms/) terbina dalam aplikasi membolehkan anda menyeret fail dari tetingkap pelayar pada mana-mana komputer dalam rangkaian yang sama. Buka BiblioFuse, aktifkan Pemindahan Wi-Fi, dan seret fail CBZ anda dari pelayar Mac atau PC anda terus ke dalam pustaka. Tanpa kabel USB, tanpa iTunes, tanpa storan awan.

**iCloud Drive:** Letakkan fail ke dalam folder iCloud Drive yang dipautkan kepada BiblioFuse dan ia akan disegerakkan secara automatik apabila telefon anda berada di Wi-Fi.

**AirDrop:** Di Mac, pilih fail CBZ anda dalam Finder, klik kanan, dan AirDrop ke iPhone anda. Ketik "Buka dalam BiblioFuse" apabila pemindahan selesai.

## Soalan Lazim

**Adakah alat ini mengendalikan PDF yang mengandungi imej dan lapisan teks?**

Ya. PDF dengan lapisan imej imbasan ditambah lapisan teks OCR dikendalikan dengan betul — alat ini mengekstrak imej halaman visual. Lapisan teks tidak dibawa ke CBZ (CBZ adalah format arkib imej mengikut rekabentuk), tetapi PDF asal anda kekal tidak berubah.

**Apakah had saiz fail?**

Tiada had saiz yang dikuatkuasakan oleh alat ini. Had praktikal bergantung pada ingatan pelayar yang tersedia — kebanyakan pelayar desktop mengendalikan fail sehingga beberapa gigabait tanpa masalah. Fail yang sangat besar pada perkakasan lama mungkin lambat tetapi biasanya akan selesai.

**Adakah ia berfungsi pada pelayar mudah alih?**

Ya, walaupun prestasinya jauh lebih perlahan berbanding desktop. Untuk PDF yang besar, pelayar desktop adalah disyorkan.

**Adakah ada had bilangan halaman?**

Tidak. Alat ini memproses berapa pun halaman yang ada dalam PDF.

**Format imej apa yang digunakan oleh CBZ?**

CBZ mengandungi format imej apa pun yang disimpan dalam PDF sumber. Untuk komik yang diimbas, biasanya JPEG. Alat ini tidak mentranscode imej semasa penukaran melainkan anda telah mengaktifkan mampatan sebagai langkah berasingan.

## Aliran Kerja Lengkap: Dari PDF ke Telefon

[BiblioFuse Web Tool](/ms/webapp/) mengendalikan penukaran PDF ke CBZ tanpa memerlukan pemasangan perisian, akaun awan, atau muat naik fail. Fail anda kekal pada mesin anda sepanjang keseluruhan proses.

Digabungkan dengan BiblioFuse di iPhone atau iPad, anda mendapat aliran kerja hujung ke hujung tanpa geseran: tukar dalam pelayar, Pemindahan Wi-Fi ke telefon anda, baca dalam aplikasi. Anda tidak memerlukan pengurus komik desktop yang khusus, perkhidmatan penyegerakan, atau sebarang langkah perantaraan.

Jika anda mempunyai folder komik PDF yang sudah lama ingin ditukar, buka [BiblioFuse Web Tool](/ms/webapp/) sekarang dan letakkan kelompok pertama.
