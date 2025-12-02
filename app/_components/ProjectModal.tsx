import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Project } from "./SideProjects"
import { Section } from "./Section"

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold">
            {project.title}
          </DialogTitle>
        </DialogHeader>


        {/* Description */}
        <p className="text-muted-foreground mt-2">{project.description}</p>

        {/* Technologies */}
        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Links */}
        {project.links && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="underline hover:text-primary"
              >
                Code source ↗
              </a>
            )}

            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                className="underline hover:text-primary"
              >
                Voir le site ↗
              </a>
            )}

            {project.links.playstore && (
              <a
                href={project.links.playstore}
                target="_blank"
                className="underline hover:text-primary"
              >
                Play Store ↗
              </a>
            )}
          </div>
        )}

        {/* Images */}
{project.images && project.images.length > 0 && (
  <div className="mt-8">
    <Carousel className="w-full h-auto max-w-xl mx-auto">
      <CarouselContent>
        {project.images.map((img, index) => (
          <CarouselItem key={index}>
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className="rounded-lg border border-border shadow max-h-[500px] object-contain mx-auto"
            />
            {img.alt && (
              <p className="text-muted-foreground text-sm mt-2 text-center">
                {img.alt}
              </p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)}
      </DialogContent>
    </Dialog>
  )
}
