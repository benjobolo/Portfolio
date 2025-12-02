import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type ExperiencesProps = {
    Logo: string;
    title: string;
    description: string;
    date:string;
    url: string;
    stage?: boolean;
};

export const Experiences = (props: ExperiencesProps) =>{
    return(
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        target="blank">

            <img src={props.Logo} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.stage && <Badge variant="outline">Stage</Badge>}
                </div>  
                
                <p className="text-muted-foreground text-sm">{props.description}</p>
            </div>

            <div className="ml-auto">
                <p className="text-muted-foreground text-xs text-end">{props.date}</p>
            </div>

        </Link>
    )
}