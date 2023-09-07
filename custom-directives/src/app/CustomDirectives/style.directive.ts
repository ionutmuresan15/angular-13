import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
   // creating custom [ngStyle]
   @Input('appStyle') set setStyle(style: Object){

      let entries = Object.entries(style);
      for(let entry of entries){
        this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
      }
   }
}
