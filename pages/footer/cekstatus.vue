<template>
  <div class="pb-20 md:pb-0">
    <nav-mobile :isHome="true" />
    <navbar :navScroll="170" />
    <div class="mt-6 md:px-20 px-6">
      <img src="~assets/footer/Group 4.png" alt="" class="w-96 mx-auto" />
      <div
        class="
          md:text-3xl
          text-2xl
          font-semibold
          text-blue-900 text-center
          mt-2
        "
      >
        Cara cek orderan kita
      </div>
      <div>
        Setelah selasai melakukan pemesanan barang akan langsung di proses dan
        kamu bisa melihatnya
        <nuxt-link to="/dashboard/pesanan" class="text-blue-800 font-medium"
          >disini</nuxt-link
        >
      </div>
      <div class="text-blue-900 font-semibold mt-4 text-lg">
        Cek status di dashboard
      </div>
      <ol class="list-decimal list-inside bg-rose-200">
        <li>Masuk ke halaman dashboard</li>
        <li>Pilih menu pesanan saya di sebalah kiri</li>
      </ol>
      <div class="text-blue-900 font-semibold mt-4 text-xl text-center">
        Info status
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row mt-4">
        <div class="shadow-md rounded">
          <div
            class="bg-gradient-to-r from-blue-500 rounded-t p-4 to-green-500"
          >
            <div class="text-lg text-white font-medium flex">
              Belum di bayar
              <img
                src="~/assets/icon/003-timer.svg"
                alt=""
                class="h-8 bg-white rounded-full p-1 ml-auto"
              />
            </div>
          </div>
          <div class="p-4">
            Status belum di bayar untuk barang yang sudah di pesan namun belum
            di bayar anda bisa melihat cara bayarnya dengan mengklik cara bayar
          </div>
        </div>
        <div class="shadow-md rounded">
          <div
            class="bg-gradient-to-r from-purple-500 rounded-t p-4 to-indigo-500"
          >
            <div class="text-lg text-white font-medium flex">
              Sedang di kemas
              <img
                src="~/assets/icon/039-open box.svg"
                alt=""
                class="h-8 bg-white rounded-full p-1 ml-auto"
              />
            </div>
          </div>
          <div class="p-4">
            Setelah melakukan pembayaran barang kamu akan di kemas oleh kami dan
            siap untuk di kirim
          </div>
        </div>
        <div class="shadow-md rounded">
          <div
            class="bg-gradient-to-r from-yellow-500 rounded-t p-4 to-red-500"
          >
            <div class="text-lg text-white font-medium flex">
              Sedang di kirim
              <img
                src="~/assets/icon/018-delivery truck 1 (1).svg"
                alt=""
                class="h-8 bg-white rounded-full p-1 ml-auto"
              />
            </div>
          </div>
          <div class="p-4">
            Pada tahap ini barang kamu sedang berada di perjalanan untuk di
            kirim ke alamat kamu
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div>
      <botfooter nameImage="logo.png" />
    </div>
    <!-- endfooter -->
  </div>
</template>

<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
import BannerHeader from '~/components/bannerHeader.vue'
export default {
  components: {
    slider,
    slideritem,
    BannerHeader,
  },
  data() {
    return {
      load: true,
      options: {
        currentPage: 0,
        autoplay: 2000,
        loop: true,
        itemAnimation: true,
      },
      items: [],
    }
  },
  mounted() {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething() {
      const data = await this.$axios.$get('/course').then((ress) => {
        this.items = ress.data
        this.load = false
      })
      console.log(this.items)
      console.log(this.load)
    },
  },
}
</script>
