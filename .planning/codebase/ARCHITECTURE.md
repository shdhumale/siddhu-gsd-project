# Architecture

**Analysis Date:** 2026-04-20

## Pattern Overview

**Overall:** Modular AI-Agentic CLI Orchestrator

**Key Characteristics:**
- **Hierarchical Planning:** Decomposes projects into milestones, phases, and plans.
- **Agentic Workflow:** Uses specialized agent personas (planner, executor, researcher, etc.) for distinct lifecycle stages.
- **File-Based State:** Persistent project memory stored in `.planning/` via Markdown and JSON artifacts.
- **Sync/Async Hybrid:** Command-line execution with support for background task parallelization (where supported by runtime).

## Layers

**Orchestration Layer:**
- Purpose: Central routing and command management.
- Contains: CLI entry point, command dispatch logic.
- Location: `.agent/get-shit-done/bin/gsd-tools.cjs`
- Depends on: Library layer.

**Library Layer (Logic Core):**
- Purpose: Domain-specific logic for GSD entities.
- Contains: State management, roadmap parsing, phase generation, verification logic.
- Location: `.agent/get-shit-done/bin/lib/*.cjs`
- Used by: Orchestration layer and Agents.

**Agent Layer:**
- Purpose: Persona-driven execution of specific tasks.
- Contains: System prompts and tool definitions for different agents.
- Location: `.agent/agents/*.md`
- Depends on: Library layer for context gathering.

**Artifact Layer:**
- Purpose: User-facing documentation and planning state.
- Contains: Projects, Requirements, Roadmaps, Plans, and Summaries.
- Location: `.planning/` (root-level), `.planning/phases/`

## Data Flow

**GSD Command Execution (e.g., `/gsd-plan-phase 1`):**

1. **Invocation:** User runs the command through the AI interface.
2. **Routing:** `.opencode/command/gsd-plan-phase.md` triggers the workflow.
3. **Context Initialization:** `gsd-tools.cjs init plan-phase 1` aggregates necessary project state.
4. **Agent Activation:** Specialized agent (e.g., `gsd-planner`) is invoked with pre-filled templates.
5. **Execution:** Agent interacts with codebase and planning artifacts.
6. **Artifact Generation:** New plans/documents written to `.planning/`.
7. **State Update:** `gsd-tools.cjs state update` records progress in `STATE.md`.

**State Management:**
- Stateless process execution with file-based persistence.
- `STATE.md` serves as the primary "working memory" across sessions.

## Key Abstractions

**Phase:**
- Purpose: A logical unit of work in a milestone.
- Folder: `.planning/phases/XX-name/`

**Plan:**
- Purpose: Actionable atomic task list with verification criteria.
- File: `XX-YY-PLAN.md`

**State:**
- Purpose: Current project progress, decisions, and blockers.
- File: `STATE.md`

## Entry Points

**Central CLI:**
- Location: `.agent/get-shit-done/bin/gsd-tools.cjs`
- Responsibilities: Main router for all programmatic operations.

**OpenCode Commands:**
- Location: `.opencode/command/*.md`
- Responsibilities: Human-to-Agent command mapping.

---

*Architecture analysis: 2026-04-20*
*Update when major patterns change*
