<template>
    <div class="w-full min-h-screen overflow-hidden font-[Proxima Nova]">
        <TheNavbar />
        <RouterView />
    </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheCard from "./components/TheCard.vue";
export default {
    components: {TheCard, TheNavbar}
}
</script>

<style scoped>
</style>
