import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?:User;

  url = "https://lostin70s.com/lpwebfront/api/poke-user/";

  constructor(private httpClient : HttpClient) { }

  login(userName:string){
    this.httpClient.post<Token>(this.url+'login', {name:userName}).subscribe(
      data=>{
        this.initUser(data.token)
      }
    );
  }

  initUser(userToken:string){
    this.httpClient.get<User>(this.url + 'user',{
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'token': userToken
         }), 
        })
          .subscribe(
      data=>{
        this.user=data;
        this.getUser();
      }
    );
  }

  getUser(){
    if(this.user != null && this.user != undefined){
      console.log(this.user);
      return this.user;
    }
    return null;
  }
}

