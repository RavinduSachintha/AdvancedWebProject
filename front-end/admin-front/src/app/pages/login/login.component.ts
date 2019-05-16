import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { HttpBackendRequestService } from "src/app/services/http-backend-request.service";
import { AdminUser } from "src/app/models/admin-user";

import * as $ from "jquery";

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

  ngOnInit() {
    // $('[data-toggle="tooltip"]').tooltip();
    // $(".preloader").fadeOut();
    // ==============================================================
    // Login and Recover Password
    // ==============================================================
    $("#to-recover").on("click", function() {
      console.log("Hello");
      $("#loginform").slideUp();
      $("#recoverform").fadeIn();
    });
    $("#to-login").click(function() {
      $("#recoverform").hide();
      $("#loginform").fadeIn();
    });
  }

  submitLoginForm() {
    let authAdmin: AdminUser = {
      email: this.email,
      password: this.password
    };

    this.authService.loginAdmin(authAdmin);

    this.email = null;
    this.password = null;
  }
}
