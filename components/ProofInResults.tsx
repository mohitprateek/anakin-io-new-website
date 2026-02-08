const results = [
  {
    metric: "12%",
    description: "Revenue increase",
    context: "Multi-billion dollar food delivery company used Anakin's data to optimize pricing across 10+ countries and 5 departments.",
    detail: "200% account growth in year one",
  },
  {
    metric: "9%",
    description: "Revenue increase",
    context: "A $10B ride-hailing platform integrated minute-level competitive intelligence across 100+ high-traffic routes.",
    detail: "15% increase in user engagement",
  },
  {
    metric: "23,000",
    description: "Restaurants discovered",
    context: "A European food delivery platform could only find 15,000 competitor restaurants internally. Anakin found 23,000. Their strategy changed immediately.",
    detail: "vs 15,000 found in-house",
  },
];

export default function ProofInResults() {
  return (
    <section className="py-20 sm:py-24 section-alt">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Enterprise Results
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            The proof is in the results
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {results.map((result, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 sm:gap-10 py-10 first:pt-0 last:pb-0">
              <div>
                <div className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-jetbrains)] text-foreground leading-none">
                  {result.metric}
                </div>
                <div className="text-sm font-medium text-blue-700 mt-2">
                  {result.description}
                </div>
              </div>
              <div>
                <p className="text-lg text-muted leading-relaxed mb-2">
                  {result.context}
                </p>
                <p className="text-sm text-muted-foreground">
                  {result.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
