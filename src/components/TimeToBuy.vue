<template>
    <div class="mb-16">
        <div class="flex justify-center text-lg mb-11 items-center font-bold">
            <h1>Успейте <span class="text-white bg-primary pr-40 py-1">купить</span></h1>
        </div>
        <div class="block md:flex justify-center gap-7 container mx-auto">
            <div class="w-1/3">
                <the-big-card/>
            </div>
            <div class="w-2/3 grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <the-card v-for="card in 8"/>
            </div>
        </div>
    </div>
</template>

<script>
import TheBigCard from "./TheBigCard.vue";
import TheCard from "./AppCard.vue";

export default {
    name: "TimeToBuy",
    components: {TheCard, TheBigCard}
}
</script>

<style scoped>

</style>