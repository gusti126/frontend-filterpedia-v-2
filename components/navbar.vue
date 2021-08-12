<template>
  <div class="mb-12 md:mb-20">
    <div
      class="
        bg-gradient-to-r
        md:from-transparent
        fixed
        top-0
        z-10
        w-full
        bg-ungusuez
        md:bg-white
      "
      :class="scrollPosition < navHindden ? '' : 'md:shadow'"
    >
      <div class="px-2 md:px-20 py-2 md:py-3">
        <nav class="flex">
          <nuxt-link to="/" class="my-auto mr-4 md:flex hidden">
            <div class="text-white font-medium text-lg">
              <img src="~assets/filterpedia.png" alt="" class="w-24" />
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
                bg-white
                text-gray-600
              "
              placeholder="Cari Produk ..."
              v-model="keyword"
              id="cari-nav"
            />
            <label for="cari-nav" class="my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-700 md:text-gray-500"
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
                mx-4
                h-8
                w-8
                text-white
                md:text-ungusuez md:flex
                hidden
                hover:text-purple-500
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
                right-2
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
              v-if="this.$auth.loggedIn"
              ><span v-if="this.$store.state.auth.user.cart_count">{{
                this.$store.state.auth.user.cart_count
              }}</span>
            </span>
          </nuxt-link>

          <div class="ml-2 md:ml-4 my-auto">
            <div>
              <a href="https://tawk.to/chat/607859d7067c2605c0c2c3a9/1f3b4dbk4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white md:text-ungusuez"
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
              </a>
            </div>
          </div>
          <!--jika user belum login -->
          <nuxt-link
            to="/login"
            class="
              ml-auto
              border-2 border-ungusuez
              rounded-lg
              px-4
              py-1
              hover:bg-ungusuez hover:text-white
              text-ungusuez
              md:flex
              hidden
            "
            v-if="!this.$store.state.auth.loggedIn"
          >
            <div class="font-medium text-lg">Masuk</div>
          </nuxt-link>
          <!-- jika user sudah login -->
          <div
            class="
              text-white
              md:text-ungusuez
              font-medium
              ml-auto
              my-auto
              md:flex
              hidden
            "
            v-else
          >
            <nuxt-link to="/dashboard/profile">{{
              this.$store.state.auth.user.name
            }}</nuxt-link>
          </div>
          <nuxt-link
            to="/register"
            class="
              bg-ungusuez
              rounded
              px-4
              py-1
              hover:bg-blue-200 hover:text-white
              text-white
              ml-4
              md:flex
              hidden
            "
            v-if="!this.$store.state.auth.loggedIn"
          >
            <div class="font-medium text-lg my-auto">Daftar</div>
          </nuxt-link>
          <!-- image jika user sudah login -->
          <div class="" v-else>
            <nuxt-link to="/dashboard/profile"
              ><img
                v-if="this.$store.state.auth.user.profile_photo_url"
                :src="this.$store.state.auth.user.profile_photo_url"
                class="rounded-full w-10 h-10 object-cover ml-4 md:flex hidden"
            /></nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keranjang: this.$store.state.keranjang,
      scrollPosition: null,
      navHindden: 200,
      keyCari: '',
      keyword: '',
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    updateProfile(request) {
      console.log('hello ini dari navbar')
    },
  },
}
</script>
