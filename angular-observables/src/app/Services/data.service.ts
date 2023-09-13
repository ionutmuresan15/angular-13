import { EventEmitter, Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class DataService{
    // so we can either use Subject, or EventEmitter
    // Subject is working basically like an EventEmitter
    // but is actually an observable so you can only apply 'next' method on it, not 'emit' method

    //dataEmited = new EventEmitter<string>();
    dataEmited = new Subject<string>();

    raisedDataEmittedEvent(data: string){

        //this.dataEmited.emit(data);
        this.dataEmited.next(data);
    }
}