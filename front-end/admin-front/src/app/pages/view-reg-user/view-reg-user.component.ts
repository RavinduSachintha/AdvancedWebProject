import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-reg-user',
  templateUrl: './view-reg-user.component.html',
  styleUrls: ['./view-reg-user.component.css']
})
export class ViewRegUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList = [];

  ngOnInit() {
    this.userService.getAllRegUsers().subscribe((result: any) => {
      result.data.forEach(user => {
        this.userList.push(user);
      });
    })
  }

}
