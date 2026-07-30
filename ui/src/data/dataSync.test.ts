import { describe, expect, it } from "vitest";
import * as site from "@/data/data";
import * as chatbot from "../../../api/_data";

// api/_data.ts duplicates this data because the Vercel function cannot resolve
// the "@/" alias. These tests turn drift into a build failure.
describe("chatbot data stays in sync with the site", () => {
  it("derives the same years of experience rather than hardcoding it", () => {
    expect(chatbot.careerStartYear).toBe(site.careerStartYear);
    expect(chatbot.yearsOfExperience).toBe(new Date().getFullYear() - site.careerStartYear);
    expect(chatbot.summary).toBe(site.summary);
  });

  // showOnWebsite entries are hidden deliberately; the chatbot must not know them.
  it("covers the same publicly listed history", () => {
    const key = (e: { role: string; company: string; date: string }) =>
      `${e.role} @ ${e.company} (${e.date})`;

    expect(chatbot.work.map(key)).toEqual(site.work.filter((w) => w.showOnWebsite).map(key));
    expect(chatbot.education.map(key)).toEqual(
      site.education.filter((e) => e.showOnWebsite).map(key)
    );
  });

  it("covers the same projects", () => {
    const key = (p: { name: string; date: string }) => `${p.name} (${p.date})`;
    expect(chatbot.projects.map(key)).toEqual(site.projects.map(key));
  });
});
