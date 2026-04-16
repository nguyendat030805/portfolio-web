<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainLayout from '@/core/layouts/MainLayout.vue';
import { useProfile } from '@/features/profile/composables/useProfile';
import ProfileAvatar from '@/features/profile/components/ProfileAvatar.vue';
import ProfileDocuments from '@/features/profile/components/ProfileDocuments.vue';

const { user, loading, fetchProfile, updateProfile, deleteCv } = useProfile();

const selectedAvatar = ref<File | null>(null);
const selectedCv = ref<File | null>(null);

onMounted(fetchProfile);

const handleFileSelected = (file: File) => {
  selectedAvatar.value = file;
};

const onCvChange = (file: File) => {
  selectedCv.value = file;
};

const saveChanges = async () => {
  if (!user.value) return;

  const fd = new FormData();
  fd.append('name', user.value.name || '');
  fd.append('phone', user.value.phone || '');
  fd.append('bio', user.value.bio || '');
  fd.append('birthday', user.value.birthday || '');

  if (selectedAvatar.value) {
    fd.append('avatar', selectedAvatar.value);
  }
  
  if (selectedCv.value) {
    fd.append('Cv_Image', selectedCv.value);
  }

  await updateProfile(fd);
};
</script>

<template>
  <MainLayout>
    <div class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div class="bg-[#F59E0B] h-32 relative">
          <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <ProfileAvatar :user="user" @file-selected="handleFileSelected" />
          </div>
        </div>

        <div class="mt-20 px-8 pb-10">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-extrabold text-gray-900">{{ user?.name || 'Profile' }}</h1>
            <p class="text-gray-500">{{ user?.email }}</p>
          </div>

          <div v-if="loading" class="flex justify-center py-10">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#F59E0B]"></div>
          </div>
          
          <form v-else-if="user" @submit.prevent="saveChanges" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input v-model="user.name" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all" />
                </div>
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                  <input v-model="user.phone" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all" />
                </div>
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700 ml-1">Email (Default)</label>
                  <input :value="user.email" disabled class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 cursor-not-allowed" />
                </div>
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700 ml-1">Birthday</label>
                  <input type="date" v-model="user.birthday" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all" />
                </div>
            </div>

            <div class="space-y-1">
              <label class="text-sm font-semibold text-gray-700 ml-1">Bio</label>
              <textarea v-model="user.bio" rows="3" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"></textarea>
            </div>

            <ProfileDocuments 
                :user="user" 
                @update-cv="onCvChange" 
                @delete-cv="deleteCv" 
            />

            <div class="flex justify-end pt-6">
              <button 
                type="submit" 
                :disabled="loading"
                class="bg-[#F59E0B] hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95 disabled:bg-gray-300 disabled:shadow-none"
              >
                {{ loading ? 'Saving...' : 'Saved' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

