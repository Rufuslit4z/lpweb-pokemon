import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = "";

  constructor(private userService: UserService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  login() {
    if(this.name != null && this.name != undefined && this.name != ""){
      this.userService.login(this.name!);
      this.router.navigate(["home/deck"]);
    }
  }
}
