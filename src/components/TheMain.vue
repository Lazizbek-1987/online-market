<template>
    <popular-products/>
    <time-to-buy />
    <the-brand-logo-carousel />
    <new-products />
    <our-advantages />
</template>

<script>
import TheCard from "./AppCard.vue";
import PopularProducts from "./PopularProducts.vue";
import TimeToBuy from "./TimeToBuy.vue";
import TheBrandLogoCarousel from "./TheBrandLogoCarousel.vue";
import NewProducts from "./NewProducts.vue";
import OurAdvantages from "./OurAdvantages.vue";

export default {
    name: "TheMain",
    components: {OurAdvantages, NewProducts, TheBrandLogoCarousel, TimeToBuy, PopularProducts, TheCard}
}
</script>

<style scoped>

</style>