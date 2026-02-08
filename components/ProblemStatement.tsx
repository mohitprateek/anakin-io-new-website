export default function ProblemStatement() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Why Anakin Exists
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight mb-8">
            Traditional scrapers break.{" "}
            <span className="text-muted-foreground">
              Every week. You fix one, another breaks. Your team spends more
              time maintaining scrapers than actually using the data.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-3xl">
            Anti-bot systems evolve daily. JavaScript-heavy sites resist
            extraction. Mobile apps encrypt their payloads. Rate limits, IP
            blocks, CAPTCHAs, TLS fingerprinting — the web is actively hostile
            to automated data collection.
          </p>

          <div className="border-l-2 border-accent pl-6">
            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
              We built Anakin for this problem. Four years of scraping the
              hardest websites for the world&apos;s largest companies — distilled
              into a single API call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
