import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";


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



  


}
