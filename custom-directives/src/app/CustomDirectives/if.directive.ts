import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  // variable template is the html element from the view where [appIf] is applied
  // in our case is the <div>
  // variable viewContainer is the container inside which the view will be added or
  // removed
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {

   }
   // its only working if we use an alias, or we named the property method same
   // as selector
   @Input('appIf') set displayView(condition: boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.template);
      } else{
        this.viewContainer.clear();
      }
   }
}
