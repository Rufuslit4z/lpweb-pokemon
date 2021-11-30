import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'pokemon';
}

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