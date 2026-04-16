<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';


const modules = [Autoplay, Pagination, Navigation];
const slides = [
  {
    title: 'My Creative Space',
    description: 'Hành trình khám phá code và nghệ thuật',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200'
  },
  {
    title: 'Developer Portfolio',
    description: 'Xây dựng những trải nghiệm người dùng tuyệt vời',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200'
  },
  {
    title: 'Tech Stack',
    description: 'Làm chủ Vue 3, Laravel và NestJS',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200'
  }
];
</script>

<template>
  <section class="h-[500px] bg-slate-900 relative overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      class="h-full w-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-full w-full flex items-center justify-center text-center">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10"></div>
          
          <img 
            :src="slide.image" 
            class="absolute inset-0 w-full h-full object-cover opacity-40"
            :alt="slide.title"
          >
          
          <div class="relative z-20 px-4">
            <h1 class="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-2 text-white">
              {{ slide.title }}
            </h1>
            <p class="text-slate-300 font-medium text-lg md:text-xl">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>



<style>
.swiper-pagination-bullet {
  background: #fff !important;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: #F59E0B !important; 
  opacity: 1;
}
</style>