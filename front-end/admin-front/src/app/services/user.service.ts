import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // variable declaration
  num_of_reg_users: number;
  num_of_admins: number;
  num_of_active_users: number;

  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getNumberOfRegUsers() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.USER_REG_COUNT
    );
  }
}
