import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-one',
  templateUrl: './cards-one.component.html',
  styleUrls: ['./cards-one.component.css']
})
export class CardsOneComponent implements OnInit {

  constructor() { }

  public items=[[111,"වලාකුළු1"],[112,"වලාකුළු2"],[113,"වලාකුළු3"]];
  public myId=111;
  public OtherReccomandVotes=[2343,4555,5454];
  public comments=[[112,"Ravindu Sachintha","Great word..Amazing"],[113,"Ruwan Liyanage","This is very bad"],[111,"Rashmi Shehana","Wow thats nice.."],[114,"Gayan Priyadarshana","What is this shit?"]]
 public correct_index=-1;
  
  public show=true;
  public empty=true;

  ngOnInit() {
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

  

}
