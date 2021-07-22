<template>
  <div class="pb-20 md:pb-0">
    <div class="bg-white shadow rounded p-2 md:p-0">
      <div></div>
      <div class="md:p-4 md:flex">
        <div class="my-auto">
          <img src="~assets/footer/Group 5.svg" alt="" class="md:w-48" />
        </div>
        <div class="md:ml-10 mt-2">
          <div class="text-lg text-blue-900 font-semibold">
            2 Pesanan sedang di proses
          </div>
          <div class="text-base text-gray-600 mt-2 md:mt-2 md:w-72">
            hubungi customer service kita jika kamu memiliki pertanyaan
          </div>
          <div>
            <div
              class="
                text-center
                bg-gradient-to-r
                from-blue-500
                rounded
                mt-2
                py-2
                to-purple-500
                text-white
                cursor-pointer
              "
              @click="hubungi"
            >
              Hubungi Cs
            </div>
          </div>
        </div>
      </div>
    </div>
    <card-pesanan
      class="mt-2"
      title="Filter air botolan"
      :hiddenCaraBayar="true"
      namaPengirim="Joni Ladusta"
      :dikirim="true"
      :harga="80000"
      :batalkan="false"
      :pembayaran="true"
      noPesanan="200212123121"
      nameImage="Rectangle 20-2.jpg"
    />
    <card-pesanan
      class="mt-2"
      title="Filter air botolan"
      :hiddenCaraBayar="true"
      namaPengirim="Joni Ladusta"
      :dikirim="true"
      :harga="80000"
      :batalkan="false"
      :pembayaran="true"
      noPesanan="200212123121"
      nameImage="Rectangle 20-3.jpg"
    />
  </div>
</template>

<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
import BannerHeader from '~/components/bannerHeader.vue'
export default {
  layout: 'dashboard',
  components: {
    slider,
    slideritem,
    BannerHeader,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    hubungi() {
      this.$swal({
        html: ` <div class="text-left">
                  <div class="text-gray-700 font-medium  text-lg mb-6">Hubungi Customer Service</div>
                  <a href="" class="bg-gradient-to-r from-blue-500 rounded-t py-2 px-6 text-white to-green-500 rounded">WhatsApp</a>
                  <a href="" class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-2 px-6 text-white rounded">Telepon</a>
                  <div class="">
                    
                  </div>
                </div>`,
        showConfirmButton: false,
      })
    },
  },
}
</script>
