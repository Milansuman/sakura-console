"use client";
import { ArrowLeft, Send} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useState, useEffect, useRef, use } from "react";
import { getProject } from "./actions";

export default function Page({params}: {params: Promise<{id: number}>}){
    const id = use(params).id;
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [project, setProject] = useState({
        name: "",
        prompt: "",
        id: 0
    });

    useEffect(() => {
        (async () => {
            const dbProject = await getProject(id);
            setProject(dbProject!);
        })();
    }, [])

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-row p-4 border-b border-neutral-300 gap-3 items-center">
                <Link href="/projects">
                    <ArrowLeft />
                </Link>
                <h2 className="text-xl">{project.name}</h2>
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col border-r border-neutral-300 w-[40%] p-3">
                    <div className="flex flex-col gap-3 flex-grow">

                    </div>
                    <form className="flex flex-row gap-2">
                        <Textarea name="prompt" placeholder="prompt..." rows={3}/>
                        <div className="flex flex-col gap-2">
                            <Button className="w-fit ml-auto" variant={"secondary"}>
                                <Send/>
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-row w-[60%]">
                    <div className="p-3 border-r border-neutral-300 min-w-48">
                        <p className="text-neutral-700">No files yet</p>
                    </div>
                    <div className="h-full w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}