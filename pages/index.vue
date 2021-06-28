<template>
  <div>
    <nav-mobile />
    <navbar />
    <!-- banner header -->
    <div class="px-2">
      <img
        src="~/assets/banner/header-banner.png"
        alt=""
        class="md:block hidden"
      />

      <!-- Make a div wrapped slider,set height and width -->
      <div class="-mt-12 md:hidden">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem>
            <img src="~/assets/banner/mobile1.jpg" alt="" class="rounded-lg" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/mobile2.jpg" alt="" class="rounded-lg" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/mobile3.png" alt="" class="rounded-lg" />
          </slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
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
        <div class="md:col-span-3 col-span-1">
          <Skeleton>
            <nuxt-link to="/productdetail">
              <card-produk
                nameImage="Rectangle 20-1.jpg"
                v-bind:diskon="80000"
                v-bind:price="70000"
                title="Nama Produk 1"
              />
            </nuxt-link>
          </Skeleton>
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
            <img src="~/assets/banner/mobile1.jpg" alt="" class="rounded-lg" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/mobile2.jpg" alt="" class="rounded-lg" />
          </slideritem>
          <slideritem>
            <img src="~/assets/banner/mobile3.png" alt="" class="rounded-lg" />
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
export default {
  components: {
    slider,
    slideritem,
  },
  data() {
    return {
      load: true,

      options: {
        currentPage: 0,
        autoplay: 3000,
        loop: true,
        itemAnimation: true,
        centeredSlides: true,
      },
    }
  },
  beforeMount() {
    console.log('before mount')
  },
  beforeCreate() {
    console.log('beforecreate')
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
