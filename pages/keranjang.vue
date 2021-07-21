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
        <div class="text-blue-600 font-medium">Rp.{{ 1000000 | currency }}</div>
      </div>

      <nuxt-link
        to="belilangsung"
        class="
          py-2
          px-6
          rounded
          my-auto
          bg-blue-600
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
    <navbar :navScroll="100" :user="user.data" />

    <div class="flex md:px-20 pt-3 text-sm md:text-base md:pt-6 px-3">
      <nuxt-link to="/" class="mr-6 text-gray-400">Home</nuxt-link>
      <div class="mr-6 text-gray-600">/</div>
      <div class="text-gray-600">Keranjang</div>
    </div>
    <!-- desktop view -->
    <div class="md:px-20 pt-6 md:block hidden">
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
          <img
            :src="require(`~/assets/product/${b.image}`)"
            alt=""
            class="rounded w-32"
          />
        </div>
        <div class="text-lg mt-2">
          <nuxt-link to="productdetail" class="hover:text-blue-500">{{
            b.nama
          }}</nuxt-link>
          <div class="text-xs mt-1 text-blue-400">
            70% <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
          </div>
        </div>
        <div class="mt-4">
          <div class="text-green-600 font-medium">Rp.{{ b.harga }}</div>
          <div class="flex mt-4">
            <div class="" @click="plusHendle(index)">
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
              {{ b.counter }}
            </div>
            <div @click="minHendle(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer"
                :class="{
                  'text-gray-400': b.counter < 2,
                  'text-blue-600': b.counter > 1,
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
        <div class="text-red-400 my-auto">Hapus</div>
      </div>
      <div class="mt-10">
        <div class="text-lg font-semibold text-gray-800">
          Subtotal Belanjaan
        </div>
        <div class="text-blue-600 font-medium mb-4">
          Rp.{{ this.$store.state.subtotal }}
        </div>
        <nuxt-link
          to="belilangsung"
          class="py-2 px-6 rounded bg-blue-600 text-white hover:bg-purple-700"
          >Beli Sekarang</nuxt-link
        >
      </div>
    </div>
    <!-- end desktop view -->

    <!-- mobile view -->
    <div class="" v-for="(b, index) in keranjang" :key="index">
      <div class="px-3 md:hidden flex mt-9">
        <div>
          <img
            :src="require(`~/assets/product/${b.image}`)"
            alt=""
            class="h-16 rounded"
          />
        </div>
        <div class="w-full ml-4 md:mt-4">
          <div class="text-sm">{{ b.nama }}</div>
          <div class="text-xs mt-1 text-blue-400">
            80%
            <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
          </div>
          <div class="flex">
            <div class="text-sm font-medium mr-4">Rp.{{ b.harga }}</div>
          </div>
          <div class="flex justify-end">
            <div class="" @click="plusHendle(index)">
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
              {{ b.counter }}
            </div>
            <div @click="minHendle(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer"
                :class="{
                  'text-gray-400': b.counter < 2,
                  'text-blue-600': b.counter > 1,
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
    <!-- endmobile view -->
  </div>
</template>

<script>
import NavMobile from '~/components/nav-mobile.vue'
import navbar from '~/components/navbar.vue'
import { mapMutations } from 'vuex'
export default {
  components: { navbar, NavMobile },
  // @click="$store.commit('increment')"
  head() {
    return {
      title: 'Keranjang Pesanan Lisa Blackpink',
    }
  },

  data() {
    return {
      cheked: [1, 3],
      counter1: 1,
      subtotal: '',
      keranjang: this.$store.state.keranjang,
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

  mounted() {},
  methods: {
    plusHendle(id) {
      this.keranjang[id].counter += 1
      this.subtotal += this.keranjang[id].harga
    },
    minHendle(id) {
      if (this.keranjang[id].counter < 2) {
        return event.preventDefault()
      }

      this.keranjang[id].counter -= 1
      this.subtotal -= this.keranjang[id].harga
    },
    hendleCheked(id) {
      if (this.keranjang[id].ischeked == false) {
        document.getElementById(id).checked = true
        this.keranjang[id].ischeked = true
        this.subtotal += this.keranjang[id].harga * this.keranjang[id].counter
        console.log(this.keranjang[id].ischeked)
      } else {
        document.getElementById(id).checked = false
        this.keranjang[id].ischeked = false
        this.subtotal -= this.keranjang[id].harga * this.keranjang[id].counter
        console.log(this.keranjang[id])
        console.log(this.keranjang[id].ischeked)
      }

      if (this.subtotal < 1) {
        this.subtotal = 0
      }
    },
  },
}
</script>
