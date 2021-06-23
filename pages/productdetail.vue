<template>
  <div>
    <navbar />
    <nav-mobile />

    <div class="md:px-20 px-2">
      <div class="flex justify-start my-4">
        <div class="mr-3 text-lg text-gray-500">Home</div>
        <div class="text-lg text-gray-500 mr-3">></div>
        <div class="text-lg text-gray-500 mr-3">Produk</div>
        <div class="text-lg text-gray-500 mr-3">></div>
        <div class="text-lg text-blue-500 mr-3">Detail Filter Air Botolan</div>
      </div>

      <div class="grid grid-cols-12 grid-flow-row gap-2 md:gap-4">
        <div class="md:col-span-8">
          <img
            src="~/assets/product/Rectangle 20-2.jpg"
            class="rounded-lg"
            alt=""
          />
        </div>
        <div class="md:col-span-4">
          <div class="border p-3 rounded-lg">
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
                  class="bg-blue-700 text-white px-9 py-2 rounded-lg"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>