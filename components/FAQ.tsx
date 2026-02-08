"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What websites can Anakin scrape?",
    a: "Any website, web app, or mobile app — regardless of tech stack, language, or geography. If it's on the internet, we can scrape it. Our engine handles JavaScript-heavy SPAs, mobile apps with encrypted payloads, and sites with the most aggressive anti-bot protections.",
  },
  {
    q: "How does Anakin handle anti-bot protection?",
    a: "Our engine automatically handles CAPTCHAs, browser fingerprinting, TLS fingerprinting, rate limiting, and IP blocking. We use self-healing proxy rotation across 50+ countries, headless browser instrumentation, and adaptive retry logic — all transparent to you.",
  },
  {
    q: "What formats do you return data in?",
    a: "JSON, Markdown, CSV, or raw HTML. You can also push data directly to BigQuery, S3, Azure, Snowflake, webhooks, or Google Sheets. The API returns structured, clean data — no post-processing required.",
  },
  {
    q: "How accurate is the data?",
    a: "99.5%+ accuracy. We achieve this through a dual-validation pipeline that combines ML-driven extraction with human quality assurance. This is the same pipeline trusted by enterprise clients making billion-dollar pricing decisions.",
  },
  {
    q: "Can Anakin scrape JavaScript-heavy sites and SPAs?",
    a: "Yes. We use full headless browser rendering to handle dynamic, JavaScript-heavy content including React, Vue, Angular, and any other SPA framework. We also handle lazy-loaded content, infinite scroll, and dynamic page mutations.",
  },
  {
    q: "Can Anakin scrape mobile apps?",
    a: "Yes. We extract data from iOS and Android apps, including those with encrypted payloads, certificate pinning, and binary-level protections. This is a capability most competitors simply can't offer.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. Start with 1,000 free requests per month. No credit card required. The free tier includes basic HTML scraping and JSON/Markdown output — enough to prototype and test your integration.",
  },
  {
    q: "How fast is the API?",
    a: "Sub-second response times for most requests. Our infrastructure supports 10,000+ concurrent sessions and is optimized for real-time data pipelines. We process over 10 million requests per day.",
  },
  {
    q: "What integrations do you support?",
    a: "We integrate with LangChain, OpenAI, Anthropic (Claude MCP), Cursor, Windsurf, Zapier, Make, n8n, Notion, Airtable, Supabase, Slack, Dify, Lindy.ai, RapidAPI, Clay, and more. SDKs available for Python, Node.js, Go, and cURL.",
  },
  {
    q: "Do you offer enterprise plans?",
    a: "Yes. Enterprise plans include unlimited requests, mobile app scraping, dedicated proxy pools, custom SLAs, a dedicated success manager, Slack and JIRA support channels, and direct delivery to BigQuery or S3. Contact our sales team to discuss your needs.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-medium text-foreground group-hover:text-accent transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 sm:py-24 section-alt" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Frequently asked questions
          </h2>
          <p className="text-muted">
            Everything you need to know about Anakin.
          </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
