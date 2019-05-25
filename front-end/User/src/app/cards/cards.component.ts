import { Component, OnInit } from '@angular/core';
import { WordService } from "../services/word.service";
import {Router} from '@angular/router';
import { SuggestionService } from "../services/suggestion.service";
import { Suggestion } from '../models/suggestion';
import { Word } from '../models/word';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  

  WordData = [["","",""]];
  
  constructor(private wordService: WordService,private router: Router,private suggestionService: SuggestionService) { 
    this.initializeList();
  }
  public numofvotes=232340;
  public submittedWord="";
  public show=true;
  public empty=true;
  // public myId="5cd3ff104003201945f9e158";
  public wordId=this.router.url.split("/")[2];
  public myId=localStorage.getItem('userId');

  

  ngOnInit() {
   
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

  public submit(suggestion){
    if (suggestion.length==0){
      this.empty=false;
      this.show=true;
    }else{
      this.submittedWord=suggestion;
      this.show=false;
      this.empty=true;
    

    let suggestionItem = new Suggestion();
        suggestionItem.data = suggestion;
        suggestionItem.wordId=this.wordId;
        suggestionItem.state="Incomplete";
        suggestionItem.votesCount=0;



    this.suggestionService.insertSuggestion(suggestionItem)
      .toPromise()
      .then(result => {
        alert("Successfully inserted the word.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      });

    window.location.reload();
    }


    
  }
  
  initializeList() {
    this.wordService.getWordById(this.wordId).subscribe((result: any) => {
      let words = result.data;
      if(words!=null){
        this.WordData.unshift([words.data,words.bestSuggestion]);
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
