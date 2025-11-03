import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: { name: string; icon: React.ReactNode }[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl card-glow-hover animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="relative p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border group-hover:border-primary/50 transition-colors"
            >
              <span className="text-primary">{tech.icon}</span>
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-end  ">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="group/btn">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
