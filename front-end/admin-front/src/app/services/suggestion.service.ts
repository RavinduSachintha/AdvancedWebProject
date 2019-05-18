import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class SuggestionService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getNumberOfSuggestions() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.SUGGESTION_ALL_COUNT
    );
  }
}
