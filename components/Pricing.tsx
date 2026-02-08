"use client";

import { useState } from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    description: "Perfect for testing and personal projects",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1,000 requests / month",
      "Basic HTML scraping",
      "JSON & Markdown output",
      "Community support",
      "5 concurrent requests",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For teams building production scrapers",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "50,000 requests / month",
      "JavaScript rendering",
      "Structured data extraction",
      "Anti-bot bypass",
      "Priority support",
      "50 concurrent requests",
      "Webhook delivery",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For mission-critical scraping at scale",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Unlimited requests",
      "Mobile app scraping",
      "Dedicated proxy pool",
      "Custom SLA",
      "Dedicated success manager",
      "Slack & JIRA support",
      "BigQuery / S3 delivery",
      "SSO & audit logs",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 sm:py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Simple, transparent pricing
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                annual ? "bg-accent" : "bg-border"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                  annual ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual{" "}
              <span className="text-accent text-xs font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 flex flex-col ${
                plan.highlighted
                  ? "border border-accent/50 bg-accent/5 relative"
                  : "solid-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-[family-name:var(--font-jetbrains)]">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / month
                    </span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold font-[family-name:var(--font-jetbrains)]">
                    Custom
                  </div>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      size={16}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-border text-muted hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-4">
            <ShieldCheck size={24} className="text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                If we can&apos;t scrape it, we&apos;ll refund you.
              </p>
              <p className="text-xs text-muted-foreground">
                No questions asked. Full refund guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
