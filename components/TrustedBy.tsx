"use client";

import { motion } from "framer-motion";

const industries = [
  "Global E-Commerce",
  "Food Delivery",
  "Ride-Hailing",
  "Quick Commerce",
  "Travel & Hospitality",
  "Financial Services",
  "Real Estate",
  "Social Platforms",
];

export default function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by developers and enterprises across 20+ countries
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="text-sm text-muted-foreground/60 font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
