import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsOneComponent } from './cards-one/cards-one.component';
import { ViewWordComponent } from './view-word/view-word.component';
import { CRUDwordsComponent } from './crudwords/crudwords.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsOneComponent,
    ViewWordComponent,
    CRUDwordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
