<template>
  <div>
    <div class="grid col-span-4 md:grid-cols-12 grid-flow-row mt-10 px-4">
      <div class="col-span-4 md:col-span-8 md:col-start-3">
        <div class="text-gray-700 font-medium text-center text-xl md:text-3xl">
          Belanja kebutuhan Air, <br />
          menjadi lebih mudah
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-5 md:mt-8">
        <div>
          <label for="Nama">Nama Lengkap</label>
        </div>
        <div>
          <input
            type="text"
            id="Nama"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500
              focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Email">Email</label>
        </div>
        <div>
          <input
            type="text"
            id="Email"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500
              focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Password">Password</label>
        </div>
        <div>
          <input
            type="password"
            id="Password"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500
              focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div>
          <label for="Ulangi Password">Ulangi Password</label>
        </div>
        <div>
          <input
            type="password"
            id="Ulangi Password"
            class="
              focus:outline-none
              rounded-lg
              py-2
              mt-3
              border-2
              focus:border-blue-500
              focus:text-blue-800
              px-2
              w-full
              bg-gray-100
            "
          />
        </div>
      </div>
      <div class="col-span-4 md:col-start-5 mt-8">
        <div class="mt-4">
          <nuxt-link
            to="/"
            class="
              block
              w-full
              text-white
              rounded-lg
              hover:bg-purple-700
              bg-blue-700
              py-2
              text-center
            "
            >Register</nuxt-link
          >
        </div>
        <div class="mt-4 mb-20">
          <nuxt-link
            to="/register"
            class="
              block
              w-full
              text-white
              rounded-lg
              hover:bg-purple-700
              bg-gray-400
              py-2
              text-center
            "
            >Login</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>