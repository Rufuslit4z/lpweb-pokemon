import { UserService } from 'src/app/service/user.service';
import { PokemonService } from './../../service/pokemon.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit, OnDestroy {

  booster: Card[] = [];
  
  constructor(
    private pokemonAPI: PokemonService, 
    private userAPI : UserService,
    private router : Router
  ) { }

  async openBooster() {
    this.booster = await this.pokemonAPI.openBooster();
    await this.userAPI.setCoins(-10);
  }

  ngOnInit() {
    if(this.userAPI.getUser() == undefined){
      this.router.navigate(['/home/login']);
    }
  }

  ngOnDestroy() {
    if(this.booster.length > 0) {
      this.booster.forEach(card => {
        this.addCard(card);
      });
    }
  }

  async removeCard(card : Card, event? : any){
    await this.userAPI.setCoins(1);
    this.syncCard(card);
    event.target.parentNode.remove();
  }

  syncCard(card : Card){
    this.booster.splice(this.booster.indexOf(card), this.booster.indexOf(card));
  }

  async addCard(card : Card, event? : any){
    if(event != undefined){
      await this.userAPI.setCard(card);
      this.syncCard(card);
      if(event.target.nodeName == "ARTICLE"){
        event.target.parentNode.parentNode.remove();
      } else if(event.target.nodeName == "DIV" || event.target.nodeName == "IMG"){
        event.target.parentNode.parentNode.parentNode.remove();
      } else if(event.target.nodeName == "P") {
        event.target.parentNode.parentNode.parentNode.parentNode.remove();
      }
    } else {
      await this.userAPI.setCard(card);
      this.syncCard(card);
    }
  }
}
