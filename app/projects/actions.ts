"use server";

import { addProject } from "@/lib/models/projects";

export async function newProject(formData: FormData){
    await addProject({
        name: formData.get("name") as string,
        prompt: formData.get("prompt") as string
    });
}