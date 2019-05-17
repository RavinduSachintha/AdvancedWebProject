import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [APP_DIRECTIVES],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    APP_DIRECTIVES
  ]
})
export class SharedModule {}
