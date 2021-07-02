<template>
  <div class="md:px-20 px-2 h-screen">
    <div class="grid grid-cols-12 grid-flow-row gap-4 md:gap-10 h-full py-10 md:py-32">
      <div class="md:col-span-3 md:col-start-3 md:block hidden col-span-6 col-start-3
      ">
        <img src="~assets/login-hero.png" alt="" class="my-auto" />
      </div>
      <div class="md:col-span-4 md:col-start-7 col-span-10 col-start-2">
        <div class=" text-gray-700 text-xl md:text-3xl">
          Belanja kebutuhan Air, menjadi lebih mudah
        </div>
        <div class="mt-8">
            <label for="email" class="text-gray-600">Masukan Email</label>
        </div>
        <div>
            <input type="text" placeholder="Email ..." class="focus:outline-none rounded-lg py-2 mt-3 border-2 focus:border-blue-500 focus:text-blue-500 px-2 w-full bg-gray-100">
        </div>
        <div class="mt-4">
            <label for="email" class="text-gray-600">Password</label>
        </div>
        <div>
            <input type="password" placeholder="Masukan password ...." class="focus:outline-none rounded-lg py-2 mt-3 border-2 focus:border-blue-500 focus:text-blue-500 px-2 w-full bg-gray-100">
        </div>
        <div class="mt-4">
            <nuxt-link to="/" class="block w-full text-white rounded-lg hover:bg-purple-700 bg-blue-700 py-2 text-center">Login</nuxt-link>
        </div>
        <div class="mt-4 mb-20">
            <nuxt-link to="/register" class="block w-full text-white rounded-lg hover:bg-purple-700 bg-gray-400 py-2 text-center">Register</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>