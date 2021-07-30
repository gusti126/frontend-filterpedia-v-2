<template>
  <div>
    <div>{{ produk.data.data.product_name }}</div>
    <div>
      <img :src="produk.data.data.imageurl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {
    console.log('hello')
    console.log(this.produk)
  },

  async asyncData({ $axios, params }) {
    let produk = await $axios.get('/products/' + params.slug)
    console.log(produk)
    return { produk }
  },
}
</script>
