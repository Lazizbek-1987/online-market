<template>
    <div class="flex justify-between container mx-auto items-center py-6 border-2 border-blue-50">
        <div class="flex space-x-3 items-center">
            <Bars3Icon class="w-6 h-6 text-[#553280] cursor-pointer hover:text-[#FFD600] duration-500"/>
            <h1 class="text-[#553280] font-medium">Все категории</h1>
        </div>
        <div>
            <ul class="flex space-x-6 items-center">
                <li v-for="link of links">
                    <a :href="link.link" class="font-medium hover:text-[#FFD600] duration-500">{{ link.title }}</a>
                </li>
            </ul>
        </div>
        <div class="flex space-x-2">
            <div class="relative">
                <h1 class="absolute text-center right-4 bottom-3 text-[10px] bg-[#FFD600] rounded-full w-4">1</h1>
                <HeartIcon class="w-6 h-6 text-gray-400"/>
            </div>
            <h1 class="text-gray-400">Избранное</h1>
        </div>
    </div>
</template>

<script>
import {Bars3Icon, HeartIcon} from '@heroicons/vue/24/outline'

export default {
    name: "TheCategory",
    components: {
        Bars3Icon,
        HeartIcon
    },
    data() {
        return {
            links: [
                {link: '#', title: 'О нас'},
                {link: '#', title: 'Оплата и доставка'},
                {link: '#', title: 'Услуги'},
                {link: '#', title: 'Отзывы'},
                {link: '#', title: 'Новинки'},
                {link: '#', title: 'Вакансии'}
            ]
        }
    }
}
</script>

<style scoped>

</style>