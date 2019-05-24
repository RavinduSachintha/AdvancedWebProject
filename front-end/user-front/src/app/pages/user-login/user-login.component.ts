import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // loginForm: FormGroup;
  username: String;
  password: String;

  // constructor(private fb: FormBuilder, private router: Router) { }
  constructor() { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  userLogin() {
    let loggedUser: User = {
      username : this.username,
      password : this.password
    };

    console.log(loggedUser);

  }

}
