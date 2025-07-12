# TEST-HIGO-BACKEND

## Deskripsi Project

Backend API untuk mengelola dan menganalisis data customer. Project ini dibangun menggunakan Node.js, Express.js, dan MongoDB dengan fitur dokumentasi API menggunakan Swagger.

## Fitur Utama

- _Customer Management_: CRUD operations untuk data customer
- _Advanced Filtering_: Filter data berdasarkan nama, gender, lokasi, dan device
- _Pagination_: Dukungan pagination untuk data yang besar
- _Analytics_: Summary data berdasarkan gender, device, dan lokasi
- _API Documentation_: Dokumentasi API otomatis dengan Swagger UI
- _CORS Support_: Cross-Origin Resource Sharing untuk frontend integration

## Tech Stack

- _Runtime_: Node.js
- _Framework_: Express.js
- _Database_: MongoDB dengan Mongoose ODM
- _Documentation_: Swagger UI
- _Development_: Nodemon untuk hot reload
- _Middleware_: CORS, Morgan (logging), dotenv

## Struktur Project

backend/
├── app.js # Konfigurasi Express app dan middleware
├── server.js # Entry point server
├── config.js # Konfigurasi database connection
├── swagger.js # Setup Swagger documentation
├── package.json # Dependencies dan scripts
├── customer/
│ ├── model.js # Mongoose schema untuk Customer
│ ├── controllers.js # Business logic untuk customer operations
│ └── routes.js # API routes dengan Swagger docs
└── README.MD # Dokumentasi project

## Customer Data Model

javascript
{
Number: Number, // Nomor urut
Name_of_Location: String, // Nama lokasi
Date: String, // Tanggal
Login_Hour: String, // Jam login
Name: String, // Nama customer
Age: Number, // Usia
gender: String, // Gender
Email: String, // Email
No_Telp: String, // Nomor telepon
Brand_Device: String, // Brand device
Digital_Interest: String, // Minat digital
Location_Type: String // Tipe lokasi
}

## Instalasi dan Setup

### Prerequisites

- Node.js (versi 14 atau lebih baru)
- MongoDB (local atau cloud)
- npm atau yarn

### Langkah Instalasi

1. _Clone repository_

   bash
   git clone https://github.com/andigagaga/TEST-HIGO-BACKEND.git backend
   cd backend

2. _Install dependencies_

   bash
   npm install

3. _Setup environment variables_

   Buat file .env di root directory:

   env
   NODE_ENV=development
   PORT=5000
   MONGO_URI_LOCAL=mongodb://localhost:27017/customer_db
   MONGO_URI_SERVER=mongodb://your-production-mongo-uri

4. _Jalankan server_

   Development mode:

   bash
   npm run dev

   Production mode:

   bash
   npm start

5. _Akses aplikasi_
   - Server: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs

## API Endpoints

### Base URL

http://localhost:5000/api

### Customer Endpoints

#### 1. Get All Customers

GET /customers

_Query Parameters:_

- name (string): Filter berdasarkan nama (case-insensitive)
- gender (string): Filter berdasarkan gender
- location (string): Filter berdasarkan Location_Type
- device (string): Filter berdasarkan Brand_Device
- page (number): Nomor halaman (default: 1)
- limit (number): Jumlah data per halaman (default: 10)

_Response:_

json
{
"page": 1,
"limit": 10,
"totalPages": 5,
"totalData": 50,
"data": [...]
}

#### 2. Gender Summary

GET /customers/gender-summary

_Response:_

json
[
{ "_id": "Male", "count": 25 },
{ "_id": "Female", "count": 25 }
]

#### 3. Device Summary

GET /customers/device-summary

_Response:_

json
[
{ "_id": "iPhone", "count": 15 },
{ "_id": "Samsung", "count": 20 },
{ "_id": "Xiaomi", "count": 15 }
]

#### 4. Location Summary

GET /customers/location-summary

_Response:_

json
[
{ "_id": "Mall", "count": 30 },
{ "_id": "Office", "count": 20 }
]

## Contoh Penggunaan

### Filter Customer berdasarkan Nama

bash
curl "http://localhost:5000/api/customers?name=john&page=1&limit=5"

### Get Gender Summary

bash
curl "http://localhost:5000/api/customers/gender-summary"

### Pagination

bash
curl "http://localhost:5000/api/customers?page=2&limit=20"

## Development

### Scripts

- npm start: Jalankan server production
- npm run dev: Jalankan server development dengan nodemon

### Hot Reload

Server akan otomatis restart ketika ada perubahan file berkat nodemon.

### Logging

Aplikasi menggunakan Morgan middleware untuk logging HTTP requests.

## Database

### Connection

Aplikasi mendukung dua environment:

- _Development_: Menggunakan MONGO_URI_LOCAL
- _Production_: Menggunakan MONGO_URI_SERVER

### Collection

Data customer disimpan dalam collection customer di MongoDB.

## API Documentation

Dokumentasi API lengkap tersedia di:

http://localhost:5000/api-docs

Swagger UI menyediakan:

- Daftar semua endpoints
- Parameter yang diperlukan
- Response examples
- Testing interface

## Error Handling

Aplikasi menggunakan try-catch untuk error handling dengan response format:

json
{
"error": "Error message"
}

## CORS

Aplikasi mendukung CORS untuk integrasi dengan frontend dari domain yang berbeda.

## Contributing

1. Fork repository
2. Buat feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add some AmazingFeature')
4. Push ke branch (git push origin feature/AmazingFeature)
5. Buat Pull Request

## License

ISC License

## Support

Untuk pertanyaan atau dukungan, silakan buat issue di repository ini.
