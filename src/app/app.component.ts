import { Component } from '@angular/core';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  
  constructor(private deezerService : PokemonService){ }
  
  ngOnInit() : void {
    
  }
}

// export interface searchResult {
//   id: number;
//   title: string;
// }

export interface Card {
  _id: string,
  poke_id: number,
  name: string,
  image: string,
  type: string,
  stats: {
    attack: number,
    hp: number,
    speed: number,
    defense: number
  },
  __v: number
}

