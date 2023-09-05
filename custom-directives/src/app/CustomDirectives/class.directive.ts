import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   // keyword set is used if you want to declare a method as an @Input
   // the alias appClass which has to be the same as the selector of the directive
   // will tell angular where to look for the property
   // like this our custom directive will look like [ngClass]
   // but is not necessarly to do it
   
  @Input('appClass') set display(value: Object){

    let entries = Object.entries(value);
    for(let entry of entries){
      if(entry[1]){
        this.renderer.addClass(this.element.nativeElement, entry[0])
      }
    }

    // the alternative of how you can re-write the above code, called destroy array

    // for(let [className, condition] of entries){
    //   if(condition){
    //     this.renderer.addClass(this.element.nativeElement, className)
    //   }
    // }

  }   

}
