<template>
    <div class="space-y-4 my-16 container items-center mx-auto">
        <div class="text-lg -ml-20 mb-12 items-center font-bold">
            <h1><span class="text-white bg-primary pl-40 py-1">Популярные</span> товары</h1>
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
</template>

<script>
import AppCard from "./AppCard.vue";
export default {
    name: "PopularProducts",
    components: {AppCard},
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