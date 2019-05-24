import { Component, OnInit } from "@angular/core";
import { WordService } from "../services/word.service";
import { Word } from '../models/word';
import {Router} from '@angular/router';

@Component({
  selector: "app-crudwords",
  templateUrl: "./crudwords.component.html",
  styleUrls: ["./crudwords.component.css"]
})
export class CRUDwordsComponent implements OnInit {
  listOfWordsAndUserIds = [];

  constructor(private wordService: WordService,private route:Router) {}

 
  public show = true;
  public empty = true;
  public myId=localStorage.getItem('userId');

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


      let wordItem = new Word();
    wordItem.data = word;

    this.wordService.insertWord(wordItem)
      .toPromise()
      .then(result => {
        alert("Successfully inserted the word.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      })

      this.listOfWordsAndUserIds.push([this.myId,word,wordItem.id])

      
    }

  
      
  }

  initializeList() {
    this.wordService.getAllWords().subscribe((result: any) => {
      let words = result.data;
      words.forEach(word => {
        if (word.userId==this.myId){
        this.listOfWordsAndUserIds.push([word.userId,word.data,word._id]);
        }
      });
    });
  }

  deleteWord(wordId){

    let getConfirm=confirm("Do You Want Need To Delete The Word ?");
    if (getConfirm){
  
    this.wordService.deleteWord(wordId)
      .toPromise()
      .then(result => {
        alert("Successfully deleted the word.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      })

      // window.location.reload();
      
      this.listOfWordsAndUserIds.forEach(item=>{
        if(item[2]==wordId){
          let indexnumber=this.listOfWordsAndUserIds.indexOf(item);
          this.listOfWordsAndUserIds.splice(indexnumber);
        }
      });
    }

  }

  viewWord(wordId){
    this.route.navigateByUrl('/viewword/'+wordId);
  }

  
}
