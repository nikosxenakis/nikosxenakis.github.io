import type { VercelRequest, VercelResponse } from "@vercel/node";
import { systemPrompt } from "./_prompt.js";
import { checkRateLimit, getClientKey, MAX_REQUESTS_PER_WINDOW } from "./_rateLimit.js";
import { MAX_QUESTION_LENGTH, sanitiseHistory } from "./_validation.js";
import { extractReply, FALLBACK_REPLY, type GeminiResponse } from "./_reply.js";

const GEMINI_MODEL = "gemini-2.5-flash";

/** Room for a few sentences or a short bullet list, with the answer alone. */
const MAX_OUTPUT_TOKENS = 400;

const ALLOWED_ORIGINS = [
  "https://nikosxenakis.github.io",
  "https://nikosxenakis.org",
  "http://localhost",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = String(req.headers.origin ?? "");
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
    return;
  }

  const limit = checkRateLimit(getClientKey(req.headers));
  res.setHeader("X-RateLimit-Limit", String(MAX_REQUESTS_PER_WINDOW));
  res.setHeader("X-RateLimit-Remaining", String(limit.remaining));

  if (!limit.allowed) {
    res.setHeader("Retry-After", String(limit.retryAfterSeconds));
    res.status(429).json({ error: "Too many requests. Please try again shortly." });
    return;
  }

  const { messages, question } = req.body as {
    messages?: unknown;
    question?: unknown;
  };

  if (!question || typeof question !== "string" || question.trim() === "") {
    res.status(400).json({ error: "question is required" });
    return;
  }

  if (question.length > MAX_QUESTION_LENGTH) {
    res
      .status(400)
      .json({ error: `question must be ${MAX_QUESTION_LENGTH} characters or fewer` });
    return;
  }

  const history = sanitiseHistory(messages);

  const payload = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents: [
      ...history.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      })),
      { role: "user", parts: [{ text: question.trim() }] },
    ],
    generationConfig: {
      temperature: 0.3,
      // gemini-2.5-flash thinks by default and charges it to maxOutputTokens,
      // starving the answer. Thinking buys nothing for prompt lookups.
      thinkingConfig: { thinkingBudget: 0 },
      maxOutputTokens: MAX_OUTPUT_TOKENS,
    },
  };

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://nikosxenakis.github.io/",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Gemini error ${response.status}: ${body}`);
      res.status(502).json({ error: "Upstream API error" });
      return;
    }

    const data = (await response.json()) as GeminiResponse;
    const { reply, truncated, finishReason } = extractReply(data);

    // Surfaces a too-small token budget in the function logs, not just in chat.
    if (truncated) {
      console.warn(
        `Gemini hit MAX_TOKENS with maxOutputTokens=${MAX_OUTPUT_TOKENS}; reply was ${reply.length} chars`
      );
    } else if (finishReason && finishReason !== "STOP") {
      console.warn(`Gemini finished with reason ${finishReason}`);
    }

    res.json({ reply: reply || FALLBACK_REPLY });
  } catch (err) {
    console.error("Chat request failed:", err);
    res.status(502).json({ error: "Failed to reach the AI service" });
  }
}
