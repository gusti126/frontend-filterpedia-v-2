<template>
  <div class="bg-white rounded p-2 md:p-3 shadow">
    <div>
      <!--  -->
      <img :src="nameImage" :alt="nameImage" class="rounded" />
    </div>
    <div class="font-semibold mb-2 text-sm md:text-base text-gray-800 mt-2">
      {{ title }}
    </div>

    <div v-if="diskon > 1">
      <div class="flex my-2">
        <div class="text-blue-900 text-xs md:text-sm font-medium my-auto">
          {{ persenDiskon }}%
        </div>
        <div
          class="
            font-normal
            text-xs
            md:text-sm
            italic
            line-through
            text-gray-500
            mx-1
            md:mx-3
          "
        >
          Rp.{{ diskon }}
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="flex">
        <div class="font-medium text-sm md:text-base text-green-600">
          Rp.{{ price | currency }}
        </div>
      </div>

      <div class="flex my-auto">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-5 md:w-4 my-auto text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <div class="text-xs my-auto ml-1 text-gray-500">(200)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    nameImage: String,
    diskon: Number,
    persenDiskon: Number,
    noPesanan: String,
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.diskon)
  },

  methods: {},
}
</script>
