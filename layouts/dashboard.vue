<template>
  <div class="font-poppins bg-blue-100 min-h-screen">
    <div class="bg-blue-100  pb-44 md:pb-0">
      <navbar />
      <nav-mobile />
      <div class="md:px-20 px-2">
        <div class="grid grid-cols-12 grid-flow-row mt-6 gap-4">
          <!-- sidebar -->
          <div class="md:col-span-3 hidden md:block">
            <sidebar />
          </div>
          <!-- endsidebar -->
          <!-- content -->
          <div class="col-span-12 md:col-span-9">
            <Nuxt />
          </div>
          <!-- endcontent -->
        </div>
      </div>
    </div>
    <div class="md:mt-60 ">
      <botfooter nameImage="logo.png" />
    </div>
  </div>
</template>
  