<template>
  <div>
    <!-- content -->
    <div class="bg-white w-full min-h-full p-6 rounded-xl">
      <div class="relative">
        <img
          src="~/assets/profile.jpg"
          alt=""
          class="
            rounded-full
            h-36
            w-36
            object-cover
            mx-auto
            border-2 border-blue-500
            p-2
          "
          @click="$refs.file.click()"
          v-if="!imgUrl"
        />
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
            cursor-pointer
          "
          v-if="imgUrl"
          @click="$refs.file.click()"
        />
        <div class="text-gray-400 text-center text-sm mt-2">
          ubah foto profile
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            cursor-pointer
            h-10
            w-10
            block
            absolute
            bottom-8
            right-20
            md:right-80
            border
            bg-white
            rounded-full
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
        <input
          type="file"
          class="
            absolute
            opacity-0
            bg-gray-700
            rounded-full
            md:left-80
            cursor-pointer
          "
          ref="file"
          @change="onFileChange"
          accept="image/*"
        />
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
            :value="this.$store.state.auth.user.phone"
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
            :value="this.$store.state.auth.user.profile.alamat"
          />
        </div>
        <div class="col-span-6 md:col-span-4">
          <div>
            <label for="Provinsi">Provinsi</label>
          </div>
          <select
            name=""
            id="Provinsi"
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
          >
            <option value="banten">Banten</option>
            <option value="Bogor">Bogor</option>
            <option value="Jakarta">Jakarta</option>
          </select>
        </div>
        <div class="col-span-6 md:col-span-4">
          <div>
            <label for="Kota">Kota</label>
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
            <option value="banten">Tangerang</option>
            <option value="Bogor">Jakarta</option>
            <option value="Jakarta">Bandung</option>
          </select>
        </div>
        <div class="col-span-12 md:col-span-4 text-center">
          <button
            class="
              bg-blue-600
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
      imgUrl: this.$store.state.auth.user.profile.image,
      updateImage: false,
      selectedFiles: undefined,
      name: this.$store.state.auth.user.name,
      email: this.$store.state.auth.user.email,
      phone: this.$store.state.auth.user.phone,
      alamat: this.$store.state.auth.user.profile.alamat,
      tanggal_lahir: this.$store.state.auth.user.profile.tanggal_lahir,
    }
  },
  mounted() {
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push({ path: '/login' })
    }
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

    async updateHendle(file) {
      let formData = new FormData()
      if (this.updateImage) {
        formData.append('image', this.selectedFiles.item(0))
      }
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('phone', this.phone)
      formData.append('alamat', this.alamat)
      formData.append('tanggal_lahir', this.tanggal_lahir)
      try {
        let response = await this.$axios
          .post(
            '/profile/update',
            formData,

            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          .then(function (response) {
            console.log(response.data)
          })
        let profile = await this.$axios.get('/profile').then((res) => {
          this.$auth.fetchUser()
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
}
</script>
