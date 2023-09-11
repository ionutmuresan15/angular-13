import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
 // providers: [EnrollService]
})
export class AngularComponent {
  title = "Angular";

  // Dependency Injectiom - to be able to use object from another class into the
  // class you want
  // in Angular you have to complete the providers in @Component with the class 
  // from where you want to inject the object, or you can do this is app module
  private enrollService : EnrollService;

  constructor(enrollService : EnrollService){
    this.enrollService = enrollService;
  }

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }

}
