<script setup lang="ts">
import { onMounted } from 'vue';
import { useProfile } from '@/features/profile/composables/useProfile';

const { user, fetchProfile } = useProfile();

onMounted(() => {
  if (!user.value) {
    fetchProfile();
  }
});
</script>

<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-900 shadow-lg">
    <div class="text-2xl font-bold tracking-tighter text-[#F59E0B]">PORTFOLIO</div>
    
    <ul class="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
      <li>
        <router-link 
          to="/home" 
          class="transition-colors hover:text-[#F59E0B]"
          active-class="text-[#F59E0B] font-bold"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          to="/projects" 
          class="transition-colors hover:text-[#F59E0B]"
          active-class="text-[#F59E0B] font-bold"
        >
          Projects
        </router-link>
      </li>
      <li>
        <router-link 
          to="/profile" 
          class="transition-colors hover:text-[#F59E0B]"
          active-class="text-[#F59E0B] font-bold"
        >
          Profile
        </router-link>
      </li>
    </ul>

    <div class="flex items-center space-x-4">
      <div v-if="user" class="flex items-center space-x-3 border-l border-slate-700 pl-4">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold text-white leading-none">{{ user.name }}</p>
          <p class="text-[10px] text-[#F59E0B] font-medium">{{ user.email }}</p>
        </div>
        
        <img 
          :src="user.avatar || 'https://ui-avatars.com/api/?name=' + user.name" 
          class="w-9 h-9 rounded-full border-2 border-[#F59E0B] object-cover shadow-sm"
          :alt="user.name"
        />
      </div>
    </div>
  </nav>
</template>

