import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  
  login() {
    this.authService.loginWithGoogle().then((result)=> {
      alert("Hello world !" + result);
    }).catch((error)=> {
      alert("Error occured - " + error);
    })
  }

  logout() {
    this.authService.logout().then(()=>alert("Succeccfully logged out")).catch((error)=>alert("Error occured - " + error))
  }
}
