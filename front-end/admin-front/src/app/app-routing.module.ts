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
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "view-registered-user",
    component: ViewRegUserComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "view-words-and-suggestions",
    component: ViewWordSuggestionComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
