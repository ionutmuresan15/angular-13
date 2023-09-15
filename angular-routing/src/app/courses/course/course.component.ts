import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private coursesService : CoursesService, private router: Router) { 

  }

  course : { id : number, name : string, author : string, duration : number, type : string, 
             price: number, ratings: number, image : string, description: string };

  courseId : string = '';

  editMode : boolean = false;

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

    // Retrieving queryParams from the Observable using snapshot 
    // (it will not work because we are using ngOnInit, and it will get executed
    // only once and that is when component is fully initialized, so when the
    // component is initialized at that time the queryParam was not there)
    // In conclusin: the expression will be NULL, converted in Boolean that
    // is meaning FALSE so the variable editMode will take value FALSE

    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));

    // Retrieving queryParams from the Observable using OBSERVABLE (best approach)

    // so since we have subscribed to an observable, whenever the value of this
    // observable will change that value will pe assing to editMode
    // so every time when the value of variable 'param' will change
    // then the editMode variable will get updated
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    })
    console.log(this.editMode);

  }

  // It is a good practice to unsubscribe from the Observer
  // even if Angular will take care of that
  ngOnDestroy(){
    this.routeParameterObservable.unsubscribe();
  }

  appendQueryParam(){
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}});
  }

}
