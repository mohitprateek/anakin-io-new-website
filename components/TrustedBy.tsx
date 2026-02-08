const industries = [
  "Global E-Commerce",
  "Food Delivery",
  "Ride-Hailing",
  "Quick Commerce",
  "Travel & Hospitality",
  "Financial Services",
  "Real Estate",
  "Social Platforms",
];

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-14 border-y border-border/50 section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by developers and enterprises across 20+ countries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-sm text-muted-foreground/50 font-medium"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
