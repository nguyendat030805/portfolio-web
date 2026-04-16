<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import type { Project } from '../types/projectType';

const props = defineProps<{ editData?: Project | null, loading: boolean }>();
const emit = defineEmits(['submit', 'cancel']);

const isEdit = ref(false);
const previewUrl = ref<string | null>(null);

const form = reactive({
  title: '',
  description: '',
  tech_stack_raw: '',
  link_github: '',
  link_demo: '',
  thumbnail: null as File | null | string
});

const resetForm = () => {
  isEdit.value = false;
  Object.assign(form, { title: '', description: '', tech_stack_raw: '', link_github: '', link_demo: '', thumbnail: null });
  previewUrl.value = null;
};

const handleFileUpload = (e: any) => {
  const file = e.target.files[0];
  if (file) {
    form.thumbnail = file;
    previewUrl.value = URL.createObjectURL(file);
  }
};

const handleSubmit = () => {
  const formData = new FormData();
  formData.append('title', form.title);
  formData.append('description', form.description);
  formData.append('link_github', form.link_github);
  formData.append('link_demo', form.link_demo);
  
  const techs = form.tech_stack_raw.split(',').map(s => s.trim()).filter(s => s !== "");
  techs.forEach(t => formData.append('tech_stack[]', t));

  if (form.thumbnail instanceof File) formData.append('thumbnail', form.thumbnail);

  emit('submit', formData);
  if(!isEdit.value) resetForm();
};

watch(() => props.editData, (newVal) => {
  if (newVal) {
    isEdit.value = true;
    form.title = newVal.title;
    form.description = newVal.description;
    form.tech_stack_raw = newVal.tech_stack.join(', ');
    form.link_github = newVal.link_github || '';
    form.link_demo = newVal.link_demo || '';
    previewUrl.value = typeof newVal.thumbnail === 'string' ? newVal.thumbnail : null;
  } else {
    resetForm(); 
  }
}, { immediate: true });
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-200 mb-8">
    <h3 class="text-xl font-bold mb-6 text-gray-800 border-l-4 border-[#F59E0B] pl-3">
      {{ isEdit ? 'Project Update' : 'Create New Project' }}
    </h3>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          v-model="form.title" 
          type="text" 
          placeholder="Project Name" 
          class="w-full bg-white border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all placeholder:text-gray-400 text-gray-700"
          required 
        />
        <input 
          v-model="form.tech_stack_raw" 
          type="text" 
          placeholder="Tech Stack (React, Node...)" 
          class="w-full bg-white border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all placeholder:text-gray-400 text-gray-700"
        />
      </div>

      <textarea 
        v-model="form.description" 
        placeholder="Description" 
        class="w-full bg-white border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all placeholder:text-gray-400 text-gray-700 h-24 resize-none"
      ></textarea>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          v-model="form.link_github" 
          type="url" 
          placeholder="Link GitHub" 
          class="w-full bg-white border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all placeholder:text-gray-400 text-gray-700"
        />
        <input 
          v-model="form.link_demo" 
          type="url" 
          placeholder="Link Live Demo" 
          class="w-full bg-white border border-gray-300 rounded-md p-2.5 outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all placeholder:text-gray-400 text-gray-700"
        />
      </div>

      <div class="flex items-center gap-4 py-2">
        <label class="cursor-pointer px-4 py-2 border-2 border-[#F59E0B] text-[#F59E0B] rounded-md font-bold hover:bg-[#F59E0B] hover:text-white transition shadow-sm text-sm uppercase tracking-wide">
          Upload Image
          <input type="file" @change="handleFileUpload" class="hidden" accept="image/*" />
        </label>
        
        <div v-if="previewUrl" class="relative">
          <img :src="previewUrl" class="w-16 h-12 rounded object-cover border border-amber-200" />
          <button @click="previewUrl = null; form.thumbnail = null" type="button" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">✕</button>
        </div>
      </div>

      <div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button v-if="isEdit" @click="$emit('cancel')" type="button" class="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition">Hủy</button>
        <button type="submit" :disabled="loading" class="px-8 py-2 bg-[#F59E0B] text-white font-bold rounded-md hover:bg-[#d98a0a] disabled:opacity-50 shadow-md active:scale-95 transition uppercase text-sm tracking-wider">
          {{ loading ? 'Processing...' : (isEdit ? 'Save Change' : 'Post') }}
        </button>
      </div>
    </form>
  </div>
</template>


