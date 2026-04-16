<script setup lang="ts">
defineProps<{
    title?: string;
    skills: string[]
}>();
</script>

<template>
  <div class="mb-12">
    <h3 class="font-black text-slate-800 uppercase italic mb-6 tracking-tight border-l-4 border-[#F59E0B] pl-4">{{ title || 'Skills' }}</h3>
    <div class="flex flex-wrap gap-3">
      <span 
        v-for="t in skills" :key="t" 
        class="px-5 py-2 bg-white rounded-full border border-slate-200 font-bold text-slate-600 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all cursor-default shadow-sm"
      >
        {{ t }}
      </span>
    </div>
  </div>
</template>

