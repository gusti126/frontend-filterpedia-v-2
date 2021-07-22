<template>
  <div class="md:px-20 px-2 h-screen">
    <div
      class="
        grid grid-cols-12 grid-flow-row
        gap-4
        md:gap-10
        h-full
        py-10
        md:py-32
      "
    >
      <div class="lg:col-span-3 lg:col-start-3 lg:block hidden col-span-4">
        <img src="~assets/login-hero.png" alt="" class="my-auto" />
      </div>
      <div class="lg:col-span-4 lg:col-start-7 col-span-10 col-start-2">
        <div class="text-gray-700 text-xl md:text-3xl">
          Belanja kebutuhan Air, menjadi lebih mudah
        </div>
        <div class="mt-8">
          <label for="email" class="text-gray-600">Masukan Email</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email ..."
            v-model="login.email"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-500
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
        <div class="mt-4">
          <label for="email" class="text-gray-600">Password</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Masukan password ...."
            v-model="login.password"
            @keyup.enter="userLogin"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-500
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
        <div class="mt-4">
          <button
            class="
              block
              w-full
              text-white
              rounded-full
              hover:bg-purple-700
              bg-blue-700
              py-2
              text-center
            "
            :class="
              login.email.length < 1 || login.password.length < 1
                ? 'cursor-not-allowed opacity-50'
                : ''
            "
            :disabled="login.email.length < 1 || login.password.length < 1"
            @click="userLogin"
          >
            <span v-if="login.email.length < 1 || login.password.length < 1"
              >Disabled</span
            >
            <span v-else>Login</span>
          </button>
        </div>
        <div class="mt-4 mb-6">
          <nuxt-link
            to="/register"
            class="
              block
              w-full
              text-gray-700
              rounded-full
              hover:bg-purple-700 hover:text-white
              bg-gray-300
              py-2
              text-center
            "
            >Register</nuxt-link
          >
          <div class="text-center my-4">atau login dengan</div>
          <div class="flex justify-between">
            <nuxt-link to="" class="flex">
              <img src="~assets/icon/icons_google.svg" class="mr-2 w-8" />
              <div class="my-auto">Google</div>
            </nuxt-link>
            <nuxt-link to="" class="flex">
              <img src="~assets/icon/logos_facebook.svg" class="mr-2 w-8" />
              <div class="my-auto">Facebook</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  beforeMount() {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn == true) {
      this.$router.push({ path: '/' })
    }
  },
  beforeCreate() {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn == true) {
      this.$router.push({ path: '/' })
    }
  },
  mounted() {
    console.log(this.$auth.loggedIn)
    if (this.$auth.loggedIn == true) {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth
          .loginWith('local', { data: this.login })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log('error satu' + err.response.data.message)
            this.$swal({
              icon: 'error',
              title: 'Oops login gagal',
              text: err.response.data.message,
            })
          })
        this.$auth.setUser(response.data.data)
        console.log(response)
      } catch (err) {
        console.log('error di catch' + err)
        console.log(err)
      }
    },
  },
}
</script>
