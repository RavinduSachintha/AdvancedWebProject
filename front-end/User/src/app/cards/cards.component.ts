import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  public numofvotes=232343;
  public submittedWord="";
  public show=true;
  public empty=true;
  

  ngOnInit() {
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
}
