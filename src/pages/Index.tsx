import React from "react";
import {
  MapPin,
  ExternalLink,
  Youtube,
  Sun,
  Moon,
  BookOpen,
  Mail,
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Globe,
  Briefcase,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { PROJECTS } from "@/data/projects";
import Footer from "@/components/Footer";

/* ── Tech Logo Map (using Devicons CDN, filtered to B&W) ── */
const TECH_LOGOS: Record<string, string> = {
  React:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  TailwindCSS:   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Firebase:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Zod:           "https://zod.dev/logo.svg",
  "Framer Motion":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  GSAP:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gsap/gsap-original.svg",
  "Three.js":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  Figma:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  PostgreSQL:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Supabase:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  MySQL:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "React Native":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Expo:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  Vercel:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
};

const PROFILE = {
  name: "Pyarjan Thapa",
  shortName: "PYARJAN",
  tagline: "Full-stack engineer building products people actually use.",
  bio: "I design and build web and mobile applications, from the interface to the database, with Next.js, TypeScript, Node.js and PostgreSQL. I’m based in Butwal, Nepal, and I teach coding and robotics to 300+ students. I’m open to select freelance projects and collaborations.",
  location: "Butwal, Nepal",
  email: "info@pyarjanthapa.com.np",
  github: "itspyarjanthapa",
  linkedin: "pyarjanthapa",
  instagram: "itspyarjanchhetri",
  website: "pyarjanthapa.com.np",
};

const EXPERIENCE = [
  {
    role: "Coding & Robotics Instructor",
    company: "Dursikshya Education Network Pvt Ltd",
    type: "Full-time",
    period: "2026 — Present",
    location: "Lumbinī, Nepal · On-site",
    current: true,
    desc: "Teaching coding fundamentals and robotics to students, designing curriculum and hands-on projects that bridge hardware and software concepts.",
    skills: ["Robotics", "Curriculum Design", "Teaching"],
  },
  {
    role: "Full Stack Developer",
    company: "SkillPrompt",
    type: "Full-time",
    period: "2025 — 2026",
    location: "Butwal, Nepal · On-site",
    current: false,
    desc: "Worked across the full stack — building responsive UIs, integrating third-party services, and developing RESTful APIs. Focused on UI design, seamless integrations, and backend API development.",
    skills: ["UI Development", "API Development", "Integrations"],
  },
];

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS",
  "Firebase", "PostgreSQL", "Figma", "Supabase",
];

const Index = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* ── TOP NAV ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-6 h-6 object-contain" style={{ filter: isDark ? "invert(1) brightness(2)" : "none" }} />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-foreground">{PROFILE.shortName}</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link
              to="/work"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-muted hover:bg-muted/70 transition-colors"
              title="Toggle theme"
            >
              {isDark
                ? <Sun className="w-3.5 h-3.5 text-foreground" />
                : <Moon className="w-3.5 h-3.5 text-foreground" />
              }
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8">

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="pt-10 pb-10 md:pt-14 md:pb-12 grid md:grid-cols-[1fr_200px] gap-8 md:gap-10 items-start border-b border-border animate-fade-up">
          <div>
            <h1 className="flex items-center justify-between gap-3 md:justify-start text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              <span className="min-w-0">
                Hi, I’m Pyarjan Thapa{" "}
                <span className="inline-block" style={{ animation: "wave 2.5s ease-in-out infinite" }}>👋</span>
              </span>
              <span className="md:hidden w-16 h-16 rounded-2xl overflow-hidden border border-border flex-shrink-0">
                <img src="/pp.jpeg" alt={PROFILE.name} className="w-full h-full object-cover grayscale" />
              </span>
            </h1>

            <div className="mb-5 max-w-2xl">
              <p className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                {PROFILE.tagline}
              </p>
              <p className="text-sm leading-7 text-muted-foreground mt-3">{PROFILE.bio}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{PROFILE.location}</span>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />{PROFILE.email}
              </a>
              <a href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" />@{PROFILE.github}
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-6">
              <a href="https://blogs.pyarjanthapa.com.np/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-xs px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <BookOpen className="w-3.5 h-3.5" /> Blog
              </a>
              <a href="https://www.youtube.com/@itspyarjanchhetri" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-muted text-foreground border border-border font-semibold text-xs px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </a>
              <a href="https://v0.pyarjanthapa.com.np" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-muted text-foreground border border-border font-semibold text-xs px-4 py-2 rounded-lg hover:bg-muted/60 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> Portfolio V0
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden border border-border shadow-md">
              <img src="/pp.jpeg" alt={PROFILE.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-2 font-mono">{PROFILE.name}</p>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ─────────────────────────────────────── */}
        <section className="py-10 border-b border-border animate-fade-up animate-fade-up-delay-1">
          <div className="flex items-center justify-between mb-6">
            <span className="section-label">work</span>
            <Link to="/work" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-75 transition-opacity">
              view all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROJECTS.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative h-40 bg-muted overflow-hidden">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30">
                    <ArrowUpRight className="w-6 h-6 text-white drop-shadow" />
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{p.category}</span>
                    <span className="text-[9px] text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="font-bold text-sm">{p.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ────────────────────────────────────────────── */}
        <section className="py-10 border-b border-border animate-fade-up animate-fade-up-delay-2">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="section-label">experience</span>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role + exp.company} className="py-5 flex gap-5 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <div>
                      <p className="font-bold text-sm">{exp.role}</p>
                      <p className="text-xs text-muted-foreground">{exp.company} · {exp.type}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 bg-muted border border-border text-foreground text-[9px] font-bold px-2 py-0.5 rounded-full">
                          <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
                          Present
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5 mb-2">{exp.location}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.skills.map((s) => (
                        <span key={s} className="text-[9px] font-semibold bg-muted border border-border text-muted-foreground px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECH STACK MARQUEE ────────────────────────────────────── */}
        <section className="py-6 border-b border-border overflow-hidden animate-fade-up animate-fade-up-delay-3">
          <div className="flex whitespace-nowrap animate-marquee gap-0">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div key={i} className="inline-flex items-center gap-6 px-5">
                {TECH_LOGOS[tech] ? (
                  <img
                    src={TECH_LOGOS[tech]}
                    alt={tech}
                    title={tech}
                    className="w-7 h-7 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    style={{ filter: isDark ? "brightness(1.1)" : "grayscale(100%) brightness(0.4)" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                ) : (
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{tech}</span>
                )}
                <span className="w-1 h-1 rounded-full bg-border inline-block" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CONNECT ───────────────────────────────────────────────── */}
        <section className="py-10 border-b border-border">
          <span className="section-label block mb-5">connect</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
            {[
              { icon: <Mail className="w-4 h-4 text-foreground" />, label: "Email", val: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: <Github className="w-4 h-4" />, label: "GitHub", val: `@${PROFILE.github}`, href: `https://github.com/${PROFILE.github}` },
              { icon: <Linkedin className="w-4 h-4 text-foreground" />, label: "LinkedIn", val: `in/${PROFILE.linkedin}`, href: `https://linkedin.com/in/${PROFILE.linkedin}` },
              { icon: <Instagram className="w-4 h-4 text-foreground" />, label: "Instagram", val: `@${PROFILE.instagram}`, href: `https://instagram.com/${PROFILE.instagram}` },
              { icon: <Globe className="w-4 h-4 text-foreground" />, label: "Blog", val: "blogs.pyarjanthapa.com.np", href: "https://blogs.pyarjanthapa.com.np" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">{item.label}</p>
                  <p className="text-xs font-semibold group-hover:text-primary transition-colors">{item.val}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
