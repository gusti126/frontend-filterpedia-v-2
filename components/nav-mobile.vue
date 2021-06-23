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
      "
    >
      <div>
        <nuxt-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <div class="text-sm text-center text-blue-600">Home</div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/produk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div class="text-sm text-center text-gray-600">Produk</div>
        </nuxt-link>
      </div>
      <div>
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
          <div class="text-sm text-center text-gray-600">Keranjang</div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/profile">
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