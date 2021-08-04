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
        <div class="border-2 px-2 py-2 mt-3 rounded w-full bg-gray-100 flex">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="Password"
            v-model="register.password"
            class="focus:outline-none rounded-lg w-full bg-gray-100 px-2"
          />
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
      </div>

      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Ulangi Password">Ulangi Password </label>
        </div>
        <div class="border-2 px-2 py-2 mt-3 rounded w-full bg-gray-100 flex">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            id="Password_confirm"
            v-model="register.password_confirmation"
            class="focus:outline-none rounded-lg w-full bg-gray-100 px-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 my-auto ml-auto cursor-pointer"
            v-show="showConfirmPassword"
            @click="hendleShowConfirmPassword"
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
            v-show="!showConfirmPassword"
            @click="hendleShowConfirmPassword"
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
        <div
          class="text-sm text-green-700"
          v-if="register.password_confirmation < 1"
        ></div>
        <div
          class="text-sm text-red-600"
          v-else-if="register.password != register.password_confirmation"
        >
          Password tidak sama
        </div>
      </div>

      <div class="col-span-4 md:col-start-5 mt-8">
        <div class="text-gray-700 font-medium mb-2">
          Belanja untuk kebutuhan perusahaan ?
        </div>
        <div class="flex">
          <label class="inline-flex items-center mt-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-gray-600"
              v-model="isPerusahaan"
              :value="true"
            /><span class="text-gray-700 mx-2">Untuk Perusahaan</span>
          </label>

          <label class="inline-flex items-center mt-3">
            <input
              type="radio"
              name="isCompany"
              class="form-radio h-5 w-5 text-red-600"
              v-model="isPerusahaan"
              :value="false"
            /><span class="mx-2 text-gray-700">Untuk Perorang</span>
          </label>
        </div>
      </div>

      <div class="col-span-4 md:col-start-5 mt-5 md:mt-8" v-if="isPerusahaan">
        <div>
          <label for="Nama_pt">Nama Perusahaan</label>
        </div>
        <div>
          <input
            type="text"
            id="Nama_pt"
            v-model="register.nama_pt"
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
        <div class="text-gray-500 text-sm" v-if="register.nama_pt.length == 0">
          nama perusahaan harus di isi
        </div>
        <div class="text-gray-500 text-sm" v-else>
          <span v-if="register.nama_pt.length < 5"
            >nama perusahaan harus lebih dari 5 karakter</span
          >
        </div>
      </div>

      <div class="col-span-4 md:col-start-5 mt-5 md:mt-8" v-if="isPerusahaan">
        <div>
          <label for="nomor_npwp">Nomor NPWP Perusahaan</label>
        </div>
        <div>
          <input
            type="number"
            id="nomor_npwp"
            v-model="register.npwp"
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
        <div class="text-gray-500 text-sm" v-if="register.npwp.length == 0">
          nomor npwp harus di isi
        </div>
        <div class="text-gray-500 text-sm" v-else>
          <span v-if="register.nama_pt.length < 5"
            >nomor npwp harus lebih dari 8</span
          >
        </div>
      </div>

      <div class="col-span-4 md:col-start-5 mt-5 md:mt-8" v-if="isPerusahaan">
        <div>
          <label>Foto NPWP Perusahaan</label>
        </div>
        <div>
          <img
            src="~/assets/npwp.svg"
            alt=""
            class="mx-auto rounded my-2 cursor-pointer"
            v-if="!updateImage"
            @click="$refs.file.click()"
          />
          <img
            :src="npwpImgUrl"
            alt=""
            class="mx-auto rounded my-2 cursor-pointer"
            @click="$refs.file.click()"
          />
        </div>
        <div>
          <input
            type="file"
            class="cursor-pointer"
            ref="file"
            @change="onFileChange"
            accept="image/*"
          />
        </div>
      </div>

      <div class="col-span-4 md:col-start-5 mt-8">
        <!-- jika memilih perusahaan -->
        <div v-if="isPerusahaan">
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
                cursor-not-allowed
              "
              disabled
              v-if="register.nama_pt.length < 5 || register.npwp.length < 5"
            >
              Data tidak komplet
            </button>
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
              v-else
              @click="userRegister"
            >
              Register
            </button>
          </div>
        </div>
        <!-- else jika memilih perorang -->
        <div v-if="!isPerusahaan">
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
                cursor-not-allowed
              "
              v-if="
                register.name.length < 5 ||
                register.email.length < 5 ||
                register.password.length < 5 ||
                register.password_confirmation.length < 5
              "
            >
              Data tidak komplet
            </button>
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
              v-else
              @click="userRegister"
            >
              Register
            </button>
          </div>
        </div>
        <div class="mt-4 mb-20">
          <nuxt-link
            to="/login"
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
      showPassword: false,
      showConfirmPassword: false,
      register: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        nama_pt: '',
        npwp: '',
        npwp_image: undefined,
      },
      isPerusahaan: true,
      npwpImgUrl: null,
      selectedFiles: undefined,
      updateImage: false,
      validasi_err: true,

      messageError: '',
    }
  },
  computed: {
    // untuk validasi form
    validasi() {
      if (this.register.password !== this.register.password_confirmation) {
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
    console.log('Hello ' + this.register.password_confirmation)
    // console.log(this.register.nama_pt.length)
  },
  methods: {
    async userLogin() {
      try {
        // this.$auth.setUser(response.data.data)
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.register.email,
              password: this.register.password,
            },
          })

          .then((res) => {
            this.$auth.fetchUser()
            console.log('udah lewti fetch user ya ')
          })
          .catch((err) => {
            console.log('error satu' + err.response.data.message)
            this.$swal({
              icon: 'error',
              title: 'Oops login gagal',
              text: err.response.data.message,
            })
          })

        console.log(response)
      } catch (err) {
        console.log('error di catch' + err)
        console.log(err)
      }
    },

    async userRegister() {
      if (this.register.password !== this.register.password_confirmation) {
        this.$swal({
          position: 'center',
          icon: 'info',
          title: 'Password tidak sama ',
          timer: 2700,
        })
        return event.stopPropagation()
      }
      try {
        this.$store.commit('setLoading', true)
        let formData = new FormData()
        // jika daftar untuk company
        if (this.isPerusahaan) {
          formData.append('nama_pt', this.register.nama_pt)
          if (this.updateImage) {
            formData.append('npwp_image', this.selectedFiles.item(0))
          }
          formData.append('npwp', this.register.npwp)
        }

        formData.append('name', this.register.name)
        formData.append('email', this.register.email)
        formData.append('password', this.register.password)
        formData.append(
          'password_confirmation',
          this.register.password_confirmation
        )

        let response = await this.$axios
          .post('/register', formData)
          .then((ress) => {
            this.userLogin()
            this.$store.commit('setLoading', false)
          })
          .catch((err) => {
            console.log(err.response.data.message.email)
            this.$store.commit('setLoading', false)
            this.$swal({
              icon: 'error',
              title: 'Gagal Register',
              text: err.response.data.message.email,
            })
          })
        // login
        console.log(response.data.token)
        this.$auth.setUser(response.data.data)

        // this.$router.push({ path: '/' })
      } catch (error) {
        console.log(error)
      }
    },

    hendleShowPassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
    hendleShowConfirmPassword() {
      if (this.showConfirmPassword) {
        this.showConfirmPassword = false
      } else {
        this.showConfirmPassword = true
      }
    },

    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.npwpImgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
        this.updateImage = true
        console.log('ok')
        console.log(this.selectedFiles[0])
      }
    },
  },
}
</script>
