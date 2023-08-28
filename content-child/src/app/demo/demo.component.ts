import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit{

  // accesing elements from the view template of parent class
  @ContentChild('paragraph') paragraphElement !: ElementRef;


  ngOnInit(){
    console.log(this.paragraphElement);
  }

  // we can see the result in console using ngAfterContentInit
  // that s how @ContentChild and @ViewChild only work
  // if we use ngOnInit we will get undefined in console
  ngAfterContentInit(){
    console.log(this.paragraphElement);
    console.log(this.paragraphElement.nativeElement.textContent);
  }
}
