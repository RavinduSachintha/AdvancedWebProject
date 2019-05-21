import { Component, OnInit } from '@angular/core';
import { SuggestionService } from "../services/suggestion.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards-one',
  templateUrl: './cards-one.component.html',
  styleUrls: ['./cards-one.component.css']
})
export class CardsOneComponent implements OnInit {

  constructor(private suggestionService: SuggestionService,private router: Router) { }


  // public items=[[111,"වලාකුළු1"],[112,"වලාකුළු2"],[113,"වලාකුළු3"]];
  // public myId=111;
  public OtherReccomandVotes=[];
  public comments=[[112,"Ravindu Sachintha","Great word..Amazing"],[113,"Ruwan Liyanage","This is very bad"],[111,"Rashmi Shehana","Wow thats nice.."],[114,"Gayan Priyadarshana","What is this shit?"]]
  public correct_index=-1;
  public myId="5cdda1052050d77d6774640f";
 public wordId=this.router.url.split("/")[2];
  
  public show=true;
  public empty=true;
  public SuggestionData=[];
  public items=this.SuggestionData;

  ngOnInit() {
    this.initializeLists();
  }

  public voteup(n) {
    this.OtherReccomandVotes[n]++;
  }

  public votedown(n){
    this.OtherReccomandVotes[n]--;
  }

  public MatchId(id){
    if( id==this.myId){
      return false;
    }
    else{
      return true;
    }
  }

  public submit(word,i){
    if (word.length==0){
      this.empty=false;
      this.show=true;
    }else{
     
      this.show=false;
      this.empty=true;
    }
    this.correct_index=i; 
  }

  initializeLists() {
    this.suggestionService.getAllSuggestions().subscribe((result: any) => {
      let suggestions = result.data.sort(function(o1,o2){
        return o2.votesCount-o1.votesCount;
      });
      suggestions.forEach(suggestion => {
       if (suggestion.wordId==this.wordId){
        this.SuggestionData.push([suggestion.userId,suggestion.data,suggestion.userId]);
        this.OtherReccomandVotes.push(suggestion.votesCount);
      }
      });
    });
  }

  

}
