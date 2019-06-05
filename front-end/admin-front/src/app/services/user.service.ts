import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllRegUsers() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.USER_ALL_PROFILES
    );
  }

  getRegUserByUsername(username: string) {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.USER_PROFILE + "/" + username
    );
  }

  getNumberOfRegUsers() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.USER_REG_COUNT
    );
  }

  getNumberOfAdmins() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.USER_ADMIN_COUNT
    );
  }

  deleteUser(id: number) {
    return this.httpBackendRequest.realizarHttpDeleteWithToken(
      HttpEnum.USER_DELETE + "/" + id
    );
  }
}
