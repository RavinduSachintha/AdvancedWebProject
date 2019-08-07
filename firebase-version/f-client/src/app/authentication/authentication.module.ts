import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";
import { SharedModule } from "../shared/shared.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";

@NgModule({
  declarations: [LoginPageComponent, SignupPageComponent, HelpPageComponent],
  imports: [CommonModule, SharedModule, AuthenticationRoutingModule],
  exports: [LoginPageComponent, SignupPageComponent, HelpPageComponent]
})
export class AuthenticationModule {}
