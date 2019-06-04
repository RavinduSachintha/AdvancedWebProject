import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { SuggestionService } from '../../../services/suggestion.service';
import { WordService } from '../../../services/word.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

  userId = localStorage.getItem('userId');
  comments = [];
  suggestions = [];
  words = [];
  mappedArray = [];

  constructor(private commentsService: CommentsService, private suggestionService: SuggestionService, private wordService: WordService) { }

  ngOnInit() {
    this.fetchComments().then(() => {
      if(this.comments.length!=0) {
        this.fetchSuggestions().then(() => {
          this.fetchWords().then(() => {
            this.mapArray();
            console.log(this.mappedArray);
          }).catch(() => {
            console.log("Error occured when fetching words");
          });
        }).catch(() => {
          console.log("Error occured when fetching suggestions");
        });
      }
    }).catch(() => {
      console.log("Error occured when fetching comments");
    });
  }

  fetchComments() {

    let promise = new Promise((resolve, reject) => {

      this.commentsService.getAllComments().subscribe((result: any) => {
        let comments = result.data;
        comments.forEach(comment => {
          if(this.userId == comment.userId) {
            this.comments.push([comment._id, comment.data, comment.suggestionId, comment.wordId]);
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
          this.words.push([word._id,word.data]);
        });

        resolve();

      });

    });
    return promise;
  }

  mapArray() {
    this.comments.forEach(comment => {
      this.suggestions.forEach(suggestion => {
        if(comment[2]==suggestion[0]) {
          this.words.forEach(word => {
            if(word[0]==suggestion[1]) {
              this.mappedArray.push([word[1], suggestion[2], comment[1], word[0], comment[0]]);
            }
          });
        }
      });
    });
  }

  deleteComment(commentId){

    let getConfirm=confirm("Do you really want to delete this comment ?");

    if (getConfirm){

      this.commentsService.deleteComment(commentId)
        .toPromise()
        .then(result => {
          alert("Successfully deleted the comment.");
        }).catch(error => {
          alert("Something went wrong");
          console.log(error);
        }).then(() => {
          window.location.reload();
        });

    }

  }

}
