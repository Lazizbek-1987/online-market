<template>
    <div class="space-y-4 my-16 container items-center mx-auto">
        <div class="text-lg -ml-20 mb-12 items-center font-bold">
            <h1><span class="text-white bg-primary pl-40 py-1">Популярные</span> товары</h1>
        </div>
        <div class="flex flex-wrap justify-center container gap-7 mx-auto">
                <the-card v-for="card in 12"/>
        </div>
    </div>
</template>

<script>
import TheCard from "./AppCard.vue";
export default {
    name: "PopularProducts",
    components: {TheCard}
}
</script>

<style scoped>

</style>