"use client";

import { cn } from "@/lib/utils";
import { MousePointer2, Layout, Database, Code, ShieldCheck, Cpu } from "lucide-react";

/**
 * TechStack redesigned as a high-concept "Skills & Services" section 
 * featuring massive bold typography with inline graphic elements.
 */
const TechStack = () => {
  const experiences = [
    {
      id: "01",
      title: "Web development",
      tags: ["React", "Next.js", "TypeScript", "Node.js"],
      description: "Crafting scalable, high-performance web applications with a focus on clean code and user experience.",
    },
    {
      id: "02",
      title: "Interface design",
      tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      description: "Designing intuitive and visually stunning interfaces that balance aesthetics with functional clarity.",
    },
    {
      id: "03",
      title: "Component design",
      tags: ["Radix UI", "Shadcn", "Animations", "Accessibility"],
      description: "Building modular, reusable, and accessible UI components that power modern web interfaces.",
    },
    {
      id: "04",
      title: "Fullstack Engineering",
      tags: ["PostgreSQL", "Supabase", "Prisma", "AWS"],
      description: "Architecting robust backend systems and integrating them seamlessly with frontend experiences.",
    },
  ];

  return (
    <section id="experience" className="bg-background py-32 px-6 lg:px-12 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-2 mb-20 text-center lg:text-left">
          <span className="text-muted-foreground/30 text-xs font-mono tracking-[0.3em] uppercase">Experience & Work Experience</span>
          <div className="h-px w-20 bg-primary/40 mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-[2.5rem] border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-500 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors font-mono">
                  {exp.id}
                </span>
                <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-foreground/10 text-muted-foreground/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground/70 text-sm lg:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-700 rounded-l-[2.5rem]" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default TechStack;
