import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {WordService } from './word.service';
import { of } from 'rxjs';
import {SuggestionService } from './suggestion.service';

fdescribe('SuggestionService', () => {
    let suggestionService:SuggestionService;
  beforeEach(() => {TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SuggestionService]
  });
  suggestionService=TestBed.get(SuggestionService);
});

  //Creating Suggestion Service
  fit('should be created', () => {
    expect(suggestionService).toBeTruthy();
  });

  
  // Add tests for getAllSuggestions() method
  fdescribe('getAllSuggestions', () => {
    fit('should return a collection of suggestions', () => {
      const suggestionResponse = [
        {"upVotedList":[],"downVotedList":[],"_id":"5ce289eeb63b05259ccfa688","userId":"5cdda1052050d77d6774640f","wordId":"5cd40f381d256f235dd4944c","data":"දත්ත","state":"Incomplete","votesCount":25230,"createdDate":"2019-05-19T18:30:00.000Z","__v":0},{"upVotedList":[],"downVotedList":[],"_id":"5ce28a6eb63b05259ccfa689","userId":"5cdda1052050d77d6774640f","wordId":"5cd40f381d256f235dd4944c","data":"දත්ත ගොනුව ","state":"Incomplete","votesCount":2521,"createdDate":"2019-05-19T18:30:00.000Z","__v":0}
       ];
      let response;
      spyOn(suggestionService, 'getAllSuggestions').and.returnValue(of(suggestionResponse));
      suggestionService.getAllSuggestions().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(suggestionResponse);
    });
  });




 
});
