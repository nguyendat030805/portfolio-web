import api from "@/core/api/apiService";
import type { AuthResponse, RegisterData, User } from "../types";

export const authService ={
    async register(userData: RegisterData): Promise<AuthResponse>{
        const {data} = await api.post('/auth/register', userData);
        return data
    },

    async login(credentials: { email: string; password: string }): Promise<AuthResponse>{
        const {data} = await api.post('/auth/login', credentials);
        return data;
    },

    loginWithGoogle(): void {
        const baseUrl = import.meta.env.VITE_API_URL || 'https://portfolio-api-1-xnrd.onrender.com';
        window.location.href = `${baseUrl}/auth/google`;
    },


}