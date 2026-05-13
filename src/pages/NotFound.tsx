import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground transition-colors duration-500 px-6">
      <div className="text-center">
        {/* Big 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter text-foreground/5 select-none"
        >
          404
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative -mt-16 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">Error</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg max-w-sm">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
