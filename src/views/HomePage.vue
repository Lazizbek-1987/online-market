<template>
    <TheCarousel/>
    <TheMain />
</template>

<script>
import TheCarousel from "../components/TheCarousel.vue";
import TheMain from "../components/TheMain.vue";

export default {
    name: "HomePage",
    components: {TheMain, TheCarousel}
}
</script>

<style scoped>

</style>