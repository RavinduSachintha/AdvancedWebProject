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
      .realizarHttpPost(HttpEnum.LOGIN, authUser)
      .subscribe(
        result => {
          if (result === null) {
            alert("Login credentials are not correct.");
          } else {
            console.log("Login credentials ok");
            this.router.navigate(["/admin-dashboard"]);
          }
        },
        err => alert("Error occured.. Contact Administrations")
      );
  }
}
