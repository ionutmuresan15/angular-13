import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  defaultCountry = 'india';

  firstname !: string;
  lastname !: string;
  email !: string;
  country !: string;
  gen !: string;

  defaultGender = 'Male';

  //working with radio buttons in forms
  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]

  @ViewChild('myForm') form !: NgForm;


  //retrieving data from form, and using the data in view template
  onSubmit() {
    console.log(this.form);
    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'Smith';
    // this.form.value.personDetails.email = 'JohnSmith@example.com';

    // we are using setValue() when we want to set the all properties of the form
    // not only some of them, because we have to provide all the properties inside
    // the parameter of setValue()

    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'JohnSmith@example.com'
    //   }
    // })

    // we are using patchValue() when we want to set only some of the properties of
    // the form, we dont have to provide all the values
    this.form.form.patchValue({
      personDetails: {
            firstname: 'John',
            lastname: 'Smith',
            email: 'JohnSmith@example.com'
          }
    })
  }
}
