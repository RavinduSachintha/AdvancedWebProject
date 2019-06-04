import { Component, OnInit } from '@angular/core';
import { WordService } from '../../../services/word.service';
import { SuggestionService } from '../../../services/suggestion.service';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-user-added-words',
  templateUrl: './user-added-words.component.html',
  styleUrls: ['./user-added-words.component.css']
})
export class UserAddedWordsComponent implements OnInit {

  myId = localStorage.getItem('userId');
  words = [];
  suggestions = [];
  comments = [];
  mappedArray = [];

  constructor(private wordService: WordService, private suggestionService: SuggestionService, private commentsService: CommentsService) {}

  ngOnInit() {
    this.fetchWords().then(()=> {
      if(this.words.length!=0) {
        this.fetchSuggestions().then(() => {
          this.fetchComments().then(() => {
            this.mapArray();
          }).catch(() => {
            console.log("Error occured when fetching comments");
          });
        }).catch(() => {
          console.log("Error occured when fetching suggestions");
        });
      }
    }).catch(()=>{
      console.log("Error occured when fetching words");
    });
  }

  fetchWords() {

    let promise = new Promise((resolve, reject) => {

      this.wordService.getAllWords().subscribe((result: any) => {
        let words = result.data;
        words.forEach(word => {
          if (word.userId==this.myId){
            this.words.push([word._id,word.data]);
          }
        });

        resolve();

      });

    });

    return promise;

  }

  fetchSuggestions() {

    let promise = new Promise((resolve, reject) => {

      this.suggestionService.getAllSuggestions().subscribe((result: any) => {
        let suggestions = result.data;
        suggestions.forEach(suggestion => {
          this.suggestions.push([suggestion._id, suggestion.wordId, suggestion.votesCount]);
        });

        resolve();

      });

    });

    return promise;

  }

  fetchComments() {

    let promise = new Promise((resolve, reject) => {

      this.commentsService.getAllComments().subscribe((result: any) => {
        let comments = result.data;
        comments.forEach(comment => {
          this.comments.push([comment._id, comment.suggestionId]);
        });

        resolve();

      });

    });

    return promise;

  }

  mapArray() {
    this.words.forEach(word => {
      let numOfSuggestions = 0;
      let numOfComments = 0;
      let numOfVotes = 0;
      this.suggestions.forEach(suggestion => {
        if(word[0]==suggestion[1]) {
          numOfSuggestions += 1;
          numOfVotes += suggestion[2];
          this.comments.forEach(comment => {
            if(suggestion[0]==comment[1]) {
              numOfComments += 1;
            }
          });
        }
      });
      this.mappedArray.push([numOfSuggestions, numOfComments, numOfVotes]);
    });
  }

  deleteWord(wordId){

    let getConfirm=confirm("Do you want to delete this word ?");

    if (getConfirm){
      this.wordService.deleteWord(wordId)
        .toPromise()
        .then(result => {
          alert("Successfully deleted the word.");
        }).catch(error => {
          alert("Something went wrong");
          console.log(error);
        }).then(()=>{
          window.location.reload();
        });
    }
  }
}
