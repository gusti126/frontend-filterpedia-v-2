<template>
  <div>
    <div class="bg-white w-full min-h-full p-6 rounded-xl">
      <div class="text-xl font-semibold">Tagihan anda</div>
      <div class="border py-2 px-4 rounded mt-4 flex justify-between">
        <div>
          <div>
            Nomor Transaksi <span class="font-semibold">TRN-8921028</span>
          </div>
          <div class="text-gray-500 text-sm">
            dipesan pada tanggal 19/04/2021
          </div>
        </div>

        <div class="">
          <div>
            Status
            <span class="text-yellow-500 font-semibold">Belum di bayar</span>
          </div>
          <div class="font-bold text-green-700">Rp. 8000.000</div>
        </div>

        <div class="my-auto">
          <nuxt-link
            to=""
            class="py-1 px-2 rounded bg-ungusuez text-white hover:bg-purple-700"
            >Lihat detail</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {},
  mounted() {},
  methods: {},
}
</script>
