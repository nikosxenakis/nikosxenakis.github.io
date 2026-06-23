import React, { useEffect, useState } from "react";
import "@/assets/styles/chatbot.css";
import { RiRefreshLine, RiRobot2Line, RiSubtractLine } from "react-icons/ri";

type ChatMessage = { text: string; sender: "user" | "bot" };

const STORAGE_KEY = "nikos-chatbot-messages";

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

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setMessages([]);
    setError(null);
    setInputValue("");
    setIsLoading(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage cleanup issues
    }
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

    try {
      const apiBase = (import.meta.env.VITE_API_URL as string | undefined) ?? "";
      const response = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, question: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = (await response.json()) as { reply: string };
      const botReply = data.reply || "I had trouble formulating a response. Please try again.";

      setMessages([...updatedMessages, { text: botReply, sender: "bot" }]);
    } catch {
      setError("Something went wrong reaching the chat service. Please try again in a moment.");
      setMessages([
        ...updatedMessages,
        { text: "Sorry, I couldn't get an answer right now.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={`chatbot-container ${isOpen ? "open" : ""}`} aria-live="polite">
        <div className="chatbot-header" onClick={toggleChat}>
          <h2>Chat with me</h2>
          <div className="chatbot-actions" onClick={(e) => e.stopPropagation()}>
            <button
              className="chatbot-icon-btn"
              aria-label="Minimize chat"
              onClick={() => setIsOpen(false)}
            >
              <RiSubtractLine />
            </button>
            <button className="chatbot-icon-btn" aria-label="Reset chat" onClick={handleReset}>
              <RiRefreshLine />
            </button>
          </div>
        </div>
        <div className="chatbot-messages">
          {messages.length === 0 && !isLoading && (
            <div className="chatbot-empty">Ask me anything about my work and experience.</div>
          )}
          {messages.length === 0 && !isLoading && (
            <div className="chatbot-suggestions">
              {SUGGESTIONS.map((suggestion) => (
                <button
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
        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button onClick={() => handleSendMessage()} disabled={isLoading}>
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
      <div className="chatbot-fab" onClick={toggleChat} aria-label="Open chat">
        <RiRobot2Line className="chatbot-fab-icon" />
      </div>
    </div>
  );
};

export default Chatbot;
