"use client";

import { useState } from "react";

type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  ctaLabel?: string;
  problemStatement?: string;
  accuracyPerformance?: string;
  dataSource?: string;
  performanceAnalysis?: string;
  liveDemo?: string;
  pros?: string[];
  cons?: string[];
};

const projects: Project[] = [
  {
    tag: "ml-capstone",
    title: "Search Intelligence Capstone",
    description:
      "Built a repeatable refresh/content opportunity scoring workflow on real FlyRank search data, then shipped a deployed research-paper-style experience with ranked recommendations and reason-coded actions.",
    stack: ["Python", "ML validation", "FlyRank search data", "Netlify"],
    liveUrl: "https://mlcapstone01.netlify.app/",
    ctaLabel: "> view_research_paper()",
  },
  {
    tag: "ai-fluency",
    title: "General AI Fluency Capstone",
    description:
      "Shipped a personal portfolio and AI agent experience as a public-facing brand build, turning coursework into a deployed website that can be explored by visitors.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "AI agent"],
    liveUrl: "https://khadijabilal.vercel.app/",
    ctaLabel: "> view_site()",
  },
  {
    tag: "autonomous-agent",
    title: "Autonomous Research Scout Agent",
    description:
      "An autonomous AI agent pipeline that monitors daily ArXiv preprints, extracts benchmark lifts & technical takeaways via an LLM, and logs structured research cards into Notion.",
    stack: ["Python", "ArXiv API", "Gemini API", "Notion API"],
    liveDemo: "not deployed",
  },
  {
    tag: "design",
    title: "SketchLine",
    description:
      "A practice-first design & sketching app. Every lesson ends on a live whiteboard — read the technique, then place the shapes, colors, or linework yourself, and get feedback in seconds.",
    stack: ["Interactive canvas", "Feedback engine", "Practice-first UX"],
    liveUrl: "https://sketchline.netlify.app/",
    ctaLabel: "> view_live_demo()",
    accuracyPerformance: "N/A — rule-based feedback engine, not ML. No accuracy score applies.",
    dataSource: "No dataset; only the user's own stroke input, stored live in Supabase.",
    performanceAnalysis:
      "Feedback is instant because it uses local rule checks rather than model inference or an API round-trip. The trade-off is speed and predictability versus limited coverage: it catches only what is explicitly coded and cannot judge design quality outside a written rule.",
    liveDemo: "https://sketchline.netlify.app/",
    pros: [
      "Instant, deterministic feedback with no latency or API cost",
      "Vector stroke data replays perfectly at any resolution",
      "The full lesson → practice → feedback loop works end to end",
    ],
    cons: [
      "Feedback is limited to pre-written rules and cannot recognize unlisted design issues",
      "Progress and badges are client-side and not production-safe as a trust layer",
      "No automated tests; one Eye Training category is currently unmapped",
    ],
  },
  {
    tag: "healthtech",
    title: "Queueless",
    description:
      "An AI-powered queue management system for hospitals, clinics, and public service centers in Pakistan. Cuts physical waiting time through QR-based queue access, live tracking, and smart wait-time prediction.",
    stack: ["QR-based queue access", "Live tracking", "Wait-time prediction"],
    liveUrl: "https://queueless-126888906449.us-west1.run.app",
    ctaLabel: "> view_live_demo()",
    accuracyPerformance: "Not measurable yet — there is no real data to validate the predictions against.",
    dataSource: "Placeholder/synthetic data, not real hospital or clinic logs.",
    performanceAnalysis:
      "The system architecture works end to end, but prediction accuracy is untested because the synthetic data does not reflect real wait-time variance. The next step is to shadow-log real wait times before relying on the predictions.",
    liveDemo: "https://queueless-126888906449.us-west1.run.app",
    pros: [
      "A real deployed full-stack system rather than a mockup",
      "Built for low-end devices and low-bandwidth contexts, with English and Urdu support",
      "The architecture is clean and easy to plug with real data later",
    ],
    cons: [
      "Wait-time predictions are unvalidated because the data is synthetic",
      "Firestore rules are still in draft form and need hardening before real data",
      "SMS, multi-service support, and analytics dashboards are still missing",
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reveal-on-scroll font-mono text-xs text-accent">// projects</p>
            <h2 className="reveal-on-scroll mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Things she's shipped
            </h2>
          </div>
          <a
            href="https://github.com/KHADIJA2008-KB"
            target="_blank"
            rel="noopener noreferrer"
            className="button-hover inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs text-muted"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            See GitHub profile
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((project, index) => {
            const isExpanded = expanded === index;
            const hasDetails = Boolean(
              project.problemStatement ||
              project.accuracyPerformance ||
              project.dataSource ||
              project.performanceAnalysis ||
              project.pros?.length ||
              project.cons?.length ||
              project.liveDemo
            );

            return (
              <article
                key={project.title}
                className="card-hover group relative rounded-lg border border-border bg-surface/70 p-7 sm:p-9"
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
                        className="button-hover mt-4 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-medium text-accent"
                      >
                        <span>{project.ctaLabel ?? "> test_agent_demo()"}</span>
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
                  {hasDetails && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : index)}
                      className="button-hover rounded-md border border-border bg-bg px-3 py-2 font-mono text-xs text-muted"
                    >
                      {isExpanded ? "Hide details" : "View details"}
                    </button>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-bg px-2.5 py-1 font-mono text-xs text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {isExpanded && (
                  <div className="mt-6 space-y-4 rounded-md border border-border bg-bg/60 p-4 text-sm text-muted">
                    {project.problemStatement && (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Problem statement
                        </p>
                        <p className="mt-1 leading-relaxed">{project.problemStatement}</p>
                      </div>
                    )}
                    {project.accuracyPerformance && (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Accuracy / performance
                        </p>
                        <p className="mt-1 leading-relaxed">{project.accuracyPerformance}</p>
                      </div>
                    )}
                    {project.dataSource && (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Data source
                        </p>
                        <p className="mt-1 leading-relaxed">{project.dataSource}</p>
                      </div>
                    )}
                    {project.performanceAnalysis && (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Performance analysis
                        </p>
                        <p className="mt-1 leading-relaxed">{project.performanceAnalysis}</p>
                      </div>
                    )}
                    {project.liveDemo && (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Live demo
                        </p>
                        <p className="mt-1 leading-relaxed">
                          {project.liveDemo === "not deployed" ? (
                            <span>{project.liveDemo}</span>
                          ) : (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline-offset-2 hover:underline"
                            >
                              {project.liveDemo}
                            </a>
                          )}
                        </p>
                      </div>
                    )}
                    {project.pros?.length ? (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Pros
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {project.pros.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {project.cons?.length ? (
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          Cons / limitations
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {project.cons.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {!project.problemStatement && !project.accuracyPerformance && !project.dataSource && !project.performanceAnalysis && !project.pros?.length && !project.cons?.length && !project.liveDemo && (
                      <p className="text-sm text-muted">
                        More detail is pending for this project. Share the information and I’ll add it here.
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
