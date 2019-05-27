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

  profileForm = this.fb.group ({
    name: ['', Validators.required],
    username: ['', Validators.required],
    birthday: ['', Validators.required],
    profession: ['', Validators.required]
  });

  id = JSON.parse(localStorage.getItem('user'))._id;

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(name, username, birthday, profession) {
    this.userProfileService.editUserProfileDetails(this.id, name, username, birthday, profession)
      .subscribe(() => {
        alert("Details updated successfully");
        this.router.navigate(['../myprofile'], { relativeTo: this.route });
      });
  }

}
