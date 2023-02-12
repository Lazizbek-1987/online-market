<template>
    <ul class="w-1/5 px-5 py-5 bg-[#F5F7FA] space-y-3">
        <li><a href="" class="link-hover">Подарки</a></li>
        <li><a href="" class="link-hover">Аксессуары</a></li>
        <li><a href="" class="link-hover">Одежда и обувь</a></li>
        <li><a href="" class="link-hover">Товары для дома</a></li>
        <li class="flex space-x-3 items-center">
            <a href="#" class="block text-gray-800 hover:text-blue-500 duration-500">Ещё</a>
            <ChevronDownIcon
                class="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-500 hover:scale-125 duration-500"
            />
        </li>
    </ul>
</template>

<script>
import {ChevronDownIcon} from '@heroicons/vue/24/outline'
export default {
    name: "AppCategoryLink",
    components: {ChevronDownIcon},
}
</script>

<style scoped>

</style>