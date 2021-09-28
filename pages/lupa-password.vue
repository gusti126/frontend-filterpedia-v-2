<template>
  <div class="md:px-20 px-4 text-center">
    <div
      class="
        border
        p-4
        rounded
        my-8
        inline-block
        mx-auto
        text-left
        w-full
        md:w-auto
      "
    >
      <div class="mx-auto" v-if="!sendKodeEmail">
        <div class="font-semibold text-gray-800">
          Masukan email yang terdaftar
        </div>
        <div class="mt-4">
          <input
            type="text"
            class="
              focus:outline-none
              border border-gray-500
              rounded-full
              w-full
              px-2
            "
            @keyup.enter="sendKode"
            v-model="email"
          />
        </div>
        <div class="text-xs text-gray-500 mb-4">
          Kami akan mengirim kode otp ke email anda
        </div>
        <div
          class="
            rounded-full
            bg-ungusuez
            inline-block
            text-white
            px-4
            py-1
            text-sm
            cursor-pointer
          "
          @click="sendKode"
        >
          Kirim Kode
        </div>
      </div>

      <div class="mx-auto" v-if="sendKodeEmail">
        <div class="font-medium text-gray-800">Masukan Kode OTP</div>
        <div class="mt-1">
          <input
            type="number"
            class="
              focus:outline-none
              border border-gray-500
              rounded-full
              w-full
              px-2
              py-1
            "
            v-model="kode"
          />
        </div>
        <div class="text-xs text-gray-500 mb-4">
          Kami sudah mengirim kode otp ke email {{ email }}
          <span
            class="text-ungusuez font-medium cursor-pointer"
            @click="sendKode"
            >Kirim ulang otp</span
          >
        </div>

        <div class="font-medium text-gray-800">Password Baru</div>
        <div
          class="mt-1 mb-4 px-3 flex border border-gray-500 rounded-full py-1"
        >
          <input
            :type="showPassword ? 'text' : 'password'"
            class="focus:outline-none w-full mr-2 px-2"
            v-model="password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="showPassword"
            @click="hendleShowPassword"
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
            class="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="!showPassword"
            @click="hendleShowPassword"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>

        <div class="font-medium text-gray-800">Ulangi Password</div>
        <div class="mt-1 mb-4">
          <div class="px-3 flex border border-gray-500 rounded-full py-1">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="focus:outline-none w-full mr-2 px-2"
              v-model="password_confirmation"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="showPassword"
              @click="hendleShowPassword"
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
              class="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="!showPassword"
              @click="hendleShowPassword"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </div>
          <div class="text-red-500" v-if="password !== password_confirmation">
            Password tidak sama
          </div>
        </div>

        <div
          class="
            rounded-full
            bg-ungusuez
            inline-block
            text-white
            px-4
            py-1
            cursor-pointer
          "
          :class="
            password_confirmation !== password || kode < 3
              ? 'cursor-not-allowed '
              : ''
          "
          :disabled="password_confirmation !== password || kode < 3"
          @click="resetPassword"
        >
          Reset Password
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      kode: null,
      password: '',
      password_confirmation: '',
      //   bernilai true jika sudah pernah request send kode
      sendKodeEmail: false,

      showPassword: false,
    }
  },

  methods: {
    async sendKode() {
      if (this.email.length < 2) {
        this.$swal({
          text: 'masukan email terlebih dahulu',
        })
        this.sendKodeEmail = false
      } else {
        this.$store.commit('setLoading', true)
        let response = await this.$axios
          .post('/forget-password', {
            email: this.email,
          })
          .then((ress) => {
            console.log(ress)
            this.sendKodeEmail = true
            this.$swal({
              icon: 'success',
              text: 'berhasil kirim kode otp, silahkan cek email anda ',
              timer: 2100,
            })
          })
          .catch((err) => {
            this.$swal({
              icon: 'error',
              timer: 2100,
              text: 'Gagal, email Anda tidak terdaftar pada sistem kami. Silahkan lakukan pendaftaran akun baru',
            })
            this.$store.commit('setLoading', false)
          })
        this.$store.commit('setLoading', false)
      }
    },
    async resetPassword() {
      if (this.kode < 2) {
        this.$swal({
          text: 'masukan kode otp terlebih dahulu',
        })
      } else if (this.password !== this.password_confirmation) {
        this.$swal({
          text: 'password tidak sama ',
        })
      } else {
        this.$store.commit('setLoading', true)
        let response = await this.$axios
          .post('/reset-password', {
            token: this.kode,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          })
          .then((ress) => {
            this.$swal({
              icon: 'success',
              timer: 2100,
              text: 'Berhasil memperbarui password silahkan login dengan password ba',
            })
            this.$router.push({ path: '/login' })
            this.$store.commit('setLoading', false)
          })
          .catch((err) => {
            this.$swal({
              icon: 'error',
              title: 'kode otp salah',
              text: 'kode otp yang anda masukan salah silahkan cek email atau kirim kode otp baru',
            })
            this.$store.commit('setLoading', false)
          })
      }
    },
    hendleShowPassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
  },
}
</script>
