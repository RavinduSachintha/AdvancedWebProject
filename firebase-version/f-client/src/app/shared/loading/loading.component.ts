import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.redirect(),2000);
    
  }

  redirect() {
    if(!this.authService.isLogged()) {
      this.router.navigate(["auth/login"]);
    } else {
      this.router.navigate(["user/home"]);
    }
  }

}
