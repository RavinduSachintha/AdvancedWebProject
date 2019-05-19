import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class RegistrationModule {}
