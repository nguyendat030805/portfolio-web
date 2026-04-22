import api from "@/core/api/apiService";
import type { Project, ProjectResponse } from "../types/projectType";

export const projectService = {
    async getProject(): Promise<ProjectResponse>{
        const {data} = await api.get('/projects');
        if (!data) {
            throw new Error("Invalid response from server");
        }
        return data;
    },

    async createProject(formData: FormData): Promise<Project>{
        const {data} = await api.post('/projects', formData);
        if (!data) {
            throw new Error("Invalid response from server");
        }
        return data;
    },

    async updateProject(id:number, formData: FormData): Promise<Project>{
        formData.append('_method', 'PUT');
        const {data} = await api.post(`/projects/${id}`, formData);
        if (!data) {
            throw new Error("Invalid response from server");
        }
        return data;
    },

    async deleteProject(id:number): Promise<void>{
       await api.delete(`/projects/${id}`);
    }
}