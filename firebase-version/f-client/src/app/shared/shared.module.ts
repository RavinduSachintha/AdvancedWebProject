import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatGridListModule, MatCardModule]
})
export class SharedModule {}
