<template>
  <div>
    <nav-mobile :isProfile="true" />
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
          :src="user.data.profile_photo_url"
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
        <div class="font-semibold text-white text-lg">
          {{ user.data.name }}
        </div>
        <div class="text-gray-200">
          <!-- {{ user.alamat }} -->
        </div>
      </div>
    </div>

    <div class="px-2 pt-5">
      <div class="bg-white shadow border p-4 rounded-lg">
        <div class="font-medium">Daftar transaksi</div>
        <div class="flex mt-6 justify-around">
          <div class="text-center relative">
            <nuxt-link class="text-sm" to="/dashboard/pesanan">
              <img
                src="~/assets/icon/003-timer.svg"
                alt=""
                class="h-12 mx-auto"
              />
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
              Menunggu pembayaran</nuxt-link
            >
          </div>

          <div class="text-center relative">
            <nuxt-link class="text-sm" to="/dashboard/pesanan">
              <img
                src="~/assets/icon/018-delivery truck 1 (1).svg"
                alt=""
                class="h-12 mx-auto"
              />
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
              Sedang dikirim</nuxt-link
            >
          </div>
          <div class="text-center relative">
            <nuxt-link class="text-sm" to="/dashboard/pesanan">
              <img
                src="~/assets/icon/043-window 1.svg"
                alt=""
                class="h-12 mx-auto"
              />
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
              Transaksi berhasil</nuxt-link
            >
          </div>
        </div>
      </div>
      <nuxt-link to="/dashboard/profile">
        <div class="mt-4 flex font-medium text-gray-500">
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

      <nuxt-link
        to="/dashboard/company"
        v-if="this.$store.state.auth.user.detail_perusahaan"
      >
        <div class="mt-6 flex font-medium text-gray-500 hover:text-blue-500">
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
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <div class="my-auto">Perusahaan</div>
        </div>
      </nuxt-link>

      <nuxt-link to="/dashboard/pesanan-proses">
        <div class="mt-6 flex font-medium text-gray-500 hover:text-blue-500">
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
          <div class="my-auto">Pesanan di Proses</div>
        </div>
      </nuxt-link>

      <nuxt-link to="/dashboard/setting">
        <div class="mt-6 flex font-medium text-gray-500 hover:text-blue-500">
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
      <div @click="userLogout">
        <div class="mt-6 flex font-medium text-gray-500 hover:text-blue-500">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const user = await $axios.$get('/profile')

    return { user }
  },
  data() {
    return {
      keranjang: this.$store.state.keranjang,
      // user: []
    }
  },
  mounted() {
    console.log(this.user)
    this.$nuxt.refresh()
  },
  methods: {
    async userLogout() {
      await this.$auth.logout()
    },
  },
}
</script>
