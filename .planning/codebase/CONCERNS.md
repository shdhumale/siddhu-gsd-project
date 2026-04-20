# Codebase Concerns

**Analysis Date:** 2026-04-20

## Tech Debt

**PRD Information Paradox:**
- Issue: `docs/PRD.txt` has conflicting tech stack sections. Section 1 says "HTML and JavaScript without database," while Section 6 specifies "Frontend: Angular, Middleware: Springboot, Backend: MySQL."
- Impact: Inconsistent requirements for the agent when planning the next phase.
- Fix approach: Clarify the target stack with the user before starting Phase 1.

**CommonJS and Shell Dependencies:**
- Issue: Heavy reliance on `.cjs` and `.sh` files for core logic.
- Why: Fast development and easy shell integration.
- Impact: Potential cross-platform compatibility issues (e.g., `.sh` on Windows without WSL/BusyBox).
- Fix approach: Transition shell logic to Node.js scripts where possible to increase portability.

## Known Bugs

**Command Output Latency:**
- Symptoms: `dir /s` and `grep -r` commands in the root directory exhibit significant lag in the current environment.
- Root cause: Deep scanning of `.agent/` which contains many small files.
- Workaround: Use `list_dir` for directory exploration instead of raw shell commands.

## Security Considerations

**Command Permission Mapping:**
- Risk: `.opencode/opencode.json` allows broad access to `C:/All_Antigravity_Project_Workspace/siddhu-gsd-project/.opencode/get-shit-done/*`.
- Current mitigation: Scoped directory permissions.
- Recommendations: Implement finer-grained tool permissions as the command set expands.

## Fragile Areas

**Regex-Based Markdown Parsing:**
- File: `.agent/get-shit-done/bin/lib/state.cjs`
- Why fragile: Uses complex regex to extract and replace fields in `STATE.md`. Slight changes in Markdown formatting (extra lines, different bolding) can break state persistence.
- Safe modification: Always run `gsd-tools validate consistency` after manual edits to `STATE.md`.

## Test Coverage Gaps

**Internal Framework Logic:**
- What's not tested: Logic in `state.cjs`, `phase.cjs`, and `roadmap.cjs` lacks unit tests.
- Risk: Regressions in core workflow management during framework updates.
- Priority: High.

---

*Concerns audit: 2026-04-20*
*Update as issues are fixed or new ones discovered*
