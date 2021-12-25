import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '../interfaces/token';
import { User, UserDelete } from '../interfaces/user';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Card } from '../app.component';

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
    console.log("--- getToken ---");
    let data$ = this.http.post<Token>(`${this.API_URL}/poke-user/login`, {name : userName});
    token = (await firstValueFrom(data$));
    // console.log(token);
    return token;
  }

  async setToken(token : Token) : Promise<User> {
    console.log("--- setToken ---");
    this.options.headers.token = token.token;
    // console.log(this.options);
    let data$ = this.http.get<User>(`${this.API_URL}/poke-user/user`, this.options);
    return await firstValueFrom(data$);
  }

  async login(userName : string){
    console.log("--- login ---");
    let token : Token = {
      token: ''
    };
    this.user = await this.setToken(await this.getToken(userName, token));
  }

  getUser() : User | undefined {
    console.log("--- getUser ---");
    return this.user;
  }

  async putUser(){
    console.log("--- setUser ---");
    let data$ = this.http.put<User>(`${this.API_URL}/poke-user`, this.getUser(), this.options);
    await firstValueFrom(data$);
  }

  async deleteUser(){
    console.log("--- deleteUser ---");
    let data$ = this.http.delete<UserDelete>(`${this.API_URL}/poke-user`, this.options);
    await firstValueFrom(data$);
  }

  async getCoins(){
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

  getDeck(){
    return this.getUser()!.deck;
  }
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

