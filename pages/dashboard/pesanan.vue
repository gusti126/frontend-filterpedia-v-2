<template>
  <div>
    <!-- content -->
    <div class="bg-white w-full min-h-full pt-3 md:p-6 rounded-xl">
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
          Belum di bayar(3)
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
      <div class="" v-show="isBayaran">
        <!-- data belum dibayar -->
        <card-pesanan
          title="Filter air botolan"
          :batalkan="true"
          :harga="80000"
          :pembayaran="false"
          noPesanan="200212123121"
          nameImage="Rectangle 20-2.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :batalkan="true"
          :harga="80000"
          :pembayaran="false"
          noPesanan="200212123121"
          nameImage="Rectangle 20.jpg"
        />
        <card-pesanan
          title="Filter air botolan"
          :batalkan="true"
          :harga="80000"
          :pembayaran="false"
          noPesanan="200212123121"
          nameImage="Rectangle 20-3.jpg"
        />
        <!-- enddata belum dibayar -->
      </div>
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
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      isBayaran: true,
      isKemasan: false,
      isKiriman: false,
      isSelesai: false,
    }
  },
  head() {
    return {
      title: 'Dashboard Pesanan ' + this.$auth.user.name,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
  methods: {
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
