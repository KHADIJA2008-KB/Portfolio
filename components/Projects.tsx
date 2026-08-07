type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
};

const projects: Project[] = [
  {
    tag: "autonomous-agent",
    title: "Autonomous Research Scout Agent",
    description:
      "An autonomous AI agent pipeline that monitors daily ArXiv preprints, extracts benchmark lifts & technical takeaways via an LLM, and logs structured research cards into Notion.",
    stack: ["Python", "ArXiv API", "Gemini API", "Notion API"],
    // TODO: replace with the real deployed demo URL before pushing
    liveUrl: "https://your-agent-demo.netlify.app",
  },
  {
    tag: "agents",
    title: "Multi-Agent Research Crew",
    description:
      "A collaborative multi-agent AI system built with CrewAI, where specialized agents — researcher, analyst, writer — coordinate to complete complex tasks end-to-end, producing a synthesized report from a single prompt.",
    stack: ["CrewAI", "Python", "LLM orchestration"],
  },
  {
    tag: "rag",
    title: "Document RAG Chatbot",
    description:
      "An automated retrieval-augmented generation pipeline that ingests documents from Google Drive, embeds them with Google Gemini, and stores them in Pinecone — powering a chatbot that answers questions grounded in real uploaded content.",
    stack: ["Google Drive API", "Gemini embeddings", "Pinecone"],
  },
  {
    tag: "security",
    title: "SQL Agent Security Workshop",
    description:
      "A LangChain-based SQL agent evolved through progressive security hardening — from an unrestricted prototype to a production-style analytics agent with query validation, SELECT-only enforcement, and safe error handling.",
    stack: ["LangChain", "SQL", "Query validation"],
  },
  {
    tag: "design",
    title: "SketchLine",
    description:
      "A practice-first design & sketching app. Every lesson ends on a live whiteboard — read the technique, then place the shapes, colors, or linework yourself, and get feedback in seconds.",
    stack: ["Interactive canvas", "Feedback engine", "Practice-first UX"],
  },
  {
    tag: "healthtech",
    title: "Queueless",
    description:
      "An AI-powered queue management system for hospitals, clinics, and public service centers in Pakistan. Cuts physical waiting time through QR-based queue access, live tracking, and smart wait-time prediction.",
    stack: ["QR-based queue access", "Live tracking", "Wait-time prediction"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-accent2">// projects</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Things she's shipped
            </h2>
          </div>
          <a
            href="https://github.com/KHADIJA2008-KB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs text-muted transition hover:border-accent2/60 hover:text-accent2"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            See GitHub profile
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-lg border border-border bg-surface/40 p-7 transition hover:border-accent/50 sm:p-9"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    [{project.tag}]
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/20 px-4 py-2 font-mono text-xs font-medium text-accent2 transition hover:bg-accent/40"
                    >
                      <span>&gt; test_agent_demo()</span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border px-2.5 py-1 font-mono text-xs text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
