import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name : string = "";

  constructor(
    private userService : UserService,
    private router : Router,
    private aroute : ActivatedRoute
    ) {}

  ngOnInit(): void {
    // this.aroute.queryParams.subscribe((data) => {
    //   alert(JSON.stringify(data));
    // });
  }

  async login() {
    await this.userService.login(this.name);
    // if(this.name != null && this.name != undefined && this.name != ""){
    //   // this.userService.login(this.name!);
    //   await this.userService.setToken(await this.userService.getToken(this.name));
      this.router.navigate(["home/deck"]);
    // }
  }
}
