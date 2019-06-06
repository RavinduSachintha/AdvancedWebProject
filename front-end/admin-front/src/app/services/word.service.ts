import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";

@Injectable({
  providedIn: "root"
})
export class WordService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_RETRIEVE_ALL
    );
  }

  getWordByPart(word: string) {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_RETRIEVE_BY_PART + "/" + word
    );
  }

  getNumberOfWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_ALL_COUNT
    );
  }

  getNumberOfActiveWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_ACTIVE_ALL_COUNT
    );
  }

  getNumberOfInactiveWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_INACTIVE_ALL_COUNT
    );
  }

  getNumberOfCompleteWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_COMPLETE_ALL_COUNT
    );
  }

  getNumberOfIncompleteWords() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.WORD_INCOMPLETE_ALL_COUNT
    );
  }
}
