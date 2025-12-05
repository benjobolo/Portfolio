"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "./Section"
import { ArrowUpRight, Code, HeartHandshake, HeartHandshakeIcon, LucideIcon, Smartphone, SmartphoneIcon, TabletIcon, Timer, } from "lucide-react";
import { SideProjectProps, SideProjects, Project } from "./SideProjects";
import { Experiences, ExperiencesProps } from "./Experiences";
import { ProjectModal } from "./ProjectModal";

export const Status = () =>{
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <Section classname="flex max-md:flex-col items-starts gap-4">


            <div className="flex-[3]">
                <Card className="w-full h-full p-4 flex flex-col gap-2">
                <p className="text-muted-foreground text-lg">Mes projets</p>

                <div className="flex flex-col gap-4">
                    {PROJECTS.map((project, index) =>(
                        <SideProjects
                        key={index}
                        Logo={project.Logo}
                        imgLogo={project.imgLogo}         
                        title={project.title}
                        description={project.shortDescription? project.shortDescription : project.description}
                        onClick={()=>setSelectedProject(project)}
                        
                        />
                    ))}
                </div>
                    
                </Card>
            </div>
            
            <div className=" flex-[2]  w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                <p className="text-muted-foreground text-lg">Experiences et Formations</p>
                <div className="flex flex-col gap-4">
                    {EXPERIENCES.map((exp, index) =>(
                        <Experiences
                        key={index}
                        {...exp}
                        />
                    ))}
                    {FORMATIONS.map((exp, index) =>(
                        <Experiences
                        key={index}
                        {...exp}
                        />
                    ))}
                </div>
                </Card>

                {/* <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-muted-foreground text-lg">Formation</p>
                <div className="flex flex-col gap-4">
                    {FORMATIONS.map((exp, index) =>(
                        <Experiences
                        key={index}
                        {...exp}
                        />
                    ))}
                </div>
                </Card> */}
            </div>
            <ProjectModal
                project={selectedProject}
                open={!!selectedProject}
                onOpenChange={(open) => !open && setSelectedProject(null)}
            />
        </Section>
    )
};


const descriptionUpvize=
    'J\'ai travaillé pour l\'entreprise Wecrea (Bayonne) dans le cadre de mon stage de 2ème année de BTS SIO.'+
      ' L\'objectif de ce stage était de développer une application de time-tracking pour une utilisation interne à l\'entreprise. '+
    '\n L\'application à été développée en utilisant le framework Laravel (PHP) pour le back-end et une base de données PostgreSQL pour le stockage des données. '+
    '\n L\'application permet une authentification sécurisée avec vérification par mail, un utilisateur peut créer ou rejoindre une entreprise, un administrateur d\'entreprise peut gérer les projets, les employés, et les clients de l\'entreprise. \n Chaque utilisateur peut enregistrer ses temps de travail sur différents projets auxquels il est affecté et il peut consulter son historique de tracking. \n Un administrateur d\'entreprise peut consulter les rapport de temps de travail pour chaque utilisateur et pour chaque projet. Il peut choisir une période, une date et exporter les rapports au format CSV.';

const PROJECTS: (Project & { Logo: any })[] = [
  {
    Logo: SmartphoneIcon,
    //imgLogo:"/images/BOLO_NIGHT/logo.png",
    title: "BOLO NIGHT",
    shortDescription: "Application mobile de jeux de soirée.",
    description: "Application mobile de jeux de soirée, développée dans le cadre d’un projet personnel.",
    technologies: ["React Native", "Expo" ,"TypeScript"],
    links: {
      github: "https://github.com/benjobolo/BOLO-NIGHT/",
      playstore: "https://play.google.com/store/apps/details?id=com.benjobolo.JeuxDeSoireeNew&hl=fr",
    },
    images: [
      { src: "/images/BOLO_NIGHT/home.jpg", alt: ""},
      { src: "/images/BOLO_NIGHT/dices.jpg"},
      { src: "/images/BOLO_NIGHT/maya.jpg"},
      { src: "/images/BOLO_NIGHT/quizz.jpg", alt: ""}
    ],
  },
  {
        Logo: HeartHandshakeIcon,
        title: "Plateforme d’Échange Hyperlocal",
        shortDescription:"Projet de M1 informatique",
        description: 
            "Application web développée dans le cadre d’un projet universitaire, permettant la gestion des utilisateurs, des annonces, des demandes d’échange, des messages et des avis au travers d’une interface d’administration. Le projet repose sur une architecture Spring Boot modulaire, une base de données relationnelle et des tests automatisés."
            ,
        technologies: ["Java", "Spring Boot", "Maven", "H2 Dtabase", "GitHub Actions"],
        links: {
        github: "https://github.com/benjobolo/projet_GL_BARAS",
        },
        images:[
            {src: "/images/Projet_GL/home.png"},
            {src: "/images/Projet_GL/users.png"},
            {src: "/images/Projet_GL/annonces.png"},
            {src: "/images/Projet_GL/demande.png"},
            {src: "/images/Projet_GL/message.png"},
            {src: "/images/Projet_GL/avis.png"},
            {src: "/images/Projet_GL/profil_detail.png"},
        ],
    },
{
    Logo: Timer,
    //imgLogo:"/images/Laravel_logo.jpg",
    title: "Outils de time-tracking",
    shortDescription:"Projet de stage BTS SIO",
    description: descriptionUpvize,
    technologies: ["Laravel", "PHP", "PostgreSQL"],
    images:[
        {src: "/images/Upvize/accueil.png"},
        {src: "/images/Upvize/login.png"},
        {src: "/images/Upvize/register.png"},
        {src: "/images/Upvize/creer_organisation.png"},
        {src: "/images/Upvize/inviter_organisation.png"},
        {src: "/images/Upvize/mes_organisations.png"},
        {src: "/images/Upvize/creer_client.png"},
        {src: "/images/Upvize/creer_projet.png"},
        {src: "/images/Upvize/detail_projet.png"},
        {src: "/images/Upvize/creer_tracking.png"},
        {src: "/images/Upvize/trackings_en_cours.png"},
        {src: "/images/Upvize/recap_Projet.png"},
        {src: "/images/Upvize/recap_utilisateur.png"},
        {src: "/images/Upvize/recap_csv.png"},
    ],
  },
];

const EXPERIENCES: ExperiencesProps[] = [
    {
        Logo: "./images/wecrea.png",
        title: "Wecrea",
        description: "Stage de 2ème année de BTS",
        date:"2022",
        url:"/",
        
    },


]

const FORMATIONS: ExperiencesProps[] = [
    {
        Logo: "./images/formations/loga.png",
        title: "BTS SIO SLAM",
        description: "Lycée Louis de Foix - Bayonne (64)",
        date:"2020-2022",
        url:"https://louisdefoix.fr/"

    },
    {
        Logo: "./images/formations/Logo_UPPA.jpg",
        title: "Licence Informatique",
        description: "Université de Pau et des Pays de l'Adour - Pau (64)",
        date:"2022-2025",
        url:"https://formation.univ-pau.fr/fr/catalogue/licence-XA/licence-informatique-L3VENPWZ/l1-l2-et-l3-parcours-informatique-L3VEOQMB.html",
        
    },
    
    

]
