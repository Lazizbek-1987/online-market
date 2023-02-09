<template>
    <div class="pb-10 items-center">
        <div class="flex items-center space-x-3 space-y-4">
            <div>
                <img class="object-cover overflow-hidden w-10 h-10 rounded-full" src="../assets/images/avatar.jpg"
                     alt="">
            </div>
            <div class="items-center">
                <span>Артем Орлов</span>
                <div class="flex space-x-2 items-center">
                    <app-star class="text-gray-400" :title="'Опыт использварния: несколько месяцев'"/>
                </div>
            </div>
        </div>

        <div class="space-y-4 items-center">
            <h1>Достоинства:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla in quis amet vitae. Massa
                tristique
                est sit nibh nibh odio ultrices purus. Ante scelerisque odio facilisis faucibus diam.</p>

            <h1>Недостатки:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla in quis amet vitae. Massa
                tristique
                est sit nibh nibh odio ultrices purus. Ante scelerisque odio facilisis faucibus diam.</p>

            <h1>Комментарий:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, fringilla in quis amet vitae. Massa
                tristique
                est sit nibh nibh odio ultrices purus. Ante scelerisque odio facilisis faucibus diam.Lorem ipsum dolor
                sit
                amet, consectetur adipiscing elit. Neque, fringilla in quis amet vitae. Massa tristique est sit nibh
                nibh
                odio ultrices purus. Ante scelerisque odio facilisis faucibus diam.</p>

            <div class="flex justify-between items-center space-x-4">
                <div class="space-x-6 items-center">
                    <span>Комментировать</span>
                    <span class="text-gray-400">7 месяцев назад</span>
                </div>
                <div class="flex space-x-8 items-center">
                    <div class="flex space-x-2 items-center">
                        <HandThumbUpIcon class="w-5 h-5 cursor-pointer duration-500 hover:text-primary
                    hover:fill-primary fill-gray-400 text-gray-400"/>
                        <span>4</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <HandThumbDownIcon class="w-5 h-5 cursor-pointer duration-500 hover:text-primary
                    hover:fill-primary fill-gray-400 text-gray-400"/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {HandThumbDownIcon, HandThumbUpIcon, StarIcon} from '@heroicons/vue/24/outline'
import AppStar from "./AppStar.vue";

export default {
    name: "AppComment",
    components: {
        AppStar,
        StarIcon,
        HandThumbUpIcon,
        HandThumbDownIcon
    },
}
</script>

<style scoped>

</style>