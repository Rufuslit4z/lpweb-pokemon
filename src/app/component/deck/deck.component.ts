import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  user : User | null | undefined;
  cards : Card[] = [];

  constructor(
    private userAPI : UserService,
    private router : Router
    ) { }

  ngOnInit() {
    if(this.userAPI.getUser() == undefined){
      this.router.navigate(['/home/login']);
    } else {
      this.cards = this.userAPI.getDeck();
    }
  }

  filterByAttack(event : any){
    this.cards = this.userAPI.getDeck();
    this.cards = this.cards.filter(e => e.stats.attack >= event.target.value);
  }
}
