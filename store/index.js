export const state = () => ({
  subtotal: 0,
  keranjang: [],
  produk: [],
  loading: false,
  sessionUrl: '',
})

export const mutations = {
  increment(state) {
    state.subtotal++
  },
  setProduk(state, data) {
    state.produk = data
  },
  setLoading(state, data) {
    state.loading = data
  },
  setKeranjang(state, data) {
    state.keranjang = data
  },
  setSubTotal(state, data) {
    state.subtotal = data
  },
  setSessionUrl(state, data) {
    state.sessionUrl = data
  },
}
