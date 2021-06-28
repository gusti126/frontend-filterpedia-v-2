<template>
  <div class=" h-28 bg-gradient-to-r from-purple-400 to-blue-600 md:from-transparent md:bg-blue-600 md:h-full">
    <div class=" px-2 md:px-20 py-2">
      <nav class="flex">
        <nuxt-link to="/" class="my-auto mr-4 md:flex hidden">
          <div class="text-white font-medium text-lg">LOGO NAV</div>
        </nuxt-link>
        <!-- input search -->
        <div class="my-auto flex bg-white rounded-full pr-4">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="my-auto ml-4 h-8 w-8 text-white md:flex hidden"
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
        <nuxt-link
          to="/login"
          class="
            ml-auto
            border-2 border-white
            rounded-lg
            px-4
            py-1
            hover:bg-white
            hover:text-blue-500
            text-white
            md:flex hidden
          "
        >
          <div class="font-medium text-lg">Masuk</div>
        </nuxt-link>
        <nuxt-link
          to="/register"
          class="
            bg-white
            rounded-lg
            px-4
            py-1
            hover:bg-blue-200
            hover:text-white
            text-blue-500
            ml-4
            md:flex hidden
          "
        >
          <div class="font-medium text-lg">Daftar</div>
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>