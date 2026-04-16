<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const route = useRoute();
const { handleAuthCallback } = useAuth();

onMounted(() => {
  const token = route.query.token as string;
  handleAuthCallback(token);
});
</script>

<template>
  <div class="h-screen w-full flex flex-col justify-center items-center bg-white">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    <p class="mt-4 text-gray-600 font-medium">Login in progress...</p>
  </div>
</template>

