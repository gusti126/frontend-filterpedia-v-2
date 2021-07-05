<template>
  <div>
    <div
      class="bg-gradient-to-r md:from-transparent bg-blue-700"
      v-if="scrollPosition < navHindden"
    >
      <div class="px-2 md:px-20 py-2">
        <nav class="flex">
          <nuxt-link to="/" class="my-auto mr-4 md:flex hidden">
            <div class="text-white font-medium text-lg">
              <img src="~assets/footer/logo.png" alt="" class="w-10" />
            </div>
          </nuxt-link>
          <!-- input search -->
          <div class="my-auto flex bg-white rounded-full md:w-96 w-full pr-4">
            <input
              type="text"
              class="
                h-8
                md:w-96
                w-full
                px-4
                rounded-full
                focus:outline-none
                font-medium
                text-gray-600
              "
              placeholder="Cari Produk ..."
              id="cari-nav"
            />
            <label for="cari-nav" class="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-700"
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
          </div>
          <!-- end input search -->

          <nuxt-link to="/keranjang" class="relative flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                my-auto
                ml-4
                h-8
                w-8
                text-white
                md:flex
                hidden
                hover:text-purple-200
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              class="
                absolute
                -right-2
                top-0
                hidden
                md:block
                rounded-full
                bg-green-600
                px-1
                text-white text-sm
                leading-tight
                text-center
              "
              >{{ keranjang.length }}
            </span>
          </nuxt-link>
          <div class="ml-2 md:ml-6 my-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
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
          <nuxt-link
            to="/login"
            class="
              ml-auto
              border-2 border-white
              rounded-lg
              px-4
              py-1
              hover:bg-white hover:text-blue-500
              text-white
              md:flex
              hidden
            "
          >
            <div class="font-medium text-lg">Masuk</div>
          </nuxt-link>
          <nuxt-link
            to="/register"
            class="
              bg-white
              rounded
              px-4
              py-1
              hover:bg-blue-200 hover:text-white
              text-blue-500
              ml-4
              md:flex
              hidden
            "
          >
            <div class="font-medium text-lg my-auto">Daftar</div>
          </nuxt-link>
        </nav>
      </div>
    </div>
    <div
      class="bg-gradient-to-r md:from-transparent bg-white"
      v-if="scrollPosition > navScroll"
      :class="{
        'fixed bg-white top-0 border-b shadow w-full z-10':
          scrollPosition > navScroll,
      }"
    >
      <div class="px-2 md:px-20 py-2">
        <nav class="flex">
          <nuxt-link to="/" class="my-auto mr-4 md:flex hidden">
            <div class="text-blue-500 font-medium text-lg">
              <img src="~assets/footer/logo.png" alt="" class="w-10" />
            </div>
          </nuxt-link>
          <!-- input search -->
          <div
            class="
              my-auto
              flex
              bg-white
              border border-gray-400
              rounded-full
              md:w-96
              w-full
              pr-4
            "
          >
            <input
              type="text"
              class="
                h-8
                md:w-96
                w-full
                px-4
                rounded-full
                focus:outline-none
                font-medium
                text-gray-600
              "
              placeholder="Cari Produk ..."
              id="cari-nav"
            />
            <label for="cari-nav" class="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
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
          </div>
          <!-- end input search -->

          <nuxt-link to="/keranjang" class="relative flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                my-auto
                ml-4
                h-8
                w-8
                text-blue-700
                md:flex
                hidden
                hover:text-purple-200
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              class="
                absolute
                -right-2
                top-0
                hidden
                md:block
                rounded-full
                bg-green-600
                px-1
                text-white text-sm
                leading-tight
                text-center
              "
              >{{ keranjang.length }}
            </span>
          </nuxt-link>

          <div class="mx-3 md:ml-6 my-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 md:h-8 md:w-8 text-gray-600 md:text-blue-700"
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
          <div class="my-auto relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-7
                w-7
                md:h-8 md:w-8
                text-gray-600
                md:ml-4 md:text-blue-700
              "
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
                right-0
                text-white
                bg-green-600
                rounded-full
                px-1
                text-xs
              "
            >
              4
            </span>
          </div>
          <nuxt-link
            to="/login"
            class="
              ml-auto
              bg-blue-700
              rounded-lg
              px-4
              py-1
              hover:bg-blue-500
              text-white
              md:flex
              hidden
            "
          >
            <div class="font-medium text-lg my-auto">Masuk</div>
          </nuxt-link>
          <nuxt-link
            to="/register"
            class="
              bg-gray-300
              rounded
              px-4
              py-1
              hover:bg-blue-200 hover:text-white
              text-gray-500
              ml-4
              md:flex
              hidden
            "
          >
            <div class="font-medium text-lg my-auto">Daftar</div>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navScroll: Number,
  },
  data() {
    return {
      keranjang: this.$store.state.keranjang,
      scrollPosition: null,
      navHindden: this.navScroll + 100,
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
