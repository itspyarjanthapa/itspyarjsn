import React, { useState, useEffect } from "react";
import {
  Gamepad2,
  ExternalLink,
  X,
  Users,
  HelpCircle,
  Sparkles,
  Smartphone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const STORAGE_KEY = "wordspy_banner_dismissed_v1";
export const GOOGLE_GROUP_URL = "https://groups.google.com/g/wordspy-testers";
export const PLAY_STORE_OPT_IN_URL = "https://play.google.com/apps/testing/com.pyarjan.wordspy";

export const WordSpyBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    try {
      const isDismissed = localStorage.getItem(STORAGE_KEY);
      if (!isDismissed) {
        setDismissed(false);
      }
    } catch {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  if (dismissed) {
    return null;
  }

  return (
    <>
      <div className="relative z-50 bg-gradient-to-r from-emerald-500/10 via-primary/5 to-emerald-500/10 border-b border-border/80 text-foreground transition-all">
        <div className="max-w-6xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          {/* Left: Badge & Simple Headline */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex-shrink-0">
              <Sparkles className="w-3 h-3" />
              New Game
            </span>
            <span className="truncate font-medium text-foreground">
              Try demo of my app:{" "}
              <strong className="font-semibold text-foreground">
                WordSpy: Imposter Party Game
              </strong>{" "}
              <span className="hidden sm:inline text-muted-foreground">
                (Android Closed Beta)
              </span>
            </span>
          </div>

          {/* Right: Quick Action Buttons & Dismiss */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Direct Try Demo Link */}
            <a
              href={PLAY_STORE_OPT_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-3 py-1 rounded-md text-[11px] hover:opacity-90 transition-opacity shadow-sm"
              title="Opt-in & Download on Google Play"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Try Demo</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* How to Test dialog trigger */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 bg-muted hover:bg-accent text-foreground font-medium px-2.5 py-1 rounded-md text-[11px] border border-border transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="hidden sm:inline">How to Test</span>
                  <span className="sm:hidden">Steps</span>
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md bg-card border-border text-foreground">
                <DialogHeader>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Gamepad2 className="w-4 h-4" />
                    Android Closed Testing (14 Days)
                  </div>
                  <DialogTitle className="text-xl font-bold">
                    WordSpy: Imposter Party Game
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Help test my first Android game on Google Play to satisfy the 14-day closed testing requirement!
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3.5 my-2 text-xs">
                  {/* Step 1 */}
                  <div className="p-3 rounded-lg border border-border bg-muted/40 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Step 1: Join the Google Group
                      </span>
                      <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        Required First
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      Google Play only allows members of this testers group to access the beta build.
                    </p>
                    <a
                      href={GOOGLE_GROUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline mt-1"
                    >
                      Join Google Group <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 rounded-lg border border-border bg-muted/40 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Step 2: Opt in & Download
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      Accept the tester invite and install the game directly from Google Play.
                    </p>
                    <a
                      href={PLAY_STORE_OPT_IN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline mt-1"
                    >
                      Opt in & Download Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Note */}
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-[11px] space-y-1">
                    <p className="font-semibold">⚠️ Crucial Google Play Tip:</p>
                    <p className="leading-relaxed">
                      Make sure both your browser (Chrome) and your phone's Google Play Store app are logged into the <strong>exact same Gmail account</strong>. Keep the app installed for 14 days!
                    </p>
                  </div>

                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    🚀 Happy to test your apps in return!
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors ml-1"
              aria-label="Dismiss banner"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordSpyBanner;

