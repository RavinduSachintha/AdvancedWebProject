import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class WordService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getNumberOfWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_ALL_COUNT
    );
  }
}
