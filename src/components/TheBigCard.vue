<template>
    <div
        class="w-full px-12 space-y-4 h-min text-center bg-white"
    >
        <div>
            <img class="" src="../assets/images/carousel.png" alt="">
        </div>
        <div class="text-gray-400 text-[12px]">Подарки</div>
        <div>Персонализированный подарок для подружки невесты</div>
        <div class="font-bold">от 1 000 000 UZS</div>
        <div class="flex items-center justify-center space-x-3">
            <img src="./icons/clock.svg" alt="">
            <h2 class="text-primary">01 : 30 : 15</h2>
        </div>
        <div class="pb-5">
            <button
                class="w-full flex justify-center px-2 py-2 space-x-3 bg-primary items-center rounded hover:bg-amber-400
                duration-500 hover:scale-105"
            >
                <img src="./icons/littleBasket.svg" alt="basket">
                <span class="text-white text-[14px]">В корзину</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheBigCard"
}
</script>

<style scoped>

</style>