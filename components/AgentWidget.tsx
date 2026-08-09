"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const STARTER_PROMPTS = [
  "What did she do at FlyRank?",
  "Tell me about the RAG chatbot",
  "Where does she shine the most?",
];

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi — I’m Khadija’s agent. Ask me about her background, skills, or projects, and I’ll share what I know from her portfolio and experience.",
};

export default function AgentWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "The agent couldn't respond.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong reaching the agent."
      );
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Khadija's agent"
          className="flex h-[26rem] w-[min(92vw,22rem)] flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/10"
        >
          {/* console header */}
          <div className="flex items-center justify-between border-b border-border bg-surface2 px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              khadija_agent — online
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 text-faint transition hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3L13 13M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            className="console-scroll flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <span
                  className={`font-mono text-[11px] ${
                    m.role === "user" ? "text-accent" : "text-accent"
                  }`}
                >
                  {m.role === "user" ? "you >" : "agent >"}
                </span>
                <p className="mt-1 text-ink/90">{m.content}</p>
              </div>
            ))}

            {loading && (
              <div className="text-sm">
                <span className="font-mono text-[11px] text-accent">agent &gt;</span>
                <p className="mt-1 font-mono text-xs text-faint">
                  thinking
                  <span className="animate-blink">…</span>
                </p>
              </div>
            )}

            {error && (
              <p className="rounded border border-accent/30 bg-accent/5 px-3 py-2 font-mono text-xs text-accent">
                {error}
              </p>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {STARTER_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    className="rounded-full border border-border px-3 py-1.5 text-left font-mono text-[11px] text-muted transition hover:border-accent/60 hover:text-accent"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* input */}
          <div className="border-t border-border p-3">
            <div className="flex items-end gap-2 rounded-lg border border-border bg-bg px-3 py-2 focus-within:border-accent/60">
              <span className="pb-1 font-mono text-xs text-faint">›</span>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask about her skills or projects…"
                className="max-h-24 flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="rounded-md bg-accent px-2.5 py-1.5 text-white transition disabled:opacity-30"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8h11M8 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 font-mono text-xs text-ink shadow-lg shadow-black/10 transition hover:border-accent/60 hover:text-accent"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        {open ? "close_agent()" : "ask_khadijas_agent()"}
      </button>
    </div>
  );
}
