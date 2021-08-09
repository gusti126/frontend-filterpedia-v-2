<template>
  <div>
    <div class="bg-white w-full min-h-full p-6 rounded-xl">
      <div class="text-xl font-semibold">Tagihan anda</div>

      <!-- Skeleton -->
      <div
        class="border border-blue-300 rounded-md p-2 mt-4 w-full mx-auto"
        v-for="p of 4"
        v-if="loading"
      >
        <div class="animate-pulse flex">
          <div
            class="
              h-16
              bg-blue-400
              rounded
              text-center text-xl
              font-medium
              text-blue-800
              w-full
            "
          >
            <div class="mt-4 flex-wrap content-center">sedang memuat data</div>
          </div>
        </div>
      </div>
      <!-- endSkeleton -->

      <div
        class="border py-2 px-4 rounded mt-4 md:flex justify-between"
        v-for="t in item"
        :key="t.id"
        v-if="!loading"
      >
        <div>
          <div>
            Nomor Transaksi
            <span class="font-semibold">{{ t.transaction_code }}</span>
          </div>
          <div class="text-gray-500 text-sm">
            dipesan pada tanggal {{ t.transaction_date }}
          </div>
        </div>

        <div class="">
          <div>
            Status
            <span class="text-yellow-500 font-semibold">{{
              t.status_transaksi
            }}</span>
          </div>
          <div class="font-bold text-green-700">
            Rp.{{ t.sub_total_price | currency }}
          </div>
        </div>

        <div class="md:my-auto mt-4">
          <nuxt-link
            :to="'/checkout/berhasil/' + t.id"
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
  data() {
    return {
      item: [],
      loading: true,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      let response = await this.$axios.get('/transactions').then((ress) => {
        this.item = ress.data.data
        this.loading = false
      })
    },
  },
}
</script>
