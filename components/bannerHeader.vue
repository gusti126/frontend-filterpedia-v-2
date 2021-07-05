<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div class="">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->

      <slideritem>
        <img src="~/assets/banner/Frame 1.jpg" alt="" class="" />
      </slideritem>
      <slideritem>
        <img src="~/assets/banner/Frame 4.jpg" alt="" class="" />
      </slideritem>
      <slideritem>
        <img src="~/assets/banner/Frame 8.jpg" alt="" class="" />
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
    }
  },
}
</script>
