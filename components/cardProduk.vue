<template>
  <div class="bg-white rounded-lg md:rounded-xl p-2 md:p-3 border shadow">
    <div>
      <Skeleton height="150px" v-show="load" />
      <img
        :src="require(`~/assets/product/${nameImage}`)"
        :alt="nameImage"
        class="rounded-lg md:rounded-xl"
        v-show="!load"
      />
    </div>
    <div class="font-normal text-sm md:text-xl text-gray-800 mt-2">
      <Skeleton height="50px">
        {{ title }}
      </Skeleton>
    </div>
    <div class="font-semibold text-sm md:text-xl text-blue-800">
      Rp.{{ price | currency }}
    </div>
    <div class="flex mt-2">
      <div
        class="
          bg-blue-200
          text-blue-500 text-xs
          md:text-sm
          rounded-md
          my-auto
          px-1
          font-bold
        "
      >
        70%
      </div>
      <div
        class="
          font-normal
          text-xs
          md:text-lg
          italic
          line-through
          text-gray-500
          mx-1
          md:mx-3
        "
      >
        Rp.{{ diskon }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 md:h-5 md:w-5 my-auto text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <div class="text-xs md:text-base">(200)</div>
    </div>
  </div>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'
import VueCurrencyFilter from 'vue-currency-filter'

export default {
  props: {
    title: String,
    price: Number,
    nameImage: String,
    diskon: Number,
  },
  components: { Skeleton },
  data() {
    return {
      load: false,
    }
  },
  mounted() {
    // this.hiddenLoad();
  },

  methods: {
    hiddenLoad() {
      setTimeout(() => {
        this.load = false
      }, 3000)
    },

    start() {
      this.load = true
      console.log('start loading')
    },
    finish() {
      this.load = false
    },
  },
}
</script>
