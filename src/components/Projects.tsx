// import ProjectCard from "./ProjectCard";
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaDocker,
//   FaJava,
//   FaCss3,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiPostgresql,
//   SiMongodb,
//   SiNextdotjs,
//   SiExpress,
//   SiClerk,
//   SiJavascript,
//   SiMysql,
//   SiHtml5,
// } from "react-icons/si";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Vehicle Rental Plartform (Vutungtung)",
//       description:
//         "A full-stack vehicle rental platform where users can book and manage vehicles by category with profile dashboards and secure payments via eSewa or cash on delivery.",
//       techStack: [
//         { name: "React", icon: <FaReact className="h-4 w-4" /> },
//         { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
//         { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
//         { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
//         { name: "Mysql", icon: <SiMysql className="h-4 w-4" /> },
//       ],

//       liveUrl: "https://vutungtung-rental.vercel.app/",
//       imageUrl: "/vutungtung.png",
//     },
//     {
//       title: "Resume Builder & AI coach (Aivise)",
//       description:
//         "An AI-powered resume builder and chat app (Aivise) that helps users create resumes and get career coaching through interactive AI conversations, built with Next.js, Convex, Clerk, Node.js, and Express.",
//       techStack: [
//         { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
//         { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
//         { name: "Clerk", icon: <SiClerk className="h-4 w-4" /> },
//         { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
//       ],

//       liveUrl: "https://aivise-kappa.vercel.app/chat",
//       imageUrl: "/aivise.png",
//     },
//     {
//       title: "Typing Speed Test",
//       description:
//         "Challenge yourself to type quickly and precisely before the timer runs out. View your WPM and accuracy score instantly to improve your typing skills.",
//       techStack: [
//         { name: "HTML", icon: <SiHtml5 className="h-4 w-4" /> },
//         { name: "CSS", icon: <FaCss3 className="h-4 w-4" /> },
//         { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
//       ],
//       liveUrl: "https://itspyarjanchettri.github.io/Typing-Speed-Test-Game/",

//       imageUrl: "/typing_test.png",
//     },
//     {
//       title: "Admn Dashboard (AdminPro)",
//       description:
//         "A powerful admin dashboard to track users, products, orders, and analytics all in one place.",
//       techStack: [
//         { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
//         { name: "React", icon: <FaReact className="h-4 w-4" /> },
//         { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4" /> },
//       ],
//       liveUrl: "https://dashboard-nine-snowy-78.vercel.app/",

//       imageUrl: "/adminpro.png",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient animate-fade-in">
//           Featured Projects
//         </h2>
//         <p className="text-center text-muted-foreground mb-16 animate-fade-in">
//           A selection of my recent work showcasing various technologies and
//           problem-solving approaches
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaReact, FaNodeJs, FaCss3 } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiClerk,
  SiJavascript,
  SiMysql,
  SiHtml5,
} from "react-icons/si";

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  imageUrl,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-background/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>

        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/30 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-primary">Live</span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary/90 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-xl hover:scale-110 transition-transform"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              View Project
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
              title={tech.name}
            >
              {tech.icon}
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="pt-2 flex items-center justify-between">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
          >
            Visit Site
            <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

const Projects = () => {
  const projects = [
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
      imageUrl: "/Aivise.png",
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

    {
      title: "Typing Speed Test",
      description:
        "Challenge yourself to type quickly and precisely before the timer runs out. View your WPM and accuracy score instantly to improve your typing skills.",
      techStack: [
        { name: "HTML", icon: <SiHtml5 className="h-4 w-4" /> },
        { name: "CSS", icon: <FaCss3 className="h-4 w-4" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
      ],
      liveUrl: "https://itspyarjanchettri.github.io/Typing-Speed-Test-Game/",
      imageUrl: "/typing_test.png",
    },
    {
      title: "Admin Dashboard (AdminPro)",
      description:
        "A powerful admin dashboard to track users, products, orders, and analytics all in one place.",
      techStack: [
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "React", icon: <FaReact className="h-4 w-4" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4" /> },
      ],
      liveUrl: "https://dashboard-nine-snowy-78.vercel.app/",
      imageUrl: "/adminpro.png",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Auto-Scrolling Background Thumbnails */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {/* Top Row - Scroll Left */}
        <div className="absolute top-0 left-0 flex gap-8 animate-scroll-left whitespace-nowrap">
          {[...projects, ...projects, ...projects].map((project, i) => (
            <div
              key={`top-${i}`}
              className="relative w-72 h-40 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={project.imageUrl}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Middle Row - Scroll Right */}
        <div className="absolute top-1/3 left-0 flex gap-8 animate-scroll-right whitespace-nowrap">
          {[...projects, ...projects, ...projects].map((project, i) => (
            <div
              key={`mid-${i}`}
              className="relative w-72 h-40 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={project.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row - Scroll Left */}
        <div className="absolute top-2/3 left-0 flex gap-8 animate-scroll-left-slow whitespace-nowrap">
          {[...projects, ...projects, ...projects].map((project, i) => (
            <div
              key={`bot-${i}`}
              className="relative w-72 h-40 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={project.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

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
