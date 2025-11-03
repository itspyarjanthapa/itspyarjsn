import { Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-gradient">Pyarjan Thapa</span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
              <Code2 className="h-8 w-8 text-primary animate-pulse" />
              <span className="text-gradient">Fullstack Developer</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delay px-4">
            Crafting elegant solutions with modern technologies. Specialized in building 
            <span className="text-primary font-semibold"> scalable web applications</span> and 
            <span className="text-primary font-semibold"> seamless user experiences</span> that make a difference.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 animate-fade-in-delay">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay pt-4">
            <Button variant="default" size="lg" asChild className="group w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
              <a href="mailto:itspyarjanchhetri@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </Button>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button variant="outline" size="lg" asChild className="group flex-1 sm:flex-none">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group flex-1 sm:flex-none">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fade-in-delay">
            <div className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
