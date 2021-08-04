<template>
  <div class="bg-white w-full min-h-full p-6 rounded-xl">
    <div>
      <div class="font-semibold">Profile Perusahaan</div>
    </div>

    <div class="grid grid-cols-12 grid-flow-row gap-4 mt-6">
      <div class="col-span-12">
        <img
          :src="company.npwp_image"
          alt=""
          class="mx-auto rounded md:block hidden cursor-pointer w-40"
          @click="$refs.file.click()"
        />
      </div>
      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="nama">Nama Perusahaan</label>
        </div>
        <input
          type="text"
          id="nama"
          class="
            border border-gray-300
            rounded-2xl
            focus:outline-none
            px-4
            py-1
            w-full
            md:text-sm
            mt-1
            focus:border-blue-500 focus:text-blue-500
          "
          v-model="company.nama"
        />
      </div>

      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="npwp">Nomor NPWP</label>
        </div>
        <input
          type="number"
          id="npwp"
          class="
            border border-gray-300
            rounded-2xl
            focus:outline-none
            px-4
            py-1
            w-full
            md:text-sm
            mt-1
            focus:border-blue-500 focus:text-blue-500
          "
          v-model="company.npwp"
        />
      </div>

      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="alamat">Foto NPWP Perusahaan</label>
        </div>
        <img :src="company.npwp_image" alt="" class="md:hidden block" />
        <div>
          <input
            type="file"
            class="cursor-pointer mt-2 cu"
            ref="file"
            @change="onFileChange"
            accept="image/*"
          />
        </div>
      </div>

      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="Phone">Nomor telepon perusahaan</label>
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
            mt-1
            focus:border-blue-500 focus:text-blue-500
          "
          v-model="company.phone"
        />
      </div>

      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="alamat">Alamat Perusahaan</label>
        </div>
        <textarea
          id="alamat"
          class="
            border border-gray-300
            rounded-2xl
            focus:outline-none
            px-4
            py-1
            w-full
            md:text-sm
            mt-1
            focus:border-blue-500 focus:text-blue-500
          "
          v-model="company.alamat"
        ></textarea>
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
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
    return {
      title:
        'Profile Perusahaan ' +
        this.$store.state.auth.user.detail_perusahaan.nama_pt,
    }
  },
  middleware: 'auth',

  data() {
    return {
      company: {
        nama: this.$store.state.auth.user.detail_perusahaan.nama_pt,
        npwp: this.$store.state.auth.user.detail_perusahaan.npwp,
        npwp_image: this.$store.state.auth.user.detail_perusahaan.imageurl,
        alamat: this.$store.state.auth.user.detail_perusahaan.alamat_pt,
        phone: this.$store.state.auth.user.detail_perusahaan.telepon,
      },
      selectedFiles: undefined,
      updateImage: false,
    }
  },

  mounted() {
    if (this.company.phone) {
      console.log(this.company.phone)
    } else {
      console.log('else')
    }
  },

  methods: {
    async updateHendle() {
      let formData = new FormData()
      formData.append('nama_pt', this.company.nama)
      formData.append('alamat_pt', this.company.alamat)
      formData.append('telepon', this.company.phone)
      formData.append('npwp', this.company.npwp)
      if (this.updateImage) {
        formData.append('npwp_image', this.selectedFiles[0])
      }
      let response = await this.$axios
        .post('/profile-perusahaan', formData)
        .then((ress) => {
          console.log(ress)
        })
    },

    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.company.npwp_image = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
        this.updateImage = true
        console.log('ok')
        console.log(this.selectedFiles[0])
      }
    },
  },
}
</script>
