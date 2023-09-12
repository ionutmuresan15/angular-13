import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  userService: UserService;

  constructor(userService: UserService){
    this.userService = userService;
  }

  user !: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

  ngOnInit(){

    // parameter 'data' is the data that we receive when the event is raised
    // we have to subscribe to this data
    this.userService.onShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
     
      // it's only working like this
      this.user = data;

      // it's not working like this
      
      // this.user.name = data.name;
      // this.user.job = data.job;
      // this.user.gender = data.gender;
      // this.user.country = data.country;
      // this.user.age = data.age;
      // this.user.avatar = data.avatar;
    })

  }

}
