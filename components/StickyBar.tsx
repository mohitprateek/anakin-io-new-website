"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80% of viewport height (past hero)
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      setVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/80 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 gap-4">
              <p className="text-sm text-muted hidden sm:block">
                Start scraping for free —{" "}
                <span className="text-foreground">no credit card required</span>
              </p>
              <p className="text-sm text-muted sm:hidden">
                Start scraping for free
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#hero"
                  className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-all whitespace-nowrap"
                >
                  Get API Key
                  <ArrowRight size={14} />
                </a>
                <button
                  onClick={() => setDismissed(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Dismiss"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
