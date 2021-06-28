<template>
  <div
    class="
      bg-white
      md:shadow
      border-b border-gray-300
      md:border
      p-3
      mb-2
      rounded
    "
  >
    <div class="flex">
      <div>
        <img
          :src="require(`~/assets/product/${nameImage}`)"
          :alt="nameImage"
          class="rounded w-36 md:w-24"
        />
      </div>
      <div class="w-full ml-4 md:flex" >
        <div class="">
          <div class="font-medium text-gray-700">{{ title }}</div>
          <div class="text-sm text-blue-500 my-1">Rp.{{ harga }}</div>
        </div>
        <div class="mx-auto" v-if="dikirim">
          <div class="font-medium text-gray-700 ">
            Sedang dikirim
          </div>
          <div class="text-sm  my-1" >
            {{namaPengirim}}
          </div>
        </div>
        <div class="mx-auto" v-else>
          <div class="font-medium text-gray-700 md:block hidden">
            No pesanan ( {{ noPesanan }} )
          </div>
          <div class="text-sm text-green-500 my-1" v-if="pembayaran">
            Sudah di bayar
          </div>
          <div class="text-sm text-red-500 my-1" v-else>Belum di bayar</div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex justify-between md:justify-start">
      <nuxt-link
        to="/chekoutsuccess"
        class="
          text-sm
          hover:bg-purple-600
          bg-blue-600
          text-white
          px-3
          py-1
          rounded
        "
        v-if="!hiddenCaraBayar"
        >Cara bayar</nuxt-link
      >
      <nuxt-link
        to="/"
        class="
          text-sm
          hover:text-purple-700
          text-blue-600
          py-1
          ml-3
          md:ml-3
          rounded
        "
        >Chat penjual</nuxt-link
      >
      <nuxt-link
        to="/"
        class="
          text-sm
          hover:text-purple-700
          text-red-600
          py-1
          ml-3
          md:ml-3
          rounded
        " v-if="batalkan"
        >Batalkan</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    nameImage: String,
    harga: Number,
    noPesanan: String,
    pembayaran: Boolean,
    batalkan: Boolean,
    dikirim: Boolean,
    namaPengirim: String,
    hiddenCaraBayar: Boolean
  },
  data() {
    return {
        loading: false,
    }
  },
  
  methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
}
</script>