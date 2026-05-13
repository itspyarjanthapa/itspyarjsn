"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

type Project = {
    title: string;
    description: string;
    year: string;
    link: string;
    category: string;
    image: string;
};

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects: Project[] = [
        {
            title: "Agencify",
            year: "2026",
            category: "SAAS PLATFORM",
            description: "Advanced client onboarding and management system for modern digital agencies.",
            link: "https://tryagencify.com",
            image: "/agencify.png"
        },
        {
            title: "BuildMyVita",
            year: "2025",
            category: "PRO-TOOL",
            description: "A high-performance resume builder with real-time AI-powered optimization.",
            link: "https://buildmyvita.com",
            image: "/buildmyvita.png"
        },
        {
            title: "Who Knows?",
            year: "2025",
            category: "GAME DESIGN",
            description: "Social word game challenging knowledge and intuition across global communities.",
            link: "https://whoknowstheword.vercel.app",
            image: "/who.png"
        },
        {
            title: "Vutungtung",
            year: "2025",
            category: "MOBILITY",
            description: "End-to-end vehicle rental ecosystem with real-time tracking and verification.",
            link: "https://vutungtung-rental.vercel.app",
            image: "/vutungtung.png"
        }
    ];

    return (
        <section id="projects" className="bg-background py-20 px-6 lg:px-12 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col gap-4 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-primary" />
                        <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">Showcase</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground leading-none">
                        SELECTED <br />
                        <span className="text-muted-foreground/20 italic">WORKS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative flex flex-col gap-6"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-foreground/5 bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    data-no-cursor="true"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <a 
                                    href={project.link} 
                                    target="_blank"
                                    className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-background/90 backdrop-blur-xl border border-foreground/10 flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl"
                                >
                                    <ExternalLink className="w-8 h-8 text-foreground" />
                                </a>
                            </div>

                            <div className="flex flex-col gap-4 px-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">
                                        {project.category} — {project.year}
                                    </span>
                                    <div className="flex gap-4">
                                        <Github className="w-5 h-5 text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors" />
                                    </div>
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                            </div>
                            
                            {/* Decorative ID backdrop (on hover) */}
                            <div className="absolute -top-20 -left-10 text-[15rem] font-bold text-foreground/[0.02] pointer-events-none select-none transition-all duration-1000 group-hover:text-primary/[0.03]">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Visual Connector */}
                <div className="mt-32 w-full flex justify-center">
                   <div className="h-32 w-px bg-gradient-to-b from-foreground/20 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Projects;

