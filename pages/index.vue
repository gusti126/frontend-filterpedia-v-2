<template>
  <div class="pb-20 md:pb-0">
    <nav-mobile :isHome="true" />
    <navbar :navScroll="170" />
    <!-- banner header -->
    <div class="md:px-0">
      <banner-header />
    </div>
    <!--end banner header -->
    <div class="md:px-20 px-2">
      <kategori />

      <!-- Product populer -->
      <div
        class="
          mt-6
          font-semibold
          text-base
          md:text-2xl
          text-gray-800
          mb-4
          md:mb-5
        "
      >
        Product Populer
      </div>
      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-2 md:gap-4"
      >
        <div class="md:col-span-3 col-span-1" v-for="range in 4" v-show="load">
          <div
            class="
              border border-blue-300
              shadow
              rounded-md
              p-4
              max-w-sm
              w-full
              mx-auto
            "
          >
            <div class="animate-pulse">
              <div class="rounded bg-blue-400 h-32 py-8">
                <div class="font-bold text-center text-blue-600 text-xl">
                  Sedang Loading Sebentar
                </div>
              </div>
              <div class="rounded bg-blue-400 h-4 mt-2"></div>
              <div class="rounded bg-blue-400 h-4 mt-2"></div>
              <!-- <div class="bg-red-700"></div> -->
            </div>
          </div>
        </div>
        <div
          class="md:col-span-3 col-span-1"
          v-for="item in items"
          :key="item.id"
          v-show="!load"
        >
          <nuxt-link :to="'/productDetail/' + item.id">
            <!-- dekstop view -->
            <card-produk
              class="md:hidden block"
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="item.harga"
              :load="load"
              :title="
                item.nama.length > 18
                  ? item.nama.substring(0, 18) + ' ...'
                  : item.nama
              "
            />

            <!-- mobile view -->
            <card-produk
              class="hidden md:block"
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="item.harga"
              :load="load"
              :title="
                item.nama.length > 23
                  ? item.nama.substring(0, 23) + ' ...'
                  : item.nama
              "
            />
          </nuxt-link>
        </div>
      </div>
      <!-- endProduct populer -->
    </div>
    <!-- banner info -->
    <div class="md:px-20 px-2 my-5">
      <img
        src="~/assets/banner/bannerinfo.png"
        alt=""
        class="rounded md:rounded-xl md:block hidden"
      />
      <!-- Make a div wrapped slider,set height and width -->
      <div class="md:hidden mt-6">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem>
            <img src="~/assets/banner/Frame 8.jpg" alt="" class="" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/Frame 1.jpg" alt="" class="" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/Frame 4.jpg" alt="" class="" />
          </slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
    </div>
    <!-- endbanner info -->

    <!-- produk spesial diskon -->
    <div class="md:px-20 px-2">
      <div
        class="font-semibold text-base md:text-2xl text-gray-800 mb-4 md:mb-5"
      >
        Spesial Diskon
      </div>

      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-2 md:gap-4"
      >
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-3.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-2.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- endproduk spesial diskon -->

    <div>
      <botfooter nameImage="logo.png" />
    </div>
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
