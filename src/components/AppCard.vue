<template>
    <router-link
        to="/product-card"
        class="parent w-64 relative overflow-hidden space-y-1 text-center bg-gray-50
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
    </router-link>
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
    margin-top: 50px;
    transition: .7s;
}

.parent:hover .animation-btn {
    bottom: 0;
    z-index: 100;
    padding-top: 50px;
}
</style>