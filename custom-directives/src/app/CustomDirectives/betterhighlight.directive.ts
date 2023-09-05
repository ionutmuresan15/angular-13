import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  private element !: ElementRef;
  private renderer !: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {

    this.element = element;
    this.renderer = renderer;

   }
   
   // We can also use custom binding to bind the directive properties
   // So below we bind the properties in the directive using the
   // the component (check app.component.html)
  @Input() defaultColor: string = '';
  @Input() highlightColor: string = '';

   // @HostBinding is binding a style property into a variable
   // Ex: Below the style.background property is binded in background variable
   // so what value the background variable will take, the style.background
   // will also take that value
   @HostBinding('style.background') background: string = this.defaultColor;
   @HostBinding('style.border') border: string = 'none';

   ngOnInit(){
    this.background = this.defaultColor;
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.background = this.defaultColor;
    this.border = 'none';
   }


}
