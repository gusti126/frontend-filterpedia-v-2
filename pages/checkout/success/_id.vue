<template>
  <div>
    <navbar :navScroll="100" />
    <nav-mobile />
    <div class="h-screen md:px-20 px-2">
      <div class="border shadow-lg mx-auto mt-4 md:mt-20 rounded-lg">
        <div>
          <img
            src="~/assets/icon/success-chekout.svg"
            alt=""
            class="mx-auto p-4 w-36"
          />
        </div>
        <div class="text-gray-800 text-xl md:text-3xl text-center">
          Pemesanan Berhasil
        </div>
        <div
          class="
            text-gray-600
            mx-auto
            text-base
            md:text-xl
            font-light
            md:w-3/6
            text-center
            my-2
            md:my-4
          "
        >
          Silahkan lakukan pembayaran, Pesanan akan di kemas dan diantar oleh
          driver cipta aneka air
        </div>
        <div class="border rounded-lg p-4 mx-4 md:mx-10 mb-4">
          <div class="font-medium text-gray-800 text-sm md:text-base">
            Pembayaran Via {{ method_pembayaran.nama_bank }}
          </div>
          <div class="font-medium text-gray-800 text-sm md:text-base">
            Nomor Rekening {{ method_pembayaran.nomor_rekening }}
          </div>
          <div class="font-medium text-gray-800 text-sm md:text-base">
            Atas Nama {{ method_pembayaran.atas_nama_rekening }}
          </div>
          <div class="mt-4 text-xs font-light md:text-base">
            Cara Bayar <br />
            1. Silakan pergi ke gerai Alfamart, Alfamidi, atau Dan+Dan terdekat
            dan berikanlah nomorKode Pembayaran Anda (191999012997134012) ke
            kasir. <br />
            2. Kasir akan mengkonfirmasi transaksi dengan menanyakan jumlah
            transaksi dan nama merchant.
          </div>
        </div>
        <div class="flex justify-center">
          <nuxt-link
            to="/dashboard/pesanan"
            class="
              text-white
              mb-10
              text-center text-sm
              border-2 border-blue-600
              bg-blue-600
              px-3
              md:px-6
              py-2
              rounded-md
            "
            >Lihat pesanan</nuxt-link
          >
          <nuxt-link
            to="/"
            class="
              text-blue-600
              mb-10
              text-center
              border-2 border-blue-600
              px-3
              md:px-6
              py-2
              rounded-md
              ml-5
              text-sm
              md:ml-10
            "
            >Lanjut belanja</nuxt-link
          >
        </div>
      </div>
    </div>
    <botfooter nameImage="logo.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
      method_pembayaran: [],
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      let response = await this.$axios
        .get('/transactions/' + this.$route.params.id)
        .then((ress) => {
          this.item = ress.data.data
          console.log(this.item)
        })

      let metode_pembayaran = await this.$axios
        .get('/payment-method')
        .then((ress) => {
          this.method_pembayaran = ress.data.data
          //   console.log(this.method_pembayaran)

          for (var i = 0; i < this.method_pembayaran.length; i++) {
            console.log('id bank : ' + this.method_pembayaran[i].id)
            console.log(this.item.payment_code_id)
            if (this.method_pembayaran[i].id == this.item.payment_code_id) {
              this.method_pembayaran = this.method_pembayaran[i]
            }
          }

          console.log(this.method_pembayaran)
        })
    },
  },
}
</script>
