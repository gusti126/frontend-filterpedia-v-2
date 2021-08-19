<template>
  <div>
    <!-- skeleton -->
    <div class="animate-pulse" v-if="loading">
      <div
        class="
          bg-blue-400
          h-12
          rounded
          mb-4
          text-center
          align-text-bottom
          flex flex-wrap
          content-center
        "
      >
        <div class="mx-auto font-semibold text-blue-900">
          Sedang Memuat Data Sebentar ..
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-3 gap-4 mb-4" v-for="p of 5">
        <div class="bg-blue-400 h-full rounded col-span-1"></div>
        <div class="col-span-2">
          <div class="bg-blue-400 h-6 rounded mb-2"></div>
          <div class="bg-blue-400 h-6 rounded"></div>
        </div>
      </div>
    </div>
    <!-- endskeleton -->

    <!-- content -->
    <div
      class="bg-white w-full min-h-full pt-3 md:p-6 rounded-xl"
      v-if="!loading"
    >
      <div class="flex justify-around mb-6">
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
          @click="bayaran"
          :class="{ 'text-blue-500': isBayaran }"
        >
          Semua({{ this.$store.state.produk.length }})
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isBayaran"
          ></div>
        </div>
        <!-- menu dikemas -->
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
          :class="{ 'text-blue-500': isKemasan }"
          @click="kemasan"
        >
          di kemas({{ produk_dikemas.length }})
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isKemasan"
          ></div>
        </div>
        <!-- menu dikirim -->
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
          :class="{ 'text-blue-500': isKiriman }"
          @click="kiriman"
        >
          di kirim<span v-if="produk_dikirim.length > 0"
            >({{ produk_dikirim.length }})</span
          >
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isKiriman"
          ></div>
        </div>
        <!-- menu selesai -->
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
          :class="{ 'text-blue-500': isSelesai }"
          @click="selesai"
        >
          Selesai<span v-if="produk_selesai.length > 0"
            >({{ produk_selesai.length }})</span
          >
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isSelesai"
          ></div>
        </div>
      </div>

      <!-- produk blum di bayar -->
      <div class="" v-show="isBayaran">
        <div
          class="border border-gray-300 py-2 px-4 rounded mt-4"
          v-for="bayar in this.$store.state.produk"
          :key="bayar.id"
          v-if="!loading"
        >
          <div class="md:flex justify-between mb-5">
            <div>
              <div>
                Nomor Transaksi
                <span class="font-semibold">{{ bayar.transaction_code }}</span>
              </div>
              <div class="text-gray-500 text-sm">
                dipesan pada tanggal {{ bayar.transaction_date }}
              </div>
            </div>

            <div class="md:text-right mt-4 md:mt-0">
              <div>
                Status
                <span
                  class="font-semibold"
                  :class="
                    bayar.status === 6 ? 'text-red-500' : 'text-yellow-500'
                  "
                  >{{ bayar.status_transaksi }}</span
                >
              </div>
              <div class="font-medium text-green-700">
                <span class="text-gray-800">Total Bayar</span> Rp.{{
                  bayar.sub_total_price | currency
                }}
              </div>
            </div>
          </div>

          <div v-for="p in bayar.transaction_detail" :key="p.id">
            <card-pesanan
              :title="p.products.product_name"
              :batalkan="true"
              :harga="p.products.product_price"
              :pembayaran="false"
              :id="bayar.id"
              :noPesanan="bayar.transaction_code"
              :nameImage="p.products.imageurl"
              :status_payment="bayar.status_transaksi"
            />
          </div>

          <div class="md:my-auto mt-4 flex justify-end">
            <div
              class="
                py-1
                px-8
                border
                text-sm
                border-red-600
                text-red-600
                hover:text-white hover:bg-red-600
                rounded
                inline-block
                cursor-pointer
                mr-8
              "
              @click="confirmCancle(bayar.id, bayar.status_transaksi)"
            >
              Batalkan
            </div>
            <nuxt-link
              :to="'/checkout/berhasil/' + bayar.id"
              class="
                py-1
                px-8
                rounded
                bg-ungusuez
                border border-ungusuez
                text-white
                hover:border-purple-700 hover:bg-purple-700
              "
            >
              <span v-if="bayar.status == 0">Bayar</span>
              <span v-if="bayar.status !== 0">Detail</span>
            </nuxt-link>
          </div>
        </div>
        <!-- endtesdata state produk -->
      </div>
      <!-- endproduk blum di bayar -->

      <!-- produk di kemas -->
      <div class="" v-show="isKemasan">
        <!-- data dikemas -->
        <div
          class="border border-gray-300 py-2 px-4 rounded mt-4"
          v-for="kemas in produk_dikemas"
          :key="kemas.id"
          v-if="!loading"
        >
          <div class="md:flex justify-between mb-5">
            <div>
              <div>
                Nomor Transaksi
                <span class="font-semibold">{{ kemas.transaction_code }}</span>
              </div>
              <div class="text-gray-500 text-sm">
                dipesan pada tanggal {{ kemas.transaction_date }}
              </div>
            </div>

            <div class="md:text-right mt-4 md:mt-0">
              <div>
                Status
                <span class="font-semibold text-gray-800">{{
                  kemas.status_transaksi
                }}</span>
              </div>
              <div class="font-medium text-green-700">
                <span class="text-gray-800">Total Bayar</span> Rp.{{
                  kemas.sub_total_price | currency
                }}
              </div>
            </div>
          </div>

          <div v-for="p in kemas.transaction_detail" :key="p.id">
            <card-pesanan
              :title="p.products.product_name"
              :batalkan="true"
              :harga="p.products.product_price"
              :pembayaran="false"
              :id="kemas.id"
              :noPesanan="kemas.transaction_code"
              :nameImage="p.products.imageurl"
              :status_payment="kemas.status_transaksi"
            />
          </div>

          <div class="md:my-auto mt-4 flex justify-end">
            <nuxt-link
              :to="'/checkout/berhasil/' + kemas.id"
              class="
                py-1
                px-8
                rounded
                bg-ungusuez
                border border-ungusuez
                text-white
                hover:border-purple-700 hover:bg-purple-700
              "
            >
              <span>Detail</span>
            </nuxt-link>
          </div>
        </div>
        <!-- enddata dikemas -->
      </div>
      <!-- end produk di kemas -->

      <!-- produk di kirim -->
      <div class="" v-show="isKiriman">
        <!-- data dikirim -->
        <div
          class="border border-gray-300 py-2 px-4 rounded mt-4"
          v-for="bayar in produk_dikirim"
          :key="bayar.id"
          v-if="!loading"
        >
          <div class="md:flex justify-between mb-5">
            <div>
              <div>
                Nomor Transaksi
                <span class="font-semibold">{{ bayar.transaction_code }}</span>
              </div>
              <div class="text-gray-500 text-sm">
                dipesan pada tanggal {{ bayar.transaction_date }}
              </div>
            </div>

            <div class="md:text-right mt-4 md:mt-0">
              <div>
                Status
                <span
                  class="font-semibold"
                  :class="
                    bayar.status === 6 ? 'text-red-500' : 'text-yellow-500'
                  "
                  >{{ bayar.status_transaksi }}</span
                >
              </div>
              <div class="font-semibold">
                <span class="text-gray-800">dikirim oleh</span>
                {{ bayar.shipping[0].user_data.name }}
              </div>
            </div>
          </div>

          <div v-for="p in bayar.transaction_detail" :key="p.id">
            <card-pesanan
              :title="p.products.product_name"
              :batalkan="true"
              :harga="p.products.product_price"
              :pembayaran="false"
              :id="bayar.id"
              :noPesanan="bayar.transaction_code"
              :nameImage="p.products.imageurl"
              :status_payment="bayar.status_transaksi"
            />
          </div>

          <div class="md:my-auto mt-4 flex justify-end">
            <nuxt-link
              :to="'/checkout/berhasil/' + bayar.id"
              class="
                py-1
                px-8
                rounded
                bg-ungusuez
                border border-ungusuez
                text-white
                hover:border-purple-700 hover:bg-purple-700
              "
            >
              <span>Detail</span>
            </nuxt-link>
          </div>
        </div>
        <!-- enddata dikirim -->
      </div>
      <!-- end produk di kirim -->

      <!-- produk di selesai -->
      <div class="" v-show="isSelesai">
        <!-- data selesai -->
        <div
          class="border border-gray-300 py-2 px-4 rounded mt-4"
          v-for="selesai in produk_selesai"
          :key="selesai.id"
          v-if="!loading"
        >
          <div class="md:flex justify-between mb-5">
            <div>
              <div>
                Nomor Transaksi
                <span class="font-semibold">{{
                  selesai.transaction_code
                }}</span>
              </div>
              <div class="text-gray-500 text-sm">
                dipesan pada tanggal {{ selesai.transaction_date }}
              </div>
            </div>

            <div class="md:text-right mt-4 md:mt-0">
              <div>
                Status
                <span class="font-semibold text-gray-800">{{
                  selesai.status_transaksi
                }}</span>
              </div>
              <div class="font-medium text-green-700">
                <span class="text-gray-800">Total Bayar</span> Rp.{{
                  selesai.sub_total_price | currency
                }}
              </div>
            </div>
          </div>

          <div v-for="p in selesai.transaction_detail" :key="p.id">
            <card-pesanan
              :title="p.products.product_name"
              :batalkan="true"
              :harga="p.products.product_price"
              :pembayaran="false"
              :id="selesai.id"
              :noPesanan="selesai.transaction_code"
              :nameImage="p.products.imageurl"
              :status_payment="selesai.status_transaksi"
            />
          </div>

          <!-- rating -->
          <div v-if="ulasan.transaction_code === selesai.transaction_code">
            <div class="text-center">
              <StarRating
                v-model="ulasan.stars"
                :star-size="25"
                :inline="true"
                class="text-center mx-auto justify-items-center"
              >
              </StarRating>
            </div>
            <div class="text-gray-700">Berikan ulasan anda</div>
            <div>
              <textarea
                v-model="ulasan.detail_review"
                class="border bg-gray-100 rounded w-full p-2 my-2"
                placeholder="ketik pesan ..."
              ></textarea>
            </div>
          </div>
          <!-- endrating -->

          <div v-if="selesai.product_review === null">
            <div
              class="md:my-auto mt-4 flex justify-end"
              v-if="ulasan.transaction_code !== selesai.transaction_code"
            >
              <div
                class="
                  py-1
                  px-8
                  rounded
                  bg-ungusuez
                  border border-ungusuez
                  text-white
                  hover:border-purple-700 hover:bg-purple-700
                  cursor-pointer
                "
                @click="showFromUlasan(selesai.transaction_code)"
              >
                <span>Beri Ulasan</span>
              </div>
            </div>
            <div class="md:my-auto mt-4 flex" v-else>
              <div
                class="
                  py-1
                  px-8
                  rounded
                  bg-ungusuez
                  border border-ungusuez
                  text-white
                  hover:border-purple-700 hover:bg-purple-700
                  cursor-pointer
                "
                @click="hendleSendReview(selesai.id)"
              >
                <span>Kirim Ulasan</span>
              </div>
            </div>
          </div>

          <!-- data reviews  -->
          <div class="" v-if="selesai.product_review !== null">
            <div class="text-gray-800 text-sm mt-2 font-medium">
              Ulasan saya
            </div>
            <div class="text-left">
              <StarRating
                :rating="selesai.product_review.stars"
                :star-size="13"
                :inline="true"
                class="text-center mx-auto justify-items-center"
                :read-only="true"
                :show-rating="false"
              >
              </StarRating>
            </div>
            <div class="text-xs text-gray-500 mt-2">
              {{ selesai.product_review.detail_review }}
            </div>
          </div>
          <!-- enddata reviews  -->
        </div>

        <div v-if="produk_selesai.length == 0" class="text-center">
          <div class="font-medium">Data Kosong</div>
        </div>
        <!-- enddata selesai -->
      </div>
      <!-- end produk selesai -->
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  layout: 'dashboard',
  middleware: 'auth',
  head() {
    return {
      title: 'Dashboard Pesanan ' + this.$auth.user.name,
    }
  },
  data() {
    return {
      // loading skeleton
      loading: true,

      isBayaran: false,
      isKemasan: false,
      isKiriman: false,
      isSelesai: true,
      riwayat_transaksi: [],
      transaction_riwayat: [],
      produk_dikemas: [],
      produk_dikirim: [],
      produk_selesai: [],
      ulasan: {
        transaction_code: '', //untuk menjadikan primary saat memberi ulasan
        stars: 1,
        detail_review: '',
      },
    }
  },

  mounted() {
    this.historyTransaksi()
    this.produkKemas()
    this.produkKirim()
    this.produkSelesai()
  },
  methods: {
    async historyTransaksi() {
      let data = await this.$axios.get('/transactions').then((ress) => {
        this.transaction_riwayat = ress.data.data
        this.$store.commit('setProduk', this.transaction_riwayat)
        this.loading = false
      })
    },

    async produkKemas() {
      let response = await this.$axios
        .get('/data/transactions/pengemasan')
        .then((ress) => {
          this.produk_dikemas = ress.data.data
        })
    },

    async produkKirim() {
      await this.$axios.get('/data/transactions/pengiriman').then((ress) => {
        this.produk_dikirim = ress.data.data
      })
    },

    async produkSelesai() {
      await this.$axios.get('/data/transactions/selesai').then((ress) => {
        this.produk_selesai = ress.data.data
        console.log(this.produk_selesai)
      })
    },

    async hendleSendReview(id) {
      this.$store.commit('setLoading', true)
      let data = await this.$axios
        .post('/review/transaction', {
          transaction_id: id,
          stars: this.ulasan.stars,
          detail_review: this.ulasan.detail_review,
        })
        .then((ress) => {
          console.log(ress)
          this.produkSelesai()
          this.ulasan.transaction_code = ''
          this.$store.commit('setLoading', false)
          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Berhasil kirim ulasan.',
            showConfirmButton: false,
            timer: 2000,
          })
        })
    },

    showFromUlasan(code) {
      this.ulasan.transaction_code = code
    },

    bayaran() {
      this.isBayaran = true
      this.isKemasan = false
      this.isKiriman = false
      this.isSelesai = false
    },
    kemasan() {
      this.isBayaran = false
      this.isKemasan = true
      this.isKiriman = false
      this.isSelesai = false
    },
    kiriman() {
      this.isBayaran = false
      this.isKemasan = false
      this.isKiriman = true
      this.isSelesai = false
    },
    selesai() {
      this.isBayaran = false
      this.isKemasan = false
      this.isKiriman = false
      this.isSelesai = true
    },
    confirmCancle(id, status) {
      console.log(status)
      if (status === 'Canceled') {
        this.$swal.fire({
          icon: 'info',
          title: 'Status transaksi dibatalkan',
          text: 'Status transaksi sudah di batalkan, anda bisa melakukan pemesanan lagi',
          confirmButtonText: `Ok`,
        })

        return
      }
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
            this.batalkan(id)
          }
        })
    },

    async batalkan(id) {
      this.$store.commit('setLoading', true)
      let response = await this.$axios
        .post('/cancel/transactions', {
          transaction_id: id,
        })
        .then((ress) => {
          this.historyTransaksi()

          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Profile berhasil di update',
            showConfirmButton: false,
            timer: 1700,
          })
        })

      this.$store.commit('setLoading', false)
    },
  },
}
</script>
