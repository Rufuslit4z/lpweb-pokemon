import { UserService } from 'src/app/service/user.service';
import { PokemonService } from './../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/app.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  constructor(private pokemonAPI: PokemonService, private user : UserService) { }
  booster: Card[] = [];

  async openBooster() {
    this.booster = await this.pokemonAPI.openBooster();
  }

  ngOnInit(): void {
  }

  async putToUser(card : Card){
    // (await this.user.getUser())?.deck.push(card);
    // console.log(this.user.getUser());
  }
}
