import type { VercelRequest, VercelResponse } from "@vercel/node";
import { systemPrompt } from "./_prompt.js";

const GEMINI_MODEL = "gemini-2.5-flash";

const ALLOWED_ORIGINS = [
  "https://nikosxenakis.github.io",
  "https://nikosxenakis.org",
  "http://localhost",
];

type ChatMessage = { text: string; sender: "user" | "bot" };
type GeminiPart = { text?: string };
type GeminiResponse = {
  candidates?: { content?: { parts?: GeminiPart[] } }[];
};

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

  const { messages, question } = req.body as {
    messages?: ChatMessage[];
    question?: string;
  };

  if (!question || typeof question !== "string" || question.trim() === "") {
    res.status(400).json({ error: "question is required" });
    return;
  }

  const history: ChatMessage[] = Array.isArray(messages) ? messages : [];

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
      maxOutputTokens: 150,
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
    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map((p) => p.text ?? "")
        .join("")
        .trim() ?? "";

    res.json({ reply: reply || "I had trouble formulating a response. Please try again." });
  } catch (err) {
    console.error("Chat request failed:", err);
    res.status(502).json({ error: "Failed to reach the AI service" });
  }
}
