# 📊 Dashboard Customer Insights

_Dibuat oleh: GUSWANDI_

Dashboard analitik pelanggan yang modern dan responsif yang dibangun dengan Next.js 15, React 19, dan Tailwind CSS. Aplikasi ini menyediakan wawasan pelanggan secara real-time dengan grafik interaktif, filter data, dan kemampuan ekspor PDF.

## 🌟 Fitur Utama

### 📈 Ringkasan Dashboard

- _Halaman Selamat Datang_: Salam personal dengan informasi pengembang
- _Analitik Real-time_: Visualisasi data pelanggan secara langsung
- _Desain Responsif_: Dioptimalkan untuk desktop dan perangkat mobile

### 👥 Manajemen Pelanggan

- _Tabel Pelanggan_: Tabel data komprehensif dengan pagination
- _Filter Lanjutan_: Filter berdasarkan nama, gender, perangkat, dan lokasi
- _Fungsi Pencarian_: Pencarian real-time di seluruh nama pelanggan
- _Ekspor Data_: Cetak detail pelanggan individual ke PDF
- _Ekspor Massal_: Cetak seluruh tabel pelanggan ke PDF

### 📊 Visualisasi Data

- _Distribusi Gender_: Grafik pie interaktif yang menunjukkan breakdown gender pelanggan
- _Analitik Perangkat_: Grafik batang yang menampilkan preferensi perangkat pelanggan
- _Wawasan Lokasi_: Grafik batang yang menunjukkan distribusi geografis pelanggan
- _Grafik Interaktif_: Efek hover dan komponen grafik responsif

### 🎨 Antarmuka Pengguna

- _Sidebar Modern_: Navigasi tetap dengan indikator status aktif
- _Desain Bersih_: Skema warna biru profesional dengan Tailwind CSS
- _Optimasi Cetak_: CSS kustom untuk pembuatan PDF
- _Status Loading_: Indikator loading yang halus untuk UX yang lebih baik

## 🛠 Teknologi yang Digunakan

### Frontend

- _Next.js 15.3.5_: Framework React dengan App Router
- _React 19.0.0_: React terbaru dengan fitur concurrent
- _Tailwind CSS 4_: Framework CSS utility-first
- _Chart.js 4.5.0_: Library grafik interaktif
- _React Chart.js 2 5.3.0_: Wrapper React untuk Chart.js
- _Axios 1.10.0_: HTTP client untuk request API
- _React Icons 5.5.0_: Library ikon

### Alat Pengembangan

- _Turbopack_: Bundler cepat untuk pengembangan
- _ESLint_: Linting dan formatting kode
- _PostCSS_: Pemrosesan CSS

## 📁 Struktur Proyek

frontend/
├── public/
│ └── me.jpg # Gambar profil pengembang
├── src/
│ └── app/
│ ├── case/
│ │ └── case.js # Fungsi utilitas (toTitleCase)
│ ├── customer/
│ │ └── chart/
│ │ ├── page.js # Halaman grafik utama
│ │ ├── DeviceChart.js # Grafik analitik perangkat
│ │ └── LocationChart.js # Grafik analitik lokasi
│ ├── pages/
│ │ └── customer/
│ │ └── page.js # Halaman tabel pelanggan
│ ├── pdf/
│ │ └── printPdf.js # Utilitas pembuatan PDF
│ ├── sidebar/
│ │ └── sidebar.js # Komponen sidebar navigasi
│ ├── globals.css # Style global
│ ├── layout.js # Komponen layout utama
│ └── page.js # Halaman beranda
├── package.json # Dependensi dan script
├── next.config.mjs # Konfigurasi Next.js
└── README.MD # Dokumentasi proyek

## 🚀 Memulai Proyek

### Persyaratan

- Node.js 18+
- npm atau yarn package manager
- Backend API berjalan di http://localhost:3001

### Instalasi

1. _Clone repository_

   bash
   git clone <url-repository>
   cd frontend

2. _Install dependensi_

   bash
   npm install

   # atau

   yarn install

3. _Jalankan server pengembangan_

   bash
   npm run dev

   # atau

   yarn dev

4. _Buka browser_
   Navigasi ke [http://localhost:3000](http://localhost:3000)

### Script yang Tersedia

- npm run dev - Jalankan server pengembangan dengan Turbopack
- npm run build - Build untuk produksi
- npm run start - Jalankan server produksi
- npm run lint - Jalankan ESLint

## 📊 Integrasi API

Aplikasi terhubung ke backend API dengan endpoint berikut:

### Endpoint Pelanggan

- GET /api/customers - Dapatkan data pelanggan dengan pagination dan filter
- GET /api/customers/gender-summary - Dapatkan data distribusi gender
- GET /api/customers/device-summary - Dapatkan statistik penggunaan perangkat
- GET /api/customers/location-summary - Dapatkan data distribusi lokasi

### Parameter Query

- page - Nomor halaman untuk pagination
- limit - Jumlah item per halaman
- name - Pencarian berdasarkan nama pelanggan
- gender - Filter berdasarkan gender (Male/Female)
- device - Filter berdasarkan merek perangkat
- location - Filter berdasarkan jenis lokasi

## 🎯 Penjelasan Fitur Utama

### Tabel Pelanggan

- _Pagination_: Navigasi melalui dataset besar secara efisien
- _Filter Dinamis_: Filter berdasarkan beberapa kriteria secara bersamaan
- _Pencarian Real-time_: Hasil pencarian instan saat mengetik
- _Desain Responsif_: Tabel menyesuaikan dengan berbagai ukuran layar
- _Opsi Ekspor_: Cetak data pelanggan individual atau massal

### Visualisasi Data

- _Grafik Gender_: Grafik pie yang menunjukkan distribusi pria/wanita
- _Grafik Perangkat_: Grafik batang merek perangkat populer
- _Grafik Lokasi_: Distribusi geografis pelanggan
- _Elemen Interaktif_: Efek hover dan tooltip

### Pembuatan PDF

- _PDF Individual_: Informasi detail pelanggan dalam format yang dapat dicetak
- _Ekspor Massal_: Ekspor tabel pelanggan lengkap
- _Optimasi Cetak_: Styling kustom untuk output profesional

## 🎨 Komponen UI

### Navigasi Sidebar

- Sidebar tetap dengan tema biru
- Indikator status aktif
- Link navigasi responsif

### Tabel Data

- Styling bersih dan profesional
- Efek hover untuk UX yang lebih baik
- Kolom yang dapat diurutkan (pengembangan masa depan)

### Grafik

- Container grafik responsif
- Skema warna kustom
- Status loading untuk UX yang lebih baik

## 🔧 Konfigurasi

### Variabel Environment

Buat file .env.local untuk pengaturan khusus environment:

env
NEXT_PUBLIC_API_URL=http://localhost:3001

### Tailwind CSS

Proyek menggunakan Tailwind CSS 4 dengan konfigurasi kustom di tailwind.config.js.

## 📱 Desain Responsif

Aplikasi sepenuhnya responsif dan dioptimalkan untuk:

- _Desktop_: Pengalaman penuh dengan sidebar
- _Tablet_: Layout adaptif dengan sidebar yang dapat dilipat
- _Mobile_: Desain mobile-first dengan kontrol yang ramah sentuhan

## 🚀 Deployment

### Build untuk Produksi

bash
npm run build
npm run start

### Platform Deployment

- _Vercel_: Direkomendasikan untuk aplikasi Next.js
- _Netlify_: Deployment situs statis
- _AWS Amplify_: Deployment full-stack
- _Docker_: Deployment dalam container

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur (git checkout -b feature/fitur-menakjubkan)
3. Commit perubahan Anda (git commit -m 'Tambah fitur menakjubkan')
4. Push ke branch (git push origin feature/fitur-menakjubkan)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Pengembang

_GUSWANDI_

- FullStack Developer
- Spesialis React & Next.js

_Dibuat dengan ❤ menggunakan Next.js, React, dan Tailwind CSS_

## URL Publish

- https://test-higo-backend.vercel.app/
