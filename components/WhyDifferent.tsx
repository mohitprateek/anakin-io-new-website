"use client";

import { motion } from "framer-motion";
import { Clock, Globe, Zap, Target, Monitor, Wifi, Camera } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "4+ Years",
    label: "In Production",
    description: "Battle-tested since 2021",
  },
  {
    icon: Globe,
    value: "20+ Countries",
    label: "Served",
    description: "Global enterprise coverage",
  },
  {
    icon: Zap,
    value: "10,000+",
    label: "Concurrent Sessions",
    description: "Massive parallel scraping",
  },
  {
    icon: Target,
    value: "99.5%",
    label: "Data Accuracy",
    description: "ML + Human QA pipeline",
  },
];

const methods = [
  {
    icon: Monitor,
    name: "Frontend Scraping",
    description: "Parse HTML, CSS, JS and XML from any web or mobile interface",
  },
  {
    icon: Wifi,
    name: "Network Scraping",
    description: "Intercept and extract data directly from API calls and responses",
  },
  {
    icon: Camera,
    name: "Screen Scraping",
    description: "Visual extraction of banners, promotions, and dynamic UI elements",
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-20 sm:py-24 relative" id="why-different">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Born from 4 years of scraping the impossible
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            While others struggle with basic JavaScript rendering, we&apos;ve been
            cracking encrypted mobile payloads, defeating TLS fingerprinting, and
            extracting data from apps that block everyone else — for the
            world&apos;s largest companies.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="solid-card rounded-xl p-6 text-center hover:bg-card-hover transition-colors group"
            >
              <stat.icon
                size={24}
                className="mx-auto mb-3 text-accent group-hover:scale-110 transition-transform"
              />
              <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-jetbrains)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scraping methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Three parallel scraping methods for 100% data coverage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {methods.map((method) => (
              <div
                key={method.name}
                className="solid-card rounded-xl p-6 text-center hover:bg-card-hover transition-colors"
              >
                <method.icon
                  size={20}
                  className="mx-auto mb-3 text-accent"
                />
                <div className="font-medium mb-2">{method.name}</div>
                <div className="text-sm text-muted-foreground">
                  {method.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
