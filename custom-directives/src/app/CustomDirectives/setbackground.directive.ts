import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]' 
})

export class SetBackgroundDirective implements OnInit{

    //private element !: ElementRef;
    // shortcut for the above line is presented in line 12

    constructor(private element: ElementRef){
        // element.nativeElement.style.backgroundColor = '#C8E6C9';
        this.element = element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#C8E6C9';
    }

}