import { NextRequest, NextResponse } from "next/server";
import { RESUME_CONTEXT } from "@/lib/resume";

// This route runs server-side only, so the API key never reaches the browser.
export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are "Khadija's Agent" — a helpful, friendly guide embedded on Khadija Bilal's personal portfolio site. Visitors ask you about her background, skills, and projects, and you answer like a knowledgeable friend who knows her work well.

Ground every answer strictly in the context below. Never invent employers, dates, degrees, or metrics that aren't in it. Keep responses concise, warm, and conversational rather than robotic.

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
    return "Khadija's Autonomous Research Scout Agent checks ArXiv daily, pulls out useful benchmark lifts and takeaways with an LLM, and saves structured notes into Notion. There’s a live demo link in the Hero and Projects sections.";
  }
  if (q.includes("flyrank") || q.includes("intern")) {
    return "Khadija completed a 12-week Machine Learning internship at FlyRank starting on 6 July. She focused on ML and AI Fluency assignments, including data cleaning, feature engineering, model training, evaluation, prompt design, API integration, reporting, and deployment support.";
  }
  if (q.includes("rag") || q.includes("pinecone") || q.includes("gemini") || q.includes("document")) {
    return "Her Document RAG Chatbot pulls documents from Google Drive, turns them into Gemini embeddings, and stores them in Pinecone so it can answer questions from the actual content.";
  }
  if (q.includes("agent") && (q.includes("crew") || q.includes("multi") || q.includes("research"))) {
    return "The Multi-Agent Research Crew uses CrewAI so a researcher, analyst, and writer agent can work together to turn one prompt into a polished, structured report.";
  }
  if (q.includes("sql") || q.includes("security") || q.includes("langchain")) {
    return "Her SQL Agent Security Workshop focused on hardening a LangChain SQL agent with query checks, SELECT-only enforcement, and safer error handling.";
  }
  if (q.includes("sketch") || q.includes("whiteboard") || q.includes("drawing") || q.includes("design app")) {
    return "SketchLine is a hands-on sketching app where every lesson ends on a live whiteboard, so you actually draw the shapes, colors, or linework and get instant feedback.";
  }
  if (q.includes("queueless") || q.includes("queue") || q.includes("hospital") || q.includes("clinic") || q.includes("waiting")) {
    return "Queueless is an AI queue system for hospitals and clinics in Pakistan — it uses QR check-in, live tracking, and wait-time prediction to reduce physical waiting.";
  }
  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("tools")) {
    return "Khadija’s stack bridges classical ML and the LLM world: Python and scikit-learn, plus PyTorch/TensorFlow, Claude/OpenAI APIs, RAG, agent workflows, FastAPI/Flask, Git, SQL, and Vercel deployment.";
  }
  if (q.includes("strong") || q.includes("best") || q.includes("specialt") || q.includes("focus")) {
    return "She’s most comfortable where classical ML meets the agent stack — building RAG pipelines, designing tool-driven workflows, and making that work deployable.";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire")) {
    return "You can reach Khadija at khadijabilal888@gmail.com, or check out her work on github.com/KHADIJA2008-KB.";
  }
  if (q.includes("project")) {
    return "Her portfolio includes five active projects: Search Intelligence Capstone, General AI Fluency Capstone, Autonomous Research Scout Agent, SketchLine, and Queueless. Ask about any one by name for more detail.";
  }

  return "That detail isn’t in my notes, but I can still share what I know about Khadija’s FlyRank internship, her RAG chatbot, or her sketching and queue-management projects. You can also reach her at khadijabilal888@gmail.com.";
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
    const reply = (() => {
      if (Array.isArray(data?.content)) {
        return data.content
          .filter((block: { type: string }) => block.type === "text")
          .map((block: { text: string }) => block.text)
          .join("\n");
      }
      if (typeof data?.completion === "string") {
        return data.completion;
      }
      if (typeof data?.output_text === "string") {
        return data.output_text;
      }
      if (typeof data?.response?.output_text === "string") {
        return data.response.output_text;
      }
      if (typeof data?.message?.content === "string") {
        return data.message.content;
      }
      if (Array.isArray(data?.message?.content)) {
        return data.message.content
          .map((block: { text: string }) => block.text)
          .join("\n");
      }
      return "";
    })().trim();

    return NextResponse.json({
      reply: reply || "I'm not sure how to answer that yet — try asking about Khadija's skills or projects.",
      mode: "live",
    });
  } catch (err) {
    console.error("Chat route error, using fallback:", err);
    return NextResponse.json({ reply: fallbackReply(lastUserMessage), mode: "fallback" });
  }
}
