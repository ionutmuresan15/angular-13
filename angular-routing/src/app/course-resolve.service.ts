import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./Services/courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolveService implements Resolve<any>{

    constructor(private coursesService: CoursesService){

    }
    //this method is going to return some data, not like the ohers route guards
    //where the returned value was a boolean
    //we are returning the data returned by the promise, so all the courses array

    //so the resolve route guard allow us to load some data before navigating
    //to the route
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.coursesService.getAllCourses().then((data) => {
            return data;
        });
    }
        
}