import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';

  reactiveForm!: FormGroup;

  ngOnInit() {
    //creating reactive form, the major difference between Template Drive Forms and
    //Reactive Forms is that, we are creating the 1st one in the html template
    //and the 2nd one in the .ts file
    this.reactiveForm = new FormGroup({
      personalDetalies: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([
    
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  //adding skill in the skills array one by one
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required))
  }

  // making a reference of the reactiveForm, to can use it in the view template
  // Basically reactiveFormReference will be an FormArray, and like this we can loop
  // over the skills array elements in the view template
  get reactiveFormReference() {
    return this.reactiveForm.get('skills') as FormArray;
  }
}
