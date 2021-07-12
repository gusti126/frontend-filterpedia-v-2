<template>
  <footer class="bg-blue-700 hidden md:block w-full px-10 py-8 mt-8 text-white">
    <!-- head footer -->
    <div class="flex justify-between mb-6">
      <div>
        <div class="text-xl text-white font-medium">PT CIPTA ANEKA AIR</div>
        <div class="text-gray-300 text-sm mt-1">
          Water and Waste Water Treatment Engineering
        </div>
      </div>
      <div>
        <div class="text-lg text-white font-medium">Autorized Product</div>
        <div class="text-gray-200 text-sm mt-1">
          Water and Waste Water Treatment Engineering
        </div>
      </div>
    </div>
    <hr />
    <!-- endhead footer -->
    <!-- items -->
    <div class="mt-6 grid grid-cols-12 grid-flow-row gap-6">
      <div class="text-white col-span-3">
        <div class="font-medium text-lg">SERVICE</div>
        <div class="text-white text-sm mt-2 font-light">0221221921</div>
        <div class="text-white text-sm mt-2 font-light">
          <nuxt-link to="/footer/cekstatus">Cek Order Status</nuxt-link>
        </div>
        <div class="text-white text-sm mt-2 font-light">change location</div>
        <div class="text-white text-sm mt-2 font-light">FAQ's</div>
        <div></div>
      </div>
      <div class="text-white col-span-3">
        <div class="font-medium text-lg">POLOCIES</div>
        <div class="text-white text-sm mt-2 font-light">Term of use</div>
        <div class="text-white text-sm mt-2 font-light">Privacy policy</div>
        <div class="text-white text-sm mt-2 font-light">Refund policy</div>
        <div class="text-white text-sm mt-2 font-light">Billing system</div>
        <div></div>
      </div>
      <div class="text-white col-span-3">
        <div class="font-medium text-lg">ABOUT SHOPPER</div>
        <div class="text-white text-sm mt-2 font-light">
          Company Information
        </div>
        <div class="text-white text-sm mt-2 font-light">Careers</div>
        <div class="text-white text-sm mt-2 font-light">Affiliate Program</div>
        <div class="text-white text-sm mt-2 font-light">&copy Copyright</div>
        <div></div>
      </div>
      <div class="col-span-3">
        <div class="font-medium text-base text-white">
          Dapatkan info terbaru
        </div>
        <div class="text-sm mt-2 font-light">
          <input
            type="text"
            class="
              bg-white
              focus:outline-none
              text-gray-700
              rounded
              py-2
              px-2
              w-full
            "
            placeholder="input email"
          />
          <div
            class="mt-3 cursor-pointer bg-purple-400 text-center py-2 rounded"
          >
            Kirim
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- enditems -->
  </footer>
</template>
<script>
export default {
  props: {
    nameImage: String,
  },
}
</script>
