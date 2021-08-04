<template>
  <div>
    <div class="grid grid-cols-12 grid-flow-row gap-4 mt-6">
      <div class="col-span-6 md:col-span-4">
        <div>
          <label for="Kota">Nama Perusahaan</label>
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
        npwp_image: this.$store.state.auth.user.detail_perusahaan.npwp_image,
        alamat: this.$store.state.auth.user.detail_perusahaan.npwp_image,
      },
    }
  },
}
</script>
