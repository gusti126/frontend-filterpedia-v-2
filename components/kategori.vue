<template>
  <div>
    <div class="font-semibold text-base md:text-xl mt-4 text-gray-800">
      Kategori
    </div>
    <div class="hidden md:flex justify-between">
      <div v-for="kategori in produkKategori" :key="kategori.id">
        <div class="mx-auto">
          <img
            :src="kategori.imageurl"
            alt=""
            class="rounded-full h-20 w-20 mt-5 object-cover mx-auto"
          />
        </div>
        <div class="text-center mt-2">{{ kategori.category_name }}</div>
      </div>
    </div>
    <div class="md:hidden justify-between flex">
      <div v-for="kategoriM in produkKategori" :key="kategoriM.id">
        <div class="mt-2 mx-auto">
          <img
            :src="kategoriM.imageurl"
            alt=""
            class="rounded-full h-11 w-11 mt-5 object-cover mx-auto"
          />
        </div>
        <div class="text-center font-normal text-xs">
          {{ kategoriM.category_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produkKategori: [],
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      let kategoriProdukAPi = await this.$axios
        .$get('/product-category')
        .then((ress) => {
          this.produkKategori = ress.data
          console.log(this.produkKategori)
        })
    },
  },
}
</script>
