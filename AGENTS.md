# AGENTS.md

## Guardrails

- Never implement message auto-send without explicit user confirmation.
- Never bypass authorization, captcha, platform limits, or anti-spam controls.
- Keep Drom DOM selectors isolated in `features/drom/selectors`.
- Do not spread Drom DOM logic across UI components.
- All UI text must be written in Russian.
- All code, entity names, file names, variables, and code comments must be in English.
- After changes, run `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build` when commands are available.
