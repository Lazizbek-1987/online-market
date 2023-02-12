<template>
    <div class="w-full container overflow-hidden mx-auto">
        <app-breadcrumb/>

        <div class="flex justify-between space-x-8">
            <app-category-link/>

            <div class="w-4/5 space-y-10">
                <app-product-catalog v-for="catalog in 3"/>
            </div>
        </div>

    </div>

    <div class="bg-gray-100 mt-24 py-6">
        <div class="space-y-4 my-16 container overflow-hidden items-center mx-auto">
            <div class="text-lg  mb-12 items-center font-bold">
                <h1>Вы <span class="text-white bg-primary pr-24 py-1">смотрели</span></h1>
            </div>
            <div class="flex flex-wrap justify-center container gap-8 mx-auto">
                <app-card
                    v-for="(product, index) in popularProducts"
                    :key="index"
                    :type="product.type"
                    :title="product.title"
                    :price="product.price"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {ChevronDownIcon} from '@heroicons/vue/24/outline'
import AppCard from "../components/AppCard.vue";
import AppProductCatalog from "../components/AppProductCatalog.vue";
import AppCategoryLink from "../components/AppCategoryLink.vue";
import AppBreadcrumb from "../components/AppBreadcrumb.vue";

export default {
    name: "CategoryPage",
    components: {AppBreadcrumb, AppCategoryLink, AppProductCatalog, AppCard, ChevronDownIcon},
    data() {
        return {
            popularProducts: [
                {type: 'Texnika', title: 'Kolonka', price: 175000},
                {type: 'Kompyuter', title: 'Notebook', price: 1000000},
                {type: 'Kiyim-kechak', title: 'Kuylak', price: 175000},
                {type: 'Aksessuar', title: 'Bluetooth', price: 50000},
                {type: 'Texnika', title: 'Xolodolnik', price: 7500000},
                {type: 'Texnika', title: 'Konditsioner', price: 4500000},
                {type: 'Texnika', title: 'Kolonka', price: 150000},
                {type: 'Texnika', title: 'Kolonka', price: 200000},
            ]
        }
    }
}
</script>

<style scoped>

</style>