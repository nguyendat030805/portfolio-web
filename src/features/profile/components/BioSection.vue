<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['modelValue']);
const emit = defineEmits(['save']);

const isEditing = ref(false);
const localBio = ref(props.modelValue);

const handleSave = () => {
  emit('save', localBio.value);
  isEditing.value = false;
};
</script>

<template>
  <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-slate-800">About Me</h2>
      <button @click="isEditing = !isEditing" class="text-sm text-[#F59E0B] font-bold uppercase tracking-wider">
        {{ isEditing ? 'Close' : 'Edit' }}
      </button>
    </div>

    <div v-if="!isEditing" class="text-slate-600 leading-relaxed italic">
      "{{ modelValue || 'Write something about yourself...' }}"
    </div>

    <div v-else class="space-y-4">
      <textarea v-model="localBio" class="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-[#F59E0B] outline-none border-none" rows="3"></textarea>
      <button @click="handleSave" class="bg-[#F59E0B] text-slate-950 px-5 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-all text-sm">
        Bio Update
      </button>
    </div>
  </div>
</template>

