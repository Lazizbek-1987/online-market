<template>
    <div class="h-96">
        <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
      clickable: true,
    }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="img in 20">
                <img src="../assets/images/carousel.png" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";

import "../swiper.css";
// import required modules
import {Grid, Pagination} from "swiper";

export default {
    name: "TheCarousel",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Grid, Pagination],
        }
    }
}
</script>

<style>
.swiper-pagination {
    transform: translate(0,40px)!important;
}
.swiper-pagination > span{
    background-color: black!important;
}
</style>