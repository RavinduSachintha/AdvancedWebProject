import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";
import { SearchWordComponent } from "./search-word/search-word.component";
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserAddedWordsComponent } from './pages/user-profile/user-added-words/user-added-words.component';
import { UserSuggestedWordsComponent } from './pages/user-profile/user-suggested-words/user-suggested-words.component';
import { MyProfileComponent } from './pages/user-profile/my-profile/my-profile.component';
import { EditDetailsComponent } from './pages/user-profile/edit-details/edit-details.component';
import { ChangePasswordComponent } from './pages/user-profile/change-password/change-password.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';
import { UserCommentsComponent } from './pages/user-profile/user-comments/user-comments.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: "login" , component: LoginComponent },

  { path: "viewword/:wordId", component: ViewWordComponent },
  {
    path: "insertword",
    component: CRUDwordsComponent,
    canActivate: [AuthGuard]
  },
  {path: "searchWord", component:SearchWordComponent},
  {path: "home", component: UserHomeComponent},
  {path: "login", component: UserLoginComponent},
  {path: "register", component: UserRegistrationComponent},
  {
    path: "profile/:id",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {path: "", redirectTo: "myprofile", pathMatch: "full"},
      {path: "addedwords", component: UserAddedWordsComponent},
      {path: "suggestedwords", component: UserSuggestedWordsComponent},
      {path: "mycomments", component: UserCommentsComponent},
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
export class AppRoutingModule {}
