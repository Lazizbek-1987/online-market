<template>
    <div class="container mx-auto overflow-hidden">
        <app-breadcrumb/>
        <div class="space-y-8 mb-8">
            <h1 class="font-bold text-4xl">Избранное</h1>
            <div class="flex space-x-8">
                <h1>Сортировать:</h1>
                <ul class="flex items-center space-x-8">
                    <li class="cursor-pointer">по популярности</li>
                    <li class="cursor-pointer text-[#553280]">по цене</li>
                    <li class="cursor-pointer text-[#553280]">по рейтингу и цене</li>
                    <li class="cursor-pointer text-[#553280]">по размеру скидки</li>
                    <li class="space-x-2 items-center">
                        <input type="checkbox" id="offer" class="cursor-pointer">
                        <label for="offer" class="cursor-pointer">Предложения в моём регионе</label>
                    </li>
                </ul>
            </div>

            <div>
                <div class="flex items-center space-x-8">
                    <div class="flex justify-between items-center px-4 py-3 rounded space-x-3 bg-gray-200">
                        <input type="checkbox" class="accent-primary w-5 h-5">
                        <select name="" id="" class="text-xl bg-gray-200 outline-0">
                            <option value="" selected>Все товары</option>
                            <option value="">товары</option>
                        </select>
                    </div>


                    <div class="flex space-x-3">
                        <img class="px-3 py-3 border border-gray-300 rounded" src="../components/icons/sale.svg"
                             alt="">
                        <img class="px-3 py-3 border border-gray-300 rounded" src="../components/icons/trash.svg"
                             alt="">
                    </div>
                </div>
            </div>

        </div>

        <div class="flex justify-between container mx-auto space-x-3">

            <div class="w-2/3">
                <h1 class="block font-bold text-3xl pb-6">Всего 4 товара</h1>
                <div v-for="basket in 4" class="flex mb-4 items-start pt-4 pl-4 space-x-3 border rounded border-gray-200">
                    <input type="checkbox" class="accent-primary w-5 h-5">
                    <app-basket-card/>
                </div>
            </div>

            <div class="w-1/3 mt-20">
                <app-select-payment/>
            </div>
        </div>

    </div>
</template>

<script>
import AppBreadcrumb from "../components/AppBreadcrumb.vue";
import AppBasketCard from "../components/AppBasketCard.vue";
import AppSelectPayment from "../components/AppSelectPayment.vue";

export default {
    name: "FavoritesPage",
    components: {AppSelectPayment, AppBasketCard, AppBreadcrumb}
}
</script>

<style scoped>

</style>