import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, filter, interval } from 'rxjs';

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

 /*  myObservable1 = new Observable((observer) => {

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
  }); */

  array1 = [1,2,3,5];
  array2 = ['A','B','C'];

  // OTHER WAYS TO CREATE AN OBSERVABLE

  // 1. Using create method

  // myObservable = Observable.create(() => {
  //   ...
  //   ...
  // })


  // 2. Using word 'of' (has to be imported from rxjs) 
  // - take as many parameters as we need
  // - also is containing the complete type

  // myObservable = of(this.array1, this.array2, 'Hello', 23)


  // 3. Using word 'from' (has to be imported from rxjs)
  // - take only 1 parameter
  // - can be use also to convert a promise into an observable by passing the promise as an argument for 'from' word
  
  // myObservable = from(this.array1)


  // Operators of RxJS

  // The thing from line 63 of code to line 71 of code could be also write in a shorter way
  // just like below

/*   myObservable = from(this.array1).pipe(map((value) => {
    return value*5
  }), filter((value) => {
    return value >= 10
  })) //order of emited values: 1,2,3,5 => 5,10,15,25 => 10,15,25 */

  // this will create a new observable which will emit the values
  // from the observable where we applied the .pipe method, multipled by 5
  // parameter 'value', are the values that the observable where we applied .pipe
  // method will emit, one by one

  // transformedObservable = this.myObservable.pipe(map((value) => {
  //   return value*5
  // }))

  // filter the previous observable based on a condition (value >=2 )

  // transformedObservable2 = this.transformedObservable.pipe(filter((value) => {
  //   return value >= 2
  // }))

  counterSub : any;

  ngOnInit(){
    // to catch the sent (emited) data we have to subscribe to the created Observable
    // in this case the variable 'val' is the data we receive (the data that has been send)

    // first call back function is used to catch the emited (sent) value
    // the second call back function is use to catch the error
    // the third call back function is used when the complete signal of the
    // Observable is emited (when all the packages will be send)
    /* this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert('Observable completed')
    })
 */ 
  }



  // UNSUBSCRIBE FROM OBSERVER

  // creating an observable called counterObservable, which will emit data during 1 min
  counterObservable = interval(1000);
  
  subscribe(){
    // creating an observable called counterObservable, which will emit data during 1 min
    // copying the number Observable into another variable, which will become
    // also an Observable
    this.counterSub = this.counterObservable.subscribe((value) => {
      console.log(value);
     })
  }

  // We have to unsubscribe from an Observer if we dont use it anymore
  // if we are not doing this, the all observers that will start to emit data
  // will run in parallel (at the same time), and the memory of PC will get full
  unsubscribe(){
    this.counterSub.unsubscribe(); 
  }
}
