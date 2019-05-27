import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsOneComponent } from "./cards-one/cards-one.component";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";
import { HttpBackendRequestService } from "./services/http-backend-request.service";
import { SearchWordComponent } from './search-word/search-word.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './services/authentication.service';

import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserProfileOverviewComponent } from './pages/user-profile/user-profile-overview/user-profile-overview.component';
import { UserVotedWordsComponent } from './pages/user-profile/user-voted-words/user-voted-words.component';
import { UserSuggestedWordsComponent } from './pages/user-profile/user-suggested-words/user-suggested-words.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MyProfileComponent } from './pages/user-profile/my-profile/my-profile.component';
import { EditDetailsComponent } from './pages/user-profile/edit-details/edit-details.component';
import { ChangePasswordComponent } from './pages/user-profile/change-password/change-password.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';
import { UserProfileService } from './services/user-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsOneComponent,
    ViewWordComponent,
    CRUDwordsComponent,
    SearchWordComponent,
    LoginComponent,
    UserProfileComponent,
    UserHomeComponent,
    UserProfileOverviewComponent,
    UserVotedWordsComponent,
    UserSuggestedWordsComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    EditDetailsComponent,
    ChangePasswordComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [BrowserModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpBackendRequestService, AuthenticationService, AuthGuard, UserProfileService],
  bootstrap: [AppComponent],
  exports:[CardsComponent,CardsOneComponent]
})
export class AppModule {}
