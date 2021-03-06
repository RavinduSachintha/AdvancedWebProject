import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from "./login-page/login-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent, HelpPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginPageComponent, SignupPageComponent, HelpPageComponent]
})
export class AuthenticationModule {}
