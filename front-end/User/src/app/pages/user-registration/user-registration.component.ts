import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  email: string;
  username: string;
  password: string;

  today = new Date();
  joinedDate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  userRegister() {
    let registeredUser: User = {
      email : this.email,
      username : this.username,
      password : this.password,
      usertype : "normal",
      state : "active",
      joinedDate : this.joinedDate
    };

    this.authService.registerUser(registeredUser);

    this.email = null;
    this.username = null;
    this.password = null;

  }

}
