<template>
  <div class="bg-blue-100 min-h-screen">
    <navbar />
    <nav-mobile />
    <div class="md:px-20 px-2">
      <div class="grid grid-cols-12 grid-flow-row mt-6 gap-4">
        <!-- sidebar -->
        <div class="col-span-3">
          <div class="bg-white px-4 rounded-xl py-4 sticky top-4">
            <!-- header sidebar -->
            <div class="">
              <img
                src="~/assets/profile.jpg"
                alt="img-profile"
                class="rounded-full w-16 h-16 object-cover mx-auto"
              />
              <div class="font-semibold text-lg text-gray-800 mt-2 text-center">
                Lisa Blackpink
              </div>
            </div>
            <!-- endheader sidebar -->
            <!-- menu sidebar -->
            <nuxt-link to="dashboard-profile">
              <div class="mt-8 flex font-semibold text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div class="my-auto">Profile</div>
              </div>
            </nuxt-link>
            <nuxt-link to="dashboard-pesanan">
              <div
                class="
                  mt-6
                  flex
                  font-semibold
                  text-gray-500
                  mr-3
                  hover:text-blue-500
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <div class="my-auto">Pesanan saya</div>
              </div>
            </nuxt-link>
            <nuxt-link to="riwayat-pembelian">
              <div
                class="
                  mt-6
                  flex
                  font-semibold
                  text-gray-500
                  hover:text-blue-500
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <div class="my-auto">Riwayat Pembelian</div>
              </div>
            </nuxt-link>
            <nuxt-link to="setting">
              <div
                class="
                  mt-6
                  flex
                  font-semibold
                  text-gray-500
                  hover:text-blue-500
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="my-auto">Pengaturan</div>
              </div>
            </nuxt-link>
            <nuxt-link to="sign">
              <div
                class="
                  mt-6
                  flex
                  font-semibold
                  text-gray-500
                  hover:text-blue-500
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <div class="my-auto">Logout</div>
              </div>
            </nuxt-link>
            <!-- endmenu sidebar -->
          </div>
        </div>
        <!-- endsidebar -->
        <!-- content -->
        <div class="col-span-9">
          <div class="bg-white w-full min-h-full p-6 rounded-xl">
            <div>
              <img
                src="~/assets/profile.jpg"
                alt=""
                class="
                  rounded-full
                  h-36
                  w-36
                  object-cover
                  mx-auto
                  border-2 border-blue-500
                  p-2
                "
              />
            </div>
            <div class="grid grid-cols-12 grid-flow-row gap-4 mt-6">
              <div class="col-span-4">
                <div>
                  <label for="Nama">Nama</label>
                </div>
                <input
                  type="text"
                  id="Nama"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                  value="Lisa Blackpink"
                />
              </div>
              <div class="col-span-4">
                <div>
                  <label for="Email">Email</label>
                </div>
                <input
                  type="text"
                  id="Email"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                  value="lisa@ciptaanekaair.co.id"
                />
              </div>
              <div class="col-span-4">
                <div>
                  <label for="Phone">Phone</label>
                </div>
                <input
                  type="text"
                  id="Phone"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                  value="lisa@ciptaanekaair.co.id"
                />
              </div>
              <div class="col-span-4">
                <div>
                  <label for="Alamat">Alamat</label>
                </div>
                <input
                  type="text"
                  id="Alamat"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                  value="Pagedangan Kabupaten Tangerang"
                />
              </div>
              <div class="col-span-4">
                <div>
                  <label for="Provinsi">Provinsi</label>
                </div>
                <select
                  name=""
                  id="Provinsi"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                >
                  <option value="banten">Banten</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Jakarta">Jakarta</option>
                </select>
              </div>
              <div class="col-span-4">
                <div>
                  <label for="Kota">Kota</label>
                </div>
                <select
                  name=""
                  id="Kota"
                  class="
                    border border-gray-300
                    rounded-2xl
                    focus:outline-none
                    px-4
                    py-1
                    w-full
                    text-sm
                    focus:border-blue-500 focus:text-blue-500
                  "
                >
                  <option value="banten">Tangerang</option>
                  <option value="Bogor">Jakarta</option>
                  <option value="Jakarta">Bandung</option>
                </select>
              </div>
              <div class="col-span-4">
                <button
                  class="
                    bg-blue-600
                    hover:bg-indigo-700
                    text-white text-sm
                    px-5
                    py-2
                    rounded-2xl
                  "
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- endcontent -->
      </div>
    </div>
    <div class="mt-60">
      <botfooter nameImage="logo.png" />
    </div>
  </div>
</template>
