# External Integrations

**Analysis Date:** 2026-04-20

## Core Integrations

**AI Orchestrators:**
- Claude Code - Primary execution platform for GSD workflows
- Google Antigravity - Compatible runtime for agentic tasks
- OpenCode - Integrated command dispatcher and permission engine

## APIs & Services

**External:**
- Brave API (Optional) - Used for `websearch` command in `gsd-tools.cjs`
- GitHub API (Implied) - Used for PR creation and code review workflows

## Data Stores

**Local:**
- Git - Primary source of truth for code and planning artifacts
- JSON/Markdown Files - State preservation in `.planning/` directory

## Auth & Security

**Access Control:**
- SSH/Git Auth - Generic repository access
- OpenCode Permissions - Scoped file system and command permissions defined in `.opencode/opencode.json`

---

*Integration analysis: 2026-04-20*
*Update after adding external service dependencies*
