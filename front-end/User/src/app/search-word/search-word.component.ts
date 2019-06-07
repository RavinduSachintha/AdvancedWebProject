import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WordService } from "../services/word.service";


@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {
  listOfWords = [];
  PartlistOfWords=[];
  
  constructor(private wordService: WordService,private route:Router) {
    this.initializeList();
   }
  public numOfWords=0;
  public myId=localStorage.getItem('userId');
  public wordId="o";
  public openPartList=false;
  public u=0;
  ngOnInit() {
    
  }

  initializeList() {
    this.wordService.getAllWords().subscribe((result: any) => {
      let words = result.data;
      this.numOfWords=words.length;
      words.forEach(word => {
        this.listOfWords.push([word._id,word.data,word.bestSuggestion]);
        
      });
    });
  }

  initializePartList(wordPart) {
    this.PartlistOfWords=[];
    this.wordService.getWordByPart(wordPart.toLowerCase()).subscribe((result: any) => {
      let words = result.data;
      // this.u=words.length;
      // this.numOfWords=words.length;
      words.forEach(word => {
        this.PartlistOfWords.push([word._id,word.data]);
        
      });
    });
  }



  SubmitWord(iword){  
    
    for (let w of this.listOfWords){
      if (w[1]==iword.toLowerCase()){
        this.wordId=w[0];
        this.route.navigateByUrl('/viewword/'+this.wordId);
        return;
      }
    }
    this.initializePartList(iword)
    this.openPartList=true;
    
  }

  cardSubmit(id){
    this.route.navigateByUrl('/viewword/'+id);
  }

}
