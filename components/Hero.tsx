"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "10M+", label: "Requests / Day" },
  { value: "99.5%", label: "Data Accuracy" },
  { value: "500+", label: "Companies" },
  { value: "20+", label: "Countries" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24" id="hero">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Category label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.25em] text-muted-foreground mb-6"
          >
            Web Scraping API
          </motion.p>

          {/* YC Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-sm text-orange-400 mb-10"
          >
            <Image
              src="https://cdn.simpleicons.org/ycombinator/F0652F"
              alt="Y Combinator"
              width={14}
              height={14}
              unoptimized
            />
            Backed by Y Combinator
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            Scrape the Unscrapable
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Extract structured data from any website with a single API call.
            We handle JavaScript rendering, anti-bot bypass, and proxy
            rotation — so you don&apos;t have to.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 mb-16"
          >
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Get Free API Key
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground">
              No credit card required · 1,000 free requests / month
            </p>
          </motion.div>

          {/* Stats row -- like Carta/Firecrawl, big numbers front and center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-jetbrains)] text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
