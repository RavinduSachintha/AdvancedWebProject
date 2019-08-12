import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule"
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
    path: "**",
    redirectTo: "auth/login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
