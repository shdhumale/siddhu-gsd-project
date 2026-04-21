import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js/auto';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { TicketService, Ticket } from '../../services/ticket.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'status', 'actions'];
  dataSource = new MatTableDataSource<Ticket>();
  searchControl = new FormControl('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef;
  private pieChart: Chart | null = null;

  constructor(
    private ticketService: TicketService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTickets();
    
    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilter(value || '');
    });
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      this.dataSource.data = tickets;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.createFilter();
      
      // Calculate ticket status counts for pie chart
      const statusCounts: { [key: string]: number } = {};
      tickets.forEach(ticket => {
        const status = ticket.status || 'Unknown';
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });
      
      // Render pie chart
      setTimeout(() => {
        if (this.pieCanvas) {
          Chart.register(...registerables);
          
          if (this.pieChart) {
            this.pieChart.destroy();
          }
          
          this.pieChart = new Chart(this.pieCanvas.nativeElement, {
            type: 'pie',
            data: {
              labels: Object.keys(statusCounts),
              datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#3498db', '#f39c12', '#27ae60', '#9b59b6', '#e74c3c', '#1abc9c'],
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    padding: 20,
                    font: {
                      size: 12
                    }
                  }
                }
              }
            }
          });
        }
      });
    });
  }

  createFilter(): (data: Ticket, filter: string) => boolean {
    return (data: Ticket, filter: string): boolean => {
      const searchStr = (data.id.toString() + data.name + data.description + data.status).toLowerCase();
      return searchStr.indexOf(filter.toLowerCase()) !== -1;
    };
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      width: '500px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ticketService.createTicket(result).subscribe(() => {
          this.loadTickets();
        });
      }
    });
  }

  openEditDialog(ticket: Ticket): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      width: '500px',
      data: { mode: 'edit', ticket }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ticketService.updateTicket(ticket.id, result).subscribe(() => {
          this.loadTickets();
        });
      }
    });
  }

  confirmDelete(ticket: Ticket): void {
    if(confirm(`Are you sure you want to delete "${ticket.name}"?`)) {
      this.ticketService.deleteTicket(ticket.id).subscribe(() => {
        this.loadTickets();
      });
    }
  }
}