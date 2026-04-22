import { ref } from 'vue';
import { profileService } from '../services/profileService';
import type{ User } from '../types/profileType';

export function useProfile() {
  const user = ref<User | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchProfile = async () => {
    loading.value = true;
    try {
        const res = await profileService.getProfile();
        user.value = res.data; 

    } catch (err: any) {
        console.error("Error:", err.message);
    } finally {
        loading.value = false;
    }
    };
    const updateBio = async (newBio: string) => {
        if (!user.value) return;
        const formData = new FormData();
        formData.append('bio', newBio);
        
        try {
            const res = await profileService.updateProfile(formData);
            
            if (res.data && typeof res.data === 'object') {
                user.value = res.data; 
            } 

            if (user.value) {
                user.value = {
                    ...user.value,
                    bio: newBio
                };
            }
            
            return res;
        } catch (err) {
            throw new Error('Update failed');
        }
    };

    const updateProfile = async (formData: FormData) => {
        loading.value = true;
        try {
            const response = await profileService.updateProfile(formData);
            if (response && response.data) {
                user.value = response.data;
            }
            alert("Update successful!");
        } catch (error) {
            alert("An error occurred!");
        } finally {
            loading.value = false;
        }
    };

    const deleteCv = async (id: number) => {
        if (!confirm("Are you sure you want to delete this CV?")) return;
        loading.value = true;
        try {
            await profileService.deleteCv(id);
            if (user.value) {
                user.value.Cv_Image = undefined;
            }
        } catch (e) {
            alert("Error deleting!");
        } finally {
            loading.value = false;
        }
    };

  return {
    user,
    loading,
    error,
    fetchProfile,
    updateBio,
    updateProfile,
    deleteCv,
  };
}