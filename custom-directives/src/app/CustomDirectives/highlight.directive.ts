import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // private element !: ElementRef;
  // private renderer !: Renderer2;

  // shortcut to can acces the element outside the constructor
  constructor(private element: ElementRef, private renderer: Renderer2) {

    // this.element = element;
    // this.renderer = renderer;

   }

   // Renderer2 allows us to manipulate the DOM elements without accesing the
   // DOM directly, so it provides a layer of abstraction between the DOM element
   // and the component code.
   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'THIS IS TITLE.');
   }

}
