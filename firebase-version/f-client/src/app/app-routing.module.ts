import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoadingComponent } from "./shared/loading/loading.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule",
  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  },
  {
    path: "word",
    loadChildren: "./word/word.module#WordModule"
  },
  {
    path: "loading",
    component: LoadingComponent
  },
  {
    path: "**",
    redirectTo: "loading",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
