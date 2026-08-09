type SkillGroup = {
  name: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    name: "Machine Learning & Data",
    items: [
      "Python (NumPy, Pandas, scikit-learn)",
      "Model development: regression, classification, clustering, evaluation & tuning",
      "Data preprocessing, feature engineering, EDA",
    ],
  },
  {
    name: "Deep Learning / AI Stack",
    items: [
      "PyTorch / TensorFlow fundamentals",
      "LLM APIs (Claude, OpenAI) — prompting, function calling, structured outputs",
      "RAG (retrieval-augmented generation) & vector embeddings",
      "Agentic workflows / tool-use design",
    ],
  },
  {
    name: "Engineering & Deployment",
    items: [
      "REST APIs (FastAPI / Flask)",
      "Git & GitHub workflows",
      "Cloud deployment (Vercel; basic AWS/GCP familiarity)",
      "SQL / data querying",
    ],
  },
  {
    name: "Other",
    items: [
      "Prompt engineering & AI tool fluency (Claude Code, Cursor, v0)",
      "Technical writing / documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">// skills</p>
        <h2 className="reveal-on-scroll mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          What she works with
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.name} className="bg-surface p-7 sm:p-8">
              <h3 className="font-display text-base font-semibold text-ink">
                {group.name}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1 font-mono text-xs text-accent">
                      &gt;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
