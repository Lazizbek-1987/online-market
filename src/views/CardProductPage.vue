<template>
    <div class="container mx-auto">
        <card-product />
        <new-products />
    </div>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
import NewProducts from "../components/NewProducts.vue";
export default {
    name: "CardProductPage",
    components: {NewProducts, CardProduct}
}
</script>

<style scoped>

</style>