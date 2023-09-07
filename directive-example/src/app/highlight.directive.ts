import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   // checking if the condition from app.component.html is true
   // (video with the most likes)
   // if so then apply a css class on the html element.
   
   @Input() set appHighlight(condition: boolean){
    if(condition){
      this.renderer.addClass(this.element.nativeElement, 'highlight')
    }
   }

}
