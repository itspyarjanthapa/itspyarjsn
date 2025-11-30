// import { Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
//       </div>

//       {/* Grid Pattern Overlay */}
    
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

//       {/* YouTube Subscriber Watermark */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//         <h2 className="text-[12rem] sm:text-[16rem] md:text-[12rem]  text-center font-extrabold text-white/5 select-none uppercase tracking-widest">
//           LEARN • CODE • REPEAT
//         </h2>
//       </div>
//       <div className="max-w-6xl w-full relative z-10">
//         <div className="text-center space-y-8">
//           {/* Greeting Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
//             <Sparkles className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium text-primary">
//               Welcome to my portfolio
//             </span>
//           </div>

//           {/* Main Heading */}
//           <div className="space-y-4 animate-fade-in">
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
//               <span className="block text-gradient">Pyarjan Thapa</span>
//             </h1>
//             <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
//               <Code2 className="h-8 w-8 text-primary animate-pulse" />
//               <span className="text-gradient">Fullstack Developer</span>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delay px-4">
//             Crafting elegant solutions with modern technologies. Specialized in
//             building
//             <span className="text-primary font-semibold">
//               {" "}
//               scalable web applications
//             </span>{" "}
//             and
//             <span className="text-primary font-semibold">
//               {" "}
//               seamless user experiences
//             </span>{" "}
//             that make a difference.
//           </p>

//           {/* Stats */}
//           {/* <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 animate-fade-in-delay">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
//               <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
//               <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-gradient">15+</div>
//               <div className="text-sm text-muted-foreground mt-1">Technologies</div>
//             </div>
//           </div> */}

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay pt-4">
//             <Button
//               variant="default"
//               size="lg"
//               asChild
//               className="group w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
//             >
//               <a href="mailto:itspyarjanchhetri@gmail.com">
//                 <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Get In Touch
//               </a>
//             </Button>
//             <div className="flex gap-4 w-full sm:w-auto">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 asChild
//                 className="group flex-1 sm:flex-none"
//               >
//                 <a
//                   href="https://github.com/itspyarjanthapa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   <span className="hidden sm:inline">GitHub</span>
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 asChild
//                 className="group flex-1 sm:flex-none"
//               >
//                 <a
//                   href="https://www.linkedin.com/in/pyarjanthapa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   <span className="hidden sm:inline">LinkedIn</span>
//                 </a>
//               </Button>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="pt-16 animate-fade-in-delay">
//             <div className="inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
//               <span className="text-xs text-muted-foreground">
//                 Scroll to explore
//               </span>
//               <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
//                 <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { Github, Linkedin, Mail, Code2, Sparkles, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 right-1/4 w-32 h-32 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-accent/30 rounded-full animate-ping-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE — TEXT (Takes 7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-xl shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <span className="text-sm font-medium text-primary">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading with Split Text */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-10 w-10 text-primary animate-pulse" />
                <h2 className="text-2xl font-bold text-muted-foreground">Hi, I'm</h2>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Pyarjan
                </span>
                <span className="block text-foreground mt-2">Thapa</span>
              </h1>

              <div className="flex items-center gap-3 text-2xl font-bold">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Fullstack Developer
                </span>
                <Zap className="h-6 w-6 text-accent animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I transform ideas into{" "}
              <span className="text-primary font-semibold">pixel-perfect</span> digital
              experiences. Specializing in building{" "}
              <span className="text-accent font-semibold">scalable applications</span>{" "}
              that users love.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group shadow-xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all"
              >
                <a href="mailto:itspyarjanchhetri@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Let's Talk
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="hover:border-primary hover:text-primary transition-all">
                <a href="https://github.com/itspyarjanthapa" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="hover:border-accent hover:text-accent transition-all">
                <a href="https://www.linkedin.com/in/pyarjanthapa" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE — ANIMATED PROFILE (Takes 5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Main Container with Geometric Shapes */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-[60px] bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow opacity-75"></div>
              
              {/* Inner Container */}
              <div className="absolute inset-2 rounded-[56px] bg-background/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Pyarjan Thapa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Geometric Decorations */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-primary rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 border-4 border-accent rotate-45 animate-float" style={{ animationDelay: "0.5s" }}></div>
              
              {/* Code Brackets */}
              <div className="absolute -top-8 -left-4 text-6xl font-bold text-primary/30 animate-pulse">{"{"}</div>
              <div className="absolute -bottom-8 -right-4 text-6xl font-bold text-accent/30 animate-pulse" style={{ animationDelay: "0.5s" }}>{"}"}</div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl -z-10 animate-pulse"></div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute top-8 -left-12 hidden lg:block">
              <div className="bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">5+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 -right-12 hidden lg:block">
              <div className="bg-background/90 backdrop-blur-xl border border-accent/20 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Dedication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}} />

    </section>
  );
};

export default Hero;