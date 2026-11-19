import { profile } from '../src/data/profile';

export interface Env {
  GEMINI_API_KEY: string;
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/chat') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        });
      }
      if (request.method === 'POST') {
        const res = await handleChat(request, env);
        const headers = new Headers(res.headers);
        headers.set('Access-Control-Allow-Origin', '*');
        return new Response(res.body, { status: res.status, headers });
      }
    }
    // Debug endpoint — remove after testing
    if (url.pathname === '/api/test') {
      const testBody = { contents: [{ role: 'user', parts: [{ text: 'say hello' }] }] };
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent', {
        method: 'POST',
        headers: { 'x-goog-api-key': env.GEMINI_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(testBody)
      });
      const t = await r.text();
      return new Response(JSON.stringify({ status: r.status, keyLength: env.GEMINI_API_KEY?.length, keyStart: env.GEMINI_API_KEY?.substring(0, 6), body: t }), { headers: { 'Content-Type': 'application/json' } });
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

    const CANDIDATE_MODELS = [
      "gemini-3.6-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.5-flash"
    ];
    const PER_MODEL_TIMEOUT_MS = 7000;

    for (const model of CANDIDATE_MODELS) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), PER_MODEL_TIMEOUT_MS);

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(apiBody),
            signal: controller.signal
          }
        ).finally(() => clearTimeout(timeoutId));

        if (response.ok) {
          const data = await response.json() as any;
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
          return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // If overloaded (503), rate-limited (429), or model missing (404), fall back to next model immediately
        if (response.status === 503 || response.status === 429 || response.status === 404) {
          continue;
        }

        // If client payload error (400), don't retry other models
        const errorText = await response.text();
        let errorDetails = errorText;
        try { errorDetails = JSON.parse(errorText)?.error?.message || errorText; } catch {}
        return new Response(JSON.stringify({ error: "Gemini API error", details: errorDetails, statusCode: response.status }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err: any) {
        // Timeout or network glitch — switch to next model immediately
        continue;
      }
    }

    // Graceful fallback if all models on free tier are temporarily throttled
    return new Response(JSON.stringify({
      reply: "[SYSTEM NOTICE] Traffic is currently high on the free-tier network. Please ask your question again in a moment."
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: "Internal server error", details: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
