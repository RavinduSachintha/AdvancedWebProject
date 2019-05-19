import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";

const routes: Routes = [
  { path: "", redirectTo: "insertword", pathMatch: "full" },
  { path: "viewword/:wordid", component: ViewWordComponent },
  { path: "insertword", component: CRUDwordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
