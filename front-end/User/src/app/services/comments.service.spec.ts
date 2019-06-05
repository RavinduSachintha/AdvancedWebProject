import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {CommentsService } from './comments.service';
import { of } from 'rxjs';

describe('CommentsService', () => {
    let commentsService:CommentsService;
  beforeEach(() => {TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CommentsService]
  });
  commentsService=TestBed.get(CommentsService);
});

  it('should be created', () => {
    expect(commentsService).toBeTruthy();
  });

  // Add tests for getAllComments() method
  describe('getAllComments', () => {
    it('should return a collection of comments', () => {
      const commentsResponse = [
        {"_id":"5cd40f381d256f235dd4944c","userId":"5cd3ff104003201945f9e158","wordId":"","suggestionId":"","data":"Database","likesCount":"","createdDate":"2019-05-09T00:00:00.000Z","__v":0},
        {"_id":"5cd40f381d256f235dd4944c","userId":"5cd3ff104003201945f9e158","wordId":"","suggestionId":"","data":"Database","likesCount":"","createdDate":"2019-05-09T00:00:00.000Z","__v":0}];
      let response;
      spyOn(commentsService, 'getAllComments').and.returnValue(of(commentsResponse));
      commentsService.getAllComments().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(commentsResponse);
    });
  });








});
