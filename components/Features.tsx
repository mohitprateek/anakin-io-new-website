import {
  Globe,
  Smartphone,
  ShieldCheck,
  FileJson,
  RotateCw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "JavaScript Rendering",
    description:
      "Full headless browser rendering for SPAs, dynamic content, and JavaScript-heavy sites. React, Vue, Angular — no content left behind.",
    detail: "Handles lazy loading, infinite scroll, and dynamic page mutations automatically.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Scraping",
    description:
      "Extract data from iOS and Android apps — including encrypted payloads, certificate-pinned APIs, and binary-level protections.",
    detail: "A capability most competitors simply cannot offer.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Bot Bypass",
    description:
      "CAPTCHAs, TLS fingerprinting, browser fingerprinting, rate limits, and IP blocking — all handled automatically.",
    detail: "Zero configuration. Our engine adapts to new protections in hours, not weeks.",
  },
  {
    icon: FileJson,
    title: "Structured Output",
    description:
      "Get clean JSON, Markdown, CSV, or raw HTML. Data is validated and structured — no post-processing or parsing needed.",
    detail: "99.5% accuracy via our dual-validation pipeline: ML models + human QA.",
  },
  {
    icon: RotateCw,
    title: "Self-Healing Proxies",
    description:
      "Smart proxy rotation across 50+ countries with automatic failover and session management.",
    detail: "Never get blocked. Our proxy pool refreshes continuously and routes around failures.",
  },
  {
    icon: Zap,
    title: "Sub-Second Speed",
    description:
      "Optimized infrastructure built for real-time data pipelines. Results in under a second.",
    detail: "10,000+ concurrent sessions. Process millions of pages per day.",
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Everything you need to scrape at scale
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Enterprise-grade capabilities, developer-friendly API.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="solid-card rounded-2xl p-8 hover:bg-card-hover transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-data/10 flex items-center justify-center mb-5 group-hover:bg-data/15 transition-colors">
                <feature.icon size={24} className="text-data" />
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed mb-2">
                {feature.description}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
