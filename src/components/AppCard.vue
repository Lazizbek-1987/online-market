<template>
    <div
        class="parent w-72 relative overflow-hidden space-y-1 text-center bg-gray-50
        hover:scale-105 lg:hover:scale-125 hover:bg-white duration-500"
    >
        <div class="w-full h-44 overflow-hidden">
            <img class="w-full object-cover" src="../assets/images/card.png" alt="">
        </div>
        <div class="p-5">
            <div class="text-gray-400 text-[12px]">{{ type }}</div>
            <div class="text-[#333333] font-[12px]">{{ title }}</div>
            <div class="font-bold font-[16px]">от {{ price }} UZS</div>
        </div>
        <div class="animation-btn p-3">
            <button
                class="w-full flex justify-center px-4 py-1 space-x-3 bg-primary items-center
                rounded hover:bg-amber-400 duration-500"
            >
                <img src="./icons/littleBasket.svg" alt="basket">
                <span @click="addToCard" class="text-white text-[14px]">В корзину</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppCard",
    props: [
        'type',
        'title',
        'price'
    ],
    methods: {
        addToCard() {
            this.$emit('addProductToCard')
        }
    }
}
</script>

<style>
.animation-btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -56px;
}

.parent:hover .animation-btn {
    bottom: -12px;
    transition: .5s;
    z-index: 100;
}
</style>