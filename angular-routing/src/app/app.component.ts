import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';

  constructor(private activatedRoute : ActivatedRoute){

  }

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpsOn(value);
    })
  }

  jumpsOn(section){
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
  }

}
