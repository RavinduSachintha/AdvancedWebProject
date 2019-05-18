import { Component, OnInit } from '@angular/core';
import { ComponentInteractionsService } from 'src/app/component-interactions.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile-overview',
  templateUrl: './user-profile-overview.component.html',
  styleUrls: ['./user-profile-overview.component.css']
})
export class UserProfileOverviewComponent implements OnInit {

  user: User;

  constructor(private componentInteractionService: ComponentInteractionsService) { }

  ngOnInit() {
    this.componentInteractionService.userProfile$.subscribe(
      (message) => {
        this.user = message;
      }
    );
  }

}
