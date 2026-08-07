import NodeField from "./NodeField";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <NodeField />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/70 to-bg" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-5xl flex-col justify-center px-6 py-28 sm:px-8">
        <div className="animate-rise" style={{ animationDelay: "0ms" }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-accent2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent2" />
            </span>
            agent_status: online — ml_internship: flyrank, complete
          </div>
        </div>

        <h1
          className="animate-rise font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Khadija Bilal
        </h1>

        <p
          className="animate-rise mt-4 font-display text-xl font-medium text-muted sm:text-2xl"
          style={{ animationDelay: "150ms" }}
        >
          AI/ML Engineer
        </p>

        <p
          className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "220ms" }}
        >
          I build practical, production-ready ML systems and AI agents —
          from the model up to the API that ships it.
        </p>

        <div
          className="animate-rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent/90"
          >
            View projects
          </a>
          <a
            href="https://your-agent-demo.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent2/60 bg-accent2/10 px-5 py-3 text-sm font-medium text-accent2 transition hover:bg-accent2/20"
          >
            <span>⚡ Test Research Scout Agent</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition hover:border-accent2/60 hover:text-accent2"
          >
            Get in touch
          </a>
          <span className="font-mono text-xs text-faint">
            or ask the agent, bottom right ↘
          </span>
        </div>
      </div>
    </section>
  );
}
