<template>
    <div class="flex justify-between space-x-12">
        <div class="w-3/4">
            <div class="flex justify-between">
                <div class="space-y-4">
                    <div class="w-[400px]">
                        <img src="../assets/images/cardProduct.png" alt="">
                    </div>
                    <div class="flex justify-between w-[400px]">
                        <img
                            v-for="img in 4"
                            class="w-16 opacity-75 cursor-pointer hover:opacity-100 border-2 hover:border-primary duration-500"
                            src="../assets/images/cardProduct.png"
                            alt=""
                        >
                    </div>
                </div>
                <div>
                    <div class="space-y-6">
                        <p class="font-bold text-4xl">New Year Candle, Christmas Gift Idea</p>
                        <div class="flex space-x-3 items-center">
                            <span class="text-lg text-gray-600">Состояние товара: </span>
                            <span class="text-lg text-gray-800">Новый</span>
                            <span class="p-1 bg-gray-500 rounded-full cursor-pointer hover:scale-110 duration-500">
                                <XMarkIcon class="w-5 h-5 text-white"/>
                            </span>
                        </div>
                        <div class="flex gap-3">
                            <h1 class="px-6 py-2 cursor-pointer border-2 rounded border-gray-400 hover:border-primary duration-500">
                                Новый
                            </h1>
                            <h1 class="px-6 py-2 cursor-pointer border-2 rounded border-gray-400 hover:border-primary duration-500">
                                Уцененный
                            </h1>
                        </div>
                        <div class="space-y-2">
                            <h1>Коротко о товаре</h1>
                            <ul class="w-72 pl-4">
                                <li class="list-disc">Handmade</li>
                                <li class="list-disc">Handmade</li>
                                <li class="list-disc">Handmade</li>
                                <li class="list-disc">Доступно только 4 штуки, и сейчас это есть у более 20 человек</li>
                            </ul>
                        </div>

                        <app-star :title="'отзывов'" :likes="245"/>

                    </div>
                </div>
            </div>
            <div class="space-y-4 pt-8">
                <app-reviews/>
                <app-comment v-for="comment in 2"/>
            </div>
        </div>

        <div class="w1/4">
            <div class="flex-1 space-y-4">
                <app-product-courier-card />
                <app-accordion/>
            </div>
        </div>
    </div>

    <new-products />
</template>

<script>
import {XMarkIcon} from '@heroicons/vue/24/outline'
import AppComment from "./AppComment.vue";
import AppReviews from "./AppReviews.vue";
import AppStar from "./AppStar.vue";
import AppAccordion from "./AppAccordion.vue";
import AppProductCourierCard from "./AppProductCourierCard.vue";
import NewProducts from "./NewProducts.vue";

export default {
    name: "CardProduct",
    components: {
        NewProducts,
        AppProductCourierCard,
        AppAccordion,
        AppStar,
        AppReviews,
        AppComment,
        XMarkIcon,
    },
}
</script>

<style scoped>

</style>