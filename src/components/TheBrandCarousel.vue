<template>
    <div>
        <swiper
            :slidesPerView="6"
            :spaceBetween="120"
            :centeredSlides="true"
            :pagination="false"
            :modules="modules"
            :navigation="true"
            class="mySwiper"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
        >
            <swiper-slide class="w-50 bg-[#F5F7FA]" v-for="img in 20">
                <img class="border-4 border-gray-300 rounded px-7 py-9" src="./icons/brand-logos/huaweiLogo.svg" alt="">
                <img class="border-4 border-gray-300 rounded px-7 py-9" src="./icons/brand-logos/samsungLogo.svg" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation, Pagination} from 'swiper';
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
            modules: [Autoplay, Pagination, Navigation],
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