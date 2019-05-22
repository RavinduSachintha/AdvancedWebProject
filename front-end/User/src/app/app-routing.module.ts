import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";
import { SearchWordComponent } from "./search-word/search-word.component";

const routes: Routes = [
  { path: "", redirectTo: "insertword", pathMatch: "full" },
  { path: "viewword/:wordId", component: ViewWordComponent },
  { path: "insertword", component: CRUDwordsComponent },
  {path: "searchWord", component:SearchWordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
