import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class SuggestionService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllSuggestions() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.SUGGESTION_RETRIEVE_ALL
    );
  }

  getSuggestionByPart(suggestion: string) {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.SUGGESTION_RETRIEVE_BY_PART + "/" + suggestion
    );
  }

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

  deleteSuggestion(id: number) {
    return this.httpBackendRequest.realizarHttpDeleteWithToken(
      HttpEnum.SUGGESTION_DELETE + "/" + id
    );
  }
}
