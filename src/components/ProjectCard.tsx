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
    <Card
      className="group relative h-fit overflow-hidden border-2 border-border bg-card transition-all duration-500 hover:shadow-2xl animate-fade-in"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
        background:
          "linear-gradient(135deg, rgba(var(--primary-rgb, 139, 92, 246), 0.03) 0%, transparent 50%)",
      }}
    >
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(var(--primary-rgb, 139, 92, 246), 0.1), transparent 60%)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-8 h-8 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <div
        className="relative h-48 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 12px))",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-card/80" />
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
            {title}
          </h3>
          <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 ml-3 mt-2" />
        </div>

        <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 border border-border/50 group-hover:border-primary/30 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                transform: "translateY(0)",
              }}
            >
              <span className="text-primary text-sm">{tech.icon}</span>
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="group/btn flex-1"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="group/btn flex-1"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
