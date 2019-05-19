import { Component, OnInit } from "@angular/core";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-crudwords",
  templateUrl: "./crudwords.component.html",
  styleUrls: ["./crudwords.component.css"]
})
export class CRUDwordsComponent implements OnInit {
  listOfWords = [];

  constructor(private wordService: WordService) {}

  public items = ["වලාකුළු1", "වලාකුළු2", "වලාකුළු3"];
  public show = true;
  public empty = true;

  ngOnInit() {
    this.initializeList();
  }

  public submit(word, meaning) {
    if (word.length == 0 || meaning.length == 0) {
      this.empty = false;
      this.show = true;
    } else {
      this.show = false;
      this.empty = true;
    }
  }

  initializeList() {
    this.wordService.getAllWords().subscribe(word => {
      this.listOfWords.push(1);
    });
  }
}
