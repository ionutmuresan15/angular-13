import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";

// we are creating an interface so we can use canDeactivate on other components
//(pages) as well, because otherwise we can use it only on one compenent(page)
export interface IDeactivateComponent{
    canExit: () => Observable<boolean> | Promise<boolean> | boolean; 
}

// export class CanDeactivateGuardService implements CanDeactivate<ContactComponent>{
    
//     // canDeactivate will let user to leave or either leave the page.
//     // if it returns false then you you will be not able to leave the page
//     // else if it returns true then you will can leave the page
//     // we can apply it on a component (which is actually the web page)
       // Shortly canDeactivate will let us know if we can navigate outside from a route or not
//     canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){

//         return component.canExit();
//     }
// }

export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent>{
    
    // canDeactivate will let user to leave or either leave the page.
    // if it returns false then you you will be not able to leave the page
    // else if it returns true then you will can leave the page
    // we can apply it on a component (which is actually the web page)
    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){

        return component.canExit();
    }
}