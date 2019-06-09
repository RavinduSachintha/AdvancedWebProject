import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { WordService } from "src/app/services/word.service";
import * as $ from "jquery";
import { Word } from "src/app/models/word";

declare var $: $;

@Component({
  selector: "app-word-rounds",
  templateUrl: "./word-rounds.component.html",
  styleUrls: ["./word-rounds.component.css"]
})
export class WordRoundsComponent implements OnInit {
  wordList = [];

  selectedWord: Word = {
    wordId: "",
    data: "",
    bestSuggestion: "",
    description: "",
    state: "",
    activeState: "",
    startDate: "",
    endDate: "",
    createdDate: ""
  };

  getWordsSub: Subscription;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.getWordsSub = this.wordService.getAllWords().subscribe(
      (result: any) => {
        for (const word of result.data) {
          if (word.state == "incomplete" && word.activeState == "inactive") {
            this.wordList.push(word);
          }
        }
      },
      error => console.log(error),
      () => this.wordList.reverse()
    );
  }

  startRoundWordModal(index: number) {
    this.selectedWord = this.wordList[index];
    this.selectedWord.wordId = this.wordList[index]._id;
    $("#startRoundWordModel").modal();
  }

  openViewWordModal(index: number) {
    this.selectedWord = this.wordList[index];
    this.selectedWord.wordId = this.wordList[index]._id;
    $("#viewWordModel").modal();
  }

  startRound(endDate: any) {
    let word: Word = {
      wordId: this.selectedWord.wordId,
      data: this.selectedWord.data,
      bestSuggestion: "",
      description: this.selectedWord.description,
      state: "incomplete",
      activeState: "active",
      startDate: Date.now().toString(),
      createdDate: this.selectedWord.createdDate,
      endDate: endDate
    };
    this.wordService
      .updateWord(word)
      .then(() => alert("Successfully start the round."))
      .catch(error => console.log(error))
      .finally(() => location.reload());
  }
}
