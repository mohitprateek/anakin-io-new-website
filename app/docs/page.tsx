import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <BookOpen size={28} className="text-accent" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-muted mb-8">
          Our documentation is coming soon. In the meantime, join our Discord
          community for support and updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://discord.gg/s4paBVpteS"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#5865F2] px-6 py-3 text-sm font-medium text-white hover:bg-[#4752C4] transition-colors"
          >
            Join Discord
          </a>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
