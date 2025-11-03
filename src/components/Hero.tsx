import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          Pyarjan Thapa
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-delay">
          Fullstack Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay">
          Building elegant solutions with modern technologies. 
          Passionate about creating seamless user experiences and scalable applications.
        </p>
        
        <div className="flex gap-4 justify-center items-center animate-fade-in-delay">
          <Button variant="default" size="lg" asChild className="group">
            <a href="mailto:itspyarjanchhetri@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
