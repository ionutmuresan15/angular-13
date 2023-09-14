import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private route : Router;
  private activatedRoute : ActivatedRoute;

  constructor(route: Router, activatedRoute: ActivatedRoute) {
    this.route = route;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit(): void {
  }

  navigateToHome(){
    //navigate to route Home (using absolute path by default, but can also use the relative one if we make it to use it)
    this.route.navigate(['Home'], {relativeTo: this.activatedRoute});
    //another way to navigate to route Home (using absolute path by default, but can also use the relative one if we make it to use it)
    //this.route.navigateByUrl('Home');
  }
}
