<script setup lang="ts">
defineProps<{ isLoading: boolean }>();
defineEmits(['click']);
</script>

<template>
  <button 
    @click="$emit('click')"
    :disabled="isLoading"
    type="button"
    class=" w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl hover:bg-slate-50 hover:border-blue-400 transition-all duration-200 active:scale-95 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-6 h-6" alt="Google">
    <span>Continue with Google</span>
  </button>
</template>