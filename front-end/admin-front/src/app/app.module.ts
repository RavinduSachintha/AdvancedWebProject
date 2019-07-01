import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import { HttpBackendRequestService } from "./services/http-backend-request.service";
import { AuthenticationService } from "./services/authentication.service";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ViewRegUserComponent } from './pages/view-reg-user/view-reg-user.component';
import { ViewWordSuggestionComponent } from './pages/view-word-suggestion/view-word-suggestion.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InsertWordComponent } from './pages/insert-word/insert-word.component';
import { WordRoundsComponent } from './pages/word-rounds/word-rounds.component';
import { AddAdminComponent } from './pages/add-admin/add-admin.component';
import { RankingCriteriaComponent } from './pages/ranking-criteria/ranking-criteria.component';
import { ChangeDetailsComponent } from './pages/change-details/change-details.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NavBarComponent, SideBarComponent, StatisticsComponent, ViewRegUserComponent, ViewWordSuggestionComponent, ProfileComponent, BreadcrumbComponent, InsertWordComponent, WordRoundsComponent, AddAdminComponent, RankingCriteriaComponent, ChangeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgxPaginationModule],
  providers: [HttpBackendRequestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
