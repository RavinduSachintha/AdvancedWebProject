import { Component, OnInit, OnDestroy } from "@angular/core";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { Subscription } from "rxjs";
import * as $ from "jquery";

declare var $: $;

export interface Word {
  data: string;
  bestSuggestion: string;
  description: string;
  state: string;
  activeState: string;
  startDate: string;
  endDate: string;
  createdDate: string;
}

export interface Suggestion {
  data: string;
  wordId: string;
  userId: string;
  state: string;
  votesCount: number;
  createdDate: string;
}

@Component({
  selector: "app-view-word-suggestion",
  templateUrl: "./view-word-suggestion.component.html",
  styleUrls: ["./view-word-suggestion.component.css"]
})
export class ViewWordSuggestionComponent implements OnInit, OnDestroy {
  constructor(
    private wordService: WordService,
    private suggestionService: SuggestionService
  ) {}

  wordList = [];
  suggestionList = [];

  selectedWord: Word = {
    data: "",
    bestSuggestion: "",
    description: "",
    state: "",
    activeState: "",
    startDate: "",
    endDate: "",
    createdDate: ""
  };

  selectedSuggestion: Suggestion = {
    data: "",
    wordId: "",
    userId: "",
    state: "",
    votesCount: 0,
    createdDate: ""
  }

  getWordsSub: Subscription;
  getSuggestionsSub: Subscription;
  searchWordSub: Subscription;
  searchSuggestionSub: Subscription;

  // for pagination
  p: number = 1;
  q: number = 1;

  ngOnInit() {
    this.getWordsSub = this.wordService
      .getAllWords()
      .subscribe((result: any) => {
        for (const word of result.data) {
          this.wordList.push(word);
        }
      });

    this.getSuggestionsSub = this.suggestionService
      .getAllSuggestions()
      .subscribe((result: any) => {
        for (const suggestion of result.data) {
          this.suggestionList.push(suggestion);
        }
      });
  }

  ngOnDestroy() {
    this.wordList = [];
    this.suggestionList = [];
    this.getWordsSub.unsubscribe();
    this.getSuggestionsSub.unsubscribe();
  }

  searchWord(word: string) {
    this.wordList = [];
    this.searchWordSub = this.wordService
      .getWordByPart(word)
      .subscribe((result: any) => {
        if (result.status == "success" && result.data != null) {
          result.data.forEach(item => {
            this.wordList.push(item);
          });
        }
      });
  }

  searchSuggestion(suggestion: string) {
    this.suggestionList = [];
    this.searchSuggestionSub = this.suggestionService
      .getSuggestionByPart(suggestion)
      .subscribe((result: any) => {
        if (result.status == "success" && result.data != null) {
          result.data.forEach(item => {
            this.suggestionList.push(item);
          });
        }
      });
  }

  openViewWordModal(index: number) {
    this.selectedWord = this.wordList[index];
    $("#viewWordModel").modal();
  }

  openViewSuggestionModal(index: number) {
    this.selectedSuggestion = this.suggestionList[index];
    $("#viewSuggestionModel").modal();
  }
}
