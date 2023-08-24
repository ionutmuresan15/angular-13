import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child';

 @ViewChild('dobInput') dateOfBirth !: ElementRef;
 @ViewChild('ageInput') age !: ElementRef;
  // accesing child component in parent class
 @ViewChild(DemoComponent, {static: true}) demo !: DemoComponent;

 calculateAge(){
  
  // creating a Date object which stores the year of the dobInput element
  let birthYear: any  = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
  // creating a Date object which stores the current year
  let currentYear: any = new Date().getFullYear();

  let age = currentYear - birthYear;
  this.age.nativeElement.value = age;

 }
}
