# Project: Simple Ticket Management System (Enterprise Edition)

## Vision
A robust, enterprise-grade Ticket Management System for small to medium-sized teams to track internal issues and tasks with a modern technical stack.

## Core Value
Scalability and reliability through a professional middleware layer and industrial-strength database.

## What This is NOT
* Not a public helpdesk for external customers.
* Not a project management tool (like Jira/Linear) yet.

## Context
Initial PRD specified a lightweight HTML/JS approach, but stakeholder direction has shifted to a full enterprise stack (Angular/Spring Boot/MySQL) to ensure long-term viability.

## Requirements

### Validated
(None yet — ship to validate)

### Active
- [ ] [REQ-001] Dashboard: Table view of all tickets (ID, Name, Description, Status).
- [ ] [REQ-002] Create Ticket: Form to add new entries.
- [ ] [REQ-003] Search: Filter tickets by name or description.
- [ ] [REQ-004] API: Spring Boot REST endpoints for CRUD operations.
- [ ] [REQ-005] Persistence: MySQL database schema for tickets.

### Out of Scope
- User Authentication (Phase 1).
- Role-based Access Control.
- File Attachments.

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Full Enterprise Stack | Shift from HTML/JS to Angular/Spring Boot/MySQL for scalability. | — Pending |
| No Auth in Phase 1 | Focus on core CRUD and system architecture first. | — Pending |

## Evolution
This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-20 after initialization*
