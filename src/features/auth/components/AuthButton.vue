<script setup lang="ts">
defineProps<{
  isLoading?: boolean;
  text: string;
}>();
</script>

<template>
  <button
    type="submit"
    :disabled="isLoading"
    class="w-full bg-[#F59E0B] hover:bg-[#FBBF24] disabled:bg-slate-300 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] flex justify-center items-center"
  >
    <span v-if="!isLoading">{{ text }}</span>
    <div v-else class="flex items-center gap-2">
      <div class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
      <span>Loading...</span>
    </div>
  </button>
</template>