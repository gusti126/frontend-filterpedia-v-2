<template>
  <div>
    <navbar />
    <!-- banner header -->
    <div>
      <img src="~/assets/banner/header-banner.png" alt="" />
    </div>
    <!--end banner header -->
    <div class="md:px-10 px-2">
      <div class="text-2xl font-medium mt-4">Kategori</div>
      <kategori />

      <div class="mt-6">Product Populer</div>
      <div class="grid md:grid-cols-12 grid-cols-12 grid-flow-row gap-2 md:gap-4">
        <div class="col-span-3">
          <nuxt-link to="/productdetail">
            <card-produk nameImage="Rectangle 20-1.jpg" diskon="80000" price="70000" title="Gusti Maulana Rizkia" />
          </nuxt-link>
        </div>
        <div class="col-span-3">
          <nuxt-link to="/productdetail">
            <card-produk nameImage="Rectangle 20.jpg" diskon="80000" price="70000" title="Gusti Maulana Rizkia" />
          </nuxt-link>
        </div>
        <div class="col-span-3">
          <nuxt-link to="/productdetail">
            <card-produk nameImage="Rectangle 20-3.jpg" diskon="80000" price="70000" title="Gusti Maulana Rizkia" />
          </nuxt-link>
        </div>
        <div class="col-span-3">
          <nuxt-link to="/productdetail">
            <card-produk nameImage="Rectangle 20-2.jpg" diskon="80000" price="70000" title="Gusti Maulana Rizkia" />
          </nuxt-link>
        </div>
        <div class="col-span-3">
          <nuxt-link to="/productdetail">
            <card-produk nameImage="Rectangle 20-1.jpg" diskon="80000" price="70000" title="Gusti Maulana Rizkia" />
          </nuxt-link>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {}
</script>


CardProduk