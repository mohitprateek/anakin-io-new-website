"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LogoItem = {
  name: string;
  slug?: string; // Simple Icons slug, omit for text-only
  type?: string;
};

const sdks: LogoItem[] = [
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Go", slug: "go" },
  { name: "cURL", slug: "curl" },
];

const deliveryTargets: LogoItem[] = [
  { name: "BigQuery", slug: "googlebigquery" },
  { name: "Snowflake", slug: "snowflake" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "S3" },
  { name: "Webhooks" },
];

const integrations: LogoItem[] = [
  { name: "Anthropic", slug: "anthropic", type: "MCP Server" },
  { name: "OpenAI", slug: "openai", type: "GPT Actions" },
  { name: "LangChain", slug: "langchain", type: "Document Loader" },
  { name: "LlamaIndex", type: "Data Connector" },
  { name: "CrewAI", type: "Scraping Tool" },
  { name: "Cursor", slug: "cursor", type: "MCP Server" },
  { name: "Windsurf", type: "MCP Server" },
  { name: "Dify", type: "AI Workflows" },
  { name: "Lindy.ai", type: "AI Agent" },
  { name: "Replit", slug: "replit", type: "Recommended Tool" },
  { name: "Zapier", slug: "zapier", type: "Automation" },
  { name: "Make", type: "Automation" },
  { name: "n8n", slug: "n8n", type: "Automation" },
  { name: "Notion", slug: "notion", type: "Database Sync" },
  { name: "Airtable", slug: "airtable", type: "Database Sync" },
  { name: "Supabase", slug: "supabase", type: "Database Sync" },
  { name: "Retool", slug: "retool", type: "Internal Tools" },
  { name: "Slack", type: "Notifications" },
  { name: "RapidAPI", type: "Marketplace" },
  { name: "Clay", type: "Enrichment" },
];

function LogoPill({ item }: { item: LogoItem }) {
  return (
    <div className="rounded-lg border border-border/50 bg-card px-5 py-3 flex items-center gap-2.5 hover:border-border hover:bg-card-hover transition-all">
      {item.slug ? (
        <Image
          src={`https://cdn.simpleicons.org/${item.slug}/white`}
          alt={item.name}
          width={18}
          height={18}
          className="flex-shrink-0 opacity-70"
          unoptimized
        />
      ) : (
        <span className="w-[18px] h-[18px] rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-muted-foreground flex-shrink-0">
          {item.name.charAt(0)}
        </span>
      )}
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
        {item.slug ? (
          <Image
            src={`https://cdn.simpleicons.org/${item.slug}/white`}
            alt={item.name}
            width={20}
            height={20}
            className="opacity-80 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
        ) : (
          <span className="text-sm font-bold text-muted-foreground">
            {item.name.charAt(0)}
          </span>
        )}
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
    <section className="py-28 sm:py-36" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
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
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
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
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
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
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
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
