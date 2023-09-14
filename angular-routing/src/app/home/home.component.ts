import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private coursesService : CoursesService;

  constructor(coursesService: CoursesService) {
    this.coursesService = coursesService;
   }

   courses : { id : number, name : string, author : string, duration : number, type : string, 
               price: number, ratings: number, image : string, description: string }[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

}
