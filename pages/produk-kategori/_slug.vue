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
        Produk {{ produkName }}
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
        src="~/assets/banner/bannerinfo.svg"
        alt=""
        class="rounded md:rounded-xl md:block hidden w-full"
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
      title: 'Beli > + ' + this.produkName + ' | Filterpedia',
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content:
            'Beli ' +
            this.produkName +
            ' Filterpedia Water Treatment Filter Mudah dan Aman ',
        },
        {
          hid: 'url',
          name: 'url',
          property: 'url',
          content: 'https://filterpedia.co.id/#/' + this.$route.params.slug,
        },
        {
          hid: 'keyword',
          name: 'keyword',
          property: 'keyword',
          content: this.seo.keywords,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content: this.seo.description_seo,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Beli > +' + this.produkName,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          name: 'og:image',
          content: this.imageurl,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          name: 'og:type',
          content: 'product',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://filterpedia.co.id/#/' + this.$route.params.slug,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          name: 'twitter:card',
          content: 'product',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          name: 'twitter:title',
          content: this.produkName,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          name: 'twitter:description',
          content: this.seo.description_seo,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          name: 'twitter:image',
          content: this.imageurl,
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
      seo: {
        keywords: '',
        description_seo: '',
      },
      produkName: '',
      imageurl: '',
      tes: 'filterpedia kami menawarkan berbagai macam filter dan kartrid untuk memecahkan sejumlah masalah terkait air.',
      items: [],
    }
  },
  mounted() {
    this.fetchSomething()
    // console.log(this.tes.length)
  },
  methods: {
    async fetchSomething() {
      const data = await this.$axios
        .$get('/product-category/' + this.$route.params.slug)
        .then((ress) => {
          this.items = ress.data.products
          // console.log(ress.data)
          this.produkName = ress.data.category_name
          this.imageurl = ress.data.imageurl
          this.seo.keywords = ress.data.keywords
          this.seo.description_seo = ress.data.description_seo
          this.load = false
        })
    },
  },
}
</script>
