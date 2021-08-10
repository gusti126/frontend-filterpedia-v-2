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
        <input
          type="text"
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
        />
      </div>

      <div class="col-span-12 md:col-span-4">
        <div>
          <label for="Provinsi">Provinsi id </label>
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
          v-model="provinsi_id_company"
        >
          <option
            class="text-gray-500"
            v-for="a in provinsi"
            :key="a.id"
            :value="a.id"
            :selected="provinsi_id_company === a.id"
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
          v-model="kota_id_company"
        >
          <option
            v-for="(city, index) in kota"
            :key="index"
            :value="city.id"
            :selected="kota_id_company === city.id"
          >
            {{ city.nama_kota }}
          </option>
        </select>
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
      provinsi_id_company:
        this.$store.state.auth.user.detail_perusahaan.provinsi_id,
      kota_id_company: this.$store.state.auth.user.detail_perusahaan.kota_id,

      selectedFiles: undefined,
      updateImage: false,
      provinsi: [],
      kota: [],
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async updateHendle() {
      if (
        !this.provinsi_id_company ||
        !this.kota_id_company ||
        !this.company.nama ||
        !this.company.npwp ||
        !this.company.npwp_image ||
        !this.company.alamat ||
        !this.company.phone
      ) {
        this.$swal({
          icon: 'info',
          title: 'Masih ada yang belum di isi',
          text: 'isi semua kolom kosong terlebih dahulu sesuai dengan profile perusahaan anda',
        })
      } else {
        let formData = new FormData()
        formData.append('nama_pt', this.company.nama)
        formData.append('alamat_pt', this.company.alamat)
        formData.append('telepon', this.company.phone)
        formData.append('npwp', this.company.npwp)
        formData.append('provinsi_id', this.provinsi_id_company)
        formData.append('kota_id', this.kota_id_company)
        if (this.updateImage) {
          formData.append('npwp_image', this.selectedFiles[0])
        }
        let response = await this.$axios
          .post('/profile-perusahaan', formData)
          .then((ress) => {
            console.log(ress)
          })
      }
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

    async getData() {
      this.$store.commit('setLoading', true)

      let prov = await this.$axios.get('/provinsi').then((ress) => {
        this.provinsi = ress.data.data
        console.log(this.provinsi)
      })

      let kota = await this.$axios
        .get('/provinsi/' + this.provinsi_id_company)
        .then((ress) => {
          this.kota = ress.data.data.kota
        })

      this.$store.commit('setLoading', false)
    },

    async getKota() {
      let kota = await this.$axios
        .get('/provinsi/' + this.provinsi_id_company)
        .then((ress) => {
          this.kota = ress.data.data.kota
        })
    },
  },

  watch: {
    provinsi_id_company() {
      this.getKota()
    },
  },
}
</script>
