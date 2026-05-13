"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Send, Globe, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Contact = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", { 
                timeZone: "Asia/Kathmandu",
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: true 
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="bg-background pt-40 pb-12 px-6 lg:px-12 relative overflow-hidden selection:bg-primary/30 transition-colors duration-500">
            {/* Background Massive Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] select-none">
                <h2 className="text-[20vw] font-black uppercase leading-none -mb-10">
                    GET IN TOUCH CONTACT NOW LET'S BUILD
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end mb-32">
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">Connect</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85]">
                            READY TO <br />
                            <span className="text-primary italic">EVOLVE?</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-4 lg:text-right">
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-sm ml-auto">
                            Currently accepting new projects and collaborations for 2026. Let's create something legendary.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Contact Bento Cards */}
                    <div className="md:col-span-2 lg:col-span-2 p-10 rounded-[3rem] border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl group hover:border-primary/20 transition-all flex flex-col justify-between min-h-[300px]">
                        <div>
                            <Mail className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-2">Email me directly</h3>
                            <p className="text-muted-foreground">For project inquiries and collaborations.</p>
                        </div>
                        <a href="mailto:info@pyarjanthapa.com.np" className="text-2xl font-black hover:text-primary transition-colors mt-8 flex items-center gap-3 group/link">
                            info@pyarjanthapa.com.np
                            <ArrowUpRight className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="p-10 rounded-[3rem] border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl group hover:border-primary/20 transition-all flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span className="text-sm font-bold">Kathmandu, Nepal</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="text-sm font-mono">{time} (NPT)</span>
                            </div>
                        </div>
                        <div className="mt-12">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Status</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-bold uppercase">Online & Working</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 rounded-[3rem] border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl group hover:border-primary/20 transition-all flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <a href="https://linkedin.com/in/pyarjanthapa" target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all">
                                <span className="font-bold">LinkedIn</span>
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/itspyarjanthapa" target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all">
                                <span className="font-bold">GitHub</span>
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;

