# Cara Pindahkan Komik ke iPhone Tanpa iTunes atau Kabel

Koleksi manga anda tersimpan di Mac. Dua ratus fail CBZ, disusun mengikut siri, setiap jilid bersaiz antara 80 hingga 200 MB. iPhone adalah tempat anda sebenarnya membaca — di atas katil, dalam tren, semasa rehat makan tengah hari. Memindahkan fail-fail itu ke sana adalah masalah yang jarang dibincangkan sesiapa.

E-mel dibataskan pada 25 MB. AirDrop boleh digunakan, tetapi anda perlu menghantar fail satu demi satu dan meluluskan setiap pemindahan. iCloud Drive boleh menyegerakkan, tetapi memuat naik 20 GB komik terlebih dahulu kemudian menunggu ia dimuat turun semula tidaklah praktikal. Perkongsian fail iTunes masih wujud tetapi memerlukan kabel dan tahap kesabaran yang sudah lama ditinggalkan kebanyakan orang.

[BiblioFuse](/ms/) menyelesaikan masalah ini dengan Wi-Fi Transfer — pelayan web tempatan terbina dalam yang membolehkan anda menyeret keseluruhan koleksi komik dari mana-mana pelayar di Mac atau PC anda terus ke iPhone, tanpa kabel, tanpa perlu memasang perisian di komputer, dan tanpa muat naik ke awan. Panduan ini membincangkan keseluruhan proses secara terperinci.

## Cara Wi-Fi Transfer Bekerja

Wi-Fi Transfer menjalankan pelayan HTTP kecil di iPhone anda, hanya kelihatan dalam rangkaian setempat anda. Apabila anda melawat alamat yang diberikan (seperti `http://192.168.1.x:8080`) dalam mana-mana pelayar, anda akan melihat antara muka muat naik seret dan lepas. Seret fail atau folder dari desktop anda ke tetingkap pelayar, dan [BiblioFuse](/ms/) menerimanya terus melalui Wi-Fi.

Kata kuncinya ialah *terus*. Fail berpindah dari komputer anda ke iPhone tanpa menyentuh sebarang perkhidmatan awan. Tiada apa yang dimuat naik ke pelayan pihak ketiga. Tiada keperluan untuk log masuk ke mana-mana akaun. Satu-satunya keperluan ialah kedua-dua peranti berada dalam rangkaian Wi-Fi yang sama.

Kelajuan pemindahan ditentukan oleh rangkaian setempat anda, bukan sambungan internet anda. Pada penghala rumah biasa, jangkakan 15–40 MB/s. Satu jilid manga 150 MB mengambil masa kira-kira lima saat.

## Langkah 1 — Pasang BiblioFuse

Jika belum, pasang [BiblioFuse](/ms/) dari App Store. Ia percuma dimuat turun tanpa memerlukan akaun atau log masuk.

Setelah dipasang, ia mencipta dua folder dalam aplikasi Fail iOS:
- **iCloud Drive → BiblioFuse** — storan tersegerak, boleh diakses di semua peranti Apple anda
- **Di iPhone Saya → BiblioFuse** — storan tempatan sahaja, lebih pantas tanpa kelewatan segerak

Fail yang dipindahkan melalui Wi-Fi Transfer akan tersimpan dalam folder storan tempatan secara lalai.

## Langkah 2 — Aktifkan Wi-Fi Transfer di iPhone Anda

1. Buka BiblioFuse
2. Ketik **Tetapan** (bahagian kanan bawah skrin perpustakaan)
3. Di bawah **Wi-Fi Import**, togol hidupkan
4. URL tempatan muncul: `http://192.168.x.x:8080`

Biarkan BiblioFuse terbuka dan skrin kekal hidup semasa pemindahan — iOS akan menggantung pelayan jika aplikasi bertukar ke latar belakang.

## Langkah 3 — Buka URL di Komputer Anda

Di Mac atau PC anda, buka mana-mana pelayar — Safari, Chrome, Firefox, Edge — dan taip URL yang ditunjukkan dalam BiblioFuse. Anda akan melihat halaman ringkas dengan zon jatuh.

Anda tidak perlu memasang apa-apa. Tiada sambungan, tiada aplikasi, tiada akaun. Halaman ini dihidangkan terus dari iPhone anda.

## Langkah 4 — Seret Komik Anda Masuk

Seret fail CBZ, CBR, ZIP, RAR, atau EPUB anda dari Finder (atau Windows Explorer) ke dalam zon jatuh pelayar. Anda boleh menyeret:

- Satu fail
- Beberapa fail sekaligus
- Keseluruhan folder jilid

Apabila anda menyeret folder, BiblioFuse menerima semua fail di dalamnya sambil mengekalkan struktur folder. Jika anda menyeret folder bernama `Berserk` yang mengandungi 40 jilid, semuanya tiba tersusun di bawah nama folder tersebut dalam perpustakaan anda.

Penunjuk kemajuan menunjukkan setiap fail yang sedang dimuat naik. Kelompok besar — 10 GB komik — boleh dijalankan tanpa pengawasan. Anda tidak perlu mengklik apa-apa atau meluluskan fail secara individu.

## Langkah 5 — Matikan Wi-Fi Transfer

Setelah pemindahan selesai, kembali ke BiblioFuse dan matikan Wi-Fi Transfer. Ini adalah langkah keselamatan — pelayan hanya boleh diakses dalam rangkaian setempat anda, tetapi mematikannya setelah selesai memastikan tiada orang lain dalam rangkaian yang boleh menyemak imbas kandungannya.

Fail yang dipindahkan kini muncul dalam perpustakaan secara automatik. Ketik mana-mana kulit buku untuk mula membaca.

## Rujukan Kelajuan Pemindahan

Angka-angka ini adalah anggaran, berdasarkan rangkaian rumah 802.11ac (Wi-Fi 5) moden:

| Saiz fail | Masa pemindahan |
|-----------|-----------------|
| 50 MB (jilid manga kecil) | ~2 saat |
| 150 MB (jilid manga tipikal) | ~5 saat |
| 500 MB (CBZ besar) | ~15 saat |
| 10 GB (siri lengkap) | ~5 minit |

Rangkaian 802.11n yang lebih lama atau sistem mesh dengan kesesakan akan lebih perlahan. Letakkan iPhone anda dekat dengan penghala jika anda memindahkan kelompok besar.

## Cara Lain untuk Memasukkan Komik ke iPhone

Wi-Fi Transfer adalah kaedah terpantas untuk koleksi besar, tetapi bukan satu-satunya.

**Helaian kongsi dari aplikasi Fail** — Jika komik sudah ada di iCloud Drive atau pada pemacu USB yang disambungkan ke Mac anda, tekan lama dalam aplikasi Fail dan ketik Kongsi → BiblioFuse. Terbaik untuk satu atau dua fail.

**Segerak iCloud Drive** — Salin fail ke `iCloud Drive → BiblioFuse` di Mac anda. Ia akan disegerakkan secara automatik ke iPhone anda. Kemajuan membaca juga disegerakkan dengan cara ini — berguna jika anda membaca di berbilang peranti. Kelemahannya: memerlukan muat naik ke iCloud terlebih dahulu, yang boleh lambat untuk koleksi besar.

**AirDrop** — Berfungsi untuk fail individu. Ketik ikon AirDrop, pilih iPhone anda, dan BiblioFuse akan menawarkan untuk membuka fail. Tidak praktikal untuk siri dengan banyak jilid.

**Tailscale / akses jauh** — Jika anda tidak berada dalam rangkaian yang sama dengan Mac anda, anda boleh menggunakan Tailscale untuk mencipta rangkaian maya peribadi antara peranti anda dan tetap menggunakan Wi-Fi Transfer atau penyegerakan iCloud dari jauh. Ini adalah persediaan lanjutan tetapi membuka akses ke perpustakaan rumah anda dari mana-mana sahaja.

## Penyelesaian Masalah

**Tidak dapat mencapai URL dari pelayar saya.**
Pastikan kedua-dua peranti berada dalam rangkaian Wi-Fi yang sama. Sesetengah penghala mengasingkan peranti antara satu sama lain (dipanggil "pengasingan pelanggan" atau "pengasingan AP") — semak tetapan penghala anda jika peranti tidak dapat melihat antara satu sama lain.

**Fail dipindahkan tetapi tidak muncul dalam perpustakaan.**
Tarik ke bawah dalam perpustakaan untuk menyegar semula. Semak folder **Di iPhone Saya → BiblioFuse** dalam aplikasi Fail untuk mengesahkan fail telah tiba. Fail yang berada di luar folder BiblioFuse tidak akan diindeks.

**Pemindahan berhenti di tengah jalan.**
Skrin mungkin telah dikunci dan iOS menggantung aplikasi. Kembali ke BiblioFuse, sahkan Wi-Fi Transfer masih hidup, dan mulakan semula muat naik pelayar. Fail yang telah dimuat naik adalah selamat.

**Fail CBR mengatakan "format tidak disokong".**
Sesetengah arkib CBR yang sangat lama menggunakan RAR5, yang tidak disokong secara universal. Kemas semula sebagai CBZ: ekstrak RAR, pilih semua imej, mampat ke ZIP, namakan semula `.zip` kepada `.cbz`. Tab Alat BiblioFuse juga boleh membantu penukaran format terus pada peranti.

## Apa yang Perlu Dilakukan Seterusnya

Setelah perpustakaan anda ada di iPhone, [BiblioFuse](/ms/) memberikan beberapa alat untuk menjadikannya lebih mudah diuruskan. Tab Alat membolehkan anda memampatkan fail CBZ di dalam peranti — berguna jika jilid 200 MB boleh dikecilkan kepada 40 MB tanpa kehilangan kualiti yang ketara. Ciri Mac Home Library melangkah lebih jauh: daripada memindahkan fail ke iPhone langsung, ia membolehkan anda mengalirkan keseluruhan koleksi komik Mac melalui Wi-Fi dalam masa nyata, jadi tiada apa yang perlu disalin.

Itulah gambaran lengkapnya — pemindahan Wi-Fi yang mengambil masa beberapa minit berbanding satu jam yang diperlukan oleh segerak iTunes suatu ketika dahulu.
