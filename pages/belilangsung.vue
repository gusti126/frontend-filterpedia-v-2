<template>
  <div>
    <navbar />

    <div class="md:px-20 px-2">
      <div class="mt-2 md:mt-4 md:p-4 flex">
        <div>
          <img
            src="~/assets/icon/buy-button 1.png"
            alt="icon"
            class="w-16 mr-6"
          />
        </div>
        <div class="md:text-xl text-sm my-auto text-gray-500">
          Halaman terakhir <br />
          untuk proses pembelian anda
        </div>
      </div>
      <div class="mt-4 text-gray-600 font-medium md:font-semibold md:text-xl">
        Produk yang di beli
      </div>

      <div class="flex mt-6">
        <div>
          <img
            src="~/assets/product/Rectangle 20-1.jpg"
            alt=""
            class="md:w-52 w-32 rounded md:rounded-lg"
          />
        </div>
        <div class="md:ml-10 ml-3">
          <div class="md:text-2xl md:font-medium text-gray-800">
            Filter Air Botolan
          </div>
          <div class="my-1 md:my-4 md:flex">
            <div class="font-medium mr-4">
              <div class="md:text-xl text-blue-500">Rp.700.000</div>
            </div>
            <div class="flex">
              <div
                class="
                  bg-blue-300
                  text-blue-800
                  p-1
                  text-xs
                  md:text-sm
                  rounded-lg
                "
              >
                80%
              </div>
              <div class="ml-4 text-gray-400 line-through">Rp.600.000</div>
            </div>
          </div>
          <div class="hidden md:flex">
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
        </div>
      </div>

      <!-- garis -->
      <div class="my-4">
        <hr />
      </div>
      <!-- endgaris -->

      <div class="">
        <div class="mt-4 text-gray-600 font-medium md:font-semibold md:text-xl">
          Informasi Pengiriman
        </div>
        <div class="grid grid-cols-12 grid-flow-row mt-4 gap-5">
          <div class="md:col-span-4 col-span-12">
            <label for="alamat">Alamat</label>
            <div>
              <input
                type="text"
                class="
                  border border-gray-300
                  text-gray-600
                  rounded-full
                  focus:outline-none
                  focus:border-blue-800 focus:border-2
                  focus:text-blue-800
                  px-3
                  py-2
                  text-sm
                  w-full
                "
                value="Kawasan Pergudangan, Jl. Arcadia, Jl. Daan Mogot Blok G18 No 1-3 Km, RT.005/RW.003, Batuceper, Kec. Batuceper, Kota Tangerang, Banten 1512"
                id="alamat"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <label for="alamat">Provinsi</label>
            <div>
              <select
                name="porvinsi"
                id="provinsi"
                class="
                  border border-gray-300
                  text-gray-600
                  rounded-full
                  focus:outline-none
                  focus:border-blue-800 focus:border-2
                  focus:text-blue-800
                  px-3
                  py-2
                  text-sm
                  w-full
                "
              >
                <option value="Banten">Banten</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bogor">Bogor</option>
              </select>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <label for="alamat">Kota</label>
            <div>
              <select
                name="porvinsi"
                id="provinsi"
                class="
                  border border-gray-300
                  text-gray-600
                  rounded-full
                  focus:outline-none
                  focus:border-blue-800 focus:border-2
                  focus:text-blue-800
                  px-3
                  py-2
                  text-sm
                  w-full
                "
              >
                <option value="Banten">Tangerang</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bogor">Bandung</option>
              </select>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2">
            <label for="alamat">Kode Pos</label>
            <div>
              <input
                type="text"
                class="
                  border border-gray-300
                  text-gray-600
                  rounded-full
                  focus:outline-none
                  focus:border-blue-800 focus:border-2
                  focus:text-blue-800
                  px-3
                  py-2
                  text-sm
                  w-full
                "
                value="1512"
                id="alamat"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <label for="alamat">Pilih Pembayaran</label>
            <div>
              <select
                name="porvinsi"
                id="provinsi"
                class="
                  border border-gray-300
                  text-gray-600
                  rounded-full
                  focus:outline-none
                  focus:border-blue-800 focus:border-2
                  focus:text-blue-800
                  px-3
                  py-2
                  text-sm
                  w-full
                "
              >
                <option value="BRI">VA BRI</option>
                <option value="BTN">VA BTN</option>
                <option value="ALFA">ALFA</option>
                <option value="INDOMART">INDOMART</option>
              </select>
            </div>
          </div>
          <div class="col-span-12 md:col-span-9">
            <div class="text-lg font-semibold">Detail Pembayaran</div>
            <div class="grid grid-cols-12 grid-flow-row mt-4">
              <div class="col-span-6 md:col-span-3">
                <div class="text-gray-700 font-medium">Rp.700.000</div>
                <div class="text-gray-500 text-sm">Harga barang</div>
              </div>
              <div class="col-span-6 md:col-span-3">
                <div class="text-gray-700 font-medium">Rp.700.000</div>
                <div class="text-gray-500 text-sm">Biaya pengiriman</div>
              </div>
              <div class="col-span-6 md:col-span-3 mt-6 md:mt-0">
                <div class="text-green-600 font-semibold">Rp.1.400.000</div>
                <div class="text-gray-500 text-sm">Total Pembayaran</div>
              </div>
              <div class="col-span-12 mt-4 md:mt-0 md:col-span-3 mb-10">
               <div class="w-full">
                    <nuxt-link
                  to="chekoutsuccess"
                  class="bg-blue-600 text-center w-full block py-2 text-white rounded-lg"
                  >Lanjut Pembayaran</nuxt-link
                >
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <botfooter nameImage="logo.png" />
  </div>
</template>

<script>
import Botfooter from '~/components/botfooter.vue'
import navMobile from '~/components/nav-mobile.vue'
export default {
  components: { navMobile, Botfooter },
}
</script>