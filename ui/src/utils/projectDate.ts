/**
 * Turns a free-text project date ("2024 - Present", "Q3 2021", "2015 - 2016")
 * into a sortable timestamp. Only the relative order matters, so a coarse
 * year-level result is fine.
 */
export function parseProjectDate(value: string): number {
  const startPart = value.split("-")[0].trim();
  const parsed = Date.parse(startPart);

  if (!Number.isNaN(parsed)) {
    return parsed;
  }

  // Fallback for strings Date.parse rejects outright, e.g. "Q3/2021".
  const yearMatch = value.match(/(?:19|20)\d{2}/);
  return yearMatch ? Date.parse(`${yearMatch[0]}-01-01`) : 0;
}

/** Newest first. */
export function byDateDesc(a: { date: string }, b: { date: string }): number {
  return parseProjectDate(b.date) - parseProjectDate(a.date);
}
