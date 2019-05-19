import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, MatCardModule]
})
export class LandingModule {}
