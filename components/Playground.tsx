"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, Lock, ArrowRight, Github, Loader2 } from "lucide-react";

const simulatedResponse = [
  '{',
  '  "status": "success",',
  '  "data": {',
  '    "title": "Apple MacBook Pro 16\\"",',
  '    "price": "$2,499.00",',
  '    "rating": 4.8,',
  '    "reviews": 12847,',
  '    "availability": "In Stock",',
  '    "description": "Apple M3 Max chip...",',
  '    "seller": "Apple",',
  '    "images": ["https://m.media-amazon..."]',
  '  },',
  '  "metadata": {',
  '    "latency_ms": 342,',
  '    "accuracy": 0.995',
  '  }',
  '}',
];

const VISIBLE_LINES = 5;

export default function Playground() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string[] | null>(null);
  const [responseVisible, setResponseVisible] = useState(0);
  const [latency] = useState(Math.floor(Math.random() * 200) + 250);

  const handleScrape = useCallback(() => {
    if (!url.trim()) return;
    setIsLoading(true);
    setResponse(null);
    setResponseVisible(0);
    setTimeout(() => {
      setIsLoading(false);
      setResponse(simulatedResponse);
    }, 800 + Math.random() * 600);
  }, [url]);

  useEffect(() => {
    if (!response) return;
    const timer = setInterval(() => {
      setResponseVisible((prev) => {
        if (prev >= response.length) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [response]);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Try it right now
          </h2>
          <p className="text-muted">Paste any URL. See real results.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-[#0c0c0c] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-[#0a0a0a]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-muted-foreground font-[family-name:var(--font-jetbrains)]">
                Live Playground
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-border/30 bg-[#0a0a0a]/50">
              <Search size={16} className="text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleScrape()}
                placeholder="https://amazon.com/dp/B09V3KXJPB"
                className="flex-1 bg-transparent text-sm font-[family-name:var(--font-jetbrains)] text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
              />
              <button
                onClick={handleScrape}
                disabled={isLoading || !url.trim()}
                className="rounded-md bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                {isLoading ? (<><Loader2 size={14} className="animate-spin" />Scraping...</>) : "Scrape"}
              </button>
            </div>

            <div className="relative min-h-[320px]">
              {!response && !isLoading && (
                <div className="flex items-center justify-center h-[320px] text-muted-foreground">
                  <div className="text-center">
                    <Search size={36} className="mx-auto mb-4 opacity-20" />
                    <p className="text-sm">Paste a URL above and hit Scrape to see it in action</p>
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center justify-center h-[320px]">
                  <div className="text-center">
                    <Loader2 size={32} className="mx-auto mb-4 text-accent animate-spin" />
                    <p className="text-sm text-muted-foreground">
                      Scraping <span className="text-foreground font-[family-name:var(--font-jetbrains)]">{url.length > 40 ? url.slice(0, 40) + "..." : url}</span>
                    </p>
                  </div>
                </div>
              )}

              {response && (
                <div className="relative">
                  <div className="px-5 pt-4 pb-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-[family-name:var(--font-jetbrains)]">
                      Response · {latency}ms · 99.5% confidence
                    </span>
                  </div>
                  <div className="px-5 pb-2 font-[family-name:var(--font-jetbrains)] text-sm leading-relaxed">
                    {response.slice(0, Math.min(responseVisible, VISIBLE_LINES)).map((line, i) => (
                      <div key={i} className="text-amber-300/90">{line}</div>
                    ))}
                  </div>
                  {responseVisible >= VISIBLE_LINES && (
                    <div className="relative">
                      <div className="px-5 font-[family-name:var(--font-jetbrains)] text-sm leading-relaxed blur-[6px] select-none pointer-events-none opacity-50">
                        {response.slice(VISIBLE_LINES).map((line, i) => (
                          <div key={i} className="text-amber-300/90">{line}</div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c0c]/80 to-[#0c0c0c] flex items-end justify-center pb-10">
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Lock size={14} />
                            Sign up free to see the full response
                          </div>
                          <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors">
                              Get Free API Key <ArrowRight size={14} />
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-muted hover:text-foreground hover:border-muted-foreground transition-colors">
                              <Github size={14} /> Sign up with GitHub
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
