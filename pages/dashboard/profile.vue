<template>
  <div>
    <!-- content -->
    <div class="bg-white w-full min-h-full p-6 rounded-xl">
      <input
        type="file"
        class="bg-gray-700 cursor-pointer hidden"
        ref="file"
        @change="onFileChange"
        accept="image/*"
      />
      <div class="mx-auto">
        <img
          :src="imgUrl"
          alt=""
          class="
            rounded-full
            h-36
            w-36
            object-cover
            mx-auto
            border-2 border-blue-500
            p-2
            z-0
            cursor-pointer
          "
          v-if="imgUrl"
          @click="$refs.file.click()"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            cursor-pointer
            h-10
            w-10
            mx-auto
            text-gray-700
            relative
            -mt-6
            border
            rounded-full
            bg-white
            p-2
          "
          @click="$refs.file.click()"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div
          class="text-gray-400 text-center text-sm mt-2"
          @click="$refs.file.click()"
        >
          klik ubah foto profile
        </div>
      </div>

      <div class="grid grid-cols-12 grid-flow-row gap-4 mt-6">
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Nama">Nama</label>
          </div>
          <input
            type="text"
            id="Nama"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="name"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Email">Email</label>
          </div>
          <input
            type="text"
            id="Email"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            :value="this.$store.state.auth.user.email"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Phone">Phone</label>
          </div>
          <input
            type="number"
            id="Phone"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="phone"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Alamat">Alamat</label>
          </div>
          <input
            type="text"
            id="Alamat"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="alamat_user"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Provinsi">Provinsi id : </label>
          </div>
          <select
            name="provinsi"
            id="Provinsi"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              bg-white
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="provinsiId_user"
          >
            <option
              class="text-gray-500"
              v-for="a in provinsi"
              :key="a.id"
              :value="a.id"
              :selected="provinsiId_user === a.id"
            >
              {{ a.provinsi_name }}
            </option>
          </select>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Kota">Kota </label>
          </div>
          <select
            name=""
            id="Kota"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              w-full
              bg-white
              px-4
              py-1
              md:w-full
              text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="kotaId_user"
          >
            <option
              v-for="(city, index) in alamat.kota"
              :key="index"
              :value="city.id"
              :selected="kotaId_user === city.id"
            >
              {{ city.nama_kota }}
            </option>
          </select>
        </div>
        <div class="col-span-6 md:col-span-4">
          <div>
            <label for="Kota">Kecamatan</label>
          </div>
          <select
            name=""
            id="Kota"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              md:w-full
              text-sm
              focus:border-blue-500 focus:text-blue-500
            "
          >
            <option value="">Kecamatan</option>
          </select>
        </div>
        <div class="col-span-6 md:col-span-4">
          <div>
            <label for="Kota">Kode pos</label>
          </div>
          <input
            type="number"
            id="Alamat"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            v-model="posCode"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 mt-4">
        <div class="col-span-12 md:col-span-4 text-center">
          <button
            class="
              bg-ungusuez
              hover:bg-indigo-700
              text-white text-sm
              px-5
              py-2
              w-full
              rounded-2xl
            "
            @click="updateHendle"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
    return {
      title: 'Profile ' + this.$store.state.auth.user.name,
    }
  },
  middleware: 'auth',
  data() {
    return {
      imgUrl: this.$store.state.auth.user.profile_photo_url,
      updateImage: false,
      selectedFiles: undefined,
      // data user
      name: this.$store.state.auth.user.name,
      email: this.$store.state.auth.user.email,
      phone: this.$store.state.auth.user.user_detail.handphone,
      tanggal_lahir: this.$store.state.auth.user.user_detail.tanggal_lahir,
      alamat_user: this.$store.state.auth.user.user_detail.alamat,
      provinsiId_user: this.$store.state.auth.user.user_detail.provinsi_id,
      provinsi: [],
      kotaId_user: this.$store.state.auth.user.user_detail.kota_id,
      posCode: this.$store.state.auth.user.user_detail.kode_pos,
      alamat: {
        provinsi: [],
        kota: [],
        kecamatan: [],
        kelurahan: [],
      },
    }
  },
  mounted() {
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push({ path: '/login' })
    }
    this.getAlamat()
  },

  methods: {
    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
        this.updateImage = true
      }
    },

    async getAlamat() {
      let provin = await this.$axios.get('/provinsi').then((ress) => {
        this.provinsi = ress.data.data
      })
      let kota = await this.$axios
        .get('/provinsi/' + this.provinsiId_user)
        .then((ress) => {
          this.alamat.kota = ress.data.data.kota
          console.log(this.alamat.kota)
          console.log('alamat in down')
          console.log(this.alamat)
        })
    },
    async getKota() {
      let items = await this.$axios
        .get('/provinsi/' + this.provinsiId_user)
        .then((ress) => {
          this.alamat.kota = ress.data.data.kota
          console.log(this.alamat.kota)
          console.log('alamat in down')
          // console.log(this.alamat)
        })
        .catch((ress) => console.log(ress))
    },

    async updateHendle(file) {
      this.$store.commit('setLoading', true)
      let formData = new FormData()
      if (this.updateImage) {
        formData.append('profile_photo', this.selectedFiles.item(0))
      }
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('phone', this.phone)
      formData.append('alamat', this.alamat_user)
      formData.append('tanggal_lahir', this.tanggal_lahir)
      formData.append('kota_id', this.kotaId_user)
      formData.append('kode_pos', this.posCode)
      formData.append('handphone', this.phone)
      formData.append('provinsi_id', this.provinsiId_user)
      try {
        let response = await this.$axios
          .post('/profile', formData)
          .then(function (response) {
            console.log(response.data)
          })
        let profile = await this.$axios.get('/profile').then((res) => {
          this.$auth.fetchUser()
          this.$store.commit('setLoading', false)
          // Use sweetalert2
          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Profile berhasil di update',
            showConfirmButton: false,
            timer: 1700,
          })
        })
      } catch (error) {}
    },
  },
  watch: {
    provinsiId_user: function (val) {
      console.log(val)
      this.getKota()
    },
    kotaId_user(val) {
      console.log(this.kotaId_user)
    },
  },
}
</script>
