import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserProfileService } from 'src/app/service/user-profile.service';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  profileForm = this.fb.group ({
    name: ['', Validators.required],
    username: ['', Validators.required],
    birthday: ['', Validators.required],
    profession: ['', Validators.required]
  });

  id = JSON.parse(localStorage.getItem('user'))._id;

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService) { }

  ngOnInit() {
  }

  onSubmit(name, username, birthday, profession) {
    this.userProfileService.editUserProfileDetails(this.id, name, username, birthday, profession)
      .subscribe(() => {
        alert("Details updated successfully");
      });
  }

}
