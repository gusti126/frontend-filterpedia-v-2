<template>
  <div>
    <div
      class="
        md:hidden
        flex
        justify-between
        fixed
        bottom-0
        bg-white
        px-2
        pt-1
        border
        w-full
        rounded-t-xl
        z-50
      "
    >
      <div>
        <nuxt-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <div class="text-sm text-center text-blue-600">Home</div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/produk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <div class="text-sm text-center text-gray-600">Explore</div>
        </nuxt-link>
      </div>
      <div class="relative">
        <nuxt-link to="/keranjang">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-600"
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
          <div class="text-sm text-center text-gray-600">
            <span
              class="
                absolute
                right-4
                top-0
                rounded-full
                bg-blue-700
                px-1
                text-white text-sm
                leading-tight
                text-center
              "
              >{{ keranjang.length }}
            </span>
            Keranjang
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/mobile/menu-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div class="text-sm text-center text-gray-600">Profile</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keranjang: this.$store.state.keranjang,
    }
  },
}
</script>