<template>
  <div>
    <navbar />
    <nav-mobile />

    <div class="md:px-20 px-2">
      <div class="flex justify-start my-5">
        <div class="mr-3 text-lg text-gray-500">Home</div>
        <div class="text-lg text-gray-500 mr-3">></div>
        <div class="text-lg text-gray-500 mr-3">Produk</div>
        <div class="text-lg text-gray-500 mr-3">></div>
        <div class="text-lg text-blue-500 mr-3">Detail Filter Air Botolan</div>
      </div>

      <div class="grid grid-cols-12 grid-flow-row gap-2 md:gap-4">
        <div class="md:col-span-7">
          <transition name="slide-fade" mode="out-in">
            <img
              :key="photos[activePhoto].id"
              :src="
                require(`~/assets/product/Rectangle ${photos[activePhoto].url}`)
              "
              class="rounded-lg"
              alt=""
            />
          </transition>
          <div class="grid grid-cols-5 grid-flow-row gap-2 md:gap-4 mt-4">
            <div
              class="md:col-span-1 hover:border"
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

            <div class="md:col-span-5 flex cursor-pointer">
              <div
                class="
                  font-semibold
                  text-2xl text-blue-700
                  mr-16
                  hover:text-blue-400
                "
              >
                <div v-on:click="produk">Info Produk</div>
                <div
                  class="rounded-full bg-blue-700 h-1 mt-1"
                  v-show="isInfoProduk"
                ></div>
              </div>
              <div
                class="font-semibold text-2xl text-blue-700 hover:text-blue-400"
              >
                <div @click="ulasan">Ulasan</div>
                <div
                  class="rounded-full bg-blue-700 h-1 mt-1"
                  v-show="!isInfoProduk"
                ></div>
              </div>
            </div>

            <div class="md:col-span-5">
              <div class="text-gray-700 text-lg cekinfop" v-if="isInfoProduk">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                dicta, tempore doloribus consequatur, ad nisi totam qui, et rem
                aut debitis consectetur. Ipsum doloremque, quisquam id aliquam
                maiores ea nesciunt sed quae, doloribus nihil saepe odit officia
                blanditiis. Necessitatibus ex natus asperiores in ipsum
                voluptatum veritatis, placeat similique aliquam illum cumque
                maxime voluptas totam cupiditate officia reprehenderit, dolorem,
                eos tempore. Expedita qui recusandae asperiores tempora natus
                nemo error iusto doloremque saepe? Nisi repudiandae reiciendis,
                odio a magni temporibus exercitationem tempora consectetur
                deleniti molestiae rerum, eaque quidem architecto obcaecati
                inventore! Explicabo inventore qui delectus eius expedita
                obcaecati totam accusantium reprehenderit ullam. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Perspiciatis culpa
                exercitationem aliquid ut consequatur distinctio quasi
                blanditiis facere aspernatur quidem eligendi quam velit officia
                eos voluptatibus vero eveniet incidunt totam tempore
                necessitatibus, labore provident quae nihil. Consequatur, a id
                neque commodi aspernatur error reprehenderit enim, omnis,
                assumenda tenetur voluptatum repudiandae.
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-5">
          <div class="border p-4 rounded-lg sticky top-4">
            <div class="text-xl text-gray-700 font-medium">
              Filter Air Botoloan
            </div>
            <div class="my-3 text-gray-500">Terjual 700 | 680 Ulasan</div>
            <div class="my-3 text-blue-600 font-medium text-2xl">
              Rp.700.000
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
              <div>
                <nuxt-link
                  to="/belilangsung"
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
              </div>
              <div class="">
                <nuxt-link
                  to="/belilangsung"
                  class="
                    border-2 border-blue-700
                    text-blue-700
                    px-9
                    py-2
                    rounded-lg
                    hover:border-0
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  +Keranjang
                </nuxt-link>
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
              <nuxt-link to="/chat" class="text-gray-400 hover:text-blue-500">
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
              </nuxt-link>
              <nuxt-link to="/chat" class="text-gray-400 hover:text-blue-500">
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
              </nuxt-link>
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
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-1.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-3.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
            />
          </nuxt-link>
        </div>
        <div class="md:col-span-3 col-span-1">
          <nuxt-link to="/productdetail">
            <card-produk
              nameImage="Rectangle 20-2.jpg"
              v-bind:diskon="80000"
              v-bind:price="70000"
              title="Nama Produk"
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
export default {
  components: { botfooter },
  data() {
    return {
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
    }
  },

  methods: {
    ulasan: function () {
      this.isInfoProduk = false
      console.log(this.isInfoProduk)
    },
    produk: function () {
      this.isInfoProduk = true
      console.log(this.isInfoProduk)
    },
    changeActive: function (id) {
      this.activePhoto = id
    },
  },
}
</script>