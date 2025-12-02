import { LucideIcon } from "lucide-react";

export type SideProjectProps = {
  Logo: LucideIcon;
  imgLogo?:string;
  title: string;
  description: string;
  onClick?: () => void;
};

export type Project = {
  title: string;
  imgLogo?:string;
  shortDescription?: string;
  description: string;
  technologies?: string[];
  links?: {
    github?: string;
    website?: string;
    playstore?: string;
  };
  images?: { src: string; alt?: string }[];
};

export const SideProjects = (props: SideProjectProps) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full text-left inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      {/* <span className="bg-accent text-accent-foreground  rounded-sm currentColor"> */}
        {props.imgLogo ? (
          <img src={props.imgLogo} alt={props.title} className="w-14 h-14 rounded"/>
        ) : (

          <props.Logo size={56} />
        )}
        
      {/* </span> */}
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-muted-foreground text-lg">{props.description}</p>
      </div>
    </button>
  );
};
