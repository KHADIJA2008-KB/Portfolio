export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="font-mono text-xs text-accent2">// about</p>

        <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <p className="max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Khadija is an AI/ML Engineer building practical,
            production-ready ML systems and AI agents.
          </p>

          <div className="flex flex-col justify-between gap-6">
            <p className="text-base leading-relaxed text-muted">
              She recently wrapped a Machine Learning internship at
              FlyRank, and works at the seam between classical ML
              foundations and the newer world of LLM-powered agents —
              retrieval, tool-use, and multi-agent coordination.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-faint">
              <span className="rounded border border-border px-2.5 py-1">
                ml_internship: FlyRank
              </span>
              <span className="rounded border border-border px-2.5 py-1">
                focus: agents · rag · deployment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
