import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiPostman, 
  SiReact, 
  SiFlutter, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiFirebase 
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <FaReact className="h-12 w-12" />, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12" />, color: "text-foreground" },
    { name: "Node.js", icon: <FaNodeJs className="h-12 w-12" />, color: "text-[#339933]" },
    { name: "Express.js", icon: <SiExpress className="h-12 w-12" />, color: "text-foreground" },
    { name: "MongoDB", icon: <SiMongodb className="h-12 w-12" />, color: "text-[#47A248]" },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-12 w-12" />, color: "text-[#4169E1]" },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" />, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: <SiJavascript className="h-12 w-12" />, color: "text-[#F7DF1E]" },
    { name: "React Native", icon: <SiReact className="h-12 w-12" />, color: "text-[#61DAFB]" },
    { name: "Flutter", icon: <SiFlutter className="h-12 w-12" />, color: "text-[#02569B]" },
    { name: "Python", icon: <FaPython className="h-12 w-12" />, color: "text-[#3776AB]" },
    { name: "Git", icon: <FaGitAlt className="h-12 w-12" />, color: "text-[#F05032]" },
    { name: "GitHub", icon: <FaGithub className="h-12 w-12" />, color: "text-foreground" },
    { name: "Postman", icon: <SiPostman className="h-12 w-12" />, color: "text-[#FF6C37]" },
    { name: "Figma", icon: <FaFigma className="h-12 w-12" />, color: "text-[#F24E1E]" },
    { name: "Photoshop", icon: <SiAdobephotoshop className="h-12 w-12" />, color: "text-[#31A8FF]" },
    { name: "Illustrator", icon: <SiAdobeillustrator className="h-12 w-12" />, color: "text-[#FF9A00]" },
    { name: "Firebase", icon: <SiFirebase className="h-12 w-12" />, color: "text-[#FFCA28]" },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient animate-fade-in">
          Tech Stack & Tools
        </h2>
        <p className="text-center text-muted-foreground mb-16 animate-fade-in">
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-2xl card-glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110 mb-3`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
