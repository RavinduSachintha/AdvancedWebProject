import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../../../services/suggestion.service';
import { WordService } from '../../../services/word.service';

@Component({
  selector: 'app-user-suggested-words',
  templateUrl: './user-suggested-words.component.html',
  styleUrls: ['./user-suggested-words.component.css']
})
export class UserSuggestedWordsComponent implements OnInit {

  userId = localStorage.getItem('userId');
  suggestions = [];
  words = [];
  mappedWords = [];

  constructor(private suggestionService: SuggestionService, private wordService: WordService) { }

  ngOnInit() {
    this.fetchSuggestions().then(()=> {
      // console.log(this.suggestions[0]);
      // console.log(this.words[0]);
      this.fetchWords().then(() => {
        // console.log(this.suggestions[0]);
        // console.log(this.words[0]);
        this.mapWords();
      }).catch(() => {
        console.log("Error occured when fetching words!");
      });
    }).catch(()=>{
      console.log("Error occured when fetching suggestions");
    });
  }

  fetchSuggestions() {

    let promise = new Promise((resolve, reject) => {

      this.suggestionService.getAllSuggestionsByUserId(this.userId).subscribe((result: any) => {
        let suggestions = result.data;
        suggestions.forEach(suggestion => {
          this.suggestions.push([suggestion._id, suggestion.wordId, suggestion.data, suggestion.state, suggestion.votesCount]);
        });
        resolve();
      });

    });

    return promise;
  }

  fetchWords() {

    let promise = new Promise((resolve, reject) => {

      this.wordService.getAllWords().subscribe((result: any) => {
        let words = result.data;
        words.forEach(word => {
          this.words.push([word._id, word.data]);
        });
        resolve();
      });

    });

    return promise;

  }

  mapWords() {
    this.suggestions.forEach(suggestion => {
      this.words.forEach(word => {
        if(suggestion[1]==word[0]) {
          this.mappedWords.push(word);
        }
      });
    });
  }

  deleteSuggestion(suggestionId){

    let getConfirm=confirm("Do You really want to delete this Suggestion ?");

    if (getConfirm){
      this.suggestionService.deleteSuggestion(suggestionId)
      .toPromise()
      .then(result => {
        alert("Successfully deleted the suggestion.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      }).then(() => {
        window.location.reload();
      });
    }


  }

}
