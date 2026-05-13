"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollTo = useSmoothScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
            <div
                className={cn(
                    "flex items-center gap-2 md:gap-6 px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10 transition-all duration-300",
                    "bg-background/60 backdrop-blur-xl shadow-2xl",
                    isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"
                )}
            >
                {/* Logo/Name (Optional, but good for balance) */}
                <div className="hidden md:block font-bold text-primary mr-2">
                    PT.
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-white/10" />

                {/* Toggles */}
                <div className="flex items-center gap-1 md:gap-2">
                    <ModeToggle />

                    {/* Mobile Menu Trigger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-[80px] z-[90] md:hidden px-6 pb-6">
                    <div className="bg-background/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        scrollTo(link.href);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-white/5 text-left w-full"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
