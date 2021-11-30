import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './component/carte/carte.component';
import { DeckComponent } from './component/deck/deck.component';
import { BoutiqueComponent } from './component/boutique/boutique.component';
import { HeaderComponent } from './component/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './component/deck/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    DeckComponent,
    BoutiqueComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
