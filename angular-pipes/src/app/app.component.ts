import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from './students.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit  {

  title = 'angular-pipes';
  students !: Student[];
  totalMarks !: number;
  _filteredText : string = '';
  filteredStudents : Student[] = [];

  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.students.length);
    }, 2000)
  })
  
  constructor(private studentService: StudentService){

  }

  // we are using getter and setter to can control the input from [(ngModel)]
  // getter is not necessarly there, we are not using it right now
  get filteredText(){
    return this._filteredText;
  }
  
  // setter will be called every time the value in the filter text box (input) will change
  // and the setter will also receive that value
  // so we will get an updated value stored in 'value' variable every time when the filter
  // text box will change
  set filteredText(value: string){
    this._filteredText = value;
    this.filteredStudents = this.filterStudentsByGender(value);
  }

  ngOnInit(){
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

 

  addDummyStudent(){
    let studentsCopy = Object.assign([], this.students)
    studentsCopy.push({name: 'Test', course: 'Test', marks: 520, DOB: new Date(), gender: 'Female'});
    this.students = studentsCopy;
  }

  //creating a filter inside class component
  filterStudentsByGender(filterTerm: string){
    if(this.students.length === 0 || filterTerm === ''){
      return this.students;
    } 
    else{
      this.filteredStudents = this.students.filter((student) => {
      return student.gender.toLocaleLowerCase() === filterTerm.toLocaleLowerCase();  
      })
    }
    return this.filteredStudents;
  }
}
