import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '../service/AuthService';
import type { RegisterData } from '../types';

export function useAuth() {
    const router = useRouter();
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const login = async (credentials: Pick<RegisterData, 'email' | 'password'>) => {
        isLoading.value = true;
        error.value = null;
        try {
            const res = await authService.login(credentials);
            const token = res.data.access_token || res.data?.access_token;

            if (token) {
                localStorage.setItem('token', token);
                router.replace('/home'); 
            } else {
                throw new Error('Token not found in the server response.');
            }
        } catch (err: any) {
            error.value = err.response?.data?.message || 'Login failed';
        } finally {
            isLoading.value = false;
        }
    };

    const register = async (data: RegisterData) => {
        isLoading.value = true;
        error.value = null;
        try {
            const res = await authService.register(data);
            localStorage.setItem('token', res.data.access_token);
            alert('Registration successful')
            router.push('/login');
        } catch (err: any) {
            error.value = err.response?.data?.message || 'Registration failed';
        } finally {
            isLoading.value = false;
        }
    };

    const handleGoogleLogin = () => authService.loginWithGoogle();

    const handleAuthCallback = async (token: string) => {
        if (token) {
            localStorage.setItem('token', token);
            try {
                router.replace('/home');
            } catch (e) {
                router.push('/login');
            }
        }
    };

    return {
        isLoading,
        error,
        login,
        register,
        handleGoogleLogin,
        handleAuthCallback
    };
}