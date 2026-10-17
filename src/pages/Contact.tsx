import { Link } from "react-router-dom";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useTheme } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const SOCIAL = [
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    href: "https://linkedin.com/in/pyarjanthapa",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube className="w-5 h-5" />,
    href: "https://www.youtube.com/@itspyarjanchhetri",
    label: "YouTube",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    href: "https://instagram.com/itspyarjanchhetri",
    label: "Instagram",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/itspyarjanthapa",
    label: "GitHub",
  },
];

const Contact = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-6 h-6 object-contain" style={{ filter: isDark ? "invert(1) brightness(2)" : "none" }} />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-foreground">PYARJAN</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link to="/" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Home
            </Link>
            <Link to="/work" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <button onClick={() => setTheme(isDark ? "light" : "dark")}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-muted hover:bg-muted/70 transition-colors">
              {isDark ? <Sun className="w-3.5 h-3.5 text-foreground" /> : <Moon className="w-3.5 h-3.5 text-foreground" />}
            </button>
          </nav>
        </div>
      </header>

      {/* ── MAIN ─────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-5 md:px-8 min-h-[calc(100vh-48px)] flex items-center">
        <div className="w-full py-16 md:py-24">

          {/* ── HEADING ────────────────────────────────────────────────── */}
          <h1
            className="font-serif-display italic text-5xl md:text-7xl mb-14 animate-fade-up text-primary"
          >
            let's connect.
          </h1>

          {/* ── CONTENT ─────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-10 md:gap-16 animate-fade-up animate-fade-up-delay-1">

            {/* Profile photo — sketch/grayscale style */}
            <div className="relative w-fit group">
              <div
                className="w-56 h-64 md:w-64 md:h-80 overflow-hidden transition-transform duration-300 ease-out -rotate-1 group-hover:rotate-1 group-hover:scale-[1.02]"
                style={{
                  border: "3px solid hsl(0 0% 30%)",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="/pp.jpeg"
                  alt="Pyarjan Thapa"
                  className="w-full h-full object-cover transition-all duration-500 grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-start gap-8">

              {/* Tagline */}
              <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-sm">
                Have a growth idea? Let's chat.
              </p>

              {/* Email CTA */}
              <a
                href="mailto:info@pyarjanthapa.com.np"
                className="group inline-flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300">
                  <MdOutlineEmail className="w-4.5 h-4.5" />
                </div>
                info@pyarjanthapa.com.np
              </a>

              {/* Social icons */}
              <div className="flex flex-col items-start">
                <p className="section-label mb-4">find me on</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="group w-11 h-11 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-1 hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-muted border border-border text-foreground text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                Open to freelance & collaborations
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
