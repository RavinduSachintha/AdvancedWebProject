import { Component, OnInit } from '@angular/core';
import { SuggestionService } from "../services/suggestion.service";
import {CommentsService} from "../services/comments.service"
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpEnum } from '../utils/http-enum.enum';
import { Comments } from '../models/comments';
import { Suggestion } from '../models/suggestion';


@Component({
  selector: 'app-cards-one',
  templateUrl: './cards-one.component.html',
  styleUrls: ['./cards-one.component.css']
})
export class CardsOneComponent implements OnInit {

  constructor(private suggestionService: SuggestionService,private router: Router,private commentsService:CommentsService,private authenticationService:AuthenticationService) { }


  // public items=[[111,"වලාකුළු1",suggestionid],[112,"වලාකුළු2"],[113,"වලාකුළු3"]];
  // public myId=111;
  public OtherReccomandVotes=[];
  // public comments=[[112,"Ravindu Sachintha","Great word..Amazing"],[113,"Ruwan Liyanage","This is very bad"],[111,"Rashmi Shehana","Wow thats nice.."],[114,"Gayan Priyadarshana","What is this shit?"]]
  public comments=[];
  public correct_index=-1;
  // public myId="5cdda1052050d77d6774640f";
  public myId=localStorage.getItem('userId');
 public wordId=this.router.url.split("/")[2];

  public show=true;
  public empty=true;
  public SuggestionData=[];
  public items=this.SuggestionData;
  public myName=localStorage.getItem('username');
  public uVL=[];
  public dVL=[];

  // public commentList=[];
  public commentedUserName="";
  // public test=[];
  public ur=HttpEnum.USER_PROFILE+"5cdda1052050d77d6774640f";
  public userNames=[];


  ngOnInit() {
    this.initializeLists();
    this.initializeCommentList();
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

    let commentItem = new Comments();
    commentItem.data = word;
    commentItem.wordId=this.wordId;
    commentItem.userId=this.myId;
    commentItem.suggestionId=this.SuggestionData[i][2];

    this.comments.push([this.myId,word,this.SuggestionData[i][2],this.myName,commentItem.id])



    this.commentsService.insertComments(commentItem)
      .toPromise()
      .then(result => {
        alert("Successfully inserted the comment.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      })

      // window.location.reload();


  }

  initializeLists() {
    this.suggestionService.getAllSuggestions().subscribe((result: any) => {

      let suggestions = result.data.sort(function(o1,o2){
        return o2.votesCount-o1.votesCount;
      });
      suggestions.forEach(suggestion => {
       if (suggestion.wordId==this.wordId){
        this.SuggestionData.push([suggestion.userId,suggestion.data,suggestion._id,suggestion.votesCount]);
        this.OtherReccomandVotes.push(suggestion.votesCount);
      }
      });
    });
  }


  initializeCommentList(){
    this.commentsService.getAllComments().subscribe((result: any) => {
      let comments = result.data;
      comments.forEach(comment => {
       this.authenticationService.seeUserDetails(comment.userId).subscribe((res:any)=>{
          this.comments.push([comment.userId,comment.data,comment.suggestionId,res.username,comment._id]);
        });
      });
    });
  }

  deleteSuggestion(suggestionId){

    let getConfirm=confirm("Do You Want Need To Delete The Suggestion ?");
    if (getConfirm){


    this.suggestionService.deleteSuggestion(suggestionId)
      .toPromise()
      .then(result => {
        alert("Successfully deleted the suggestion.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      })

      // window.location.reload();
      this.items.forEach(item=>{
        if(item[2]==suggestionId){
          let indexnumber=this.items.indexOf(item);
          this.items.splice(indexnumber);
        }
      });
    }


  }

  deleteComment(commentId){
    let getConfirm=confirm("Do You Want Need To Delete The Comment ?");
    if (getConfirm){


    this.commentsService.deleteComment(commentId)
      .toPromise()
      .then(result => {
        alert("Successfully deleted the comment.");
      }).catch(error => {
        alert("Something went wrong");
        console.log(error);
      })

      // window.location.reload();
      this.comments.forEach(comment=>{
        if(comment[4]==commentId){
          let indexnumber=this.comments.indexOf(comment);
          this.comments.splice(indexnumber);
        }
      });
    }

  }

  //This method is coverd ,Not updated in db***
  updateSuggestionVotes(userId,suggestionData,suggestionId,votes,n,updateVote){
   
        this.suggestionService.getAllSuggestions().subscribe((result: any) => {
          let suggestions = result.data;
          
          suggestions.forEach(suggestion => {
            
           if (suggestion._id==suggestionId){
             this.uVL=suggestion.upVotedList + this.uVL;
             this.uVL=[this.myId];

            for(let upvotedguy of this.uVL){
              
              if(this.myId==upvotedguy){
                alert("You have voted already !!!");
                return;
              }
            }
            suggestion.votesCount=suggestion.votesCount + updateVote;
            this.OtherReccomandVotes[n]= this.OtherReccomandVotes[n] + updateVote;
            this.uVL.push(this.myId);
            suggestion.upVotedList.push(this.myId);

            this.suggestionService.updateSuggestion(suggestion)
            .toPromise()
            .then(result => {
              alert("Successfully updated the suggestion.");
            }).catch(error => {
              alert("Something went wrong");
              console.log(error);
            });


          }
          });
        });
        

      


  }

  updateSuggestionDownVotes(userId,suggestionData,suggestionId,votes,n,updateVote){
   
    this.suggestionService.getAllSuggestions().subscribe((result: any) => {
      let suggestions = result.data;
      
      suggestions.forEach(suggestion => {
        
       if (suggestion._id==suggestionId){
         this.dVL=suggestion.downVotedList + this.dVL;
         //this.dVL=[this.myId];

        for(let downvotedguy of this.dVL){
          
          if(this.myId==downvotedguy){
            alert("You have voted already !!!");
            return;
          }
        }
        suggestion.votesCount=suggestion.votesCount + updateVote;
        this.OtherReccomandVotes[n]= this.OtherReccomandVotes[n] + updateVote;
        this.dVL.push(this.myId);
        suggestion.downVotedList.push(this.myId);

        this.suggestionService.updateSuggestion(suggestion)
        .toPromise()
        .then(result => {
          alert("Successfully updated the suggestion.");
        }).catch(error => {
          alert("Something went wrong");
          console.log(error);
        });


      }
      });
    });
    




}
}
