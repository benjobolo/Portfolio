import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Code } from "./Code"


export const Hero = () =>{
    return(
        <Section classname="flex max-md:flex-col items-starts gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary font-bold">Benjamin Baras</h2>
                <h3 className="text-3xl font-caption">Etudiant en informatique</h3>
                <p>
                    Étudiant en Master 1 Informatique, passionné par le développement logiciel et les technologies web.
                    <br/>

                    Après une licence informatique à l’UPPA et plusieurs projets universitaires,
                    je souhaite aujourd’hui intégrer une entreprise en alternance pour monter en compétences sur des technologies 
                    modernes.
                    <br /> <br/>
                     
                    Je suis motivé, curieux, et prêt à m’investir dans un environnement où je pourrai 
                    apprendre et progresser réellement.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto ">
                <img
                    src="../../public/images/profil.jpg"
                    className="w-full h-auto max-w-xs max-md:w-56 rounded-full self-center m-auto"
                    alt="Photo de profil Benjamin"
                    style={{width: "75%", height:"auto"}}
                />
            </div>
        </Section>
    )
}