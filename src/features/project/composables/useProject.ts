import { ref } from "vue";
import type{ Project, ProjectResponse } from "../types/projectType";
import { projectService } from "../services/projectService";

export function useProject(){
    const projects = ref<Project[]>([]);
    const loading = ref(false);

    const fetchProjects = async() =>{
        loading.value = true;
        try{
            const data: ProjectResponse = await projectService.getProject();
            projects.value = data.data;
        }finally{
            loading.value = false;
        }
    };

    const addProject = async(formData: FormData)=>{
        loading.value = true;
        try {
            await projectService.createProject(formData);
            await fetchProjects();
        } catch (error) {
            
        }finally{
            loading.value = false;
        }
    };

    const editProject = async(id:number, formData: FormData)=>{
        loading.value = true;
        try {
            await projectService.updateProject(id, formData);
            await fetchProjects();
        } catch{
            alert('Update Error!')
        }finally{
            loading.value = false;
        }
    }

    const removeProject = async(id:number)=>{
        if(!confirm("Are you sure you want to delete this project?"))return;
        loading.value = true;
        try {
            await projectService.deleteProject(id);
            projects.value = projects.value.filter(p=>p.id !== id);
        } catch (error) {
            alert("Error deleting project!")
        }finally{
            loading.value = false;
        }

    };

    return{
        projects,
        loading,
        fetchProjects,
        addProject,
        editProject,
        removeProject,
    }

}