import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { HTMLIcon } from "./icons/HTMLIcon"
import { JavaIcon } from "./icons/JavaIcon"

export const Skills = () =>{
    return (
        <Section classname="flex flex-col items-start gap-4 ">
            <Badge variant={"outline"}>Technologies</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Compétences
            </h2>

            <div className="flex max-md:flex-col gap-4 ">

                <div className="flex flex-col gap-2 flex-1">
                        <ReactIcon size={42} className="animate-spin" style={{
                            animationDuration: "10s"
                        }}/>
                    <h3 className="text-2xl font-semibold tracking-tight ">React</h3>
                    <p className="text-muted-foreground text-sm">
                        Mon framework favoris est <Code>React</Code> je l'utilise pour mes projets personnels
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                        <HTMLIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight ">HTML</h3>
                    <p className="text-muted-foreground text-sm">
                        Je maîtrise HTML 5 pour structurer mes pages web de manière efficace.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                        <JavaIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight ">JAVA</h3>
                    <p className="text-muted-foreground text-sm">
                        Java est un langage que j'ai beaucoup utilisé durant mes études universitaires.
                    </p>
                </div>

            </div>
        </Section>
    )
}