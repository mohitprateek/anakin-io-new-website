import Link from "next/link";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Rocket size={28} className="text-accent" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Get Started with Anakin</h1>
        <p className="text-muted mb-8">
          Sign up to get your API key and start scraping in seconds. Free tier
          includes 1,000 requests per month.
        </p>

        <div className="max-w-sm mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <button className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors glow-blue">
              Go
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No credit card required. Free 1,000 requests/month.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
