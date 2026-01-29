"use client";

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Terminal,
  Zap,
  BookOpen,
  ArrowRight,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 py-20 overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* New Layout: Center-aligned with side decorations */}
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image at Top */}
          <div className="relative">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              {/* Animated Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-spin-slow opacity-75 blur-sm"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Pyarjan Thapa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Dots */}
              <Circle className="absolute -top-2 -right-2 h-6 w-6 text-primary fill-primary animate-bounce" />
              <Circle
                className="absolute -bottom-2 -left-2 h-5 w-5 text-accent fill-accent animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/30 shadow-lg">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-xs font-medium text-foreground">
                Open to work
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 max-w-4xl">
            {/* Greeting */}
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Terminal className="h-5 w-5 text-primary" />
              <span>Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Pyarjan Thapa
              </span>
            </h1>

            {/* Title with animated underline */}
            <div className="inline-flex flex-col items-center gap-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
                <Code2 className="h-7 w-7 text-primary" />
                Fullstack Developer
                <Zap className="h-7 w-7 text-accent animate-pulse" />
              </h2>
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting{" "}
              <span className="text-primary font-semibold">
                elegant solutions
              </span>{" "}
              through clean code. Building{" "}
              <span className="text-accent font-semibold">
                high-performance applications
              </span>{" "}
              that make a difference.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium hover:scale-105 transition-transform cursor-default backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-3xl pt-6">
            <Button
              asChild
              size="lg"
              className="col-span-2 lg:col-span-2 group shadow-xl hover:shadow-2xl bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all"
            >
              <a
                href="mailto:itspyarjanchhetri@gmail.com"
                className="flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all"
            >
              <a
                href="https://github.com/itspyarjanthapa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="lg:mr-2 h-5 w-5" />
                <span className="hidden lg:inline">GitHub</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-accent/10 hover:border-accent hover:text-accent transition-all"
            >
              <a
                href="https://www.linkedin.com/in/pyarjanthapa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="lg:mr-2 h-5 w-5" />
                <span className="hidden lg:inline">LinkedIn</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all group"
            >
              <a
                href="https://blogs.pyarjanthapa.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="lg:mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span className="hidden lg:inline">Blog</span>
              </a>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl w-full">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <Code2 className="h-8 w-8 text-primary mb-2 mx-auto" />
              <p className="text-3xl font-bold text-foreground">5+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <Sparkles className="h-8 w-8 text-accent mb-2 mx-auto" />
              <p className="text-3xl font-bold text-foreground">2+</p>
              <p className="text-sm text-muted-foreground">Years Exp</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <Terminal className="h-8 w-8 text-primary mb-2 mx-auto" />
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Passion</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-12 hidden xl:block">
          <div className="w-24 h-24 border-2 border-primary/30 rounded-lg rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-1/4 right-12 hidden xl:block">
          <div className="w-20 h-20 border-2 border-accent/30 rotate-12 animate-float"></div>
        </div>

        {/* Code Brackets */}
        <div className="absolute top-20 left-6 text-6xl font-bold text-primary/20 hidden lg:block animate-pulse">
          {"</>"}
        </div>
        <div
          className="absolute bottom-20 right-6 text-6xl font-bold text-accent/20 hidden lg:block animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          {"{}"}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
