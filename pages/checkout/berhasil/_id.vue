<template>
  <div class="pb-20">
    <navbar :navScroll="100" />
    <nav-mobile />
    <div class="min-h-screen md:px-20 px-2">
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
          <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
            <div class="">
              <div class="font-medium text-gray-800 text-sm md:text-base">
                <span v-for="met in method_pembayaran" :key="met.id">
                  <span v-if="met.id == item.payment_code_id"
                    >Pembayaran Via {{ met.nama_bank }}</span
                  >
                  <div>
                    <span v-if="met.id == item.payment_code_id"
                      >Kode pembayaran {{ met.nomor_rekening }}</span
                    >
                  </div>
                </span>
              </div>
              <div class="font-medium text-gray-800 text-sm md:text-base">
                Nomot tagihan {{ item.transaction_code }}
              </div>
              <div class="font-medium text-gray-800 text-sm md:text-base"></div>
            </div>
            <div>
              <div>Harga semua barang : 750000</div>
              <div>PPN : 750000</div>
              <div>Total tagihan : 750000</div>
            </div>
          </div>
          <div class="mt-4 text-xs font-light md:text-base">
            Cara Bayar <br />
            1. Silakan pergi ke gerai Alfamart, Alfamidi, atau Dan+Dan terdekat
            dan berikanlah nomorKode Pembayaran Anda (191999012997134012) ke
            kasir. <br />
            2. Kasir akan mengkonfirmasi transaksi dengan menanyakan jumlah
            transaksi dan nama merchant.
          </div>
          <div class="mb-4">
            <img
              :src="imgUrl"
              alt=""
              class="rounded mx-auto w-48"
              v-if="imgUrl.length > 4"
            />
          </div>
          <div class="flex justify-center">
            <nuxt-link
              to="/dashboard/pesanan"
              class="
                text-ungusuez text-center
                border-2 border-ungusuez
                hover:bg-ungusuez hover:text-white
                px-3
                md:px-6
                py-2
                rounded-md
                mr-5
                text-sm
                md:ml-10
              "
              v-if="imgUrl < 2"
              >Lihat pesanan</nuxt-link
            >
            <!-- button sebelum user upload bukti bayar -->
            <div
              class="
                text-ungusuez text-center text-sm
                border-2 border-ungusuez
                hover:bg-ungusuez hover:text-white
                px-3
                md:px-6
                py-2
                rounded-md
                cursor-pointer
                mr-4
              "
              @click="$refs.file.click()"
            >
              Upload Bukti Pembayaran
            </div>
            <!-- button setelahh user upload image dan siap kirim -->
            <div
              class="
                text-white text-center text-sm
                border-2 border-ungusuez
                bg-ungusuez
                hover:bg-purple-700
                px-3
                md:px-6
                py-2
                rounded-md
                cursor-pointer
                font-medium
              "
              v-if="imgUrl.length > 4"
              @click="confirmCheckout"
            >
              Unggah gambar ini
            </div>
            <div>
              <input
                type="file"
                class="cursor-pointer hidden"
                ref="file"
                @change="onFileChange"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        <div class="border rounded-lg p-4 mx-4 md:mx-10 mb-4">
          <div class="font-semibold">Produk yang di beli</div>
          <div
            class="flex mt-6"
            v-for="produk in item.transaction_detail"
            :key="produk.id"
          >
            <div>
              <img :src="produk.products.imageurl" alt="" class="w-28 mr-4" />
            </div>
            <div>
              {{ produk.products.product_name }}
              <div class="text-gray-500">jumlah</div>
              <div class="text-green-800 font-semibold">
                Rp.{{ produk.products.product_price | currency }}
              </div>
            </div>
          </div>
        </div>
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
      selectedFiles: undefined,
      imgUrl: '',
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
          this.$store.commit('setLoading', false)
        })

      console.log(this.method_pembayaran)
    },
    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
      }
    },
    async confirmCheckout() {
      let formData = new FormData()
      formData.append('transactions_id', this.$route.params.id)
      formData.append('images', this.selectedFiles[0])
      let data = await this.$axios
        .post('/confirm-payment', formData)
        .then((ress) => {
          console.log(ress)
          this.$swal({
            icon: 'success',
            title: 'Berhasil upload bukti Pembayaran',
            text: 'Selanjutnya akan di verify oleh admin ',
          })
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: 'Opps ada yang error nih ',
          })
        })
    },
  },
}
</script>
