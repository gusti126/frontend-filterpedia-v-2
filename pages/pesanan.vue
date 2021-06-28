<template>
<div>
  <!-- content -->
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
              focus:border-blue-500
              focus:text-blue-500
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
              focus:border-blue-500
              focus:text-blue-500
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
              focus:border-blue-500
              focus:text-blue-500
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
              focus:border-blue-500
              focus:text-blue-500
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
              focus:border-blue-500
              focus:text-blue-500
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
              focus:border-blue-500
              focus:text-blue-500
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
    <!-- endcontent -->
    
</div>
  
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>