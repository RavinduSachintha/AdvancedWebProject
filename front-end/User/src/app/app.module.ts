import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsOneComponent } from "./cards-one/cards-one.component";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";
import { HttpBackendRequestService } from "./services/http-backend-request.service";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsOneComponent,
    ViewWordComponent,
    CRUDwordsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpBackendRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
