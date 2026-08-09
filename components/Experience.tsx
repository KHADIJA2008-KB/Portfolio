export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">// experience</p>

        <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <p className="reveal-on-scroll max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            FlyRank was a 12-week Machine Learning internship that started on 6 July,
            focused on applied ML assignments and AI Fluency capstones.
          </p>

          <div className="reveal-on-scroll flex flex-col justify-between gap-6">
            <p className="text-base leading-relaxed text-muted">
              Day to day, the work centered on data cleaning, feature engineering,
              model training, evaluation, prompt design, API integration, reporting,
              and deployment support. The internship was learning-driven rather than
              product-driven: assignments and resources were the deliverables that
              earned progress points.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-surface/80 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  core tasks
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>Data cleaning and feature engineering for real predictive models</li>
                  <li>Model training, evaluation, and performance reporting</li>
                  <li>Prompt design and API integration for AI Fluency workflows</li>
                  <li>Deployment support and assignment completion tracking</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-surface/80 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  capstones
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>Research-paper capstone: built a real predictive model on real data</li>
                  <li>Personal agent capstone: ongoing AI agent experience now featured in this portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
