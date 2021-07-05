<template>
  <div class="pb-24 md:pb-0">
    <nav-mobile :isExplore="true" />
    <banner-header class="mb-6" />
    <div
      class="z-10 px-4 flex"
      :class="{
        'fixed bg-white border-b top-0 w-full py-2 pr-4': scrollPosition > 250,
      }"
    >
      <div
        class="
          my-auto
          flex
          bg-white
          border border-gray-400
          pl-4
          rounded-lg
          w-60
          md:w-96
          pr-4
        "
        :class="{ 'mr-4': scrollPosition < 250 }"
      >
        <label for="cari-nav" class="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <input
          type="text"
          class="h-8 md:w-96 px-4 w-48 focus:outline-none text-gray-600"
          placeholder="Cari Produk ..."
          id="cari-nav"
        />
      </div>
      <!-- <div class="flex ml-2" v-if="scrollPosition > 250">
        <div>
          <img
            src="~assets/profile.jpg"
            alt=""
            class="w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div class="text-gray-700 font-medium ml-2 my-auto">Lisa Blackpink</div>
      </div> -->
      <div class="my-auto relative" v-if="scrollPosition > 250">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 text-gray-600 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span
          class="
            absolute
            -top-0
            left-3
            text-white
            bg-blue-500
            rounded-full
            px-1
            text-xs
          "
        >
          4
        </span>
      </div>
      <div class="my-auto" v-if="scrollPosition > 250">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2 h-7 w-7 text-gray-600 md:text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
    </div>
    <div class="md:px-20 px-4">
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
        Semua Product
      </div>
      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-4 md:gap-4"
      >
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk 1"
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
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk 1"
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
      <!-- endProduct populer -->
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>
