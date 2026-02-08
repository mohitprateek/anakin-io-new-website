const numbers = [
  { value: "10M+", label: "API requests processed daily", detail: "And growing" },
  { value: "99.5%", label: "Data accuracy rate", detail: "ML + Human QA pipeline" },
  { value: "500+", label: "Companies trust Anakin", detail: "Across 20+ countries" },
  { value: "<1s", label: "Average response time", detail: "10,000+ concurrent sessions" },
  { value: "4+", label: "Years in production", detail: "Since 2021" },
  { value: "86", label: "Team members", detail: "Dedicated to scraping" },
];

export default function ByTheNumbers() {
  return (
    <section className="py-20 sm:py-24 section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Anakin by the numbers
          </h2>
          <p className="text-muted">
            The engine behind mission-critical data for global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {numbers.map((item) => (
            <div
              key={item.label}
              className="bg-card p-8 sm:p-10 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-jetbrains)] text-data mb-2">
                {item.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
