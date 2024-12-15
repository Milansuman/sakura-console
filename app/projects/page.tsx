"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectCard } from "@/components/custom/ProjectCard";

import { newProject, getProjects, deleteProject } from "./actions";
import { useState, useEffect, FormEvent } from "react";

export default function Projects(){
    const [dialogOpen, setDialogOpen] = useState(false);
    const [projects, setProjects] = useState<{id: number, name: string, prompt: string}[]>([]);
    
    useEffect(() => {
        (async () => {
            const dbProjects = await getProjects();
            setProjects(dbProjects);
        })();
    }, []);

    const submitProject = async (event: FormEvent) => {
        event.preventDefault();
        setDialogOpen(false)
        
        const formData = new FormData(event.target as HTMLFormElement);

        await newProject(formData);
        await syncProjects();
    }

    const syncProjects = async () => {
        const dbProjects = await getProjects();
        setProjects(dbProjects);
    }
    return (
        <div className="flex flex-col w-full gap-3 p-4">
            <h1 className="text-4xl">Projects</h1>
            <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
                <DialogTrigger asChild>
                    <Button className="w-fit">New Project</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Project</DialogTitle>
                    </DialogHeader>
                    <form className="flex flex-col gap-2" onSubmit={submitProject}>
                        <label htmlFor="name">Project Name</label>
                        <Input name="name" id="name" placeholder="Project name.." required/>
                        <label htmlFor="prompt">Prompt</label>
                        <Textarea name="prompt" placeholder="What should I build?" id="prompt" rows={5} required/>
                        <Button type="submit" className="w-fit">Start building!</Button>
                    </form>
                </DialogContent>
            </Dialog>
            <div className="flex flex-row flex-wrap w-full gap-2">
                {
                    projects.map((project) => 
                    <ProjectCard 
                        id={project.id} 
                        name={project.name} 
                        key={project.id}
                        onDelete={(id) => {deleteProject(id); syncProjects();}}
                        />
                    )
                }
            </div>
        </div>
    )
}