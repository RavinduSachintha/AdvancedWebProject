import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WordInsertPageComponent } from "./word-insert-page/word-insert-page.component";

const routes: Routes = [
  {
    path: "insertion",
    component: WordInsertPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordRoutingModule {}
