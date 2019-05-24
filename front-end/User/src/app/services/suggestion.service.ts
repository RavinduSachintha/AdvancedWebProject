import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";
import { Suggestion } from '../models/suggestion';


@Injectable({
  providedIn: "root"
})
export class SuggestionService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllSuggestions() {
    return this.httpBackendRequest.realizarHttpGetWithoutToken(
      HttpEnum.SUGGESTION_VIEW_ALL
    );
  }

  insertSuggestion(suggestion:Suggestion) {
    return this.httpBackendRequest.realizarHttpPostWithToken(
      HttpEnum.SUGGESTION_CREATE, suggestion
    );
  }

  deleteSuggestion(suggestionId){
    return this.httpBackendRequest.realizarHttpDeleteWithToken(
      HttpEnum.SUGGESTION_DELETE+suggestionId
    );
  }

  updateSuggestion(suggestion:Suggestion){
    return this.httpBackendRequest.realizarHttpPutWithToken(
      HttpEnum.SUGGESTION_UPDATE, suggestion
    );
  }



  


}
