import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/http-enum.enum';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private router: Router,
    private httpBackendRequest: HttpBackendRequestService
  ) {}

  // login function for users
  loginUser(user: User) {
    this.httpBackendRequest
      .realizarHttpPostWithoutToken(HttpEnum.USER_LOGIN, user)
      .subscribe(
        (result: any) => {
          if (result.status === "success") {
            if (result.data.user && result.data.token) {
              localStorage.setItem("userId", result.data.user._id);
              localStorage.setItem("user", JSON.stringify(result.data.user));
              localStorage.setItem("username", result.data.user.username);
              localStorage.setItem("userType", result.data.user.usertype);
              localStorage.setItem("accessToken", result.data.token);
            }
            // this.router.navigate(["/insertword"]);
            this.router.navigate(['/home']);
          } else {
            alert(result.error);
          }
        },
        err => console.log("HTTP request not send. \n" + err)
      );
  }

  // logout function for users
  logoutUser() {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    localStorage.removeItem("accessToken");
    this.router.navigate(["/login"]);
  }

  // check normal user validity
  isNormalUserAuthenticated() {
    let token = localStorage.getItem("accessToken");
    let type = localStorage.getItem("userType");
    return (
      !jwtHelper.isTokenExpired(token) &&
      (type == "normal")
    );
  }

  //view user details by id
  seeUserDetails(userid){
    
      return this.httpBackendRequest.realizarHttpGetWithToken(
        HttpEnum.USER_PROFILE+userid
      );
    
  
  }

  //check whether a user is loggedin //CHAMOD
  loggedIn() {
    return !!localStorage.getItem("accessToken");
  }

  //check user validity CHAMOD
  isUserAuthenticated() {
    let token = localStorage.getItem("accessToken");
    return !jwtHelper.isTokenExpired(token);
  }

  //register function for users CHAMOD
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
