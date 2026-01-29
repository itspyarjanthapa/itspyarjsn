import { useState } from "react";
import {
  Sparkles,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiClerk,
  SiJavascript,
  SiMysql,
  SiExpo,
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  techStack: { name: string; icon: JSX.Element }[];
  imageUrl: string;

  liveUrl?: string; // ✅ optional
  downloadUrl?: string; // ✅ optional
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Who Knows The Word?",
      description:
        "A social deduction mobile game built with React Native where players identify the imposter who doesn’t know the word.",
      techStack: [
        { name: "Expo", icon: <SiExpo className="h-4 w-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "React Native", icon: <FaReact className="h-4 w-4" /> },
      ],
      downloadUrl: "/downloads/who-knows-the-word.apk",
      imageUrl: "/who.png",
    },
    {
      title: "Resume Builder & AI Coach (Aivise)",
      description:
        "An AI-powered resume builder and chat app (Aivise) that helps users create resumes and get career coaching through interactive AI conversations, built with Next.js, Convex, Clerk, Node.js, and Express.",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
        { name: "Clerk", icon: <SiClerk className="h-4 w-4" /> },
        { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
      ],
      liveUrl: "https://aivise-kappa.vercel.app/",
      imageUrl: "/aivise.png",
    },
    {
      title: "Aurora Comfort",
      description:
        "Aurora Comfort Hotel began with a simple vision: to create a boutique hotel experience that blends the warmth of Florida hospitality with modern luxury, comfort, and convenience for every guest.",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
      ],
      liveUrl: "https://aurora-comfort.vercel.app/",
      imageUrl: "/hotelarour.png",
    },
    {
      title: "Vehicle Rental Platform (Vutungtung)",
      description:
        "A full-stack vehicle rental platform where users can book and manage vehicles by category with profile dashboards and secure payments via eSewa or cash on delivery.",
      techStack: [
        { name: "React", icon: <FaReact className="h-4 w-4" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
        { name: "MySQL", icon: <SiMysql className="h-4 w-4" /> },
      ],
      liveUrl: "https://vutungtung-rental.vercel.app/",
      imageUrl: "/vutungtung.png",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent/20 rotate-45 animate-float-slower"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">My Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="block text-foreground">Featured</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Projects
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, built with modern technologies and
            focused on delivering exceptional user experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in-up">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-left-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(55deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
        .animate-scroll-left-slow {
          animation: scroll-left-slow 45s linear infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-fill-mode: both;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Projects;
