import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit,AfterViewChecked, OnDestroy {

  @Input() value : string = 'proacademy';

  // constructor is called as long as you are using this component selector
  // For example we only use one time <app-demo><app-demo> in the app.component.html
  // Every property which is in the constructor body will have the initial value
  // For example property value will have the initial value assigned which 
  // is 'proacademy' when we console.log it inside the constructor body
  constructor(){
    console.log('demo constructor!');
    //console.log(this.value);
  }

  // Gets called every time when the angular app runs and
  // ngOnChanges is called every time when we do changes on something
  // For example every time when we enter some text in the input field
  // the ngOnChanges will be called.
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges is called!');
    console.log(change);
  }

  // Gets called every time when the angular app runs and
  // ngOnInit is used to change the initial value of a propery
  // For example property value, inside the ngOnInit body will have the value
  // from the input html element
  ngOnInit(){
    console.log('ngOnInit is called!');
    //console.log(this.value);
  }

  // Gets called every time when the angular app runs and
  // Gets called every time when an event is happening 
  // (when change detection cycle runs, so for every time when is identifying a change in the angular app)
  // For example if we press a button the ngDoCheck life-cycle is called
  // Even if the button is not doing anything the ngDoCheck will still be called
  ngDoCheck(){
    console.log('ngDoCheck is called!');
  }

  // Gets called only during the first change detection cycle
  // It's gets called only the first time the projected contents is changing,
  // if its value changes the ngAfterContentInit will not be called the 2nd or 3rd time
  ngAfterContentInit(){
    console.log('ngAfterContentInit is called!');
  }

  // Gets called for each change detection cycle
  // It's gets called every time the projected contents is changing
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called!');
  }

  // Gets called only one time during the change detection cycle
  // Gets called when the component view and the view of all children component
  // are fully initialized
  ngAfterViewInit(){
    console.log('ngAfterViewInit is called!');
  }

  // Gets called for every change in the view
  // Gets called when the component view and the view of all children component
  // are fully initialized
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked is called');
  }

  // Gets called before the component or the directive gets destroyed
  // For example: if we have a structural directive (*ngIf) and the condition
  // inside this will be false, then de html element will not be rendered
  // so it will be destroyed
  ngOnDestroy(){
    console.log('ngOnDestroy is called');
  }

}
