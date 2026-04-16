<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="relative group">
      <img 
        :src="previewUrl || (user?.avatar ? `${user.avatar}?t=${new Date().getTime()}` : '/default-avatar.png')"
        class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:opacity-90 transition-all" 
      />
      <label 
        for="avatar-input" 
        class="absolute bottom-0 right-0 bg-[#F59E0B] p-2 rounded-full cursor-pointer shadow-md hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </label>
      <input 
        id="avatar-input" 
        type="file" 
        @change="onFileChange" 
        accept="image/*" 
        class="hidden" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['user']);
const emit = defineEmits(['file-selected']);

const previewUrl = ref<string | null>(null);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];

    previewUrl.value = URL.createObjectURL(file);
    emit('file-selected', file);
  }
};
</script>