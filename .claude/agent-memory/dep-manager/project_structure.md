---
name: Project Structure
description: Package manager, working directory, and key dependency details for this repo
type: project
---

Package manager: **yarn** (yarn.lock at `ui/yarn.lock`).
All commands must run from `/Users/nikolaos.xenakis/source/personal/nikosxenakis.github.io/ui/`.

No monorepo workspace config. No `resolutions` or overrides in `package.json`.

Key direct deps (as of 2026-04-03):
- react/react-dom 19.x
- @mui/material 7.x + @emotion/react + @emotion/styled
- vite 7.x, typescript 5.9, eslint 9.x

Major version bumps available but NOT yet applied (as of 2026-04-03):
- @types/node: 24 -> 25, @vitejs/plugin-react: 5 -> 6, eslint: 9 -> 10, eslint-plugin-react-refresh: 0.4 -> 0.5, typescript: 5 -> 6, vite: 7 -> 8

**Why:** Captured during dep-manager run to inform future update decisions.
**How to apply:** Check these major bumps on next dep-manager run; user must approve each.
