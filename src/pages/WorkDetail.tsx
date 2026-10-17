import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { PROJECTS } from "@/data/projects";
import Footer from "@/components/Footer";

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const project = PROJECTS.find((p) => p.id === id);
  const others = PROJECTS.filter((p) => p.id !== id).slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-sm">Project not found.</p>
        <Link to="/work" className="text-primary text-sm hover:underline">← Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-6 h-6 object-contain" style={{ filter: isDark ? "invert(1) brightness(2)" : "none" }} />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-foreground">PYARJAN</span>
          </Link>
          <nav className="flex items-center gap-3">
            <button onClick={() => navigate(-1)}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Back
            </button>
            <Link to="/contact"
              className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity">
              Contact
            </Link>
            <button onClick={() => setTheme(isDark ? "light" : "dark")}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-muted hover:bg-muted/70 transition-colors">
              {isDark ? <Sun className="w-3.5 h-3.5 text-foreground" /> : <Moon className="w-3.5 h-3.5 text-foreground" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-14">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="animate-fade-up mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-0.5">
              {project.category}
            </span>
            <span className="text-[9px] text-muted-foreground">{project.year}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              {project.name}
            </h1>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Visit Live <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Full-width hero image */}
          <div className="w-full rounded-2xl overflow-hidden border border-border shadow-lg aspect-[16/8] bg-muted">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
            />
          </div>
        </div>

        {/* ── CONTENT ────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_280px] gap-10 animate-fade-up animate-fade-up-delay-1">

          {/* Left: main content */}
          <div className="space-y-8">
            {/* Overview */}
            <div>
              <span className="section-label block mb-3">overview</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.longDesc}</p>
            </div>

            {/* Challenge */}
            <div className="border-l-2 border-primary pl-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">The Challenge</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="border-l-2 border-border pl-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">The Solution</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>

            {/* Impact */}
            <div className="bg-muted border border-border rounded-xl p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Impact</p>
              <p className="text-sm leading-relaxed text-foreground font-medium">{project.impact}</p>
            </div>
          </div>

          {/* Right: meta sidebar */}
          <div className="space-y-6">

            {/* Tech stack */}
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="section-label block mb-4">tech stack</p>
              <div className="flex flex-col gap-2">
                {project.tags.map((t) => (
                  <div key={t} className="flex items-center gap-3 py-1.5 border-b border-border last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.link && (
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="section-label block mb-4">links</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/60 transition-colors"
                >
                  <span className="text-xs font-semibold truncate max-w-[160px]">{project.link.replace("https://", "")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                </a>
              </div>
            )}

            {/* Year */}
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="section-label block mb-2">shipped</p>
              <p className="text-3xl font-black text-foreground">{project.year}</p>
            </div>
          </div>
        </div>

        {/* ── OTHER PROJECTS ─────────────────────────────────────────── */}
        {others.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <div className="flex items-center justify-between mb-6">
              <span className="section-label">more work</span>
              <Link to="/work" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-75 transition-opacity">
                view all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.id}
                  to={`/work/${p.id}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
                >
                  <div className="relative h-36 bg-muted overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{p.category}</span>
                    <p className="font-black text-sm mt-0.5">{p.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;
