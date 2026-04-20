# Requirements

## [REQ-001] Dashboard
- **Goal:** View all tickets in a structured table.
- **Constraints:** Must fetch data from Spring Boot API.
- **Verification:** Dashboard displays test records from database correctly.
- **Dependencies:** [REQ-004], [REQ-005]

## [REQ-002] Create Ticket
- **Goal:** Form to input ticket details.
- **Fields:** ID (auto), Name, Description, Status (New, Assigned, Done, Escalate).
- **Verification:** Form submission saves data to MySQL via API.

## [REQ-003] Search
- **Goal:** Filter dashboard results.
- **Context:** Keyword search against name and description.
- **Verification:** Tables updates in real-time or upon search click.

## [REQ-004] Spring Boot API
- **Goal:** Provide RESTful endpoints for Tickets.
- **Stack:** Spring Boot 3.4+, Java 21, JPA/Hibernate.
- **Verification:** Swagger/OpenAPI docs show endpoints working.

## [REQ-005] MySQL Database
- **Goal:** Persistent storage for tickets.
- **Schema:** ID (INT PK AI), NAME (VARCHAR), DESCRIPTION (TEXT), STATUS (ENUM/VARCHAR).
- **Verification:** Database tables created and data persists across restarts.
