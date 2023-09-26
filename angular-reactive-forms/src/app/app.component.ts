import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';

  reactiveForm !: FormGroup;
  formStatus !: any;

  ngOnInit() {
    //creating reactive form, the major difference between Template Drive Forms and
    //Reactive Forms is that, we are creating the 1st one in the html template
    //and the 2nd one in the .ts file
    this.reactiveForm = new FormGroup({
      personalDetalies: new FormGroup({
        //adding custom validators (noSpaceAllowed validator)
        firstname : new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, Validators.required),
        //adding custom async validators (emailNotAllowed validator)
        email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
      }),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([
    
      ])
    });

     // VALUE & STATUS CHANGE EVENTS

    //listening to change value event on an input from the form

    //  this.reactiveForm.get('personalDetailes.firstname')?.valueChanges.
    //  subscribe((value) => {
    //       console.log(value);
    //  })

    //listening to change value event of the whole group, which is reactive form
    //it means every time when we change the input value of a field from this formGroup
    //this opperation will raise valueChanges event

    //  this.reactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    //  })

    //listening to status change event
    //it means the status change event will be raised as long as we want
    //for example if the form is invalid, the value that this event will emit will be
    // 'INVALID', if it is valid then the value will be 'VALID', if it is in pending
    //then the value will be 'PENDING'
    //we have to applied it on formGroup

    this.reactiveForm.statusChanges.subscribe((value) => {
      this.formStatus = value;
    })

    // setValue() and patchValue() methods Reactive Form

    //if we are using setValue() method we have to include all the properties 
    //values even if some of them are not going to change

    // setTimeout(() => {
    //   this.reactiveForm.setValue({
    //     personalDetalies: {
    //       firstname: '',
    //       lastname: '',
    //       email: 'exmaple@gmail.com',
    //     },
    //       gender: '',
    //       country: '',
    //       hobbies: '',
    //       skills: []
    //   })
    // },4000)

    //if we are using patchValue() method we don't have to include all the properties,
    //we only have to include those properties on which we want to change values
    setTimeout(() => {
      this.reactiveForm.patchValue({
        personalDetalies: {
          firstname: 'alabala',
          lastname: '',
          email: 'exmaple@gmail.com',
        },
      })
    },4000)
      
  }

  onSubmit() {
    console.log(this.reactiveForm);
    //reseting the form after pressing submit button
    //this.reactiveForm.reset() will reset all value to empty
    //if we pass an object as his argument containing some values, we can reset
    //the form to this values that we want
    this.reactiveForm.reset({
          personalDetalies: {
            firstname: '',
            lastname: '',
            email: '',
          },
            gender: 'male',
            country: 'india',
            hobbies: '',
            skills: []
        });
  }

  //adding skill in the skills array one by one
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required))
  }

  //custom validator needs a parameter of type AbstractControl and
  //returns an object key-value pair, or null
  noSpaceAllowed(control: AbstractControl): {[key: string]: any} | null{
    //if the firstname input is not null, and contains at least 1 space
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true}
    }
    return null
  }

  //custom async validator
  emailNotAllowed(control: AbstractControl): Promise<any> | Observable<any>{
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'ceva@gmail.com'){
          resolve({emailNotAllowed: true})
        }
        else{
          resolve(null)
        }
      },5000);
    });
    return response;
  }

  // making a reference of the reactiveForm, to can use it in the view template
  // Basically reactiveFormReference will be an FormArray, and like this we can loop
  // over the skills array elements in the view template
  get reactiveFormReference() {
    return this.reactiveForm.get('skills') as FormArray;
  }
  
}
