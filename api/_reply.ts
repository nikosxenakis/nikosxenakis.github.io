export type GeminiPart = { text?: string };

export type GeminiResponse = {
  candidates?: {
    content?: { parts?: GeminiPart[] };
    finishReason?: string;
  }[];
};

export const FALLBACK_REPLY = "I had trouble formulating a response. Please try again.";

/** Below this, a cut-off answer is a fragment rather than a short reply. */
export const MIN_USABLE_REPLY_LENGTH = 40;

export type ExtractedReply = {
  /** Empty when nothing usable came back; the caller substitutes FALLBACK_REPLY. */
  reply: string;
  finishReason?: string;
  truncated: boolean;
};

export function extractReply(data: GeminiResponse): ExtractedReply {
  const candidate = data.candidates?.[0];
  const text = (candidate?.content?.parts ?? [])
    .map((part) => part.text ?? "")
    .join("")
    .trim();

  const finishReason = candidate?.finishReason;
  const truncated = finishReason === "MAX_TOKENS";

  const usable = truncated ? text.length >= MIN_USABLE_REPLY_LENGTH : text.length > 0;

  return { reply: usable ? text : "", finishReason, truncated };
}
