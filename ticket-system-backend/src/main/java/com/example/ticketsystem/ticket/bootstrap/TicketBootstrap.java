package com.example.ticketsystem.ticket.bootstrap;

import com.example.ticketsystem.ticket.model.Ticket;
import com.example.ticketsystem.ticket.repository.TicketRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class TicketBootstrap implements CommandLineRunner {

    private final TicketRepository ticketRepository;

    public TicketBootstrap(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (ticketRepository.count() == 0) {
            ticketRepository.saveAll(Arrays.asList(
                    new Ticket("Login Issue", "User cannot login with valid credentials", "New"),
                    new Ticket("Button Alignment", "Submit button is misaligned on mobile", "Assigned"),
                    new Ticket("Database Migration", "Update schema for ticket priority", "Done"),
                    new Ticket("API Documentation", "Integrate Swagger/OpenAPI", "New"),
                    new Ticket("Search Feature", "Implement backend filtering", "New")));
            System.out.println("Bootstrap: Seeded 5 tickets into the database.");
        }
    }
}
