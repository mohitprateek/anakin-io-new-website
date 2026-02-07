"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 sm:py-36 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-accent/[0.02] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Start scraping in{" "}
            <span className="gradient-text">30 seconds</span>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-10">
            No credit card required. 1,000 free requests. Set up your first
            scraper before your coffee gets cold.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-medium text-white hover:bg-accent-hover transition-all glow-blue"
            >
              Get Your API Key
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/docs"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Or read the docs first →
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Free tier available · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
