import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  bool : boolean = false;
  myPicture : string = "";
  data : any;

  onClick(){
    if(this.bool == false){
      this.bool = true;
    } else {
      this.bool = false;
    }
  }

  table : any[] = [];

  constructor(
    private pokemonAPI : PokemonService,
    ) { }

  async ngOnInit() {
    this.table = await this.pokemonAPI.getRandomPokemon();
  }

  filterByAttack(){
    this.table = this.table.filter(e => e.stats.attack);
  }
}
