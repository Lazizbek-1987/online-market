<template>
    <div class="flex justify-between space-x-8">
        <div class="w-full space-y-10">
            <div class="flex justify-between">
                <h1 class="font-bold text-lg">Каталог товаров категория 1</h1>
                <a href="#" class="font-medium hover:text-blue-500 duration-500">Посмотреть все</a>
            </div>
            <div class="flex">
                <app-card v-for="productCard in 5"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from "../components/AppCard.vue";

export default {
    name: "AppProductCatalog",
    components: {AppCard},
}
</script>

<style scoped>

</style>