"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-28 sm:pt-44 sm:pb-36" id="hero">
      {/* Gradient orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Category label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Web Scraping API
          </motion.p>

          {/* YC Badge with actual YC logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-sm text-orange-400 mb-10"
          >
            <Image
              src="https://cdn.simpleicons.org/ycombinator/F0652F"
              alt="Y Combinator"
              width={16}
              height={16}
              unoptimized
            />
            Backed by Y Combinator
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            Scrape the{" "}
            <span className="gradient-text">Unscrapable</span>
          </motion.h1>

          {/* Subheadline -- concrete and specific */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Extract structured data from any website with a single API call.
            We handle JavaScript rendering, anti-bot bypass, and proxy
            rotation — so you don&apos;t have to.
          </motion.p>

          {/* Single bold CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-medium text-white hover:bg-accent-hover transition-all glow-blue"
            >
              Get Free API Key
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              No credit card required · 1,000 free requests / month
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
