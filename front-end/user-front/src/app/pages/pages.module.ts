import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LandingModule } from './landing/landing.module';
import { HeaderModule } from './header/header.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  declarations: [...PAGES_COMPONENTS, LoginComponent, RegistrationComponent],
  imports: [CommonModule, PagesRoutingModule, LandingModule, HeaderModule]
})
export class PagesModule {}