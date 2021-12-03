import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http : HttpClient) { 

  }

  async getRandomPokemon(){
    console.log("JE PASSE PAR - getRandomPomeon()");
    let table : any[] = [];
    for(let i = 0; i < 5 ; i++){
      let lst$ = this.http.get<any[]>(`${this.url}/${Math.random() * 200}`, this.options);
      let lst  = await lst$.toPromise();
      table.push(lst);
    }
    return table;
  }
}
