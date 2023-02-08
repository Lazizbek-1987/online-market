<template>
    <div class="mb-16">
        <div class="flex justify-center text-lg mb-11 items-center font-bold">
            <h1>Успейте <span class="text-white bg-primary pr-40 py-1">купить</span></h1>
        </div>
        <div class="block lg:flex justify-center w-full container gap-8 mx-auto">
            <div class="w-full">
                <the-big-card/>
            </div>
            <div class="flex flex-wrap justify-center container gap-8 mx-auto">
                <app-card
                    v-for="(product, index) in toBuyProducts"
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
import TheBigCard from "./TheBigCard.vue";
import AppCard from "./AppCard.vue";

export default {
    name: "TimeToBuy",
    components: {AppCard, TheBigCard},
    data() {
        return {
            toBuyProducts: [
                {id: 1, type: 'Texnika', title: 'Kolonka', price: 175000},
                {id: 2, type: 'Kompyuter', title: 'Notebook', price: 1000000},
                {id: 3, type: 'Kiyim-kechak', title: 'Kuylak', price: 175000},
                {id: 4, type: 'Aksessuar', title: 'Bluetooth', price: 50000},
                {id: 5, type: 'Texnika', title: 'Xolodolnik', price: 7500000},
                {id: 6, type: 'Texnika', title: 'Konditsioner', price: 4500000},
                // {id: 7, type: 'Texnika', title: 'Kolonka', price: 150000},
                // {id: 8, type: 'Texnika', title: 'Kolonka', price: 200000},
            ]
        }
    }
}
</script>

<style scoped>

</style>