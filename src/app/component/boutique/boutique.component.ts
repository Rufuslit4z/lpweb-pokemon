import { PokemonService } from './../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  constructor(private pokemonAPI: PokemonService) { }
  table: any[]=[];

  async openBooster() {
    this.table = await this.pokemonAPI.getRandomPokemon();
  }

  ngOnInit(): void {
  }

}
