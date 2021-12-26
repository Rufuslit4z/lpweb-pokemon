import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user? : User;
  API_URL = "https://lostin70s.com/lpwebfront/api";
  options = {
    headers: {
            'Content-Type': 'application/json',
            token: ''
    }
  };

  constructor(
    private http : HttpClient
  ) { }
  
  async getToken(userName : string, token : Token) : Promise<Token> {
    let data$ = this.http.post<Token>(`${this.API_URL}/poke-user/login`, {name : userName});
    token = (await firstValueFrom(data$));
    return token;
  }

  async setToken(token : Token) : Promise<User> {
    this.options.headers.token = token.token;
    let data$ = this.http.get<User>(`${this.API_URL}/poke-user/user`, this.options);
    return await firstValueFrom(data$);
  }

  async login(userName : string){
    let token : Token = {
      token: ''
    };
    this.user = await this.setToken(await this.getToken(userName, token));
  }

  getUser() : User | undefined {
    return this.user;
  }

  async putUser(){
    let data$ = this.http.put<User>(`${this.API_URL}/poke-user`, this.getUser(), this.options);
    await firstValueFrom(data$);
  }

  async deleteUser(){
    let data$ = this.http.delete<User>(`${this.API_URL}/poke-user`, this.options);
    await firstValueFrom(data$);
  }

  async getCoins() : Promise<number> {
    let data$ = this.http.get<User>(`${this.API_URL}/poke-user/user`, this.options);
    return (await firstValueFrom(data$)).coins;
  }

  async setCoins(value : number){
    this.getUser()!.coins += value;
    await this.putUser();
  }

  async setCard(card : Card){
    this.getUser()?.deck.push(card);
    await this.putUser();
  }

  async setCards(cards : Card[]){
    cards.forEach(e => {
      this.getUser()?.deck.push(e);
    })
    await this.putUser();
  }

  getDeck() : Card[] {
    return this.getUser()!.deck;
  }

  // Au début

  // login(userName:string){
  //   this.http.post<Token>(this.API_URL = "https://lostin70s.com/lpwebfront/api/poke-user/"
  //   +'login', {name:userName}).subscribe(
  //     data=>{
  //       this.initUser(data.token)
  //     }
  //   );
  // }

  // initUser(userToken:string){
  //   this.http.get<User>(this.API_URL = "https://lostin70s.com/lpwebfront/api/poke-user/"
  //   + 'user',{
  //         headers:new HttpHeaders({
  //           'Content-Type': 'application/json',
  //           'token': userToken
  //        }), 
  //       })
  //         .subscribe(
  //     data=>{
  //       this.user=data;
  //       this.getUser();
  //     }
  //   );
  // }

  // getUser(){
  //   if(this.user != null && this.user != undefined){
  //     console.log(this.user);
  //     return this.user;
  //   }
  //   return null;
  // }
}

