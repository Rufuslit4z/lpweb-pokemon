import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url : string = "https://lostin70s.com/lpwebfront/api/pokemon";

  options = 
  {
    headers: {

    }
  }

  constructor(private http : HttpClient) { }

  async getDeck(){
    this.getRandomPokemon();
    
  }

  async getRandomPokemon(){
    console.log("JE PASSE PAR - getRandomPokemon()");
    let table : any[] = [];
    for(let i = 0; i < 5 ; i++){
      let lst$ = this.http.get<Card>(`${this.url}/${Math.random() * 200}`, this.options);
      let lst  = await lst$.toPromise();
      table.push(lst);
    }
    return table;
  }
<<<<<<< HEAD
=======

  async openBooster(){
    console.log("JE PASSE PAR - getRandomPokemon()");
    let table : any[] = [];
    for(let i = 0; i < 10 ; i++){
      let lst$ = this.http.get<Card>(`${this.url}/${Math.random() * 200}`, this.options);
      let lst  = await lst$.toPromise();
      table.push(lst);
    }
    return table;
  }

  // search(text: string){
  //   return this.http.get<Array<searchResult>>(`https://lostin70s.com/lpwebfront/api/deezer/search?q=${text}`);
  // }

  // track(id: number){
  //   return this.http.get(`https://lostin70s.com/lpwebfront/api/deezer/track/${id}`);
  // }
>>>>>>> 973a8ef55b42bacdc85b5be14791c624c4480b2c
}

