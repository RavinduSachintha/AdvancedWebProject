import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudwords',
  templateUrl: './crudwords.component.html',
  styleUrls: ['./crudwords.component.css']
})
export class CRUDwordsComponent implements OnInit {

  constructor() { }
  public items=["වලාකුළු1","වලාකුළු2","වලාකුළු3"];
  public show=true;
  public empty=true;

  ngOnInit() {
  }
public submit(word,meaning){
  if (word.length==0  || meaning.length==0){
    this.empty=false;
    this.show=true;
  }else{
    this.show=false;
    this.empty=true;
  }
  
}
}
