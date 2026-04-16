<template>
  <div class="mt-8 pt-6 border-t border-gray-100">
    <h3 class="text-lg font-semibold text-gray-800 mb-6 flex items-center">
      <span class="w-1 h-6 bg-[#F59E0B] mr-2 rounded"></span>
      CV
    </h3>
    
    <div v-if="user?.Cv_Image" class="mb-8 flex justify-center">
      <div class="relative group w-full max-w-[800px] shadow-2xl border border-gray-200 rounded-md overflow-hidden bg-white">
        
        <img 
          :src="user.Cv_Image" 
          alt="CV" 
          class="w-full h-auto object-contain transition-all group-hover:brightness-95" 
        />
        
        <button 
          @click.prevent="$emit('delete-cv', user.id)"
          class="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 shadow-xl hover:bg-red-600 transition-all hover:scale-110 z-10"
          title="Xóa CV"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full max-w-[800px] mx-auto">
      <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-orange-50 hover:border-[#F59E0B] transition-colors">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-3 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p class="text-sm text-gray-500">
            <span class="font-semibold text-[#F59E0B]">
              {{ user?.Cv_Image ? 'Update New CV' : 'Upload CV' }}
            </span>
          </p>
        </div>
        <input type="file" class="hidden" @change="handleCvUpload" accept="image/*" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/features/profile/types/profileType';
defineProps<{ user: User | null }>();

const emit = defineEmits<{
  (e: 'update-cv', file: File): void,
  (e: 'delete-cv', id: number): void
}>();

const handleCvUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files?.[0]) 
  emit('update-cv', target.files[0]);
};
</script>