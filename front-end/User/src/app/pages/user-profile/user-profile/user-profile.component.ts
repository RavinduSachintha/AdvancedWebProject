import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  id: String;

  constructor( private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
   
  }

  

  sendUserObject() {
    
  }

}
