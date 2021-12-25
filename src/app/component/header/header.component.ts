import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/interfaces/token';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName : string = '';
  @Input() coins : number = 0;

  constructor(
    private userAPI : UserService,
    private router : Router
  ) { }

  ngOnInit() {
    if(this.userAPI.getUser() != undefined) {
      this.userName = this.userAPI.getUser()!.name;
      this.coins = this.userAPI.getUser()!.coins;
    }
  }

  async toDelete(){
    await this.userAPI.deleteUser();
    this.router.navigate(['/home/login']);
  }
}
