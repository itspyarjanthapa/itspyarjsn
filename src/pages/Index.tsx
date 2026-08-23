import React, { useState } from "react";
import {
  MapPin,
  Link as LinkIcon,
  Globe2,
  ExternalLink,
  Youtube,
  Sun,
  Moon,
  BookOpen,
  Mail,
  Github,
  Instagram,
  Linkedin,
  Briefcase,
  User,
  Phone,
  Zap,
  CheckCircle2,
  MessageSquare,
  Code2,
  Clock,
  Rocket,
  FileText,
  Gamepad2,
  Megaphone,
  Bike,
  CalendarDays,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

type Post = {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  category?: string;
  image?: string;
  link?: string;
  tags?: string[];
  type: "project" | "experience" | "post";
  icon?: React.ReactNode;
};

type Tab = "posts" | "projects" | "about" | "contact";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
];

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  const profile = {
    name: "Pyarjan Thapa",
    headline: "Full Stack Engineer | UI/UX Designer | Building scalable web solutions",
    location: "Butwal, Nepal",
    from: "Syangja",
    website: "pyarjanthapa.com.np",
    instagram: "itspyarjanchhetri",
    email: "info@pyarjanthapa.com.np",
    github: "itspyarjanthapa",
    linkedin: "pyarjanthapa",
  };

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "agencify",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      author: "Agencify",
      avatar: "/pp.jpeg",
      time: "2026",
      content: "Advanced client onboarding and management system for modern digital agencies.",
      category: "SAAS PLATFORM",
      image: "/agencify.png",
      link: "https://tryagencify.com",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      id: "buildmyvita",
      type: "project",
      icon: <FileText className="w-4 h-4" />,
      author: "BuildMyVita",
      avatar: "/pp.jpeg",
      time: "2025",
      content: "A high-performance resume builder with real-time AI-powered optimization.",
      category: "PRO-TOOL",
      image: "/buildmyvita.png",
      link: "https://buildmyvita.com",
      tags: ["React", "AI Integration", "Node.js", "Zod"],
    },
    {
      id: "whoknows",
      type: "project",
      icon: <Gamepad2 className="w-4 h-4" />,
      author: "Who Knows?",
      avatar: "/pp.jpeg",
      time: "2025",
      content: "Social word game challenging knowledge and intuition across global communities.",
      category: "GAME DESIGN",
      image: "/who.png",
      link: "https://whoknowstheword.vercel.app",
      tags: ["Vite", "TailwindCSS", "Framer Motion"],
    },
    {
      id: "multipostr",
      type: "project",
      icon: <Megaphone className="w-4 h-4" />,
      author: "MultiPostr",
      avatar: "/pp.jpeg",
      time: "2026",
      content: "MultiPostr is designed for anyone who wants to maximize their impact on social media without burning out.",
      category: "SOCIAL UTILITY",
      image: "/multipostr.jpeg",
      link: "https://multipostr.pyarjanthapa.com.np/",
      tags: ["React", "API Integrations", "OAuth", "Tailwind"],
    },
    {
      id: "vutungtung",
      type: "project",
      icon: <Bike className="w-4 h-4" />,
      author: "Vutungtung",
      avatar: "/pp.jpeg",
      time: "2025",
      content: "End-to-end vehicle rental ecosystem with real-time tracking and verification.",
      category: "MOBILITY",
      image: "/vutungtung.png",
      link: "https://vutungtung-rental.vercel.app",
      tags: ["React", "Mapbox", "Firebase", "Realtime DB"],
    },
  ]);

  const handleFeatureClick = (postId: string) => {
    const index = posts.findIndex((p) => p.id === postId);
    if (index !== -1) {
      const updatedPosts = [...posts];
      const [clicked] = updatedPosts.splice(index, 1);
      setPosts([clicked, ...updatedPosts]);
      setActiveTab("projects");
      document.getElementById("main-feed-columns")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const coverGradient =
    theme === "dark"
      ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)"
      : "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 40%, #a5b4fc 100%)";

  // Filtered posts per tab
  const visiblePosts =
    activeTab === "projects"
      ? posts.filter((p) => p.type === "project")
      : activeTab === "posts"
        ? posts
        : [];

  // ── About panel ────────────────────────────────────────────────────────────
  const AboutPanel = () => (
    <div className="flex flex-col gap-5">

      {/* Bio / Description */}
      <div className="bg-card rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm p-5">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
          <User className="w-5 h-5 text-primary" /> About Me
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Hey! I'm <span className="text-foreground font-semibold">Pyarjan Thapa</span> — a Full Stack Engineer
          and UI/UX Designer based in Butwal, Nepal. I build fast, beautiful, and scalable digital products
          that solve real-world problems.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Over the past few years I've shipped SaaS platforms, productivity tools, game apps, and mobility
          ecosystems — always with a focus on clean code, great design, and delightful user experiences.
          I'm passionate about open-source, creative technology, and turning ideas into live products.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          When I'm not coding, you'll find me writing on my blog, experimenting with 3D graphics, or
          designing brand identities. I'm originally from <span className="text-foreground font-semibold">Syangja</span> and
          currently available for freelance projects and collaborations.
        </p>

        {/* Quick stat pills */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5 border border-neutral-200 dark:border-neutral-800">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-extrabold text-foreground">1.5+</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Years of experience</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5 border border-neutral-200 dark:border-neutral-800">
            <Code2 className="w-4 h-4 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-extrabold text-foreground">5+</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Projects shipped</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5 border border-neutral-200 dark:border-neutral-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-extrabold text-foreground">Available</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Open to freelance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-card rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm p-5">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" /> Experience
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { role: "Full Stack Engineer", period: "2022 — Present", desc: "Leading frontend architectures and building scalable web solutions." },
            { role: "Interface / UX Designer", period: "2021 — 2022", desc: "Crafting scalable design systems and user-centered interfaces." },
            { role: "Graphic & Brand Designer", period: "2020 — 2021", desc: "Designing visual brand guidelines and creative assets." },
          ].map((exp) => (
            <div key={exp.role} className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">{exp.role}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── Contact panel ───────────────────────────────────────────────────────────
  const ContactPanel = () => (
    <div className="bg-card rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm p-5">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-primary" /> Get In Touch
      </h2>
      <div className="flex flex-col gap-3">
        {[
          {
            icon: <Mail className="w-5 h-5 text-red-500" />,
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
          },
          {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            value: `@${profile.github}`,
            href: `https://github.com/${profile.github}`,
          },
          {
            icon: <Linkedin className="w-5 h-5 text-blue-600" />,
            label: "LinkedIn",
            value: `in/${profile.linkedin}`,
            href: `https://linkedin.com/in/${profile.linkedin}`,
          },
          {
            icon: <Instagram className="w-5 h-5 text-pink-500" />,
            label: "Instagram",
            value: `@${profile.instagram}`,
            href: `https://instagram.com/${profile.instagram}`,
          },

        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-card border border-neutral-200 dark:border-neutral-800 flex items-center justify-center flex-shrink-0 shadow-sm">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold group-hover:text-primary transition-colors">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      <main className="w-full max-w-[1250px] mx-auto px-0 md:px-6 pb-12">

        {/* Cover Photo */}
        <div
          className="relative w-full h-[150px] md:h-[220px] overflow-hidden shadow-lg border-x border-t border-neutral-200 dark:border-neutral-800 md:rounded-t-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors shadow-md outline-none border border-white/20 z-10"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-200" />
            )}
          </button>
        </div>

        {/* Profile Info Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-8 pb-0 border-x border-neutral-200 dark:border-neutral-800 bg-card shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 md:-mt-8 z-10 w-full md:w-auto pb-4">
            {/* Avatar */}
            <div className="relative w-36 h-36 rounded-full border-4 border-blue-500 bg-muted overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src="/pp.jpeg"
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>

            {/* Name / headline */}
            <div className="text-center md:text-left pb-2">
              <h1 className="text-3xl md:text-4xl font-extrabold">{profile.name}</h1>
              <p className="text-sm font-semibold text-muted-foreground mt-1 max-w-lg">
                {profile.headline}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 justify-center md:justify-start text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" /> {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pb-4 w-full md:w-auto justify-center">
            <a
              href="https://blogs.pyarjanthapa.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 font-semibold rounded-lg px-5 py-2 text-sm transition-opacity"
            >
              <BookOpen className="w-4 h-4" /> Blogs
            </a>
            <a
              href="https://www.youtube.com/@itspyarjanchhetri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff0000] text-white hover:opacity-90 font-semibold rounded-lg px-5 py-2 text-sm transition-opacity"
            >
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a
              href="https://v1.pyarjanthapa.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground border border-neutral-200 dark:border-neutral-800 font-semibold rounded-lg px-5 py-2 text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Portfolio V1
            </a>
          </div>
        </div>

        {/* ── TAB BAR ─────────────────────────────────────────────────────── */}
        <div className="border-x border-b border-neutral-200 dark:border-neutral-800 bg-card shadow-sm mb-5 md:rounded-b-lg overflow-x-auto">
          <div className="flex min-w-max md:min-w-0 px-4 md:px-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-neutral-300 dark:hover:border-neutral-600"}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── MAIN GRID ────────────────────────────────────────────────────── */}
        <div id="main-feed-columns" className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start px-4 md:px-0">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Featured Projects thumbnail grid — desktop only */}
            <div className="bg-card p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm hidden lg:block">
              <h2 className="text-xl font-bold mb-3">Featured Projects</h2>
              <div className="grid grid-cols-3 gap-2">
                {posts.filter((p) => p.image).slice(0, 5).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleFeatureClick(p.id)}
                    className="aspect-square bg-muted rounded-md overflow-hidden relative cursor-pointer group shadow"
                    title={`Click to view ${p.author}`}
                  >
                    <img
                      src={p.image}
                      alt={p.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1 text-[10px] font-bold text-white">
                      {p.author}
                    </div>
                  </div>
                ))}
                <div className="aspect-square bg-muted rounded-md flex flex-col justify-center items-center p-2 border border-neutral-200 dark:border-neutral-800 text-center">
                  <span className="text-xs font-bold">+5 More</span>
                  <span className="text-[9px] text-muted-foreground">Live Apps</span>
                </div>
              </div>
            </div>

            {/* Skills widget — always visible */}
            <div className="bg-card p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h2 className="text-xl font-bold mb-3">Skills & Frameworks</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Firebase",
                  "Zod", "Framer Motion", "GSAP", "Three.js", "Illustrator", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 bg-muted rounded-full border border-neutral-200 dark:border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-5">

            {/* About tab */}
            {activeTab === "about" && <AboutPanel />}

            {/* Contact tab */}
            {activeTab === "contact" && <ContactPanel />}

            {/* Posts / Projects feed */}
            {(activeTab === "posts" || activeTab === "projects") && (
              <div className="flex flex-col gap-4">
                {visiblePosts.length === 0 && (
                  <div className="bg-card rounded-lg border border-neutral-200 dark:border-neutral-800 p-10 text-center text-muted-foreground text-sm">
                    Nothing here yet.
                  </div>
                )}
                {visiblePosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-card rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm"
                  >
                    {/* Post Header */}
                    <div className="flex items-center gap-3 p-4 pb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-bold flex items-center gap-1.5">
                          {post.icon && (
                            <span className="text-primary">{post.icon}</span>
                          )}
                          <span>{post.author}</span>
                          {post.category && (
                            <span className="text-[10px] bg-primary/10 text-primary font-extrabold uppercase px-2 py-0.5 rounded border border-primary/20">
                              {post.category}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <CalendarDays className="w-3 h-3" />
                          <span>{post.time}</span>
                          <Globe2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 py-2 text-sm leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="px-4 py-2 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold px-2.5 py-1 bg-muted text-muted-foreground rounded-full border border-neutral-200 dark:border-neutral-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Image + link overlay */}
                    {post.image && (
                      <div className="mt-2 relative bg-muted border-t border-neutral-200 dark:border-neutral-800 overflow-hidden group">
                        <img
                          src={post.image}
                          alt="Post Media"
                          className="w-full h-auto max-h-[400px] object-cover mx-auto"
                        />
                        {post.link && (
                          <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-semibold text-white truncate max-w-[70%]">
                              {post.link}
                            </span>
                            <a
                              href={post.link}
                              target="_blank"
                              className="text-xs bg-[#1877f2] hover:bg-blue-600 text-white font-bold px-4 py-1.5 rounded flex items-center gap-1 transition-colors"
                            >
                              Visit <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
