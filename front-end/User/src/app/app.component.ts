import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User';

  constructor( private router: Router, public authService: AuthenticationService) {}

  gotoUserDashboard() {
    let id = localStorage.getItem('userId');
    this.router.navigate([`/profile/${id}`]);
  }

}
