import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.id = localStorage.getItem('user');
    this.userService.getUser(this.id).subscribe((Data)=>{
      console.log(Data)
    })
    console.log(this.id)
  }

}
