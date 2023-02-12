<template>
    <div class="flex w-full justify-between space-x-6 mb-12 items-center">

        <div class="flex justify-between w-full">

            <div class="flex w-3/4 space-x-6">
                <div class="space-y-3">
                    <img class="w-40 lg:w-72" src="../assets/images/cardProduct.png" alt="">
                    <div class="flex justify-between">
                        <h1 class="text-sm text-gray-400 cursor-pointer hover:text-primary duration-500
                                   link-hover hover:border-b-0">
                            В избранное
                        </h1>
                        <h1
                            class="text-sm text-gray-400 cursor-pointer hover:text-primary duration-500
                                   link-hover hover:border-b-0">
                            Удалить
                        </h1>
                    </div>

                </div>
                <div class="flex-1 space-y-2 pr-4 border-r">
                    <h1 class="font-bold text-xl">New Year Candle, Christmas Gift Idea</h1>
                    <h2 class="font-bold text-lg">Коротко о товаре</h2>
                    <ul class="list-disc pl-3">
                        <li>Handmade</li>
                        <li>Handmade</li>
                        <li>Handmade</li>
                        <li>Handmade</li>
                        <li>Доступно только 4 штуки, и сейчас это есть у более 20 человек</li>
                    </ul>
                </div>
            </div>

            <div class="w-1/6 mx-auto text-center space-y-3">
                <h1 class="text-start font-bold text-lg">1 000 000 UZS</h1>
                <h2 class="text-start text-gray-400 text-sm line-through">1 000 000 UZS</h2>
                <h3 class="px-4 py-1 border border-red-600 bg-red-600 text-white">Sale: 10%</h3>
                <h3 class="flex justify-between border-2 text-gray-400 border-gray-400 px-4 py-2 bg-white">
                    <span class="cursor-pointer hover:text-primary duration-500">-</span>
                    10
                    <span class="cursor-pointer hover:text-primary duration-500">+</span>
                </h3>
                <h3 class="bg-primary px-1 py-1">Общая цена:</h3>
                <h1 class="text-start font-bold text-xl">100 000 000 UZS</h1>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "AppBasketCard"
}
</script>

<style scoped>

</style>