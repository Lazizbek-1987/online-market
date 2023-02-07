<template>
    <div class="flex justify-between container pt-16 pb-20 mx-auto">
        <div class="w-40 space-y-7">
            <div class="w-24 flex flex-shrink-0">
                <router-link to="/" class="hover:scale-105 duration-500">
                    <img class="w-full" src="./icons/SiteLogo.svg" alt="Logo">
                </router-link>
            </div>
            <p class="text-gray-400">Интернет-магазин Крафтовые ручные поделки</p>
        </div>
        <div class="space-y-5">
            <h1 class="font-medium">О нас</h1>
            <ul class="space-y-5">
                <li class="font-medium">
                    <a href="#" class="link-hover">Оплата и доставка</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Услуги</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Гарантия и возврат</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Гарантия и возврат</a>
                </li>
            </ul>
        </div>
        <div class="space-y-5">
            <h1 class="font-medium">Отзывы</h1>
            <ul class="space-y-5">
                <li class="font-medium">
                    <a href="#" class="link-hover">Новинки</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Новости</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Контакты</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Контакты</a>
                </li>
            </ul>
        </div>
        <div class="space-y-5">
            <h1 class="font-medium">Отзывы</h1>
            <ul class="space-y-5">
                <li class="font-medium">
                    <a href="#" class="link-hover">Новинки</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Новости</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Контакты</a>
                </li>
                <li class="font-medium">
                    <a href="#" class="link-hover">Контакты</a>
                </li>
            </ul>
        </div>
        <div class="space-y-5">
            <h1 class="font-medium">Cпособы оплаты</h1>

            <ul class="flex space-x-5">
                <li class="font-medium">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/paymeLogo.svg" alt="">
                    </a>
                    <a href="#" class="hover:text-primary">
                        <img src="./icons/masterCardLogo.svg" alt="">
                    </a>
                </li>
                <li class="font-medium space-y-3">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/clickLogo.svg" alt="">
                    </a>
                    <a href="#" class="hover:text-primary">
                        <img src="./icons/uzcardLogo.svg" alt="">
                    </a>
                </li>
                <li class="font-medium">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/visaLogo.svg" alt="">
                    </a>
                    <a href="#" class="hover:text-primary">
                        <img src="./icons/apelsinLogo.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>

        <div class="space-y-5">
            <h1 class="font-medium">Социальные сети</h1>

            <ul class="flex space-x-5">
                <li class="font-medium">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/facebookLogo.svg" alt="">
                    </a>
                </li>
                <li class="font-medium space-y-3">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/instagramLogo.svg" alt="">
                    </a>
                </li>
                <li class="font-medium">
                    <a href="#" class="hover:text-primary">
                        <img class="mb-3" src="./icons/telegramLogo.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style scoped>
</style>