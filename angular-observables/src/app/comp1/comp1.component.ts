import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  
  inputText !: string;

  private dataService : DataService;

  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  onButtonClicked(){
    this.dataService.raisedDataEmittedEvent(this.inputText);
  }
}
