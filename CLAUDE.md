# CLAUDE.md

Personal website for Nikolaos Xenakis, served at **nikosxenakis.org**.

## Shape of the repo

Two independently deployed pieces, both driven by `.github/workflows/deploy.yml`:

| Path    | What it is                            | Deploys to                          |
| ------- | ------------------------------------- | ----------------------------------- |
| `ui/`   | React 19 + Vite SPA, MUI + plain CSS  | GitHub Pages (static, custom domain) |
| `api/`  | Vercel serverless functions           | Vercel                              |

`ui/public/CNAME` pins the custom domain. There is no backend beyond `api/chat.ts`.

`resume.tex` is the source for the CV PDF at `ui/public/Xenakis_Nikolaos_CV.pdf`. They are
maintained by hand and can drift; the years-of-experience figure appears in both.

## Commands

**Everything runs from `ui/`**, with pnpm. There is no root-level toolchain.

```bash
cd ui
pnpm install
pnpm start        # dev server
pnpm run lint
pnpm run typecheck
pnpm run test     # vitest, covers ui/ AND ../api
pnpm run build    # tsc -b && vite build
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck, test, build on every PR and push to main.

### Keep the suite small

The bar for a test here is **"would this have caught a real bug?"**, not coverage. A lean
suite is a deliberate trade-off: shipping quickly matters more than testing everything.

- Write tests for regressions (a bug that actually happened), for logic with edge cases, and
  for behaviour that is easy to break silently. Nothing else.
- Do not test what the JSX plainly says. Asserting that a component renders the label you
  just typed into it proves nothing and costs time on every run.
- Prefer one test making several related assertions over five near-identical tests.
- Extract logic worth testing into a plain function rather than testing it through the DOM.
- Adding a test file is more expensive than adding a test: each one spins up its own jsdom
  environment. Fold new cases into an existing file where they fit.

### Testing quirks worth knowing

- `vitest.config.ts` is separate from `vite.config.ts`. Test config lives only in the former.
- It deliberately includes `../api/**/*.test.ts`. The api modules are dependency-free
  TypeScript, so they are tested from here rather than standing up a second toolchain at the
  repo root (there is no root lockfile or `node_modules`). `server.fs.allow` is what lets
  Vite read files above the package root.
- `src/test/setup.ts` polyfills `localStorage`, `matchMedia`, and `IntersectionObserver`.
  jsdom 30 under Vitest 4 does not expose `localStorage` even with a proper document origin,
  and Node's own is behind a CLI flag. Don't remove the polyfill expecting jsdom to cover it.
- Keep anything you want unit tested out of component bodies. `parseProjectDate` and
  `sanitiseHistory` were extracted precisely so they could be.

## Things that are easy to break

**Scrolling is CSS-only.** The viewport is the scroll container: `scroll-snap-type` sits on
`html` and each `.scroll-section` is `min-height: 100dvh` with `scroll-snap-align: start`.
There used to be a JS `wheel` handler in `App.tsx` that fought the CSS; it was removed
deliberately. Do not reintroduce scroll hijacking. Native scrolling is what makes keyboard
paging, anchor links, and trackpad momentum work.

**Sections use `min-height`, not `height`.** A fixed `100vh` trapped content behind nested
scrollbars on short viewports. Because of this, **percentage-based vertical offsets no longer
resolve** inside a section: there is no definite parent height. `.introSection` centres its
content with flexbox for exactly this reason. A `top: 40%` there will silently push the block
off-screen.

**`src/sections.ts` is the section registry.** `App.tsx` renders from it and `SectionNav.tsx`
builds its dots from it. Add a section there, not in `App.tsx`. Each `id` doubles as the DOM
id, so `#experience` deep links work.

**`src/data/data.ts` is the content source of truth.** Everything on the page comes from it.

- `careerStartYear` / `yearsOfExperience` feed both the summary and the Work Experience
  subtitle so the two cannot disagree. The figure must also match `resume.tex`.
- `showOnWebsite: false` hides a work or education entry without deleting it.
- `isPrivate: true` on a project keeps the repo URL for reference but hides the GitHub icon,
  because a private repo 404s for visitors.

**MUI needs `!important`.** Card and chip styling in `src/assets/styles/` overrides MUI
Paper/Chip defaults. One CSS file per component, imported by that component.

**Card translucency uses `--card-background-color`, not `opacity`.** An `opacity` on `.card`
faded the text along with the background.

## The chat endpoint

`api/chat.ts` proxies Google Gemini and is **unauthenticated and public**. The key is in
`GEMINI_API_KEY` (Vercel env, not in the repo). Guardrails:

- `api/_rateLimit.ts` — in-memory sliding window, 15 requests per 10 minutes per IP.
  **Approximate by design**: counters reset on cold starts and are not shared across
  concurrent instances. It brakes casual abuse; it is not a hard guarantee. Swap in a durable
  store (Upstash) if that stops being good enough.
- `api/_validation.ts` — caps question length and truncates client-supplied history. Never
  forward the raw `messages` array to the model.
- `ALLOWED_ORIGINS` in `chat.ts` is a hardcoded CORS allowlist. **A new domain must be added
  there**, or the chat silently fails from it.

## Conventions

**Keep comments short.** Match the density of the surrounding code, which is mostly
uncommented. Specifically:

- One line where possible. Multi-line block comments only for a constraint that genuinely
  cannot be inferred from the code.
- Explain *why*, never *what*. If the code says it, the comment is noise.
- No bug narratives. "This used to return X because Y" belongs in the commit message or a
  test name, not above the fix.
- Comment the non-obvious: an upstream quirk, a deliberate trade-off, a rule that will look
  wrong to the next reader. Skip everything else.

- Accessibility is load-bearing here and regressions are easy: interactive elements must be
  real `<button>`/`<a>`, not click-handled `<div>`/`<img>`. There is exactly one `<h1>` (the
  name) and `App.test.tsx` enforces both that and the no-skipped-levels rule.
- Animations must respect `prefers-reduced-motion`. There is a global block in `index.css`,
  and JS-driven motion (the intro emoji burst) checks it explicitly.
- Images need `width`/`height` (layout shift) and `loading="lazy"` unless above the fold.
  Project images belong in `public/assets/images/projects/` as local files; hotlinking a
  third-party URL or using a favicon as a card image has bitten this repo before.
- `index.html` carries hand-maintained SEO, Open Graph, and JSON-LD. If the domain or job
  title changes, update the canonical URL, `og:url`, and the `Person` schema together.
- `ui/dist/` is built output and is **not** committed. `*.tsbuildinfo` is ignored.
- Branch names are prefixed `nikosxenakis/`. Commit messages are one-line Conventional
  Commits, scoped to the diff.
