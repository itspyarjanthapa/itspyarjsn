"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowUpRight, Quote, ChevronRight, Globe, Zap, Heart } from "lucide-react";
import { useRef } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Hero = () => {
  const scrollTo = useSmoothScroll();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-10 px-6 overflow-hidden bg-background selection:bg-primary/30 transition-colors duration-500"
    >
      {/* Background Layer: Massive Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none">
        <motion.h1 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black uppercase leading-none"
        >
          Creative Developer Designer Problem Solver Engineer
        </motion.h1>
      </div>

      {/* Main Grid Layout */}
      <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
        
        {/* Left Column: Introduction & Social Proof */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="lg:col-span-4 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Available for projects</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Visual <span className="text-primary italic">Architect</span> <br />
              & Engineer.
            </h1>

            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Merging aesthetics with performance to build digital experiences that leave a lasting impression.
            </p>
          </div>


        </motion.div>

        {/* Center Column: Hero Visual */}
        <motion.div 
          style={{ y: y1 }}
          className="lg:col-span-4 relative flex justify-center"
        >
          <div className="relative group">
            {/* Geometric Shapes Behind Image */}
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-morph pointer-events-none" />
            
            <div
              className="relative w-[300px] h-[450px] md:w-[450px] md:h-[650px] overflow-hidden rounded-[4rem] border-[1px] border-foreground/10 shadow-2xl"
              style={{
                background: "linear-gradient(to bottom, #5b9bd5 0%, #7fc3f5 30%, #a8d8f0 60%, #d6eefa 85%, #f0f9ff 100%)",
              }}
            >
              <img
                src="/profile_no_bg.png"
                alt="Pyarjan Thapa"
                className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Subtle bottom fade into background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              
              {/* Overlay Button */}
              <button 
                onClick={() => scrollTo("#projects")}
                className="absolute bottom-10 left-10 right-10 py-6 bg-foreground text-background rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
              >
                View Works <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Experience & Details */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="lg:col-span-4 flex flex-col gap-10 lg:pl-10"
        >
          <div className="relative p-10 rounded-[3rem] border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl overflow-hidden group">
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 -rotate-12 group-hover:text-primary/10 transition-colors" />
            <p className="text-2xl font-medium leading-relaxed italic mb-8 relative z-10">
              "Designing logic, <br /> 
              coding <span className="text-primary">intuition</span>."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">Philosophy</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => scrollTo("#contact")}>
              <div className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 group-hover:text-primary-foreground transition-all" />
              </div>
              <div>
                <div className="text-lg font-bold group-hover:text-primary transition-colors">Start a conversation</div>
                <div className="text-sm text-muted-foreground">Ask about current availability</div>
              </div>
            </div>

            <div className="h-px w-full bg-foreground/5" />

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Tech I Love:</span>
              {["React", "Framer", "Next.JS", "Node"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-foreground/5 rounded-lg text-xs font-bold border border-foreground/5">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;


