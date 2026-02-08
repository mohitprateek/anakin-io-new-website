"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const tabs = [
  {
    label: "Python",
    code: `from anakin import Anakin

client = Anakin(api_key="ak_live_...")

# Scrape any website with one call
result = client.scrape(
    "https://amazon.com/dp/B09V3KXJPB",
    format="json",
    render_js=True
)

print(result.data)`,
  },
  {
    label: "Node.js",
    code: `import Anakin from '@anakin-io/sdk';

const client = new Anakin({ apiKey: 'ak_live_...' });

// Scrape any website with one call
const result = await client.scrape({
  url: 'https://amazon.com/dp/B09V3KXJPB',
  format: 'json',
  renderJs: true,
});

console.log(result.data);`,
  },
  {
    label: "cURL",
    code: `curl -X POST 'https://api.anakin.io/v1/scrape' \\
  -H 'Authorization: Bearer ak_live_...' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "url": "https://amazon.com/dp/B09V3KXJPB",
    "format": "json",
    "render_js": true
  }'`,
  },
  {
    label: "Go",
    code: `package main

import (
    "fmt"
    anakin "github.com/anakin-io/go-sdk"
)

func main() {
    client := anakin.NewClient("ak_live_...")

    result, _ := client.Scrape(anakin.ScrapeOptions{
        URL:      "https://amazon.com/dp/B09V3KXJPB",
        Format:   "json",
        RenderJS: true,
    })

    fmt.Println(result.Data)
}`,
  },
];

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            It really is this simple
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Three lines of code. Any website. Structured data back in under a
            second.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-border bg-[#0c0c0c] overflow-hidden shadow-2xl">
            {/* Tab bar */}
            <div className="flex items-center justify-between border-b border-border/50 bg-[#0a0a0a]">
              <div className="flex">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                      activeTab === i
                        ? "text-accent border-accent"
                        : "text-muted-foreground border-transparent hover:text-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="mr-3 p-2 text-muted-foreground hover:text-muted transition-colors"
                title="Copy code"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Code block */}
            <div className="p-6 font-[family-name:var(--font-jetbrains)] text-sm leading-relaxed overflow-x-auto">
              <pre className="text-emerald-400">
                <code>{tabs[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
