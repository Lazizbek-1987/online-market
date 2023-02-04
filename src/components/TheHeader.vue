<template>
    <header class="header">
        <!--   Header top  -->
        <div class="header__top flex justify-between container mx-auto items-center py-3">
            <ul class="flex space-x-14">
                <li>
                    <router-link to="#"
                                 class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                        Контакты
                    </router-link>
                </li>
                <li>
                    <router-link to="#"
                                 class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                        Помощь
                    </router-link>
                </li>
                <li>
                    <router-link to="#"
                                 class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                        Услуги и сервис
                    </router-link>
                </li>
                <li>
                    <router-link to="#"
                                 class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                        Стать партнером
                    </router-link>
                </li>
            </ul>
            <div class="flex space-x-2 items-center">
                <span><img src="icons/iconLogin.svg" alt=""></span>
                <router-link to="/logout"
                             class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                    Вход
                </router-link>
                <div class="text-gray-400 text-sm">|</div>
                <router-link to="/registration"
                             class="block text-sm text-gray-400 hover:text-primary hover:scale-105 duration-500">
                    Регистация
                </router-link>
            </div>
        </div>

        <nav>
            <hr>
            <!--  Herader  -->
            <div class="flex justify-between container mx-auto py-6 items-center">

                <div class="flex items-center space-x-24">
                    <div class="w-24 flex flex-shrink-0">
                        <router-link to="/" class="link-style">
                            <img class="w-full" src="./icons/SiteLogo.svg" alt="Logo">
                        </router-link>
                    </div>
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Поиск по товарам..."
                            class="w-80 bg-[#F9F9F9] px-6 py-2 rounded outline-0 border focus:border-primary focus:border
                            focus:border-primary duration-500 focus:scale-105
"
                        >
                        <span class="absolute right-0 pr-4 pt-3">
                        <MagnifyingGlassIcon class="w-4 h-4 text-gray-400"/>
                    </span>
                    </div>
                </div>

                <ul class="flex justify-between items-center space-x-20">
                    <li class="flex flex-shrink-0 space-x-3 items-center">
                        <div class="p-3.5 bg-amber-100 rounded-full"><img src="./icons/location.svg" alt=""></div>
                        <div>
                            <router-link
                                to="#"
                                class="link-style"
                            >
                                Работаем по всему <br> Узбекистану
                            </router-link>
                        </div>
                    </li>
                    <li class="flex flex-shrink-0 space-x-3 items-center">
                        <div class="p-3 bg-amber-100 rounded-full"><img src="./icons/phone.svg" alt=""></div>
                        <div>
                            <a href="tel:+998900000000" class="link-style">
                                +998 90 000 00 00 <br> Заказать звонок
                            </a>
                        </div>
                    </li>
                    <li class="flex flex-shrink-0 space-x-3 items-center">
                        <div class="p-3 bg-amber-100 rounded-full"><img src="./icons/basket.svg" alt=""></div>
                        <div class="relative">
                            <router-link to="#">
                                <span class="link-style">Корзина</span>
                                <span class="absolute text-center left-6 text-[10px] bg-primary rounded-full w-4">
                                    1
                                </span>
                            </router-link>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>

    </header>
</template>

<script>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'

export default {
    name: "TheHeader",
    components: {MagnifyingGlassIcon}
}
</script>

<style scoped>

</style>