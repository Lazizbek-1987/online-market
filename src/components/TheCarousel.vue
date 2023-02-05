<template>
    <div class="h-96">
        <swiper
            :slidesPerView="3"
            :loop="true"
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
             }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide class="w-auto h-[90%] relative" v-for="img in 3">
                <img src="../assets/images/carousel.png" alt="">
                <div
                    class="absolute flex space-x-12 px-4 py-2 border border-primary bottom-12 left-10 opacity-75
                    bg-primary items-center"
                >
                    <span class="text-xl font-bold text-white">Хозяйственные товары</span>
                    <a href="#" class="p-3 rounded-full opacity-100 bg-[#dbb802] hover:scale-110 duration-500">
                        <ArrowRightIcon class="w-3 h-3 font-bold text-white"/>
                    </a>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {ArrowRightIcon} from '@heroicons/vue/24/outline'
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../swiper.css";

export default {
    name: "TheCarousel",
    components: {
        Swiper,
        SwiperSlide,
        ArrowRightIcon
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    }
}
</script>

<style>
.swiper-button-prev {
    color: #FFD600 !important;
}

.swiper-button-next {
    color: #FFD600 !important;
}
</style>