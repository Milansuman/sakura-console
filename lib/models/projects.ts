import db from "../db/db";
import { projects } from "../db/schema";
import { eq, InferInsertModel } from "drizzle-orm";

export async function addProject(project: InferInsertModel<typeof projects>){
    return (await db.insert(projects).values(project).returning()).at(0);
}

export async function getProjects(){
    return await db.select().from(projects);
}

export async function deleteProject(id: number){
    await db.delete(projects).where(eq(projects.id, id));
}