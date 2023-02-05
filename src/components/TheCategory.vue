<template>
    <div class="flex relative space-x-3 items-center">
        <Bars3Icon
            class="w-6 h-6 text-[#553280] cursor-pointer hover:text-[#FFD600] duration-500"
            v-if="openDropdown"
            @click="showDropdown"
        />
        <XMarkIcon
            class="w-6 h-6 text-[#553280] cursor-pointer hover:text-[#FFD600] duration-500"
            v-else
            @click="showDropdown"
        />
        <router-link to="/categories" class="text-[#553280] link-hover">Все категории</router-link>

        <!--  Categories list start -->
        <ul
            class="absolute top-10 -left-3 z-10 w-64 opacity-95 space-y-4 p-5 bg-gray-200 block"
            v-if="!openDropdown"
        >
            <li v-for="category of categories">
                <router-link :to="category.link" class="text-sm link-hover">{{ category.title }}</router-link>
            </li>
            <li class="flex space-x-3 items-center">
                <a href="#" class="text-sm hover:text-primary duration-500">Ещё</a>
                <ChevronDownIcon  class="w-3 h-3 cursor-pointer hover:text-primary duration-500"/>
            </li>
        </ul>
        <!--  Categories list end -->

    </div>
</template>

<script>
import {Bars3Icon, XMarkIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'

export default {
    name: "TheCategory",
    components: {
        Bars3Icon,
        XMarkIcon,
        ChevronDownIcon
    },
    data() {
        return {
            categories: [
                {title: 'Подарки', link: '/categories'},
                {title: 'Аксессуары', link: '/categories'},
                {title: 'Одежда и обувь', link: '/categories'},
                {title: 'Товары для дома', link: '/categories'}
            ],
            openDropdown: true
        }
    },
    methods: {
        showDropdown() {
            this.openDropdown = !this.openDropdown
        }
    }
}
</script>

<style scoped>
</style>