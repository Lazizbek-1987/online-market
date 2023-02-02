<template>
    <header>
        <div class="flex justify-between container mx-auto items-center py-3">
            <div>
                <ul class="flex space-x-14">
                    <li><a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">Контакты</a>
                    </li>
                    <li><a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">Помощь</a></li>
                    <li>
                        <a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">
                            Услуги и сервис
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">
                            Стать партнером
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex space-x-2 items-center">
                <span><img src="./icons/IconLogin.svg" alt=""></span>
                <a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">Вход</a>
                <a href="#" class="text-sm text-gray-400 hover:text-primary duration-500">Регистация</a>
            </div>
        </div>
        <hr>

        <div class="container mx-auto py-6 items-center">
            <ul class="flex justify-between items-center">
                <li><img src="./icons/SiteLogo.svg" alt=""></li>
                <li class="relative">
                    <input
                        type="text"
                        placeholder="Поиск по товарам..."
                        class="w-80 bg-[#F9F9F9] px-6 py-2 rounded outline-0 border focus:border-primary focus:border
                            focus:border-primary duration-500"
                    >
                    <span class="absolute right-0 pr-4 pt-3">
                        <MagnifyingGlassIcon class="w-4 h-4 text-gray-400"/>
                    </span>
                </li>
                <li class="flex space-x-3 items-center">
                    <div><img src="./icons/location.svg" alt=""></div>
                    <div>
                        <h1>Работаем по всему</h1>
                        <h1>Узбекистану</h1>
                    </div>
                </li>
                <li class="flex space-x-3 items-center">
                    <div><img src="./icons/phone.svg" alt=""></div>
                    <div>
                        <a href="tel:+998900000000" class="cursor-pointer hover:text-primary duration-500">
                            +998 90 000 00 00
                        </a>
                        <h1 class="text-end">Заказать звонок</h1>
                    </div>
                </li>
                <li class="flex space-x-3 items-center">
                    <div><img src="./icons/basket.svg" alt=""></div>
                    <div class="relative">
                        <h1>Корзина</h1>
                        <h1 class="absolute text-center left-6 text-[10px] bg-primary rounded-full w-4">1</h1>
                    </div>
                </li>
            </ul>
        </div>

    </header>

    <TheCategory/>
</template>

<script>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'
import TheCategory from "./TheCategory.vue";

export default {
    name: "TheNavbar",
    components: {TheCategory, MagnifyingGlassIcon}
}
</script>

<style scoped>

</style>