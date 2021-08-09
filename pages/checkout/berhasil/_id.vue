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
          driver filterpedia
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
                      >Nomor Rekening {{ met.nomor_rekening }}
                      <span>({{ met.atas_nama_rekening }})</span></span
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
              <div>
                Harga semua barang : Rp.{{
                  item.price_after_discount | currency
                }}
              </div>
              <div>PPN : Rp.{{ item.pajak_ppn | currency }}</div>
              <div>
                Total tagihan : Rp.{{ item.sub_total_price | currency }}
              </div>
            </div>
          </div>

          <div class="mt-4">
            <!-- <div class="font-medium mb-2 text-lg">Cara Bayar</div> -->
            <div v-for="met in method_pembayaran" :key="met.id">
              <div v-if="met.id == item.payment_code_id">
                <div v-html="met.cara_bayar"></div>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <img
              :src="imgUrl"
              alt=""
              class="rounded mx-auto w-48"
              v-if="imgUrl.length > 4"
            />
          </div>
          <!-- jika status pembayaran unpaid -->
          <div class="md:flex justify-center" v-if="item.status === 0">
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
                block
                md:inline
                mb-4
                md:mb-0
              "
              v-if="imgUrl < 2"
              >Lihat pesanan</nuxt-link
            >
            <!-- button sebelum user upload bukti bayar -->
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
              v-if="imgUrl < 2"
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
          <!-- jika status pembayaran  -->
          <div class="md:flex justify-center" v-if="item.status === 2">
            <div>
              <img
                src="~/assets/Admin-bro.svg"
                alt=""
                class="w-44 md:mr-6 mx-auto"
              />
            </div>
            <div class="my-auto">
              <div class="font-semibold text-xl">
                Status {{ item.status_transaksi }}
              </div>
              <div>
                Kamu sudah mengkonfirmasi bukti pembayaran selanjutnya akan
                admin proses. <br />
                ini tidak memakan waktu lama <br />
                <div class="text-gray-600 mb-3">Punya pertanyaan ?</div>
                <nuxt-link
                  to="#"
                  class="px-2 py-1 rounded bg-blue-700 text-white"
                >
                  Hubungi Admin
                </nuxt-link>
              </div>
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
              <div class="text-gray-500">jumlah {{ produk.qty }}</div>
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
      this.$store.commit('setLoading', true)
      let response = await this.$axios
        .get('/transactions/' + this.$route.params.id)
        .then((ress) => {
          this.item = ress.data.data
        })

      let metode_pembayaran = await this.$axios
        .get('/payment-method')
        .then((ress) => {
          this.method_pembayaran = ress.data.data

          this.$store.commit('setLoading', false)
        })

      console.log(this.item)

      this.$store.commit('setLoading', false)
    },
    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
      }
    },
    async confirmCheckout() {
      this.$store.commit('setLoading', true)
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
          this.getData()
          this.imgUrl = ''
          this.$store.commit('setLoading', false)
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
