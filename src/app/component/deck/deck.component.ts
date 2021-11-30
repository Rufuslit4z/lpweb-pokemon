import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/app.component';

export interface Album {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  bpm: number;
  artist: {
    id: number;
    name: string;
    link: string;
    picture: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
  };
}

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  bool : boolean = false;
  myPicture : string = "";

  mewtwo : Card = {
    _id: "6065e698bdfd2d235b189803",
    poke_id: 150,
    name: "mewtwo",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    type: "psychic",
    stats: {
      attack: 90,
      hp: 130,
      speed: 106,
      defense: 154
    },
    __v: 0
  };

  data: Album = {
    id: 23,
    title: 'Come As You Are',
    title_short: '',
    duration: 218,
    bpm: 100,
    rank: 785960,
    artist: {
      id: 415,
      name: 'Nirvana',
      picture: 'https://api.deezer.com/artist/415/image',
      link: '',
    },
    album: {
      id: 1262014,
      title: 'Nevermind (Remastered)',
      cover: 'https://api.deezer.com/album/1262014/image',
    },
  };
  
  onClick(){
    if(this.bool == false){
      this.bool = true;
    } else {
      this.bool = false;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
}
