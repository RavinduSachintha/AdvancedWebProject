import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './header/header.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [CommonModule, PagesRoutingModule, HeaderModule]
})
export class PagesModule {}
