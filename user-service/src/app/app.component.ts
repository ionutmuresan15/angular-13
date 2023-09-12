import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'user-service';
  userService: UserService;

  constructor(userService: UserService){
    this.userService = userService;
  }

  users: {name: string, status: string}[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
}
