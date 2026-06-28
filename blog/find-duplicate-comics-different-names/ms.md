# Cara Mencari Komik Pendua Apabila Fail Mempunyai Nama yang Berbeza

Anda mengemas kini perpustakaan komik dan menjalankan pencari pendua standard. Hasilnya: tiada pendua ditemui. Namun anda tahu ada sesuatu yang tidak kena — anda mempunyai episod 1-5 dalam satu fail dan episod 1-10 dalam fail lain, dan lima episod pertama jelas bertindih.

Inilah masalah khusus yang [Archive Duplicate Scanner](/ms/archive/) dibina untuk selesaikan: mencari arkib komik pendua dengan membandingkan kandungan halaman yang sebenar, bukan nama fail atau saiznya.

## Mengapa Pencari Pendua Standard Tidak Berkesan untuk Komik

- **Pengumpulan episod berbeza**: memuat turun `manga_ch1-5.cbz` dari satu sumber dan `manga_ch1-10.cbz` dari sumber lain
- **Konvensyen penamaan berbeza**: `Spider-Man_001.cbz` dan `spiderman_issue01.cbz` mungkin nombor yang sama
- **Fail yang dikodkan semula**: komik yang sama dari dua sumber, kualiti JPEG berbeza, cincang sepenuhnya berbeza
- **Format berbeza**: kandungan yang sama sebagai CBZ dan CBR

## Cara Archive Duplicate Scanner Mengesannya

[Archive Duplicate Scanner](/ms/archive/) menggunakan pencincangan perseptual pada imej halaman sebenar dalam setiap arkib:

1. Membuka kedua-dua arkib (CBZ, CBR, ZIP, atau RAR)
2. Mengekstrak halaman awal daripada setiap satu
3. Menjana cincang perseptual bagi setiap halaman
4. Membandingkan cincang antara kedua-dua arkib

Jika cincang sepadan di atas ambang yang boleh dikonfigurasi, arkib ditandakan sebagai pendua berpotensi — tanpa mengira nama fail atau saiz.

Ambang yang lebih ketat memerlukan padanan visual yang lebih dekat. Lebih longgar menangkap lebih banyak kes sempadan. Lalai dikalibrasi untuk menangkap kebanyakan pendua praktikal tanpa positif palsu.

Archive Duplicate Scanner percuma untuk mengimbas dan pratonton. Pro membolehkan tindakan pukal. Tanpa langganan.

Muat turun [Archive Duplicate Scanner](/ms/archive/) dari App Store atau Microsoft Store.
