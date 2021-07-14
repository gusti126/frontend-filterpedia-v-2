<template>
  <div class="pb-20 md:pb-0">
    <nav-mobile :isHome="true" />
    <navbar :navScroll="170" />
    <div class="mt-6 md:px-20 px-6">
      <div></div>
      <div class="p-4 flex">
        <div>
          <img src="~assets/footer/Group 5.svg" alt="" class="w-72" />
        </div>
        <div class="ml-10 mt-4">
          <div class="text-xl text-blue-900 font-semibold">Butuh bantuan ?</div>

          <div class="text-base text-gray-600 mt-4 w-72">
            hubungi customer service kita jika kamu memiliki pertanyaan
          </div>
          <div
            class="
              text-center
              bg-gradient-to-r
              from-blue-500
              rounded
              mt-6
              py-2
              to-purple-500
            "
          >
            <nuxt-link to="chat" class="text-center text-white"
              >Hubungi Cs</nuxt-link
            >
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
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
