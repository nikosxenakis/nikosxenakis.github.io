import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chatbot from "./Chatbot";

const mockFetch = (ok: boolean, status: number, reply = "") => {
  const fetchMock = vi.fn().mockResolvedValue({ ok, status, json: async () => ({ reply }) });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
};

const type = (user: ReturnType<typeof userEvent.setup>, text: string) =>
  user.type(screen.getByRole("textbox", { name: "Your message" }), text);

describe("Chatbot", () => {
  it("submits on Enter and shows the reply", async () => {
    const user = userEvent.setup();
    const fetchMock = mockFetch(true, 200, "I studied in Edinburgh.");
    render(<Chatbot />);

    await type(user, "Where?{Enter}");

    expect(await screen.findByText("I studied in Edinburgh.")).toBeInTheDocument();
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).question).toBe("Where?");
  });

  it("explains the wait when the server rate limits the caller", async () => {
    const user = userEvent.setup();
    mockFetch(false, 429);
    render(<Chatbot />);

    await type(user, "spam{Enter}");

    expect(await screen.findByText(/lot of questions in a short time/i)).toBeInTheDocument();
  });

  it("never sends an empty question", async () => {
    const user = userEvent.setup();
    const fetchMock = mockFetch(true, 200, "unused");
    render(<Chatbot />);

    await type(user, "   {Enter}");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("opens from the launcher and closes on Escape, an outside tap, or the launcher again", async () => {
    const user = userEvent.setup();
    render(<Chatbot />);

    const open = () => user.click(screen.getByRole("button", { name: "Open chat" }));
    const isOpen = () => screen.queryByRole("button", { name: "Close chat" }) !== null;

    await open();
    expect(isOpen()).toBe(true);

    await user.keyboard("{Escape}");
    await waitFor(() => expect(isOpen()).toBe(false));

    await open();
    await user.click(document.body);
    await waitFor(() => expect(isOpen()).toBe(false));

    // Tapping inside must not close it.
    await open();
    await user.click(screen.getByRole("textbox", { name: "Your message" }));
    expect(isOpen()).toBe(true);
  });

  it("restores the conversation from storage and survives corrupt data", () => {
    localStorage.setItem(
      "nikos-chatbot-messages",
      JSON.stringify([{ text: "remembered", sender: "user" }])
    );
    const { unmount } = render(<Chatbot />);
    expect(screen.getByText("remembered")).toBeInTheDocument();
    unmount();

    localStorage.setItem("nikos-chatbot-messages", "{ not json");
    render(<Chatbot />);
    expect(screen.getByText(/ask me anything/i)).toBeInTheDocument();
  });
});
