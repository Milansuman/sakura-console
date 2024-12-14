import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { newProject } from "./actions";

export default function Projects(){
    return (
        <div className="flex flex-col w-full gap-3 p-4">
            <h1 className="text-4xl">Projects</h1>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-fit">New Project</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Project</DialogTitle>
                    </DialogHeader>
                    <form action={newProject} className="flex flex-col gap-2">
                        <label htmlFor="name">Project Name</label>
                        <Input name="name" id="name" placeholder="Project name.." required/>
                        <label htmlFor="prompt">Description</label>
                        <Textarea name="prompt" placeholder="What should I build?" id="prompt" rows={5} required/>
                        <Button type="submit" className="w-fit">Start building!</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}