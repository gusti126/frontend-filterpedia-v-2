<template>
  <footer
    class="
      bg-gradient-to-l
      from-blue-700
      to-blue-400
      w-full
      px-10
      py-4
      mt-8
      text-white
    "
  >
    <div class="md:flex justify-between hidden">
      <div>
        <div>
          <img
            :src="require(`~/assets/footer/${nameImage}`)"
            alt=""
            class="mx-auto w-28 h-28"
          />
        </div>
        <div class="flex mt-3">
          <div class="mr-4">
            <img src="~/assets/icon/akar-icons_youtube-fill.svg" alt="" />
          </div>
          <div class="mr-4">
            <img src="~/assets/icon/ant-design_instagram-filled.svg" alt="" />
          </div>
          <div class="mr-4">
            <img src="~/assets/icon/bi_facebook.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div class="text-2xl font-medium">Bantuan</div>
        <div class="text-lg">
          <nuxt-link to="/help">Cara Membeli Produk di Filterpedia</nuxt-link>
        </div>
        <div class="text-lg">
          <nuxt-link to="/help2">Cara Melakukan Pembayaran</nuxt-link>
        </div>
        <div class="text-lg">support@filterpedia.co.id</div>
      </div>
      <div>
        <div class="text-2xl font-medium">Kontak</div>
        <div class="text-lg">
          <nuxt-link to="/help">021122671892</nuxt-link>
        </div>
        <div class="text-lg">
          <nuxt-link to="/help2">0811211128191</nuxt-link>
        </div>
        <div class="text-lg">cs@filterpedia.co.id</div>
      </div>
      <div>
        <div class="text-2xl font-medium">Alamat</div>
        <div class="w-80">
          Kawasan Pergudangan, Jl. Arcadia, Jl. Daan Mogot Blok G18 No 1-3 Km,
          RT.005/RW.003, Batuceper, Kec. Batuceper, Kota Tangerang, Banten 15122
        </div>
        <div class="text-lg">Buka Jam 08.00 - 17.00 Wib</div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    nameImage: String,
  },
}
</script>