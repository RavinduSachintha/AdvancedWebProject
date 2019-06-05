import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

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

  constructor() { }

  ngOnInit() {
  }



}
