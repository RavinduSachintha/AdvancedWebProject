import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import {
  ButtonsModule,
  CarouselModule,
  MDBBootstrapModule,
  WavesModule
} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    ButtonsModule,
    MDBBootstrapModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
