import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './component/deck/deck.component';
import { BoutiqueComponent } from './component/boutique/boutique.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './component/deck/card/card.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    HeaderComponent,
    LoginComponent,
    DeckComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
