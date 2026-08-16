import portfolioData from "@/data/portfolioData.json";

const timeInvested = (portfolioData as any)?.timeInvested ?? {
  headline: "Engineering time invested",
  subtitle:
    "Verified track record of deliberate practice, hands-on system building, and technical immersion.",
  stats: [],
  allocations: [],
};

export default function TimeInvested() {
  return (
    <section id="time-invested" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">
          // time invested
        </p>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="reveal-on-scroll font-display text-3xl font-semibold text-ink sm:text-4xl">
              {timeInvested.headline}
            </h2>
          </div>
          <p className="reveal-on-scroll max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {timeInvested.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {timeInvested.stats.map((stat: any) => (
            <div
              key={stat.label}
              className="reveal-on-scroll rounded-3xl border border-border bg-surface/80 p-6 text-center"
            >
              <span className={`block text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              <p className="mt-3 text-sm font-medium text-ink">{stat.label}</p>
              <span className="mt-1 block text-xs text-muted">{stat.detail}</span>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll mt-10 rounded-3xl border border-border bg-surface/70 p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            time allocation breakdown
          </p>

          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {timeInvested.allocations.map((allocation: any) => (
              <li key={allocation.title} className="flex gap-3">
                <span className="mt-1 text-accent">▪</span>
                <span>
                  <strong className="font-semibold text-ink">
                    {allocation.title} ({allocation.value}):
                  </strong>{" "}
                  {allocation.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
