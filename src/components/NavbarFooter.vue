<template>
    <ul class="flex space-x-6 items-center">
        <li v-for="link of links">
            <router-link
                :to="link.link"
                class="link-hover">
                {{ link.title }}
            </router-link>
        </li>
    </ul>
    <div class="flex space-x-2">
        <div class="relative">
            <h1 class="absolute text-center right-4 bottom-3 text-[10px] bg-primary rounded-full w-4">1</h1>
            <HeartIcon class="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 duration-500"/>
        </div>
        <router-link to="#" class="link-hover">Избранное</router-link>
    </div>
</template>

<script>
import {HeartIcon} from '@heroicons/vue/24/outline'

export default {
    name: "NavbarFooter",
    components: {HeartIcon},
    data() {
        return {
            links: [
                {link: '#', title: 'О нас'},
                {link: '#', title: 'Оплата и доставка'},
                {link: '#', title: 'Услуги'},
                {link: '#', title: 'Отзывы'},
                {link: '#', title: 'Новинки'},
                {link: '#', title: 'Вакансии'}
            ],
        }
    },
}
</script>

<style scoped>

</style>