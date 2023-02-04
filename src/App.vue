<template>
    <div class="w-full min-h-screen bg-[#FDFEFF] overflow-hidden font-[Proxima Nova]">
        <the-header />
        <the-navbar />
        <router-view />
        <the-footer />
    </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheCard from "./components/AppCard.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
    components: {TheFooter, TheHeader, TheCard, TheNavbar}
}
</script>

<style scoped>
</style>
