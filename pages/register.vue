<template>
  <div>
    <div class="grid col-span-4 md:grid-cols-12 grid-flow-row mt-10 px-4">
      <div class="col-span-4 md:col-span-8 md:col-start-3">
        <div class="text-gray-700 font-medium text-center text-xl md:text-3xl">
          Belanja kebutuhan Air, <br />
          menjadi lebih mudah
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-5 md:mt-8">
        <div>
          <label for="Nama">Nama Lengkap</label>
        </div>
        <div>
          <input
            type="text"
            id="Nama"
            v-model="register.name"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
          <div class="text-gray-500 text-sm" v-if="register.name.length < 1">
            nama harus di isi
          </div>
          <div
            class="text-red-500 text-sm"
            v-else-if="register.name.length < 5"
          >
            nama tidak boleh kurang dari lima karakter
          </div>
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Email">Email</label>
        </div>
        <div>
          <input
            type="text"
            id="Email"
            v-model="register.email"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
          <div class="text-sm text-gray-500" v-if="register.email.length < 1">
            email harus di isi
          </div>
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Password">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="Password"
            v-model="register.password"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Ulangi Password">Ulangi Password </label>
        </div>
        <div>
          <input
            type="password"
            id="Ulangi Password"
            v-model="passwordConfirm"
            @keyup.enter="userRegister"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500 focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
        <div class="text-sm text-green-700" v-if="passwordConfirm < 1"></div>
        <div
          class="text-sm text-red-600"
          v-else-if="register.password != passwordConfirm"
        >
          Password tidak sama
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div class="mt-4">
          <button
            class="
              block
              w-full
              text-white
              rounded-lg
              hover:bg-purple-700
              bg-blue-700
              py-2
              text-center
            "
            @click="userRegister"
            :disabled="!validasi"
          >
            Register
          </button>
        </div>
        <div class="mt-4 mb-20">
          <nuxt-link
            to="/register"
            class="
              block
              w-full
              text-white
              rounded-lg
              hover:bg-purple-700
              bg-gray-400
              py-2
              text-center
            "
            >Login</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        name: '',
        email: '',
        occupation: 'tesaja',
        password: '',
      },
      passwordConfirm: '',
      messageError: '',
    }
  },
  computed: {
    // untuk validasi form
    validasi() {
      if (this.register.password !== this.passwordConfirm) {
        this.messageError = 'password tidak sama'
        return false
      } else if (this.register.name.length < 1) {
        this.messageError = 'password tidak sama'
        return false
      } else if (this.password < 5) {
        this.messageError = 'password lima huruf atau angka'
        return false
      }
      // jika validasi benar maka true
      return true
    },
  },
  mounted() {
    console.log('Hello ' + this.passwordConfirm)
  },
  methods: {
    async userRegister() {
      if (this.register.password !== this.passwordConfirm) {
        this.$swal({
          position: 'center',
          icon: 'info',
          title: 'Password tidak sama ',
          timer: 2700,
        })
        return event.stopPropagation()
      }
      try {
        let response = await this.$axios.post('/api/v1/users', this.register)
        console.log(response.data.data.token)
        this.$auth.setUser(response.data.data)
        this.$router.push({ path: '/' })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
