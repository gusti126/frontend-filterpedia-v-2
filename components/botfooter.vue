<template>
  <footer class="bg-blue-700 hidden md:block w-full px-10 py-8 mt-8 text-white">
    <!-- head footer -->
    <div class="flex justify-between mb-6">
      <div>
        <div class="text-xl text-white font-medium">PT CIPTA ANEKA AIR</div>
        <div class="text-gray-300 text-sm mt-1">
          Water and Waste Water Treatment Engineering
        </div>
      </div>
      <div>
        <div class="text-lg text-white font-medium">Autorized Product</div>
        <div class="text-gray-200 text-sm mt-1">
          Water and Waste Water Treatment Engineering
        </div>
      </div>
    </div>
    <hr />
    <!-- endhead footer -->
    <!-- items -->
    <div class="flex mt-6">
      <div class="text-white">
        <div class="font-medium text-lg">Service</div>
        <div class="text-white text-sm mt-2 font-light">Online Help</div>
        <div class="text-white text-sm mt-2 font-light">Contact Us</div>
        <div></div>
      </div>
    </div>
    <!-- enditems -->
  </footer>
</template>
<script>
export default {
  props: {
    nameImage: String,
  },
}
</script>
