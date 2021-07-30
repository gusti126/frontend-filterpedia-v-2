<template>
  <div>
    <!-- Kumpulan  -->
    < />
    <!-- endKumpulan  -->
    <navbar :navScroll="100" />
    <!-- loading skeleton  -->
    <div class="animate-pulse md:px-20 px-6 mt-6" v-show="load">
      <div class="bg-blue-400 h-8 rounded mb-4 md:w-96"></div>
      <div class="flex">
        <div
          class="
            bg-blue-400
            h-28
            md:mr-6 md:w-72
            w-full
            rounded
            flex flex-wrap
            content-center
          "
        >
          <div class="text-blue-700 font-semibold text-center text-lg mx-auto">
            Sedang loading sebentar
          </div>
        </div>
        <div class="my-auto hidden md:block">
          <div class="bg-blue-400 h-6 mr-6 md:w-96 rounded mb-2"></div>
          <div class="bg-blue-400 h-6 mr-6 md:w-96 rounded mb-2"></div>
          <div class="bg-blue-400 h-6 mr-6 md:w-96 rounded mb-2"></div>
        </div>
      </div>
      <div class="bg-blue-400 md:w-44 h-6 mt-4 rounded"></div>
      <div class="grid grid-flow-row grid-cols-12 gap-4 mt-4">
        <div class="col-span-6 md:col-span-4" v-for="n of 9">
          <div class="bg-blue-400 h-6 rounded"></div>
        </div>
      </div>
    </div>
    <!-- endloading skeleton  -->

    <div class="md:px-20 px-2 pb-10" v-show="!load">
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

      <div class="grid grid-flow-row grid-cols-12 gap-4">
        <!-- detail penerima -->
        <div class="col-span-12 md:col-span-8">
          <div class="rounded border w-full p-3">
            <!-- detail profile pembeli -->
            <div v-show="!ubah.profile">
              <div class="font-semibold text-gray-800">Profile Anda</div>
              <div class="p-2 bg-gray-100 rounded mt-4 w-full md:flex">
                <div>
                  <span>Nama : {{ this.$store.state.auth.user.name }} </span>
                  <br />
                  <span
                    >No Telepon :
                    {{
                      this.$store.state.auth.user.user_detail.handphone
                    }}</span
                  >
                </div>
                <div
                  class="
                    ml-auto
                    md:my-auto
                    cursor-pointer
                    hover:text-blue-700
                    inline-block
                    mt-4
                  "
                  @click="editProfile"
                >
                  <div class="bg-white px-3 py-1 rounded flex text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Edit</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- enddetail profile pembeli -->

            <!-- edit detail profile pembeli -->
            <div v-show="ubah.profile">
              <div class="font-semibold text-gray-800">Ubah Profile</div>
              <div class="p-2 bg-gray-100 rounded mt-4 w-full">
                <div>
                  <span>Nama </span>
                  <div>
                    <input
                      type="text"
                      class="border text-sm py-1 w-full rounded mt-2 px-2"
                      v-model="user.nama"
                    />
                  </div>
                  <br />
                  <span>No Telepon </span>
                  <div>
                    <input
                      type="number"
                      class="border text-sm py-1 w-full rounded mt-2 px-2"
                      v-model="user.phone"
                    />
                  </div>
                </div>
                <div class="">
                  <div
                    class="
                      mt-4
                      inline-block
                      ml-auto
                      my-auto
                      cursor-pointer
                      hover:text-blue-700
                    "
                    @click="hendleCancleUpdate"
                  >
                    <div
                      class="
                        border border-blue-700
                        text-blue-700 text-center
                        rounded
                        inline-block
                        px-3
                        mr-4
                        hover:bg-blue-700 hover:text-white
                      "
                    >
                      Cancle
                    </div>
                  </div>
                  <div
                    class="
                      mt-4
                      inline-block
                      ml-auto
                      my-auto
                      cursor-pointer
                      hover:text-blue-700
                    "
                    @click="hendleUpdate"
                  >
                    <div
                      class="
                        hover:bg-purple-700
                        bg-blue-800
                        text-white text-center
                        rounded
                        inline-block
                        px-3
                      "
                    >
                      Simpan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- endedit detail profile pembeli -->

            <!-- detail alamat pengiriman -->
            <div v-show="!ubah.pengiriman">
              <div class="font-semibold text-gray-800 mt-4">
                Alamat Pengiriman
              </div>
              <div class="p-2 bg-gray-100 rounded mt-4 md:flex w-full">
                <div>
                  <span> {{ pengiriman.alamat }} </span> <br />
                  <span>Provinsi : </span>
                  <span v-for="p in provinsi" :key="p.id">
                    <span v-if="p.id == provinsi_id"
                      >{{ p.provinsi_name }},</span
                    >
                  </span>
                  <span>Kota : </span>
                  <span v-for="k in kota" :key="k.id">
                    <span v-if="k.id == pengiriman.kota_id"
                      >{{ k.nama_kota }},</span
                    >
                  </span>
                  <span>Kode Pos : {{ pengiriman.kode_pos }}</span>
                </div>
                <div
                  class="ml-auto inline-block mt-4 md:my-auto cursor-pointer"
                  @click="editPengiriman"
                >
                  <div class="bg-white px-3 py-1 rounded flex text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Edit</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- enddetail alamat pengiriman -->

            <!-- update alamat pengiriman -->
            <div v-show="ubah.pengiriman">
              <div class="font-semibold text-gray-800 mt-4">
                Alamat Pengiriman
              </div>
              <div class="p-2 bg-gray-100 rounded mt-4 w-full">
                <div>
                  <div><label for="alamat">Alamat</label></div>
                  <div>
                    <textarea
                      name=""
                      id="alamat"
                      rows="2"
                      class="w-full px-2 border rounded text-sm py-1"
                      v-model="pengiriman.alamat"
                    ></textarea>
                  </div>

                  <!-- data provinsi -->
                  <div class="mb-1"><label for="provinsi">Provinsi</label></div>
                  <select
                    name="provinsi"
                    id="Provinsi"
                    class="
                      border
                      rounded
                      focus:outline-none
                      px-4
                      py-1
                      w-full
                      md:text-sm
                      focus:border-blue-500 focus:text-blue-500
                    "
                    v-model="provinsi_id"
                  >
                    <option
                      v-for="a in provinsi"
                      :key="a.id"
                      :value="a.id"
                      :selected="provinsi_id === a.id"
                    >
                      {{ a.provinsi_name }}
                    </option>
                  </select>
                  <!-- enddata provinsi -->

                  <!-- data kota -->
                  <div class="mt-2">
                    <label for="Kota">Kota </label>
                  </div>
                  <select
                    name=""
                    id="Kota"
                    class="
                      border
                      rounded
                      focus:outline-none
                      px-4
                      py-1
                      w-full
                      text-sm
                      focus:border-blue-500 focus:text-blue-500
                      mb-2
                    "
                    v-model="pengiriman.kota_id"
                  >
                    <option
                      v-for="(city, index) in kota"
                      :key="index"
                      :value="city.id"
                      :selected="pengiriman.kota_id === city.id"
                    >
                      {{ city.nama_kota }}
                    </option>
                  </select>
                  <!-- enddata kota -->

                  <label for="kode_pos" class="">Kode Pos</label>
                  <input
                    type="number"
                    class="border rounded text-sm px-2 py-1 w-full"
                    id="kode_pos"
                    v-model="pengiriman.kode_pos"
                  />
                </div>
                <div class="flex">
                  <div
                    class="inline-block mt-4 md:my-auto cursor-pointer"
                    @click="hendleCancleUpdate"
                  >
                    <div
                      class="
                        text-blue-700
                        px-3
                        mr-4
                        mt-4
                        rounded
                        flex
                        border border-blue-700
                      "
                    >
                      <span>Cancle</span>
                    </div>
                  </div>
                  <div
                    class="inline-block mt-4 md:my-auto cursor-pointer"
                    @click="hendleUpdate"
                  >
                    <div class="text-white px-3 mt-4 rounded flex bg-blue-700">
                      <span>Simpan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- endupdate alamat pengiriman -->

            <!-- detail metode pembayaran -->
            <div class="font-semibold text-gray-800 mt-4">
              Pilih Metode Pembayaran
            </div>
            <div class="rounded mt-2 w-full">
              <select
                name=""
                id=""
                class="bg-white px-3 py-1 border rounded w-full"
              >
                <option value="">Transfer Bank BCA</option>
                <option value="">Transfer Bank BNI</option>
              </select>
              <span class="text-blue-600 text-xs ml-4"
                >Lihat Cara Bayar disini</span
              >
            </div>
            <!-- enddetail metode pembayaran  -->
          </div>
        </div>
        <!-- detail penerima -->

        <!-- detail orderan -->
        <div class="md:col-span-4 col-span-12 border rounded p-3">
          <div>
            <div class="font-semibold mb-5">Orderan Kamu</div>
            <hr class="mb-5" />
            <div class="flex" v-for="item in items" :key="item.id">
              <div>
                <img
                  :src="item.products[0].imageurl"
                  alt=""
                  class="w-28 mr-4 mb-6 rounded"
                />
              </div>
              <div>
                <div class="">{{ item.products[0].product_name }}</div>
                <div>
                  <span class="text-gray-600 text-sm my-2"
                    >Jumlah {{ item.qty }}</span
                  >
                </div>
                <div class="">
                  <span class="text-green-700 text-sm font-semibold">
                    Rp. {{ item.total_price | currency }}
                  </span>
                </div>
              </div>
            </div>
            <hr class="mb-5" />
            <div class="w-full flex justify-between text-sm">
              <div>Biaya Pengiriman :</div>
              <div>
                <span class="font-semibold ml-auto">Rp. 900.000</span>
              </div>
            </div>
            <div class="w-full flex justify-between text-sm mt-2">
              <div>Pajak PPN :</div>
              <div>
                <span class="font-semibold ml-auto">10%</span>
              </div>
            </div>
            <div class="w-full flex justify-between text-sm mt-2">
              <div>Total :</div>
              <div>
                <span class="font-semibold ml-auto"
                  >Rp.{{ total | currency }}</span
                >
              </div>
            </div>
            <hr class="mb-5 mt-5" />
            <div
              class="
                bg-ungusuez
                hover:bg-purple-800
                block
                text-white text-center
                py-2
                rounded
                cursor-pointer
              "
            >
              Buat Transaksi
            </div>
          </div>
        </div>
        <!-- end detail orderan -->
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
  data() {
    return {
      ubah: {
        profile: false,
        pengiriman: false,
      },
      user: {
        nama: this.$store.state.auth.user.name,
        phone: this.$store.state.auth.user.user_detail.handphone,
      },
      pengiriman: {
        alamat: this.$store.state.auth.user.user_detail.alamat,
        provinsi_id: this.$store.state.auth.user.user_detail.provinsi_id,
        kota_id: this.$store.state.auth.user.user_detail.kota_id,
        kode_pos: this.$store.state.auth.user.user_detail.kode_pos,
      },

      provinsi: [],
      provinsi_id: this.$store.state.auth.user.user_detail.provinsi_id,
      kota: [],
      // initial laoding before success response api
      load: true,
      items: [],
      biayaPengiriman: null,
      total: null,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      let items = this.$axios.get('/cart').then((ress) => {
        // console.log(ress.data.data)
        this.items = ress.data.data
        console.log(ress)
        this.total = ress.data.harga_total
        console.log(this.items)
      })
      let provin = await this.$axios.get('/provinsi').then((ress) => {
        this.provinsi = ress.data.data
        console.log(ress)
        console.log(this.provinsi)
      })
      let kota = await this.$axios
        .get('/provinsi/' + this.provinsi_id)
        .then((ress) => {
          this.kota = ress.data.data.kota
          console.log(this.kota)
          console.log('kota in up')
          // berhentikan loading
          this.load = false
        })
    },

    async hendleUpdate() {
      let formData = new FormData()
      formData.append('name', this.user.nama)
      formData.append('alamat', this.pengiriman.alamat)
      formData.append('provinsi_id', this.provinsi_id)
      formData.append('kota_id', this.pengiriman.kota_id)
      formData.append('kode_pos', this.pengiriman.kode_pos)
      formData.append('handphone', this.user.phone)
      this.$store.commit('setLoading', true)
      let item = await this.$axios.post('/profile', formData).then((ress) => {
        this.$auth.fetchUser()
        console.log(ress)
        this.$store.commit('setLoading', false)
        this.ubah.pengiriman = false
        this.ubah.profile = false
        // Use sweetalert2
        this.$swal({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Profile berhasil di update',
          showConfirmButton: false,
          timer: 2000,
        })
      })
      this.ubah.pengiriman = false
      this.ubah.profile = false
    },
    editPengiriman() {
      if (this.ubah.pengiriman) {
        this.ubah.pengiriman = false
      } else {
        this.ubah.pengiriman = true
      }
    },
    editProfile() {
      if (this.ubah.profile) {
        this.ubah.profile = false
      } else {
        this.ubah.profile = true
      }
    },
    hendleCancleUpdate() {
      this.ubah.profile = false
      this.ubah.pengiriman = false
    },
  },

  watch: {
    provinsi_id: function (val) {
      console.log(this.provinsi_id)
      this.getData()
    },
  },
}
</script>
