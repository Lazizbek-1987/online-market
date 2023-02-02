<template>
    <div class="space-y-4 mt-20">
        <div>
            <h1><span>Популярные</span> товары</h1>
        </div>
        <div class="grid grid-cols-6 container mx-auto gap-1">
            <TheCard  class="col-span-1" v-for="card of 12"/>
        </div>
    </div>
</template>

<script>
import TheCard from "./TheCard.vue";
export default {
    name: "PopularProducts",
    components: {TheCard}
}
</script>

<style scoped>

</style>