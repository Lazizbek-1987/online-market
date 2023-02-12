<template>
    <div class="space-y-12">
        <div class="container mx-auto overflow-hidden">
            <app-breadcrumb/>
            <h1 class="text-4xl font-bold">О нас</h1>
            <app-about-us-card/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center container mx-6 md:mx-auto gap-6">
            <app-plastic-card v-for="plastic of 4"/>
        </div>
        <div class="relative h-96 items-center bg-[#F5F7FA] align-middle">
            <div class="w-1/2 align-middle right-0 -left-24 bg-primary h-20"></div>
            <img src="../assets/images/notebook.png" alt="" class="absolute top-0 z-10 text-end h-52">
<!--            <div class="container mx-auto overflow-hidden">-->
<!--                <app-about-us-middle-card />-->
<!--            </div>-->
        </div>
    </div>

</template>

<script>
import AppBreadcrumb from "../components/AppBreadcrumb.vue";
import AppAboutUsCard from "../components/AppAboutUsCard.vue";
import AppPlasticCard from "../components/AppPlasticCard.vue";
import AppAboutUsMiddleCard from "../components/AppAboutUsMiddleCard.vue";

export default {
    name: "AboutUsPage",
    components: {AppAboutUsMiddleCard, AppPlasticCard, AppAboutUsCard, AppBreadcrumb}
}
</script>

<style scoped>

</style>