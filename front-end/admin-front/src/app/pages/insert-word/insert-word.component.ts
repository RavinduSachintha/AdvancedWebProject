import { Component, OnInit } from "@angular/core";
import { Word } from "../../models/word";
import { WordService } from "src/app/services/word.service";

@Component({
  selector: "app-insert-word",
  templateUrl: "./insert-word.component.html",
  styleUrls: ["./insert-word.component.css"]
})
export class InsertWordComponent implements OnInit {
  data: string;
  description: string;
  activeState: string;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.data = "";
    this.description = "";
    this.activeState = "";
  }

  submitForm() {
    let word: Word = {
      data: this.data,
      description: this.description,
      activeState: this.activeState
    };

    this.wordService
      .insertWord(word)
      .then(() => {
        alert("Successfully added the word");
      })
      .catch(error => console.log(error));
  }
}
