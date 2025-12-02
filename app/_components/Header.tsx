import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { CVIcon } from "./icons/CVIcon"

export const Header= () =>{
    return(
        <header className="sticky top-0 py-4">
            <Section classname="flex item-baseline">
                {/* <h1 className="text-lg font-bold text-primary-foreground text-gl">benjamin.com</h1> */}
                
            
            <div className="flex-1"/>
            <ul className="flex items-center gap-2">
                <Link
                    href="https://github.com/benjobolo" 
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} 
                    target="blank">
                    <GithubIcon size={16} className="text-foreground "/>
                
                </Link>
                <Link
                    href="https://www.linkedin.com/in/benjamin-baras/" 
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} 
                    target="blank">
                    <LinkedinIcon size={16} className="text-foreground"/>
                
                </Link>

                <Link
                    href="/CV.pdf" 
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")} 
                    target="blank">
                    <CVIcon size={50} className="text-foreground"/>
                
                </Link>
            
            </ul>
            </Section>
        </header>
    )
}