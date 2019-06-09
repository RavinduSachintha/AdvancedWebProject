import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { AdminUser } from "src/app/models/admin-user";

@Component({
  selector: "app-add-admin",
  templateUrl: "./add-admin.component.html",
  styleUrls: ["./add-admin.component.css"]
})
export class AddAdminComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  submitForm() {
    let admin: AdminUser = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      usertype: "admin",
      joinedDate: Date.now().toString()
    };
    console.log(admin)
    this.userService
      .insertAnAdmin(admin)
      .then(() => {
        alert("successfully added the administrator");
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.name = "";
        this.username = "";
        this.email = "";
        this.password = "";
      });
  }
}
