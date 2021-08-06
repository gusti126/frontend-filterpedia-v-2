<template>
  <modal name="modalProfile" :width="340" height="auto" :scrollable="true">
    <div class="p-2">
      <div>Konfirmasi mengirim foto bukti transfer</div>
      <div
        class="
          mt-2
          mb-2
          bg-ungusuez
          text-white
          inline-block
          rounded
          cursor-pointer
          px-3
          py-1
        "
        @click="$refs.file.click()"
      >
        Klik pilih Foto
      </div>
      <input
        type="file"
        class="cursor-pointer hidden"
        ref="file"
        @change="onFileChange"
        accept="image/*"
      />
      <div>
        <img
          src="~/assets/cara-pembayaran/tf-bca.jpg"
          alt=""
          v-if="!buktiBayar"
        />
        <img :src="imgUrl" alt="" v-if="buktiBayar" />
      </div>
      <div>
        <div
          class="
            py-1
            rounded
            bg-ungusuez
            text-center text-white
            cursor-pointer
            mt-4
          "
          @click="confirmPayment"
        >
          Kirim
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      buktiBayar: false,
      selectedFile: undefined,
      imgUrl: null,
    }
  },
  mounted() {},

  methods: {
    onFileChange(e) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0]
        this.imgUrl = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
        this.buktiBayar = true
        console.log('ok')
        console.log(this.selectedFiles[0])
      }
    },
    async confirmPayment() {
      let formData = new FormData()
      if (this.buktiBayar) {
        formData.append('transactions_id', this.$route.params.id)
        formData.append('deskripsi', 'MOhon Sekegara ini dari intel')
        formData.append('images', this.selectedFiles[0])
      }
      let response = await this.$axios
        .post('/confirm-payment', formData)
        .then((ress) => {
          console.log(ress)
          this.$modal.hideAll()
          console.log('suksess konformasi pembayaran')
          this.$modal.hide('modalProfile')
        })
    },
  },
}
</script>
