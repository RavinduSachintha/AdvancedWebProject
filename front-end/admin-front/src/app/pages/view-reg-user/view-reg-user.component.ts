import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";
import * as $ from "jquery";

declare var $: $;

export interface User {
  name: string;
  username: string;
  email: string;
  usertype: string;
  profession: string;
  birthday: string;
  joinedDate: string;
}

@Component({
  selector: "app-view-reg-user",
  templateUrl: "./view-reg-user.component.html",
  styleUrls: ["./view-reg-user.component.css"]
})
export class ViewRegUserComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  userList = [];
  selectedUser: User = {
    name: "",
    username: "",
    email: "",
    usertype: "",
    profession: "",
    birthday: "",
    joinedDate: ""
  };

  getUsersSub: Subscription;
  searchUserSub: Subscription;

  // for pagination
  p: number = 1;

  ngOnInit() {
    this.getUsersSub = this.userService
      .getAllRegUsers()
      .subscribe((result: any) => {
        for (const user of result.data) {
          // console.log(user)
          if(user.usertype != "super-admin"){
            this.userList.push(user);
          }
        }
      });
  }

  searchUser(username: string) {
    this.userList = [];
    this.searchUserSub = this.userService
      .getRegUserByUsername(username)
      .subscribe((result: any) => {
        if (result.status == "success" && result.data != null) {
          result.data.forEach(item => {
            this.userList.push(item);
          });
        }
      });
  }

  ngOnDestroy() {
    this.userList = [];
    this.getUsersSub.unsubscribe();
    // this.searchUserSub.unsubscribe();
  }

  openViewModal(index: number) {
    this.selectedUser = this.userList[index];
    $("#viewModel").modal();
  }

  isSuperAdminUser() {
    return localStorage.getItem("userType") == "super-admin";
  }

  deleteUser(index: number) {
    if (confirm("Proceed the deletion ?")) {
      this.userService
        .deleteUser(this.userList[index]._id)
        .subscribe((result: any) => {
          if (result.status == "success" && result.data != null) {
            alert(
              "The user of " +
                result.data.name +
                " have been successfully deleted."
            );
            location.reload();
          } else {
            console.log("Error " + result.error);
          }
        });
    }
  }
}
