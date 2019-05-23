import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpBackendRequestService } from '../../services/http-backend-request.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpBackendRequestService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticationService) {}
  
  ngOnInit() {
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
