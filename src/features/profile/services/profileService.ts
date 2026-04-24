import api from "@/core/api/apiService";
import type { ProfileResponse} from "../types/profileType";

export const profileService = {
    async getProfile(): Promise<ProfileResponse>{
        const {data} = await api.get('/home');
        if (!data) {
            throw new Error("Invalid response from server");
        }
        return data;
    }, 

    async updateProfile(formData: FormData): Promise<ProfileResponse>{
        const {data} = await api.post('profile/update', formData);
        if (!data) {
            throw new Error("Invalid response from server");
        }
        return data;
    },

    async deleteCv(id:number){
        await api.delete(`profile/cv/${id}`);
    }
}