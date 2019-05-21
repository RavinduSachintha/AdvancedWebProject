import { Component, OnInit } from "@angular/core";
import { WordService } from "../services/word.service";

@Component({
  selector: "app-crudwords",
  templateUrl: "./crudwords.component.html",
  styleUrls: ["./crudwords.component.css"]
})
export class CRUDwordsComponent implements OnInit {
  listOfWordsAndUserIds = [];

  constructor(private wordService: WordService) {}

  public items = ["වලාකුළු1", "වලාකුළු2", "වලාකුළු3"];
  public show = true;
  public empty = true;
  public myId="5cd3ff104003201945f9e158";

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
    this.wordService.getAllWords().subscribe((result: any) => {
      let words = result.data;
      words.forEach(word => {
        if (word.userId==this.myId){
        this.listOfWordsAndUserIds.push([word.userId,word.data]);
        }
      });
    });
  }
}
