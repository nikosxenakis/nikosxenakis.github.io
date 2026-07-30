import { describe, expect, it } from "vitest";
import * as site from "@/data/data";
import * as chatbot from "../../../api/_data";

/**
 * api/_data.ts is a standalone copy of this data, because the Vercel function
 * cannot resolve the UI's "@/" alias. The duplication is structural, so these
 * tests make drift a build failure rather than something noticed months later
 * when the chatbot starts contradicting the page.
 */
describe("chatbot data stays in sync with the site", () => {
  it("derives the same years of experience", () => {
    expect(chatbot.careerStartYear).toBe(site.careerStartYear);
    expect(chatbot.yearsOfExperience).toBe(site.yearsOfExperience);
  });

  it("computes the figure rather than hardcoding it", () => {
    expect(chatbot.yearsOfExperience).toBe(new Date().getFullYear() - site.careerStartYear);
    expect(chatbot.summary).toContain(`${site.yearsOfExperience} years of experience`);
  });

  it("uses an identical summary", () => {
    expect(chatbot.summary).toBe(site.summary);
  });

  it("agrees on identity and contact details", () => {
    expect(chatbot.name).toBe(site.name);
    expect(chatbot.title).toBe(site.title);
    expect(chatbot.location).toBe(site.location);
    expect(chatbot.nationality).toBe(site.nationality);
    expect(chatbot.email.link).toBe(site.email.link);
    expect(chatbot.linkedIn.link).toBe(site.linkedIn.link);
    expect(chatbot.gitHub.link).toBe(site.gitHub.link);
    expect(chatbot.stackOverflow.link).toBe(site.stackOverflow.link);
  });

  /**
   * The chatbot mirrors the publicly listed CV, so entries hidden from the page
   * with showOnWebsite are excluded from the comparison too. If the chatbot
   * should also know the hidden roles, widen this to the full list instead.
   */
  const key = (e: { role: string; company: string; date: string }) =>
    `${e.role} @ ${e.company} (${e.date})`;

  it("covers the same publicly listed work history", () => {
    const shown = site.work.filter((w) => w.showOnWebsite);
    expect(chatbot.work.map(key)).toEqual(shown.map(key));
  });

  it("covers the same publicly listed education", () => {
    const shown = site.education.filter((e) => e.showOnWebsite);
    expect(chatbot.education.map(key)).toEqual(shown.map(key));
  });

  it("covers the same projects", () => {
    const key = (p: { name: string; date: string }) => `${p.name} (${p.date})`;

    expect(chatbot.projects.map(key)).toEqual(site.projects.map(key));
  });

  it("lists the same languages and interests", () => {
    expect(chatbot.languages.map((l) => l.name)).toEqual(site.languages.map((l) => l.name));
    expect(chatbot.interests.map((i) => i.name)).toEqual(site.interests.map((i) => i.name));
  });
});
