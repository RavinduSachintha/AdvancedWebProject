import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import {
  ButtonsModule,
  CarouselModule,
  MDBBootstrapModule,
  WavesModule
} from 'angular-bootstrap-md';

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

import { ComponentInteractionsService } from './component-interactions.service';
import { HttpBackendRequestService } from './service/http-backend-request.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './auth.guard';
import { UserProfileService } from './service/user-profile.service';


@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    ButtonsModule,
    MDBBootstrapModule,
    WavesModule
  ],
  providers: [ComponentInteractionsService, HttpBackendRequestService, AuthenticationService, AuthGuard, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
