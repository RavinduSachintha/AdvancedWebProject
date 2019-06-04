import { Component, OnInit, OnDestroy } from "@angular/core";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { Subscription } from "rxjs";

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

  getWordsSub: Subscription;
  getSuggestionsSub: Subscription;
  searchUserSub: Subscription;

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
    console.log(word);
  }

  searchSuggestion(suggestion: string) {
    console.log(suggestion);
  }
}
