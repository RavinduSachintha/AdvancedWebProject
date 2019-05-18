import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getNumberOfComments() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.COMMENT_ALL_COUNT
    );
  }
}
