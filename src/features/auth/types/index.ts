export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    created_at?: string; 
}

export interface AuthResponse {
    status: string;
    message: string;
    data: {
        user: User;
        access_token: string;
    };
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}