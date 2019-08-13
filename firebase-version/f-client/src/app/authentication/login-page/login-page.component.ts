import { Component, OnInit, NgZone } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) {}

  ngOnInit() {}

  signInByGoogle() {
    this.authService.loginWithGoogle().then(() => {
      this.ngZone.run(()=>this.router.navigate(["loading"]).then());
    });
  }
}
