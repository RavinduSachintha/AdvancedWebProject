import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfileService } from '../../../services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user = {
    id : localStorage.getItem('userId'),
    email : localStorage.getItem('email'),
    username : localStorage.getItem('username')
  };

  changepwdForm = this.fb.group ({
    currentpwd: ['', Validators.required],
    newpwd: ['', Validators.required],
    confirmpwd: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   // console.log(this.changepwdForm.value);

  // }
  onSubmit(currentpwd, newpwd) {
    this.userProfileService.changeUserPassword(this.user.id, currentpwd, newpwd)
      .subscribe((result : any) => {
        if(result.status === "success") {
          alert("Password changed successfully");
          this.router.navigate(['../myprofile'], { relativeTo: this.route });
        }
        else {
          alert(result.error + result.status);
        }
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
