import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'user-front';

  constructor(private router: Router, public authService: AuthenticationService) {}

  gotoUserDashboard() {
    let id = JSON.parse(localStorage.getItem('user'))._id;
    this.router.navigate([`/profile/${id}`]);
  }

}
