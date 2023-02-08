<template>
    <div
        class="w-[370px] shadow-sm rounded items-center overflow-hidden"
    >
        <div
            class="bg-white
            overflow-hidden
            transition-all
            duration-500
            ">
            <div class="p-6 space-y-5 items-center">
                <div class="space-y-2 items-center">
                    <h1 class="font-semibold text-gray-400 uppercase">Самая низкая цена</h1>
                    <h2>1 000 000 UZS</h2>
                </div>

                <div>
                    <div class="flex space-x-3 space-y-2 items-center">
                        <img class="w-5" src="./icons/car-icon.svg" alt="">
                        <h1><span class="text-[#553280]">Бесплатно курьером,</span> 2-3 дня</h1>
                    </div>
                    <div class="flex space-x-3 items-center">
                        <img class="w-5" src="./icons/plastic-card-icon.svg" alt="">
                        <h1>Картой на сайте/курьеру, наличными</h1>
                    </div>
                </div>
                <app-button />

                <div class="flex justify-between">
                    <h1 class="text-lg font-semibold tracking-widest uppercase">Яблочкo</h1>
                    <app-star :likes="5" :title="'отзывов'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ArrowSmallDownIcon} from '@heroicons/vue/24/outline'
import AppButton from "./AppButton.vue";
import AppStar from "./AppStar.vue";
export default {
    name: "AppProductCourierCard",
    components: {AppStar, AppButton, ArrowSmallDownIcon}
}
</script>

<style scoped>

</style>