import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../candeactivate-guard.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit, IDeactivateComponent {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  firstName;
  lastName;
  country;
  subject;

  canExit() {
    if(this.firstName || this.lastName || this.country || this.subject){
      return confirm("You have unchanged work! Would you like to exit?")
    }
    else{
      return true;
    }
  }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

}
