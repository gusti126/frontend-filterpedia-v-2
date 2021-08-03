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
          Belum di bayar({{ this.$store.state.produk.length }})
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isBayaran"
          ></div>
        </div>
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
          di kemas(4)
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isKemasan"
          ></div>
        </div>
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
          di kirim(2)
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isKiriman"
          ></div>
        </div>
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
          Selesai
          <div
            class="mt-2 border border-blue-500 rounded-full"
            v-show="isSelesai"
          ></div>
        </div>
      </div>

      <!-- produk blum di bayar -->
      <div class="" v-show="isBayaran">
        <div v-for="bayar in this.$store.state.produk" :key="bayar.id">
          <card-pesanan
            v-if="bayar.status == 0"
            :title="bayar.transaction_detail[0].products.product_name"
            :batalkan="true"
            :harga="bayar.transaction_detail[0].products.product_price"
            :pembayaran="false"
            :id="bayar.id"
            :noPesanan="bayar.transaction_code"
            :nameImage="bayar.transaction_detail[0].products.imageurl"
            :status_payment="bayar.status_transaksi"
          />
        </div>
        <!-- endtesdata state produk -->
      </div>
      <!-- endproduk blum di bayar -->

      <!-- produk di kemas -->
      <div class="" v-show="isKemasan">
        <!-- data dikemas -->
        <card-pesanan
          title="Filter air botolan"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20-3.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20-2.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20-3.jpg"
        />
        <!-- enddata dikemas -->
      </div>
      <!-- end produk di kemas -->

      <!-- produk di kirim -->
      <div class="" v-show="isKiriman">
        <!-- data dikemas -->
        <card-pesanan
          title="Filter air botolan"
          :hiddenCaraBayar="true"
          namaPengirim="Joni Ladusta"
          :dikirim="true"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :hiddenCaraBayar="true"
          namaPengirim="Joni Ladusta"
          :dikirim="true"
          :harga="80000"
          :batalkan="false"
          :pembayaran="true"
          noPesanan="200212123121"
          nameImage="Rectangle 20-3.jpg"
        />
        <!-- enddata dikemas -->
      </div>
      <!-- end produk di kirim -->
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
export default {
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

      isBayaran: true,
      isKemasan: false,
      isKiriman: false,
      isSelesai: false,
      riwayat_transaksi: [],
      transaction_riwayat: [],
    }
  },

  mounted() {
    this.historyTransaksi()
  },
  // async fetch() {
  //   let items = await this.$axios.get('/profile').then((ress) => {
  //     this.$store.commit('setProduk', ress.data.riwayat_transaksi)
  //     // this.produks = this.$store.state.produk
  //   })
  // },
  methods: {
    async historyTransaksi() {
      let data = await this.$axios.get('/transactions').then((ress) => {
        this.transaction_riwayat = ress.data.data
        console.log(this.transaction_riwayat)
        this.$store.commit('setProduk', this.transaction_riwayat)
        this.loading = false
      })
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
  },
}
</script>
