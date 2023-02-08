<template>
    <div class="flex relative space-x-3 items-center">

        <div class="flex space-x-3 relative">
            <Bars3Icon
                class="w-6 h-6 text-[#553280] cursor-pointer hover:text-[#FFD600] duration-500"
                v-if="!isOpen"
                @click="isOpen = !isOpen"
            />
            <XMarkIcon
                class="w-6 h-6 text-[#553280] cursor-pointer hover:text-[#FFD600] duration-500"
                v-else
                @click="isOpen = !isOpen"
            />
            <router-link to="/categories" class="text-[#553280] link-hover">Все категории</router-link>

            <transition name="dropdown">
                <ul v-if="isOpen" class="absolute -left-2 top-6 z-10 w-64 bg-gray-200 mt-2 py-2 rounded shadow-xl">
                    <li v-for="category of categories">
                        <router-link
                            :to="category.link"
                            class="block py-2 mx-4 link-hover"
                        >
                            {{ category.title }}
                        </router-link>
                    </li>
                    <li class="flex space-x-3 px-6 py-2 items-center">
                        <a
                            href="#"
                            class="block py-2 text-gray-800"
                        >
                            Ещё
                        </a>
                        <ChevronDownIcon
                            class="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary hover:scale-125 duration-500"
                        />
                    </li>
                </ul>
            </transition>
        </div>

    </div>
</template>

<script>
import {Bars3Icon, ChevronDownIcon, XMarkIcon} from '@heroicons/vue/24/outline'

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
            isOpen: false
        }
    },
}
</script>

<style>
@keyframes dropdown-enter {
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes dropdown-leave {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-10px);
        opacity: 0;
    }
}

</style>