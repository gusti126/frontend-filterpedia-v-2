<template>
  <div>
    <!-- content -->
    <div class="bg-white w-full min-h-full pt-3 md:p-6 rounded-xl">
      <div class="flex justify-around mb-6">
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            text-blue-500
            hover:text-purple-700
            cursor-pointer
          "
        >
          Belum di bayar(3)
          <div class="mt-2 border border-blue-500 rounded-full"></div>
        </div>
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
        >
          di kemas(4)
        </div>
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
        >
          di kirim(2)
        </div>
        <div
          class="
            font-medium
            text-xs
            md:text-lg
            hover:text-purple-700
            cursor-pointer
          "
        >
          Selesai
        </div>
      </div>
      <div class="">
        <!-- data belum dibayar -->
        <div
          class="
            bg-white
            md:shadow
            border-b border-gray-300
            md:border
            p-3
            mb-2
            rounded
          "
        >
          <div class="flex">
            <div>
              <img
                src="~/assets/product/Rectangle 20-1.jpg"
                alt=""
                class="rounded w-36 md:w-24"
              />
            </div>
            <div class="w-full ml-4 md:flex">
              <div class="">
                <div class="font-medium text-gray-700">Filter Air Botolan</div>
                <div class="text-sm text-blue-500 my-1">Rp.700.000</div>
              </div>
              <div class="mx-auto">
                <div class="font-medium text-gray-700 md:block hidden">
                  No pesanan (292220129310)
                </div>
                <div class="text-sm text-red-500 my-1">Belum di bayar</div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-between md:justify-start">
            <nuxt-link
              to="/chekoutsuccess"
              class="
                text-sm
                hover:bg-purple-600
                bg-blue-600
                text-white
                px-3
                py-1
                rounded
              "
              >Cara bayar</nuxt-link
            >
            <nuxt-link
              to="/"
              class="
                text-sm
                hover:text-purple-700
                text-blue-600
                py-1
                ml-3
                md:ml-3
                rounded
              "
              >Chat penjual</nuxt-link
            >
            <nuxt-link
              to="/"
              class="
                text-sm
                hover:text-purple-700
                text-red-600
                py-1
                ml-3
                md:ml-3
                rounded
              "
              >Batalkan</nuxt-link
            >
          </div>
        </div>
        <div
          class="
            bg-white
            md:shadow
            border-b border-gray-300
            md:border
            p-3
            mb-2
            rounded
          "
        >
          <div class="flex">
            <div>
              <img
                src="~/assets/product/Rectangle 20-1.jpg"
                alt=""
                class="rounded w-36 md:w-24"
              />
            </div>
            <div class="w-full ml-4 md:flex">
              <div class="">
                <div class="font-medium text-gray-700">Filter Air Botolan</div>
                <div class="text-sm text-blue-500 my-1">Rp.700.000</div>
              </div>
              <div class="mx-auto">
                <div class="font-medium text-gray-700 md:block hidden">
                  No pesanan (292220129310)
                </div>
                <div class="text-sm text-red-500 my-1">Belum di bayar</div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-between md:justify-start">
            <nuxt-link
              to="/chekoutsuccess"
              class="
                text-sm
                hover:bg-purple-600
                bg-blue-600
                text-white
                px-3
                py-1
                rounded
              "
              >Cara bayar</nuxt-link
            >
            <nuxt-link
              to="chekoutsuccess"
              class="
                text-sm
                hover:text-purple-700
                text-blue-600
                py-1
                ml-3
                md:ml-3
                rounded
              "
              >Chat penjual</nuxt-link
            >
            <nuxt-link
              to="chekoutsuccess"
              class="
                text-sm
                hover:text-purple-700
                text-red-600
                py-1
                ml-3
                md:ml-3
                rounded
              "
              >Batalkan</nuxt-link
            >
          </div>
        </div>
        <!-- enddata belum dibayar -->
      </div>
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      bayaran: true,
      kemasan: false,
      kiriman: false,
      selesai: false,
    }
  },
}
</script>