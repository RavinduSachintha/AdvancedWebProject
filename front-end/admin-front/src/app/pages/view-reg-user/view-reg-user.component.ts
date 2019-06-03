import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-reg-user",
  templateUrl: "./view-reg-user.component.html",
  styleUrls: ["./view-reg-user.component.css"]
})
export class ViewRegUserComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  userList = [];

  getUsersSub: Subscription;
  searchUserSub: Subscription;

  ngOnInit() {
    this.getUsersSub = this.userService
      .getAllRegUsers()
      .subscribe((result: any) => {
        for (const user of result.data) {
          this.userList.push(user);
        }
      });
  }

  searchUser(username: string) {
    this.userList = [];
    this.searchUserSub = this.userService
      .getRegUserByUsername(username)
      .subscribe((result: any) => {
        if (result.status == "success" && result.data != null) {
          this.userList.push(result.data);
        }
      });
  }

  ngOnDestroy() {
    this.getUsersSub.unsubscribe();
    this.searchUserSub.unsubscribe();
  }
}
