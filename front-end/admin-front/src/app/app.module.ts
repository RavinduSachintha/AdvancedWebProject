import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";

import { HttpBackendRequestService } from "./services/http-backend-request.service";
import { AuthenticationService } from "./services/authentication.service";

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminDashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpBackendRequestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
