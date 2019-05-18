import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'user-front';

  constructor(private userService: UserService, private router: Router) {}

  getOneUserProfile(id) {
    this.router.navigate([`/profile/${id}`]);
  }

}
