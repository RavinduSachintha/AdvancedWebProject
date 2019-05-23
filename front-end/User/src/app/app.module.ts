import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsOneComponent } from "./cards-one/cards-one.component";
import { ViewWordComponent } from "./view-word/view-word.component";
import { CRUDwordsComponent } from "./crudwords/crudwords.component";
import { HttpBackendRequestService } from "./services/http-backend-request.service";
import { SearchWordComponent } from './search-word/search-word.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsOneComponent,
    ViewWordComponent,
    CRUDwordsComponent,
    SearchWordComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpBackendRequestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
