<template>
  <modal name="modalProfile">
    <div class="p-6">
      <div class="flex justify-around">
        <div>
          <div>Nama Penerima</div>
          <div>
            <input
              type="text"
              v-model="user.nama"
              class="
                focus:outline-none
                border
                rounded
                px-2
                mt-2
                border-gray-400
              "
            />
          </div>
        </div>
        <div>
          <div>Nomor Telepon Penerima</div>
          <div>
            <input
              type="text"
              v-model="user.phone"
              class="
                focus:outline-none
                border
                rounded
                px-2
                mt-2
                border-gray-400
              "
            />
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      user: {
        nama: this.$store.state.auth.user.name,
        phone: this.$store.state.auth.user.user_detail.handphone,
      },
      pengiriman: {
        alamat: this.$store.state.auth.user.user_detail.alamat,
      },
    }
  },
  mounted() {},

  methods: {},
}
</script>
