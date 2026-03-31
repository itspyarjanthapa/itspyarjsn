import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: { name: string; icon: React.ReactNode }[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  imageUrl: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  downloadUrl,
  imageUrl,
  index,
}: ProjectCardProps) => {

  const getOrganicShape = (name: string, i: number) => {
    // Generate deterministic values based on name characters
    const charCode = name.charCodeAt(0) + name.charCodeAt(name.length - 1) + i;

    // Generate 4 values between 30% and 70%
    const v1 = 30 + (charCode % 40);
    const v2 = 30 + ((charCode * 1.5) % 40);
    const v3 = 30 + ((charCode * 2) % 40);
    const v4 = 30 + ((charCode * 2.5) % 40);

    // Return standard blob radius format
    return `${v1}% ${100 - v1}% ${v2}% ${100 - v2}% / ${v3}% ${v4}% ${100 - v4}% ${100 - v3}%`;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const url = liveUrl || githubUrl;
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`group relative h-full flex flex-col overflow-hidden border border-white/10 bg-card/30 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] hover:border-primary/50 hover:-translate-y-2 rounded-3xl ${liveUrl || githubUrl ? 'cursor-pointer' : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Floating Badge if Live */}
        {liveUrl && (
          <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center gap-2 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Live</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative z-20 p-6 flex-1 flex flex-col space-y-4">
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r dark:from-foreground dark:to-foreground/70 from-foreground to-foreground transition-all duration-300 group-hover:from-primary group-hover:to-accent">
            {title}
          </h3>
          <p className="mt-2 text-sm dark:text-muted-foreground text-muted-foreground/80 leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 border border-foreground/5 text-xs font-medium dark:text-muted-foreground text-muted-foreground group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all delay-[50ms]"
              style={{
                borderRadius: getOrganicShape(tech.name, i)
              }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-primary/20 transition-colors">
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 px-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full z-30 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1.5" />
                  Code
                </a>
              </Button>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group/link z-30 relative cursor-pointer"
              >
                Visit
                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group/link z-30 relative cursor-pointer"
              >
                Download
                <Download className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </Card>
  );
};

export default ProjectCard;
