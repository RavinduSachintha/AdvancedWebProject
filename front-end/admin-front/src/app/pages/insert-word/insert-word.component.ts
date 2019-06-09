import { Component, OnInit } from "@angular/core";
import { Word } from "../../models/word";
import { WordService } from "src/app/services/word.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-word",
  templateUrl: "./insert-word.component.html",
  styleUrls: ["./insert-word.component.css"]
})
export class InsertWordComponent implements OnInit {
  data: string;
  description: string;

  constructor(private wordService: WordService, private router: Router) {}

  ngOnInit() {
    this.data = "";
    this.description = "";
  }

  submitForm() {
    let word: Word = {
      data: this.data,
      description: this.description,
      activeState: "inactive",
      state: "incomplete",
      createdDate: Date.now().toString()
    };

    this.wordService
      .insertWord(word)
      .then(() => {
        alert("Successfully added the word");
        if (confirm("Do you want to start a round now ?")) {
          this.router.navigate(["/word-rounds"]);
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.data = "";
        this.description = "";
      });
  }
}
