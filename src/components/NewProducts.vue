<template>
    <div class="space-y-4 my-16 container items-center mx-auto">
        <div class="text-lg -ml-20 mb-12 items-center font-bold">
            <h1><span class="text-white bg-primary pl-40 py-1">Новые</span> товары</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 container gap-7 mx-auto">
            <the-card v-for="(card, index) in 12" :key="index" class="space-y-4"/>
        </div>
    </div>
</template>

<script>
import TheCard from "./AppCard.vue";
export default {
    name: "NewProducts",
    components: {TheCard}
}
</script>

<style scoped>

</style>