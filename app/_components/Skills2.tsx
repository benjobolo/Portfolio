import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { HTMLIcon } from "./icons/HTMLIcon"
import { JavaIcon } from "./icons/JavaIcon"
import { GithubIcon, LayersIcon } from "lucide-react" // tu peux changer les icônes si tu veux

export const Skills2 = () => {
    return (
        <Section classname="flex flex-col items-start gap-4">
            <Badge variant="outline">Technologies</Badge>

            <h2 className="pb-2 text-3xl font-semibold tracking-tight">
                Compétences
            </h2>

            {/* Ligne 1 : Développement */}
            <div className="flex max-md:flex-col gap-6 w-full">

                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon 
                        size={42} 
                        className=""
                    />
                    <h3 className="text-xl font-semibold">Développement web</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Notions en <Code className="text-xs">JavaScript</Code>, <Code className="text-xs">TypeScript</Code>.
                        <br/>
                        Utilisation de <Code className="text-xs">React</Code> dans plusieurs projets 
                        personnels.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <HTMLIcon size={42} />
                    <h3 className="text-xl font-semibold">Structuration & Front-end</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Bases en <Code className="text-xs">HTML5</Code> et <Code className="text-xs">CSS3</Code>.
                        <br/>
                        Utilisation du framework <Code className="text-xs">Tailwind CSS</Code>. 
                        
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <JavaIcon size={42} />
                    <h3 className="text-xl font-semibold">Programmation orientée objets</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Utilisation régulière de <Code className="text-xs">Java</Code> pendant mes études : 
                        POO, structures, interfaces graphiques (JavaFX).
                    </p>
                </div>

            </div>

            {/* Ligne 2 : Outils & En apprentissage */}
            <div className="flex max-md:flex-col gap-6 mt-4 w-full">
                <div className="flex flex-col gap-2 flex-1">
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" />
                        <path
                            d="M3 5V12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12V5"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M3 12V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V12"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>

                    <h3 className="text-2xl font-semibold tracking-tight">SQL / Databases</h3>

                    <p className="text-muted-foreground text-sm">
                        Connaissances en SQL acquises durant mes études.
                        
                        Utilisation de <Code className="text-xs">MySQL</Code>, <Code className="text-xs">MariaDB</Code> et <Code className="text-xs">PostgreSQL</Code>.
                       
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <GithubIcon size={42} className="" />
                    <h3 className="text-xl font-semibold">Outils</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Git & GitHub, Docker, Visual Studio Code. 
                        
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <LayersIcon size={42} className="currentColor" />
                    <h3 className="text-xl font-semibold">En apprentissage</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Je n’ai pas encore de spécialisation : je suis ouvert à toutes les 
                        technologies et j’apprends rapidement selon les besoins du projet.
                    </p>
                </div>
                

            </div>

        </Section>
    )
}
