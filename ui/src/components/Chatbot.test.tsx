import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chatbot from "./Chatbot";

function mockReply(reply: string) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ reply }),
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

function mockStatus(status: number) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: false,
    status,
    json: async () => ({ error: "nope" }),
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

describe("Chatbot", () => {
  it("offers starter suggestions while the conversation is empty", () => {
    render(<Chatbot />);
    expect(screen.getByRole("button", { name: "Where did you study?" })).toBeInTheDocument();
  });

  it("sends the typed question and shows the reply", async () => {
    const user = userEvent.setup();
    const fetchMock = mockReply("I studied in Edinburgh.");
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "Where?");
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(await screen.findByText("I studied in Edinburgh.")).toBeInTheDocument();

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/chat");
    expect(JSON.parse(init.body).question).toBe("Where?");
  });

  it("submits on Enter, because the input is inside a form", async () => {
    const user = userEvent.setup();
    const fetchMock = mockReply("Sure.");
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "Hello{Enter}");

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).question).toBe("Hello");
  });

  it("sends prior turns as history, without the pending question", async () => {
    const user = userEvent.setup();
    const fetchMock = mockReply("Second answer.");
    render(<Chatbot />);

    const input = screen.getByRole("textbox", { name: "Your message" });
    await user.type(input, "first{Enter}");
    await screen.findByText("Second answer.");

    await user.type(input, "second{Enter}");
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));

    const body = JSON.parse(fetchMock.mock.calls[1][1].body);
    expect(body.question).toBe("second");
    expect(body.messages).toEqual([
      { text: "first", sender: "user" },
      { text: "Second answer.", sender: "bot" },
    ]);
  });

  it("explains the wait when the server rate limits the caller", async () => {
    const user = userEvent.setup();
    mockStatus(429);
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "spam{Enter}");

    expect(await screen.findByText(/lot of questions in a short time/i)).toBeInTheDocument();
  });

  it("shows a generic failure message for other errors", async () => {
    const user = userEvent.setup();
    mockStatus(500);
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "hi{Enter}");

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("refuses to send an empty or whitespace-only question", async () => {
    const user = userEvent.setup();
    const fetchMock = mockReply("unused");
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "   {Enter}");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("caps the question length in the input itself", () => {
    render(<Chatbot />);
    expect(screen.getByRole("textbox", { name: "Your message" })).toHaveAttribute(
      "maxlength",
      "500"
    );
  });

  it("opens from the launcher and closes on Escape", async () => {
    const user = userEvent.setup();
    render(<Chatbot />);

    const launcher = screen.getByRole("button", { name: "Open chat" });
    expect(launcher).toHaveAttribute("aria-expanded", "false");

    await user.click(launcher);
    expect(screen.getByRole("button", { name: "Close chat" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Open chat" })).toHaveAttribute(
        "aria-expanded",
        "false"
      )
    );
  });

  it("restores the conversation from storage", () => {
    localStorage.setItem(
      "nikos-chatbot-messages",
      JSON.stringify([{ text: "remembered", sender: "user" }])
    );

    render(<Chatbot />);
    expect(screen.getByText("remembered")).toBeInTheDocument();
  });

  it("starts fresh when stored messages are corrupted", () => {
    localStorage.setItem("nikos-chatbot-messages", "{ not json");

    render(<Chatbot />);
    expect(screen.getByText(/ask me anything/i)).toBeInTheDocument();
  });

  it("clears the conversation on reset", async () => {
    const user = userEvent.setup();
    mockReply("An answer.");
    render(<Chatbot />);

    await user.type(screen.getByRole("textbox", { name: "Your message" }), "hi{Enter}");
    await screen.findByText("An answer.");

    await user.click(screen.getByRole("button", { name: "Reset chat" }));

    expect(screen.queryByText("An answer.")).not.toBeInTheDocument();
    expect(screen.getByText(/ask me anything/i)).toBeInTheDocument();
  });
});
