import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// declaring routes
// Ex: localhost:4200/Home will navigate to HomeComponent, and will render its view template

/* Another way of declaring the routes, is declaring them in a separate file, see
   app-routing.module.ts

const appRoute : Routes = [

  //if we use the below line of code like that then when we will style the html elements
  //we will meet a bug, the home link will still have the css class applied even if it's not selected
  //that is happening because '' is the parent of all routes
  //when the child routes are active then the parents routes are also active
  {path: '', component: HomeComponent},
  // another way of writing the above line of code is using redirect
  //{path: '', redirectTo: 'Home', pathMatch : 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  // Obtaining the id introduced in the URL as an argument 
  // (:id is a ROUTE PARAM, colon (:) means that its value can change, 
  // but is required to be present in path definition)
  //{path: 'Courses/Course/:id', component: CourseComponent},
  // the line of code number 33 could be also write using Child Routes
  // For older versions of angular, you have to put <router-outle></router-outlet>
  // inside the parent component, in our case inside CoursesComponent
  {path: 'Courses', children:[
    {path: 'Course/:id', component: CourseComponent}
  ]},

  // below line will render the view template of ErrorComponent
  // if the introduced path will not match any path of the above
  // it always has to be the last path declared, otherwise the paths declared
  // below will not work anymore
  {path: '**', component: ErrorComponent}

  //ABSOLUTE AND RELATIVE PATHS
  // Absolute path: /Home (routerLink="/Home") - it gets appended to the root URL
  // Relative path: Home  (routerLink="Home") - it gets appendeded to the current URL
  // Another example: 
  // if we have routerLink="../../Basic"
  // and we are on the next URL: localhost:4200/Courses/Course/Java then:
  // localhost:4200/Courses/Course/Java => localhost:4200/Courses/Course/
  // => localhost:4200/Courses => localhost:4200/Courses/Basic
  // ../ is meaning that we are moving one level up to the parent path of the current router

]

*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //below line of code let angular to know that, there are existing routes defined by us in variable 'appRoute'
    //RouterModule.forRoot(appRoute)

    //importing the outside file which containg the configuration for the routes
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
