# filterpedia

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Layout

1. default
   secara default layout menggunakan bawaan nuxtjs

2. dashboard
   layout dashboard untuk page
   - profile
   - pesanan saya
   - riwayat pembelian
   - pengaturan
   - logout

contoh implementasi layout dashboard

> pages/pesanan.vue

```
<template>
    <div>
        <!-- konten disini -->
    </div>
</template>
<script>
export default {
  layout: 'dashboard',
}
</script>
```

### Pages

1. index
2. belilangsung
3. chekoutsuccess
4. keranjang
5. login
6. register
7. poructdetail

   > pada page terdapat dua folder dashboard dan mobile. folder mobile dimana tampilan yang memangkhusus mobile view

8. dashboard
   - pesanan
   - profile
   - setting
9. mobile
   - explore
   - menu-mobile

## Components

Ada beberapa komponen yang di buat dan bisa digunakan kembali

1. bannerHeader untuk banner header bisa di manfaatkan untuk promosi atau pemasangan info pamflet
2. botfooter digunakan untuk menampilkan footer di bawah website
3. cardPesanan untuk menampilkan produk produk yang di pesan oleh user di gunakan di page _/pesanan_
4. cardProduk untuk menampilkan produk yang berisi title/name, harga, diskon
5. mobile-addcart untuk bottom addcart pada tampilan mobile dan tombol sudah di pasang sweetalert
6. nav-mobile untuk navbar bottom pada tampilan mobile
7. navbar untuk navigasi bar
