import { PencilRuler } from "lucide-react";

type Props = {
    id: number,
    name: string
}

export function ProjectCard({id, name}: Props){
    return (
        <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
            <div className="flex flex-row gap-2 items-center">
                <PencilRuler size={20}/>
                <h2 className="text-xl font-bold">{name}</h2>
            </div>
        </div>
    );
}