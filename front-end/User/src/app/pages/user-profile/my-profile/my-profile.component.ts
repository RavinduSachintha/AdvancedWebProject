import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { WordService } from '../../../services/word.service';
import { SuggestionService } from '../../../services/suggestion.service';
import { CommentsService } from '../../../services/comments.service';
import { UserProfileService } from '../../../services/user-profile.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user = {
    email : localStorage.getItem('email'),
    username : localStorage.getItem('username'),
    userLevel : localStorage.getItem('userLevel'),
    joinedDate : localStorage.getItem('joinedDate'),
    name : localStorage.getItem('name'),
    profession : localStorage.getItem('profession'),
    birthday : localStorage.getItem('birthday')
  };

  userId = localStorage.getItem('userId');

  words = [];
  suggestions = [];
  comments = [];

  constructor(
    private wordService: WordService,
    private suggestionService: SuggestionService,
    private commentsService: CommentsService,
    private userService: UserProfileService,
    private authService: AuthenticationService

  ) { }

  ngOnInit() {
    this.fetchWords();
    this.fetchSuggestions();
    this.fetchComments();
  }

  fetchWords() {

    let promise = new Promise((resolve, reject) => {

      this.wordService.getAllWords().subscribe((result: any) => {
        let words = result.data;
        words.forEach(word => {
          if(word.userId == this.userId) {
            this.words.push([word._id, word.data]);
          }
        });
        resolve();
      });

    });

    return promise;

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

  deactivateAccount() {

    let approval = confirm("Are you sure you want to deactivate your account?");

    if(approval) {
      this.userService.deacivateUserAccount(this.userId)
      .toPromise()
      .then(result => {
        alert("Account deactivated successfully");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      }).then(() => {
        this.authService.logoutUser();
      });
    }

  }

}
