import { UserService } from 'src/app/service/user.service';
import { PokemonService } from './../../service/pokemon.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit, OnDestroy {

  booster: Card[] = [];
  coins : number = 0;

  constructor(
    private pokemonAPI: PokemonService, 
    private userAPI : UserService,
    private router : Router
  ) { }

  ngOnInit() {
    if(this.userAPI.getUser() == undefined){
      this.router.navigate(['/home/login']);
    }
  }

  ngOnDestroy() {
    if(this.booster.length > 0) {
      this.userAPI.setCards(this.booster);
      // this.booster.forEach(card => {
      //   this.addCard(card);
      // });
    }
  }

  async openBooster() {
    if((await this.userAPI.getCoins() - 10 >= 0)){
      if(this.booster.length > 0) {
        this.userAPI.setCards(this.booster);
        // this.booster.forEach(async card => {
          //   this.addCard(card);
          // });
        }
      this.booster = await this.pokemonAPI.openBooster();
      await this.userAPI.setCoins(-10);
      this.coins = await this.userAPI.getCoins();
    }
  }

  async removeCard(card : Card, event? : any){
    await this.userAPI.setCoins(1);
    this.coins = await this.userAPI.getCoins();
    this.syncCard(card);
    event.target.parentNode.remove();
  }

  syncCard(card : Card){
    this.booster.splice(this.booster.indexOf(card), 1);
  }

  async addCard(card : Card, event? : any){
    await this.userAPI.setCard(card);
    this.syncCard(card);
  }
}
