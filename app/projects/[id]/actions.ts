"use server";

import {
    getProject as getDbProject
} from "@/lib/models/projects";

export async function getProject(id: number){
    return await getDbProject(id);
}