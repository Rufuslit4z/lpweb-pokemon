import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  login(userName:string):String{
    this.httpClient.post<Token>('https://lostin70s.com/lpwebfront/api/poke-user/login', {name:userName}).subscribe(
      data=>{
        console.log(data.token);
        return data.token;
      }
    );
    
    return '';
  }
}

export interface Token {
  "token": string;
}
