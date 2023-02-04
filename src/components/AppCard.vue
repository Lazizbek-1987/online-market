<template>
    <div
        class="w-auto px-5 space-y-1 h-min text-center bg-blue-50 hover:duration-500
        hover:scale-105 lg:hover:scale-125 hover:bg-white duration-500"
        @mouseover="showButton"
        @mouseleave="hiddenBtn"
    >
        <div>
            <img class="" src="../assets/images/carousel.png" alt="">
        </div>
        <div class="text-gray-400 text-[12px]">Комплект</div>
        <div>10-летняя девочка в рубашке,</div>
        <div :class="!showBtn ? 'pb-4' : ''" class="font-bold">от 1 000 000 UZS</div>
        <div v-if="showBtn" class="pb-4">
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
    name: "TheCard",
    data() {
        return {
            showBtn: false
        }
    },
    methods: {
        showButton() {
            this.showBtn = true
        },
        hiddenBtn() {
            this.showBtn = false
        }
    }
}
</script>

<style scoped>

</style>