import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WordRoutingModule } from './word-routing.module';
import { WordInsertPageComponent } from './word-insert-page/word-insert-page.component';

@NgModule({
  declarations: [WordInsertPageComponent],
  imports: [
    CommonModule,
    WordRoutingModule,
    SharedModule
  ],
  exports: [WordInsertPageComponent]
})
export class WordModule { }
