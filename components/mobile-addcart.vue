<template>
  <div class="fixed bottom-0 w-full md:hidden px-2 py-2">
    <div
      class="bg-blue-700 flex justify-center py-2 rounded-full shadow"
      @click="addCart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="my-auto h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <div class="text-white font-medium text-lg ml-4">Masukan Keranjang</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id_product: Number,
  },
  data() {
    return {}
  },
  methods: {
    async addCart() {
      if (!this.$auth.loggedIn) {
        this.$store.commit(
          'setSessionUrl',
          '/productDetail/' + this.$route.params.id
        )

        this.$router.push({ path: '/login' })
        return
      }
      this.$store.commit('setLoading', true)
      let addCart = await this.$axios
        .$post('add-to-cart', {
          user_id: this.$store.state.auth.user.id,
          product_id: this.id_product,
          qty: 1,
        })
        .then((ress) => {
          this.$auth.fetchUser()
          // Use sweetalert2
          this.$swal({
            icon: 'success',
            showConfirmButton: false,
            text: 'Barang berhasil di masukan ke keranjang',
            footer: `<a href="/#/keranjang" class="bg-blue-600 px-4 py-2 rounded-full text-white flex">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                          </svg>
                      Lihat Keranjang</a>`,
          })
          this.$store.commit('setLoading', false)
        })
        .catch((err) => console.log(err))
    },
    addcart() {},
  },
}
</script>
