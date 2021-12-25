import { Card } from './../app.component';
import { User } from './../interfaces/user';
import { UserService } from 'src/app/service/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  API_URL : string = "https://lostin70s.com/lpwebfront/api/pokemon";

  constructor(private http : HttpClient, private user : UserService) { }

  async openBooster() {
    console.log("JE PASSE PAR - openBooster()");
    let booster : Card[] = [];
    for (let i = 0; i < 10; i++) {
      let lst$ = this.http.get<Card>(`${this.API_URL}/${Math.random() * 200}`);
      let lst = await lst$.toPromise() as Card;
      booster.push(lst);
    }
    return booster;
  }
}

