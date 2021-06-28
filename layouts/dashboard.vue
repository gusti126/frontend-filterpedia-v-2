<template>
  <div class="font-poppins">
    <div class="bg-blue-100 min-h-screen">
      <navbar />
      <nav-mobile />
      <div class="md:px-20 px-2">
        <div class="grid grid-cols-12 grid-flow-row mt-6 gap-4">
          <!-- sidebar -->
          <div class="col-span-3">
            <sidebar />
          </div>
          <!-- endsidebar -->
          <!-- content -->
          <div class="col-span-9">
            <Nuxt />
          </div>
          <!-- endcontent -->
        </div>
      </div>
      <div class="mt-60">
        <botfooter nameImage="logo.png" />
      </div>
    </div>
  </div>
</template>
    