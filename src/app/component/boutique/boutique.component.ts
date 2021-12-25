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

  async putToUser(card : Card){
    (this.userAPI.getUser())?.deck.push(card);
    console.log(this.userAPI.getUser());
  }
}
