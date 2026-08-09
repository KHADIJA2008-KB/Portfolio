export default function Writing() {
  return (
    <section id="writing" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">// writing</p>

        <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <p className="reveal-on-scroll max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Writing and capstone notes
          </p>

          <div className="reveal-on-scroll flex flex-col justify-between gap-6">
            <p className="text-base leading-relaxed text-muted">
              Posts and capstone write-ups will go here as the program progresses.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-3xl border border-border bg-surface/70 p-7 sm:p-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-accent">
                  <span>ML-capstone</span>
                  <span className="rounded-full bg-border px-2 py-0.5 text-[10px] text-muted">Capstone</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Search Intelligence Capstone
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Built a repeatable refresh/content opportunity scoring workflow on real
                  FlyRank search data, then shipped a deployed research-paper-style
                  experience with ranked recommendations and reason-coded actions.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-faint">
                  July–Sept 2025
                </span>
                <a
                  href="https://mlcapstone01.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-hover inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-medium text-accent"
                >
                  <span>{"> view_research_paper()"}</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-surface/70 p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              future writing
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
              More notes are coming
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              This section will expand with additional research notes, capstone reflections,
              and writing from the AI Fluency program as Khadija completes more projects.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
