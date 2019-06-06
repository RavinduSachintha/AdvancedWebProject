import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { CommentService } from "src/app/services/comment.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  // variable declaration
  num_of_reg_users: number;
  num_of_admins: number;
  num_of_words: number;
  num_of_suggestions: number;
  num_of_comments: number;
  num_of_complete_words: number;

  // subscriptions references
  reg_users_subcri: Subscription;
  admins_subcri: Subscription;
  words_subcri: Subscription;
  suggestions_subcri: Subscription;
  comments_subcri: Subscription;
  words_complete_subcri: Subscription;

  isLoaded: boolean;

  constructor(
    private userService: UserService,
    private wordService: WordService,
    private suggestionService: SuggestionService,
    private commentService: CommentService
  ) {
    this.num_of_reg_users = 1;
    this.num_of_admins = 1;
    this.num_of_words = 1;
    this.num_of_suggestions = 1;
    this.num_of_comments = 1;
    this.num_of_complete_words = 1;

    this.isLoaded = false;
  }

  ngOnInit() {
    this.dataInitializer();
  }

  ngOnDestroy() {
    this.reg_users_subcri.unsubscribe();
    this.admins_subcri.unsubscribe();
    this.words_subcri.unsubscribe();
    this.suggestions_subcri.unsubscribe();
    this.comments_subcri.unsubscribe();
    this.words_complete_subcri.unsubscribe();
  }

  isSuperAdminUser() {
    return localStorage.getItem("userType") == "super-admin";
  }

  // pie chart data initialiing and rendering
  dataInitializer() {
    const loaded = {
      num_of_reg_users: false,
      num_of_admins: false,
      num_of_words: false,
      num_of_suggestions: false,
      num_of_comments: false,
      num_of_complete_words: false
    };

    this.reg_users_subcri = this.userService.getNumberOfRegUsers().subscribe(
      (count: any) => {
        this.num_of_reg_users = count.data;
        loaded["num_of_reg_users"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.admins_subcri = this.userService.getNumberOfAdmins().subscribe(
      (count: any) => {
        this.num_of_admins = count.data;
        loaded["num_of_admins"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.words_subcri = this.wordService.getNumberOfWords().subscribe(
      (count: any) => {
        this.num_of_words = count.data;
        loaded["num_of_words"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.words_complete_subcri = this.wordService
      .getNumberOfCompleteWords()
      .subscribe(
        (count: any) => {
          this.num_of_complete_words = count.data;
          loaded["num_of_complete_words"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.suggestions_subcri = this.suggestionService
      .getNumberOfSuggestions()
      .subscribe(
        (count: any) => {
          this.num_of_suggestions = count.data;
          loaded["num_of_suggestions"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.comments_subcri = this.commentService.getNumberOfComments().subscribe(
      (count: any) => {
        this.num_of_comments = count.data;
        loaded["num_of_comments"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );
  }

  checkLoading(loaded: {}) {
    for (let item in loaded) {
      if (!loaded[item]) {
        return;
      }
    }
  }
}
