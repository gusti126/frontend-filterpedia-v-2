<template>
  <div>
    <!-- content -->
    <div class="bg-white w-full min-h-full p-6 rounded-xl">
      <div class="grid grid-cols-12 grid-flow-row gap-4 mt-6">
        <div class="col-span-12 md:col-span-4 md:col-start-3">
          <div>
            <label for="Email">Ganti Email</label>
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
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            :value="this.$store.state.auth.user.email"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Phone">Nama PT</label>
          </div>
          <input
            type="text"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            value="PT Garuda Cyber"
          />
        </div>
        <div class="col-span-12 md:col-span-4 md:col-start-3">
          <div>
            <label for="Email">Ganti Password</label>
          </div>
          <input
            type="password"
            id="Email"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            value="lisa@ciptaanekaair.co.id"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <div>
            <label for="Email">Konfirmasi Password</label>
          </div>
          <input
            type="password"
            id="Email"
            class="
              border border-gray-300
              rounded-2xl
              focus:outline-none
              px-4
              py-1
              w-full
              md:text-sm
              focus:border-blue-500 focus:text-blue-500
            "
            value="lisa@ciptaanekaair.co.id"
          />
        </div>

        <div class="col-span-12 md:col-span-4 text-center md:col-start-3">
          <button
            class="
              bg-blue-600
              hover:bg-indigo-700
              text-white text-sm
              px-5
              py-2
              w-full
              rounded-2xl
            "
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
    <!-- endcontent -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  head() {
    return {
      title: 'Pengaturan Akun Lisa Blackpink',
    }
  },
}
</script>
