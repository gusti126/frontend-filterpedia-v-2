<template>
  <div>
    <nav-mobile />
    <div
      class="
        bg-gradient-to-r
        from-blue-500
        px-2
        py-2
        to-purple-700
        rounded-br-full
        flex
      "
    >
      <div>
        <img
          src="~/assets/profile.jpg"
          class="
            rounded-full
            border-2 border-white
            w-16
            h-16
            object-cover
            mx-auto
          "
          alt=""
        />
      </div>
      <div class="ml-4 my-auto">
        <div class="font-semibold text-white text-lg">Lisa Blackpink</div>
        <div class="text-gray-200">Tangerang</div>
      </div>
    </div>

    <div class="px-2 pt-3">
      <div class="bg-white shadow border p-2 rounded-lg">
        <div class="font-medium">Daftar transaksi</div>
        <div class="flex mt-6 justify-around ">
          <div class="text-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-blue-700 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span
              class="
                absolute
                left-12
                top-0
                rounded-full
                bg-green-600
                px-1
                text-white text-md
                leading-tight
                text-center
              "
              >{{ keranjang.length }}
            </span>
            <nuxt-link class="text-sm" to="/dashboard/pesanan"
              >Menunggu pembayaran</nuxt-link
            >
          </div>

          <div class="text-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-blue-700 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
              <path
                d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
              />
            </svg>
            <span
              class="
                absolute
                left-5
                top-0
                rounded-full
                bg-green-600
                px-1
                text-white text-md
                leading-tight
                text-center
              "
              >{{ keranjang.length }}
            </span>
            <nuxt-link class="text-sm" to="chekoutsuccess"
              >Sedang dikirim</nuxt-link
            >
          </div>
          <div class="text-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-blue-700 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <span
              class="
                absolute
                left-5
                top-0
                rounded-full
                bg-green-600
                px-1
                text-white text-md
                leading-tight
                text-center
              "
              >20
            </span>
            <nuxt-link class="text-sm " to="chekoutsuccess"
              >Transaksi berhasil</nuxt-link
            >
          </div>
        </div>
      </div>
      <nuxt-link to="/dashboard/profile">
        <div class="mt-4 flex font-semibold text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-3"
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
          <div class="my-auto">Edit Profile</div>
        </div>
      </nuxt-link>

      <nuxt-link to="riwayat-pembelian">
        <div class="mt-6 flex font-semibold text-gray-500 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <div class="my-auto">Riwayat Pembelian</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/dashboard/setting">
        <div class="mt-6 flex font-semibold text-gray-500 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div class="my-auto">Pengaturan</div>
        </div>
      </nuxt-link>
      <nuxt-link to="sign">
        <div class="mt-6 flex font-semibold text-gray-500 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <div class="my-auto">Logout</div>
        </div>
      </nuxt-link>
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