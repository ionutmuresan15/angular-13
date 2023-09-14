import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

}
