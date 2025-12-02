import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { HTMLIcon } from "./icons/HTMLIcon"
import { JavaIcon } from "./icons/JavaIcon"
import { ContactCard } from "./ContactCard"

export const Contacts = () =>{
    return (
        <Section classname="flex flex-col items-start gap-4 ">
            <Badge variant={"outline"}>Contactez-moi</Badge>
            <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Je suis impatient de  travailler avec vous !
            </h2>

            <div className="flex max-md:flex-col w-full gap-4 ">
                <ContactCard
                    image="./images/profil.jpg"
                    name="Benjamin Baras"
                    mediumImage="./images/LinkedIn_logo.png"
                    description="Contactez-moi sur LinkedIn"
                    url="https://www.linkedin.com/in/benjamin-baras/"
                />
                <ContactCard
                    image="./images/profil.jpg"
                    name="benji.baras@outlook.fr"
                    mediumImage="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-mail-icon-vector-illustration-in-line-style-for-any-purpose-png-image_996816.jpg"
                    description="Contactez-moi par mail"
                    url="mailto:benji.baras@outlook.fr"
                />
            </div>
        </Section>
    )
}