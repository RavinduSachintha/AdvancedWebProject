import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // $('[data-toggle="tooltip"]').tooltip();
    // $(".preloader").fadeOut();
    // ==============================================================
    // Login and Recover Password
    // ==============================================================
    $("#to-recover").on("click", function() {
      $("#loginform").slideUp();
      $("#recoverform").fadeIn();
    });
    $("#to-login").click(function() {
      $("#recoverform").hide();
      $("#loginform").fadeIn();
    });
  }

  submitLoginForm() {
    let authUser: User = {
      email: this.email,
      password: this.password
    };

    this.authService.loginUser(authUser);

    this.email = null;
    this.password = null;
  }

}
