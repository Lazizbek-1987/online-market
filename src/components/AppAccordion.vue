<template>
    <div
        class="relative w-[370px] shadow-sm px-6 py-4 rounded bg-white items-center overflow-hidden"
        v-for="(accordion, index) in 6"
    >

        <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
        <div class="bg-white h-12 w-full flex items-center">
            <h1 class="text-xl font-semibold">Познакомьтесь со своими продавцами</h1>
        </div>

        <!--Arrow Icon-->
        <div class="peer-checked:rotate-180 absolute top-7 right-3 items-center transition-transform duration-500">
            <ArrowSmallDownIcon class="w-7 h-7 p-1 bg-primary rounded-full text-gray-700"/>
        </div>

        <!--        Content-->
        <div
            class="overflow-hidden transition-all duration-500 peer-checked:mt-3 rotate-0 max-h-0 peer-checked:max-h-screen peer-checked:border-t">
            <div class="space-y-6 items-center">
                <div class="flex justify-between items-center">
                    <div>
                        <img class="w-16 h-16" src="./icons/SiteLogo.svg" alt="">
                    </div>
                    <div>
                        <h1>Makeawishcandle</h1>
                        <h1>Владелец: MakeAWishCandleCo</h1>
                    </div>
                </div>
                <button
                    class="w-full border-2 border-gray-400 py-2 rounded hover:border-primary hover:text-primary
                    duration-500 text-xl text-gray-400 font-bold"
                >
                    Написать сообщение
                </button>

                <p class="text-center pb-6">Этот продавец обычно отвечает в течение нескольких часов</p>
            </div>
        </div>

    </div>
</template>

<script>
import {ArrowSmallDownIcon} from '@heroicons/vue/24/outline'
import AppButton from "./AppButton.vue";
import AppStar from "./AppStar.vue";

export default {
    name: "AppAccordion",
    components: {AppStar, AppButton, ArrowSmallDownIcon}
}
</script>

<style scoped>

</style>