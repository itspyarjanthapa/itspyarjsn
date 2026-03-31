"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Plus,
  Zap,
  MousePointer2,
  Layers,
  Sparkles,
  Github,
  Monitor,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Hero = () => {
  const scrollTo = useSmoothScroll();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-250, 250], [10, -10]);
  const rotateY = useTransform(smoothX, [-250, 250], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section className="relative py-10 px-6 lg:px-12 bg-background transition-colors duration-500 overflow-hidden selection:bg-primary/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Main Mesh Gradient Card - Col 1 to 6 */}
          <div className="lg:col-span-6 relative group">
            <div className="relative h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden border border-foreground/10 shadow-xl transition-colors duration-500">
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

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-10">
                <div className="flex justify-between items-start">
                  <div className="bg-background/10 backdrop-blur-md rounded-full px-4 py-2 border border-foreground/20 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                      Available for projects
                    </span>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur-2xl border border-foreground/10 rounded-[2.5rem] p-8 lg:p-10 transform transition-all duration-700 group-hover:-translate-y-2">
                  <h1 className="text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                    Engineering <span className="text-primary underline decoration-primary/30">digital</span> experiences that feel like magic.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BENTO - Col 7 to 12 */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* RIGHT SIDE BENTO - Col 7 to 12 - NOW UNIFIED */}
            <div className="lg:col-span-6">
              <motion.div
                ref={spotlightRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  mouseX.set(0);
                  mouseY.set(0);
                }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-auto lg:h-[550px] bg-foreground/5 dark:bg-foreground/10 rounded-[3rem] p-8 lg:p-12 overflow-visible lg:overflow-hidden group border border-foreground/10 transition-all duration-500 hover:border-primary/40 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-12"
              >
                {/* Spotlight Effect */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: isHovering
                      ? `radial-gradient(800px circle at ${smoothX.get() + 300}px ${smoothY.get() + 250}px, hsl(var(--primary)/0.1), transparent 80%)`
                      : ""
                  }}
                />

                {/* Left Side of Unified Card: The Craft */}
                <div className="flex-1 flex flex-col justify-between relative z-10" style={{ transform: "translateZ(40px)" }}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl text-primary transform group-hover:rotate-12 transition-transform duration-500">
                        <Zap className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Design & Dev
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
                      The Craft
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      Merging technical precision with creative intuition to build software that is both robust and beautiful.
                    </p>
                  </div>

                  {/* Animated UI Elements Bridge */}
                  <div className="relative h-24 mt-6 overflow-hidden rounded-2xl border border-foreground/5 bg-foreground/5 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [15, 50, 25, 60, 15],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                          className="w-1 rounded-full bg-primary"
                        />
                      ))}
                    </div>

                  </div>
                </div>

                {/* Right Side of Unified Card: The Showcase */}
                <div className="flex-1 flex flex-col justify-between items-center lg:items-end relative z-10" style={{ transform: "translateZ(60px)" }}>
                  <div className="text-center lg:text-right w-full">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest order-2 lg:order-1">
                        Case Studies
                      </span>
                      <div className="p-2 bg-primary text-primary-foreground rounded-lg order-1 lg:order-2">
                        <Layers className="w-4 h-4" />
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
                      Showcase
                    </h2>
                  </div>

                  {/* Stacked Cards Visual - Centered in Right Half */}
                  <div className="relative flex-1 w-full flex items-center justify-center py-6">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Card 1 */}
                      <div className="absolute w-36 h-24 bg-background border border-foreground/10 rounded-2xl rotate-[-12deg] -translate-x-4 shadow-xl transition-all duration-700 group-hover:rotate-[-20deg] group-hover:-translate-x-12 opacity-80" />
                      {/* Card 2 */}
                      <div className="absolute w-36 h-24 bg-background border border-foreground/10 rounded-2xl rotate-[8deg] translate-x-4 shadow-xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:translate-x-12 opacity-80" />
                      {/* Main Top Card */}
                      <div className="relative w-40 h-28 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110">
                        <Monitor className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-between lg:justify-end items-center gap-6">
                    <p className="text-[10px] text-muted-foreground lg:text-right max-w-[120px] leading-tight">
                      Explore a collection of high-fidelity implementations.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollTo("#projects")}
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl group-hover:shadow-primary/40 transition-shadow"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </motion.button>
                  </div>
                </div>

                {/* Divider for Desktop - Asymmetric Dynamic Line */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-foreground/10 to-transparent transform -skew-x-12" />
              </motion.div>
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
      `}</style>
    </section>
  );
};

export default Hero;
