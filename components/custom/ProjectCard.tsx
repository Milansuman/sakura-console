import { PencilRuler, ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";

type Props = {
    id: number,
    name: string,
    onDelete: (id: number) => void
}

export function ProjectCard({id, name, onDelete}: Props){
    return (
        <div className="p-3 bg-blue-100 rounded-lg text-blue-700 min-w-52 flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
                <PencilRuler size={20}/>
                <h2 className="text-xl font-bold">{name}</h2>
                <Link href={`/projects/${id}`} className="ml-auto">
                    <ArrowRight size={20}/>
                </Link>
            </div>
            <div className="flex flex-row-reverse">
                <Trash2 size={20} className="cursor-pointer" onClick={() => onDelete(id)}/>
            </div>
        </div>
    );
}