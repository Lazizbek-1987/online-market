<template>
    <div class="shadow bg-white p-6 space-y-4 rounded ">
        <h1 class="font-bold text-xl">Выберите способ оплаты</h1>
        <div class="border-b py-4 space-y-3">
            <div class="flex space-x-3">
                <img class="w-1/5" src="./icons/payme.png" alt="">
                <img class="w-1/5" src="./icons/payme.png" alt="">
                <img class="w-1/5" src="./icons/payme.png" alt="">
                <img class="w-1/5" src="./icons/payme.png" alt="">
            </div>
            <div class="flex space-x-3">
                <img class="w-1/5" src="./icons/payme.png" alt="">
                <img class="w-1/5" src="./icons/payme.png" alt="">
                <img class="w-1/5" src="./icons/payme.png" alt="">
            </div>
        </div>

        <div class="space-y-8">
            <h1>Товары ............................................................ <span>4</span></h1>
            <h1>Общая стоимоость ........................................ <span>10 655 940 сум</span></h1>
            <h1>Скидки на товары .......................................... <span>213 118 сум</span></h1>
            <h1>Доставка .........................................................
                <span class="font-bold text-primary">Беспалатно</span>
            </h1>
            <h1 class="font-bold">Итого <span class="text-gray-400">...............................................................</span>
                <span class="font-bold">10 442 822 сум</span>
            </h1>

            <div class="flex justify-between space-x-4">
                <input
                    class="w-1/2 px-4 py-3 border rounded outline-0 bg-gray-200 focus:border-primary focus:bg-white
                    duration-500"
                    placeholder="Промокод на скидку"
                    type="text"
                >
                <button
                    class="w-1/2 px-4 py-3 font-bold rounded border border-black hover:border-primary hover:bg-primary
                    hover:text-white duration-500"
                >
                    Применить
                </button>
            </div>

            <button class="w-full text-xl px-6 py-3 font-bold rounded border border-black hover:border-primary
                    hover:bg-primary hover:text-white duration-500"
            >
                Перейти к оплате
            </button>

        </div>

    </div>
</template>

<script>
export default {
    name: "AppSelectPayment"
}
</script>

<style scoped>

</style>