import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentInteractionsService } from 'src/app/component-interactions.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  id: String;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private componentInteractionService: ComponentInteractionsService) {}

  ngOnInit() {
    this.fetchProfile();
  }

  fetchProfile() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.userService.getOneUserProfile(this.id).subscribe((data: User) => {
        this.user = data;
        console.log("Profile requested is ...");
        console.log("ID: " + this.user._id);
      }
    );
  });
  }

  sendUserObject() {
    this.componentInteractionService.sendUser(this.user);
  }

}
