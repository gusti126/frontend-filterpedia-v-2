<template>
  <div class="font-poppins bg-blue-100 min-h-screen">
    <!-- loading state -->
    <div
      class="
        fixed
        top-0
        left-0
        z-50
        w-screen
        h-screen
        flex
        items-center
        justify-center
      "
      style="background: rgba(0, 0, 0, 0.3)"
      v-show="this.$store.state.loading"
    >
      <div
        class="bg-white border py-2 px-5 rounded-lg flex items-center flex-col"
      >
        <div class="loader-dots block relative w-20 h-5 mt-2">
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
          <div
            class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"
          ></div>
        </div>
        <div class="text-gray-500 text-xs font-light mt-2 text-center">
          memuat data sebentar....
        </div>
      </div>
    </div>
    <!-- endloading state -->
    <div class="bg-blue-100 pb-44 md:pb-0">
      <navbar :navScroll="140" />
      <nav-mobile />
      <div class="md:px-20 px-2">
        <div class="grid grid-cols-12 grid-flow-row mt-6 gap-4">
          <!-- sidebar -->
          <div class="md:col-span-3 hidden md:block mt-4">
            <sidebar />
          </div>
          <!-- endsidebar -->
          <!-- content -->
          <div class="col-span-12 md:col-span-9 mt-4">
            <Nuxt />
          </div>
          <!-- endcontent -->
        </div>
      </div>
    </div>
    <div class="md:mt-60">
      <botfooter nameImage="logo.png" />
    </div>
  </div>
</template>

<style scoped>
.loader-dots div {
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader-dots div:nth-child(1) {
  left: 8px;
  animation: loader-dots1 0.6s infinite;
}
.loader-dots div:nth-child(2) {
  left: 8px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(3) {
  left: 32px;
  animation: loader-dots2 0.6s infinite;
}
.loader-dots div:nth-child(4) {
  left: 56px;
  animation: loader-dots3 0.6s infinite;
}
@keyframes loader-dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader-dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader-dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
