<template>
  <div class="bg-white px-4 rounded-xl py-4 sticky top-4">
    <!-- header sidebar -->
    <div class="">
      <img
        :src="this.$store.state.auth.user.profile_photo_url"
        alt="img-profile"
        class="rounded-full w-16 h-16 object-cover mx-auto"
      />
      <div class="font-semibold text-lg text-gray-800 mt-2 text-center">
        {{ this.$store.state.auth.user.name }}
      </div>
    </div>
    <!-- endheader sidebar -->
    <!-- menu sidebar -->
    <nuxt-link to="profile">
      <div
        class="mt-8 flex text-gray-500 hover:text-blue-500"
        :class="$route.path == '/dashboard/profile' ? 'text-blue-500' : ''"
      >
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
        <div class="my-auto">Profile</div>
      </div>
    </nuxt-link>
    <nuxt-link
      to="company"
      v-if="this.$store.state.auth.user.detail_perusahaan != null"
    >
      <div
        class="mt-8 flex text-gray-500 hover:text-blue-500"
        :class="$route.path == '/dashboard/company' ? 'text-blue-500' : ''"
      >
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
    <nuxt-link
      to="pesanan"
      class="text-gray-500 hover:text-blue-500"
      :class="$route.path == '/dashboard/pesanan' ? 'text-blue-500' : ''"
    >
      <div class="mt-6 flex mr-3">
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <div class="my-auto">Pesanan saya</div>
      </div>
    </nuxt-link>
    <nuxt-link to="/dashboard/pesanan-proses">
      <div
        class="mt-6 flex text-gray-500 hover:text-blue-500"
        :class="
          $route.path == '/dashboard/pesanan-proses' ? 'text-blue-500' : ''
        "
      >
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
        <div class="my-auto">Pesanan di proses</div>
      </div>
    </nuxt-link>
    <nuxt-link to="setting">
      <div
        class="mt-6 flex text-gray-500 hover:text-blue-500"
        :class="$route.path == '/dashboard/setting' ? 'text-blue-500' : ''"
      >
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
    <div>
      <div class="mt-6 flex text-gray-500 hover:text-blue-500">
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
        <div class="my-auto cursor-pointer" @click="userLogout">Logout</div>
      </div>
    </div>
    <!-- endmenu sidebar -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async userLogout() {
      await this.$auth.logout()
    },
  },
}
</script>
