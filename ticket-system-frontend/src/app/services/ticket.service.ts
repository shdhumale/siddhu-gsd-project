import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  id: number;
  name: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = '/api/tickets';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }
}
