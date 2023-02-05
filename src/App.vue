<template>
    <div class="w-full min-h-screen bg-[#FDFEFF] overflow-hidden font-[Montserrat]">
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

<style>
.link-hover {
    --s: 0.1em;
    --c: #FFD600;
    color: #0000;
    padding-bottom: var(--s);
    background: linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%))/200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p, 0%) var(--s) no-repeat;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: 0.5s;
}

.link-hover:hover {
    --_p: 100%
}
</style>
