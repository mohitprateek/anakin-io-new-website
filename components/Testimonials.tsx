"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Now, we are the market leader! Anakin's data showed us that we were losing to our competitors in a small but swiftly growing category.",
    source: "E-commerce, Asia",
    metric: "12% revenue increase",
  },
  {
    quote:
      "We didn't know we were losing out on such a treasure of information. We were able to get only 15,000 of our competitor's restaurants, whereas Anakin gave us 23,000. Our decisions and strategy changed immediately.",
    source: "Food Delivery, Europe",
    metric: "200% account growth",
  },
  {
    quote:
      "Intelligent pricing became our edge. Anakin's integration empowered the team to act in real-time, rather than relying on manual pricing cycles.",
    source: "Grocery, Asia",
    metric: "9% revenue increase",
  },
];

const resultStats = [
  { value: "5-12%", label: "Revenue uplift across enterprise clients" },
  { value: "20%+", label: "Cost reduction vs in-house teams" },
  { value: "200%", label: "Average account growth in year one" },
  { value: "3-10x", label: "More data available for analysis" },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Trusted by enterprise teams worldwide
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real results from companies using our scraping engine for
            mission-critical decisions.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="solid-card rounded-xl p-6 flex flex-col justify-between hover:bg-card-hover transition-colors"
            >
              <div>
                <Quote size={20} className="text-accent mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-sm text-muted-foreground">
                  — {t.source}
                </span>
                <span className="text-sm font-semibold text-accent font-[family-name:var(--font-jetbrains)]">
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {resultStats.map((stat, i) => (
            <div
              key={i}
              className="text-center solid-card rounded-xl p-5"
            >
              <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-jetbrains)] text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
