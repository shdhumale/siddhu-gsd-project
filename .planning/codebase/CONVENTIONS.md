# Coding Conventions

**Analysis Date:** 2026-04-20

## Naming Patterns

**Files:**
- kebab-case for all source files (`gsd-tools.cjs`, `lib/state.cjs`).
- SCREAMING_SNAKE_CASE for root documentation (`PROJECT.md`, `ROADMAP.md`, `STATE.md`).
- `XX-name` for phase directories.
- `XX-YY-PLAN.md` for plan files.

**Functions:**
- camelCase for functions (`cmdStateLoad`, `stateExtractField`).
- handleEventName pattern for callbacks.

**Variables:**
- camelCase for local variables and parameters.
- UPPER_SNAKE_CASE for constants or static configurations.
- `_prefix` for internal/private process caches (e.g., `_diskScanCache`).

**Exports:**
- Named exports via `module.exports` object.

## Code Style

**Formatting:**
- CommonJS module system (`require`/`module.exports`).
- 2-space indentation (Observed in `.cjs` files).
- Semicolons required.
- Single quotes for strings (preferred).

**Language Features:**
- ES6+ features where supported by target Node.js versions (e.g., `const`/`let`, `Map`, arrow functions).
- Use of `RegExp` for flexible Markdown parsing.

## Import Organization

**Order:**
1. Node.js built-ins (`fs`, `path`).
2. Core internal modules (`./core.cjs`).
3. Other internal library modules.

## Error Handling

**Patterns:**
- Throwing `Error` objects with descriptive messages.
- Centralized `error()` utility in `core.cjs` for terminal reporting and process exit.
- `try/catch` blocks used strategically for optional file reads or guarded operations.

## Logging

**Framework:**
- `process.stdout.write` and `process.stderr.write` for raw CLI output.
- `output()` wrapper for structured JSON or formatted text responses.

## Comments

**When to Comment:**
- Use block comments for file/module headers.
- Use `/** ... */` for function documentation.
- Use inline comments for complex regex logic or edge case handling (e.g., `#1967`).

---

*Convention analysis: 2026-04-20*
*Update when patterns change*
