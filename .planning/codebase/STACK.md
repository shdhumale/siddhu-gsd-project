# Technology Stack

**Analysis Date:** 2026-04-20

## Languages

**Primary:**
- JavaScript (CommonJS) - Internal tooling and CLI scripts (`.cjs` files)
- Markdown - Documentation, templates, and workflow definitions

**Secondary:**
- Shell (Bash) - Hooks and utility scripts (`.sh` files)

## Runtime

**Environment:**
- Node.js (Version unknown, likely 18+ or 20+ based on `.cjs` usage)
- CLI-only for the framework itself

**Package Manager:**
- npm (Implied by `package.json` and `node_modules`)
- Lockfile: `package-lock.json` NOT present in root, but dependencies are managed within `.agent` and `.opencode`.

## Frameworks

**Core:**
- GSD (Get Shit Done) - Hierarchical planning and agentic workflow framework
- OpenCode - AI-powered command execution and permission management

**Build/Dev:**
- Node.js built-ins (`fs`, `path`, `child_process`) for file operations and CLI routing

## Key Dependencies

**Critical:**
- `gsd-tools.cjs` - The central CLI router for all GSD operations
- `lib/*.cjs` - Core logic for state management, roadmap, phases, and validation

**Infrastructure:**
- `@opencode-ai/*` - OpenCode core libraries for agentic operations

## Configuration

**Environment:**
- `.agent/settings.json` - Global agent configuration
- `.opencode/opencode.json` - OpenCode-specific permissions and configuration

**Build:**
- `.agent/gsd-file-manifest.json` - Comprehensive file manifest and integrity tracking

## Platform Requirements

**Development:**
- Cross-platform (Windows, macOS, Linux) with Node.js support

**Production:**
- Distributed as a project-internal agentic toolset

---

*Stack analysis: 2026-04-20*
*Update after major dependency changes*
