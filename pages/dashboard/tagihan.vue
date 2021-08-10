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
        class="border py-2 px-4 rounded mt-4"
        v-for="t in item"
        :key="t.id"
        v-if="!loading"
      >
        <div class="md:flex justify-between mb-4">
          <div>
            <div>
              Nomor Transaksi
              <span class="font-semibold">{{ t.transaction_code }}</span>
            </div>
            <div class="text-gray-500 text-sm">
              dipesan pada tanggal {{ t.transaction_date }}
            </div>
          </div>

          <div class="md:text-right mt-4 md:mt-0">
            <div>
              Status
              <span
                class="font-semibold"
                :class="t.status === 6 ? 'text-red-500' : 'text-yellow-500'"
                >{{ t.status_transaksi }}</span
              >
            </div>
            <div class="font-bold text-green-700">
              Rp.{{ t.sub_total_price | currency }}
            </div>
          </div>
        </div>

        <div class="md:my-auto mt-4 flex justify-between">
          <div
            class="
              py-1
              px-2
              border
              text-sm
              border-red-600
              text-red-600
              hover:text-white hover:bg-red-600
              rounded
              inline-block
              cursor-pointer
            "
            @click="confirmCancle(t.id, t.status_transaksi)"
          >
            Batalkan
          </div>
          <nuxt-link
            :to="'/checkout/berhasil/' + t.id"
            class="
              py-1
              px-3
              rounded
              bg-ungusuez
              border
              text-sm
              border-ungusuez
              text-white
              hover:border-purple-700 hover:bg-purple-700
            "
            ><span v-if="t.status == 0">Bayar</span>
            <span v-if="t.status !== 0">Detail</span></nuxt-link
          >
        </div>
      </div>

      <!-- jika data kosong -->
      <div class="text-center mt-6" v-if="item.length < 1">
        <nuxt-link
          to="/"
          class="
            text-center text-lg
            font-semibold
            mt-8
            mx-auto
            bg-ungusuez
            text-white
            px-3
            py-1
            rounded
          "
          >Data Kosong</nuxt-link
        >
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
    console.log(this.item.length)
  },

  methods: {
    async getData() {
      let response = await this.$axios.get('/transactions').then((ress) => {
        this.item = ress.data.data
        this.loading = false
      })
    },

    confirmCancle(id, status) {
      console.log(status)
      if (status === 'Canceled') {
        this.$swal.fire({
          icon: 'info',
          title: 'Status transaksi dibatalkan',
          text: 'Status transaksi sudah di batalkan, anda bisa melakukan pemesanan lagi',
          confirmButtonText: `Ok`,
        })

        return
      }
      this.$swal
        .fire({
          title: 'Yakin batalkan pesanan',
          showCancelButton: true,
          confirmButtonText: `yakin`,
        })
        .then((result) => {
          console.log(result)
          console.log(result.dismiss)
          // console.log(id)
          if (result.isConfirmed) {
            console.log(result.isConfirmed)
            this.batalkan(id)
          }
        })
    },

    async batalkan(id) {
      this.$store.commit('setLoading', true)
      let response = await this.$axios
        .post('/cancel/transactions', {
          transaction_id: id,
        })
        .then((ress) => {
          this.getData()

          this.$swal({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Profile berhasil di update',
            showConfirmButton: false,
            timer: 1700,
          })
        })

      this.$store.commit('setLoading', false)
    },
  },
}
</script>
