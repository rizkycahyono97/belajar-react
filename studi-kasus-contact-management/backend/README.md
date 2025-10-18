# Contact Management Backend API

Proyek ini adalah implementasi _backend_ untuk sistem manajemen kontak dan alamat, dibangun menggunakan **Node.js, Express, dan Prisma**. Arsitektur proyek mengedepankan pemisahan tanggung jawab yang jelas (_separation of concerns_) menggunakan pola berlapis (Controller -> Service -> Database) dan dilengkapi dengan _middleware_ otentikasi serta validasi data yang ketat.

## 🚀 Instalasi dan Setup Proyek

Pastikan Anda telah menginstal **Node.js** (disarankan versi LTS) dan **npm** atau **yarn** di sistem Anda.

### 1\. Kloning Repositori

```bash
git clone https://github.com/rizkycahyono97/belajar-react
cd studi-kasus-contact-management/backend
```

### 2\. Instalasi Dependensi

Instal semua paket yang diperlukan (termasuk Prisma):

```bash
npm install
```

### 3\. ENV

Copy .env.example, dan tuliskan variable env anda.

```bash
cp .env.example .env:
```

## 🔧 Migrasi Database (Prisma)

Proyek ini menggunakan **Prisma** sebagai ORM. Semua skema _database_ (_Users_, _Contacts_, _Address_) telah didefinisikan dalam prisma/schema.prisma.

### Melakukan Migrasi

Jalankan perintah berikut untuk menerapkan skema _database_ dan _migration history_ yang ada ke _database_ lokal Anda:

```bash
npx prisma migrate deploy
```

**Catatan:** Skema _database_ awal telah mencakup tabel users, contacts, dan addresss, seperti yang terlihat di prisma/migrations.

### Membuat Migrasi Baru

Jika Anda mengubah skema di prisma/schema.prisma, gunakan perintah ini untuk membuat _file_ migrasi baru:

```bash
npx prisma migrate dev --name nama_perubahan_skema
```

## 🏃 Menjalankan Aplikasi

### Mode Pengembangan

Jalankan server menggunakan Babel untuk kompilasi _runtime_ (berguna untuk _live-reload_ jika dikonfigurasi):

```bash
npm run dev
```

Server akan berjalan pada _port_ yang dikonfigurasi di src/application/web.js (biasanya 3000 atau 8080).

## 📚 Referensi

[Progammer Zaman Now](https://www.youtube.com/watch?v=aLsrruCFZFU&list=PL-CtdCApEFH_VwPz1uy4dMq_BOvZWNuXn&index=4)
