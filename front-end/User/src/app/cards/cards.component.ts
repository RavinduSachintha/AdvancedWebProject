import { Component, OnInit } from '@angular/core';
import { WordService } from "../services/word.service";
import {Router} from '@angular/router';
import { SuggestionService } from "../services/suggestion.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  

  WordData = [];
  
  constructor(private wordService: WordService,private router: Router,private suggestionService: SuggestionService) { }
  public numofvotes=232340;
  public submittedWord="";
  public show=true;
  public empty=true;
  // public myId="5cd3ff104003201945f9e158";
  public wordId=this.router.url.split("/")[2];

  

  ngOnInit() {
    this.initializeList();
    this.highestVotedSuggestion();
  }

  /**
   c voteup
   */
  public voteup() {
    this.numofvotes++;
  }

  public votedown(){
    this.numofvotes--;
  }

  public submit(word){
    if (word.length==0){
      this.empty=false;
      this.show=true;
    }else{
      this.submittedWord=word;
      this.show=false;
      this.empty=true;
    }
    
  }
  
  initializeList() {
    this.wordService.getWordById(this.wordId).subscribe((result: any) => {
      let words = result.data;
      if(words==null){
        this.WordData.push("Wrong Word Id!!!");
      }else{
        this.WordData.push([words.data,words.bestSuggestion]);
      }
      
      });
  
  }

  highestVotedSuggestion(){
    this.suggestionService.getAllSuggestions().subscribe((result: any) => {
      
      let suggestions = result.data;
      
      this.numofvotes=Math.max.apply(Math,suggestions.map(function(o){return o.votesCount;}));
   
  });
}

}