import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useLayoutEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Seo from "@/components/Seo";
import WordSpyBanner from "@/components/WordSpyBanner";

import Index from "./pages/Index";

// Secondary routes are split out so the landing page ships less JavaScript.
const Work = lazy(() => import("./pages/Work"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Seo />
        <WordSpyBanner />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
