"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Layout, Database, Cpu, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * TechStack redesigned as a high-concept "Experience & Work Experience" section 
 * featuring an interactive industrial aesthetic with large typography and dynamic reveals.
 */
const TechStack = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const experiences = [
        {
            id: "01",
            title: "Web development",
            period: "2022 — Present",
            tags: ["React", "Next.js", "TypeScript", "Node.js"],
            description: "Leading frontend architecture for enterprise-scale applications, ensuring high performance and pixel-perfect design implementation.",
            icon: <Code className="w-6 h-6" />
        },
        {
            id: "02",
            title: "Interface Design",
            period: "2021 — 2022",
            tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
            description: "Crafting intuitive user journeys and scalable design systems that bridge the gap between user needs and technical feasibility.",
            icon: <Layout className="w-6 h-6" />
        },
        {
            id: "03",
            title: "Graphic / Brand Identity",
            period: "2020 — 2021",
            tags: ["Illustrator", "Photoshop", "Branding", "Typography"],
            description: "Crafting compelling visual identities and brand systems — from logo design to full brand guidelines that communicate a brand's essence.",
            icon: <Layout className="w-6 h-6" />
        },
        {
            id: "04",
            title: "Creative Technologist",
            period: "Ongoing",
            tags: ["Framer Motion", "Three.js", "GSAP", "WGL"],
            description: "Exploring the boundaries of web interactions through experimental animations and immersive 3D experiences.",
            icon: <Sparkles className="w-6 h-6" />
        },
    ];

    return (
        <section id="experience" className="bg-background py-20 px-6 lg:px-12 relative overflow-hidden transition-colors duration-500">
            {/* Background Text Overlay */}
            <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-[0.02] select-none">
                <span className="text-[20rem] font-bold leading-none tracking-tighter">EXP</span>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">Professional Journey</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground leading-none">
                            EXPERIENCE <br />
                            <span className="text-muted-foreground/20">& WORK HISTORY</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-sm lg:text-right font-medium">
                        A chronological record of solving complex problems and building impactful products.
                    </p>
                </div>

                <div className="flex flex-col border-t border-foreground/10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-foreground/10 py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-all duration-500 hover:px-8"
                        >
                            {/* Hover Backdrop */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="flex items-center gap-12 relative z-10">
                                <span className="text-xl font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">
                                    {exp.id}
                                </span>
                                <div className="flex flex-col">
                                    <h3 className="text-3xl lg:text-4xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                                        {exp.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex flex-col lg:items-end gap-4 relative z-10">
                                <div className="flex flex-wrap gap-2 lg:justify-end">
                                    {exp.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full border border-foreground/5 group-hover:border-primary/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm font-mono text-muted-foreground">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Expanded Detail on Hover (Desktop) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ 
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    x: hoveredIndex === index ? 0 : 20
                                }}
                                className="hidden lg:block absolute right-[35%] top-1/2 -translate-y-1/2 max-w-xs pointer-events-none"
                            >
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>

                            <div className="lg:hidden">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>

                            <ArrowUpRight className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-muted-foreground group-hover:text-primary transition-all group-hover:rotate-45 hidden lg:block" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

export default TechStack;

