import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
// import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // loginForm: FormGroup;
  email: string;
  password: string;

  // constructor(private fb: FormBuilder, private router: Router) { }
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  userLogin() {
    let loggedUser: User = {
      email : this.email,
      password : this.password
    };

    this.authService.loginUser(loggedUser);

    this.email = null;
    this.password = null;

  }

}
