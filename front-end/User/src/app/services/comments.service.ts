import { Injectable } from '@angular/core';
import { HttpBackendRequestService } from "./http-backend-request.service";
import { HttpEnum } from "../utils/http-enum.enum";
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private httpBackendRequest: HttpBackendRequestService) {}

  getAllComments() {
    return this.httpBackendRequest.realizarHttpGetWithToken(
      HttpEnum.COMMENTS_VIEW_ALL
    );
  }

  insertComments(comment:Comments) {
    return this.httpBackendRequest.realizarHttpPostWithToken(
      HttpEnum.COMMENTS_CREATE, comment
    );
  }

  deleteComment(commentId){
    return this.httpBackendRequest.realizarHttpDeleteWithToken(
      HttpEnum.COMMENT_DELETE+commentId
    );
  }

}
