import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "@/assets/styles/chatbot.css";
import { RiRefreshLine, RiRobot2Line, RiSubtractLine } from "react-icons/ri";

type ChatMessage = { text: string; sender: "user" | "bot" };

const STORAGE_KEY = "nikos-chatbot-messages";

/** Mirrors MAX_QUESTION_LENGTH in api/chat.ts, which rejects anything longer. */
const MAX_QUESTION_LENGTH = 500;

const SUGGESTIONS = [
  "Where did you study?",
  "What languages do you speak?",
  "What was your last role?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as ChatMessage[];
      }
    } catch {
      // Ignore corrupted storage and start fresh
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const formatBotMessage = (text: string) => {
    const stripped = text.replace(/\*\*/g, "").replace(/__/g, "");
    const parts = stripped
      .split(/\n+/)
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean);

    if (parts.length > 1) {
      return (
        <ul className="message-list">
          {parts.map((part, idx) => (
            <li key={idx}>{part}</li>
          ))}
        </ul>
      );
    }

    return parts[0] ?? "";
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Ignore storage write failures (e.g., quota)
    }
  }, [messages]);

  // Keep the newest message in view without scrolling any ancestor.
  useEffect(() => {
    const node = messagesRef.current;
    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  }, [messages, isLoading]);

  // Move focus into the panel on open, and back to the launcher on close.
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else if (wasOpenRef.current) {
      fabRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: Event) => {
      const target = event.target as Node;
      // The launcher toggles itself; closing here too would reopen instantly.
      if (panelRef.current?.contains(target) || fabRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  /*
   * On phones the panel is a full-screen sheet, and an open keyboard shrinks the
   * visual viewport without changing dvh. Tracking it keeps the input above the
   * keyboard instead of behind it.
   */
  useEffect(() => {
    const viewport = window.visualViewport;
    if (!isOpen || !viewport) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        "--chat-visual-height",
        `${viewport.height}px`
      );
    };

    apply();
    viewport.addEventListener("resize", apply);
    viewport.addEventListener("scroll", apply);

    return () => {
      viewport.removeEventListener("resize", apply);
      viewport.removeEventListener("scroll", apply);
      document.documentElement.style.removeProperty("--chat-visual-height");
    };
  }, [isOpen]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setError(null);
    setInputValue("");
    setIsLoading(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage cleanup issues
    }
    inputRef.current?.focus();
  };

  const handleSendMessage = async (override?: string) => {
    const question = (override ?? inputValue).trim();
    if (question === "" || isLoading) return;

    const userMessage: ChatMessage = { text: question, sender: "user" };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!override) {
      setInputValue("");
    }
    setIsLoading(true);
    setError(null);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const apiBase = (import.meta.env.VITE_API_URL as string | undefined) ?? "";
      const response = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, question: userMessage.text }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw Object.assign(new Error(`Request failed: ${response.status}`), {
          rateLimited: response.status === 429,
        });
      }

      const data = (await response.json()) as { reply: string };
      const botReply = data.reply || "I had trouble formulating a response. Please try again.";

      setMessages([...updatedMessages, { text: botReply, sender: "bot" }]);
    } catch (err) {
      // A cancelled request means the widget was reset or unmounted, so drop it silently.
      if (controller.signal.aborted) return;

      const rateLimited = Boolean((err as { rateLimited?: boolean })?.rateLimited);

      setError(
        rateLimited
          ? "That's a lot of questions in a short time. Please wait a few minutes and try again."
          : "Something went wrong reaching the chat service. Please try again in a moment."
      );
      setMessages([
        ...updatedMessages,
        {
          text: rateLimited
            ? "I need a short break. Please try again in a few minutes."
            : "Sorry, I couldn't get an answer right now.",
          sender: "bot",
        },
      ]);
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
      if (abortRef.current === controller) {
        abortRef.current = null;
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendMessage();
  };

  /*
   * Portalled to body so the panel's position:fixed stays anchored to the
   * viewport regardless of where the launcher is mounted.
   */
  const panel = (
    <div
      ref={panelRef}
      className={`chatbot-container ${isOpen ? "open" : ""}`}
      aria-live="polite"
    >
        <div className="chatbot-header">
          <p className="chatbot-title">Chat with me</p>
          <div className="chatbot-actions">
            <button
              type="button"
              className="chatbot-icon-btn"
              aria-label="Minimize chat"
              onClick={() => setIsOpen(false)}
            >
              <RiSubtractLine />
            </button>
            <button
              type="button"
              className="chatbot-icon-btn"
              aria-label="Reset chat"
              onClick={handleReset}
            >
              <RiRefreshLine />
            </button>
          </div>
        </div>
        <div className="chatbot-messages" ref={messagesRef}>
          {messages.length === 0 && !isLoading && (
            <div className="chatbot-empty">Ask me anything about my work and experience.</div>
          )}
          {messages.length === 0 && !isLoading && (
            <div className="chatbot-suggestions">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  className="chip"
                  onClick={() => handleSendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
          {messages.map((message, index) => {
            const ariaLabel = message.sender === "user" ? "Your message" : "Bot response";
            return (
              <div key={index} className={`message ${message.sender}`} aria-label={ariaLabel}>
                {message.sender === "bot" ? formatBotMessage(message.text) : message.text}
              </div>
            );
          })}
          {isLoading && <div className="message bot thinking">Thinking...</div>}
        </div>
        {error && <div className="chatbot-status error">{error}</div>}
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="question"
            aria-label="Your message"
            enterKeyHint="send"
            autoComplete="off"
            maxLength={MAX_QUESTION_LENGTH}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || inputValue.trim() === ""}>
            {isLoading ? "..." : "Send"}
          </button>
      </form>
    </div>
  );

  return (
    <div>
      {createPortal(panel, document.body)}
      <button
        ref={fabRef}
        type="button"
        className="chatbot-fab"
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <RiRobot2Line className="chatbot-fab-icon" />
      </button>
    </div>
  );
};

export default Chatbot;
