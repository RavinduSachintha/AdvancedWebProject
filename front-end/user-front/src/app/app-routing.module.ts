import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileOverviewComponent } from './pages/user-profile/user-profile-overview/user-profile-overview.component';
import { UserVotedWordsComponent } from './pages/user-profile/user-voted-words/user-voted-words.component';
import { UserSuggestedWordsComponent } from './pages/user-profile/user-suggested-words/user-suggested-words.component';
import { MyProfileComponent } from './pages/user-profile/my-profile/my-profile.component';
import { EditDetailsComponent } from './pages/user-profile/edit-details/edit-details.component';
import { ChangePasswordComponent } from './pages/user-profile/change-password/change-password.component';

const routes: Routes = [

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: UserHomeComponent},
  {
    path: "profile/:id",
    component: UserProfileComponent,
    children: [
      {path: "", redirectTo: "overview", pathMatch: "full"},
      {path: "overview", component: UserProfileOverviewComponent},
      {path: "votedwords", component: UserVotedWordsComponent},
      {path: "suggestedwords", component: UserSuggestedWordsComponent},
      {path: "myprofile", component: MyProfileComponent},
      {path: "editdetails", component: EditDetailsComponent},
      {path: "changepassword", component: ChangePasswordComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
