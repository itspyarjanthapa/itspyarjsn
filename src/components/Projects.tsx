import ProjectCard from "./ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaCss3,
} from "react-icons/fa";
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
  SiHtml5,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Rental Plartform (Vutungtung)",
      description:
        "A full-stack vehicle rental platform where users can book and manage vehicles by category with profile dashboards and secure payments via eSewa or cash on delivery.",
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
        "An AI-powered resume builder and chat app (Aivise) that helps users create resumes and get career coaching through interactive AI conversations, built with Next.js, Convex, Clerk, Node.js, and Express.",
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
      title: "Admn Dashboard (AdminPro)",
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
