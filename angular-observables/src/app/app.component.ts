import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observables';

  // difference between Observable and Promise is that a Promise will return
  // a response containing all data, but Observable will return data in packages
  // which means the response will be build containing packages of data, until
  // the all data will be returned


  // creating an observer which emits data we want
  // in our case the observer emits the strings "1","2"....
  // observer sends data in packages, that means the first data will be sends
  // after that the second package of data will be send, etc.
  // to simulate how data will be send, we added a timeout of 1,2,3,4,5 seconds

  myObservable = new Observable((observer) => {

    console.log('Observable starts.')
    setTimeout(() => {observer.next("1")}, 1000)
    setTimeout(() => {observer.next("2")}, 2000)
    setTimeout(() => {observer.next("3")}, 3000)
    // every line of code that will be after the error, will not get executed anymore
    setTimeout(() => {observer.error(new Error('Something went wrong!'))}, 3000)
    setTimeout(() => {observer.next("4")}, 4000)
    setTimeout(() => {observer.next("5")}, 5000)
    // same for complete, every line of code that will be after the complete, will not get executed anymore
    setTimeout(() => {observer.complete()}, 6000)
  });

  ngOnInit(){
    // to catch the sent (emited) data we have to subscribe to the created Observable
    // in this case the variable 'val' is the data we receive (the data that has been send)

    // first call back function is used to catch the emited (sent) value
    // the second call back function is use to catch the error
    // the third call back function is used when the complete signal of the
    // Observable is emited (when all the packages will be send)
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert('Observable completed')
    })
  }

}
