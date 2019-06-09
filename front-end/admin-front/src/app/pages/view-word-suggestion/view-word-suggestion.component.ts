import { Component, OnInit, OnDestroy } from "@angular/core";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { Subscription } from "rxjs";
import * as $ from "jquery";
import { Word } from "src/app/models/word";
import { Suggestion } from "src/app/models/suggestion";

declare var $: $;

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
  };

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

  deleteWord(index: number) {
    if (confirm("Proceed the deletion ?")) {
      this.wordService
        .deleteWord(this.wordList[index]._id)
        .subscribe((result: any) => {
          if (result.status == "success" && result.data != null) {
            alert(
              "The word of " +
                result.data.data +
                " have been successfully deleted."
            );
            location.reload();
          } else {
            console.log("Error " + result.error);
          }
        });
    }
  }

  deleteSuggestion(index: number) {
    if (confirm("Proceed the deletion ?")) {
      this.suggestionService
        .deleteSuggestion(this.suggestionList[index]._id)
        .subscribe((result: any) => {
          if (result.status == "success" && result.data != null) {
            alert(
              "The suggestion of " +
                result.data.data +
                " have been successfully deleted."
            );
            location.reload();
          } else {
            console.log("Error " + result.error);
          }
        });
    }
  }

  isSuperAdminUser() {
    return localStorage.getItem("userType") == "super-admin";
  }
}
