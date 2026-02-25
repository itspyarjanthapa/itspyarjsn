"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  year: string;
  link?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "LaunchCV",
      year: "2024",
      description: "Resume Builder",
      link: "https://v1-launchcv.vercel.app/",
    },
    {
      title: "Who Knows The Word?",
      year: "2025",
      description: "Social Mobile Game",
      link: "#",
    },
    {
      title: "Vutungtung",
      year: "2025",
      description: "Vehicle Rental System",
      link: "https://vutungtung-rental.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="bg-background py-32 px-6 lg:px-12 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-2 mb-20">
          <span className="text-muted-foreground/30 text-xs font-mono tracking-[0.3em] uppercase">Selected Works</span>
          <div className="h-px w-20 bg-primary/40" />
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between py-10 lg:py-16 border-b border-foreground/10 hover:border-foreground/30 transition-colors duration-500"
            >
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground/40 text-xs font-mono uppercase tracking-widest">{project.year} // {project.description}</span>
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground/40 group-hover:text-foreground transition-all duration-700 ease-out translate-x-0 group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>

              <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                  <ArrowUpRight className="text-foreground group-hover:text-background w-8 h-8 transition-colors duration-500" />
                </div>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
