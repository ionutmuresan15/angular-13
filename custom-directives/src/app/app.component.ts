import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directives';

  active: boolean = true;

  display: boolean = false;

  occupation: string = 'teacher';

  displayNotice(){
    this.display  = true;
  }
}
