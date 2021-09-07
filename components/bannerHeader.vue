<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div class="">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem v-for="banner in bannerMain" :key="banner.id">
        <img :src="banner.imageurl" alt="" class="md:rounded" />
      </slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
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
        autoplay: 2000,
        loop: true,
        itemAnimation: true,
      },

      bannerMain: [],
    }
  },

  mounted() {
    this.getBannerHome()
  },

  methods: {
    async getBannerHome() {
      let bannerHeader = await this.$axios
        .get('/banner-positions/main-banner')
        .then((ress) => {
          this.bannerMain = ress.data.data.banners
          console.log('dari component banner header')
          console.log(this.bannerMain)
        })
    },
  },
}
</script>
