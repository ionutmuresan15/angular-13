import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './Services/user.service';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
