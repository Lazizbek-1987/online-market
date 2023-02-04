<template>
    <div class="flex justify-center bg-[#F5F7FA] py-10">
        <div class="container mx-auto items-center text-center">
            <h1 class="text-xl font-bold pb-6">Наши партнеры</h1>
            <p class="pb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eu mauris, varius neque orci neque
                tortor.
            </p>
            <the-brand-logos-carousel />
        </div>
    </div>
</template>

<script>
import TheBrandLogosCarousel from "./TheBrandCarousel.vue";
export default {
    name: "TheBrandLogoCarousel",
    components: {TheBrandLogosCarousel}
}
</script>

<style scoped>

</style>