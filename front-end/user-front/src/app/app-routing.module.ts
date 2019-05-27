import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileOverviewComponent } from './pages/user-profile/user-profile-overview/user-profile-overview.component';
import { UserVotedWordsComponent } from './pages/user-profile/user-voted-words/user-voted-words.component';
import { UserSuggestedWordsComponent } from './pages/user-profile/user-suggested-words/user-suggested-words.component';
import { MyProfileComponent } from './pages/user-profile/my-profile/my-profile.component';
import { EditDetailsComponent } from './pages/user-profile/edit-details/edit-details.component';
import { ChangePasswordComponent } from './pages/user-profile/change-password/change-password.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: UserHomeComponent},
  {path: "login", component: UserLoginComponent},
  {path: "register", component: UserRegistrationComponent},
  {
    path: "profile/:id",
    component: UserProfileComponent,
    // canActivate: [AuthGuard],
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

// const routes: Routes = [
//   { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
//   { path: '', redirectTo: 'Pages', pathMatch: 'full' },
//   { path: '**', redirectTo: 'Pages' }
// ];

// const config: ExtraOptions = {
//   useHash: true
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
