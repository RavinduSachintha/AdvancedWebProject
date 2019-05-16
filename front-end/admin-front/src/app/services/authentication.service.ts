import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { AdminUser } from "../models/admin-user";
import { HttpEnum } from "../utils/http-enum.enum";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    private router: Router,
    private httpBackendRequest: HttpBackendRequestService
  ) {}

  loginAdmin(adminUser: AdminUser) {
    this.httpBackendRequest
      .realizarHttpPost(HttpEnum.USER_LOGIN, adminUser)
      .subscribe(
        (result: any) => {
          if (result.status === "success") {
            if (result.data.user && result.data.token) {
              localStorage.setItem(
                "currentUser",
                JSON.stringify({
                  id: result.data.user._id,
                  token: result.data.token
                })
              );
            }
            this.router.navigate(["/dashboard"]);
          } else {
            alert(result.error);
          }
        },
        err => console.log("HTTP request not send. \n" + err)
      );
  }

  logoutUser() {
    localStorage.removeItem("currentUser");
  }
}
