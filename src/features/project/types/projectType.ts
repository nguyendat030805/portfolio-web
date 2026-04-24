export interface Project {
    id?: number;
    title: string;
    description: string;
    thumbnail: string | File | null;
    link_github?: string;
    link_demo?: string;
    tech_stack: string[];
}

export interface ProjectResponse{
    status: string;
    message: string;
    data: Project[];
}