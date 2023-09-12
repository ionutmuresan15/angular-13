import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent {

  userService: UserService;

  constructor(userService: UserService){
    this.userService = userService;
  }

  username: string = '';
  status: string = '';

  addUser(){
    this.userService.addNewUser(this.username, this.status);
  }

}
