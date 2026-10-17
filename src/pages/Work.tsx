import { Link } from "react-router-dom";
import { ArrowUpRight, Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { PROJECTS } from "@/data/projects";
import Footer from "@/components/Footer";

const Work = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

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
            <Link to="/" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Home
            </Link>
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

        {/* ── HEADER ─────────────────────────────────────────────────── */}
        <div className="mb-12 animate-fade-up">
          <p className="section-label mb-2">selected work</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Things I've built
          </h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-lg">
            A collection of products, tools, and experiments — from SaaS platforms to game apps. Each built with care for design and engineering quality.
          </p>
        </div>

        {/* ── PROJECT GRID ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-up animate-fade-up-delay-1">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.id}
              to={`/work/${p.id}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative h-52 bg-muted overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{p.category}</span>
                      <span className="text-[9px] text-muted-foreground">· {p.year}</span>
                    </div>
                    <h2 className="font-black text-lg leading-tight">{p.name}</h2>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[9px] font-semibold px-2 py-0.5 bg-muted border border-border rounded-md text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
