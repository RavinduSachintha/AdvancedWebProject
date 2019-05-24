import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'user-front';

  constructor(private userService: UserService, private router: Router, public authService: AuthenticationService) {}

  getOneUserProfile(id) {
    this.router.navigate([`/profile/${id}`]);
  }

}
