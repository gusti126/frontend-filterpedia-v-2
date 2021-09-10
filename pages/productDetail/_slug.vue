<template>
  <div class="md:mb-0 mb-20">
    <navbar :navScroll="100" />
    <mobile-addcart class="z-10" :id_product="this.product_id" />
    <!-- skeleton loading -->
    <div class="md:px-20 px-4 mt-8" v-show="load">
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
                  Sedang memuat data Sebentar
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
          <!-- skleton product_description -->
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

    <div class="md:px-20 px-4 mt-13 mb-3 md:mt-16" v-show="!load">
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
          <div v-if="photos.length">
            <img
              :key="photos[activePhoto].id"
              :src="photos[activePhoto].imageurl"
              class="rounded"
              alt=""
            />
          </div>
          <!-- else -->
          <div v-else></div>
          <div class="grid grid-cols-5 grid-flow-row gap-2 md:gap-4 mt-4">
            <div
              v-if="photos.length"
              class="col-span-1 hover:border"
              v-for="(photo, index) in photos"
              :key="index"
            >
              <div
                class="border-blue-700 cursor-pointer"
                :class="{ 'border-2 rounded': index == activePhoto }"
                @click="changeActive(index)"
              >
                <img :src="photo.imageurl" class="" alt="" />
              </div>
            </div>
            <div class="block md:hidden col-span-12 my-3">
              <div class="justify-between">
                <div class="text-gray-700 text-lg font-semibold">
                  {{ nama }}
                </div>
                <div class="text-base text-green-600 font-semibold mt-2">
                  Rp.{{ price | currency }}
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
              <!-- <div
                class="md:text-xl font-medium text-gray-800 hover:text-blue-400"
              >
                <div @click="ulasan">Ulasan</div>
                <div
                  class="rounded-full bg-gray-800 border md:h-1 mt-1"
                  v-show="!isInfoProduk"
                ></div>
              </div> -->
            </div>

            <!-- ulasan -->
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
            <div class="mt-3 text-green-600 font-medium text-2xl">
              Rp.{{ price | currency }}
            </div>
            <div class="text-gray-700 text-md">Harga sudah termasuk PPN</div>

            <!-- <div class="flex my-4">
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
            </div> -->

            <div class="my-7 flex justify-between">
              <nuxt-link
                :to="'/beli-langsung/' + this.$route.params.slug"
                class="
                  bg-ungusuez
                  text-white
                  px-9
                  py-2
                  rounded-lg
                  border-2 border-ungusuez
                "
              >
                Beli Langsung
              </nuxt-link>
              <div
                class="
                  border-2 border-ungusuez
                  text-ungusuez
                  px-9
                  py-2
                  rounded-lg
                  hover:border-0 hover:bg-ungusuez hover:text-white
                  cursor-pointer
                "
                @click="addCart"
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
                  :url="share.url"
                  :title="produkShare.data.product_name"
                  :description="share.url"
                  quote="ada dengan berbagai cara"
                  hashtags="Water Treatment Filter. Mudah dan aman"
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

      <!-- produk serupa -->
      <div class="md:px-20 px-2 mt-6 md:mt-10">
        <div
          class="font-semibold text-base md:text-xl text-gray-800 mb-4 md:mb-5"
        >
          Produk serupa
        </div>

        <div
          class="grid md:grid-cols-12 grid-cols-2 grid-flow-row gap-3 md:gap-6"
        >
          <div
            class="md:col-span-3 col-span-1"
            v-for="range in 4"
            v-show="load"
          >
            <div
              class="
                border border-blue-300
                shadow
                rounded-md
                p-4
                max-w-sm
                w-full
                mx-auto
              "
            >
              <div class="animate-pulse">
                <div class="rounded bg-blue-400 h-32 py-8">
                  <div class="font-bold text-center text-blue-600 text-xl">
                    Sedang Loading Sebentar
                  </div>
                </div>
                <div class="rounded bg-blue-400 h-4 mt-2"></div>
                <div class="rounded bg-blue-400 h-4 mt-2"></div>
                <!-- <div class="bg-red-700"></div> -->
              </div>
            </div>
          </div>
          <div
            class="md:col-span-3 col-span-1"
            v-for="item in produkSerupa"
            :key="item.id"
            v-show="!load"
          >
            <nuxt-link :to="'/productDetail/' + item.slug">
              <!-- dekstop view -->
              <card-produk
                class="md:hidden block"
                :nameImage="item.imageurl"
                v-bind:diskon="item.discount"
                v-bind:persenDiskon="item.discount"
                v-bind:price="item.product_price"
                :load="load"
                :title="
                  item.product_name.length > 18
                    ? item.product_name.substring(0, 16) + ' ...'
                    : item.product_name
                "
              />

              <!-- mobile view -->
              <card-produk
                class="hidden md:block"
                :nameImage="item.imageurl"
                v-bind:diskon="80000"
                v-bind:price="item.product_price"
                :load="load"
                :title="
                  item.product_name.length > 23
                    ? item.product_name.substring(0, 26) + ' ...'
                    : item.product_name
                "
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- endproduk serupa -->
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
  head() {
    return {
      title: 'Beli - ' + this.nama + ' | Filterpedia',
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content:
            'Beli ' +
            this.nama +
            ' Filterpedia Water Treatment Filter Mudah dan Aman ',
        },
        {
          hid: 'url',
          name: 'url',
          property: 'url',
          content: 'https://filterpedia.co.id/#/' + this.$route.params.slug,
        },
        {
          hid: 'keyword',
          name: 'keyword',
          property: 'keyword',
          content: this.product_description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content: this.product_description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Beli > +' + this.nama,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          name: 'og:image',
          content: this.imgThumbnail,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          name: 'og:type',
          content: 'product',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://filterpedia.co.id/#/' + this.$route.params.slug,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          name: 'twitter:card',
          content: 'product',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          name: 'twitter:title',
          content: this.nama,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          name: 'twitter:description',
          content: this.product_description,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          name: 'twitter:image',
          content: this.imgThumbnail,
        },
      ],
    }
  },

  components: { botfooter, ClassicEditor },

  data() {
    return {
      components: {},
      share: {
        url: 'https://filterpedia.co.id/#/' + this.$route.params.slug,
        title: 'Beli ' + this.nama + ' di filterpedia mudah dan aman',
        description: 'Beli kebutuhan Water Treatment Filter. filterpedia.co.id',
        media: this.imgThumbnail,
      },
      load: true,
      isInfoProduk: true,
      activePhoto: 0,
      photos: [],
      nama: 'nama',
      item: '',
      price: '',
      product_id: null,
      product_description: '',
      subdeks: '',
      readmore: true,
      imgThumbnail: null,
      produkSerupa: [],
    }
  },
  async asyncData({ $axios, params }) {
    const produkShare = await $axios.$get('/products/' + params.slug)
    return { produkShare }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ulasan: function () {
      this.isInfoProduk = false
    },
    async getData() {
      let item = await this.$axios
        .$get('/products/' + this.$route.params.slug)
        .then((ress) => {
          console.log(ress.product_serupa)
          this.produkSerupa = ress.product_serupa
          this.product_id = ress.data.id
          this.product_description = ress.data.product_description
          this.nama = ress.data.product_name
          this.price = ress.data.product_price
          this.subdeks = this.product_description.substring(0, 290)
          this.imgThumbnail = ress.data.imageurl
          // // image thumbnail
          this.photos.push({
            id: 220900 + this.product_id,
            imageurl: ress.data.imageurl,
          })
          if (ress.image.length) {
            for (let i = 0; i < ress.image.length; i++) {
              this.photos.push({
                id: ress.image[i].id,
                imageurl: ress.image[i].imageurl,
              })
            }
          }

          // berhentikan preload
          this.load = false
        })
    },
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
          product_id: this.product_id,
          qty: 1,
        })
        .then()
        .catch((err) => console.log(err))
      // get data all cart user
      let cart = await this.$axios.$get('/cart').then((ress) => {
        this.$store.commit('setKeranjang', ress.data)
        this.$store.commit('setSubTotal', ress.harga_total)
        this.$auth.fetchUser()
        // Use sweetalert2
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Berhasil masukan Keranjang',
          showConfirmButton: false,
          timer: 2000,
        })
        this.$store.commit('setLoading', false)
      })
    },

    produk: function () {
      this.isInfoProduk = true
      console.log(this.subdeks)
    },
    changeActive: function (id) {
      this.activePhoto = id
    },
    showAlert() {},
    readMore: function () {
      this.readmore = false
      this.subdeks = this.product_description
      console.log(this.readmore)
    },
  },
}
</script>
