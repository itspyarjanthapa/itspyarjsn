import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
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
  SiFirebase,
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact className="h-12 w-12" />,
      color: "text-[#61DAFB]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-12 w-12" />,
      color: "text-foreground",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-12 w-12" />,
      color: "text-[#339933]",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="h-12 w-12" />,
      color: "text-foreground",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-12 w-12" />,
      color: "text-[#47A248]",
    },
    // { name: "PostgreSQL", icon: <SiPostgresql className="h-12 w-12" />, color: "text-[#4169E1]" },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-12 w-12" />,
      color: "text-[#3178C6]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-12 w-12" />,
      color: "text-[#F7DF1E]",
    },
    {
      name: "React Native",
      icon: <SiReact className="h-12 w-12" />,
      color: "text-[#61DAFB]",
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="h-12 w-12" />,
      color: "text-[#02569B]",
    },
    // { name: "Python", icon: <FaPython className="h-12 w-12" />, color: "text-[#3776AB]" },
    {
      name: "Git",
      icon: <FaGitAlt className="h-12 w-12" />,
      color: "text-[#F05032]",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="h-12 w-12" />,
      color: "text-foreground",
    },
    {
      name: "Postman",
      icon: <SiPostman className="h-12 w-12" />,
      color: "text-[#FF6C37]",
    },
    {
      name: "Figma",
      icon: <FaFigma className="h-12 w-12" />,
      color: "text-[#F24E1E]",
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="h-12 w-12" />,
      color: "text-[#31A8FF]",
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator className="h-12 w-12" />,
      color: "text-[#FF9A00]",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="h-12 w-12" />,
      color: "text-[#FFCA28]",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length);
    }, 800); // Change active card every 800ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="tech-stack"
      className="py-20 px-4 bg-secondary/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">My Arsenal</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Tech Stack & Tools
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const isActive = index === activeIndex;
            const shapes = [
              "shape-hexagon",
              "shape-octagon",
              "shape-pentagon",
              "shape-circle",
              "shape-diamond",
              "shape-rounded-square",
            ];
            const shapeClass = shapes[index % shapes.length];

            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Glowing Border Container */}
                <div
                  className={`absolute inset-0 ${shapeClass} transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-primary via-accent to-primary opacity-100 scale-105"
                      : "bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-60"
                  } blur-sm`}
                  style={{
                    animation: isActive
                      ? "rotate-gradient 2s linear infinite"
                      : "none",
                  }}
                ></div>

                {/* Card Content */}
                <div
                  className={`relative ${shapeClass} bg-background/80 backdrop-blur-xl border-2 transition-all duration-500 ${
                    isActive
                      ? "border-primary shadow-2xl shadow-primary/50 scale-105"
                      : "border-border/50 hover:border-primary/50 hover:scale-105"
                  } flex flex-col items-center justify-center p-6 cursor-pointer overflow-hidden group`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`${tech.color} text-4xl mb-3 transition-all duration-300 group-hover:scale-125 ${
                      isActive ? "scale-125 animate-bounce" : ""
                    } relative z-10 filter drop-shadow-lg`}
                  >
                    {tech.icon}
                  </div>

                  {/* Name */}
                  <span
                    className={`text-sm font-semibold text-center transition-colors duration-300 relative z-10 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {tech.name}
                  </span>

                  {/* Shine Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ${
                      isActive ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>

                {/* Floating Particles */}
                {isActive && (
                  <>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    <div
                      className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-primary to-accent"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to ${technologies[index].name}`}
            ></button>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Shape Definitions */
        .shape-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        
        .shape-octagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        
        .shape-pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        
        .shape-circle {
          clip-path: circle(50% at 50% 50%);
        }
        
        .shape-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .shape-rounded-square {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }

        /* Animations */
        @keyframes rotate-gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Hover glow effect */
        .group:hover .shape-hexagon,
        .group:hover .shape-octagon,
        .group:hover .shape-pentagon,
        .group:hover .shape-circle,
        .group:hover .shape-diamond,
        .group:hover .shape-rounded-square {
          filter: drop-shadow(0 0 20px rgba(var(--primary), 0.5));
        }
      `,
        }}
      />
    </section>
  );
};

export default TechStack;
