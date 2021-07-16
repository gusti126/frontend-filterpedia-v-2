export const state = () => ({
  subtotal: 1,
  keranjang: [
    {
      id: 1,
      nama: 'Filter Air Satuan satu',
      image: 'Rectangle 20-2.jpg',
      harga: 20,
      diskon: 50,
      counter: 1,
      ischeked: false,
    },
    {
      id: 2,
      nama: 'Filter Air Satuan dua',
      image: 'Rectangle 20.jpg',
      harga: 10,
      diskon: 50,
      counter: 4,
      ischeked: false,
    },
    {
      id: 3,
      nama: 'Filter Air Satuan 3',
      image: 'Rectangle 20-3.jpg',
      harga: 60,
      diskon: 50,
      counter: 5,
      ischeked: false,
    },
    {
      id: 4,
      nama: 'Filter Air Satuan empat',
      image: 'Rectangle 20-1.jpg',
      harga: 30,
      diskon: 50,
      counter: 5,
      ischeked: false,
    },
  ],
  produk: [],
  loading: false,
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
}
