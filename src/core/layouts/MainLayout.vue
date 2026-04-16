<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">
    <NavBar />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>