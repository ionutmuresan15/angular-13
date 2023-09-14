import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private coursesService : CoursesService) { 

  }

  course : { id : number, name : string, author : string, duration : number, type : string, 
             price: number, ratings: number, image : string, description: string };

  courseId : string = '';

  routeParameterObservable;

  ngOnInit(): void {
    //Obtaining the id from the URL in the variable courseID
    //Ex: localhost:4200/Courses/Course/101 => courseId = 101;
    //this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    //Getting the course from CoursesService
    //this.course = this.coursesService.courses.find(course => course.id.toString() === this.courseId);

    //another way of doing the above things, the old aproach 
    // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.course = this.coursesService.courses.find(course => course.id.toString() === this.courseId);

    // The above things are not the recomanded way to do this thing.
    // The snapshot property does not return the updated value of route parameter
    // (because we are using it inside OnInit, so the course component will get instantiated
    // only 1 time, and will keep the initial value of the id forever - this.courseId will remain the same forever)

    // The best way to do this is using Observable (like this you will not get any bugs)
    this.routeParameterObservable = this.activatedRoute.paramMap.subscribe((parameter) => {
      this.courseId = parameter.get('id');
      this.course = this.coursesService.courses.find(course => course.id.toString() === this.courseId);
    })

  }

  // It is a good practice to unsubscribe from the Observer
  // even if Angular will take care of that
  ngOnDestroy(){
    this.routeParameterObservable.unsubscribe();
  }

}
