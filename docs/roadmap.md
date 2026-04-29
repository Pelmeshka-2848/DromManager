# Roadmap

## Phase 0: Foundation (done)
- Project scaffold with WXT + React + TypeScript.
- Core domain types.
- Page detector, template engine, default templates.
- Safe mode default setting.

## Phase 1: Operator workflow
- Extract current order/chat context from Drom pages.
- Prepare message drafts from templates.
- Insert prepared text into Drom message field.
- Explicit user confirmation before any send action.

## Phase 2: Broadcast assistance
- Build recipient selection UI.
- Create broadcast tasks in draft state.
- Manual step-by-step confirmation queue.

## Phase 3: Storage hardening
- Move settings/templates/history to IndexedDB abstraction.
- Add migration versioning.

## Phase 4: Quality
- Expand unit tests and integration mocks.
- Add stricter lint/type rules and CI checks.
