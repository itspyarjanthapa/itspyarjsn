import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiClerk,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Rental System (Vutungtung)",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure payment integration. Built with modern web technologies for optimal performance.",
      techStack: [
        { name: "React", icon: <FaReact className="h-4 w-4" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
        { name: "Mysql", icon: <SiMysql className="h-4 w-4" /> },
      ],

      liveUrl: "https://vutungtung-rental.vercel.app/",
      imageUrl: "/vutungtung.png",
    },
    {
      title: "Resume Builder & AI coach (Aivise)",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
        { name: "Clerk", icon: <SiClerk className="h-4 w-4" /> },
        { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
      ],

      liveUrl: "https://aivise-kappa.vercel.app/chat",
      imageUrl: "/aivise.png",
    },
    {
      title: "Clothing Store (Magnis)",
      description:
        "AI-powered content generation tool leveraging machine learning models to create high-quality written content with customizable parameters.",
      techStack: [
        { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
        { name: "React", icon: <FaReact className="h-4 w-4" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4" /> },
      ],
      liveUrl: "https://magnis-store-co.vercel.app/",

      imageUrl: "/magnis.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient animate-fade-in">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 animate-fade-in">
          A selection of my recent work showcasing various technologies and
          problem-solving approaches
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
