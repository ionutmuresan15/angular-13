import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';
  displayLoadingIndicator = false;

  constructor(private activatedRoute : ActivatedRoute, 
    private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpsOn(value);
    })

    //we are using the event that are happening behind the scences when we are 
    //navigating from one router to another to can controll the spinner image
    this.router.events.subscribe((navigationEvent) => {
      if(navigationEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true;
      }
      if(navigationEvent instanceof NavigationEnd || navigationEvent instanceof NavigationCancel 
        || navigationEvent instanceof NavigationError){
        this.displayLoadingIndicator = false;
      }
    })
  }

  jumpsOn(section){
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
