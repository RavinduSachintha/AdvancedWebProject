import { Injectable } from "@angular/core";
import { HttpBackendRequestService } from "./http-backend-request.service";
import { Word } from "../models/word";
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

  deleteWord(id: number) {
    return this.httpBackendRequest.realizarHttpDeleteWithToken(
      HttpEnum.WORD_DELETE + "/" + id
    );
  }

  insertWord(word: Word) {
    return this.httpBackendRequest
      .realizarHttpPostWithToken(HttpEnum.WORD_CREATE, word)
      .toPromise();
  }

  updateWord(word: Word) {
    console.log(word);
    return this.httpBackendRequest
      .realizarHttpPutWithToken(HttpEnum.WORD_UPDATE, word)
      .toPromise();
  }
}
