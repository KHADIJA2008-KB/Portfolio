# Khadija Bilal — Portfolio

A minimal, modern portfolio built with Next.js (App Router) + Tailwind CSS, with an
embedded AI chat widget ("Khadija's Agent") that answers visitor questions about her
background using the Claude API.

## Design notes

- Dark, low-glare palette (`#0B0E11` background, violet `#6E56CF` / teal `#3FD9C3`
  accents) with Space Grotesk for display type, Inter for body copy, and JetBrains
  Mono for labels, tags, and the agent console — the mono face is used deliberately
  wherever the copy is acting like a system label (`// about`, `agent_status: online`)
  rather than as decoration.
- The hero background is a quiet animated node graph: nodes drift and connect when
  close, echoing nearest-neighbor lookups in a vector store — a literal nod to the
  embeddings/RAG work described in the Projects section. It freezes to a single frame
  automatically if the visitor has "reduce motion" enabled.
- The agent widget is styled as a small terminal/console rather than a generic chat
  bubble, to match the engineering register of the rest of the page.

## Local development

```bash
npm install
cp .env.example .env.local   # then add your real ANTHROPIC_API_KEY
npm run dev
```

Visit http://localhost:3000.

## How the agent widget works

- `components/AgentWidget.tsx` is a client component: it renders the floating chat UI
  and posts the conversation to `/api/chat`.
- `app/api/chat/route.ts` is a server-side Next.js route. It attaches a system prompt
  built from `lib/resume.ts` (Khadija's background, skills, and projects) and forwards
  the conversation to the Anthropic Messages API using `ANTHROPIC_API_KEY`, which is
  only ever read on the server — it's never sent to the browser.
- To keep the agent's answers accurate, edit `lib/resume.ts`. That single file is the
  agent's entire "memory" of Khadija.
- Swap in OpenAI instead of Claude by changing the `fetch` call in
  `app/api/chat/route.ts` to `https://api.openai.com/v1/chat/completions` and adjusting
  the request/response shape — the rest of the widget doesn't need to change.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. In the Vercel project's Environment Variables, add `ANTHROPIC_API_KEY` with your
   real key (get one at https://console.anthropic.com).
4. Deploy. No other configuration is required — this is a standard Next.js app.

## Editing content

- Hero / About / Skills / Projects / Contact copy lives directly in the matching file
  under `components/`.
- Keep `lib/resume.ts` in sync with any changes so the chat widget stays accurate.
