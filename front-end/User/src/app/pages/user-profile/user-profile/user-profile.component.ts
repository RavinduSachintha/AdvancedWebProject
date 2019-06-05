import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    email : localStorage.getItem('email'),
    username : localStorage.getItem('username'),
    userLevel : localStorage.getItem('userLevel'),
    joinedDate : localStorage.getItem('joinedDate'),
    name : localStorage.getItem('name'),
    profession : localStorage.getItem('profession'),
    birthday : localStorage.getItem('birthday')
  };

  constructor( private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
