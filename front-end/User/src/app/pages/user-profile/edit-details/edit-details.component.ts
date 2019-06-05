import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserProfileService } from '../../../services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  user = {
    email : localStorage.getItem('email'),
    username : localStorage.getItem('username'),
    userLevel : localStorage.getItem('userLevel'),
    joinedDate : localStorage.getItem('joinedDate'),
    name : localStorage.getItem('name'),
    profession : localStorage.getItem('profession'),
    birthday : localStorage.getItem('birthday')
  };

  profileForm = this.fb.group ({
    name: ['', Validators.required],
    username: ['', Validators.required],
    birthday: ['', Validators.required],
    profession: ['', Validators.required]
  });

  id = localStorage.getItem('userId');

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(name, username, birthday, profession) {
    this.userProfileService.editUserProfileDetails(this.id, name, username, birthday, profession)
      .subscribe((user : any) => {
        if(user.status === "success") {
          localStorage.setItem('name', name);
          localStorage.setItem('username', username);
          localStorage.setItem('birthday', birthday);
          localStorage.setItem('profession', profession);
          alert("Details updated successfully");
          this.router.navigate(['../myprofile'], { relativeTo: this.route }).then(() => {window.location.reload();});
        }
        else {
          alert(user.status);
        }
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
