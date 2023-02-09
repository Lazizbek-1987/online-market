<template>

    <div class="flex justify-between container mx-auto bg-blue-500">

        <div class="w-2/3 h-96 bg-primary">
            <h1 class="block font-bold text-3xl pb-6">Всего 4 товара</h1>
            <div class="bg-green-300">
                <app-basket-card/>
            </div>
        </div>

        <div class="w-1/3">
            <app-select-payment />
        </div>
    </div>
</template>

<script>
import AppBasketCard from "../components/AppBasketCard.vue";
import AppSelectPayment from "../components/AppSelectPayment.vue";

export default {
    name: "BasketProductsPage",
    components: {AppSelectPayment, AppBasketCard}
}
</script>

<style scoped>

</style>