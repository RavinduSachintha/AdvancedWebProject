import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));

  constructor( private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
