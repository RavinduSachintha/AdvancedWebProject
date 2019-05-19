import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class WordService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllWords() {
    return this.httpBackendRequest.realizarHttpGetWithoutToken(
      HttpEnum.WORD_VIEW_ALL
    );
  }
}
