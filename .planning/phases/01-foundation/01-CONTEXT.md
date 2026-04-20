# Phase 1: Foundation - Context

**Gathered:** 2026-04-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the full-stack infrastructure and basic visibility for the Ticket Management System. This includes setting up the MySQL database, Spring Boot backend project (with basic entities and REST endpoints), and Angular frontend project (with a dashboard component and API service).

</domain>

<decisions>
## Implementation Decisions

### Project Layout Strategy
- **D-01:** Use a mono-repo structure with distinct subdirectories: `ticket-system-backend/` for the Spring Boot project and `ticket-system-frontend/` for the Angular project. This keeps the root directory clean and separates build concerns.

### Angular UI Foundation
- **D-02:** Use **Angular Material** as the primary UI component library. This ensures a consistent, professional "Enterprise" look and feel and provides robust components like data tables for the dashboard.

### Data Initialization
- **D-03:** Implement a **Java Bootstrap runner** (e.g., using `CommandLineRunner`) within the Spring Boot application. This will programmatically insert initial mock ticket data into the MySQL database upon application startup, ensuring the dashboard has content to display immediately.

### API Visibility & Testing
- **D-04:** Include **SpringDoc/Swagger-UI** support in the backend. This enables interactive API documentation at `http://localhost:8080/swagger-ui.html` for easy testing and verification of REST endpoints.

### Authentication & Scope
- **D-05:** Authentication is explicitly excluded from Phase 1. The focus is on establishing the core "pipes" (Frontend -> API -> Database) and basic CRUD visibility.

### the agent's Discretion
- Exact naming of Java packages and Angular modules (within conventions).
- Backend storage configuration (application.properties vs environment variables).
- Initial dashboard layout specifics beyond the basic table requirement.

</decisions>

<specifics>
## Specific Ideas

- The dashboard should be able to load and display mock data from the database through the Spring Boot API as the primary verification of success.
- The system should feel "ready for expansion" into Phase 2 (Operations).

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Overview
- `docs/PRD.txt` — Base requirements and stack transition context.
- `.planning/PROJECT.md` — System vision, core values, and non-negotiables.

### Phase 1 Requirements
- `.planning/REQUIREMENTS.md` — Detailed requirements for [REQ-001], [REQ-004], and [REQ-005].
- `.planning/ROADMAP.md` — Phase 1 goals and verification criteria.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet (this is the Foundation phase).

### Established Patterns
- Follow kebab-case for directories and SCREAMING_SNAKE_CASE for documentation as per `.planning/codebase/CONVENTIONS.md`.

### Integration Points
- Frontend will connect to backend via standard HTTP services.
- Backend will connect to MySQL via Spring Data JPA.

</code_context>

<deferred>
## Deferred Ideas

- **User Authentication:** Explicitly deferred to future phases or out-of-scope for Milestone 1.
- **Search & Filtering:** Scheduled for Phase 2.
- **Role-based Access Control:** Currently out of scope.

</deferred>

---
*Phase: 01-foundation*
*Context gathered: 2026-04-20*
