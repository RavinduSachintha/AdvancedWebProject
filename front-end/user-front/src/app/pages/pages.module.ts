import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from './header/header.module';
import { LandingModule } from './landing/landing.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    LandingModule,
    RegistrationModule,
    LoginModule
  ]
})
export class PagesModule {}
