import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { AuthUser } from "../models/auth-user";
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

  loginUser(authUser: AuthUser) {
    this.httpBackendRequest
      .realizarHttpPost(HttpEnum.USER_LOGIN, authUser)
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
            this.router.navigate(["/admin-dashboard"]);
          } else {
            alert(result.error);
          }
        },
        err => alert("Error occured.. Contact Administrations")
      );
  }

  logoutUser() {
    localStorage.removeItem("currentUser");
  }
}
