import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { AdminUser } from "../models/admin-user";
import { HttpEnum } from "../utils/http-enum.enum";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    private router: Router,
    private httpBackendRequest: HttpBackendRequestService
  ) {}

  // login function for admin users
  loginAdmin(adminUser: AdminUser) {
    this.httpBackendRequest
      .realizarHttpPost(HttpEnum.USER_LOGIN, adminUser)
      .subscribe(
        (result: any) => {
          if (result.status === "success") {
            if (result.data.user && result.data.token) {
              localStorage.setItem("userId", result.data.user.userId);
              localStorage.setItem("userType", result.data.user.usertype);
              localStorage.setItem("accessToken", result.data.token);
              localStorage.setItem("user",result.data.user._id);
            }
            this.router.navigate(["/dashboard"]);
          } else {
            alert(result.error);
          }
        },
        err => console.log("HTTP request not send. \n" + err)
      );
  }

  // logout function for admin users
  logoutAdmin() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("accessToken");
    this.router.navigate(["/login"]);
  }

  // check admin validity
  isAdminAuthenticated() {
    let token = localStorage.getItem("accessToken");
    let type = localStorage.getItem("userType");
    return (
      !jwtHelper.isTokenExpired(token) &&
      (type == "admin" || type == "super-admin")
    );
  }
}
