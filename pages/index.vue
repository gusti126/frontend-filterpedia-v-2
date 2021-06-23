<template>
  <div>
    <nav-mobile />
    <navbar />
    <!-- banner header -->
    <div class="md:block hidden">
      <img src="~/assets/banner/header-banner.png" alt="" />
    </div>
    <!--end banner header -->
    <div class="md:px-10 px-2">
      <div class="font-semibold text-base md:text-2xl mt-4 text-gray-800">
        Kategori
      </div>
      <kategori />

      <div
        class="
          mt-10
          font-semibold
          text-base
          md:text-2xl
          text-gray-800
          mb-4
          md:mb-5
        "
      >
        Product Populer
      </div>
      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-2 md:gap-4"
      >
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-1.jpg"
              diskon="80000"
              price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20.jpg"
              diskon="80000"
              price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-3.jpg"
              diskon="80000"
              price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-2.jpg"
              diskon="80000"
              price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- banner info -->
    <div class="md:px-10 px-2 my-5">
      <img
        src="~/assets/banner/bannerinfo.png"
        alt=""
        class="rounded md:rounded-xl"
      />
    </div>
    <!-- endbanner info -->
    <!-- produk spesial diskon -->
    <div class="md:px-10 px-2">
      <div
      class="
        font-semibold
        text-base
        md:text-2xl
        text-gray-800
        mb-4
        md:mb-5
      "
    >
      Spesial Diskon 
    </div>
    <div class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-2 md:gap-4">
      <div class="md:col-span-3 col-span-1">
        <nuxt-link to="/productdetail">
          <card-produk
            nameImage="Rectangle 20-1.jpg"
            diskon="80000"
            price="70000"
            title="Nama Produk"
          />
        </nuxt-link>
      </div>
      <div class="md:col-span-3 col-span-1">
        <nuxt-link to="/productdetail">
          <card-produk
            nameImage="Rectangle 20.jpg"
            diskon="80000"
            price="70000"
            title="Nama Produk"
          />
        </nuxt-link>
      </div>
      <div class="md:col-span-3 col-span-1">
        <nuxt-link to="/productdetail">
          <card-produk
            nameImage="Rectangle 20-3.jpg"
            diskon="80000"
            price="70000"
            title="Nama Produk"
          />
        </nuxt-link>
      </div>
      <div class="md:col-span-3 col-span-1">
        <nuxt-link to="/productdetail">
          <card-produk
            nameImage="Rectangle 20-2.jpg"
            diskon="80000"
            price="70000"
            title="Nama Produk"
          />
        </nuxt-link>
      </div>
    </div>
    </div>
    <!-- endproduk spesial diskon -->
  </div>
</template>

<script>
export default {}
</script>

