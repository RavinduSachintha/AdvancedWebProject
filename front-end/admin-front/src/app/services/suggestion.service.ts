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

  getNumberOfCompleteSuggestions() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.SUGGESTION_COMPLETE_ALL_COUNT
    );
  }

  getNumberOfIncompleteSuggestions() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.SUGGESTION_INCOMPLETE_ALL_COUNT
    );
  }
}
