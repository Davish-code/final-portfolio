import { profile } from '../src/data/profile';

export interface Env {
  GEMINI_API_KEY: string;
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/chat') {
      return handleChat(request, env);
    }
    // @ts-ignore
    return env.ASSETS.fetch(request);
  },
};
async function handleChat(request: Request, env: Env): Promise<Response> {
  try {
    const body = await request.json() as { history?: any[] };
    const rawHistory = body.history;
    
    if (!rawHistory || rawHistory.length === 0) {
      return new Response(JSON.stringify({ error: "History cannot be empty." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    
    const latestUserMessage = rawHistory[rawHistory.length - 1]?.parts?.[0]?.text || "";
    if (latestUserMessage.length > 500) {
      return new Response(JSON.stringify({ error: "Message exceeds 500 characters." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Gemini API requires the first message to have role "user".
    // Filter out the initial AI greeting so the history always starts with a user message.
    const firstUserIndex = rawHistory.findIndex((m: any) => m.role === 'user');
    const history = firstUserIndex >= 0 ? rawHistory.slice(firstUserIndex) : rawHistory;

    const SYSTEM_PROMPT = `You are an AI assistant embedded in Davish Talreja's personal portfolio. 
Your ONLY purpose is to answer questions about Davish Talreja using the provided profile data.

CRITICAL INSTRUCTIONS:
1. STRICTLY restrict your answers to information about Davish Talreja.
2. If the user asks about ANYTHING else (e.g., coding help, general knowledge, math, history, current events, or tasks not related to Davish), you MUST decline gracefully. 
   Example refusal: "[ACCESS DENIED] I am specifically configured to only discuss Davish Talreja's background, skills, and projects. I cannot process general requests regarding [topic]."
3. Do not write code, solve problems, or provide general information under any circumstances.
4. Keep responses concise, helpful, and slightly stylized to match a 'system terminal' aesthetic.
5. Do NOT use markdown formatting (no asterisks **, no hashes #, no bolding). If you need emphasis or headers, use ALL CAPS (e.g. NAME:).

PROFILE DATA:
Name: ${profile.name}
Location: ${profile.location}
Email: ${profile.email}
Roles: ${profile.roles.join(', ')}
Bio: ${profile.bio}
Skills: ${profile.skills.join(', ')}

Projects:
${profile.projects.map(p => `- ${p.name}: ${p.description}`).join('\n')}

Journey:
${profile.journey.map(j => `- ${j.year}: ${j.title} (${j.description})`).join('\n')}`;

    const apiBody = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: history
    };

    const MODELS = [
      "gemini-3.5-flash-lite",
      "gemini-3.6-flash",
      "gemini-3.5-flash",
      "gemini-3.7-flash",
    ];

    const MAX_RETRIES = 3;
    const RETRY_DELAY_MS = 1500;

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    for (const model of MODELS) {
      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
            method: "POST",
            headers: {
              "x-goog-api-key": env.GEMINI_API_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(apiBody)
          });

          if (response.ok) {
            const data = await response.json() as any;
            const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
            return new Response(JSON.stringify({ reply }), { status: 200, headers: { 'Content-Type': 'application/json' } });
          }

          // If 503 (overloaded), retry after a delay
          if (response.status === 503) {
            await delay(RETRY_DELAY_MS * (attempt + 1));
            continue;
          }

          // 429 (rate limit) or other errors — skip to next model
          break;
        } catch {
          break;
        }
      }
    }

    // All models and retries exhausted
    return new Response(JSON.stringify({ reply: "Sorry, limit has reached. I'm currently on a free tier. Please try again later." }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: "Internal server error", details: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
