import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { HttpBackendRequestService } from 'src/app/services/http-backend-request.service';
import { AuthUser } from 'src/app/models/auth-user';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [HttpBackendRequestService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  loginForAdmins() {
    let authAdmin: AuthUser = {
      email: this.email,
      password: this.password
    }
    this.authService.loginUser(authAdmin);
  }
}
