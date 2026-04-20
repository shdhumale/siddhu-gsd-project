# Phase 1: Foundation - Research

**Date:** 2026-04-20
**Status:** Completed

## Technical Context
Establishing a full-stack mono-repo based on Spring Boot 3.4 (Java 21) and Angular 17.

### 1. Monorepo Structure
*   **Strategy:** Custom Multi-Module Directory Structure.
*   **Layout:**
    *   `/ticket-system-backend`: Maven-based Spring Boot application.
    *   `/ticket-system-frontend`: Angular CLI application.
*   **Tooling:** Use a root `package.json` or simple scripts to orchestrate starting both services for development.

### 2. Backend (Spring Boot 3.4)
*   **Persistence:** Use `spring-boot-starter-data-jpa` with `mysql-connector-j`.
*   **API Documentation:** Use `springdoc-openapi-starter-webmvc-ui` (v2.7.0+) for Swagger UI.
*   **Initialization:** Implement a `CommandLineRunner` component to seed mock data.
*   **Packaging:** Feature-based packaging (e.g., `com.example.ticketsystem.ticket`) is recommended for scalability.
*   **Configuration:** 
    *   `spring.datasource.url=jdbc:mysql://localhost:3306/ticket_db`
    *   `spring.jpa.hibernate.ddl-auto=update` (initial setup)
    *   `spring.jpa.show-sql=true` (debug visibility)

### 3. Frontend (Angular 17+)
*   **UI Library:** Angular Material (`ng add @angular/material`).
*   **Module System:** Standalone components are the default in Angular 17/18.
*   **API Service:** Use `HttpClient` with a central `TicketService`.
*   **Dev Proxy:** Create `proxy.conf.json` to route `/api` requests to `http://localhost:8080` to avoid CORS issues during development.

### 4. Database (MySQL)
*   **Schema:** Minimal schema for Phase 1:
    *   `tickets` table: `id`, `name`, `description`, `status`.
*   **Status Enum:** Represented as `VARCHAR` in DB for flexibility, or `ENUM`.

## Dependencies & Blockers
*   **Environment:** Developer must have Java 21, Node.js (v18+), and MySQL Server installed.
*   **Port Conflicts:** Backend on 8080, Frontend on 4200 (standard).

## Validation Architecture
*   **Unit Testing:** JUnit 5 for backend, Karma/Jasmine or Vitest for frontend.
*   **Integration:** Verify `http://localhost:8080/swagger-ui.html` loads and shows endpoints.
*   **E2E:** Manual verification that Angular Dashboard renders table data from API.

---
## RESEARCH COMPLETE
