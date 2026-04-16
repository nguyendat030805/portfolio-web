<script setup lang="ts">
  import type { Project } from '../types/projectType';
  defineProps<{ project: Project }>();
  defineEmits(['edit', 'delete']);
</script>

<template>
  <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="typeof project.thumbnail === 'string' ? project.thumbnail : 'https://via.placeholder.com/600x400'" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div class="flex space-x-2">
           <button @click="$emit('edit', project)" class="p-2.5 bg-white text-gray-800 rounded-lg hover:bg-[#F59E0B] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2.5 2.5 0 113.536 3.536L12 14.732V17h2.268l7.657-7.657a2.5 2.5 0 010-3.536z"/></svg>
          </button>
          <button @click="$emit('delete', project.id)" class="p-2.5 bg-white text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="p-6 flex flex-col flex-grow">
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tech in project.tech_stack" :key="tech" class="text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-[#F59E0B] rounded uppercase tracking-wider border border-amber-100">
          {{ tech }}
        </span>
      </div>
      
      <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#F59E0B] transition-colors line-clamp-1">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
        {{ project.description }}
      </p>

      <div class="flex items-center justify-between pt-4 border-t border-gray-50">
        <a :href="project.link_github" target="_blank" class="flex items-center text-sm font-bold text-gray-700 hover:text-[#F59E0B] transition">
          <span class="mr-2">Source Code</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a :href="project.link_demo" target="_blank" class="flex items-center text-sm font-bold text-[#F59E0B] hover:underline underline-offset-4 decoration-2">
          Review Live →
        </a>
      </div>
    </div>
  </div>
</template>

