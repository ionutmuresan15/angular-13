import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router){

    }

    // canActivate is a route guard. It means that we can use it on a path to let the
    // user acces it or to forbid his acces on that path.
    // canActivate returns 2 boolean values, it can also return an observable:
    // true = acces; false = forbidden
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['Home']);
            return false;
        }
    }
    
    // canActivateChild is similar to canActivate
    // the difference between canActivatChild and canActivate is that when we use
    // canActivate route guard on a router(path) that route guard is only applied on that router,
    // it is not applied on his child routes, but when we use canActivateChild route guard
    // on a route, in that case that route guard will get applied to all child routes.
    // OBS: canActivateChild will not get applied on the parent route(path), even if you have to declare it there
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state);
    }

}