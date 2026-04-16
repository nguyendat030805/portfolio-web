<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainLayout from '../../../core/layouts/MainLayout.vue';
import ProjectForm from '../components/ProjectForm.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { useProject } from '../composables/useProject';
import type { Project } from '../types/projectType';

const { projects, loading, fetchProjects, addProject, editProject, removeProject } = useProject();

const isFormVisible = ref(false); 
const selectedProject = ref<Project | null>(null)

onMounted(() => {
  fetchProjects();
});

const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
  if (!isFormVisible.value) selectedProject.value = null; 
};

const setEdit = (project: Project) => {
  selectedProject.value = project;
  isFormVisible.value = true; 
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleFormSubmit = async (formData: FormData) => {
  if (selectedProject.value?.id) {
    await editProject(selectedProject.value.id, formData);
  } else {
    await addProject(formData);
  }
  selectedProject.value = null;
  isFormVisible.value = false; 
};
</script>

<template>
  <MainLayout>
    <div class="max-w-5xl mx-auto px-4 py-8">
      
      <div v-if="!isFormVisible" class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex items-center gap-4 animate-in fade-in duration-500">
        <button 
          @click="toggleForm"
          class="flex-grow bg-gray-100 hover:bg-gray-200 text-gray-500 text-left px-5 py-2.5 rounded-full transition-all font-medium border border-transparent active:scale-[0.99]"
        >
          Do you have any new projects you'd like to share?
        </button>
      </div>

      <div v-if="isFormVisible" class="relative animate-in zoom-in-95 duration-300">
        <button 
          @click="toggleForm" 
          class="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="Form Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <ProjectForm 
          :editData="selectedProject" 
          :loading="loading"
          @submit="handleFormSubmit"
          @cancel="toggleForm"
        />
      </div>

      <div v-if="loading && projects.length === 0" class="flex justify-center py-20">
        <div class="w-10 h-10 border-4 border-amber-100 border-t-[#F59E0B] rounded-full animate-spin"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="item in projects" 
          :key="item.id" 
          :project="item"
          @edit="setEdit"
          @delete="removeProject"
        />
      </div>

      <div v-if="!loading && projects.length === 0" class="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p class="text-gray-400 font-medium">You haven't uploaded any projects yet.</p>
      </div>

    </div>
  </MainLayout>
</template>

<style scoped>
.animate-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>