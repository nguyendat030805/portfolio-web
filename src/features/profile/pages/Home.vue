<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from '@/core/layouts/MainLayout.vue';
import HeroSlider from '../components/HeroSlider.vue';
import BioSection from '../components/BioSection.vue';
import SkillStack from '../components/SkillStack.vue';
import ProjectCard from '@/features/project/components/ProjectCard.vue';
import { useProfile } from '../composables/useProfile';
import { useProject } from '@/features/project/composables/useProject';

const { user, loading, fetchProfile, updateBio } = useProfile();
const {projects, loading: projectLoading, fetchProjects} = useProject();

onMounted(() => {
  fetchProfile();
  fetchProjects();
});
</script>

<template>
  <MainLayout>
    <HeroSlider />

    <main class="max-w-5xl mx-auto w-full px-6 -mt-12 relative z-30 pb-20">
      <div v-if="loading || projectLoading" class="flex flex-col items-center p-20 text-slate-400">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#F59E0B] mb-4"></div>
        <p class="font-bold uppercase italic tracking-widest text-sm">Data Loading...</p>
      </div>
      
      <div v-else-if="user">
        <BioSection :modelValue="user.bio" @save="updateBio" />
        
        <SkillStack :skills="['Vue 3', 'Tailwind', 'Laravel', 'NestJS']" />
        <SkillStack 
            title="Soft Skills" 
            :skills="['Effective communication', 'Teamwork', 'Problem-solving', 'Time management']" 
        />

        <div class="flex items-center justify-between mb-8">
          <h3 class="font-black text-slate-800 uppercase italic tracking-tight text-xl">Projects</h3>
          <div class="h-1 flex-grow mx-4 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-[#F59E0B] w-32 rounded-full"></div>
          </div>
        </div>

        <div v-if="projects.length > 0" class="grid md:grid-cols-2 gap-8 mb-16">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project" 
            class="hover:border-[#F59E0B] transition-all duration-300"
          />
        </div>

        <div v-else class="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 mb-16">
          <p class="text-slate-400 italic">No projects have been posted yet.</p>
        </div>

        <section class="bg-slate-900 rounded-3xl p-10 text-center text-white shadow-xl shadow-amber-500/10 border border-slate-800 relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B] opacity-10 rounded-full blur-3xl"></div>
          
          <h2 class="text-3xl font-black uppercase italic mb-4">Do you have a new idea?</h2>
          <p class="mb-8 text-slate-400 font-medium max-w-md mx-auto">I am always open to discussing groundbreaking projects and new collaboration opportunities.</p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@yourdomain.com" 
               class="bg-[#F59E0B] text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-lg shadow-amber-500/20 active:scale-95 uppercase text-sm tracking-wider">
               Contact Now
            </a>
            <button class="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700 active:scale-95 uppercase text-sm tracking-wider">
               CV Upload
            </button>
          </div>
        </section>
      </div>
    </main>
  </MainLayout>
</template>
