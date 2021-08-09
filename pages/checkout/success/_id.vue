<template>
  <div>
    <navbar :navScroll="100" />
    <nav-mobile />
    <div class="md:min-h-screen md:px-20 px-2 pb-28 md:pb-0">
      <div
        class="border shadow-lg mx-auto mt-4 pb-6 md:mt-20 rounded-lg md:px-6"
      >
        <div>
          <img
            src="~/assets/icon/success-chekout.svg"
            alt=""
            class="mx-auto p-4 w-36"
          />
        </div>
        <div class="text-gray-800 text-xl md:text-2xl text-center">
          Terimakasih! Kami akan mengemas dan kirim pesanan Anda segera setelah
          Anda melakukan <br />
          <span class="font-bold"> konfirmasi pembayaran!</span>

          <!--  -->
        </div>
        <div
          class="
            text-gray-800
            mx-auto
            text-base
            md:w-3/6
            text-center
            my-2
            md:my-4
          "
        >
          Silahkan lakukan pembayaran, Pesanan akan di kemas dan diantar oleh
          driver filterpedia
        </div>
        <div class="flex items-center mb-4">
          <span
            class="
              bg-ungusuez
              px-4
              py-2
              rounded-lg
              mx-auto
              text-center text-white
              cursor-pointer
              hover:bg-purple-700
            "
            @click="konfirmasiPembayaran"
            >Konfirmasi pembayaran</span
          >
        </div>

        <div class="p-4 mb-6 border">
          <div class="md:flex justify-between">
            <div>
              <div>
                <div class="font-semibold text-gray-800 my-1">
                  Menunggu pembayaran.
                  <nuxt-link to="#" class="text-green-800 underline"
                    >Kirim Bukti Bayar</nuxt-link
                  >
                </div>
              </div>
              <div class="my-1">
                Nomor Tagihan
                <span class="text-base font-semibold text-gray-900">
                  {{ this.item.transaction_code }}</span
                >
              </div>
              <div class="my-1">
                Nominal Tagihan
                <span class="text-base font-semibold text-gray-900"
                  >Rp.{{ item.sub_total_price | currency }}</span
                >
              </div>
            </div>

            <div class="my-1 md:mt-0 mt-4">
              <div class="font-semibold">Pembayaran Via Bank Transfer BCA</div>
              <div>
                <img
                  src="~assets/brand-logo/bca-logo.png"
                  alt=""
                  class="w-32 my-2 md:mx-auto"
                />
              </div>
              <div>Nomor rekening 123456789012</div>
              <div>PT. Cipta Aneka Air</div>
            </div>
          </div>

          <div class="flex justify-center md:justify-start mt-4">
            <nuxt-link
              to="/dashboard/pesanan"
              class="
                text-white text-center text-sm
                border-2 border-ungusuez
                hover:bg-purple-700 hover:border-purple-700
                bg-ungusuez
                px-3
                md:px-6
                py-2
                rounded-lg
              "
              >Lihat pesanan</nuxt-link
            >
            <nuxt-link
              to="/"
              class="
                text-ungusuez text-center
                border-2 border-ungusuez
                hover:bg-ungusuez hover:text-white
                px-3
                md:px-6
                py-2
                rounded-lg
                ml-5
                text-sm
                md:ml-10
              "
              >Lanjut belanja</nuxt-link
            >
          </div>
        </div>

        <!-- detail pembelian barang -->
        <div class="border p-2 rounded">
          <div class="text-lg font-medium text-gray-700">Detil pembelian</div>

          <div
            v-for="produk in item.transaction_detail"
            :key="produk.id"
            class="mt-6 flex"
          >
            <div>
              <img
                :src="produk.products.imageurl"
                alt=""
                class="rounded w-32 mr-4"
              />
            </div>
            <div>
              <div class="text-gray-700 font-medium text-lg">
                {{ produk.products.product_name }}
              </div>
              <div class="text-gray-500">jumlah X {{ produk.id }}</div>
              <div class="text-green-700 font-medium">
                Rp.{{ produk.products.product_price }}
              </div>
            </div>
          </div>
        </div>
        <!-- enddetail pembelian barang -->
      </div>
    </div>
    <botfooter nameImage="logo.png" />
  </div>
</template>

<script>
import modal from '~/components/modal.vue'
export default {
  components: { modal },
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
          console.log(this.method_pembayaran)
        })

      console.log(this.method_pembayaran)
    },
  },
}
</script>
