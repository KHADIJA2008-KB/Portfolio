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

        <div className="mt-12">
          <article className="rounded-3xl border border-border bg-surface/70 p-7 sm:p-9">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Search Intelligence Capstone
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Built a repeatable refresh/content opportunity scoring workflow on real FlyRank
                  search data, then shipped a deployed research-paper-style experience with ranked
                  recommendations and reason-coded actions.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex rounded-full border border-border bg-bg px-3 py-1 text-xs text-faint">
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
        </div>
      </div>
    </section>
  );
}
