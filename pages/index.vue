<template>
  <div class="pb-20 md:pb-0">
    <nav-mobile :isHome="true" />
    <navbar :navScroll="170" />
    <!-- banner header -->
    <div class="md:px-20 px-0">
      <banner-header />
    </div>
    <!--end banner header -->
    <div class="md:px-20 px-2 mt-10">
      <kategori />

      <!-- Product populer -->
      <div
        class="
          mt-10
          font-semibold
          text-base
          md:text-xl
          text-gray-800
          mb-4
          md:mb-5
        "
      >
        Product Populer
      </div>
      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-3 md:gap-6"
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
          <nuxt-link :to="'/productDetail/' + item.slug">
            <!-- dekstop view -->
            <card-produk
              class="md:hidden block"
              :nameImage="item.imageurl"
              v-bind:diskon="80000"
              v-bind:price="item.product_price"
              :load="load"
              :title="
                item.product_name.length > 18
                  ? item.product_name.substring(0, 16) + ' ...'
                  : item.product_name
              "
            />

            <!-- mobile view -->
            <card-produk
              class="hidden md:block"
              :nameImage="item.imageurl"
              v-bind:diskon="80000"
              v-bind:price="item.product_price"
              :load="load"
              :title="
                item.product_name.length > 23
                  ? item.product_name.substring(0, 26) + ' ...'
                  : item.product_name
              "
            />
          </nuxt-link>
        </div>
      </div>
      <!-- endProduct populer -->
    </div>
    <!-- banner info -->
    <div class="md:px-20 px-2 mt-6">
      <img
        src="~/assets/banner/bannerinfo.png"
        alt=""
        class="rounded md:rounded-xl md:block hidden"
      />
      <!-- Make a div wrapped slider,set height and width -->
      <div class="md:hidden">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem>
            <img src="~/assets/banner/Frame 4.jpg" alt="" class="" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/Frame 8.jpg" alt="" class="" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/Frame 1.jpg" alt="" class="" />
          </slideritem>

          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
    </div>
    <!-- endbanner info -->

    <!-- brand logo -->
    <div class="md:px-20 px-2 my-10 hidden md:block">
      <brand-logo />
    </div>
    <!-- endbrand logo -->

    <!-- produk spesial diskon -->
    <div class="md:px-20 px-2 mt-6 md:mt-10">
      <div
        class="font-semibold text-base md:text-xl text-gray-800 mb-4 md:mb-5"
      >
        Spesial Diskon
      </div>

      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-3 md:gap-6"
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
          <nuxt-link :to="'/produk/' + item.slug">
            <!-- dekstop view -->
            <card-produk
              class="md:hidden block"
              :nameImage="item.imageurl"
              v-bind:diskon="80000"
              v-bind:price="item.product_price"
              :load="load"
              :title="
                item.product_name.length > 18
                  ? item.product_name.substring(0, 16) + ' ...'
                  : item.product_name
              "
            />

            <!-- mobile view -->
            <card-produk
              class="hidden md:block"
              :nameImage="item.imageurl"
              v-bind:diskon="80000"
              v-bind:price="item.product_price"
              :load="load"
              :title="
                item.product_name.length > 23
                  ? item.product_name.substring(0, 26) + ' ...'
                  : item.product_name
              "
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
  head() {
    return {
      title: 'Filterpedia The Water Treatment Filter',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://filterpedia.co.id/',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content:
            'Filterpedia Jual The Water Treatment Filter. Jual Water Treatment Filter Mudah dan Aman',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://filterpedia.co.id/filterpedia.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'filterpedia kami menawarkan berbagai macam filter dan kartrid untuk memecahkan sejumlah masalah terkait air.',
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: 'Filterpedia Water Treatment Indonesia',
        },

        {
          hid: 'og:title',
          name: 'og:title',
          content: 'filterpedia Membrane Filter',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Cartridge Filter',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'EDI ( Electro Deionization ) Filter',
        },
        {
          hid: 'keyword',
          name: 'keyword',
          property: 'keyword',
          content:
            'Jual The Water Treatment Filter. Jual Water Treatment Filter Mudah dan Aman',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content:
            'Filterpedia Indonesia Water Treatment Filter Mudah dan Aman',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'Filterpedia Indonesia Water Treatment Filter Mudah dan Aman',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'filterpedia kami menawarkan berbagai macam filter dan kartrid untuk memecahkan sejumlah masalah terkait air.',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@Filterpedia',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@Filterpedia',
        },
      ],
    }
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
      tes: 'filterpedia kami menawarkan berbagai macam filter dan kartrid untuk memecahkan sejumlah masalah terkait air.',
      items: [],
    }
  },
  mounted() {
    this.fetchSomething()
    console.log(this.tes.length)
  },
  methods: {
    async fetchSomething() {
      const data = await this.$axios.$get('/products').then((ress) => {
        this.items = ress.data
        console.log(this.items[0].product_name)
        this.load = false
      })
    },
  },
}
</script>
