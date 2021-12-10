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
}

