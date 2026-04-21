# Roadmap

## Phase 1: Foundation
- **Goal:** Establish full-stack infrastructure and basic visibility.
- **Requirements:** [REQ-004], [REQ-005], [REQ-001]
- **Plans:**
  - [x] 01-01: Set up MySQL database and Spring Boot project with basic Entity. [DONE]
  - [x] 01-02: Create Angular project with Dashboard component and API service. [DONE]
- **Verification:** Dashboard loads mock data from the database through the API.
- **Status:** Completed (2026-04-20)

## Phase 2: Operations
- **Goal:** Implement ticket lifecycle and search.
- **Requirements:** [REQ-002], [REQ-003]
- **Plans:**
  - [x] 02-01: Implement "Create Ticket" form in Angular and POST endpoint in Spring Boot.
  - [x] 02-02: Add Search UI and backend filtering logic.
- **Verification:** User can create tickets and find them using the search bar.
- **Status:** Ready to execute

## Phase 3: Stabilization
- **Goal:** Polish UI and ensure system integrity.
- **Requirements:** All
- **Plans:**
  - [ ] 03-01: Visual polish, error handling, and final UAT.
- **Verification:** System is robust, following naming conventions and design guidelines.
- **Status:** Planned
