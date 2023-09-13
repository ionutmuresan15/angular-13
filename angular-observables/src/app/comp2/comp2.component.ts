import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})

export class Comp2Component {

  enteredText !: string;

  private dataService : DataService;

  constructor(dataService: DataService){
    this.dataService = dataService;
  }

  ngOnInit(){
    this.dataService.dataEmited.subscribe((data) => {
      this.enteredText = data;
    })
  }

}
