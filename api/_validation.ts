/**
 * Request-shape limits for the chat endpoint. It is an unauthenticated proxy to
 * a paid model, so everything the client sends is capped before it reaches the
 * upstream API. Kept dependency-free so it can be unit tested directly.
 */

export type ChatMessage = { text: string; sender: "user" | "bot" };

export const MAX_QUESTION_LENGTH = 500;
export const MAX_HISTORY_MESSAGES = 10;
export const MAX_HISTORY_MESSAGE_LENGTH = 1000;

/**
 * Keeps only the trailing turns, in the expected shape, each truncated. The
 * history arrives from the client, so none of it can be trusted for size.
 */
export function sanitiseHistory(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter(
      (m): m is ChatMessage =>
        typeof m === "object" &&
        m !== null &&
        typeof (m as ChatMessage).text === "string" &&
        ((m as ChatMessage).sender === "user" || (m as ChatMessage).sender === "bot")
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ sender: m.sender, text: m.text.slice(0, MAX_HISTORY_MESSAGE_LENGTH) }));
}
