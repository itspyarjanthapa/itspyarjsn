"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-20 px-6 lg:px-12 selection:bg-primary/30 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">

        {/* Major CTA Banner */}
        <div className="relative w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[#3b82f6]">
            <div className="absolute inset-0 opacity-80 mix-blend-overlay"
              style={{
                background: "radial-gradient(circle at 70% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)"
              }}
            />
            <div className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                backgroundSize: "200px",
                filter: "contrast(150%) brightness(1000%)"
              }}
            />
          </div>

          <div className="relative z-10 p-12 lg:p-24 flex flex-col lg:flex-row items-end  justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
                Wanna create something awesome together?
              </h2>
              <p className="text-white/80 text-sm lg:text-base font-medium opacity-60">
                Don't like fancy buttons? Reach out at <span className="underline decoration-white/30 hover:decoration-white transition-all cursor-pointer">itspyarjanchhetri@gmail.com</span>
              </p>
            </div>


            <Button
              size="lg"
              className="h-20 px-12 rounded-full bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-all text-xl font-bold group"
              asChild
            >
              <a href="mailto:itspyarjanchhetri@gmail.com" className="flex items-center gap-3">
                Let's talk
                <Send className="w-6 h-6 group-hover:translate-l-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>

          </div>
        </div>

        {/* Final Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-foreground/5 pt-12 text-muted-foreground/20 font-mono text-xs mb-12 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} Pyarjan Thapa - All rights reserved
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
