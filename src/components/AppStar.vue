<template>
    <div class="flex space-x-1 items-center">
        <div v-for="(star, index) in 5" :key="index">
            <StarIcon
                class="w-4 h-4 text-primary cursor-pointer"
                :class="isClickStar ? 'fill-primary' : ''"
                @click="clickStar(star)"
            />
        </div>
        <span class="pl-4">{{ likes }} {{ title }}</span>
    </div>
</template>

<script>
import {StarIcon} from '@heroicons/vue/24/outline'

export default {
    name: "AppStar",
    components: {
        StarIcon
    },
    props: {
        title: String,
        likes: Number
    },
    data() {
        return {
            isClickStar: false
        }
    },
    methods: {
        clickStar(index) {
            this.isClickStar = !this.isClickStar
        }
    }
}
</script>

<style scoped>

</style>