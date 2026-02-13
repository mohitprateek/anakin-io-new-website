"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HIGHLIGHTED_COUNTRIES } from "@/lib/highlightedCountries";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[2/1] animate-pulse bg-[#b8d4e3]/30" />
  ),
});

const countryCount = new Set(HIGHLIGHTED_COUNTRIES).size;

export default function MapPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero heading */}
      <section className="pt-24 sm:pt-28 pb-4 sm:pb-5 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl text-center">
        <motion.p
          className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Global Coverage
        </motion.p>
        <motion.h1
          className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everywhere that matters
        </motion.h1>
        <motion.p
          className="text-muted max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Our infrastructure spans every major market — scraping at scale,
          wherever your data lives.
        </motion.p>
      </section>

      {/* Map — full width, no box */}
      <section className="w-full">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <WorldMap />

          {/* Legend bar — overlaid at bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between bg-gradient-to-t from-background/80 to-transparent">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4a7c59]" />
                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#d5cec5]" />
                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  Coming soon
                </span>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground font-mono">
              {countryCount} countries
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
