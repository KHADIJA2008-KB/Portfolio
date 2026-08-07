import { NextRequest, NextResponse } from "next/server";
import { RESUME_CONTEXT } from "@/lib/resume";

// This route runs server-side only, so the API key never reaches the browser.
export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are "Khadija's Agent" — a small AI assistant embedded on Khadija Bilal's
personal portfolio site. Visitors chat with you to learn about her background, skills,
and projects. Ground every answer strictly in the context below. Do not invent
employers, dates, degrees, or metrics that aren't in it.

${RESUME_CONTEXT}`;

type ChatMessage = { role: "user" | "assistant"; content: string };

// Zero-cost fallback: simple keyword matching over the same resume context.
// Used whenever the real Claude call can't complete — no ANTHROPIC_API_KEY set,
// no API credits yet, rate limited, etc. — so the widget still works while
// Khadija's Anthropic billing isn't set up, and automatically stops being used
// the moment a real API call succeeds.
function fallbackReply(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("scout") || q.includes("arxiv") || q.includes("research agent")) {
    return "Her Autonomous Research Scout Agent monitors ArXiv preprints daily, extracts benchmark lifts and key takeaways with an LLM, and logs structured research cards into Notion. There's a live demo button in the Hero and Projects sections.";
  }
  if (q.includes("flyrank") || q.includes("intern")) {
    return "Khadija completed a Machine Learning internship at FlyRank, working on applied ML within a real product environment — the kind of end-to-end thinking (data → model → deployment) that shows up across her project work.";
  }
  if (q.includes("rag") || q.includes("pinecone") || q.includes("gemini") || q.includes("document")) {
    return "Her Document RAG Chatbot ingests files from Google Drive, embeds them with Google Gemini, and stores the vectors in Pinecone — so it answers questions grounded in real uploaded content instead of general knowledge.";
  }
  if (q.includes("agent") && (q.includes("crew") || q.includes("multi") || q.includes("research"))) {
    return "The Multi-Agent Research Crew, built with CrewAI, has specialized agents — researcher, analyst, writer — coordinate to turn a single prompt into a synthesized report, end-to-end.";
  }
  if (q.includes("sql") || q.includes("security") || q.includes("langchain")) {
    return "Her SQL Agent Security Workshop hardened a LangChain SQL agent from an unrestricted prototype into a production-style agent, adding query validation, SELECT-only enforcement, and safe error handling.";
  }
  if (q.includes("sketch") || q.includes("whiteboard") || q.includes("drawing") || q.includes("design app")) {
    return "SketchLine is a practice-first design & sketching app — every lesson ends on a live whiteboard where you place the shapes, colors, or linework yourself and get feedback in seconds, rather than just reading theory.";
  }
  if (q.includes("queueless") || q.includes("queue") || q.includes("hospital") || q.includes("clinic") || q.includes("waiting")) {
    return "Queueless is an AI-powered queue management system for hospitals, clinics, and public service centers in Pakistan — it cuts physical waiting time with QR-based queue access, live tracking, and smart wait-time prediction.";
  }
  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("tools")) {
    return "Khadija's core stack spans classical ML (Python, scikit-learn, model development & tuning), the deep learning / LLM side (PyTorch/TensorFlow, Claude & OpenAI APIs, RAG, agentic workflows), and engineering (FastAPI/Flask, Git, SQL, Vercel deployment).";
  }
  if (q.includes("strong") || q.includes("best") || q.includes("specialt") || q.includes("focus")) {
    return "She's strongest where classical ML meets the LLM agent stack — RAG pipelines, tool-use design, and getting that work behind a real, deployed API rather than leaving it in a notebook.";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire")) {
    return "You can reach Khadija directly at khadijabilal888@gmail.com, or see her code at github.com/KHADIJA2008-KB.";
  }
  if (q.includes("project")) {
    return "She's built six projects worth a look: an Autonomous Research Scout Agent (ArXiv + Notion), a Multi-Agent Research Crew (CrewAI), a Document RAG Chatbot (Gemini + Pinecone), a SQL Agent Security Workshop (LangChain), SketchLine (a practice-first sketching app), and Queueless (an AI queue management system for hospitals and clinics) — ask about any one by name for more detail.";
  }

  return "I don't have specifics on that, but I can tell you about Khadija's FlyRank internship, her RAG chatbot, the multi-agent research crew, or the SQL agent security project — or reach her directly at khadijabilal888@gmail.com.";
}

export async function POST(req: NextRequest) {
  let messages: ChatMessage[] = [];

  try {
    const body = (await req.json()) as { messages: ChatMessage[] };
    messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages is required" }, { status: 400 });
    }
  } catch (err) {
    console.error("Chat route parse error:", err);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No key configured at all — go straight to the free fallback, no network call.
  if (!apiKey) {
    return NextResponse.json({ reply: fallbackReply(lastUserMessage), mode: "fallback" });
  }

  try {
    // Keep the payload small: last 12 turns is plenty for a portfolio Q&A widget.
    const trimmed = messages.slice(-12).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: trimmed,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      // Covers billing/credit issues, rate limits, bad key, etc. — all fall back
      // gracefully instead of surfacing an error to the visitor.
      console.error("Anthropic API error, using fallback:", errText);
      return NextResponse.json({ reply: fallbackReply(lastUserMessage), mode: "fallback" });
    }

    const data = await response.json();
    const reply = (data.content ?? [])
      .filter((block: { type: string }) => block.type === "text")
      .map((block: { text: string }) => block.text)
      .join("\n")
      .trim();

    return NextResponse.json({
      reply: reply || "I'm not sure how to answer that yet — try asking about Khadija's skills or projects.",
      mode: "live",
    });
  } catch (err) {
    console.error("Chat route error, using fallback:", err);
    return NextResponse.json({ reply: fallbackReply(lastUserMessage), mode: "fallback" });
  }
}
