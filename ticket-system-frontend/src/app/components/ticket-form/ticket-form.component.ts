import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Ticket, TicketService } from '../../services/ticket.service';

export interface TicketFormData {
  mode: 'create' | 'edit';
  ticket?: Ticket;
}

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss'
})
export class TicketFormComponent implements OnInit {
  form: FormGroup;
  isEditMode: boolean;
  statuses = ['New', 'Assigned', 'Done', 'Escalate'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TicketFormData
  ) {
    this.isEditMode = data.mode === 'edit';
    
    this.form = this.fb.group({
      name: [data.ticket?.name || '', [Validators.required, Validators.maxLength(100)]],
      description: [data.ticket?.description || '', [Validators.maxLength(500)]],
      status: [data.ticket?.status || 'New', Validators.required]
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}