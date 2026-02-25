"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileHeader = () => {
    return (
        <section id="profile" className="bg-background pt-32 pb-16 px-6 lg:px-12 selection:bg-primary/30 transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-foreground/5 pb-16">
                    <div className="flex flex-col md:flex-row items-center gap-8 group">
                        <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-[2.5rem] overflow-hidden border-2 border-foreground/10 group-hover:border-primary/50 transition-colors duration-500">
                            <img
                                src="/profile.jpg"
                                alt="Pyarjan Thapa"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="text-3xl lg:text-4xl font-black text-foreground">
                                Pyarjan Thapa
                            </h1>
                            <p className="text-muted-foreground max-w-sm text-lg font-medium leading-relaxed">
                                A highly dedicated and passionate
                                <span className="text-foreground"> Fullstack Developer & Designer </span>
                                based in Nepal.
                            </p>

                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <Button variant="outline" className="rounded-full border-foreground/10 hover:bg-foreground hover:text-background transition-all group px-6">
                                    <a href="mailto:itspyarjanchhetri@gmail.com" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        Get in touch
                                    </a>
                                </Button>

                                <div className="flex items-center gap-2">
                                    <a href="https://github.com/itspyarjanthapa" target="_blank" className="p-2 border border-foreground/10 rounded-full hover:border-foreground transition-colors">
                                        <Github className="w-5 h-5 text-foreground" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pyarjanthapa" target="_blank" className="p-2 border border-foreground/10 rounded-full hover:border-foreground transition-colors">
                                        <Linkedin className="w-5 h-5 text-foreground" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="relative p-12 rounded-[3rem] border border-foreground/5 bg-foreground/5 backdrop-blur-3xl overflow-hidden group hover:border-primary/20 transition-colors">
                            <div className="absolute top-0 right-0 p-6">
                                <ArrowUpRight className="text-foreground/20 group-hover:text-primary transition-colors w-8 h-8" />
                            </div>
                            <div className="relative z-10 flex flex-col gap-2">
                                <span className="text-primary text-[10px] font-mono uppercase tracking-[0.3em]">Quick Links</span>
                                <a href="https://blogs.pyarjanthapa.com.np/" target="_blank" className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">Blog</a>
                                <a href="https://github.com/itspyarjanthapa" target="_blank" className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">GitHub</a>
                                <a href="https://www.linkedin.com/in/pyarjanthapa" target="_blank" className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileHeader;
