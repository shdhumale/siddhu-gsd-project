-- Database Schema for Ticket Management System
-- Database name: gsd_ticket_db

-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS gsd_ticket_db;
USE gsd_ticket_db;

-- Drop table if exists to ensure a clean slate (optional, but good for schema scripts)
-- DROP TABLE IF EXISTS tickets;

-- Create tickets table
CREATE TABLE IF NOT EXISTS tickets (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'New',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Initial Seed Data (Matches TicketBootstrap.java)
INSERT INTO tickets (name, description, status)
SELECT * FROM (
    SELECT 'Login Issue', 'User cannot login with valid credentials', 'New' UNION ALL
    SELECT 'Button Alignment', 'Submit button is misaligned on mobile', 'Assigned' UNION ALL
    SELECT 'Database Migration', 'Update schema for ticket priority', 'Done' UNION ALL
    SELECT 'API Documentation', 'Integrate Swagger/OpenAPI', 'New' UNION ALL
    SELECT 'Search Feature', 'Implement backend filtering', 'New'
) AS seed_data
WHERE NOT EXISTS (SELECT 1 FROM tickets LIMIT 1);
