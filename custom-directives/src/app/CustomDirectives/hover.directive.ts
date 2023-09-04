import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  private element !: ElementRef;
  private renderer !: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
   }

   // @HostListener used to handle an event
   // So when the 'mouseenter' will happen the code inside
   // the onMouseOver() will get executed
   // same for onMouseOut() method

   // the properties will change on all host elements
   // host elements are those elements where the '[appHover]' attribute is applied
   // check the app.component.html to see it

   @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '5px 10px');
   }

   @HostListener('mouseleave') onMouseOut(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '5px 10px');
   }

}
