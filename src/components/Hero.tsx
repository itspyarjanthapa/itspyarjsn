"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Plus,
  Sparkles,
  Layout,
  MousePointer2,
  Layers,
  Palette,
  Zap,
  Box,
  Brain,
  Monitor,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const carouselItems = [
  {
    id: 1,
    tag: "UI Project",
    title: "Modern dashboard interface",
    description:
      "A clean, modular dashboard designed with focus on clarity and visual hierarchy.",
  },
  {
    id: 2,
    tag: "UX Project",
    title: "End-to-end user flow redesign",
    description:
      "Streamlined navigation and improved task flow for better usability.",
  },
  {
    id: 3,
    tag: "Design System",
    title: "Component-driven design system",
    description:
      "A scalable UI library built with consistent spacing, color, and motion patterns.",
  },
  {
    id: 4,
    tag: "Visual Concept",
    title: "Gradient-rich visual exploration",
    description:
      "Modern soft gradients, depth layers, and vibrant color experimentation.",
  },
  {
    id: 5,
    tag: "Interaction Design",
    title: "Micro-interaction motion work",
    description:
      "Smooth transitions and feedback animations for meaningful interactions.",
  },
  {
    id: 6,
    tag: "Product UI",
    title: "Minimalist product interface",
    description:
      "A clean, distraction-free layout focused on simplicity and usability.",
  },
  {
    id: 7,
    tag: "Creative Concept",
    title: "Experimental UI concepts",
    description:
      "Unique shapes, abstract layouts, and expressive visual direction.",
  },
  {
    id: 8,
    tag: "Web App UI",
    title: "High-fidelity web app screens",
    description:
      "Polished layouts with precise typography and component styling.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 px-6 lg:px-12 bg-background transition-colors duration-500 overflow-hidden selection:bg-primary/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Mesh Gradient Card */}
          <div className="lg:col-span-6 relative group">
            <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden border border-foreground/10 shadow-xl transition-colors duration-500">
              {/* Mesh Gradient Background */}
              <div className="absolute inset-0 bg-[#3b82f6]">
                <div
                  className="absolute inset-0 opacity-70 mix-blend-overlay animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 30%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-40 animate-slow-pan"
                  style={{
                    backgroundImage:
                      "url('https://grainy-gradients.vercel.app/noise.svg')",
                    backgroundSize: "200px",
                    filter: "contrast(150%) brightness(1000%)",
                  }}
                />
              </div>

              {/* Text Overlay on Canvas */}
              <div className="absolute bottom-10 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    Equal parts creative developer & designer
                  </h2>
                </div>
              </div>

              {/* Floating element in mesh card */}
              <div className="absolute top-6 left-6">
                <div className="bg-background/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-foreground/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-foreground text-[10px] font-medium uppercase tracking-wider">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Carousel Field */}
          <div className="lg:col-span-3 relative h-[400px] lg:h-[500px]">
            <div className="w-full h-full aspect-square rounded-[2.5rem] lg:rounded-full border border-dashed border-foreground/20 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors duration-500 bg-background/20 backdrop-blur-sm overflow-hidden p-6">
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -10 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="flex flex-col items-center text-center px-2"
                  >
                    <div className="text-[9px] text-primary font-bold uppercase tracking-[0.2em] mb-2 px-2 py-0.5 bg-primary/10 rounded-full">
                      {carouselItems[currentIndex].tag}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight tracking-tight">
                      {carouselItems[currentIndex].title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed max-w-[160px]">
                      {carouselItems[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Dots inside Circle */}
                <div className="absolute bottom-6 flex gap-1">
                  {carouselItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={cn(
                        "w-1 h-1 rounded-full transition-all duration-300",
                        currentIndex === i
                          ? "w-3 bg-primary"
                          : "bg-foreground/20 hover:bg-foreground/40",
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Spinning Ring */}
              <div className="absolute inset-4 lg:inset-0 rounded-full border-t-2 border-primary/40 animate-spin-slow opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>

          {/* Project Highlight Card */}
          <div className="lg:col-span-3 relative h-[400px] lg:h-[500px]">
            <div className="w-full h-full bg-foreground/5 dark:bg-foreground/10 rounded-[2.5rem] p-6 lg:p-8 relative overflow-hidden group border border-foreground/10 flex flex-col justify-between transition-all duration-500 hover:bg-foreground/[0.07] dark:hover:bg-foreground/[0.12]">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                      Portfolio
                    </span>
                  </div>
                  <button
                    onClick={() => scrollTo("#projects")}
                    className="w-8 h-8 rounded-full bg-background border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Projects I've Done
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Dashboard", "SaaS", "Mobile", "Web App"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium px-2 py-0.5 bg-foreground/5 rounded-full border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Explore a curated selection of my latest work, from concept
                    to high-fidelity implementation.
                  </p>
                </div>
              </div>

              {/* Decorative elements for card */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .animate-slow-pan {
          animation: slow-pan 20s linear infinite alternate;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
