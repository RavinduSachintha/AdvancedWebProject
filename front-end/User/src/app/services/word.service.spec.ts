import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {WordService } from './word.service';
import { of } from 'rxjs';

describe('WordService', () => {
    let wordService:WordService;
  beforeEach(() => {TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[WordService]
  });
  wordService=TestBed.get(WordService);
});

  it('should be created', () => {
    expect(wordService).toBeTruthy();
  });

  // Add tests for getAllWords() method
  describe('getAllWords', () => {
    it('should return a collection of words', () => {
      const wordResponse = [
        {"_id":"5cd40f381d256f235dd4944c","userId":"5cd3ff104003201945f9e158","data":"Database","state":"incomplete","bestSuggestion":"දත්ත ගබඩාව ","startDate":"2019-05-09T00:00:00.000Z","endDate":"2019-06-09T00:00:00.000Z","activeState":"active","createdDate":"2019-05-09T00:00:00.000Z","__v":0},
        {"_id":"5ce18875d4981f1eba44ab6a","userId":"5cdda1052050d77d6774640f","data":"cloud","__v":0,"bestSuggestion":"වළාකුල"} ];
      let response;
      spyOn(wordService, 'getAllWords').and.returnValue(of(wordResponse));
      wordService.getAllWords().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(wordResponse);
    });
  });


  // Add tests for getWordById() method
  describe('getWordById', () => {
    it('should return a single word', () => {
      const wordResponse =
        {"_id":"5cd40f381d256f235dd4944c","userId":"5cd3ff104003201945f9e158","data":"Database","state":"incomplete","bestSuggestion":"දත්ත ගබඩාව ","startDate":"2019-05-09T00:00:00.000Z","endDate":"2019-06-09T00:00:00.000Z","activeState":"active","createdDate":"2019-05-09T00:00:00.000Z","__v":0};
      let response;
      spyOn(wordService, 'getWordById').and.returnValue(of(wordResponse));
      wordService.getWordById("5cd40f381d256f235dd4944c").subscribe(res => {
        response = res;
      });
      expect(response).toEqual(wordResponse);
    });
  });

  // Add tests for getWordByPart() method
  describe('getWordByPart', () => {
    it('should return related words', () => {
      const wordResponse = [
        {"_id":"5cd40f381d256f235dd4944c","userId":"5cd3ff104003201945f9e158","data":"Database","state":"incomplete","bestSuggestion":"දත්ත ගබඩාව ","startDate":"2019-05-09T00:00:00.000Z","endDate":"2019-06-09T00:00:00.000Z","activeState":"active","createdDate":"2019-05-09T00:00:00.000Z","__v":0},
        {"_id":"5ce18875d4981f1eba44ab6a","userId":"5cdda1052050d77d6774640f","data":"cloud","__v":0,"bestSuggestion":"වළාකුල"}
      ];
        let response;
      spyOn(wordService, 'getWordByPart').and.returnValue(of(wordResponse));
      wordService.getWordByPart("datab").subscribe(res => {
        response = res;
      });
      expect(response).toEqual(wordResponse);
    });
  });






});
