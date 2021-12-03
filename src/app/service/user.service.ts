import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(text:string){
    return this.httpClient.get<Array<SearchResult>>('https://lostin70s.com/lpwebfront/api/deezer/search?q='+text);
  }
}
