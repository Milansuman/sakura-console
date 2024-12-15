"use server";

import { 
    addProject, 
    getProjects as getDbProjects,
    deleteProject as deleteDbProject
} from "@/lib/models/projects";

export async function newProject(formData: FormData){
    await addProject({
        name: formData.get("name") as string,
        prompt: formData.get("prompt") as string
    });
}

export async function getProjects(){
    return await getDbProjects();
}

export async function deleteProject(id: number){
    await deleteDbProject(id);
}