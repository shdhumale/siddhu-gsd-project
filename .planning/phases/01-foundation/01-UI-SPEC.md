# Phase 1: Foundation - UI Design Contract

**Date:** 2026-04-20
**Status:** Approved (via gsd-ui-researcher)

<visual_identity>
## Visual Identity

### 1. Typography
*   **Primary Font:** `Roboto` (standard Angular Material font).
*   **Scale:**
    *   `h1`: 24px (Bold) - Page Titles.
    *   `subtitle1`: 16px (Medium) - KPI Card Labels.
    *   `body1`: 14px (Regular) - Table Content.
    *   `caption`: 12px (Regular) - Metadata/Helper text.

### 2. Color Palette (Enterprise Indigo)
*   **Primary:** `#3f51b5` (Indigo 500)
*   **Accent:** `#ff4081` (Pink A200)
*   **Background:** `#fafafa` (Grey 50)
*   **Surface:** `#ffffff` (White)

### 3. Status Badges
| Status | Background Color | Text Color |
| :--- | :--- | :--- |
| **New** | `#e3f2fd` (Blue 50) | `#1976d2` (Blue 700) |
| **Assigned** | `#fff8e1` (Amber 50) | `#f57c00` (Orange 700) |
| **Done** | `#e8f5e9` (Green 50) | `#388e3c` (Green 700) |
| **Escalate** | `#ffebee` (Red 50) | `#d32f2f` (Red 700) |
</visual_identity>

<components>
## Component Specifications

### 1. Dashboard Layout
*   **Container:** `mat-drawer-container` for future sidebar support.
*   **Header:** `mat-toolbar` with project title "Ticket Management System".
*   **Content Area:** 16px padding on all sides.

### 2. KPI Summary Cards
*   **Type:** `mat-card`
*   **Layout:** Horizontal flex-row grid (3-4 cards).
*   **Metrics:** "Total Tickets", "Open Tickets", "Nearing SLA".

### 3. Ticket Data Table
*   **Selector:** `app-ticket-table`
*   **Underlying:** `mat-table`
*   **Columns:**
    *   `ID`: Fixed width (80px), centered.
    *   `Name`: Primary identifier, bold text.
    *   `Description`: Flex-grow, truncated with ellipsis if > 50 chars.
    *   `Status`: Status badge (see Status Badges).
*   **Features:**
    *   `mat-sort` header on Name and ID.
    *   `mat-paginator` at the bottom (Default: 10 items).
*   **Empty State:** Clear message "No tickets found" when data source is empty.

### 4. Navigation
*   **Type:** `mat-nav-list` in sidebar (Phase 1: Dashboard only).
</components>

<interactions>
## Interaction Contracts

### 1. Loading State
*   Show `mat-spinner` centered in the table container while fetching data.
*   Disable sort/page controls during load.

### 2. Data Refresh
*   Display a "Refresh" button (`mat-icon-button`) in the table header area.

### 3. Row Hover
*   Background change to `#f5f5f5` on hover to emphasize row boundaries.
</interactions>

<copywriting>
## Copywriting Standards

*   **Empty States:** "Your ticket queue is currently empty."
*   **Error Messages:** "Unable to load tickets. Please check your connection and try again."
*   **Titles:** Title Case for headers, Sentence case for body.
</copywriting>

---
## UI-SPEC COMPLETE
