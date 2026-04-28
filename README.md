# siddhu-gsd-project
This project show the use of GSD frome work :- https://github.com/gsd-build/get-shit-done for different development scenario

Your `README.md` for the **GSD (Get Shit Done) Framework** project is ready.

```markdown
# GSD (Get Shit Done) Framework - Ticket System Project

## Overview
This repository implements a **Spec-Driven Development (SDD)** workflow using the **GSD (Get Shit Done)** framework. It demonstrates an agentic engineering process where specialized AI agents collaborate to build a full-stack Ticket Management System using **Spring Boot** (Java 21) and **Angular Material**.

The project focuses on moving beyond simple code completion toward autonomous engineering through structured phases: Discussion, Planning, and Execution.

## Project Structure
The repository is organized into specialized agent definitions and phase-based documentation:

- **`agents/`**: Contains instructions for specialized AI agents (e.g., `gsd-executor`, `gsd-codebase-mapper`, `gsd-doc-synthesizer`) that drive the development lifecycle.
- **`.planning/`**: Contains the blueprint for the project, broken down into sequential phases (Foundation, Operations, etc.).
- **`ticket-system-backend/`**: A Spring Boot microservice providing RESTful CRUD operations for ticket management.
- **`ticket-system-frontend/`**: An Angular application utilizing Angular Material for a responsive, professional UI.
- **`gsd-file-manifest.json`**: Tracking file for the GSD workflow state.

## Core Technologies
- **Backend**: Java 21, Spring Boot, Maven, JUnit.
- **Frontend**: Angular, Angular Material, TypeScript.
- **Workflow**: GSD Framework, Spec-Driven Development (SDD), Model Context Protocol (MCP).

## Current Status: Phase 02 (Operations)
The project is currently implementing **Phase 02**, focusing on the core CRUD operations:
- **Frontend**: Integrating Create, Update, and Delete dialogs using Angular Material.
- **Backend**: Connecting existing REST endpoints to the expanded `TicketService`.
- **Search/Filter**: Implementing dynamic filtering on the ticket dashboard.

## Getting Started

### Prerequisites
- JDK 21
- Node.js & npm
- Angular CLI

### Backend Setup
```bash
cd ticket-system-backend
./mvnw clean install
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd ticket-system-frontend
npm install
ng serve
```

## GSD Workflow Commands
The project utilizes specific workflows to maintain the agentic context:
- **Initialize**: `npx antigravity-superpowers init`
- **Map Codebase**: Executes the `gsd-codebase-mapper` to update the project blueprint.
- **Phase Planning**: Transitioning from discussion to executable markdown task lists.

## Documentation
For detailed insights into the architectural decisions, refer to the following:
- `docs/PRD.txt`: Product Requirements Document.
- `gsd-map-codebase.md`: Current structural analysis of the codebase.
- `.clinerules`: Operational constraints for AI agents working within this repository.
```
