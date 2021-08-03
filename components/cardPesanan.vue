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
        <img :src="nameImage" :alt="nameImage" class="rounded w-36 md:w-24" />
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
            {{ status_payment }}
          </div>
          <div class="text-sm text-red-500 my-1" v-else>
            {{ status_payment }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex justify-between md:justify-start">
      <nuxt-link
        to="/chekoutsuccess"
        class="
          text-sm
          hover:bg-purple-600
          bg-ungusuez
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
          hover:bg-ungusuez hover:text-white
          text-ungusuez
          py-1
          ml-3
          px-2
          md:ml-3
          rounded
          border border-ungusuez
        "
        >Chat penjual</nuxt-link
      >
      <div
        class="
          text-sm
          hover:text-white hover:bg-red-600
          text-red-600
          border border-red-600
          px-2
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
    status_payment: String,
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
        .post('/cancel/transactions', {
          transaction_id: id,
        })
        .then((ress) => {})
        .catch((err) => {
          console.log('error satu' + err.response.data.message)
          this.$swal({
            icon: 'error',
            title: 'Oops Gagal Hapus',
            text: err.response.data.message,
          })
        })

      // get data
      let response = await this.$axios.get('/transactions').then((ress) => {
        console.log(ress)
        console.log('get data dari component cardpesanan')
        this.$store.commit('setProduk', ress.data.data)
        this.$swal.fire({
          toast: true,
          position: 'top',
          width: 600,
          icon: 'success',
          title: 'Berhasil masukan Keranjang',
          showConfirmButton: false,
          timer: 2000,
        })
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
