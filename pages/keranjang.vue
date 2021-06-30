<template>
  <div>
    <div
      class="
        md:hidden
        flex
        justify-between
        fixed
        bottom-14
        bg-white
        px-2
        pt-1
        w-full
        rounded-t-xl
      "
    >
      <div class=" text-gray-800">
        Subtotal Belanjaan
        <div class="text-blue-600 font-medium">Rp.{{ subtotal }}</div>
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
        "
        >Beli Sekarang</nuxt-link
      >
    </div>
    <nav-mobile />
    <navbar class="hidden md:block" />
    <div class="md:hidden py-2 px-3 shadow flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500 mr-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="text-sm text-gray-500 my-auto">Kembali</div>
    </div>
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
        class="grid grid-cols-4 mt-5"
        v-for="(b, index) in barang"
        :key="index"
      >
        <div>
          <input type="checkbox" @click="hendleCheked(index)" :id="index" />
          <img
            :src="require(`~/assets/product/${b.image}`)"
            alt=""
            class="rounded-lg w-32"
          />
        </div>
        <div class="text-lg mt-4">
          <nuxt-link to="productdetail" class="hover:text-blue-500">{{
            b.nama
          }}</nuxt-link>
        </div>
        <div class="text-green-600 font-medium mt-4">
          Rp.{{ b.harga }}
          <div class="text-xs mt-1 text-blue-400">
            70% <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="" @click="plusHendle(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-blue-600 cursor-pointer"
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
          <div class="mx-4 font-bold text-gray-700 text-xl mt-1">
            {{ b.counter }}
          </div>
          <div @click="minHendle(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 cursor-pointer"
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
      <div class="mt-10">
        <div class="text-lg font-semibold text-gray-800">
          Subtotal Belanjaan
        </div>
        <div class="text-blue-600 font-medium mb-4">Rp.{{ subtotal }}</div>
        <nuxt-link
          to="belilangsung"
          class="py-2 px-6 rounded bg-blue-600 text-white hover:bg-purple-700"
          >Beli Sekarang</nuxt-link
        >
      </div>
    </div>
    <!-- end desktop view -->

    <!-- mobile view -->
    <div class="" v-for="(b, index) in barang" :key="index">
      <div class="px-3 md:hidden flex mt-9">
          
        <div>
          <input type="checkbox" @click="hendleCheked(index)" :id="index" />
          <img
            :src="require(`~/assets/product/${b.image}`)"
            alt=""
            class="h-16 rounded"
          />
        </div>
        <div class="w-full ml-4 mt-4">
          <div class="text-sm">{{b.nama}}</div>
          <div class="flex">
            <div class="text-sm font-medium mr-4">Rp.{{b.harga}}</div>
            <div class="text-xs mt-1 text-blue-400">
              70%
              <span class="line-through text-gray-400 ml-2">Rp.1000000</span>
            </div>
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
            <div class="mx-4 font-bold text-gray-700">
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
export default {
  components: { navbar, NavMobile },

  head() {
    return {
      title: 'Keranjang Pesanan Lisa Blackpink',
    }
  },

  data() {
    return {
      cheked: [1, 3],
      counter1: 1,
      subtotal: 0,
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
  mounted() {},
  methods: {
    plusHendle(id) {
      this.barang[id].counter += 1
      
      if (this.barang[id].ischeked == true) {
        this.subtotal += this.barang[id].harga;
        console.log('ok 1')
      }
      
      console.log(document.getElementById(id).checked )
    },
    minHendle(id) {
      if (this.barang[id].counter < 2) {
        return event.preventDefault()
      }

      this.barang[id].counter -= 1
      if (document.getElementById(id).checked == true) {
        this.subtotal -= this.barang[id].harga
      }

    },
    hendleCheked(id) {
      if (this.barang[id].ischeked == false) {
        document.getElementById(id).checked = true
        this.barang[id].ischeked = true
        this.subtotal += this.barang[id].harga * this.barang[id].counter
        console.log(this.barang[id].ischeked)
      } else {
        document.getElementById(id).checked = false
        this.barang[id].ischeked = false
        this.subtotal -= this.barang[id].harga * this.barang[id].counter
        console.log(this.barang[id])
        console.log(this.barang[id].ischeked)
      }

      if (this.subtotal < 1) {
        this.subtotal = 0
      }
    },
  },
}
</script>