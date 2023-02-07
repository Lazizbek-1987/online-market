<template>
    <div class="space-y-4 my-16 container items-center mx-auto">
        <div class="text-lg -ml-20 mb-12 items-center font-bold">
            <h1><span class="text-white bg-primary pl-40 py-1">Новые</span> товары</h1>
        </div>
        <div class="flex flex-wrap justify-center container gap-8 mx-auto">
            <app-card
                class="space-y-4"
                v-for="product in Products"
                :key="product.id"
                :type="product.type"
                :title="product.title"
                :price="product.price"
                @addProductToCard="addCard(product)"
            />
        </div>
    </div>
</template>

<script>
import AppCard from "./AppCard.vue";

export default {
    name: "NewProducts",
    components: {AppCard},
    data() {
        return {
            orderCard: [],
            Products: [
                {id: 1, type: 'Texnika', title: 'Kompyuter i7', price: 250000},
                {id: 2, type: 'Kiyim', title: 'Futbolka', price: 150000},
                {id: 3, type: 'Texnika', title: 'Velosiped', price: 900000},
                {id: 4, type: 'Texnika', title: 'Kompyuter i7', price: 250000},
                {id: 5, type: 'Texnika', title: 'Kompyuter i7', price: 250000},
                {id: 6, type: 'Kiyim', title: 'Futbolka', price: 150000},
                {id: 7, type: 'Texnika', title: 'Velosiped', price: 900000},
                {id: 8, type: 'Texnika', title: 'Kompyuter i7', price: 250000},
            ],
            count: 0,
        }
    },
    computed: {
        count() {
            return this.orderCard.length
        }
    },
    methods: {
        addCard(data) {
            this.orderCard.push({
                type: data.type,
                title: data.title,
                price: data.price
            })
        }
    }
}
</script>

<style scoped>

</style>