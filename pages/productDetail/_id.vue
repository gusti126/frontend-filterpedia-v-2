<template>
  <div class="md:mb-0 mb-20">
    <navbar :navScroll="100" />
    <mobile-addcart class="z-10" />
    <!-- skeleton loading -->
    <div class="md:px-20 px-4 mt-6" v-show="load">
      <div class="animate-pulse mb-4 border">
        <div class="bg-blue-400 h-8 rounded"></div>
      </div>
      <div class="grid grid-cols-12 grid-flow-row gap-4 md:gap-4">
        <div
          class="
            col-span-12
            md:col-span-7
            animate-pulse
            border
            rounded
            border-blue-500
            p-4
          "
        >
          <div class="w-full mx-auto">
            <div class="">
              <div
                class="
                  rounded
                  bg-blue-400
                  h-56
                  align-text-bottom
                  flex flex-wrap
                  content-center
                "
              >
                <div
                  class="font-bold text-center mx-auto text-blue-600 text-xl"
                >
                  Sedang Loading Sebentar
                </div>
              </div>
            </div>
          </div>
          <!-- skelton colom image -->
          <div
            class="
              grid grid-cols-5 grid-flow-row
              gap-2
              md:gap-4
              mt-4
              animate-pulse
            "
          >
            <div class="bg-blue-400 h-16 rounded"></div>
            <div class="bg-blue-400 h-16 rounded"></div>
            <div class="bg-blue-400 h-16 rounded"></div>
            <div class="bg-blue-400 h-16 rounded"></div>
            <div class="bg-blue-400 h-16 rounded"></div>
          </div>
          <!-- skelton button info produk -->
          <div
            class="
              grid grid-cols-2 grid-flow-row
              gap-2
              md:gap-4
              mt-4
              animate-pulse
            "
          >
            <div class="bg-blue-400 rounded h-4 md:h-8"></div>
            <div class="bg-blue-400 rounded h-4 md:h-8"></div>
          </div>
          <!-- skleton deskripsi -->
          <div class="md:col-span-5 mt-4">
            <div class="animate-pulse">
              <div
                class="bg-blue-400 h-4 md:h-8 rounded"
                style="width: 30%"
              ></div>
              <div
                class="bg-blue-400 h-4 md:h-8 mt-2 rounded"
                style="width: 50%"
              ></div>
              <div
                class="bg-blue-400 h-4 md:h-8 mt-2 rounded"
                style="width: 70%"
              ></div>
              <div class="bg-blue-400 h-4 md:h-8 mt-2 rounded"></div>
            </div>
          </div>
        </div>
        <!-- skelton harga dan title produk -->
        <div class="md:col-span-5 hidden md:block h-full">
          <div class="animate-pulse rounded border p-4 border-blue-500">
            <div class="bg-blue-400 h-8 rounded"></div>
            <div class="bg-blue-400 h-8 mt-2 rounded" style="width: 50%"></div>
            <div class="bg-blue-400 h-8 mt-2 rounded" style="width: 70%"></div>
            <div class="bg-blue-400 h-8 mt-2 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- endskeleton loading -->
    <div class="md:px-20 px-4" v-show="!load">
      <div class="flex justify-start md:my-5 my-1">
        <div class="mr-3 md:text-base text-sm text-gray-500">Home</div>
        <div class="md:text-base text-sm text-gray-500 mr-3">></div>
        <div class="md:text-base text-sm text-gray-500 mr-3">Produk</div>
        <div class="md:text-base text-sm text-gray-500 mr-3">></div>
        <div class="md:text-base text-sm text-blue-500 mr-3">
          <span class="md:hidden block">{{ nama.substring(0, 20) }}...</span>
          <span class="hidden md:block">{{ nama }} </span>
        </div>
      </div>

      <div class="grid grid-cols-12 grid-flow-row gap-4 md:gap-4">
        <div class="md:col-span-7 col-span-12">
          <div>
            <img
              :key="photos[activePhoto].id"
              :src="
                require(`~/assets/product/Rectangle ${photos[activePhoto].url}`)
              "
              class="rounded"
              alt=""
            />
          </div>
          <div class="grid grid-cols-5 grid-flow-row gap-2 md:gap-4 mt-4">
            <div
              class="col-span-1 hover:border"
              v-for="(photo, index) in photos"
              :key="index"
            >
              <div
                class="border-blue-700 cursor-pointer"
                :class="{ border: index == activePhoto }"
                @click="changeActive(index)"
              >
                <img
                  :src="require(`~/assets/product/Rectangle ${photo.url}`)"
                  class=""
                  alt=""
                />
              </div>
            </div>
            <div class="block md:hidden col-span-12 my-3">
              <div class="justify-between">
                <div class="text-gray-700 text-xl font-semibold">
                  {{ nama }}
                </div>
                <div class="text-base text-blue-600 font-semibold">
                  Rp.{{ 7000000 | currency }}
                </div>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 flex cursor-pointer md:mt-4">
              <div
                class="
                  md:text-xl
                  font-medium
                  text-gray-800
                  mr-16
                  hover:text-blue-400
                "
              >
                <div v-on:click="produk" class="">Info Produk</div>
                <div
                  class="rounded-full bg-gray-800 border md:h-1 mt-1"
                  v-show="isInfoProduk"
                ></div>
              </div>
              <div
                class="md:text-xl font-medium text-gray-800 hover:text-blue-400"
              >
                <div @click="ulasan">Ulasan</div>
                <div
                  class="rounded-full bg-gray-800 border md:h-1 mt-1"
                  v-show="!isInfoProduk"
                ></div>
              </div>
            </div>

            <div class="md:col-span-5 col-span-12">
              <!-- ulasan -->
              <div v-show="!isInfoProduk">
                <div class="flex">
                  <div class="w-32">
                    <img
                      src="~assets/profile.jpg"
                      alt=""
                      class="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div class="ml-2 md:ml-6">
                    <div class="font-semibold text-gray-700">
                      Lisa Blackpink
                    </div>
                    <div class="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>
                    <div class="mt-2 font-light text-sm">
                      Pelayanan yang baik dan produk juga bagus, pengirimannya
                      juga cepat
                    </div>
                  </div>
                </div>
              </div>
              <!-- endulasan -->
              <div
                class="
                  md:text-gray-700
                  text-gray-600 text-sm
                  md:text-base
                  leading-6
                "
                v-if="isInfoProduk"
              >
                <div v-html="subdeks"></div>
                <span
                  class="text-blue-800 font-medium cursor-pointer"
                  v-if="readmore"
                  @click="readMore"
                  >... Lihat Selengkapnya</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-5 hidden md:block">
          <div class="border p-4 rounded-lg sticky top-16">
            <div class="text-xl text-gray-700 font-medium">
              {{ nama }}
            </div>
            <div class="my-3 text-gray-500">Terjual 700 | 680 Ulasan</div>
            <div class="my-3 text-blue-600 font-medium text-2xl">
              Rp.{{ price | currency }}
            </div>
            <div class="flex my-4">
              <div
                class="
                  mr-3
                  bg-blue-200
                  text-blue-500 text-xs
                  md:text-sm
                  rounded-md
                  my-auto
                  py-1
                  px-2
                  font-bold
                "
              >
                Diskon 70%
              </div>
              <div class="">Rp.800.000</div>
            </div>
            <div class="my-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="my-auto mr-2 text-blue-700 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="text-gray-600">Original Produk</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="my-auto mx-2 text-blue-700 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="text-gray-600">Garansi Resmi Satu Tahun</div>
            </div>
            <div class="my-7 flex justify-between">
              <nuxt-link
                :to="'/beli-langsung/' + this.$route.params.id"
                class="
                  bg-blue-700
                  text-white
                  px-9
                  py-2
                  rounded-lg
                  border-2 border-blue-700
                "
              >
                Beli Langsung
              </nuxt-link>
              <div
                class="
                  border-2 border-blue-700
                  text-blue-700
                  px-9
                  py-2
                  rounded-lg
                  hover:border-0 hover:bg-blue-600 hover:text-white
                  cursor-pointer
                "
                @click="showAlert"
              >
                +Keranjang
              </div>
            </div>
            <div class="flex justify-between">
              <nuxt-link to="/chat" class="text-gray-400 hover:text-blue-500">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                    />
                    <path
                      d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                    />
                  </svg>
                  <div class="text-lg font-bold ml-3 my-auto">Chat</div>
                </div>
              </nuxt-link>
              <div class="text-gray-400 hover:text-blue-500">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="text-lg font-bold ml-3 my-auto">Like</div>
                </div>
              </div>
              <div class="text-gray-400 hover:text-blue-500">
                <ShareNetwork
                  network="whatsApp"
                  url="https://filterpedia-v01.netlify.app/"
                  title="Cipta Aneka Air"
                  description="mudah mencari peralatan kebutuhan air dengan kualitas terbaik"
                  quote="ada dengan berbagai cara"
                  hashtags="lihat di filterpedia-v01.netlify.app"
                >
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                      />
                    </svg>
                    <div class="text-lg font-bold ml-3 my-auto">Share</div>
                  </div>
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product serupa -->
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
        Product Serupa
      </div>
      <div
        class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-2 md:gap-4"
      >
        <div
          class="md:col-span-3 col-span-1"
          v-for="p in produkSerupa"
          :key="p.id"
        >
          <nuxt-link to="/productdetail">
            <card-produk
              :load="load"
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              :title="
                p.nama.length > 23 ? p.nama.substring(0, 23) + ' ...' : p.nama
              "
            />
          </nuxt-link>
        </div>
      </div>
      <!-- endProduct serupa -->
    </div>
    <div>
      <botfooter nameImage="logo.png" />
    </div>
  </div>
</template>
<script>
import botfooter from '~/components/botfooter.vue'
// dependency ckeditor
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: { botfooter, ClassicEditor },

  data() {
    return {
      components: {},
      load: true,
      isInfoProduk: true,
      activePhoto: 0,
      photos: [
        {
          id: 1,
          url: '20-2.jpg',
        },
        {
          id: 2,
          url: '20-1.jpg',
        },
        {
          id: 3,
          url: '20-2.jpg',
        },
        {
          id: 4,
          url: '20-3.jpg',
        },
        {
          id: 6,
          url: '20-1.jpg',
        },
      ],
      nama: '',
      item: '',
      price: '',
      deskripsi: '',
      subdeks: '',
      readmore: true,
      // produk serupa
      produkSerupa: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ulasan: function () {
      this.isInfoProduk = false
      console.log(this.deskripsi.length)
    },
    async getData() {
      let produkSerupa = await this.$axios.$get('/course').then((ress) => {
        this.produkSerupa = ress.data
        console.log(this.produkSerupa)
      })
      const item = await this.$axios
        .$get('/course/' + this.$route.params.id)
        .then((ress) => {
          this.deskripsi = ress.data.deskripsi
          this.nama = ress.data.nama
          this.price = ress.data.harga
          // berhentikan preload
          this.load = false

          console.log(this.deskripsi.length)
          this.subdeks = this.deskripsi.substring(0, 290)
          console.log(this.subdeks)
          console.log(this.deskripsi)
          console.log('bawah consol subdesk')
        })
    },

    produk: function () {
      this.isInfoProduk = true
      console.log(this.subdeks)
    },
    changeActive: function (id) {
      this.activePhoto = id
    },
    showAlert() {
      // Use sweetalert2
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Berhasil masukan Keranjang',
        showConfirmButton: false,
        timer: 1700,
      })
    },
    readMore: function () {
      this.readmore = false
      this.subdeks = this.deskripsi
      console.log(this.readmore)
    },
  },
}
</script>
