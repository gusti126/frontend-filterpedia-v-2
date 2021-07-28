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
      <div class="w-full ml-4 md:flex">
        <div class="">
          <div class="font-medium text-gray-700">{{ title }}</div>
          <div class="text-sm text-green-500 my-1">
            Rp.{{ harga | currency }}
          </div>
        </div>
        <div class="mx-auto" v-if="dikirim">
          <div class="font-medium text-gray-700">Sedang dikirim</div>
          <div class="text-sm my-1">
            {{ namaPengirim }}
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
      <div
        class="
          text-sm
          hover:text-purple-700
          text-red-600
          py-1
          ml-3
          md:ml-3
          rounded
          cursor-pointer
        "
        @click="confirmHapus(id)"
        v-if="batalkan"
      >
        Batalkan
      </div>
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
    hiddenCaraBayar: Boolean,
    id: Number,
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
    confirmHapus(id) {
      this.$swal
        .fire({
          title: 'Yakin batalkan pesanan',
          showCancelButton: true,
          confirmButtonText: `yakin`,
        })
        .then((result) => {
          console.log(result)
          console.log(result.dismiss)
          // console.log(id)
          if (result.isConfirmed) {
            console.log(result.isConfirmed)
            this.hapus(id)
          }
        })
    },
    async hapus(id) {
      // // get data
      let item = await this.$axios
        .delete('/transaksi/' + id)
        .then((ress) => {
          this.$swal.fire({
            toast: true,
            position: 'top',
            width: 600,
            icon: 'success',
            title: 'Berhasil masukan Keranjang',
            showConfirmButton: false,
            timer: 1700,
          })
        })
        .catch((err) => {
          console.log('error satu' + err.response.data.message)
          this.$swal({
            icon: 'error',
            title: 'Oops Gagal Hapus',
            text: err.response.data.message,
          })
        })

      let produk = await this.$axios
        .get('/profile')
        .then((ress) => {
          this.$store.commit('setProduk', ress.data.riwayat_transaksi)
        })
        .catch((err) => {
          console.log(err)
        })

      console.log(id)
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.swal-wide {
  width: 850px !important;
}
.sweet-alert .swal-wide {
  background: black !important;
}
</style>
