<template>
    <div class="h-96">
        <swiper
            :slidesPerView="3"
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
            <swiper-slide class="w-auto h-[90%]" v-for="img in 20">
                <img src="../assets/images/carousel.png" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
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
    color: red!important;
}

.swiper-button-next {
    color: red!important;
}
</style>