import api from "@/core/api/apiService";
import type { ProfileResponse} from "../types/profileType";

export const profileService = {
    async getProfile(): Promise<ProfileResponse>{
        const {data} = await api.get('/home');
        return data;
    }, 

    async updateProfile(formData: FormData): Promise<ProfileResponse>{
        const {data} = await api.post('profile/update', formData);
        return data;
    },

    async deleteCv(id:number){
        await api.delete(`profile/cv/${id}`);
    }
}