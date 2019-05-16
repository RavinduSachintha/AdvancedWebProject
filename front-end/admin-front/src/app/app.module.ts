import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import { HttpBackendRequestService } from "./services/http-backend-request.service";
import { AuthenticationService } from "./services/authentication.service";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NavBarComponent, SideBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpBackendRequestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
