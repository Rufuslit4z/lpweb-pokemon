import { UserService } from 'src/app/service/user.service';
import { PokemonService } from './../../service/pokemon.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Card } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

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

  async removeCard(event : any){
    await this.userAPI.setCoins(1);
    event.target.parentNode.remove();
  }

  async addCard(event : any, card : Card){
    await this.userAPI.setCard(card);
    if(event.target.nodeName == "ARTICLE"){
      event.target.parentNode.parentNode.remove();
    } else if(event.target.nodeName == "DIV" || event.target.nodeName == "IMG"){
      event.target.parentNode.parentNode.parentNode.remove();
    } else if(event.target.nodeName == "P") {
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
    }
  }

  async putToUser(card : Card){
    (this.userAPI.getUser())?.deck.push(card);
    console.log(this.userAPI.getUser());
  }
}
