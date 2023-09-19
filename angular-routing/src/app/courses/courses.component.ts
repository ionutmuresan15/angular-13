import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private coursesService : CoursesService;

  constructor(coursesService: CoursesService, private route: ActivatedRoute) {
    this.coursesService = coursesService;
   }

  courses : { id : number, name : string, author : string, duration : number, type : string, 
              price: number, ratings: number, image : string, description: string }[] = [];

  ngOnInit(): void {
    //this.courses = this.coursesService.courses;

    //getAllCourses() is returning a promise which will provide the nedeed data
    //so we can call 'then' method on it, and receive that data, storing in after
    //in 'courses' array.
    // this.coursesService.getAllCourses().then((data) => {
    //   this.courses = data;
    // })

    // in practice we dont use it, instead we are using a loading image, in case
    // the respinse from the server takes to much 
    this.courses = this.route.snapshot.data['courses'];
  }

}
