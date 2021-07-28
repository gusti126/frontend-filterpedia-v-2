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
            class="focus:outline-none rounded-lg py-2 mt-3 border-2 px-2 w-full"
          />
        </div>
        <div class="mt-4">
          <label for="email" class="text-gray-600">Password</label>
        </div>
        <div
          class="
            flex
            mt-3
            border-2
            focus:border-blue-500 focus:text-blue-500
            px-2
            w-full
            rounded-lg
          "
        >
          <div class="w-full">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Masukan password ...."
              v-model="login.password"
              @keyup.enter="userLogin"
              class="focus:outline-none py-2 w-full"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 my-auto ml-auto cursor-pointer"
            v-show="showPassword"
            @click="hendleShowPassword"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 my-auto ml-auto cursor-pointer"
            v-show="!showPassword"
            @click="hendleShowPassword"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
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
      showPassword: false,
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
            if (this.$store.state.sessionUrl.length > 1) {
              this.$router.push({ path: '/productDetail/produk-tester-11' })
              this.$store.commit('setSessionUrl', '')
              console.log(this.$store.state.sessionUrl)
              return
            }
          })
          .catch((err) => {
            console.log('error satu' + err.response.data.message)
            this.$swal({
              icon: 'error',
              title: 'Oops login gagal',
              text: err.response.data.message,
            })
          })
        let keranjang = await this.$axios.$get('/cart').then((ress) => {
          console.log(ress)
        })
        // this.$auth.setUser(response.data.data)
        console.log(response)
      } catch (err) {
        console.log('error di catch' + err)
        console.log(err)
      }
    },

    hendleShowPassword() {
      if (this.showPassword === true) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
  },
}
</script>
