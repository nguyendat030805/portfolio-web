export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;       
  bio?: string;          
  google_id?: string;
  Cv_Image?:string;
  phone?: string;
  birthday?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProfileResponse {
  status: string;
  message: string;
  user: User; 
}