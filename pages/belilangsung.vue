<template>
    <div>
        <navbar />
        <div class="md:px-20 px-2 ">
            <div class=" mt-4 p-4 flex">
                <div>
                    <img src="~/assets/icon/buy-button 1.png" alt="icon" class="w-20 mr-6">
                </div>
                <div class="text-xl my-auto text-gray-500 ">Halaman terakhir <br> untuk proses pembelian anda</div>
            </div>
            <div class="mt-4 text-gray-600 font-semibold text-xl">
                Produk yang di beli
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
}
</script>