"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Github, Search } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Only trigger on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to the top of the page (leaving viewport)
      if (e.clientY <= 5 && !triggered) {
        setTriggered(true);
        setShow(true);
      }
    };

    // Delay adding listener so it doesn't fire on page load
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [triggered]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[61] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl">
              {/* Close */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Before you go...
                </h3>
                <p className="text-muted text-sm">
                  Try scraping any URL for free. No signup needed to see a
                  preview — get your API key to unlock full results.
                </p>
              </div>

              {/* Quick signup */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                  <button className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-all glow-blue whitespace-nowrap">
                    Get API Key
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="flex-1 border-t border-border/50" />
                  <span className="text-xs text-muted-foreground">or</span>
                  <div className="flex-1 border-t border-border/50" />
                </div>

                <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-muted hover:text-foreground hover:border-muted-foreground transition-all">
                  <Github size={16} />
                  Sign up with GitHub
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free tier: 1,000 requests/month · No credit card required
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
