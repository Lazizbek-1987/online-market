<template>
    <div class="h-24">
        <swiper
            :slidesPerView="6"
            :loop="true"
            :spaceBetween="20"
            :centeredSlides="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide class="w-auto h-[90%]" v-for="img in 6">
                <img src="../assets/images/carousel.png" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';

export default {
    name: "TheBrandLogosCarousel",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Navigation],
        }
    }
}
</script>

<style scoped>
.swiper-slide img {
    display: block;
    width: 100%!important;
    height: 50%!important;
    -o-object-fit: cover;
    object-fit: cover;
}
</style>