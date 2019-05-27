import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-profile-overview',
  templateUrl: './user-profile-overview.component.html',
  styleUrls: ['./user-profile-overview.component.css']
})
export class UserProfileOverviewComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {}
    

}
