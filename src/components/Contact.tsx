import { Mail, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in">
          Feel free to reach out for collaborations, opportunities, or just a
          friendly chat
        </p>

        <Card className="p-8 bg-card border-2 border-border card-glow animate-scale-in">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:itspyarjanchhetri@gmail.com"
                className="text-lg hover:text-primary transition-colors font-medium"
              >
                itspyarjanchhetri@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Button variant="outline" size="lg" asChild className="group">
                <a
                  href="https://github.com/itspyarjanthapa "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="group">
                <a
                  href="https://www.linkedin.com/in/pyarjanthapa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <p className="mt-12 text-sm text-muted-foreground animate-fade-in-delay">
          © 2024 Pyarjan Thapa.
        </p>
      </div>
    </section>
  );
};

export default Contact;
