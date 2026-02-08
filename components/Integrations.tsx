"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LogoItem = {
  name: string;
  icon: string; // URL or local path
  type?: string;
};

// Helper: Simple Icons CDN URL
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
// Helper: local favicon
const local = (name: string) => `/logos/${name}.png`;

const sdks: LogoItem[] = [
  { name: "Python", icon: si("python") },
  { name: "Node.js", icon: si("nodedotjs") },
  { name: "Go", icon: si("go") },
  { name: "cURL", icon: si("curl") },
];

const deliveryTargets: LogoItem[] = [
  { name: "BigQuery", icon: si("googlebigquery") },
  { name: "Snowflake", icon: si("snowflake") },
  { name: "Google Sheets", icon: si("googlesheets") },
  { name: "PostgreSQL", icon: si("postgresql") },
  { name: "MongoDB", icon: si("mongodb") },
  { name: "S3", icon: local("s3") },
];

const integrations: LogoItem[] = [
  { name: "Anthropic", icon: si("anthropic"), type: "MCP Server" },
  { name: "OpenAI", icon: si("openai"), type: "GPT Actions" },
  { name: "LangChain", icon: si("langchain"), type: "Document Loader" },
  { name: "LlamaIndex", icon: local("llamaindex"), type: "Data Connector" },
  { name: "CrewAI", icon: si("crewai"), type: "Scraping Tool" },
  { name: "Cursor", icon: si("cursor"), type: "MCP Server" },
  { name: "Windsurf", icon: si("windsurf"), type: "MCP Server" },
  { name: "Dify", icon: local("dify"), type: "AI Workflows" },
  { name: "Lindy.ai", icon: local("lindy"), type: "AI Agent" },
  { name: "Replit", icon: si("replit"), type: "Recommended Tool" },
  { name: "Zapier", icon: si("zapier"), type: "Automation" },
  { name: "Make", icon: si("make"), type: "Automation" },
  { name: "n8n", icon: si("n8n"), type: "Automation" },
  { name: "Notion", icon: si("notion"), type: "Database Sync" },
  { name: "Airtable", icon: si("airtable"), type: "Database Sync" },
  { name: "Supabase", icon: si("supabase"), type: "Database Sync" },
  { name: "Retool", icon: si("retool"), type: "Internal Tools" },
  { name: "Slack", icon: local("slack"), type: "Notifications" },
  { name: "RapidAPI", icon: local("rapidapi"), type: "Marketplace" },
  { name: "Clay", icon: local("clay"), type: "Enrichment" },
];

function LogoPill({ item }: { item: LogoItem }) {
  return (
    <div className="rounded-lg border border-border bg-card px-5 py-3 flex items-center gap-3 hover:bg-card-hover transition-colors">
      <Image
        src={item.icon}
        alt={item.name}
        width={20}
        height={20}
        className="flex-shrink-0"
        unoptimized
      />
      <span className="text-sm font-medium text-muted whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

function IntegrationCard({ item }: { item: LogoItem }) {
  return (
    <div className="solid-card rounded-xl p-5 hover:bg-card-hover transition-colors group flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
        <Image
          src={item.icon}
          alt={item.name}
          width={22}
          height={22}
          className="group-hover:opacity-100 transition-opacity"
          unoptimized
        />
      </div>
      <div className="min-w-0">
        <div className="font-medium text-sm truncate">{item.name}</div>
        {item.type && (
          <div className="text-xs text-muted-foreground">{item.type}</div>
        )}
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-20 sm:py-24" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Fits your stack. Powers your workflows.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            SDKs for every language. Integrations with the tools you already use.
          </p>
        </motion.div>

        {/* SDKs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
            SDKs
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sdks.map((item) => (
              <LogoPill key={item.name} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Delivery Targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14"
        >
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
            Delivery Targets
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {deliveryTargets.map((item) => (
              <LogoPill key={item.name} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Partner integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
            Integrations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {integrations.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
