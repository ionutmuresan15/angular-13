import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseComponent } from "./courses/course/course.component";
import { ErrorComponent } from "./error/error.component";
import { CourseGuardService } from "./course-guard.service";
import { CanDeactivateGuardService } from "./candeactivate-guard.service";
import { CourseResolveService } from "./course-resolve.service";

// Another way of creating routes, almost the same how are declared in app.module.ts

const appRoute: Routes = [
  //if we use the below line of code like that then when we will style the html elements
  //we will meet a bug, the home link will still have the css class applied even if it's not selected
  //that is happening because '' is the parent of all routes
  //when the child routes are active then the parents routes are also active
  { path: "", component: HomeComponent },
  // another way of writing the above line of code is using redirect
  //{path: '', redirectTo: 'Home', pathMatch : 'full'},
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", canDeactivate: [CanDeactivateGuardService], component: ContactComponent },
  { path: "Courses", component: CoursesComponent, resolve: {courses: CourseResolveService}},
  // Obtaining the id introduced in the URL as an argument
  // (:id is a ROUTE PARAM, colon (:) means that its value can change,
  // but is required to be present in path definition)
  //{path: 'Courses/Course/:id', component: CourseComponent},
  // the line of code number 33 could be also write using Child Routes
  // For older versions of angular, you have to put <router-outle></router-outlet>
  // inside the parent component, in our case inside CoursesComponent
  {
    path: "Courses", canActivateChild: [CourseGuardService],
     children: [
      { path: "Course/:id", component: CourseComponent }
    ],
  },
  // below line will render the view template of ErrorComponent
  // if the introduced path will not match any path of the above
  // it always has to be the last path declared, otherwise the paths declared
  // below will not work anymore
  { path: "**", component: ErrorComponent },

  //ABSOLUTE AND RELATIVE PATHS
  // Absolute path: /Home (routerLink="/Home") - it gets appended to the root URL
  // Relative path: Home  (routerLink="Home") - it gets appendeded to the current URL
  // Another example:
  // if we have routerLink="../../Basic"
  // and we are on the next URL: localhost:4200/Courses/Course/Java then:
  // localhost:4200/Courses/Course/Java => localhost:4200/Courses/Course/
  // => localhost:4200/Courses => localhost:4200/Courses/Basic
  // ../ is meaning that we are moving one level up to the parent path of the current router
];

@NgModule({
  imports: [
    // enableTracing will log all the navigation events (in dev console) which are 
    //getting trigger when navigating from one route to another
    RouterModule.forRoot(appRoute, {enableTracing: true})
],
  // that's the only difference that we have to export RouterModule
  exports: [
    RouterModule
],
})

export class AppRoutingModule {

}
