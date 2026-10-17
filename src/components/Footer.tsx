import { useTheme } from "@/components/theme-provider";

const PROFILE = {
  shortName: "PYARJAN",
  email: "info@pyarjanthapa.com.np",
  website: "pyarjanthapa.com.np",
  github: "itspyarjanthapa",
  linkedin: "pyarjanthapa",
  instagram: "itspyarjanchhetri",
};

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="pt-8 pb-6 border-t border-border select-none mt-auto">
      <div className="max-w-5xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-xs text-muted-foreground">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-6 h-6 object-contain"
            style={{ filter: isDark ? "invert(1) brightness(2)" : "none" }}
          />
          <span className="text-xs font-black tracking-[0.2em] uppercase text-foreground">
            {PROFILE.shortName}
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1.5">
          <p className="font-bold text-foreground text-[10px] uppercase tracking-widest mb-1">CONTACT</p>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground transition-colors">
            {PROFILE.email}
          </a>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-1.5">
          <p className="font-bold text-foreground text-[10px] uppercase tracking-widest mb-1">PORTFOLIO</p>
          <a href={`https://${PROFILE.website}`} className="hover:text-foreground transition-colors">
            {PROFILE.website}
          </a>
          <a href="https://v0.pyarjanthapa.com.np" className="hover:text-foreground transition-colors">
            Portfolio V0
          </a>
          <a href="https://blogs.pyarjanthapa.com.np" className="hover:text-foreground transition-colors">
            Blog
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-1.5">
          <p className="font-bold text-foreground text-[10px] uppercase tracking-widest mb-1">SOCIAL</p>
          <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={`https://github.com/${PROFILE.github}`} className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={`https://instagram.com/${PROFILE.instagram}`} className="hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="https://www.youtube.com/@itspyarjanchhetri" className="hover:text-foreground transition-colors">
            YouTube
          </a>
        </div>

      </div>

      {/* Bottom line */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 mt-8 pt-4 border-t border-border flex items-center justify-between">
        <p className="text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Pyarjan Thapa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
