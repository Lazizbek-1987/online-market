<template>
    <div class="py-24 bg-[#F5F7FA]">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center container mx-auto gap-6">
            <app-plastic-card v-for="plastic of 4"/>
        </div>
    </div>
</template>

<script>
import AppPlasticCard from "./AppPlasticCard.vue";
export default {
    name: "OurAdvantages",
    components: {AppPlasticCard}
}
</script>

<style scoped>

</style>