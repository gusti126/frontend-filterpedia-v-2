<template>
  <div class="pb-40 md:pb-20">
    <div
      class="
        md:hidden
        flex
        justify-between
        fixed
        bottom-12
        pb-7
        bg-white
        px-2
        pt-1
        w-full
        rounded-t-xl
      "
    >
      <div class="text-gray-800">
        Total Belanjaan
        <div class="text-green-800 font-medium">
          Rp.{{ this.$store.state.subtotal | currency }}
        </div>
      </div>

      <nuxt-link
        to="/checkout/konfirmasi"
        class="
          py-2
          px-6
          rounded
          my-auto
          bg-ungusuez
          text-white
          hover:bg-purple-700
          flex
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 my-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        Beli
      </nuxt-link>
    </div>
    <nav-mobile :isKeranjang="true" />
    <navbar />

    <!-- skeleton loading -->
    <div class="md:px-20 px-4 mt-14" v-show="load">
      <div class="animate-pulse mb-4 border">
        <div class="bg-blue-400 h-8 rounded">
          <div class="font-bold text-center mx-auto text-blue-600">
            Sedang memuat data Sebentar
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-5 grid-flow-row gap-2 animate-pulse mb-4"
        v-for="a of 4"
      >
        <div class="bg-blue-400 h-16 col-span-2 rounded"></div>
        <div class="rounded col-span-3 my-auto">
          <div class="bg-blue-400 h-4 rounded"></div>
          <div class="bg-blue-400 h-4 mt-2 rounded"></div>
        </div>
      </div>
    </div>
    <!-- endskeleton loading -->

    <div v-show="!load">
      <div class="flex md:px-20 pt-3 text-sm md:text-base md:pt-6 px-3">
        <nuxt-link to="/" class="mr-6 text-gray-400">Home</nuxt-link>
        <div class="mr-6 text-gray-600">/</div>
        <div class="text-gray-600">Keranjang</div>
      </div>
      <!-- desktop view -->
      <div class="md:px-20 pt-6 md:block hidden" v-if="keranjang">
        <div class="grid grid-cols-4 mb-8 text-gray-500">
          <div>Image</div>
          <div>Nama</div>
          <div>Harga</div>
          <div>Action</div>
        </div>
        <div
          class="grid grid-cols-4 mt-8"
          v-for="(b, index) in keranjang"
          :key="index"
        >
          <div>
            <img :src="b.products[0].imageurl" alt="" class="rounded w-32" />
          </div>
          <div class="text-lg mt-2">
            <nuxt-link to="productdetail" class="hover:text-blue-500">{{
              b.products[0].product_name
            }}</nuxt-link>
            <div class="text-xs mt-1 text-blue-400">
              70%
              <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-green-600 font-medium">
              Rp.{{ b.products[0].product_price | currency }}
            </div>
            <div class="flex mt-4">
              <div class="" @click="hendlePlus(b.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-blue-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mx-4 font-medium text-gray-700">
                {{ b.qty }}
              </div>
              <div @click="hendleMin(b.id, index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer"
                  :class="{
                    'text-gray-400': b.qty < 2,
                    'text-blue-600': b.qty > 1,
                  }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="my-auto cursor-pointer flex text-red-600 rounded"
            @click="removeCart(b.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <div class="ml-2">Hapus</div>
          </div>
        </div>
        <div class="mt-10">
          <div class="text-lg font-semibold text-gray-800">
            Subtotal Belanjaan
          </div>
          <div class="text-green-700 font-medium mb-4">
            Rp.{{ this.$store.state.subtotal | currency }}
          </div>
          <nuxt-link
            to="/checkout/konfirmasi"
            class="
              py-2
              px-6
              rounded
              cursor-pointer
              bg-ungusuez
              text-white
              hover:bg-purple-700
              inline-block
            "
          >
            Checkout
          </nuxt-link>
        </div>
      </div>
      <div v-else>
        <div class="text-center text-xl mt-10 text-gray-500">
          Keranjang mu kosong
        </div>
        <div class="text-center mt-8">
          <nuxt-link
            to="/"
            class="
              bg-ungusuez
              px-4
              py-1
              text-white text-sm
              rounded
              hover:bg-indigo-900
            "
            >Belanja dulu</nuxt-link
          >
        </div>
      </div>
      <!-- end desktop view -->

      <!-- mobile view -->
      <div
        class=""
        v-for="(b, index) in keranjang"
        :key="index"
        v-if="keranjang"
      >
        <div class="px-3 md:hidden flex mt-6">
          <div>
            <img :src="b.products[0].imageurl" alt="" class="h-16 rounded" />
          </div>
          <div class="w-full ml-4 md:mt-4">
            <div class="text-sm">{{ b.products[0].product_name }}</div>
            <div class="text-xs mt-1 text-blue-400">
              80%
              <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
            </div>
            <div class="flex">
              <div class="text-sm font-medium mr-4">
                Rp.{{ b.products[0].product_price | currency }}
              </div>
            </div>
            <div class="flex justify-end">
              <div class="" @click="hendlePlus(b.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-blue-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mx-4 font-medium text-gray-700">
                {{ b.qty }}
              </div>
              <div @click="hendleMin(b.id, index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cursor-pointer"
                  :class="{
                    'text-gray-400': b.qty < 2,
                    'text-blue-600': b.qty > 1,
                  }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="text-center text-xl mt-10 text-gray-500">
          Keranjang mu kosong
        </div>
        <div class="text-center mt-8">
          <nuxt-link
            to="/"
            class="
              bg-ungusuez
              px-4
              py-1
              text-white text-sm
              rounded
              hover:bg-indigo-900
            "
            >Belanja dulu</nuxt-link
          >
        </div>
      </div>
      <!-- endmobile view -->
    </div>
  </div>
</template>

<script>
import NavMobile from '~/components/nav-mobile.vue'
import navbar from '~/components/navbar.vue'
import { mapMutations } from 'vuex'
export default {
  components: { navbar, NavMobile },
  // @click="$store.commit('increment')"
  head: function ({ $seo }) {
    $seo({
      name: 'Filterpedia Indonesia Mendunia',
      title: 'Keranjang',
      description: 'keranjang Page',
      image: this.$store.state.auth.user.profile_photo_url,

      openGraph: {
        title: 'Keranjang belanja ' + this.$store.state.auth.user.name,
        image: this.$store.state.auth.user.profile_photo_url,
        images: this.$store.state.auth.user.profile_photo_url,
        description: 'Belanja mudah dan aman',
      },
    })
  },

  data() {
    return {
      load: true,
      cheked: [1, 3],
      counter1: 1,
      subtotal: '',
      keranjang: [],
      barang: [
        {
          id: 1,
          nama: 'Filter Air Satuan 1',
          image: 'Rectangle 20-2.jpg',
          harga: 20,
          diskon: 50,
          counter: 1,
          ischeked: false,
        },
        {
          id: 2,
          nama: 'Filter Air Satuan 2',
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
      ],
    }
  },
  middleware: 'auth',
  async asyncData({ $axios }) {
    const user = await $axios.$get('/profile')

    return { user }
  },

  mounted() {
    this.getProduk()
  },
  methods: {
    async getProduk() {
      let cart = await this.$axios.$get('/cart').then((ress) => {
        this.$store.commit('setSubTotal', ress.harga_total)
        this.keranjang = ress.data
        this.load = false
      })
    },
    async hendleMin(id, index) {
      if (this.keranjang[index].qty < 2) {
        this.removeCart(id)
      } else {
        let item = await this.$axios
          .$post('/minus_one', {
            user_id: this.$store.state.auth.user.id,
            cart_id: id,
          })
          .then((ress) => {
            this.getProduk()
          })
          .catch((err) => console.log(err))
      }
    },
    async hendlePlus(id) {
      let item = await this.$axios
        .$post('/plus_one', {
          user_id: this.$store.state.auth.user.id,
          cart_id: id,
        })
        .then((ress) => {
          this.getProduk()
        })
        .catch((err) => console.log(err))
    },
    async removeCart(id) {
      console.log(id)
      let item = await this.$axios
        .$delete('/cart/delete/' + id)
        .then((ress) => {
          this.getProduk()
          this.$auth.fetchUser()
          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Berhasil hapus item di keranjang',
            showConfirmButton: false,
            timer: 1700,
          })
        })
        .catch((err) => console.log(err))
    },
    async checkout() {
      let items = await this.$axios.post('/checkout', {
        user_id: this.$store.state.auth.user.id,
      })
    },
  },
}
</script>
