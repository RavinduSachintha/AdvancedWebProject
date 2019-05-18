import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { StatisticsComponent } from "./pages/statistics/statistics.component";
import { ViewRegUserComponent } from "./pages/view-reg-user/view-reg-user.component";
import { ViewWordSuggestionComponent } from "./pages/view-word-suggestion/view-word-suggestion.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthGuard } from "./utils/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "view-registered-user",
    component: ViewRegUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "view-words-and-suggestions",
    component: ViewWordSuggestionComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
