import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBackendRequestService } from './http-backend-request.service';
import { User } from '../models/user';
import { HttpEnum } from '../utils/http-enum.enum';
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private httpBackendRequest: HttpBackendRequestService) { }

  //login function for normal users
  loginUser(user: User) {
    this.httpBackendRequest.realizarHttpPostWithoutToken(HttpEnum.USER_LOGIN, user)
    .subscribe(
      (result: any) => {
        if (result.status === "success") {
          if (result.data.user && result.data.token) {
            localStorage.setItem("user", JSON.stringify(result.data.user));
            localStorage.setItem("accessToken", result.data.token);
          }
          this.router.navigate(['/home']);
        }
        else {
          alert(result.error);
        }
      },
      (err) => {
        console.log("HTTP request not send. \n" + err);
      }
    );
  }

  // logout function for admin users
  logoutUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    this.router.navigate(["/login"]);
  }

  //check whether a user is loggedin
  loggedIn() {
    return !!localStorage.getItem("accessToken");
  }

  //check user validity
  isUserAuthenticated() {
    let token = localStorage.getItem("accessToken");
    return !jwtHelper.isTokenExpired(token);
  }

  //register function for users
  registerUser(user: User) {
    this.httpBackendRequest
      .realizarHttpPostWithoutToken(HttpEnum.USER_REGISTER, user)
      .subscribe(
        (result: any) => {
          if (result.status === "success") {
            if (result.data.user && result.data.token) {
              localStorage.setItem("user", JSON.stringify(result.data.user));
              localStorage.setItem("accessToken", result.data.token);
            }
            this.router.navigate(["/login"]);
          } else {
            alert(result.error);
          }
        },
        err => console.log("HTTP request not send. \n" + err)
      );
  }

}
