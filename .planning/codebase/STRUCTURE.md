# Codebase Structure

**Analysis Date:** 2026-04-20

## Directory Overview

```
.
├── .agent/                 # GSD configuration and internal tools
│   ├── agents/             # Agent persona definitions (*.md)
│   ├── get-shit-done/      # Core logic and templates
│   │   ├── bin/            # CLI utilities and logic libraries
│   │   ├── contexts/       # Base system prompts
│   │   ├── references/     # How-to guides and patterns for agents
│   │   ├── templates/      # Markdown templates for planning docs
│   │   └── workflows/      # Step-by-step GSD process definitions
│   ├── hooks/              # Git and process hooks
│   └── skills/             # High-level capabilities (gsd-*)
├── .git/                    # Git metadata
├── .opencode/               # OpenCode dispatcher and node_modules
│   ├── agents/             # OpenCode specific agents
│   └── command/            # CLI command definitions (/gsd-*)
├── .planning/               # GSD project state (Created by mapping/init)
│   └── codebase/           # [THIS DIRECTORY] Initial codebase mapping
├── docs/                    # Project documentation (e.g., PRD.txt)
└── README.md                # Project entry point & description
```

## Key Locations

**Core Logic:**
- `.agent/get-shit-done/bin/gsd-tools.cjs` - The main CLI dispatcher.
- `.agent/get-shit-done/bin/lib/` - Specialized logic modules.

**Templates & Guides:**
- `.agent/get-shit-done/templates/` - Schemas for all generated planning files.
- `.agent/get-shit-done/references/` - Essential reading for agents during execution.

**Agent Personas:**
- `.agent/agents/` - Definitions that shape AI behavior (planner, executor).

## Naming Conventions

- **Logic Files:** `.cjs` (CommonJS JavaScript).
- **Process Docs:** `.md` (Markdown).
- **Configuration:** `.json`.
- **Phases:** `NN-name-of-phase` (e.g., `01-foundation`).
- **Plans:** `NN-YY-PLAN.md` (where NN is phase and YY is plan number).

---

*Structure analysis: 2026-04-20*
*Update after directory layout changes*
